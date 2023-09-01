import { React, useState } from "react";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaPlusCircle } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material";
import { v4 } from "uuid";
import Card from "../components/Card";
import CardCompletd from "../components/CardCompleted";
import ActiveCard from "../components/ActiveCard";

const HomeScreen = () => {
  const [tab, setTab] = useState(1);
  const [message, setMessage] = useState("");
  const [array, setArray] = useState([]);
  const changeIndex = (index) => {
    setTab(index);
  };
  // // const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };


  // Function To push Data to an Array
  const pushData = () => {
    // const index = 0;
    // setCount(count + 1);
    const itemObjects = {
      id: v4(),
      text: message,
      isCompleted: false,
    };
    setArray([...array, itemObjects]);
    // console.log(array);

    const StringifiedArray = JSON.stringify(array)
    localStorage.setItem('MainArr',StringifiedArray)
    const recoveredArray = localStorage.getItem('MainArr')
    const stringifiedRecArr = JSON.parse(recoveredArray)
    console.log(stringifiedRecArr)
    const all4One = [...stringifiedRecArr,itemObjects]
    
    localStorage.setItem('StringifiedNewArray', JSON.stringify(all4One))

    

    
  };


  // Function to Change to a Complteted Array
  const changeToCompleted = (id)=>{
  const updatedArray = array.map((word)=>{
    if(id === word.id){
     return {...word, isCompleted: !word.isCompleted}
    }
    return word;
  }
  )
  setArray(updatedArray)
  console.log(updatedArray)
    // setArray(!find.isCompleted)
  }

  // Function to Delete Date from an array

  const deleteData = (id)=>{
    const remainingTasks = array.filter((task)=> id !== task.id)
    setArray(remainingTasks)
    console.log(array)

  }



  // Filtered Array for Completed Tasks
  const Done = array.filter((item)=> item.isCompleted===true)
  

  // Filtered Array for Active/Uncompleted Tasks
  const Active = array.filter((item)=> item.isCompleted===false)




  // Material-Ui Theme
  const theme = createTheme({
    typography: {
      h3: {
        fontSize: "70px",
        "@media (max-width:375px)": {
          fontSize: "25px",
        },
      },
    },
  });

  return (
    <>
      {/* rgb(133,121,203)=>purple color */}
      <section>
        {/* HeadingText Start */}
        <div className="container">
          <div className="xs:text-left sm:text-left md:text-left lg:text-center xs:pt-4 sm:pt-6 md:pt-8">
            <ThemeProvider theme={theme}>
              <Typography
                variant={"h3"}
                component="h3"
                sx={{
                  textShadow: "3px 2px 4px black",
                  color: "white",
                }}
              >
                Todo App
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        {/* HeadingText End */}

        {/* Input and Plus content */}
        <Grid
          container
          paddingY={"20px"}
          sx={{
            justifyContent: "center",
          }}
          spacing={"1"}
        >
          <Grid item xs="7" sm="6" md="5" xl="4" lg="4">
            <input
              id="input"
              onChange={handleChange}
              value={message}
              style={{
                width: "100%",
                boxShadow: "1px 1px 15px black",
                padding: "15px 6px",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                marginTop: "20px",
              }}
            />
          </Grid>
          <Grid
            // className=" md:text-center sm:text-center xs:text-center md:justify-center  bg-blue-600"
            sx={{
              fontSize: {
                xs: "30px",
                sm: "40px",
                md: "65px",
                xl: "70px",
                lg: "70px",
              },
              textAlign:{
                sm:'center',
                md: 'center'
              },

        
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginLeft: {
                md: "40px",
                lg: "10px",
                xl: "10px",
              },
            }}
            item
            xs="7"
            sm="7"
            md="2"
            xl="2"
            lg="2"
          >
            <FaPlusCircle
            className="md:ml-52 sm:ml-48 xs:ml-36   lg:ml-0"
              style={{
                border: "2px solid white",
                borderRadius: "50%",
                color: "rgb(36,25,103)",
                boxShadow: "1px 1px 10px black",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={pushData}
            />
          </Grid>
        </Grid>
        {/* input and plus end */}

        <div className="contained">
          <div className="btnDiv">
            <button
              onClick={() => changeIndex(1)}
              className={tab === 1 ? "btn btn_active" : "btn"}
            >
              Active
            </button>{" "}
            <button
              onClick={() => changeIndex(2)}
              className={tab === 2 ? "btn btn_active" : "btn"}
            >
              Completed
            </button>
            <button
              onClick={() => changeIndex(3)}
              className={tab === 3 ? "btn btn_active" : "btn"}
            >
              All
            </button>
          </div>
        </div>
        
         <div
          id={"activeContainer"}
          className={tab === 1 ? "active-tab tabs grid grid-cols-3   md:gap-3 lg:gap-2 sm:justify-center md:justify-center" : "tabs"}
        >
          {
            Active.map((currentTask)=>(

              <ActiveCard
              key={currentTask.id}
              text={currentTask.text}
              onClickX={()=>deleteData(currentTask.id)}
              onClickDouble={() => changeToCompleted(currentTask.id)}
              />



            ))
          }
          
        </div> 
        
        
        <div
       
          id={"completedContainer"}
          className={tab === 2 ? "active-tab tabs grid grid-cols-3   md:gap-3 lg:gap-2 sm:justify-center md:justify-center" : "tabs"}
        >
             
         {Done.map((word)=>(
               <CardCompletd
               key={word.id}
               text={word.text}
               onClickX={()=>deleteData(word.id)}
             />
         ))} 
      


        
        </div>
      
        
        <div
          
          id={"allContainer"}
          className={tab === 3 ? "active-tab tabs grid grid-cols-3 md:gap-3 lg:gap-2 sm:justify-center md:justify-center" : "tabs"}
        >
          {array.map((word) => (
            <Card
            key={word.id}
            text={word.text}
            
            onClickDouble={() => changeToCompleted(word.id)}
            onClickX={()=>deleteData(word.id)}
            />
            ))}
            {/* <button className="bg-gray-300 text-white">Hello</button> */}
        </div>
      </section>
    </>
  );
};
export default HomeScreen;
