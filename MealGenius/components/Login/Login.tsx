import React, { useState } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface LoginProps {
    onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Appel API pour vérifier les informations de connexion
        // Lancer onLoginSuccess() si la connexion est réussie
        onLoginSuccess();
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/icon.png')} style={styles.logo} />

            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={{ marginBottom: 16, width: 300 }}
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                mode="outlined"
                style={{ marginBottom: 16, width: 300 }}
            />

            <Button mode="contained" onPress={handleLogin} style={{ width: 200 }}>
                Login
            </Button>
        </View>
    );

};
const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 220,
        marginBottom: 100,
    },
});