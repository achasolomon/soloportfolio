// Run against a local production server with an isolated Chrome CDP session.
// Example: node scripts/check-preview.mjs
import { writeFile, mkdir } from "node:fs/promises";

const base = "http://127.0.0.1:3218";
const tabs = await (await fetch("http://127.0.0.1:9333/json/list")).json();
const tab = tabs.find(item => item.type === "page");
if (!tab) throw new Error("No browser page available");
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});
let id = 0;
const pending = new Map();
const errors = [];
socket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.exceptionThrown") errors.push(message.params.exceptionDetails.text);
  if (!message.id) return;
  const task = pending.get(message.id);
  if (!task) return;
  pending.delete(message.id);
  if (message.error) task.reject(new Error(message.error.message));
  else task.resolve(message.result);
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const key = ++id;
    pending.set(key, { resolve, reject });
    socket.send(JSON.stringify({ id: key, method, params }));
  });
}
async function evaluate(expression) {
  const value = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true, userGesture: true });
  if (value.exceptionDetails) throw new Error(value.exceptionDetails.text);
  return value.result.value;
}
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
await mkdir(".preview", { recursive: true });
await send("Page.enable");
await send("Runtime.enable");
await send("Page.bringToFront");
const routes = ["/", "/work", "/work/vetandpay", "/work/streams-of-joy", "/work/spicedchildcare", "/work/kwildigital-bank-support", "/work/lightgate-solutions", "/work/nobzo", "/work/onsa-document-system", "/work/ecowas-biometric-system", "/work/efcc-application", "/work/providus-banking-backend", "/resume", "/about", "/contact"];
try {
  for (const width of [1440, 1024, 390, 320]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 1000, deviceScaleFactor: 1, mobile: width < 760 });
    for (const route of routes) {
      const response = await fetch(base + route);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${route}`);
      await send("Page.navigate", { url: base + route });
      let ready = false;
      for (let attempt = 0; attempt < 100; attempt++) {
        await pause(80);
        ready = await evaluate(`document.readyState === 'complete' && location.pathname === ${JSON.stringify(route)} && [...document.images].filter(image => { const r = image.getBoundingClientRect(); return r.width && r.height && r.top < innerHeight && r.bottom > 0; }).every(image => image.complete)`);
        if (ready) break;
      }
      if (!ready) throw new Error(`Page did not settle: ${route}`);
      await evaluate("Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => {})))");
      const layout = await evaluate(`({ width: innerWidth, scroll: document.documentElement.scrollWidth, h1: document.querySelectorAll('h1').length, brokenImages: [...document.images].filter(i => i.complete && !i.naturalWidth).length, overflow: [...document.querySelectorAll('main *,footer *')].filter(e => e.getBoundingClientRect().right > innerWidth + 2).slice(0,5).map(e=>e.className) })`);
      if (layout.scroll > width + 1 || layout.h1 !== 1 || layout.brokenImages) throw new Error(`${width} ${route}: ${JSON.stringify(layout)}`);
      const display = await evaluate("({ title: document.title, text: document.body.innerText })");
      if (!display.title.includes("Solomon Ona") || /Acha Solomon|Algoteam|Algosoftware/i.test(display.text)) throw new Error(`Outdated name or attribution: ${route}`);
      if (/achasolomon20@gmail\.com|LinkedIn/i.test(display.text) || await evaluate("!!document.querySelector('a[href*=\"linkedin.com\"],a[href=\"mailto:achasolomon20@gmail.com\"]')")) throw new Error(`Outdated contact details: ${route}`);
      if (route === "/resume" && (!display.text.includes("Kwildigital") || !display.text.includes("Software & AI Expert") || !display.text.includes("2026"))) throw new Error("Kwildigital experience missing");
      if (route === "/") {
        const counts = await evaluate("({ featured: document.querySelectorAll('.project-card').length, engagements: document.querySelectorAll('.engagement-row').length })");
        if (counts.featured !== 3 || counts.engagements !== 7 || !display.text.includes("Kwildigital") || !display.text.includes("Lightgate Solutions Limited")) throw new Error(`Project selection failed: ${JSON.stringify(counts)}`);
        if (!await evaluate("document.querySelector('a[href=\"/work/kwildigital-bank-support\"]').innerText.includes('Canada')")) throw new Error("Kwildigital country missing on homepage");
      }
      console.log(`OK ${width}px ${route}`);
      if ([1440,1024,390].includes(width) && ["/", "/work/vetandpay", "/contact"].includes(route)) {
        const metrics = await send("Page.getLayoutMetrics");
        const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: metrics.cssContentSize.height, scale: 1 } });
        await writeFile(`.preview/${route === "/" ? "home" : route.split("/").pop()}-${width}.png`, Buffer.from(screenshot.data, "base64"));
      }
      if (route === "/contact" && width === 390) {
        await evaluate("document.querySelector('.menu-toggle').click()");
        if (!await evaluate("document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true' && getComputedStyle(document.querySelector('nav')).display !== 'none'")) throw new Error("Mobile menu did not open");
        await evaluate("document.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'}))");
        await pause(80);
        if (!await evaluate("document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'false'")) throw new Error("Escape did not close menu");
        await evaluate("(() => { const write = navigator.clipboard.writeText.bind(navigator.clipboard); navigator.clipboard.writeText = value => { window.__copiedEmail = value; return write(value); }; })()");
        const copyButton = await evaluate("(() => { const r = document.querySelector('.copy-email button').getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; })()");
        await send("Input.dispatchMouseEvent", { type: "mousePressed", x: copyButton.x, y: copyButton.y, button: "left", clickCount: 1 });
        await send("Input.dispatchMouseEvent", { type: "mouseReleased", x: copyButton.x, y: copyButton.y, button: "left", clickCount: 1 });
        await pause(300);
        console.log("Copy email feedback:", await evaluate("document.querySelector('[role=status]').textContent"));
        if (await evaluate("window.__copiedEmail") !== "solomoneyen@gmail.com") throw new Error("Copy email used the wrong address");
      }
      if (width === 390 && ["/work/vetandpay", "/work/streams-of-joy", "/work/spicedchildcare", "/work/nobzo", "/work/efcc-application"].includes(route)) {
        await evaluate("document.querySelectorAll('.gallery-thumbnails button')[1].click()");
        if (!await evaluate("document.querySelectorAll('.gallery-thumbnails button')[1].getAttribute('aria-pressed') === 'true'")) throw new Error("Gallery thumbnail selection failed");
        await evaluate("document.querySelector('.gallery-main').click()");
        if (!await evaluate("document.querySelector('dialog').open")) throw new Error("Screenshot viewer did not open");
        await evaluate("document.querySelector('[aria-label=\"Next screenshot\"]').click()");
        if (!await evaluate("document.querySelector('.dialog-controls>span').textContent === '1 / 2'")) throw new Error("Screenshot navigation failed");
        await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
        await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
        await pause(80);
        if (await evaluate("document.querySelector('dialog').open")) throw new Error("Escape did not close screenshot viewer");
        console.log("Gallery selection, viewer, navigation, Escape: OK", route);
      }
    }
  }
  const cv = await fetch(base + "/assets/resume/Solomon-Ona-CV.docx");
  if (!cv.ok) throw new Error("CV download failed");
  for (const icon of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/assets/portrait-logo.png"]) {
    if (!(await fetch(base + icon)).ok) throw new Error(`Brand asset unavailable: ${icon}`);
  }
  for (const removed of ["/work/budgetflow", "/work/school-management", "/work/passport-system"]) {
    if ((await fetch(base + removed)).status !== 404) throw new Error(`Removed project still available: ${removed}`);
  }
  if ((await fetch(base + "/work/unknown-project")).status !== 404) throw new Error("404 check failed");
  const redirect = await fetch(base + "/services", { redirect: "manual" });
  if (redirect.status !== 307 || redirect.headers.get("location") !== "/resume") throw new Error("Services redirect failed");
  if (errors.length) throw new Error(`Browser exceptions: ${errors.join(", ")}`);
  console.log("CV, redirect, 404, and browser runtime checks passed.");
} finally {
  socket.close();
}
