import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import imgabout from "./../../public/images/Group-8830 (1).png";
import { useTranslation } from "react-i18next";
const MsgCompany = () => {
  const { t } = useTranslation();
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
      gap={10}
      p={15}
      templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
      height={{ base: "1250px", md: "630px", lg: "630px" }} // Responsive rows
      backgroundColor={"#eee"}
    >
      <Box mx={4}>
        <Text
          as={"h2"}
          color={"#034583"}
          fontSize={50}
          fontWeight={"bold"}
          marginBlockStart={15}
          marginBlockEnd={15}
        >
          {t("msgCompany")}
        </Text>
        <Text
          as={"p"}
          marginTop={0}
          marginBottom={"1rem"}
          lineHeight={1.8}
          fontSize={20}
          textAlign={"justify"}
          width={"90%"}
        >
          {t("OurFounfInfo")}
        </Text>
        <Button
          backgroundColor={"#034583"}
          display={"inline-block"}
          textAlign={"center"}
          color={"#fff"}
          minWidth={"170px"}
          border={"1px solid #a7bfe1"}
          borderRadius={"20px 5px 25px 0"}
          transition={"300ms"}
          fontSize={"25px"}
          marginBlockStart={"20px"}
          height={"60px"}
          _hover={{ bg: "#2a2e34", borderRadius: "25" }}
        >
          {t("more")}
        </Button>
      </Box>
      <Box position="relative">
        <Image src={imgabout} w="100%" h={"70%"} />
        <Box
          position="absolute"
          top="70%"
          left="68%"
          transform="translate(-50%, -50%)"
          color="white"
          p={4}
          w={{ base: "80%", md: "60%", sm: "50%" }} // Responsive width for text container
        ></Box>
      </Box>
    </Grid>
  );
};

export default MsgCompany;
