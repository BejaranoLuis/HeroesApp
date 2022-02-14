import { useState } from "react"

export const useForm = (inputValues = {}) => {
    const [value, setValue] = useState(inputValues)

    const reset = () => {
        setValue(inputValues);
    }

    const handleInputChange = ({target}) => {
        setValue({
            ...value,
            [target.name]: target.value
        });
    }

    return [value, handleInputChange, reset];
}
