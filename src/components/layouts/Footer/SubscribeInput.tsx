import { Link } from "react-router-dom";

const placeholder = "Give an email, get the newsletter.";

export const SubscribeInput = () =>{
    return(
      <>
      <div className="subscribeInput">
        <input type="text" placeholder={placeholder} />
        <Link to="#" className="arrowRight">&rarr;</Link>
      </div>
      </>  
    );
}