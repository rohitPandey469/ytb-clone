import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Video from "./Video";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for {searchTerm}
        <span
          style={{
            color: "#f31503",
          }}> videos
        </span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
