import { StateCreator } from "zustand"

export interface CollapseSlice {
  collapsed: boolean

  toggleCollapse: () => void
}

export const createCollapseSlice: StateCreator<CollapseSlice, [], []> = (set) => ({
  collapsed: false,
  toggleCollapse: () => set((state) => ({ collapsed: !state.collapsed })),
})
