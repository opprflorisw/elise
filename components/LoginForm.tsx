"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const van = params.get("van") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "wrong">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).catch(() => null);

    if (res?.ok) {
      // Full navigation, not router.push — the middleware must see the cookie.
      window.location.href = van.startsWith("/") ? van : "/";
      return;
    }
    setState("wrong");
  }

  const field: React.CSSProperties = {
    background: "transparent",
    borderBottom: "1px solid rgba(242,237,228,0.22)",
    color: "var(--warmwhite)",
  };

  return (
    <form onSubmit={submit} className={`mt-8 ${state === "wrong" ? "v-shake" : ""}`}>
      <label className="block">
        <span className="s-eyebrow !text-[0.52rem]" style={{ color: "rgba(242,237,228,0.45)" }}>
          E-mailadres
        </span>
        <input
          type="email"
          value={email}
          autoComplete="username"
          autoFocus
          required
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "wrong") setState("idle");
          }}
          className="s-body mt-2 w-full pb-2.5 outline-none transition-colors focus:border-b-[var(--travertine)]"
          style={field}
        />
      </label>

      <label className="mt-7 block">
        <span className="s-eyebrow !text-[0.52rem]" style={{ color: "rgba(242,237,228,0.45)" }}>
          Wachtwoord
        </span>
        <input
          type="password"
          value={password}
          autoComplete="current-password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
            if (state === "wrong") setState("idle");
          }}
          className="s-body mt-2 w-full pb-2.5 outline-none transition-colors focus:border-b-[var(--travertine)]"
          style={field}
        />
      </label>

      <div className="mt-9 flex items-center gap-5">
        <button
          type="submit"
          disabled={state === "busy"}
          className="s-eyebrow rounded-full px-7 py-3 !text-[0.55rem] transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ background: "var(--travertine)", color: "var(--night)" }}
        >
          {state === "busy" ? "Momentje" : "Binnenkomen"}
        </button>
        {state === "wrong" && (
          <span className="s-body !text-[0.8rem]" style={{ color: "#d99" }} role="alert">
            Dat klopt niet — probeer het nog eens.
          </span>
        )}
      </div>
    </form>
  );
}
