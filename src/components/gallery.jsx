import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import {
  DefaltSubtitle
} from "../../config"
import styled from "styled-components";
import MyImageGallery from "./GalleryClick";

import GalleryPhoto1 from "../assets/Wedding/1.jpg";
import GalleryPhoto2 from "../assets/Wedding/2.jpg";
import GalleryPhoto3 from "../assets/Wedding/3.jpg";
import GalleryPhoto4 from "../assets/Wedding/4.jpg";
import GalleryPhoto5 from "../assets/Wedding/5.jpg";
import GalleryPhoto6 from "../assets/Wedding/6.jpg";
import GalleryPhoto7 from "../assets/Wedding/7.jpg";
import GalleryPhoto8 from "../assets/Wedding/8.jpg";
import GalleryPhoto9 from "../assets/Wedding/9.jpg";
import GalleryPhoto10 from "../assets/Wedding/10.jpg";
import GalleryPhoto11 from "../assets/Wedding/11.jpg";
import GalleryPhoto12 from "../assets/Wedding/12.jpg";
import GalleryPhoto13 from "../assets/Wedding/13.jpg";
import GalleryPhoto14 from "../assets/Wedding/14.jpg";
import GalleryPhoto15 from "../assets/Wedding/15.jpg";
import GalleryPhoto16 from "../assets/Wedding/16.jpg";
import GalleryPhoto17 from "../assets/Wedding/17.jpg";
import GalleryPhoto18 from "../assets/Wedding/18.jpg";
import GalleryPhoto19 from "../assets/Wedding/19.jpg";
import GalleryPhoto20 from "../assets/Wedding/20.jpg";


const Wrapper = styled.div`
  padding-top: 42px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

/*
const requireCont = require.context("../assets/Wedding", false, /\.(jpg|webp)/)
const images = requireCont.keys().map((fileName) => {
  return {
    original: requireCont(fileName),
    thumbnail: requireCont(fileName),
  }
});
*/

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 50, marginBottom: 30 }} plain>
        <DefaltSubtitle> GALLARY </DefaltSubtitle>
      </Divider>
      <MyImageGallery
        showFullscreenButton={true}
        showPlayButton={true}
        items={images}
      />
      
      <div style={{marginBottom:50}}/>
    </Wrapper>
  );
};

export default Gallery;
