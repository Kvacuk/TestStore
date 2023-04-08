import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/IProduct";

const links = [
    {
        value: "mail",
        icon: "/assets/icons/mail_icon.svg"
    },
    {
        value: "facebook",
        icon: "/assets/icons/facebook_icon.svg"
    },
    {
        value: "instagram",
        icon: "/assets/icons/instagram_icon.svg"
    },
    {
        value: "twitter",
        icon:  "/assets/icons/twitter_icon.svg"
    }
]

export const IconsBar = () => {
    const product: IProduct = useSelector((state: any) => state.product);
    
    return (
      <div className="infoIconsBar">
        <Link to="#"><img src="/assets/icons/heart_icon.svg" alt='heart'/></Link>
        <div className="vr"></div>
        {
            links.map((link, index) =>{
                return <Link key={index} to="#"><img src={link.icon} alt={link.value}/></Link>
            })
        }
        <div className="infoCategory">
        <p><b>SKU:</b>12</p>
        <p><b>Category:</b>{product?.category}</p>
        </div>
      </div>
    );
}
 
