import React from "react";
import {
  Container,
  WPDatePicker,
  WPPeriodDatePicker,
  WPMonthPicker,
  WPPeriodMonthPicker
  // WPPeriodMonthPicker2
} from "../../components";

const DatePicker_Document = () => {
  const [dateValue, setDateValue] = React.useState("2019-01-01");
  const [periodDateValue, setPeriodDateValue] = React.useState([
    "2019-01-01",
    "2019-01-02"
  ]);
  const [monthValue, setMonthValue] = React.useState("2019-01-01");
  const [periodMonthValue, setPeriodMonthValue] = React.useState([]);

  const dateValueOnChange = val => {
    setDateValue(val);
  };
  const periodDateValueOnChange = val => {
    setPeriodDateValue(val);
  };
  const monthValueOnChange = val => {
    setMonthValue(val);
  };
  const periodMonthValueOnChange = val => {
    console.log("Month : ", val);
    setPeriodMonthValue(val);
  };
  // const onChange = val => {
  //   console.log("VAL : ", val);
  // };

  return (
    <Container padding pageHistory={[]}>
      <h1>DatePicker_Document</h1>
      <WPDatePicker
        value={dateValue}
        onChange={dateValueOnChange}
        type="string"
      />
      <br />
      <br />

      <h1>PeriodDatePicker_Document</h1>
      <WPPeriodDatePicker
        value={periodDateValue}
        onChange={periodDateValueOnChange}
        type="string"
      />
      <br />
      <br />

      <h1>MonthPicker_Document</h1>
      <WPMonthPicker
        value={monthValue}
        onChange={monthValueOnChange}
        type="string"
      />
      <br />
      <br />

      <h1>MonthPicker_Document</h1>
      <WPPeriodMonthPicker
        value={periodMonthValue}
        onChange={periodMonthValueOnChange}
        type="string"
      />
      <br />
      <br />
    </Container>
  );
};

export default DatePicker_Document;
