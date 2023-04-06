import { Link } from "react-router-dom"

const links = [
    {
        value: "LinkedIn",
        icon: "/assets/icons/linkedIn_icon.svg"
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

export const FooterToolBar = () => {
    return (
        <div className="footerIcons d-flex" >
            {
                links.map((link, index) => {
                    return <Link key={index} to="#"><img src={link.icon} alt={link.value}/></Link>
                })
            }
        </div>
    )
}