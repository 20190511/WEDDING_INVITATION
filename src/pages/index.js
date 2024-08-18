import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Kakao from "../components/kakao"
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { Header } from "antd/lib/layout/layout";
import { Helmet, HelmetProvider } from "react-helmet-async";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #FDF8F8;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <HelmetProvider >

    <Helmet>
    <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="김창민 & 배혜원 결혼식에 초대합니다." />
          <meta property="og:description" content="2024.11.09. (토) 오후 3:00 이비스 앰배서더 수원" />
          <meta property="og:image" content="https://github.com/user-attachments/assets/0ce8b78b-bc43-4c2f-8d34-7a648cc4e688" />
          <meta property="og:url" content="https://20190511.github.io/" />
          <meta property="og:type" content="website" />
          <title>배혜원♡김창민</title>
    </Helmet>
    <main>
    <Wrapper>
      <Kakao />
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <CongratulatoryMoney />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
        >
        From Brother👦🏻Bae Junhyeong ✌🏻‪·͜·✌🏻 
      </Footer>
      <br />
    </Wrapper>
    </main>

    </HelmetProvider>

  );
};

export default IndexPage;
