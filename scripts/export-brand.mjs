import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const source = "public/assets/portrait-logo-source.png";
for (const [path, size] of [["public/assets/portrait-logo.png", 256], ["app/icon.png", 192], ["app/apple-icon.png", 180]]) {
  await sharp(source).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path);
}
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (let index = 0; index < sizes.length; index++) {
  const cursor = 6 + index * 16;
  header[cursor] = header[cursor + 1] = sizes[index];
  header.writeUInt16LE(1, cursor + 4);
  header.writeUInt16LE(32, cursor + 6);
  header.writeUInt32LE(images[index].length, cursor + 8);
  header.writeUInt32LE(offset, cursor + 12);
  offset += images[index].length;
}
await writeFile("app/favicon.ico", Buffer.concat([header, ...images]));
console.log("Portrait logo and favicon assets exported.");
