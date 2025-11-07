 import { Outlet } from "react-router-dom";
 
 import NavBar from "./Visiteur/components/NavBar";

 function PublicLayout() {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }

  export default PublicLayout;
