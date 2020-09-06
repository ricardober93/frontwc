import React from 'react'
import { colors } from 'style/theme'

export default function Reciently() {
    return (
        <div className="reciently"> 
            <h3>RECIENTES</h3>
            <div className="scroll-card">
            <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
            </div>
            </div>
           
            <style jsx >{`
            h3{
                color: ${colors.dark};
            }
            .scroll-card{
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                overflow-x: scroll;
                scroll-padding: 0 50%;
                scroll-snap-type: x mandatory;
            }
            .card{
                height: 200px;
                width: 120px;
                margin-right: 36px;
                position: relative;
            }
            img{
                height: 200px;
                border-radius: 25px;
                position: absolute;
                
            }
            h4{
                color: ${colors.gray};
                height: 12px;
                width: 120px;
                margin: 0;
                color: #F0F0F0;
                position: relative;
                z-index:2;
                left: 12px; 
                top: 130px;
                font-weight: 500;
                font-size:16px;
                
            }
            `}</style>
        </div>
    )
}
