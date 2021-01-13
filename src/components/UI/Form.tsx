import React from 'react';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

export const EmailMaskFormat = (props: any) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={emailMask}
            // placeholderChar={'\u2000'}
            // showMask
        />
    );
};

export const PhoneMaskFormat = (props: any) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="+# ### ###-##-##"
            mask="_"
        />
    );
};

export const InnMaskFormat = (props: any) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="############"
            mask="_"
        />
    );
};

export const NumberInput = (props: any) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            decimalScale={0}
        />
    );
};

export const MoneyInput = (props: any) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator={true}
        />
    );
};

export const cleanupMask = (maskedData: string) => {
    return maskedData.replace(/\D+/g, '');
};
