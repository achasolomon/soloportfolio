"use client";

import { useRef, useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail() {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText("solomoneyen@gmail.com");
      setStatus("Email copied");
    } catch {
      setStatus("Select the email address to copy it manually.");
    }
    timer.current = setTimeout(() => setStatus(""), 4000);
  }
  return <div className="copy-email"><button type="button" onClick={copy}>{status === "Email copied" ? <Check size={15} /> : <Copy size={15} />} Copy email</button><span role="status">{status}</span></div>;
}
