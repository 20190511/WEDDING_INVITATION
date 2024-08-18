import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Kakao = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:image" content="../assets/flower1.png" />
        <meta property="og:url" content="http://wedding-hm.kro.kr:8000" />
        <meta property="og:title" content="혜원♡창민 편지" />
        <meta property="og:type" content="website" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Kakao;
