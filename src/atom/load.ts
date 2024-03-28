import { atom } from "recoil";

export const loadedAtom = atom<boolean>({
  key: "loadedAtom",
  default: false,
});
