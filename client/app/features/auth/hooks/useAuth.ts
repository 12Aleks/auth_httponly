"use client"
import {useAuthStore} from "@/app/store/authStore";
import {authApi} from "@/app/api/authApi";
import Unauthorized from "next/dist/client/components/builtin/unauthorized";
import {ILoginDto, IRegisterDto} from "@/app/lib/zodSchema";


export function useAuth() {
  const {user, setUser}  =  useAuthStore();

  const login = async (dto : ILoginDto) => {
      const   data  = await authApi.login(dto);

      if (!data.isAuth) return Unauthorized();
      const user = await authApi.isLogin();

      if(!user) return Unauthorized();
      setUser(user);
  }

  const logout = async () => {
      await authApi.logout();
  }

  const register = async (dto: IRegisterDto) => {
      await authApi.register(dto);
  }

  return {user, login, logout, register};
}