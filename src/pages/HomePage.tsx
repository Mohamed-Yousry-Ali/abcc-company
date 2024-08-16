import { Box } from "@chakra-ui/react";
import ImageSlider from "../UI/ImageSlider";
import { SlideData } from "../SlideData";
import AboutCom from "../components/AboutCom";
import MsgCompany from "../components/MsgCompany";
import CompanyServices from "../components/CompanyServices";
import VisionHomePage from "../components/VisionHomePage";
import MapCompany from "../components/MapCompany";

const HomePage = () => {
  return (
    <>
      <Box w="100%" color="white" style={{ direction: "ltr" }}>
        <ImageSlider slides={SlideData} />
      </Box>

      <AboutCom />

      <MsgCompany />

      <CompanyServices />
      <VisionHomePage />
      <MapCompany />
    </>
  );
};

export default HomePage;
