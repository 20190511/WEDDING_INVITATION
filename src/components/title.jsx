import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  WEDDING_PINK,
  WEDDING_BLACK,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";
import GroovePaper from "../assets/GroovePaper.png";
import MainImg from "../assets/mainImg.jpg"

const Layout = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  font-weight: 500 !important;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const TitleWrapperOverlay = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;


const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-family: Kopuro;
  color: ${WEDDING_PINK};
  font-size: 11px;
  font-weight: bold; 
  opacity: 0.9;
  margin-bottom: 0px;
`;

const GroomBride = styled.p`
  font-family: "GowunDodum";
  color: #000;
  font-size: 22px;
  font-weight: bold; 
  opacity: 0.9;
  margin-bottom: 4px;
`;

const Schedule = styled.p`
  font-family: "GowunDodum";
  color: #000;
  font-weight: normal;
  font-size: 14px;
  opacity: 0.65;
  margin-bottom: 12px;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`;

const TextOverlay = styled.div`
  top: 6%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Title = () => {
  return (
    <Layout>
          <TitleWrapper>
            <WeddingInvitation>We are getting married</WeddingInvitation>
          <GroomBride>
            {GROOM_NAME} &#38; {BRIDE_NAME}
          </GroomBride>
          <Schedule>
            {WEDDING_DATE}
          <br />
            {WEDDING_LOCATION}
          </Schedule>
      </TitleWrapper>
        <Image src={MainImg} alt="Background"/>

  
    </Layout>
  );
};
/*
        <TextOverlay> 
          김창민 & 배혜원
          <br />
          2024.11.09 토요일 오후 3:00
          <br />
          이비스 앰배서더 수원
        </TextOverlay>
const Line = styled.div`
  margin-bottom: 3px;
`
*/
export default Title;
