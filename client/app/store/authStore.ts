import {IAuthState, IUser} from "@/app/utils/types";
import {create} from "zustand";

export const useAuthStore = create<IAuthState>((set) => ({
    user: null,
    setUser: (user: IUser) => set({user}),
}
))
