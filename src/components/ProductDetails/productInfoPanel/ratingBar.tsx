import { useState } from "react";
import {FaStar} from "react-icons/fa"

export const RatingBar = () => {

  const [rating, setRating] = useState(0);
  
    const handleClick = (value: number) => {
      setRating(value);
      console.log(rating);
    };
    
  return (
    <div className="d-flex">
          {[...Array(5)].map((star, index) => {
            const value = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  style={{display: 'none'}}
                  />
                <FaStar
                  style={{marginRight: 5}}
                  size={25}
                  onMouseEnter={() => setRating(value)}
                  onMouseLeave={() => setRating(0)}
                  onClick={() => handleClick(value)}
                  color={value <= rating ? "black" : "#e4e5e9"}
                />
              </label>
            );
          })}
          <p style={{color: '#707070' }}>{rating} customer review</p>
    </div>
   );
}
 