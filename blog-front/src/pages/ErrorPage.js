import React from 'react';
import { useHistory } from 'react-router-dom'

export const ErrorPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <h2>Errorpage</h2>
            <button onClick={goBack}>Voltar</button>
        </>
    )
}