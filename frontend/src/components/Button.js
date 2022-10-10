import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#ffffff" : "#000000")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0ms.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "12px 24px")};
  color: ${({ primary }) => (primary ? "#000000" : "#ffffff")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryButton = styled(Link)`
  background: #ffffff;
  padding: 14px 10px;
  display: flex;
  /* align-items: center;
justify-content: center; */
  color: #231f20;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: 0.6s all ease-in-out;
  position: relative;
  overflow: hidden;
  width: auto;
  margin: auto;
  text-transform: uppercase;

  &:hover {
    background: #a527d1;
    color: #ffffff;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    background: #a527d1;
    z-index: 0;
    transition: 0.5s all ease-in-out;
    bottom: 0;
    border-radius: 0 50% 50% 0;
  }

  &:hover::before {
    background: transparent;
    width: 200%;
  }

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
