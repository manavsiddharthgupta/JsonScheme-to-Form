import { Tooltip } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Element from "./Element";
import "./group.css";
const Group = ({
  label,
  validate,
  jsonKey,
  subParameters,
  dispatch,
  initJsonData,
  description,
  checkBool,
}) => {
  const [groupData, setData] = useState({});

  const onSetGroupDataHandler = useCallback((data) => {
    setData((prevState) => {
      let tempData = {
        ...prevState,
        ...data,
      };

      return tempData;
    });
  }, []);

  useEffect(() => {
    let tempData = {};
    tempData[jsonKey] = { ...groupData };

    dispatch({ type: "level0", payload: tempData });
  }, [groupData, jsonKey, dispatch, initJsonData]);

  let labelName = label;

  if (labelName.includes("_")) {
    labelName = label.split("_")[0] + " " + label.split("_")[1];
  }

  let ifRequired = false;
  if (validate.required) {
    ifRequired = true;
  }

  let allGroupElement = subParameters.map((each) => {
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
        prevjsonKey={jsonKey}
        onSetGroupDataHandler={onSetGroupDataHandler}
        initJsonData={initJsonData}
        checkBool={checkBool}
        conditions={each.conditions}
        groupData={groupData}
      />
    );
  });

  return (
    <div key={jsonKey} className="group_field">
      <div className={ifRequired && "req"}>{allGroupElement}</div>
      <label className="group_label">
        {labelName}
        {description.length > 0 && (
          <Tooltip label={description}>
            <span className="tooltip">i</span>
          </Tooltip>
        )}
      </label>
    </div>
  );
};
export default Group;
