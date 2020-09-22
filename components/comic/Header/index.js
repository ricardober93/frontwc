import { ArrowBack } from '@material-ui/icons/';
import { useRouter } from 'next/router'
export default function index({ URL, titulo }) {
    const router = useRouter()
    return (
        <>
            <header className="header_comic">
                <div className="back" onClick={() => router.back()} >
                   <ArrowBack /> 
                </div>    
            <img className="imgURL" src={URL} alt={titulo} />
            <style jsx > { `
            .header_comic{
                height:140px;
            }
            .imgURL {
                height: 100%;
                width:100%;
                object-fit: cover;
                }
            .back{
                display: flex;
                position: absolute;
                top: 20px;
                left:25px;
                background: rgba(0,0,0,.2);
                padding:5px;
                border-radius: 999px;

            }
             .back > svg{
                 color: white;
             }
            ` }
        </style> 
        </header>
        </>
    )
}
