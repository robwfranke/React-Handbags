import React from 'react';

function Button({state,textButton}){

    return (


        <button
            disabled={state}
            type="button" onClick={() => console.log(textButton)}
        >
            {textButton}

        </button>


    )

}


export default Button;