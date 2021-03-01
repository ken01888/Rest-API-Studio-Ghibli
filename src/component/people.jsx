import React, { useState, useEffect } from 'react'

const People = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/people')
            const jsonResult = await res.json()
            setPeople(jsonResult)
        })()
    }, [])

    return (
        people.map((info) =>
            <div className="card col-4 bg-light" key={`people-title-${info.id}`}>
                <div className="card-body ">
                    <div className="card-title bg-light">{info.name}</div>
                    <div className="card-subtitle mb-2 text-muted">{info.gender}</div>
                    <div className="card-subtitle mb-2 text-muted">{info.age}</div>
                    <a href={`${info.url}`} className="card-link" target="_blank" rel='noreferrer'>{`API LINK - ${info.name}`}</a>
                    <div className="card-text">{info.description}</div>
                </div>
            </div>
        ))

}

export default People;

