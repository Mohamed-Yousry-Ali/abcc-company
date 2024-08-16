import { Box, Grid, Image, Text } from "@chakra-ui/react";
import imgabout from "./../../public/images/bg-about.png";
import { useTranslation } from "react-i18next";
const AboutCom = () => {
  const { t } = useTranslation();
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive columns
      gap={10}
      my={30}
      px={15}
      templateRows={{ base: "auto auto", md: "auto" }} // Responsive rows
    >
      <Box position="relative">
        <Image src={imgabout} w="100%" h="auto" />
        <Box
          position="absolute"
          top="70%"
          left="68%"
          transform="translate(-50%, -50%)"
          color="white"
          p={4}
          w={{ base: "80%", md: "60%", sm: "40%" }} // Responsive width for text container
        >
          <Text
            as={"h3"}
            fontSize={{ base: "60px", md: "40px", lg: "56px" }}
            fontWeight="bold"
          >
            <Box
              as="span"
              style={{
                color: "#f28e57",
                display: "block",

                fontWeight: "bold",
                marginBottom: "-10px",
              }}
            >
              {" "}
              {t("aboutHomePageNabza")}
            </Box>
            {t("aboutHomePageKnoladge")}
          </Text>
        </Box>
      </Box>

      <Box mx={4}>
        <Text
          as={"h2"}
          color={"#034583"}
          fontSize={50}
          fontWeight={"bold"}
          marginBlockStart={15}
          marginBlockEnd={15}
        >
          {t("OurFound")}
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
        <Text
          as={"h2"}
          color={"#034583"}
          fontSize={50}
          fontWeight={"bold"}
          marginBlockEnd={15}
        >
          {t("ourVision")}
        </Text>
        <Text
          as={"p"}
          marginTop={0}
          marginBottom={"1rem"}
          lineHeight={1.8}
          fontSize={20}
        >
          {t("ourVisionInfo")}
        </Text>
        <Text
          as={"h2"}
          color={"#034583"}
          fontSize={50}
          fontWeight={"bold"}
          marginBlockEnd={15}
        >
          {t("gouls")}
        </Text>
        <Text
          as={"p"}
          marginTop={0}
          marginBottom={"1rem"}
          lineHeight={1.8}
          fontSize={20}
        >
          {t("goulsInfo")}
        </Text>
      </Box>
    </Grid>
  );
};

export default AboutCom;
