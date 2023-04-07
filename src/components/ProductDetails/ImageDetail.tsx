import { useState } from "react";

type propsTypes ={
    imgPath: string | undefined,
}

export const ImageDetial = (props: propsTypes) => {

    return (
      <>
        <div className="imgDetail">
          <div className="extraImgs">
            {Array.from({ length: 4 }, (_, i) => (
              <img key={i} src={props.imgPath} alt="productImg" />
            ))}
          </div>
          <div className="currentImg">
            <img src={props.imgPath} alt="productImg" />
          </div>
        </div>
      </>
    );
}