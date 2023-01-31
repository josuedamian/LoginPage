import { Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPatientAction } from "../redux/reducers/listPatients";
// import { postLoginAction } from "../redux/reducers/loginReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(getPatientAction);
  // const { token } = useSelector((state) => state.Login);
  // console.log(token);
  // localStorage.setItem("token", token);
  // dispatch(getPatientAction);
  const { listPatient } = useSelector((state) => state.Patient);
  console.log(listPatient);
  // useEffect(() => {
  //   dispatch(getPatientAction);
  // }, []);

  // dispatch(postLoginAction);
  return (
    <Container
      className="dashboard_found"
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          color: "black",
          fontWeight: "700",
        }}
      >
        WELCOME TO THE DASHBOARD
      </Typography>
    </Container>
  );
};

export default Dashboard;
