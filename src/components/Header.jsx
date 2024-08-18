import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyPage = () => (
  <HelmetProvider>
    <Helmet>
      <title>웹 페이지 제목</title>
      <meta property="og:title" content="여기 제목을 입력하세요" />
      <meta property="og:description" content="여기 설명을 입력하세요" />
      <meta property="og:type" content="website" />
    </Helmet>
    {/* 페이지 내용 */}
  </HelmetProvider>
);

export default MyPage;
