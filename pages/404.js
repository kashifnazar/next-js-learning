import Link from 'next/link'
import Head from 'next/head'


const NotFound = () => {
    return ( 
    
    <>
    <Head>
      <title>404</title>
      <meta name="keywords" content="Not found" />
    </Head>
    <div className="not-found">
        <h1>Oops...</h1>

        <h2>That page could not be found</h2>

        <p>Try going to <Link href="/"><a>Homepage</a></Link></p>
    </div>
    </> 
    
    );
}
 
export default NotFound;