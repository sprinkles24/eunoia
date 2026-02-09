import { Outlet, Link } from 'react-router-dom'
import sunIcon from '../assets/sun.svg'

function Layout() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav>
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
        <button className="nav-icon-btn" aria-label="Sun">
          <img src={sunIcon} alt="" />
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
