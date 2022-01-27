import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  return(
      <nav>
          <div className="logo">
             <Image src='/ninja1.jpg ' width='100' height='100'/>

          </div>
        <div className='nav'>
           
           <Link href='/'><a>Home</a></Link>           
           <Link href='/about'><a>About</a></Link>
           <Link href='/ninjalist'><a>Ninja Listing</a></Link>

       </div>
      </nav>
       )
};

export default Navbar;
