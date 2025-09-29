import React, { useContext } from "react";
import UserContext from "./../context/UserContext";
import { Count } from './Count';


function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div className='flex text-center justify-center'>please Login</div>

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="text-3xl mt-5 italic text-pink-400 ">
        Welcome {user.name}
      </div>
        <div>
        <Count/>
        </div>
    </div>
  )
}

export default Profile