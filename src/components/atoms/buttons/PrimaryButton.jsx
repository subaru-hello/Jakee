import { React } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
export const PrimaryButton = (props) => {
  const button = props;
  console.log(button);
  return (
    <SButton>
      <button>{button.button.name}</button>
    </SButton>
  );
};

PrimaryButton.propTypes = {
  props: PropTypes.string,
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
