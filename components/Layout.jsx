import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='Layout max-w-7xl px-6 mx-auto'>
      <Meta />
      <Header />
      {children}
    </div>
  )
}

export default Layout
