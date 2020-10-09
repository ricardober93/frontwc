import { colors } from "style/theme";
import Link from 'next/link'
export default function PopularPost() {
    return (
        <div className="popularPost">
            <h3>POPULARES</h3>
            <div className="scroll-card">
            <Link href = "/comic" >
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                    <h4>WHEN YOU WAKE UP</h4>
               </div>
                </Link>
                < Link href = "/comic" >
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
                </div>
                </Link>
                <Link href = "/comic" >
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                    <h4>WHEN YOU WAKE UP</h4>
               </div>
                </Link>
                < Link href = "/comic" >
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
                </div>
                </Link>
                <Link href = "/comic" >
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                    <h4>WHEN YOU WAKE UP</h4>
               </div>
                </Link>
                < Link href = "/comic" >
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
                </div>
                </Link>
                <Link href = "/comic" >
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image1.jpg?alt=media&token=91ebc28c-099f-47f4-b57f-dacd4151a9d4" alt="" />
                    <h4>WHEN YOU WAKE UP</h4>
               </div>
                </Link>
                < Link href = "/comic" >
             <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/webcomic-49a88.appspot.com/o/image2.jpg?alt=media&token=d16e9564-f4fc-45a3-a821-d1533032e42e" alt="" />
                <h4>WHEN YOU WAKE UP</h4>
                </div>
             </Link>
            </div>
           
            <style jsx >{`
            h3{
                color: ${colors.dark};
            }
            .scroll-card{
                height: 200px;
                width: 100%;
                display: grid;
                gap: 1em;
                align-items: center;
                justify-content: space-between;
            }
            .card{
                height: 200px;
                width: 300px;
                position: relative;
            }
            img{
                height: 200px;
                width: 100%;
                background-size: cover;
                background-position: center;
                border-radius: 25px;
                position: absolute;
                object-fit: cover;
                
            }
            h4{
                color: ${colors.gray};
                height: 52px;
                width: 180px;
                margin: 0;
                color: #F0F0F0;
                position: relative;
                z-index:0;
                left: 12px; 
                top: 30px;
                font-weight: 500;
                font-size:20px;
                
            }
            `}</style>
        </div>
    )
}
