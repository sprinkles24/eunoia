import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
