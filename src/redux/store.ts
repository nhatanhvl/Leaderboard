import { createStore } from "redux"
import leaderboardReducer from "./reducer"

export const store = createStore(leaderboardReducer)
