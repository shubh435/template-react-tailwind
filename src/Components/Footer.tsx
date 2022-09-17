import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Box sx={{ bgcolor: "#74C69D", width: "100%", py: 2, mt: 5 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1 / 2,
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              <img src={require("../images/facebookicon.png")} alt="" />
              <img src={require("../images/instagramIcon.png")} alt="" />
              <img src={require("../images/pinterest.png")} alt="" />
              <img src={require("../images/facebookicon.png")} alt="" />
              <img src={require("../images/titktok.png")} alt="" />
              <img src={require("../images/youtube.png")} alt="" />
            </Box>
            <Box sx={{ color: "#fff" }}>Copy right bty shubham</Box>
          </Box>
        </Container>
      </Box>
    );
  }
}
