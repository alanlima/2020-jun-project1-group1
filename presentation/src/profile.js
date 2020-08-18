import React from 'react';

export const Profile = ({
    name, url, picture
}) => {
    return (<div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 180
    }}>
        <a href={url}>
            <img 
                src={picture} 
                style={{borderRadius: 10}} />
        </a>
        <strong>
            {name}
        </strong>
    </div>)
}