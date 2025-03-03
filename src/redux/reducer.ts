import { SEARCH_USER } from "./types"
import userData from "../data/users.json"
import { User } from "../types/user"
import Fuse from "fuse.js"

const usersArray: User[] = Object.values(userData)
  .map((user) => ({ ...user }))
  .sort((a, b) => b.bananas - a.bananas)
  .map((user, index) => ({ ...user, rank: index + 1 }))

const usersMap = new Map(
  usersArray.map((user) => [user.name.toLowerCase(), user])
)

const fuse = new Fuse(usersArray, {
  keys: ["name"],
  threshold: 0.3, // Adjust for fuzzy matching sensitivity
})

const initialState = {
  users: usersArray,
  usersMap,
  filteredUsers: usersArray.slice(0, 10),
  searchedUser: null,
}

const leaderboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_USER:
      const searchText = action.payload.toLowerCase()
      const fuzzyResults = fuse.search(searchText).map((result) => result.item)

      if (fuzzyResults.length === 0) {
        alert(
          "This user name does not exist! Please specify an existing user name!"
        )
        return state
      }

      const searchedUser = fuzzyResults[0] // Pick the first closest match
      const isInTop10 = state.filteredUsers.some(
        (user) => user.uid === searchedUser.uid
      )

      const updatedList = isInTop10
        ? state.filteredUsers
        : [...state.filteredUsers.slice(0, 9), searchedUser]

      return { ...state, filteredUsers: updatedList, searchedUser }

    default:
      return state
  }
}

export default leaderboardReducer
