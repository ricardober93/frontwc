import React from 'react'
import { colors } from 'style/theme'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
        <nav>
            <li>
                <Link href="/">
                 <FavoriteIcon/>
                </Link>
            </li>
            <li>
                <Link href="/">
                <HomeIcon/>
                </Link>
            </li>
            <li>
                <Link href="/#">
                <SearchIcon/>
                </Link>
            </li>
            <li>
                <Link href="/#">
                <AccountCircleIcon/>
                </Link>
            </li>
        </nav>
         <style jsx > { `
                nav{
                    padding: 0;
                    margin:0;
                    height:60px;
                    background: ${colors.dark};
                    bottom: 0; 
                    display: flex;
                    position: fixed;
                    width: 100%;
                    list-style: none;
                    border-radius: 20px 20px 0 0;
                    box-shadow: 1px -2px 5px black;
                    }
                li{
                    color: ${colors.gray};
                    display: flex;
                    flex: 1 1 auto;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    
                }
                li:hover{
                    background: ${colors.primary};                    
                }
            ` } </style>   
        </>
    )
}
