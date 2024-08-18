import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  WEDDING_BLACK,
  CONTENT_BLACK,
  WEDDING_PINK
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 90%;
`;

const Title = styled.p`
  font-size: 1rem;
  font-family: Kopuro;
  color: ${WEDDING_PINK};
  letter-spacing: 2.5px;
  font-weight: 300;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 13px;
  font-family: GowunDodum;
  color:${CONTENT_BLACK};
  line-height: 2;
  opacity: 1.0;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-family: "GowunDodum";
  font-size: 18px;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const GroomName = styled.span`
  font-weight: bold;
  font-family: "GowunDodum";
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 50, marginBottom: 8 }} plain>
        <Title data-aos="fade-up" >INVITATION</Title>
      </Divider>
      <Content data-aos="fade-up">
        세상이 다 겨울이어도 늘 봄처럼 따뜻하고
        <br />
        간혹, 여름처럼 뜨거운 사랑을 하는 우리가 되겠습니다.
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br />
        앞날을 함께 축복해주시면 감사하겠습니다.
        <br />
        모든 순간을 아름답게 응원해 주는 서로가 되겠습니다.
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME} 의 장남 <GroomName>{GROOM_NAME}</GroomName>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME} 의 장녀 <GroomName>{BRIDE_NAME}</GroomName>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
