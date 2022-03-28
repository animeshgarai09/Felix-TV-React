import { useState } from "react"

export const useInputHandler = (state) => {
    const [inputState, setInputState] = useState(state)
    const inputChange = (evt) => {
        const value = evt.target.value;
        setInputState({
            ...inputState,
            [evt.target.name]: value
        });
    }
    return { inputState, inputChange }
}