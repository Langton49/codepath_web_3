'use client';
import React from "react";
import "../styles/card.css";

const Card = ({question, answer}) => {
    const [showQuestion, setShowQuestion] = React.useState(true);
    const [rotate, setRotate] = React.useState(false);

    const handleClick = () => {
        setRotate(true);
        setTimeout(() => setRotate(false), 500);
        setShowQuestion(!showQuestion);
    }

    return(
        <div className={`card ${rotate ? "rotate" : ""}`}
        onClick={handleClick}
        ><div>{showQuestion && question ? <img className="flag" src={question} alt="" /> : answer}</div></div>
    )
}

export default Card;
