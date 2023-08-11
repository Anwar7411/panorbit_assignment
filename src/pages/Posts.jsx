import React, { useEffect, useState } from 'react'
import MenuBar from '../components/menubar/MenuBar';
import Navbar from '../components/navbar/Navbar';


const Posts = () => {
    const [data,setData] = useState({})
   
 //useEffect for getting single user which profile need to be view
    useEffect(()=>{
       let user=JSON.parse(localStorage.getItem("user"));
        setData(user);
    },[])
  return (
    <div>
    <div>
      <MenuBar  page={'Posts'} />
    </div>
    <div>
      <Navbar data={data} page={'Posts'} />
    </div>
</div>
  )
}

export default Posts