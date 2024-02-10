import React from "react";
import styled,{keyframes, css} from "styled-components";
import sponsors from "../data/sponsors";

const App = () => {

  const {row1, row2} = sponsors;

  return (
    <AppContainer>
      <Wrapper>
        <Text>Sponsors</Text>
        <Marquee>
          <MarqueeGroup>
            {
              row1.map(e=>(
                <ImageGroup>
                  <Image src={e} />
                </ImageGroup>
              ))
            }

          </MarqueeGroup>
          <MarqueeGroup>
            {
              row1.map(e=>(
                <ImageGroup>
                  <Image src={e} />
                </ImageGroup>
              ))
            }

          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {
              row2.map(e=>(
                <ImageGroup>
                  <Image src={e} />
                </ImageGroup>
              ))
            }

          </MarqueeGroup2>
          <MarqueeGroup2>
            {
              row2.map(e=>(
                <ImageGroup>
                  <Image src={e} />
                </ImageGroup>
              ))
            }

          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

  const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

  const Text = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #ffffff;
  `;

  const Note = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #7c8e9a;
  `;


  const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl( 0 0% 0% / 0),
    hsl( 0 0% 0% / 1) 10%,
    hsl( 0 0% 0% / 1) 90%,
    hsl( 0 0% 0% / 0)
  );
  `;

  const scrollX = keyframes`
  from
  {
    left: translateX(0);
  }
  to
  {
    transform: translateX(-100%);
  }
  `;

  const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
  `

  const MarqueeGroup = styled.div`
  ${common}
  `;

  const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  `; 

  const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width:clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem)/10);
  `;

  const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `;