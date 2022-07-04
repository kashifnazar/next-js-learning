import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </div>
  )
}
