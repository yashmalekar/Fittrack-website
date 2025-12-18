import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import {counts} from '../utils/data.js'
import {
    FitnessCenterRounded,
    LocalFireDepartmentRounded,
    TimelineRounded,
  } from "@mui/icons-material";
import CountCards from '../components/cards/CountCards';
import WeeklyStatCard from '../components/cards/WeeklyStatCard';
import CategoryChart from '../components/cards/CategoryChart';
import AddWorkout from '../components/AddWorkout';
import WorkoutCard from '../components/cards/WorkoutCard';
import {addWorkout, getDashboardDetails, getWorkouts} from '../api'

const Container = styled.div`flex:1;
                            height:100%;
                            display:flex;
                            justify-content:center;
                            padding:22px 0px;
                            overflow-y:scroll;`;
const Wrapper = styled.div`flex:1;
                            max-width:1400px;
                            display:flex;
                            flex-direction:column;
                            gap:22px;
                            @media (max-width:600px){
                                gap:12px;
                            }`;
const Title = styled.div`font-size:22px;
                        color: ${({theme})=>theme.text_primary};
                        font-weight:500;`;
const FlexWrap = styled.div`display:flex;
                            flex-wrap:wrap;
                            justify-content:space-between;
                            gap:22px;
                            padding:0px 16px;
                            @media(max-width: 600px){
                                gap:12px;
                            }`;
const Section = styled.div`display:flex;
                            flex-direction:column;
                            padding:0px 16px;
                            gap:22px;
                            padding:0px 16px;
                            @media(max-width:600px){
                                gap:12px;
                            }`;
const CardWrapper = styled.div`display:flex;
                                flex-wrap:wrap;
                                justify-content:center;
                                gap:20px;
                                margin-bottom:100px;
                                @media(max-width:600px){
                                    gap:12px;
                                }`;

const Dashboard = () => {
    const [data, setData] = useState();
    const [loading,setLoading] = useState(false);
    const [buttonLoading,setButtonLoading] = useState(false);
    const [todaysWorkouts, setTodaysWorkouts] = useState([])
    const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

 const dashboardData = async () =>{
  setLoading(true);
  const token = localStorage.getItem("fittrack-app-token")
  await getDashboardDetails(token).then((res)=>{
    setData(res.data);
    setLoading(false);
  });
 };
 const getTodaysWorkout = async () =>{
  setLoading(true);
  const token = localStorage.getItem("fittrack-app-token")
  await getWorkouts(token,"").then((res)=>{
    setTodaysWorkouts(res?.data?.todaysWorkouts);
    setLoading(false);
  });
 };
 
 const addNewWorkout = async () => {
  setButtonLoading(true);
  const token = localStorage.getItem("fittrack-app-token");
  await addWorkout(token, { workoutString: workout })
    .then((res) => {
      dashboardData();
      getTodaysWorkout();
      setButtonLoading(false);
    })
    .catch((err) => {
      alert(err);
    });
};

 useEffect(() => {
  dashboardData();
  getTodaysWorkout();
 },[]);
 
    const counts = [
      {
        name: "Calories Burned",
        icon: (
          <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
        ),
        desc: "Total calories burned today",
        key: "totalCaloriesBurnt",
        unit: "kcal",
        color: "#eb9e34",
        lightColor: "#FDF4EA",
      },
      {
        name: "Workouts",
        icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
        desc: "Total no of workouts for today",
        key: "totalWorkouts",
        unit: "",
        color: "#41C1A6",
        lightColor: "#E8F6F3",
      },
      {
        name: "Average  Calories Burned",
        icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
        desc: "Average Calories Burned on each workout",
        key: "avgCaloriesBurntPerWorkout",
        unit: "kcal",
        color: "#FF9AD5",
        lightColor: "#FEF3F9",
      },
    ];
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
            {counts.map((item)=>(
                <CountCards item={item} data={data} />
            ))}
        </FlexWrap>

        <FlexWrap>
            <WeeklyStatCard data={data}/>
            <CategoryChart data={data}/>
            <AddWorkout workout={workout} setWorkout={setWorkout} addNewWorkout={addNewWorkout} buttonLoading={buttonLoading} />
        </FlexWrap>

        <Section>
            <Title>Today's Workouts</Title>
            <CardWrapper>
              {todaysWorkouts.map((workout)=>(
                <WorkoutCard workout={workout} />
              ))}
            </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  )
}

export default Dashboard
