import React from 'react';

const ColorfulMessage = (props) => {
    const {color, children} = props;
    console.log(color);
    const contextStyle ={
        color,
        fontSize: '18px'
      };
    return (
        <p style={contextStyle}>{children}</p>
    );
}

export default ColorfulMessage;