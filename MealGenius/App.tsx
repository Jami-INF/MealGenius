import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from "./navigation/Navigation";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.topSafeArea}/>
      <SafeAreaView style={styles.mainSafeArea}>
        <PaperProvider>
          <Navigation/>
        </PaperProvider>
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
