import { keyframes } from "styled-components";

const ToastInRight = keyframes`
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export default ToastInRight;