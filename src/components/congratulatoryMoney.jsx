import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";
import AccountImg from "../assets/accountImg.png"
import AccountImg2 from "../assets/accountImg2.png"
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
  DefaltSubtitle,
  WEDDING_PINK,
  GROOM_MOTHER_ACCOUNT_BANK,
  GROOM_ACCOUNT_BANK,
  GROOM_FATHER_ACCOUNT_BANK,
  BRIDE_ACCOUNT_BANK,
  BRIDE_MOTHER_ACCOUNT_BANK,
  BRIDE_FATHER_ACCOUNT_BANK,
} from "../../config";

const Wrapper = styled.div`
  font-family:mom_to_daughter;
  padding-top: 42px;
  padding-bottom: 18px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-family: GowunDodum;
  font-size: 12px;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 6px;
`;

const SubContent = styled.p`
  font-family:GowunDodum;
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-family: GowunDodum;
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid #efddde;
  padding: 2.188rem 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const ImageAccount = styled.img`
  display: block;
  margin: 0 auto;
  width: 160px;
  padding-bottom: 0px;
`;

const Letter2 = styled.div`
  font-family: GowunDodum;
`;
const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>

      <Divider  data-aos="fade-up"
                plain>
        <DefaltSubtitle> CONGRATULATION </DefaltSubtitle>
      </Divider>

      <Letter2 style={{}} data-aos="fade-up">
      저희 두 사람의 소중한 시작을
      <br />
      축하해주시는 모든 분들께 감사드립니다.
      <br />
      따뜻한 진심을 감사히 오래도록 간직하고
      <br />
      행복하게 잘 살겠습니다.
      </Letter2>
      <br />
      <br />

      <ButtonWrap>
        <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          <ImageAccount src={AccountImg} />
          <br />
          <SubContent>신랑측 계좌번호</SubContent>
        </ContactButton>
        <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
          <ImageAccount src={AccountImg2} />
          <br />
          <SubContent>신부측 계좌번호</SubContent>
        </ContactButton>
      </ButtonWrap>
      <Modal
        title={<b style={{fontFamily:"GowunDodum"}}>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div style={{fontFamily:"GowunDodum"}}>
          부 : {GROOM_FATHER_NAME}
          <Divider type="vertical" />
          {GROOM_FATHER_ACCOUNT_BANK} <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 ,fontFamily:"GowunDodum"}}>
          모 : {GROOM_MOTHER_NAME}
          <Divider type="vertical" />
          {GROOM_MOTHER_ACCOUNT_BANK } 
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{fontFamily: "GowunDodum"}}>
          신랑 {GROOM_NAME}
          <Divider type="vertical" />
          {GROOM_ACCOUNT_BANK} 
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b style={{fontFamily:"GowunDodum"}}>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div style={{fontFamily: "GowunDodum"}}>
          부 : {BRIDE_FATHER_NAME}
          <Divider type="vertical" />
          {BRIDE_FATHER_ACCOUNT_BANK} <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 ,fontFamily:"GowunDodum"}}>
          모 : {BRIDE_MOTHER_NAME}
          <Divider type="vertical" />
          {BRIDE_MOTHER_ACCOUNT_BANK} <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{fontFamily: "GowunDodum"}}>
          신부 {BRIDE_NAME}
          <Divider type="vertical" />
          {BRIDE_ACCOUNT_BANK} <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
