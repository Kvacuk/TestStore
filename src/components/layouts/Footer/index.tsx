import { FooterLinks } from "./FooterLinks"
import { FooterToolBar } from "./FooterToolBar";
import { SubscribeInput } from "./SubscribeInput";


export const Footer= () => {
    return (
      <>
        <div className="footer">
          <hr />
          <div className="justify-content-between d-flex">
            <FooterLinks />
            <SubscribeInput />
          </div>
          <div className="mt-5 justify-content-between d-flex">
            <p>&copy;<b> 2021 Shelly.</b> Terms of use <b>and</b> privacy policy.</p>
            <FooterToolBar/>
          </div>

        </div>
      </>
    );
}