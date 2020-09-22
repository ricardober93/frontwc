import React from 'react'
import Header from 'components/comic/Header'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { colors } from 'style/theme';
export default function Comic({ comic }) {
    console.log(comic)
    return (
        <>
            <Header URL={comic.URLHeader} titulo={comic.titulo} />
            <section className="Comic-Section">
                <div className="section_titulo"> 
                    <h2> {comic.titulo} </h2>
                    <div className="Comic_Heart">
                        <FavoriteIcon /> 
                        <p>2.2K</p>
                    </div>
                </div>
                 <div className="Comic_Categoria">
                    {comic.categoria.map( cat => <h5 key={cat}> {cat} </h5> )} 
                </div>
                <div className="Comic_Autor">
                    <p> <strong>Autor:</strong> {comic.autor}</p>
                    <div className="Comic_Estado">
                        <p className="verde">EP</p>
                        <p> Todos los sabados </p>
                    </div>
                </div>
                <div className="Comic_Descripcion">
                    <p> {comic.descripcion} </p>
                </div>
                <div className="buttons">
                    <button className="outline_Comic" >Seguir</button>
                    <button  className="solid_Comic" >Continuar viendo</button>
                </div>
            </section>
            <section className="Comic_Series">
                {comic.capitulos.map(cap => <div className="Comic_series_cap" key={cap.tituloCap}>
                    <div >
                        <img className="imagen_cap" src={cap.imagenCap} alt=""/>
                    </div>
                    <div className="titulo_cap">
                        <h3>{cap.tituloCap}</h3>
                        <p> <strong>Capitulo:</strong> {cap.serie} </p>
                    </div>
                    
                </div>)} 
            </section>
            <style jsx > { `
                button{
                    border:none;
                    padding:1.1em;
                    width:140px;
                    border-radius:25px;
                    font-weight: bold;
                    font-size:13px;
                    margin-bottom:1.3em;
                }
                .outline_Comic{
                    background:none;
                    border: 2px solid ${colors.primary}
                    
                }
                .solid_Comic{
                    background: ${colors.primary};
                    color:white;
                }
                .buttons{
                     display:flex;
                        justify-content: space-between;
                        align-items: center;
                        align-content: center;
                }
                    .Comic-Section{
                        max-width:90%;
                        margin: 0 auto;
                        border-bottom: 1px solid rgba(0,0,0,.2);
                    }
                    .Comic_Series{
                        max-width:90%;
                        margin: 0 auto;
                        margin-top:30px;
                        display:grid;
                        gap:20px;
                    }
                    .Comic_series_cap {
                        background: ${colors.gradient_green};
                        height: 80px;
                        padding:20px;
                        border-radius: 25px;
                        display: flex;
                        align-items: center;
                        align-content: center;

                    }
                    .imagen_cap{
                        width:60px;
                        height:60px;
                        border-radius:12px;
                        object-fit: cover;
                    }
                    .titulo_cap{
                        font-size: 14px;
                        
                        margin-left:1.2em;
                    }

                    .titulo_cap h3{
                        margin:0;
                       margin-bottom:.2em;
                    }
                    .titulo_cap p{
                        margin:0;
                        font-size: 11px;
                    }
                    .section_titulo {
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        align-content: center;
                        height:40px;
                        margin-top:30px;
                        }
                    .section_titulo  h2{
                        margin:0; 
                        }
                    .Comic_Heart{
                        display:flex;
                        align-content: center;
                    }
                     .Comic_Heart p{
                        margin:0; 
                        margin-left: .8em;  
                    }
                    .Comic_Categoria{
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 140px;
                    }
                    .Comic_Categoria h5 {
                         margin:0; 
                    }
                    .Comic_Autor{
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size:10px;
                    }
                    .Comic_Estado{
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .Comic_Estado p.verde{
                        background: #2EAC6D;
                        margin-right: .3em;
                        padding:2px;
                        border-radius:3px;
                    }
                    .Comic_Descripcion p {
                      font-size:14px; 
                      text-align: justify; 
                    }
                    ` }
                </style> 
            
        </>
    )
}

Comic.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/comics')
    const json = await res.json()
  return { comic: json  }
}
