"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

// This plays between Graph (0.690-0.795) and Optical Detection (0.875-0.935)
// Scroll range: 0.790 to 0.880
export function Scene13Circuit({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.790, 0.810, 0.860, 0.880], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));
  const currentFlow = useTransform(scrollYProgress, [0.808, 0.862], [0, 1]);

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-full max-w-3xl mx-auto mb-12">
        <svg
          viewBox="0 0 700 360"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ─── Grid background ─── */}
          {[40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
            <line key={`gy-${y}`} x1="0" y1={y} x2="700" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          ))}
          {[70, 140, 210, 280, 350, 420, 490, 560, 630].map((x) => (
            <line key={`gx-${x}`} x1={x} y1="0" x2={x} y2="360" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          ))}

          {/* ─── Reverse Bias Voltage Source (left side) ─── */}
          {/* Battery symbol */}
          <line x1="80" y1="80" x2="80" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="60" y1="110" x2="100" y2="110" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" />
          <line x1="68" y1="130" x2="92" y2="130" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <text x="108" y="124" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="monospace">V_R</text>

          {/* Wire from battery negative (bottom) to GND */}
          <line x1="80" y1="160" x2="80" y2="280" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="60" y1="280" x2="100" y2="280" stroke="rgba(255,255,255,0.40)" strokeWidth="1.5" />
          <line x1="68" y1="290" x2="92" y2="290" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <line x1="74" y1="299" x2="86" y2="299" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Wire from battery positive (top) to P-side of diode */}
          <line x1="80" y1="80" x2="80" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="80" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="240" y1="60" x2="240" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

          {/* ─── Photodiode Symbol ─── */}
          {/* Anode line (P-side) */}
          <line x1="240" y1="120" x2="240" y2="145" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          {/* Diode triangle (points down = reverse bias orientation) */}
          <polygon
            points="220,145 260,145 240,175"
            fill="rgba(100,120,255,0.15)"
            stroke="rgba(100,150,255,0.7)"
            strokeWidth="1.5"
          />
          {/* Cathode bar (N-side) */}
          <line x1="218" y1="175" x2="262" y2="175" stroke="rgba(100,150,255,0.9)" strokeWidth="2" />
          <line x1="240" y1="175" x2="240" y2="200" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

          {/* Light arrows hitting the diode */}
          {[0, 1, 2].map((i) => (
            <motion.g key={`arrow-${i}`}
              animate={{ y: [0, 6], opacity: [0.9, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
            >
              <line x1={280 + i * 14} y1={110 + i * 4} x2={267 - i * 4} y2={148 + i * 4}
                stroke="rgba(255,220,80,0.8)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            </motion.g>
          ))}
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,220,80,0.8)" />
            </marker>
          </defs>
          <text x="310" y="118" fill="rgba(255,220,80,0.7)" fontSize="10" fontFamily="monospace">hν</text>
          <text x="310" y="132" fill="rgba(255,220,80,0.5)" fontSize="9" fontFamily="monospace">photons</text>

          {/* Wire from N-side to GND */}
          <line x1="240" y1="200" x2="240" y2="280" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="80" y1="280" x2="240" y2="280" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* ─── Current path from diode to TIA ─── */}
          <line x1="240" y1="60" x2="420" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

          {/* Animated photocurrent dot */}
          <motion.circle
            r="5"
            fill="var(--color-accent, #7CDFFF)"
            style={{
              filter: "blur(1px) drop-shadow(0 0 6px var(--color-accent, #7CDFFF))",
              offsetPath: "path('M240,60 L420,60 L420,160')",
              offsetDistance: useTransform(currentFlow, [0,1], ["0%","100%"]) as any,
            }}
          />
          <motion.circle
            r="4"
            fill="var(--color-accent, #7CDFFF)"
            style={{
              filter: "blur(1px) drop-shadow(0 0 4px var(--color-accent, #7CDFFF))",
              offsetPath: "path('M240,60 L420,60 L420,160')",
              offsetDistance: useTransform(currentFlow, [0,1], ["30%","130%"]) as any,
            }}
          />

          {/* ─── Transimpedance Amplifier (Op-Amp) ─── */}
          <line x1="420" y1="60" x2="420" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          {/* Op-Amp triangle */}
          <polygon
            points="400,115 400,205 470,160"
            fill="rgba(20,40,80,0.5)"
            stroke="rgba(100,160,255,0.6)"
            strokeWidth="1.5"
          />
          <text x="413" y="148" fill="rgba(100,160,255,0.7)" fontSize="10" fontFamily="monospace">TIA</text>
          {/* Feedback resistor */}
          <path d="M400,115 C380,115 380,80 420,80 C460,80 460,115 440,115" 
            stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          <text x="405" y="74" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">Rf</text>

          {/* Output wire */}
          <line x1="470" y1="160" x2="590" y2="160" stroke="rgba(100,255,160,0.6)" strokeWidth="1.5" />
          <line x1="590" y1="140" x2="590" y2="180" stroke="rgba(100,255,160,0.6)" strokeWidth="1.5" />
          <text x="600" y="165" fill="rgba(100,255,160,0.7)" fontSize="11" fontFamily="monospace">V_out</text>

          {/* Labels */}
          <text x="215" y="108" fill="rgba(200,80,80,0.8)" fontSize="10" fontFamily="monospace">P</text>
          <text x="215" y="188" fill="rgba(80,140,220,0.8)" fontSize="10" fontFamily="monospace">N</text>
          <text x="170" y="56" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">I_photo</text>

          {/* GND labels */}
          <text x="66" y="310" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="monospace">GND</text>
          <text x="220" y="310" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="monospace">GND</text>
        </svg>
      </div>

      <div className="text-center w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-3">
          The Photodiode Circuit
        </h2>
        <p className="text-white/70 text-base leading-relaxed">
          The diode is connected in reverse bias. Incoming photons generate a photocurrent, which a Transimpedance Amplifier (TIA) converts into a readable voltage output.
        </p>
      </div>
    </motion.div>
  );
}
