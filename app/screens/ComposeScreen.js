import React from 'react';
import * as Yup from 'yup';
import { Form, Screen, Wrapper, FormField, FormSubmit } from '../components';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function ComposeScreen(props) {
    return (
        <Screen>
            <Wrapper>
                <Form
                    onSubmit={( data ) => console.log({ data })}
                    validationSchema={validationSchema}
                >
                    <FormField 
                        name="sender"
                        icon="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Sender"
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="sender"
                        icon="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="CC"
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="subject"
                        icon="text-subject"
                        placeholder="Subject"
                    />
                    <FormField 
                        name="message"
                        icon="message-outline"
                        placeholder="Message"
                        multiline = {true}
                        numberOfLines = {4}
                    />
                    <FormSubmit title="Send mail" />
                </Form>
            </Wrapper>
        </Screen>
    );
}

export default ComposeScreen;