import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import videoCarregando from "../assets/videos/carregando.mp4";

const FADE_MS = 220;

export default function Carregamento({ visible = false }: { visible?: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [render, setRender] = useState(false); // controla quando renderizar o overlay (mount)
  const timeoutRef = useRef<number | null>(null);

  // cria container uma vez quando o componente for montado (não monta overlay ainda)
  useEffect(() => {
    const el = document.createElement("div");
    el.setAttribute("data-component", "carregamento-portal");
    containerRef.current = el;
    document.body.appendChild(el);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, []);

  // controla mount/unmount com debounce para permitir fade-out
  useEffect(() => {
    if (visible) {
      // cancel pending unmount e monta imediatamente
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setRender(true);
      // bloqueia scroll imediatamente enquanto visible
      document.body.style.overflow = "hidden";
      return;
    }

    // quando invisible: permitir fade e então desmontar e liberar scroll
    if (!visible && render) {
      timeoutRef.current = window.setTimeout(() => {
        setRender(false);
        timeoutRef.current = null;
        document.body.style.overflow = "";
      }, FADE_MS);
    } else {
      // se não estiver renderizado, garante overflow normal
      document.body.style.overflow = "";
    }
  }, [visible, render]);

  // se não vamos renderizar nada, não criamos portal (evita overlay ocioso)
  if (!render || !containerRef.current) return null;

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!visible}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: visible ? "rgba(0,0,0,0.96)" : "transparent",
        transition: `opacity ${FADE_MS}ms ease`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* fundo full-screen (vídeo ou gradiente) */}
      {videoCarregando ? (
        <video
          src={videoCarregando}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg,#000,#111)",
            zIndex: 0,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff", padding: 20, maxWidth: "90vw" }}>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}></h1>
        <p style={{ margin: "12px 0 0", opacity: 0.9 }}></p>
      </div>
    </div>
  );

  return createPortal(overlay, containerRef.current);
}
