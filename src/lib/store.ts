import { create } from 'zustand';

interface LumaState {
  lightIntensity: number; // 0 to 100
  reverseBiasVoltage: number; // 0 to 100 representing low to high
  signalMode: 'continuous' | 'pulsed';
  soundEnabled: boolean;

  setLightIntensity: (val: number) => void;
  setReverseBiasVoltage: (val: number) => void;
  setSignalMode: (mode: 'continuous' | 'pulsed') => void;
  toggleSound: () => void;
}

export const useLumaStore = create<LumaState>((set) => ({
  lightIntensity: 50,
  reverseBiasVoltage: 50,
  signalMode: 'continuous',
  soundEnabled: false, // Default to false so it doesn't auto-play annoyingly

  setLightIntensity: (val) => set({ lightIntensity: val }),
  setReverseBiasVoltage: (val) => set({ reverseBiasVoltage: val }),
  setSignalMode: (mode) => set({ signalMode: mode }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
}));
