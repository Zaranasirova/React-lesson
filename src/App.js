import React, { useState } from "react";
import Shop from "./components/Shop";

const App = () => {
  const [img, setImg] = useState([]);
  const handleClick = () => {
    setImg([...img, rendomIMG()]);
  };
  function rendomIMG() {
    const imgArray = ["Cat", "Mercedes", "Download", "Nature"];
    return imgArray[Math.floor(Math.random() * imgArray.length)];
  }
  return (
    <div>
      <button onClick={handleClick}>elave et</button>
      {img.map((item, index) => (
        <Shop key={index} imgName={item}/>
      ))}
    </div>
  );
};

export default App;
