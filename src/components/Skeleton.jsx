import React,{useMemo} from 'react';
import PropTypes from "prop-types"
import styled,{css, keyframes} from 'styled-components';

const pulseKeyframes = keyframes`
  0% {
    opacity : 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity : 1;
  }
`;

const pulseAnimation = styled.div`
  ${(props) => 
      props && css`
        animation: ${pulseKeyframes} 1.5s ease-in-out infinite; 
      `
    }
`;



const Base = styled.span`
  ${(props) =>
    props &&
      css`
          background-color: ${props.color};
          border-radius : ${(props) => props.rounded ? "8px" : (props.circle ? "50%" : null)};
          display: ${(props) => (props.width || props.height) && "block"};
          width: ${(props) => props.width && props.unit && `${props.width}${props.unit}`};
          height: ${(props) => props.height && props.unit && `${props.height}${props.unit}`};
          animation : ${(props) => props.animation && `${pulseAnimation}`}
        `}
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton = ({
        animation = true,
        width,
        height,
        circle,
        rounded,
        count,
        unit = "px",
        color = "$F4F4F4",
    }) => {

  // 만약 count가 4면 "----"를 리턴한다.
  const content = useMemo(() => [...Array({length:count})].map(() => "-").join(""),[count])
  return (
    <Base
        rounded={rounded}
        circle={circle}
        width={width}
        height={height}
        animation={animation}
        unit={unit}
        color={color}
      >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;


Skeleton.propsType = {
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool,
    rounded: PropTypes.bool,
    count :PropTypes.number,
    unit: PropTypes.string,
    animation : PropTypes.bool,
    color: PropTypes.string,
}

