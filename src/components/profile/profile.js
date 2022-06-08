import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
//import { set } from "date-fns/esm";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../store/profile";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Anna Vasileva
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(user));
    setShow(!show);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ width: 56, height: 56, margin: 2 }}
          />

          <Typography component="h1" variant="h5">
            {profile.firstName}
          </Typography>
          <Typography component="h1" variant="h5">
            {profile.lastName}
          </Typography>
          <Typography component="h1" variant="h5">
            Hello, it's my profile
          </Typography>
          <Button
            onClick={() => setShow(!show)}
            variant="contained"
            sx={{ margin: 4 }}
          >
            Modifie
          </Button>
          {show && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl>
                <TextField
                  value={user.firstName}
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  name="firstName"
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
                <TextField
                  value={user.lastName}
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  name="lastName"
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </FormControl>
            </form>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
