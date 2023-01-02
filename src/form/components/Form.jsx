import { useEffect, useReducer, useState } from "react";

import Button from "../ui/Button";
import Element from "./Element";
import "./form.css";

const initialReducer = {};
const reducer = (state, action) => {
  if (action.type === "level0") {
    const tempData = {
      ...state,
      ...action.payload,
    };
    return tempData;
  } else if (action.type === "level1") {
    const level1Data = {
      ...state[action.payload.prevJson],
      ...action.payload.itsData,
    };
    console.log(level1Data, action.payload.prevJson);
    const tempData = {
      ...state,
    };
    tempData[action.payload.prevJson] = level1Data;
    return tempData;
  } else if (action.type === "reset") {
    return {};
  }

  return {};
};
const Form = ({ initJsonData, initialJson, onSetPrevjsonData }) => {
  const [element, setElement] = useState();
  const [checkBool, setBool] = useState(true);
  const [formData, dispatch] = useReducer(reducer, initialReducer);
  useEffect(() => {
    let tempElement = initialJson?.map((each) => {
      return (
        <Element
          key={each.jsonKey}
          uiType={each.uiType}
          label={each.label}
          jsonKey={each.jsonKey}
          validate={each.validate}
          subParameters={each?.subParameters}
          level={each.level}
          description={each.description}
          dispatch={dispatch}
          initJsonData={initJsonData}
          checkBool={checkBool}
        />
      );
    });
    if (JSON.stringify(initJsonData) !== JSON.stringify(initialJson)) {
      onSetPrevjsonData(initialJson);
      dispatch({ type: "reset" });
    }
    setElement(tempElement);
  }, [initialJson, initJsonData, onSetPrevjsonData, checkBool]);

  if (element) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBool(!checkBool);
          console.log("You Submitted the form, Here is Your Data: ", formData);
        }}
        className="form "
      >
        {element}
        <div className="all_btns">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setBool(!checkBool);
              console.log("you cancel the form");
            }}
          >
            Cancel
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    );
  }
  return <p className="error">Wrong Json Schema</p>;
};
export default Form;
