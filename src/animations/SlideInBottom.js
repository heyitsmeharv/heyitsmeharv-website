import { keyframes } from "styled-components";

const SlideInBottom = keyframes`
from {
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
  opacity: 0;
}
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;

export default SlideInBottom;