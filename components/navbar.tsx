import '@/css/NavbarComponent.css'
import { Button } from 'antd'
import Link from 'next/link'

export default function Navbar(){
    return (
        <nav id='navbar'>
            <Link href={"/"} id="nav-title">GEE<span className='text-red-500'>{"I<>I"}</span>EEN</Link>
            <div id="nav-links">
                <Link href={"/"}>Courses</Link>
                <Link href={"/"}>Practise</Link>
                <Link href={"/"}>Articles</Link>
                <Link href={"/"}>Sign In</Link>
                <Link href={"/"} className='getStarted'>Get Started</Link>
            </div>
        </nav>
    )
}