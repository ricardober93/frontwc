import React from 'react'
import { colors } from 'style/theme'

export default function ButtonLogin({ text, handleClick }) {
    return (
        <>
        <button onClick={handleClick}>
            {text}
        </button>
          <style jsx > { `
                Button {
                width:200px;
                height:52px;
                background: ${colors.primary};
                color: ${colors.gray};
                border:none;
                border-radius:18px;
                font-size:14px;
                text-transform: uppercase;
                margin-top:1.4em;
                ` }
                </style>   
        </>
    )
}
