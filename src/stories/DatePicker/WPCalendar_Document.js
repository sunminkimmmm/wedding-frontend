import React from "react";
import { Container, WPCalendar } from "../../components";

const DatePicker_Document = () => {
  const [schedules] = React.useState({
    "2019-08-11": [
      { type: "default", content: "This is warning event." },
      { type: "warning", content: "This is warning event." },
      { type: "success", content: "This is usual event." },
      { type: "error", content: "This is error event." }
    ],
    "2019-08-19": [
      { type: "warning", content: "This is warning event." },
      { type: "success", content: "This is usual event." },
      { type: "error", content: "This is error event." }
    ]
  });

  return (
    <Container padding pageHistory={[]}>
      <WPCalendar schedules={schedules} onSelect={value => alert(value)} />
    </Container>
  );
};

export default DatePicker_Document;
