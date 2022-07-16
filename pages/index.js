import Link from 'next/link'
import Layout from '../components/app/Layout'

export default function Home() {
  return (
    <Layout>
      <Link href='/albums'>Ir a los álbumes</Link>
    </Layout>
  )
}
