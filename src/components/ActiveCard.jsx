import React from 'react'
import {Typography } from "@mui/material";
import {FaTimes,FaEdit, FaCheckDouble, } from 'react-icons/fa'

const ActiveCard = ({
    text,
    key,
    onClickX,
    onClickDouble,
    onClickEdit,
  }) => {
  return (
    <>
        
        <div
        className="xs:w-9/12  sm:w-9/12  relative  md:w-2.55 lg:w-3.55 way"
        key={key}

   
    
      >
        <div className="pt-5 xs:pl-6 sm:pl-6 flex flex-row" >
          <Typography variant="h6" component={"h4"}>
            {text}
          </Typography>

          <div className='ml-auto wayed bg-blue-400 font-bold absolute xs:top-44 xs:right-2 sm:right-2 sm:top-48 md:top-24  lg:top-24 lg:left-4'>
            ACTIVE
          </div>
        </div>

        <div className=" sm:justify-start sm:pt-44 xs:pt-40 xs:pl-6 md:mt-30 sm:pl-6   lg:ml-0 lg:mt-0   md:justify-end flex w-full"
       
        >
          <FaEdit
            style={{
              color: "rgb(30,21,102)",
              marginRight: "10px",
              cursor:'pointer'
            }}
            onClick={onClickEdit}
          />
          <FaCheckDouble
            style={{
              color: "rgb(85,160,96)",
              marginRight: "10px",
              cursor:'pointer'   
            }}
            onClick={onClickDouble}
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

export default ActiveCard