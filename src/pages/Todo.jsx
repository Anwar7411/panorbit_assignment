import React, { useEffect, useState } from 'react'
import MenuBar from '../components/menubar/MenuBar';
import Navbar from '../components/navbar/Navbar';

const Todo = () => {
    const [data,setData] = useState({})
   
 //useEffect for getting single user which profile need to be view
    useEffect(()=>{
       let user=JSON.parse(localStorage.getItem("user"));
        setData(user);
    },[])
  return (
    <div>
    <div>
      <MenuBar  page={'Todo'} />
    </div>
    <div>
      <Navbar data={data} page={'Todo'} />
    </div>
</div>
  )
}

export default Todo