import Head from 'next/head'

export const getStaticPaths = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const ninjas = await await res.json()

    const paths = ninjas.map(n => ({params: {id: n.id.toString()}}))

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async ({params: {id}}) => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const ninja = await res.json()

    return {
        props: {ninja}
    }

}



const NinjaDetail = ({ninja}) => {
    return ( <>
    <Head>
        <title>{ninja.name}</title>
    </Head>
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.phone}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div></> );
}
 
export default NinjaDetail;