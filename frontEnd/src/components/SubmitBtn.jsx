import { Button, styled } from "@mui/material";
import React from "react";

const MyStyledButton = styled(Button)`
  background-color: red;
  color: white;
`;

const SubmitBtn = () => {
  return (
    <div>
      <MyStyledButton>Submit</MyStyledButton>
    </div>
  );
};

export default SubmitBtn;
