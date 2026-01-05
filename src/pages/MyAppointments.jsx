import React from 'react'
import {AppContext} from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
     <p className='font-3xl'>My appointments</p>
     <div>
        {doctors.slice(0,2).map((item,index)=>(
          <div key={index}>
            <div>
              <img src={assets.about_image} alt="" />
            </div>
          </div>
        ))}
     </div>
    </div>
  )
}

export default MyAppointments