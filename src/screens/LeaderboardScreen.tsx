import React, { useCallback, useState } from "react"
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { SEARCH_USER } from "../redux/types"
import { User } from "../types/user"

const Leaderboard = () => {
  const [username, setUsername] = useState("")
  const dispatch = useDispatch()
  const filteredUsers = useSelector((state: any) => state.filteredUsers)
  const searchedUser = useSelector((state: any) => state.searchedUser)

  const handleSearch = useCallback(() => {
    dispatch({ type: SEARCH_USER, payload: username })
  }, [dispatch, username])

  const onChangeText = useCallback((text: string) => {
    setUsername(text)
  }, [])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Search Row */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={20}
              color="#888"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="User name.."
              value={username}
              onChangeText={onChangeText}
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Rank</Text>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Bananas</Text>
        </View>

        {/* Table Rows */}
        <FlatList
          data={filteredUsers}
          keyExtractor={(item: User) => item.uid}
          renderItem={({ item }) => (
            <View
              style={[
                styles.tableRow,
                item.uid === searchedUser?.uid ? styles.highlight : null,
              ]}
            >
              <Text style={styles.cell}>{item.rank}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.bananas}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#f5f5f5" },
  container: { flex: 1, justifyContent: "center", padding: 20 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
    height: 40,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: 40,
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#a6ce39",
    padding: 10,
    justifyContent: "space-between",
  },
  headerText: { fontWeight: "bold", flex: 1, textAlign: "center" },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
  },
  cell: { flex: 1, textAlign: "center" },
  highlight: { backgroundColor: "yellow" },
})

export default Leaderboard
