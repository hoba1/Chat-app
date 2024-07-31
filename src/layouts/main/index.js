import { Container } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)

  if(isLoggedIn){
    return <Navigate to={"/app"}/>
  }


  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <div className="d-flex gap-3">
          <div className="w-100 d-flex flex-column align-items-center">
            <img style={{ height: 120, width: 120 }} src={logo} alt="Logo" />
          </div>
        </div>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
