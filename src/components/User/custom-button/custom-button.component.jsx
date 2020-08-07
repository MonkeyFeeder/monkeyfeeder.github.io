import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ onSubmit, children, ...otherProps }) => {
    return (
        <button className="custom-button" onClick={onSubmit} {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton;