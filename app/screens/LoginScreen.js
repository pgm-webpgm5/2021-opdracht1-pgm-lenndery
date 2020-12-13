import React, { useContext } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import { Form, Wrapper, FormField, FormSubmit, Screen, H2 } from '../components';
import { AuthContext } from '../contexts/AuthContext';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function CreateMailScreen() {
    const [ login, setLogin ] = useContext(AuthContext);
    
    return (
        <Screen>
            <Wrapper>
                <H2>Login</H2>
                <Form
                    onSubmit={() => setLogin(true)}
                    validationSchema={validationSchema}
                >
                    <FormField 
                        name="email"
                        icon="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="email"
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="password"
                        icon="lock"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Password"
                        textContextType="password"
                        secureTextEntry
                    />
                    <FormSubmit title="Login" />
                </Form>
            </Wrapper>
        </Screen>
    );
}

export default CreateMailScreen;