import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from "./navigation/Navigation";
import store from './redux/store';
import { Provider} from 'react-redux'
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme  : lightTheme;

  useEffect(() => {
    isDarkThemeStore();
  }, []);

  const isDarkThemeStore = async () => {
    try {
      const isDarkTheme = await AsyncStorage.getItem('isDarkTheme')
      setDarkTheme(isDarkTheme != null && isDarkTheme === 'true' ? true : false);
    } catch(e) {
      console.log("An error has occurred", e);
    }
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.topSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}/>
        <SafeAreaView style={[styles.mainSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}>
        <PaperProvider>
          <Navigation theme={theme} isDarkMode={isDarkTheme} setIsDarkMode={setDarkTheme}/>
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
    // backgroundColor: 'white'
  },
  topSafeArea: {
    flex: 0,
    // backgroundColor: 'white'
  }
});
