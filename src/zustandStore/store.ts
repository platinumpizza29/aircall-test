import { create } from "zustand";
import Call from "../models/callModel";

interface StoreState {
  archivedCalls: Call[];
  setArchivedCalls: (calls: Call[]) => void;
  currentLog: Call | null;
  setCurrentCall: (call: Call) => void;
  sideBarShow: boolean;
  setSideBarShow: (show: boolean) => void;
}

// Create a store with Zustand and specify the types
const zustandStore = create<StoreState>(set => ({
  archivedCalls: [],
  setArchivedCalls: (calls: Call[]) => {
    set({ archivedCalls: calls });
  },
  currentLog: null,
  setCurrentCall: (call: Call) => {
    set({ currentLog: call });
  },
  sideBarShow: false,
  setSideBarShow: (status: boolean) => {
    set({ sideBarShow: status });
  }
}));

export default zustandStore;
