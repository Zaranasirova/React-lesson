import axios from "axios";
import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let BASE_KEY="fca_live_moxTvYMVoCmXF3wly6nvczUkRloiOJjbfV1qvOir"

const CurrencyConverter = () => {
  const [amount,setAmount]=useState(0);
  const [fromCurrency,setFromCurrency]=useState('USD');
  const [toCurrency,setToCurrency]=useState("TRY");
  const [result,setResult]=useState(0);

const exchange= async()=>{
const res=await axios.get(`${BASE_URL}?apikey=${BASE_KEY}&base_currency=${fromCurrency}`).then(res=>res.data);
const result=(res.data[toCurrency]*amount).toFixed(2);
setResult(result);
}

  return (
    <div className="currency-div">
      <div style={{marginTop:'-20px',fontFamily:"arial",backgroundColor:"black", color:"#fff", width:"100%",textAlign:"center"}}>
        <h2 >Valyuta məzənnəsi tətbiqi</h2>
      </div>
     <div style={{marginTop:"25px"}}>
     <input type="number" className="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)} className="from-currency-option">
        <option>TRY</option>
        <option>EUR</option>
        <option>USD</option>
      </select>

      <FaRegArrowAltCircleRight style={{fontSize:"25px", marginRight:"10px" }} />
      <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)} className="to-currency-option">
        <option>Eur</option>
        <option>USD</option>
        <option>TRY</option>
      </select>
      <input type="number" value={result} onChange={(e)=>setResult(e.target.value)} className="result" />
     </div>
     <div>
      <button onClick={exchange} className="exchange-button">Çevir</button>
     </div>
    </div>
  );
};

export default CurrencyConverter;
