"use client"
import {useAuthStore} from "@/app/store/authStore";
import {IAuthDto} from "@/app/utils/types";
import {authApi} from "@/app/api/authApi";
import Unauthorized from "next/dist/client/components/builtin/unauthorized";


export function useAuth() {
  const {user, setUser}  =  useAuthStore();

  const login = async (dto : IAuthDto) => {
      await authApi.login(dto);

      const user = await authApi.isLogin();
      if(!user) {
          return Unauthorized()
      }

      setUser(user);
  }

  const logout = async () => {
      await authApi.logout();
  }

  const register = async (dto: IAuthDto) => {
      await authApi.register(dto);
  }

  return {user, login, logout, register};
}