import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import * as SplashScreen from "expo-splash-screen";
// import { enableFreeze, enableScreens } from "react-native-screens";

// enableScreens(true);
// enableFreeze(true);

// SplashScreen.preventAutoHideAsync().catch(() => {
//   // in very rare cases, preventAutoHideAsync can reject, this is a best effort
// });

// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   environment: process.env.STAGE,
//   enableInExpoDevelopment: false,
// });


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
