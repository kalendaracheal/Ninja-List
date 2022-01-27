import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'



const ninjalist = () => {
  return (
  <>
   <Head>
      <title>My Ninjas | Ninjas</title>
      <metadata name='keywords' content='ninjas'/>
    </Head>
    <div>
      <h1>My Ninja's List</h1>
      <div className={styles.ninjalist}>
      <div className={styles.ninjalist1}>
      <h4> Fuit Ninja</h4>
        <Image src='/ninja2.jpg' width='200' height='150'/>
        <h4>Food Ninja</h4>
        <Image src='/ninja3.png' width={400} height={200}/>
        <h4>Ninja Girl</h4>
        <Image src='/Ninja.png' width='200' height='150'/>
        
      </div>
      <div className={styles.ninjalist1}>
      <h4>Star Ninja</h4>
        <Image src='/Ninja3.jpg' width={200} height={150}/>
        <h4>Purple Ninja</h4>
        <Image src='/ninja4.jpg' width='200' height='150'/>
        <h4>Monk Ninja</h4>
        <Image src='/ninja5.jpg' width={200} height={150}/>
        
      </div>
      <div className={styles.ninjalist1}>
      <h4>Lady Ninja</h4>
        <Image src='/ninja6.jpg' width={200} height={150}/>
        <h4>Red Ninja</h4>
        <Image src='/ninja7.jpg' width={200} height={150}/>
        <h4>Monk Ninja</h4>
        <Image src='/ninja8.jpg' width={200} height={150}/>
     
      </div>
     <div className={styles.ninjalist1}>
     <h4>Night Ninja</h4>
        <Image src='/ninja9.jpg' width={200} height={150}/>
        <h4>  Rabbit Ninja</h4>
        <Image src='/ninja10.jpg' width={200} height={150}/>
          
     </div>  
        </div>
      
    </div>
  </>
  );
};

export default ninjalist;
