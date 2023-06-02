import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.topSafeArea}/>
      <SafeAreaView style={styles.mainSafeArea}>
        <Navigation/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainSafeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'white'
  }
});
