import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-100"
        aria-hidden="true"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-foreground/70"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: ((i % 5) + 2) / 10,
              animation: `float ${4 + (i % 5)}s ease-in-out ${i * 0.01}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}