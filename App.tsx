import React from "react"
import { StyleSheet } from "react-native"
import { Provider } from "react-redux"
import Leaderboard from "./src/screens/LeaderboardScreen"
import { store } from "./src/redux/store"
import { SafeAreaView } from "react-native-safe-area-context"

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Leaderboard />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
