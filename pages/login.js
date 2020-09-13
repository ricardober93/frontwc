import React, { useEffect } from 'react'
import ButtonLogin from 'components/ButtonLogin'
import Brand from 'icons/Brand'
import { useRouter } from 'next/router'
import { loginWithGoogle } from 'firebase/client'

import useUser, { USER_STATES } from "hook/useUser";

export default function login() {
    const user = useUser()
    const router = useRouter();

    const handleClick = () => {
        loginWithGoogle().catch((err) => {
            console.log(err)
        })  
    }

    useEffect(() => {
        user && router.replace("/")
    }, [user])
    console.log(user)
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
                {
                    user == USER_STATES.NOT_LOGGED && (
                            <ButtonLogin
                                text="Entrar con Google"
                                handleClick={handleClick}
                            />
                            )}
                    {user == USER_STATES.NOT_KNOWN && (
                        <div className="sk-chase">
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                        </div>
                    ) }
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
