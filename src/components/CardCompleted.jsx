import React from 'react'
import {Typography } from "@mui/material";
import {FaTimes,FaEdit,FaCheckCircle} from 'react-icons/fa'

const CardCompleted = ({
  text,
  key,
  onClickX,
  onClickEdit,
}) => {
  return (
    <>
       <div
        className="xs:w-9/12  sm:w-9/12  md:w-2.55 lg:w-3.55 way"
        key={key}

   
    
      >
        <div className="pt-5 xs:pl-6 relative sm:pl-6">
          <Typography variant="h6" component={"h4"}>
            {text}
          </Typography>
          <div className='ml-auto wayeded  font-bold absolute xs:top-48  xs:right-2 sm:right-2 sm:top-48 md:top-24 md:right-36  lg:top-24 lg:left-4'>
           <FaCheckCircle />
          </div>
        </div>

        <div className="sm:justify-start sm:pt-44 xs:pt-40 xs:pl-6 md:mt-30 sm:pl-6   lg:ml-0 lg:mt-0   md:justify-end flex w-full"
       
        >
          <FaEdit
            style={{
              color: "rgb(30,21,102)",
              marginRight: "10px",
              cursor:'pointer'
            }}
            onClick={onClickEdit}
          />
      
          <FaTimes
            style={{
              color: "red",
              marginRight: "10px",
              cursor:'pointer'
            }}
            onClick={onClickX}
          />
        </div>
      </div>
    
    
    
    </>
  )
}

export default CardCompleted