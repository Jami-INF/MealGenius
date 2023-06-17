import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from "./navigation/Navigation";
import store from './redux/store';
import { Provider} from 'react-redux'
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme  : lightTheme;

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.topSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}/>
        <SafeAreaView style={[styles.mainSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}>
          <Navigation theme={theme} isDarkMode={isDarkTheme} setIsDarkMode={setDarkTheme}/>
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
