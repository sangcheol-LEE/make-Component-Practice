import React,{useMemo} from 'react';
import PropTypes from "prop-types"
import styled,{css, keyframes} from 'styled-components';

const pulseKeyframes = keyframes`
  0% {
    opacity : 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity : 1;
  }
`;
const pulseAnimation = css`
  animation: ${pulseKeyframes} 1.5s ease-in-out infinite;
`;
const Base = styled.span`
          ${({color}) => color && `background-color: ${color}`};
          ${({rounded}) => rounded && `border-radius : 8px`};
          ${({circle}) => circle && 'border-raidus : 50%'};
          ${({width, height}) => (width || height) && `display : block`};
          ${({animation}) => animation && pulseAnimation}
          ${({width, unit}) => (width && unit) && `width : ${width}${unit}`}
          ${({height, unit}) => (height && unit) && `height : ${height}${unit}`}
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
        color = "#F4F4F4",
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

