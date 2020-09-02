/**
 *
 */

import React from "react";
import { Button } from "@storybook/react/demo";
import { action } from "@storybook/addon-actions";

const ButtonDocument = () => {
  return (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  );
};

export default ButtonDocument;
