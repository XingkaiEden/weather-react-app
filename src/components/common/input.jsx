import React from 'react';

const Input = ({ name, label, error, smallLabel, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                placeholder={label}
                name={name} id={name}
                className="form-control"

            />
            <small className="form-text form-muted">{smallLabel}</small>
            {error && <div className="alert alert-danger">{error}</div>}
            {/* if has error, then render the div, otherwise, not render div  */}
        </div>
    );
}

export default Input;