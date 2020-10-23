import React from 'react'

const Validation = (props) => {

    let message;
    if(props.length < 5 && props.length != 0){
        message = 'Text is too short'
    }else if(props.length > 20){
        message = 'Text is too long'
    }

    return (
        <div>
            {message}
        </div>
    )
}

export default Validation;