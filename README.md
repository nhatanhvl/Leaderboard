# Leaderboard App

This is a React Native application featuring a leaderboard system that allows users to search for rankings based on banana count. It includes sorting options, fuzzy search, and highlights searched users.

## Features
- 🔍 **Search by username** (Exact and Fuzzy search)
- 📊 **Top 10 leaderboard** based on banana count
- 🏆 **Highlight searched user**
- 🔄 **Sorting by rank, name, or lowest-ranked users**
- ✅ **Unit tests with Jest**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/leaderboard-app.git
   cd leaderboard-app
   ```

2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

3. Install required packages:
   ```sh
   yarn add react-native-safe-area-context react-native-vector-icons
   ```

4. Run the app:
   ```sh
   npx expo start
   ```

## Folder Structure
```
📂 src
 ├── 📂 components          # UI components (Leaderboard, SearchBar)
 ├── 📂 redux               # Redux store, actions, reducers
 ├── 📂 data                # Mock user data (users.json)
 ├── 📂 types               # TypeScript types
 ├── 📂 __tests__           # Unit tests for reducers and components
 ├── App.tsx                # Main entry point
```

## SafeAreaView Fix for Android
If `SafeAreaView` does not work correctly on Android, ensure you:
- Install `react-native-safe-area-context`
- Wrap your app with `<SafeAreaProvider>` in `App.tsx`
- Use a fallback `paddingTop` for Android:
  ```tsx
  import { Platform, StatusBar } from "react-native"
  <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
  ```

## Running Tests
To run unit tests with Jest:
```sh
yarn test
```

## Troubleshooting
- **Expo Module Not Found**: Run `expo doctor` to diagnose issues.
- **Jest Test Failures**: Ensure dependencies are installed and clear cache:
  ```sh
  rm -rf node_modules && yarn install
  yarn test --clearCache
  ```

## Contributing
Pull requests are welcome! 🚀

## License
MIT

