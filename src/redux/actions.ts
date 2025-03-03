import { SEARCH_USER } from "./types"

export const searchUser = (username: string) => ({
  type: SEARCH_USER,
  payload: username,
})
