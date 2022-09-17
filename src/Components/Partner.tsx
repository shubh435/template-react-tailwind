import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
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

                <Button
                  variant="contained"
                  sx={{ mt: 5, mb: 5, bgcolor: "#212529" }}
                >
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
                  <Button
                    variant="contained"
                    sx={{ mt: 5, mb: 5, bgcolor: "#212529" }}
                  >
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
                  <Button
                    variant="contained"
                    sx={{ mt: 5, mb: 5, bgcolor: "#212529" }}
                  >
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

          <Box sx={{ mt: 10 }}>
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    my: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <Card sx={{ maxWidth: 275, px: "auto", mt: 1, mx: "auto" }}>
                    <CardContent>
                      <Box
                        sx={{
                          textAlign: "center",
                          mx: "auto",
                          mb: 5,
                        }}
                      >
                        <img
                          src={require("../images/card1.png")}
                          alt=""
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="seagreen"
                        gutterBottom
                      >
                        Peg Legge
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        CEO
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 275, px: "auto", mt: 1, mx: "auto" }}>
                    <CardContent>
                      <Box
                        sx={{
                          textAlign: "center",
                          mx: "auto",
                          mb: 5,
                        }}
                      >
                        <img
                          src={require("../images/card2.png")}
                          alt=""
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="seagreen"
                        gutterBottom
                      >
                        Richard Guerra
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        CTO
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 275, px: "auto", mt: 1, mx: "auto" }}>
                    <CardContent>
                      <Box
                        sx={{
                          textAlign: "center",
                          mx: "auto",
                          mb: 5,
                        }}
                      >
                        <img
                          src={require("../images/card3.png")}
                          alt=""
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="seagreen"
                        gutterBottom
                      >
                        Alexandro store
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Designer
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 275, px: "auto", mt: 1, mx: "auto" }}>
                    <CardContent>
                      <Box
                        sx={{
                          textAlign: "center",
                          mx: "auto",
                          mb: 5,
                        }}
                      >
                        <img
                          src={require("../images/card3.png")}
                          alt=""
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="seagreen"
                        gutterBottom
                      >
                        Jannet Bray
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Developer
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Button variant="contained" sx={{ bgcolor: "#212529" }}>
                  View Team
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}
