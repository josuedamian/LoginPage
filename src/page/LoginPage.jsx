/* eslint-disable no-undef */
import {
  Button,
  Container,
  Grid,
  outlinedInputClasses,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginAction } from "../redux/reducers/loginReducer";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    dispatch(postLoginAction({ email, password, toast }));
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(name);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  function handleCallbackResponse(response) {
    console.log(response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "284909755752-ivccoit13s2cikbplc61bs89rsfgi81v.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <Container
      className="fondo"
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#5dc1b9",
            borderRadius: "10%",
            height: "400px",
            width: "400px",
          }}
        >
          {/* <Grid
          
        > */}
          <Typography
            sx={{
              margin: "40px 12px",
              fontSize: "30px",
              color: "black",
              fontWeight: "700",
            }}
          >
            LOGIN
          </Typography>

          <TextField
            id="filled-basic"
            name="email"
            label="Usuario"
            variant="filled"
            sx={{ marginBottom: "40px" }}
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            name="password"
            label="Constraseña"
            variant="filled"
            sx={{ marginBottom: "40px" }}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            INGRESAR
          </Button>
          <div id="signInDiv"></div>
        </Grid>
      </form>
      {/* </Grid> */}
    </Container>
  );
};

export default LoginPage;
