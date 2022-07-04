import Link from 'next/link'

const NotFound = () => {
    return ( <div className="not-found">
        <h1>Oops...</h1>

        <h2>That page could not be found</h2>

        <p>Try going to <Link href="/"><a>Homepage</a></Link></p>
    </div> );
}
 
export default NotFound;