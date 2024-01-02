// loginForm.tsx
import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Appearance,
    Text
} from 'react-native';

import { handleLogin } from '../hooks';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });

        return () => subscription.remove();
    }, []);

    const textColor = theme === 'dark' ? 'white' : 'black';

    return (
        <TouchableWithoutFeedback onPress={Platform.OS !== 'web' ? Keyboard.dismiss : undefined} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.themeText}>Current Theme: {theme}</Text>

                <TextInput
                    style={[styles.input, { color: textColor }]}
                    placeholder="Email"
                    placeholderTextColor={'grey'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, { color: textColor }]}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Button title="Login Up" onPress={() => handleLogin(email, password)} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    themeText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default SignupForm;
