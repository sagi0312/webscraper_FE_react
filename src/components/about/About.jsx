import axios from "axios";
import React, { useState } from "react";
import Header from "../header/Header";
import { Buffer } from "buffer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const rows = [
  {
    name: "Anju Karanji",
    handle: "anju-karanji",
  },
  {
    name: "Zac Horton",
    handle: "zachorton",
  },
  {
    name: "Matthew Schaefer",
    handle: "schaefercmatthew",
  },
  {
    name: "Cody Black",
    handle: "cdblack86",
  },
];
const About = () => {
  const [heatMap, setHeatMap] = useState("");
  const [fccPicture, setFccPicture] = useState("");
  const [memberName, setMemberName] = useState("");
  const [loading, setLoading] = useState(false);

  async function getHeatMap() {
    const heatMapResponse = await axios.get(
      "http://localhost:8000/api/scrape?name=" + memberName,
      { responseType: "arraybuffer" }
    );
    let base64HeatMapString = Buffer.from(
      heatMapResponse.data,
      "binary"
    ).toString("base64");
    let heatMapSrc = "data:image/png;base64," + base64HeatMapString;
    setHeatMap(heatMapSrc);
  }

  const getProfilePicture = async () => {
    const fccPictureResponse = await axios.get(
      "http://localhost:8000/api/profilePic?name=" + memberName,
      { responseType: "arraybuffer" }
    );
    let base64FCCPicString = Buffer.from(
      fccPictureResponse.data,
      "binary"
    ).toString("base64");
    let fccPictureSrc = "data:image/png;base64," + base64FCCPicString;
    setFccPicture(fccPictureSrc);
  };
  const getScrapedData = () => {
    setLoading(true);
    getProfilePicture();
    getHeatMap();
    setLoading(false);
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Typography color="primary" variant="h5">
        Select A Member Below
      </Typography>
      <br />
      <Box sx={{ maxWidth: 500 }}>
        <FormControl fullWidth>
          <InputLabel id="memberName_dropDown">Member Name</InputLabel>
          <Select
            labelId="mamber-select-label"
            id="member-select"
            value={memberName}
            label="Member Name"
            onChange={(event) => setMemberName(event.target.value)}
          >
            {rows.map((row) => {
              return (
                <MenuItem key={row.handle} value={row.handle}>
                  {row.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <br />
      {loading && <p>Loading... Please Wait</p>}
      <Button variant="outlined" onClick={getScrapedData}>
        Get Progress
      </Button>
      <br />
      <br />
      <Box sx={{ display: "flex" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <ImageList cols={3} rowHeight={500}>
              <ImageListItem sx={{ width: 400 }}>
                <img src={fccPicture} alt="" />
              </ImageListItem>
              <ImageListItem sx={{ width: 800 }}>
                <img src={heatMap} alt="" />
              </ImageListItem>
            </ImageList>
          </>
        )}
      </Box>
    </>
  );
};

export default About;
