import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from "./navigation/Navigation";
import store from './redux/store';
import { Provider} from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.topSafeArea}/>
        <SafeAreaView style={styles.mainSafeArea}>
        <PaperProvider>
          <Navigation/>
        </PaperProvider>
        </SafeAreaView>
    </Provider>
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
