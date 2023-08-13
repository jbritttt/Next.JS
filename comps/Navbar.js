import Link from 'next/link'
import Image from 'next/image'

const  Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <Image src="/public/logo.png" height={100} width={100}/> */}
                <h1>People List</h1>
            </div>
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/ninjas">People Listing</Link>
            
        </nav>
        );
}
 
export default Navbar;
