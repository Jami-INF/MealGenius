import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from "./components/Login/Login";

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null && value === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log('Erreur lors de la connexion', error);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    AsyncStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    AsyncStorage.setItem('isLoggedIn', 'false');
  };
  return (
      <Provider store={store}>
      <SafeAreaView style={[styles.topSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}/>
        <SafeAreaView style={[styles.mainSafeArea, {backgroundColor: theme.navigationBackgroundColor}]}>
          {isLoggedIn ? (
              <PaperProvider>
          <Navigation theme={theme} isDarkMode={isDarkTheme} setIsDarkMode={setDarkTheme} onLogout={handleLogout} />
            </PaperProvider>
          ) : (
              <View style={styles.container}>
                <Login onLoginSuccess={handleLoginSuccess} />
              </View>
          )}
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
