import { useCallback, useState } from 'react';

export const useForm = (initialForm = {}) => {
    const [form, setForm] = useState(initialForm);

    const setValue = useCallback((name, value) => {
        setForm((form) => {
            if (!(name in form)) {
                throw new Error(`[Form] ${name} is not a valid form key`);
            }

            let newForm = { ...form };
            if (name instanceof Object) {
                newForm = { ...newForm, ...name };
            } else {
                newForm[name] = value;
            }

            return newForm;
        });
    }, []);

    const setObject = useCallback((obj = {}, merge = false) => {
        setForm((form) => {
            let newForm = merge ? { ...form, ...obj } : obj;
            return newForm;
        });
    }, []);

    return [form, setValue, setObject];
};
