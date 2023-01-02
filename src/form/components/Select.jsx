import { Tooltip } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Label from "../ui/Label";
import Option from "./Option";
import "./select.css";

const Select = ({
  label,
  validate,
  jsonKey,
  level,
  dispatch,
  onSetGroupDataHandler,
  initJsonData,
  description,
  checkBool,
}) => {
  const [selectedData, setOptionData] = useState(validate.defaultValue);
  const defaultVal = validate.defaultValue;
  useEffect(() => {
    let tempData = {};
    tempData[jsonKey] = selectedData;
    if (level === 0) {
      dispatch({ type: "level0", payload: tempData });
    } else {
      onSetGroupDataHandler(tempData);
    }
  }, [
    selectedData,
    dispatch,
    jsonKey,
    level,
    onSetGroupDataHandler,
    initJsonData,
  ]);
  useEffect(() => {
    setOptionData(defaultVal);
  }, [checkBool, defaultVal]);
  let labelName = label;
  if (label.includes("_")) {
    labelName = label.split("_")[0] + " " + label.split("_")[1];
  }

  let ifRequired = false;
  if (validate.required) {
    ifRequired = true;
  }

  const allOption = validate.options.map((each) => {
    return (
      <Option key={each.value} value={each.value}>
        {each.label}
      </Option>
    );
  });

  const onSetOptionDataHandler = (e) => {
    setOptionData(e.target.value);
  };

  return (
    <div className={`select ${level === 0 ? "fields_css" : "fields_css_2"}`}>
      <select
        id={jsonKey}
        name={jsonKey}
        required={ifRequired}
        value={selectedData}
        onChange={onSetOptionDataHandler}
      >
        {allOption}
      </select>
      <Label htmlFor={jsonKey}>
        {labelName}
        {description.length > 0 && (
          <Tooltip label={description}>
            <span className="tooltip">i</span>
          </Tooltip>
        )}
      </Label>
    </div>
  );
};
export default Select;
