import Link from 'next/link'


const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <Link href="/"><h1>Ninja List</h1></Link>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninjas</a></Link>
    </nav> );
}
 
export default Navbar;