import { createStore } from "zustand/vanilla";

const store = createStore((set) => ({
  user: {
    email: String,
  },
  updateUser: (payload) =>
    set(() => ({
      user: payload,
    })),
}));
const { getState, setState, subscribe, getInitialState } = store;

export default store;
