import { Link } from "react-router-dom"

const links = [
    {
        value: "search",
        icon: "/assets/icons/search_icon.svg"
    },
    {
        value: "cart",
        icon: "/assets/icons/cart_icon.svg"
    },
    {
        value: "user",
        icon: "/assets/icons/user_icon.svg"
    }
]
export const ToolBar = () => {
    return (
        <>
            <div className="header-icons">
                {
                    links.map((link, index) =>{
                        return <Link to="#" key={index}><img src={link.icon} alt={link.value}/></Link>
                    })
                }
            </div>
        </>
    )
}