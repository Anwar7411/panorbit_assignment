import React, { useEffect, useState } from 'react'
import MenuBar from '../components/menubar/MenuBar';
import Navbar from '../components/navbar/Navbar';

const Gallery = () => {
    const [data,setData] = useState({})
   
 //useEffect for getting single user which profile need to be view
    useEffect(()=>{
       let user=JSON.parse(localStorage.getItem("user"));
        setData(user);
    },[])
  return (
    <div>
        <div>
          <MenuBar  page={'Gallery'} />
        </div>
        <div>
          <Navbar data={data} page={'Gallery'} />
        </div>
    </div>
  )
}

export default Gallery