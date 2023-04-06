import styled from '@emotion/styled';
import imgMob from '../../img/HomePageDog/img@1x.png';
import imgTab from '../../img/HomePageDog/img@1x.png';
import imgDes from '../../img/HomePageDog/img@1x.png';
// import WaveMob from '../../img/HomePageBG/Wave@1x.png';
// import WaveTab from '../../img/HomePageBG/Wave@2x.png';
import WaveDes from '../../img/HomePageBG/Wave@3x.png';
// import bgMob from '../../img/HomePageDog/bg@1x.png';
// import bgTab from '../../img/HomePageDog/bg@2x.png';
import bgDes from '../../img/HomePageDog/bg@3x.png';

export const HomePageBG = styled.div`
  background: transparent;
  z-index: -100;
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 600px;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 280px 364px, 620px 470px;

  background-image: url(${imgMob});

  @media screen and (min-width: 768px) {
    background-size: 700px 850px, 1449px 1094px;
    min-height: 1250px;
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1280px) {
    background-size: 424px 455px, 700px 538px, 500px 500px;
    min-height: 300px;
    background-position: 585px 220px, 600px 110px, 20px 130px;
    background-image: url(${imgDes}), url(${bgDes}), url(${WaveDes});
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 768px;
  margin: auto;

  @media screen and (min-width: 768px) {
    justify-content: start;
    max-width: 768px;
    margin: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 60px;

  font-weight: 700;
  font-size: 32px;
  color: #000000;

  @media screen and (min-width: 768px) {
    justify-content: start;
    padding-left: 32px;
    padding-top: 88px;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 150px;
    padding-left: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <HomePageBG>
        <HomePageContainer>
          <HomeTitle>
            Хороший майстер
          </HomeTitle>
        </HomePageContainer>
      </HomePageBG>
    </>
  );
};

export default Home;
