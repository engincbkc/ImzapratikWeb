import React from "react";
import { Stack, Box, Typography, Link } from "@mui/material";
import { constant } from "constants/constants";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#fff",
          p: "25px",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          mt: "15px"
        }}
        className="footer"
      >
        <Box>
          <Typography>
            Copyright  {' '}
            <strong>{constant.title}</strong> is Proudly Owned by {' '}
            <Link
              href="https://envytheme.com/"
              target="_blank" 
              underline="none"
              rel="noreferrer"
            >
              EnvyTheme
            </Link>
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
