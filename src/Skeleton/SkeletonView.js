import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Skeleton from '../components/Skeleton';
import dummy from "../image/Java Script.png";

const Base = styled.div`
  display: grid;
  width:100%;
  grid-template-columns:repeat(5, 1fr);
  column-gap: 12px;
  row-gap:24px;
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  box-shadow : rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;

`;

const ImageWrapper = styled.div`
  width:100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding : 1rem;
  display:flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin : 0;
  padding : 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin : 8px 0 0 0;
  padding : 0;
  font-size: 16px;
`;

const Placeholder = () => (
    <Container>
      <ImageWrapper>
        <Skeleton width={320} height={220}/>
      </ImageWrapper>
      <Info>
        <Skeleton width={150} height={29} rounded />
          <div style={{height: "8px"}}/>
        <Skeleton width={200} height={19} rounded />
      </Info>
    </Container>
  )


const Item = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={dummy}/>
      </ImageWrapper>
      <Info>
        <Title>나 이상철은 인정받는 개발자가 된다.</Title>
        <Description>나 이상철은 개발을 즐기고 인정받는 개발자가 되고 있다.</Description>
      </Info>
    </Container>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

  return (
    <Base>
    {
      loading ? Array.from({length: 25}).map((item, idx) => (
          <Placeholder key={idx} />
        )) : Array.from({length: 25}).map((item, idx) => (
          <Item key={idx}/>
        ))
    }
    </Base>
  );
};

export default App;