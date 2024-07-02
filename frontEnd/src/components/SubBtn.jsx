import { Button, styled } from "@mui/material";
import React from "react";

const MyStyledButton = styled(Button)`
  background-color: orange;
  color: white;
  width: 520px;
  height: 50px;

  &:hover {
    background-color: orange;
    color: darkblue;
  }
`;

const SubBtn = ({ onClick }) => {
  return (
    <div>
      {" "}
      <MyStyledButton onClick={onClick}>Submit</MyStyledButton>
    </div>
  );
};

export default SubBtn;
