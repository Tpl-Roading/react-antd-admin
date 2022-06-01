import create from "zustand"

import { createCollapseSlice, CollapseSlice } from "./collapse.slice"

const useStore = create<CollapseSlice>()((...a) => ({
  ...createCollapseSlice(...a),
}))

export default useStore
