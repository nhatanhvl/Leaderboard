import leaderboardReducer from "../redux/reducer"
import { SEARCH_USER } from "../redux/types"
import { User } from "../types/user"
import userData from "../data/users.json"

const mockUsers: User[] = Object.values(userData)

const initialState = {
  users: mockUsers,
  usersMap: new Map(mockUsers.map((user) => [user.name.toLowerCase(), user])),
  filteredUsers: mockUsers.slice(0, 10),
  searchedUser: null,
}

describe("Leaderboard Reducer", () => {
  beforeAll(() => {
    global.alert = jest.fn()
  })

  it("should return the initial state", () => {
    const state = leaderboardReducer(undefined, { type: "" })
    expect(state.filteredUsers.length).toBe(10)
  })

  it("should find a user by exact name", () => {
    const newState = leaderboardReducer(initialState, {
      type: SEARCH_USER,
      payload: "Aliece Angell",
    })

    expect(newState.searchedUser?.name).toBe("Aliece Angell")
  })

  it("should find a user using fuzzy search", () => {
    const newState = leaderboardReducer(initialState, {
      type: SEARCH_USER,
      payload: "angel",
    })

    expect(newState.searchedUser?.name).toBe("Angel Lim")
  })

  it("should handle non-existing user search", () => {
    const newState = leaderboardReducer(initialState, {
      type: SEARCH_USER,
      payload: "NonExistentUser",
    })

    expect(global.alert).toHaveBeenCalledWith(
      "This user name does not exist! Please specify an existing user name!"
    )
  })
})
