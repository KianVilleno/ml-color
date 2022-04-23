import styled from "@emotion/styled";
import { AppContext } from "context/AppContext";
import React, { useEffect, useState, useContext } from "react";
import { Box, Text, Button } from "theme-ui";
import AdverItem from "./AdverItem";
import adverts from "data/adverts";
import Modal from "../Modal";
import * as gtag from "utils/gtag";

const TIMER = 15;
const COOLDOWN = 5;

const Advert = () => {
  const { showAdvert, setShowAdvert, generateCode, setAdvertCooldown } =
    useContext(AppContext);
  const [continueTime, setContinueTime] = useState(TIMER);
  const [continueAllowed, setContinueAllowed] = useState(false);

  useEffect(() => {
    if (showAdvert) {
      gtag.event("start_watch_advert");
      const continueInterval = setInterval(() => {
        setContinueTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          clearInterval(continueInterval);
          setContinueAllowed(true);
          gtag.event("finished_watch_advert");
          return prev;
        });
      }, 1000);
    }
    return () => {
      clearInterval(continueInterval);
    };
  }, [showAdvert]);

  const handleContinue = () => {
    if (continueAllowed) {
      gtag.event("generate_code", "Advert Continue");
      generateCode();
      setShowAdvert(false);
      setAdvertCooldown(COOLDOWN);
      setContinueTime(TIMER);
      setContinueAllowed(false);
    }
  };

  return (
    <Modal show={showAdvert}>
      <Caption mb={4} mt={3}>
        To help support our app and keep it running, please watch this short
        advertisement, scroll down and click continue afterwards.👇
      </Caption>
      {adverts?.map((data, i) => (
        <AdverItem key={`advert-${i}`} data={data} />
      ))}
      <ContinueButton
        fade={!continueAllowed}
        disabled={!continueAllowed}
        variant="outline"
        onClick={handleContinue}
      >
        Continue {!continueAllowed && <span>in {continueTime}s</span>}
      </ContinueButton>
    </Modal>
  );
};

export default Advert;

const Caption = styled(Text)`
  font-size: 0.8rem;
  display: block;
`;

const ContinueButton = styled(Button)`
  opacity: ${({ fade }) => (fade ? 0.2 : 1)};
  cursor: ${({ fade }) => (fade ? " not-allowed" : "pointer")};
`;
