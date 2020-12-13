import React from 'react';
import * as Yup from 'yup';
import { Form, Screen, Wrapper, FormField, FormSubmit } from '../components';

const validationSchema = Yup.object().shape({
    sender: Yup.string().required().email().label('Sender'),
    reciever: Yup.string().required().email().label('Reciever'),
    cc: Yup.string().email().label('CC'),
    subject: Yup.string().label('Subject'),
    message: Yup.string().label('Message'),
});

function ComposeScreen({ navigation, route }) {
    const { sender, reciever, subject, cc } = route.params || {};
    
    return (
        <Screen>
            <Wrapper>
                <Form
                    onSubmit={( data ) => navigation.navigate('Inbox')}
                    validationSchema={validationSchema}
                    initialValues={ route.params || {} }
                >
                    <FormField 
                        name="sender"
                        icon="account-arrow-right-outline"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Sender"
                        value={ sender || ''}
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="reciever"
                        icon="account-arrow-left-outline"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Reciever"
                        value={ reciever || ''}
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="cc"
                        icon="account-multiple-outline"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="CC"
                        value={ cc || ''}
                        textContextType="emailAddress"
                    />
                    <FormField 
                        name="subject"
                        icon="text-subject"
                        placeholder="Subject"
                        value={ subject || ''}
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