import { atom, selector } from "recoil";

export type User = {
  username: string;
  avatar_url: string;
};

export const userAtom = atom<User[]>({
  key: "userAtom",
  default: [],
});

export const userSelector = selector({
  key: "AddItemAtom",
  get: ({ get }) => get(userAtom),
  set: ({ get, set }, newUsers) => {
    const users = get(userAtom);
    const newUser = (newUsers as User[]).at(-1);

    console.log("기존 ::", users);
    console.log("새로운 값 ::", newUser);

    const userExists = users.some(
      (user) => user.username === newUser?.username,
    );

    if (userExists) {
      set(userAtom, users);
    } else {
      set(userAtom, newUsers);
    }
  },
});
