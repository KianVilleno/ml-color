import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { AspectRatio, Box, Button } from "theme-ui";

import * as gtag from "utils/gtag";

const AdverItem = ({ data }) => {
  const { name, image, link, linkText, category } = data;
  const handleClick = () => {
    gtag.event("clicked_ad", category, name);
  };
  return (
    <AspectRatioWrapper ratio={1} mb={[3]}>
      <Wrapper href={link || "/"} target="__blank" as="a" onClick={handleClick}>
        {linkText && <CTAButton m={3}>{linkText}</CTAButton>}
        {image?.src && (
          <Image alt={name} src={image?.src} layout="fill" objectFit="cover" />
        )}
      </Wrapper>
    </AspectRatioWrapper>
  );
};

export default AdverItem;

const AspectRatioWrapper = styled(AspectRatio)`
  display: block;
`;
const Wrapper = styled(Box)`
  background-color: #dfdfde;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  img {
  }
`;

const CTAButton = styled(Button)`
  z-index: 1080;
  position: absolute;
  right: 0;
  bottom: 0;
`;
