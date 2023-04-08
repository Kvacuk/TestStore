import { useState } from "react";

export const AddToCartBar = () => {

    const [count, setCount] = useState<number>(1);

    const inputHandler = (event: any) =>{
        const value = event.target.value;
        if(!isNaN(parseInt(value))){
            setCount(parseInt(value));
        }
        else{
            setCount(0);
        }
    }

    return ( 
        <div className="addToCart">
            <div className="cartCounter">
                <button onClick={()=>{count > 0 && setCount(count-1)}}> - </button>
                <input type="text" className="" value={count} onChange={inputHandler}/>
                <button onClick={() => setCount(count+1)}> + </button>
            </div>
            <button className="btn btn-light">ADD TO CART</button>
        </div>
     );
}
 