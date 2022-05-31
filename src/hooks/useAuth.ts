import { useLocalStorage } from "./useLocalStorage"

export const useAuth = () => {
  return useLocalStorage("user")
}
