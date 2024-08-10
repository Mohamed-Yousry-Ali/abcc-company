import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Container maxW="7xl">
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default RootLayout;
