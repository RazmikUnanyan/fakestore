import React, {Children, cloneElement, useEffect, useState} from 'react';
import "./Carousel.css"
import {Page} from "./Page/Page";

const  Width = 450
export const Carousel = ({children}) => {
    const [offSet, setOffset] = useState(0)

    const hRCRick = () => {
         setOffset(prev => Math.max(prev - Width, -(Width*(children.length - 1))))

    }

    const hLCLick = () => {
        setOffset(prev => Math.min(prev + Width, 0))
    }
    return (
        <div className="main-container">
            <button onClick={hLCLick}>{"<"}</button>
            <div className="window">
                <div className="all-page-container"
                style={{
                    transform: `translateX(${offSet}px)`
                }}
                >
                    {children}
                </div>
            </div>
            <button onClick={hRCRick}>{">"}</button>
        </div>
    );
};

Carousel.Page = Page

export default Carousel;
