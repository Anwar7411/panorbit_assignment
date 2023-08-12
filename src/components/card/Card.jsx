import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Card.css'
import { getUserData } from '../../redux/Action';
import CloseIcon from '@mui/icons-material/Close';

const Card = ({data,setOpen}) => {
    const[user,setUser] = useState([]);
    const userData = useSelector((store)=>store.userData);
    const navigate = useNavigate();
    const dispatch =useDispatch();

    const handleSignOut=()=>{
        localStorage.setItem("user",{});
        navigate("/")
    }

    useEffect(()=>{
        let userArr=[];
        if(userData.length>0){
        for(let i=0;i<userData.length;i++){
          if(userData[i].name!==data.name){
            userArr.push(userData[i])
          }
          if(userArr.length==2){
            break;
          }
        }
        setUser(userArr)
      }else{
        dispatch(getUserData());
      }
    },[userData])

    console.log("user",user)
  return (
    <div className='card-container'>
      <div>
      <div className='card-user-profile'>
            <img src={data?.profilepicture} alt="" />
            <p>{data?.name}</p>
            <p>{data?.email}</p>
            <hr  className='card-user-hr-line'/>
        </div>
        <div className='card-online-user'>
            {
                user.length>0 && user.map((el,i)=>(
                <div className='card-online-user-single'>
                    <img src={el.profilepicture} alt="" />
                    <p>{el.name}</p>
                </div>
                ))
            }
        </div>
       <button onClick={handleSignOut} className='card-signout-btn'>Sign out</button>
       </div>
      <CloseIcon  className='close-icon' onClick={()=>setOpen(false)}/>
      </div>
  )
}

export default Card