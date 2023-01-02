import { useState, useEffect } from "react";
import "./allradio.css";
import Radio from "./Radio";
const AllRadio = ({
  validate,
  level,
  jsonKey,
  dispatch,
  onSetGroupDataHandler,
  initJsonData,
}) => {
  const [radioData, setRadioData] = useState(validate.defaultValue);

  useEffect(() => {
    let tempData = {};
    tempData[jsonKey] = radioData;
    if (level === 0) {
      dispatch({ type: "level0", payload: tempData });
    } else {
      onSetGroupDataHandler(tempData);
    }
  }, [
    radioData,
    jsonKey,
    level,
    dispatch,
    onSetGroupDataHandler,
    initJsonData,
  ]);

  const onsetRadioDataHandler = (event) => {
    setRadioData(event.target.value);
  };

  let allRadio = validate.options.map((each) => {
    let defaultValue = false;
    if (validate.defaultValue === each.value) {
      defaultValue = true;
    }

    return (
      <Radio
        key={each.value}
        label={each.label}
        value={each.value}
        defaultValue={defaultValue}
        description={each.description}
        onsetRadioDataHandler={onsetRadioDataHandler}
      />
    );
  });

  return (
    <ul
      className={`input_radio ${level === 0 ? "fields_css" : "fields_css_2"}`}
    >
      {allRadio}
    </ul>
  );
};
export default AllRadio;
