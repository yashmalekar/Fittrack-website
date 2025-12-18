import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from "@mui/icons-material";

const data = {
  totalCaloriesBurnt:13500,
  totalWorkouts:6,
  avgCaloriesBurntPerWorkout:2250,
  totalWeeksCaloriesBurnt:{
  weeks:["17th","18th","19th","20th","21th","22th","23th"],
  caloriesBurned:[10500,0,0,0,0,0,13500]
  },
  pieChartData:[
  {
  id:0,
  value:6000,
  label:"Legs"
  },
  {
  id:1,
  value:1500,
  label:"Back"
  },
  {
  id:2,
  value:3750,
  label:"Shoulder"
  },
  {
  id:3,
  value:2250,
  label:"ABS"
  }
  ]
};
export const counts = [
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
