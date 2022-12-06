import React from 'react';
import "./Page.css"

export const Page = ({children}) => {
    return (
        <div className="page_m" style={{
            maxWidth: "450px",
            minWidth: "450px",
        }}>{children}
        </div>
    );
};
