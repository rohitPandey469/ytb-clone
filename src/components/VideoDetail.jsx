import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Video } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import zIndex from "@mui/material/styles/zIndex";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videosOnDetailPage, setVideosOnDetailPage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(function (
      data
    ) {
      setVideoDetail(data.items[0]);
      console.log(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      function (data) {
        setVideosOnDetailPage(data.items);
        console.log("setVideoPageDetails", data.items);
      }
    );
  }, [id]);

  if (!videoDetail) return "Loading...";
  if (!videosOnDetailPage) return "Loading...";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{ width: "100%", position: "sticky", top: "10.5vh", zIndex: "0" }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              height="63vh"
              width="100%"
            />
            <Typography variant="h5" color="#fff" fontWeight="bold">
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
                  ></CheckCircle>
                </Typography>
              </Link>
              <Stack direction="column">
              <Typography>
                    | {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString()}{" "}
                    views |
                  </Typography>
                  <Typography>
                    |{" "}
                    {parseInt(
                      videoDetail?.statistics?.likeCount
                    ).toLocaleString()}{" "}
                    likes |
                  </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {<Video videos={videosOnDetailPage} direction="column" />}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
