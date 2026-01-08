import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import manImg from "../../assets/section/img8.png";
import phoneImg from "../../assets/section/img3.png";
import bioAgeImg from "../../assets/section/img5.jpeg";
import biomarkersImg from "../../assets/section/biomarker.jpeg";

const SimpleHimsBackground = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/DetailedLab");
  };

  return (
    <Box
      sx={{
        width: "100%",
       background: "#0A2F6F",
        position: "relative",
        overflow: "hidden",
        borderRadius: 7,
      }}
    >
{/* TOP TEXT */}
<Box
  sx={{
    position: "relative",
    zIndex: 5,
    textAlign: "center",
    color: "#fff",
    maxWidth: { xs: "90%", sm: 680 },
    mx: "auto",
    mt: { xs: 1, sm: 2, md: 2 },
    mb: { xs: 8, sm: 12, md: 16 }, // Add bottom margin to create space
    px: { xs: 1, sm: 3 },
  }}
>
  <Typography
    sx={{
      fontSize: { xs: "0.6rem", sm: "0.75rem" },
      letterSpacing: "0.06em",
      opacity: 0.85,
      mb: { xs: 1, sm: 1.25 },
    }}
  >
    labs by LiquidRX
  </Typography>

  <Typography
    sx={{
      fontWeight: 650,
      lineHeight: 1.15,
      fontSize: { xs: "1.2rem", sm: "3.05rem", md: "3.4rem" },
    }}
  >
    Get Your Labs.
    <br />
    Go For Your Optimal.
  </Typography>
</Box>

{/* MAN IMAGE */}
<Box
  component="img"
  src={manImg}
  alt="Man"
  sx={{
    display: "block",
    mx: "auto",
    mt: { xs: -12, sm: -20, md: -24 },
    height: { xs: "auto", sm: "auto", md: "105vh" },
    maxHeight: { xs: "75vh", sm: "95vh", md: "none" }, // Increased from 55vh/70vh
    maxWidth: "90%",
    objectFit: "contain",
    zIndex: 2,
  }}
/>

      {/* CTA BUTTONS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: { xs: -10, sm: -12, md: -14 }, // Increased overlap on xs from -6 to -10
          mb: { xs: 6, md: 8 },
          px: 2,
          position: "relative",
          zIndex: 3, // Ensure buttons are above image
        }}
      >
        <Button
          onClick={handleButtonClick}
          sx={{
            px: { xs: 3, sm: 4.6 },
            py: { xs: 1, sm: 1.35 },
            borderRadius: "999px",
            backgroundColor: "#003B9D",
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textTransform: "none",
            boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            "&:hover": { backgroundColor: "#00359E" },
          }}
        >
          Start my labs
        </Button>

        <Button
          onClick={handleButtonClick}
          sx={{
            px: { xs: 3, sm: 4.6 },
            py: { xs: 1, sm: 1.35 },
            borderRadius: "999px",
            backgroundColor: "rgba(255,255,255,0.25)",
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textTransform: "none",
            backdropFilter: "blur(10px)",
            "&:hover": { backgroundColor: "747578" },
          }}
        >
          Learn more
        </Button>
      </Box>

      {/* HUGE CARD */}
      <Box
        sx={{
          width: { xs: "94%", sm: "92%", lg: "90%" },
          mx: "auto",
          borderRadius: { xs: "16px", sm: "22px" },
          backgroundColor: "#072A6EFF",
          position: "relative",
          overflow: "hidden",
          mb: { xs: 4, sm: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: 2.5, sm: 3, md: 4 },
            gap: { xs: 3, sm: 4, md: 0 },
            position: "relative",
            height: "100%",
            minHeight: { xs: "auto", sm: "380px", md: "420px", lg: "460px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "27%" },
              color: "#FFF",
              textAlign: { xs: "center", sm: "left" },
              order: { xs: 1, sm: 1 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "center" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem", lg: "2.9rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textAlign: { xs: "center", sm: "center" },
                }}
              >
                Find Your
                <br />
                Baseline
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 1.5, sm: 2, md: 2.4 },
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  textAlign: { xs: "center", sm: "center" },
                }}
              >
                Get a clear picture of your health with a simple lab test.
              </Typography>
            </Box>
          </Box>

          <Box
            component="img"
            src={phoneImg}
            alt="Phone"
            sx={{
              height: {
                xs: "55vh",
                sm: "70vh",
                md: "73vh",
                lg: "75vh",
              },
              maxHeight: { xs: "280px", sm: "380px", md: "420px", lg: "460px" },
              order: { xs: 2, sm: 2 },
              my: { xs: 2, sm: 0 },
              alignSelf: { xs: "center", sm: "flex-end" },
              marginBottom: { xs: "0 !important", sm: "-32px !important" },
              position: "relative",
              bottom: { xs: "0", sm: "0" },
              // Add emerging effect for mobile only
              boxShadow: {
                xs: "0 -15px 30px rgba(0, 0, 0, 0.25)", // Bottom shadow
                sm: "none",
                md: "none",
              },
              // Add border/bottom effect for mobile
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "110%",
                height: "12px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
                borderRadius: "50% 50% 0 0",
                display: { xs: "block", sm: "none" },
              },
            }}
          />

          <Box
            sx={{
              width: { xs: "100%", sm: "27%" },
              color: "#FFF",
              textAlign: { xs: "center", sm: "left" },
              order: { xs: 3, sm: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "center" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem", lg: "2.9rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textAlign: { xs: "center", sm: "center" },
                }}
              >
                Plan Your
                <br />
                Breakthrough
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 1.5, sm: 2, md: 2.4 },
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  textAlign: { xs: "center", sm: "center" },
                }}
              >
                Improve your health with a doctor-designed Action Plan
              </Typography>
            </Box>

            <Button
              onClick={handleButtonClick}
              sx={{
                mt: { xs: 2.5, sm: 3, md: 4 },
                px: { xs: 3.5, sm: 4.2, md: 4.8 },
                py: { xs: 1, sm: 1.1, md: 1.25 },
                borderRadius: "999px",
                backgroundColor: "#00359E",
                color: "#fff",
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                textTransform: "none",
                width: { xs: "100%", sm: "100%", md: "auto" },
                display: "block",
                mx: "auto",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#002A7A",
                },
              }}
            >
              Explore Plan
            </Button>
          </Box>
        </Box>
      </Box>

      {/* SIDE BY SIDE CARDS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: "1.2%" },
          width: { xs: "94%", sm: "92%", lg: "90%" },
          mx: "auto",
          mb: { xs: 4, sm: 6 },
          mt: { xs: 0, md: -5 },
        }}
      >
        {/* CARD 1 */}
        <Box
          sx={{
            flex: 1,
            borderRadius: { xs: "16px", sm: "24px" },
            backgroundColor: "#072A6EFF",
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "98vh" },
            height: { xs: "auto", md: "auto" },
            p: { xs: 2.5, sm: 3.5, md: 4.5 },
            color: "#fff",
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              mt: { xs: 1, sm: -1 },
              mx: "auto",
              width: { xs: "90%", sm: "68%" },
              height: { xs: "45vh", sm: "50vh", md: "90%" },
              borderRadius: { xs: "12px", sm: "18px" },
              overflow: "hidden",
              backgroundColor: "#113E86FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={bioAgeImg}
              alt="Biological Age"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Typography
            sx={{
              mt: { xs: 2, sm: 3 },
              mb: { xs: 3, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
              maxWidth: { xs: "100%", sm: "52%" },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              position: { xs: "static", sm: "absolute" },
              bottom: { sm: "3.5%" },
              left: { sm: "6%" },
            }}
          >
            Reveal how fast your body is aging compared to your actual age.
          </Typography>

          <Button
            onClick={handleButtonClick}
            sx={{
              mt: { xs: 0, sm: 0 },
              mb: { xs: 2, sm: 0 },
              width: { xs: "100%", sm: "auto" },
              px: { xs: 3, sm: 4.6 },
              py: { xs: 1, sm: 1.25 },
              borderRadius: "999px",
              backgroundColor: "#fff",
              color: "#00359E",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              textTransform: "none",
              position: { xs: "static", sm: "absolute" },
              bottom: { sm: "3.5%" },
              left: { sm: "59%" },
              fontWeight: 600,
            }}
          >
            Get The Science
          </Button>
        </Box>

        {/* CARD 2 */}
  <Box
  sx={{
    flex: 1,
    borderRadius: { xs: "16px", sm: "24px" },
    backgroundColor: "#072A6EFF",
    position: "relative",
    overflow: "hidden",
    minHeight: { xs: "65vh", sm: "75vh", md: "92vh" },
    p: { xs: 2.5, sm: 3.5, md: 4.5 },
    color: "#fff",
  }}
>
  <Typography
    sx={{
      textAlign: "center",
      fontSize: { xs: "1.8rem", sm: "2.6rem", md: "3.6rem" },
      fontWeight: 600,
      zIndex: 2,
      position: "relative",
      lineHeight: 1.1,
      mb: { xs: 2, sm: 0 },
    }}
  >
    Test 130+ Biomarkers
  </Typography>

  <Box
    component="img"
    src={biomarkersImg}
    alt="Biomarkers"
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 1,
      display: "block",
    }}
  />

  <Button
    onClick={handleButtonClick}
    sx={{
      mt: { xs: 3, sm: 0 },
      width: { xs: "100%", sm: "auto" },
      px: { xs: 3, sm: 4.6 },
      py: { xs: 1, sm: 1.25 },
      borderRadius: "999px",
      backgroundColor: "#00359E",
      color: "#fff",
      fontSize: { xs: "0.9rem", sm: "1rem" },
      textTransform: "none",
      position: "absolute",
      bottom: { xs: "20px", sm: "5%" },
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      fontWeight: 600,
    }}
  >
    Meet The Markers
  </Button>
</Box>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          fontSize: { xs: "0.7rem", sm: "0.75rem" },
          fontWeight: { xs: "400", sm: "600" },
          mb: { xs: 4, sm: 6 },
          px: 2,
        }}
      >
        For illustrative purposes only. Individual lab results may vary.
      </Box>
    </Box>
  );
};

export default SimpleHimsBackground;