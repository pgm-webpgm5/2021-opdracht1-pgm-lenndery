import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';
import { AppInput, FormError } from '.';

function FormField({ name, ...otherProps }) {
    console.log({ name })
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    
    return (
        <View>
            <AppInput
                onBlur={ () => setFieldTouched(name) }
                onChangeText={ handleChange(name) }
                { ...otherProps }
            />
            <FormError error={ errors[name] } visible={ touched[name] } />
        </View>
    );
}

export default FormField;