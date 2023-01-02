import { Tooltip } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Label from "../ui/Label";
import "./input.css";

const Input = ({
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
  const [inputVal, setInputValue] = useState("");
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const inputData = {};
      inputData[jsonKey] = inputVal.trim();
      if (level === 0) {
        dispatch({ type: "level0", payload: inputData });
      } else {
        onSetGroupDataHandler(inputData);
      }
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputVal, jsonKey, level, onSetGroupDataHandler, dispatch, initJsonData]);

  useEffect(() => {
    setInputValue("");
  }, [checkBool]);
  let ifRequired = false;

  if (validate.required) {
    ifRequired = true;
  }

  return (
    <div
      className={`input_text ${level === 0 ? "fields_css" : "fields_css_2"}`}
    >
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        id={jsonKey}
        name={jsonKey}
        required={ifRequired}
      />
      <Label htmlFor={jsonKey}>
        {label}
        {description.length > 0 && (
          <Tooltip label={description}>
            <span className="tooltip">i</span>
          </Tooltip>
        )}
      </Label>
    </div>
  );
};
export default Input;
