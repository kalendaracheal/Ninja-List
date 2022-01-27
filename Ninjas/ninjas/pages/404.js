import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
const Notfound = () => {
// for redirecting to the home page if wrong url is accessed
const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/');
    }, 3000)
  }, [])
  return (
  <div className='not-found'>
      <h2>Oooops</h2>
      <h2>That page Cannot be found</h2>
      
      <p>Go back to the <Link href='/'><a>Home Page</a></Link></p>
  </div>
  );
};

export default Notfound;
