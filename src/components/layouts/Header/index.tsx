import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { ToolBar } from "./ToolBar";

const pages = ["Shop", "Blog", "Our Story"];

export const Header = () => {
    return (
      <>
        <div>
          <header className="head">
            <Logo />
            <div className="headerPages" style={{ display: "flex" }}>
              {
                pages.map((page, index) => {
                  return <Link key={index} to="#">{page}</Link>
                })
              }
              <div className="vr"></div>
            </div>
            <ToolBar />
          </header>
        </div>
      </>
    );
}