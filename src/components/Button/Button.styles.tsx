import styled from "styled-components";
import {Props} from './Button';

export const ButtonContainer = styled.div<Props>`
    position: ${({ position }) => position};
    width: ${({ width }) => width && `${width}px`};
    top: ${({ top }) => top && `${top}px`};
    bottom: ${({ bottom }) => bottom && `${bottom}px`};
    left: ${({ left }) => left && `${left}px`};
    right: ${({ right }) => right && `${right}px`};
    text-align: ${({ textAlign }) => textAlign};
    z-index: 2;
    max-width: 420px;
`;