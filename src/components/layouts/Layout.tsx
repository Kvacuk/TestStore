import { Header } from "./Header"
import { Outlet, Link } from 'react-router-dom'
import { Footer } from "./Footer";


export const Layout = () => {
    return (
      <>
        <div className="layout">
            <Header />
          <Outlet />
          <Footer/>
        </div>
      </>
    );
}