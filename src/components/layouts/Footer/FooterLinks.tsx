import { Link } from "react-router-dom";

const pages = ["CONTACT", "TERMS OF SERVICES", "SHIPPING AND RETURNS"]

export const FooterLinks = () => {
    return (
        <div className="footerLinks">
            {
                pages.map((page, index) => {
                    return <Link key={index} to="#">{page}</Link>
                })
            }
        </div>
    );
}