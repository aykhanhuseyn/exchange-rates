import { CgArrowsExchangeAlt } from "react-icons/cg";
import { Select } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import map from "lodash/map";
import "./style.scss";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};



const apiUrl = 'https://api.apilayer.com/exchangerates_data'; 
const api = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  // headers: {"apikey" : "Xu6aoyvyFmbIyXArnT1MyoX70pXXHcub"}
})

export const SelectExchange = () => {
  const [currency , setCurrency] = useState([])

useEffect(() => {

  api.get('/symbols').then((res) => setCurrency(res.data.symbols))
} , [])


  return (
  <div className="select">
    
    <Select className="left__select" defaultValue="AZN" style={{ width: 310 }} onChange={handleChange}>
    <Option key="AZN" value="AZN" >AZN</Option>
    <Option key="USD" value="USD" >USD</Option>
      {map(Object.keys(currency) , (item) => {
        return (
          <Option key={item} value={item} >{item}</Option>
        )
      })}
    </Select>
    <CgArrowsExchangeAlt className="exchange__icon" />
    <Select className="right__select" defaultValue="USD" style={{ width: 310 }} onChange={handleChange}>
    <Option key="USD" value="USD" >USD</Option>
    <Option key="AZN" value="AZN" >AZN</Option>
      {map(Object.keys(currency) , (item) => {
        return (
          <Option key={item} value={item} >{item}</Option>
        )
      })}
    </Select>
  </div>
  )
};
