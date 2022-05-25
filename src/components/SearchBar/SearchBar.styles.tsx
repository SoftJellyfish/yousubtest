import styled from "styled-components";

export const SearchBarContainer = styled.div`
    position: absolute;
    display: flex;
    width: 422px;
    height: 61px;
    top: 65px;
    left: 69%;

    /* Secondary/ Primary White */

    background: #FFFFFF;
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    border-radius: 30px;
`;

export const InputField = styled.input`
    position: relative;
    width: 315px;
    height: 41px;
    left: 10px;
    right: 0%;
    top: 10px;
    bottom: 0%;
    padding-left: 15px;
    border: 1px solid #F4F7FE;

    &:focus {
        outline: none;
      }

    background: #F4F7FE;
    border-radius: 49px;
`;

export const Bell = styled.img`
    position: relative;
    width: 15.7px;
    height: 19.5px;
    top: 20px;
    left: 24.41px;
`;

export const Kodori = styled.img`
    position: relative;
    border-radius: 50%;
    width: 41px;
    height: 41px;
    top: 10px;
    left: 35px;
`;