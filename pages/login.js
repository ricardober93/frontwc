import ButtonLogin from 'components/ButtonLogin'
import Brand from 'icons/Brand'
import { useRouter } from 'next/router'
import React from 'react'

export default function login() {
    const router = useRouter();

    const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
    }
    
    return (
        <>
            <section className="login">
                <div className="brand">
                    <Brand />
                </div>
                <div className="wellcome">
                    <h4>WEllCOME!</h4>
                    <p>Continua para iniciar sesión</p>
                </div>
                <div className="login_button">
                    <ButtonLogin
                        text="Entrar con Google"
                        handleClick={handleClick}
                    />
                </div>
            </section>
            <style jsx > { `
                .login {
                height: 100%;
                display: flex;
                flex-direction: column;
                place-items: center;
                place-content: center;
                }
                .brand{
                    width:100%;
                    display:flex;
                    justify-content:center;
                    margin-bottom:1.2em;
                }
                .wellcome{
                    width:100%;
                    display:flex;
                    flex-direction: column;
                    place-items: center;
                    justify-content:center;
                }

                .wellcome h4, p{
                    margin:0;
                }
                ` }
                </style> 
        </>
    )
}
