import React, {Fragment} from 'react'
import { colors } from 'style/theme';

export default function Category() {
    return (
        <Fragment>
            <article>
                <div className="categoria">
                    All
                </div>
                <div className="categoria">
                    Shonnen
                </div>
                <div className="categoria">
                    Aventure
                </div>
                <div className="categoria">
                    All
                </div>
                <div className="categoria">
                    Shonnen
                </div>
                <div className="categoria">
                    Aventure
                </div>
            </article>
            <style jsx > {`
                article{
                    height: 50px;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    overflow-x: scroll;
                    scroll-padding: 0 50%;
                    scroll-snap-type: x mandatory;
                    }
                article::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                        background-color: transparent;
                    }
                .categoria{
                    color: ${colors.gray};
                    background: ${colors.primary};
                    margin-left: .8em;
                    padding: .5em;
                    border-radius:15px;
                    padding: 12px 18px;
                    }
            `} </style>
        </Fragment>
    )
}
