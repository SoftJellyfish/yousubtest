import React, {FC} from 'react';
import { ButtonContainer } from './Button.styles';

export interface Props {
    width?: number;
    height?: number;
    backgroundColor?: string;
    isBorder?: boolean;
    borderColor?: string;
    borderRadius?: number;
    margin?: string;
    onClick?: () => void;
    position?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    type?: "button" | "submit" | "reset" | undefined;
    textAlign?: string;
}

const Button: FC<Props> = ({
    width,
    height,
    backgroundColor,
    isBorder,
    borderColor,
    borderRadius,
    margin,
    onClick,
    position,
    top,
    bottom,
    left,
    right,
    type,
    textAlign
}) => {
    return (
        <>
            <ButtonContainer>

            </ButtonContainer>
        </>
    )
}

export default Button;