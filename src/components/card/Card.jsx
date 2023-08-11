import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {
    const[user,setUser] = useState([]);
    const userData = useSelector((store)=>store.userData);
    const navigate = useNavigate();

    const handleSignOut=()=>{
        localStorage.setItem("user",{});
        navigate("/")
    }

    useEffect(()=>{
        let userArr=[];
        for(let i=0;i<userData.length;i++){
          if(userData[i].name!==data.name){
            userArr.push(userData[i])
          }
          if(userArr.length==2){
            break
          }
        }
        setUser(userArr)
    },[])
  return (
    <div>
        <div>
            <img src={data?.profilepicture} alt="" />
            <h2>{data?.name}</h2>
            <h2>{data?.email}</h2>
            <hr />
        </div>
        <div>
            {
                user.length>0 && user.map((el,i)=>(
                <div>
                    <img src={el.profilepicture} alt="" />
                    <p>{el.name}</p>
                    {i==0 ? <hr />:""}
                </div>
                ))
            }
        </div>
       <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Card