import {
  Container,
  Box,
  VStack,
  HStack,
  Text,
  Link,
  Image,
  Grid,
  Divider, // Import Divider
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgSrc from "./../../public/images/new revisions11.png";
import {
  faMobileButton,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgImage="url(https://aeco.com.sa/wp-content/themes/advanced_elements/images/bg-footer-2.jpg)"
      bgSize="cover"
      py={8}
    >
      <Container maxW="8xl">
        <VStack spacing={8}>
          <Box className="information" width="full" fontSize={18}>
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={4}
              width="full"
              alignItems="start"
              justifyItems="center"
            >
              <HStack
                spacing={4}
                alignItems="center"
                justifyContent="center"
                p={0}
                m={0}
              >
                <FontAwesomeIcon icon={faMobileButton} />
                <Text>+966504800846</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack
                spacing={4}
                alignItems="center"
                justifyContent="center"
                p={0}
                m={0}
              >
                <FontAwesomeIcon icon={faPhone} />
                <Text>0112090999</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack
                spacing={4}
                alignItems="center"
                justifyContent="center"
                p={0}
                m={0}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <Text>info@abcc.com.sa</Text>
                <Divider orientation="vertical" height="40px" />
              </HStack>
              <HStack
                spacing={4}
                alignItems="center"
                justifyContent="center"
                p={0}
                m={0}
              >
                <FontAwesomeIcon icon={faGlobe} />
                <Text>www.abcc.com.sa</Text>
              </HStack>
            </Grid>
          </Box>

          <Box marginBottom={"90px"}>
            <Image
              loading="lazy"
              decoding="async"
              src={imgSrc}
              alt="Company Logo"
              width={671}
              height={161}
              mx="auto"
            />
          </Box>

          <Box w="full">
            <HStack justify="space-between" align="center" w="full">
              <Box>
                <Text color={"#fff"} fontWeight={"bold"} fontSize={"30px"}>
                  جميع الحقوق محفوظة لدى موقع شركة الاعمال المتطورة © 2024
                </Text>
              </Box>
              <Box display={"flex"}>
                <HStack spacing={4} marginLeft={"20px"}>
                  <Link href="https://twitter.com/ELMTS_ADVANCED" isExternal>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      color={"#fff"}
                      fontSize={"50px"}
                    />
                  </Link>
                </HStack>
                <HStack spacing={4} marginLeft={"20px"}>
                  <Link href="https://twitter.com/ELMTS_ADVANCED" isExternal>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      color={"#fff"}
                      fontSize={"50px"}
                    />
                  </Link>
                </HStack>
                <HStack spacing={4} marginLeft={"20px"}>
                  <Link href="https://twitter.com/ELMTS_ADVANCED" isExternal>
                    <FontAwesomeIcon
                      icon={faSnapchat}
                      color={"#fff"}
                      fontSize={"50px"}
                    />
                  </Link>
                </HStack>
                <HStack spacing={4} marginLeft={"20px"}>
                  <Link href="https://twitter.com/ELMTS_ADVANCED" isExternal>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color={"#fff"}
                      fontSize={"50px"}
                    />
                  </Link>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
