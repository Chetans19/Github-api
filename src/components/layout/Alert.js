import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
            <i className="material-icons">error_outline</i>  {alert.msg}
            </div>
    
        )
     )
}
export default Alert;
