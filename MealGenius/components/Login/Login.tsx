import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Effectuer ici la logique de connexion
        // Vérification des informations de connexion, appel à une API, etc.

        // Une fois la connexion réussie
        onLoginSuccess();
    };

    return (
        <View>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={{ marginBottom: 16 }}
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                mode="outlined"
                style={{ marginBottom: 16 }}
            />

            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
        </View>
    );
};

export default Login;
