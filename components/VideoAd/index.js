import styled from "@emotion/styled";
import React from "react";
import { Box } from "theme-ui";

const VideoAd = () => {
  var options = {
    zoneId: 4980,
    adStatusCb: function adStatusCallback(status) {
      invokeApplixirVideoUnit(status);
    },
  };

  const handleClick = () => {
    invokeApplixirVideoUnit(options);
  };

  return (
    <Wrapper>
      <button onClick={handleClick}>sdfsd</button>
      <div id="applixir_vanishing_div" hidden>
        <iframe id="applixir_parent" allow="autoplay; fullscreen"></iframe>
      </div>
    </Wrapper>
  );
};

export default VideoAd;

const Wrapper = styled(Box)``;
