import React, { useState} from 'react';
import Films from './component/films'
import People from './component/people'

const App = () => {
//Films
const [filmClick, setFilmClick] = useState(true)
const [peopleClick, setPeopleClick] = useState(true)

const handleButtonClickFilm = () => {
        setFilmClick(false)
        setPeopleClick(true)

    }
const handleButtonClickPeople = () => {
        setPeopleClick(false)
        setFilmClick(true)
    }

if (filmClick&&peopleClick) {
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                <div className="col-4">
                <button className="btn btn-info btn-lg" onClick={handleButtonClickFilm}>Load Films</button>
                </div>
                <div className="col-4">
                <button className="btn btn-info btn-lg" onClick={handleButtonClickPeople}>Load People</button>

                </div>
                </div>
        </div>
        </React.Fragment>
        
    )
       
} else if (!filmClick){
        return (
    <React.Fragment>
        <button className="btn btn-info btn-lg " onClick={handleButtonClickPeople}>Load People</button>
            <div className="container-fluid">
                <div className="row">
                    <Films/> 
                </div>
            </div> 
     </React.Fragment>
            )
            
    }else if (!peopleClick){
        return(
     <React.Fragment>
        <button className="btn btn-info btn-lg" onClick={handleButtonClickFilm}>Load Films</button>
        <div className="container-fluid">
                <div className="row">
                <People />
                </div>
            </div> 
     </React.Fragment>

        )
        
    }

    
}

export default App;