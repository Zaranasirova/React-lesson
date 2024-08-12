import React from "react";
import Cat from "../assets/image/FELV-cat.jpg";
import Mercedes from "../assets/image/mercedes.png";
import Download from "../assets/image/download.jpg";
import Nature from "../assets/image/images (2).jpg";


const images = {
    Cat,
    Mercedes,
    Download,
    Nature
  };

const Shop = ({ imgName }) => {
const imgsrc=images[imgName];
  return (
    <div>
      {imgsrc ? <img src={imgsrc} alt={imgName} /> : <p>Şəkil tapılmadı</p>}

    </div>
  );
};

export default Shop;
