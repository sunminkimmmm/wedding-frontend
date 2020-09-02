import React from "react";
import "antd/dist/antd.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import ButtonDocument from "./ButtonDocument";
// DatePicker
import {
  // PeriodDatePicker_Document,
  DatePicker_Document,
  WPCalendar_Document
} from "./DatePicker";
// Modal
import { WPModal_Document } from "./Modal";
// Data
import { WPEmpty_Document } from "./Data";

/**
 *
 */
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

/**
 *
 */
storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("Button sample", () => <ButtonDocument />);

/**
 * 날짜관련 컴포넌트
 */
storiesOf("Date Picker", module)
  .add("Calendar", () => <WPCalendar_Document />) /* 단일 날짜선택 */
  /* 단일 날짜선택 */
  .add("DatePciker", () => <DatePicker_Document showApp={linkTo("Button")} />);
/* 기간 선택 */
// .add("PeriodDatePicker", () => (
//   <PeriodDatePicker_Document showApp={linkTo("Button")} />
// ))

/**
 * Modal
 */
storiesOf("Modal", module)
  /* 기간 선택 */
  .add("Modal default", () => <WPModal_Document showApp={linkTo("Button")} />);

/**
 * Data
 */
storiesOf("Data", module)
  /* 기간 선택 */
  .add("Modal default", () => <WPEmpty_Document showApp={linkTo("Button")} />);
