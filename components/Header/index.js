
import Brand from "../../icons/Brand";
export default function Header() {
    return (
        <>
            {/* headers */}
            <header>
                <section>
                     <div className="logo">
                     <Brand />
                </div>
               </section>
           </header>
            <style jsx >{`
                header{
                    padding: 0;
                    margin:0;
                    margin-bottom:18px;
                    }
                section{
                    height: 70px;
                    width:80%;
                    margin: 0 auto;
                    display: flex;
                    align-items:center;
               }
            `}</style>
        </>
    )
}
