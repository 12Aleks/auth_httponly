import {useAuthStore} from "@/app/store/authStore";


export function useAuth() {
  const {user, setUser}  =  useAuthStore();
}