import React from "react"
import "./SecondsCounter.css";

const SecondsCounter = ({cuatro, tres, dos, uno}) => {
// const {cuatro, tres, dos, uno} = props;
return (
    <div className="contenedor container-fluid">
        <div className="calendar" role="alert">
        <i className="far fa-clock"></i></div>
        <div className="cuatro" role="alert">{cuatro % 10} </div>
        <div className="tres" role="alert">{tres % 10}</div>
        <div className="dos" role="alert">{dos % 10}</div>
        <div className="uno" role="alert"> {uno % 10}</div>
    </div>)
};

export default SecondsCounter;

