import { colors } from "../../style/theme";
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
export default function Navbar() {
    return (
        <>
            <header>
                <section>
                     <div className="logo">
                    <h3>WEBCOMIC</h3>
                </div>
                <div className="menu">
                    <MenuIcon />
                    <nav className="menu-movil">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </nav>
                </div>
               </section>
           </header>
            <style jsx >{`
                header{
                    padding: 0;
                    margin:0;
                    background: ${colors.dark};
                    color: ${colors.gray}
                    }
                section{
                    height: 70px;
                    width:80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items:center;
                }
                .logo, .menu{
                    height: 100%;
                    padding: 0 10px;
                    display: flex;
                    align-items:center;
                    cursor:pointer;
                }
                .logo:hover, .menu:hover{
                    background: ${colors.gray}44;
                    padding: 0 10px;
                }
                h3{
                    margin:0;
                }
                .menu-movil{
                    display: none !important;
                }
            `}</style>
        </>
    )
}
