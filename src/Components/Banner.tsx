import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
export default class Banner extends Component {
  render() {
    return (
      <Box
        sx={{
          flexGrow: 1,
          mt: 1,
          pt: 20,
          pb: 8,
          bgcolor: "#74C69D",
          boxShadow: "none",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box sx={{ mt: "5", maxWidth: "70%" }}>
                <Typography variant="subtitle2" component="p" color="Menu">
                  Welcome
                </Typography>
                <Typography
                  variant="h5"
                  component="h1"
                  color="Menu"
                  className="header--banner"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </Typography>
                <p className="banner--p">
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                  dolor sit amet consectetur adipis
                </p>

                <Button
                  variant="contained"
                  color="info"
                  sx={{ mt: 10, bgcolor: "#212529" }}
                >
                  {" "}
                  explore
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={"auto"} sx={{ mt: { xs: 10, md: 0 } }}>
              <Box>
                <img
                  src={require("../images/banner.png")}
                  alt={"banner"}
                  loading="lazy"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}
