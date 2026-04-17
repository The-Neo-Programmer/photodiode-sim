"use client";

import { useLumaStore } from "@/lib/store";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ControlPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const { 
    lightIntensity, 
    setLightIntensity, 
    reverseBiasVoltage, 
    setReverseBiasVoltage,
    signalMode,
    setSignalMode
  } = useLumaStore();

  return (
    <>
      {/* Toggle Button for when panel is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all"
            aria-label="Open controls"
          >
            <SlidersHorizontal size={20} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-black/40 backdrop-blur-xl border-l border-white/10 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xs tracking-widest uppercase text-white/50 font-medium">Controls</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-10 flex-grow">
              {/* Light Intensity Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm text-white/80">Light Intensity</label>
                  <span className="text-sm text-[var(--color-accent)]">{lightIntensity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={lightIntensity}
                  onChange={(e) => setLightIntensity(Number(e.target.value))}
                  className="w-full accent-[var(--color-accent)] bg-white/10 h-1 rounded-full appearance-none outline-none cursor-pointer"
                />
              </div>

              {/* Reverse Bias Voltage Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm text-white/80">Reverse Bias</label>
                  <span className="text-sm text-[var(--color-accent)]">{reverseBiasVoltage}V</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={reverseBiasVoltage}
                  onChange={(e) => setReverseBiasVoltage(Number(e.target.value))}
                  className="w-full accent-[var(--color-accent)] bg-white/10 h-1 rounded-full appearance-none outline-none cursor-pointer"
                />
              </div>

              {/* Mode Toggle */}
              <div className="space-y-4">
                <label className="text-sm text-white/80 block">Signal Mode</label>
                <div className="flex w-full bg-white/5 rounded-lg p-1 border border-white/5">
                  <button
                    onClick={() => setSignalMode('continuous')}
                    className={`flex-1 text-xs py-2 rounded-md transition-all ${
                      signalMode === 'continuous' 
                        ? 'bg-white/10 text-white shadow-sm' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    Continuous
                  </button>
                  <button
                    onClick={() => setSignalMode('pulsed')}
                    className={`flex-1 text-xs py-2 rounded-md transition-all ${
                      signalMode === 'pulsed' 
                        ? 'bg-white/10 text-white shadow-sm' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    Pulsed
                  </button>
                </div>
              </div>
            </div>

            {/* Contextual feedback area (can be driven by scroll later) */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                {signalMode === 'continuous' 
                  ? "Continuous light generates a steady photocurrent from the electron-hole pairs."
                  : "Pulsed light signals modulate the photocurrent, allowing data detection."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
