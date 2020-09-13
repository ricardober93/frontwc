import useUser from 'hook/useUser'
import Brand from "../../icons/Brand";
export default function Header() {
    const user = useUser();
    console.log(user)
    return (
        <>
            {/* headers */}
            <header>
                <section>
                     <div className="logo">
                     <Brand />
                    </div>
                    {
                        user ? user.username : null
                    }
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
