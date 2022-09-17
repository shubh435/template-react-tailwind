import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

export default class Partner extends Component {
  render() {
    return (
      <Box sx={{ mt: 5 }}>
        <Container>
          <Box>
            <Grid container textAlign={"center"} spacing={2}>
              <Grid item xs={12}>
                <Box>
                  <h4
                    style={{
                      color: "#74C69D",
                      textTransform: "uppercase",
                    }}
                  >
                    partnerns
                  </h4>

                  <h1>Lorem Ipsum Dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    style={{ objectFit: "contain", width: "10%" }}
                    src={require("../images/goggle.png")}
                    alt=""
                  />
                  <img
                    style={{ objectFit: "contain", width: "10%" }}
                    src={require("../images/microsoft.png")}
                    alt=""
                  />
                  <img
                    style={{ objectFit: "contain", width: "10%" }}
                    src={require("../images/Airbnb.png")}
                    alt=""
                  />
                  <img
                    style={{ objectFit: "contain", width: "10%" }}
                    src={require("../images/facebook.png")}
                    alt=""
                  />
                  <img
                    style={{ objectFit: "contain", width: "10%" }}
                    src={require("../images/spotify.png")}
                    alt=""
                  />
                </Box>

                <Button variant="contained" sx={{ mt: 5, mb: 5 }}>
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box>
                  <img src={require("../images/partner.png")} alt="" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ mt: 10, px: 10, textAlign: "left" }}>
                  <h1 style={{ fontSize: "18px" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint
                  </h1>
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Libero dicta ullam, vel incidunt vitae dolor iusto dolorem
                    nobis blanditiis neque voluptatem exercitationem provident,
                    at tempore sint eaque dolores earum veritatis.
                  </p>
                  <Button variant="contained" sx={{ mt: 5, mb: 5 }}>
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box sx={{ mt: 20, px: 10, textAlign: "left" }}>
                  <h1 style={{ fontSize: "18px" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint
                  </h1>
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Libero dicta ullam, vel incidunt vitae dolor iusto dolorem
                    nobis blanditiis neque voluptatem exercitationem provident,
                    at tempore sint eaque dolores earum veritatis.
                  </p>
                  <Button variant="contained" sx={{ mt: 5, mb: 5 }}>
                    Learn more
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <img
                    src={require("../images/lorem.png")}
                    alt=""
                    style={{ objectFit: "contain", width: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <h4
                    style={{
                      color: "#74C69D",
                      textTransform: "uppercase",
                    }}
                  >
                    Team
                  </h4>

                  <h1>Our Talents</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box></Box>
                <Button variant="contained">View Team</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}
