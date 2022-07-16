import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className='max-w-7xl my-60 px-6 mx-auto'>{children}</div>
    </>
  )
}

export default Layout
