import { Fragment, useCallback, useEffect, useState } from "react";
import Element from "./Element";

const UiIgnore = ({
  jsonKey,
  dispatch,
  initJsonData,
  checkBool,
  conditions,
  subParameters,
  onSetGroupDataHandler: prevonSetGroupDataHandler,
  groupData: prevgrdData,
}) => {
  const [groupData, setData] = useState({});
  const type = prevgrdData.type;
  useEffect(() => {
    if (type === conditions[0].value) {
      let tempData = {};
      tempData["outro"] = { ...groupData };
      prevonSetGroupDataHandler(tempData);
    }
    // dispatch({ type: "level0", payload: tempData });
  }, [
    groupData,
    type,
    dispatch,
    initJsonData,
    prevonSetGroupDataHandler,
    conditions,
  ]);

  const onSetGroupDataHandler = useCallback((data) => {
    setData((prevState) => {
      let tempData = {
        ...prevState,
        ...data,
      };

      return tempData;
    });
  }, []);
  const elements = subParameters.map((each) => {
    return (
      <Element
        key={each.jsonKey}
        uiType={each.uiType}
        label={each.label}
        jsonKey={each.jsonKey}
        validate={each.validate}
        level={each.level}
        description={each.description}
        dispatch={dispatch}
        initJsonData={initJsonData}
        checkBool={checkBool}
        onSetGroupDataHandler={onSetGroupDataHandler}
      />
    );
  });
  return <Fragment>{type === conditions[0].value && elements}</Fragment>;
};
export default UiIgnore;
