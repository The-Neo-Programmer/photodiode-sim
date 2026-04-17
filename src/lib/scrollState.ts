import { create } from "zustand";

interface ScrollState {
  isAutoScrolling: boolean;
  setAutoScrolling: (v: boolean) => void;
}

export const useScrollState = create<ScrollState>((set) => ({
  isAutoScrolling: false,
  setAutoScrolling: (v) => set({ isAutoScrolling: v }),
}));
