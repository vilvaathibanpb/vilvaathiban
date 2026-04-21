import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  started: false,
  start: () => set({ started: true }),
  nearby: null,
  setNearby: (id) => set((s) => (s.nearby === id ? s : { nearby: id })),
  openSection: null,
  open: (id) => {
    const visited = new Set(get().visited);
    visited.add(id);
    set({ openSection: id, visited });
  },
  close: () => set({ openSection: null }),
  input: { x: 0, y: 0, interact: false },
  setInput: (patch) => set((s) => ({ input: { ...s.input, ...patch } })),
  night: false,
  toggleNight: () => set((s) => ({ night: !s.night })),
  visited: new Set(),
  lookingAt: null,
  setLookingAt: (id) => set((s) => (s.lookingAt === id ? s : { lookingAt: id })),
  playerPos: { x: 0, z: 6 },
  playerHeading: Math.PI,
  setPlayerTransform: (x, z, h) => set({ playerPos: { x, z }, playerHeading: h }),
}));
