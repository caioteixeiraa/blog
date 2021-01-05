import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const HomePage = () => {
    const [moviePoster, setMoviePoster] = useState('')
    useEffect(() => {
        getMovie()
    })

    const getMovie = () => {
        axios.get('http://www.omdbapi.com/?apikey=25a0cf44&t=Bacurau')
        .then((res) => {
            console.log(res)
            setMoviePoster(res.data.Poster)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <h2>Homepage</h2>
            <img src={moviePoster} />
        </>
    )
}