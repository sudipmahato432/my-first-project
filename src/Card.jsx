import React, { useState } from 'react';
import './App.css';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 180) : text}    
            {/* use of conditional ternary operator     */}
            <div onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? <button class="btn btn-primary">Read More</button> : <button class="btn btn-primary">Read Less</button>}
                {/* use of conditional ternary operator */}
            </div>                                                            
        </p>
    );
};

const Card = (props) => {

    return (
        <>

            <div class="card text-center col-xl-3 col-lg-3 col-md-5 ">
                <img class="card top img" src={props.imgsrc} alt={props.imgsrc} />
                <h4>{props.title}</h4>
                <div class="content">
                    <p><ReadMore>{props.paragraph}</ReadMore></p>
                </div>
            </div>
        </>
    );

}
export default Card;