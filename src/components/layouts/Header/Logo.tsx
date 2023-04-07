import { Link } from "react-router-dom"


export const Logo = () => {
    return (
      <>
        <div className="logo">
          <Link to="/">
            <span style={{ color: "#A18A68" }}>S</span>HOPPE
          </Link>
        </div>
      </>
    );
}