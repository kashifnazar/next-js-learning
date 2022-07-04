import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const ninjas = await res.json()

    return {
        props: {ninjas}
    }

}

const AllNinjas = ({ninjas}) => {
    return ( 
    <>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="Homepage" />
    </Head>
    <h1>All Ninjas</h1> 
    {
        ninjas.map(ninja => (
            <div key={ninja.id}>
                <a className={styles.single}>
                    <h3>{ninja.name}</h3></a>
            </div>
        ))
    }
    </>
    );
}
 
export default AllNinjas;