import React, { useState, useEffect, } from 'react';

let Films = () => {
    const [films, setFilms] = useState([])


    useEffect(() => {
        (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/films');
            const filmData = await res.json()
            setFilms(filmData)
        })()
    }, [])

    return (
        films.map((info) =>

            <div className="card col-4 bg-light" key={`info-title-${info.id}`}>
                <div className="card-body ">
                    <div className="card-title">{info.title}</div>
                    <div className="card-subtitle mb-2 text-muted">{`Release date: ${info.release_date}`}</div>
                    <div className="card-text">{info.description}</div>
                </div>
            </div>



        ))
}




export default Films;