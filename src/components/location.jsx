import React, { useEffect } from "react";
import { Divider } from "antd";
import {
  DefaltSubtitle,
  WEDDING_PINK
} from '../../config'
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  font-family: MapoGoldenPier;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  font-family: GowunDodum;
  font-weight: 700;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
		"timestamp" : "1722501217034",
		"key" : "2k8qv",
		"mapWidth" : "640",
		"mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <DefaltSubtitle> LOCATION </DefaltSubtitle>
      </Divider>
      <Content style={{}}>
        경기 수원시 팔달구 권광로 132
        <br />
        이비스 앰버서더호텔 수원
        <br />
        15층 베르사이유홀
        <br />
        <br />
      </Content>
      <Map
        id="daumRoughmapContainer1722501217034"
        className="root_daum_roughmap root_daum_roughmap_landing"
      >
      </Map>
      <Content>
        <br />
        <DefaltSubtitle style={{color:"#d97d83"}}>BUS</DefaltSubtitle>
        수원역 : 13-1 
        <br />
        수원 버스터미널 : 80 81 3002 4000 4500 
        <br />
        <br />
        <DefaltSubtitle style={{color:"#d97d83"}}>SUBWAY</DefaltSubtitle>
        수인분당선 수원시청역 
        <br />
        2번 출구 (도보 5분)
      </Content>
    </Wrapper>
  );
};

export default Location;
