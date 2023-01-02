import AllRadio from "./AllRadio";
import Group from "./Group";
import Input from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import UiIgnore from "./UiIgnore";

const Element = (props) => {
  let element = "";
  switch (props.uiType) {
    case "Input":
      element = (
        <Input
          label={props.label}
          jsonKey={props.jsonKey}
          validate={props.validate}
          level={props.level}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          description={props.description}
          checkBool={props.checkBool}
        />
      );
      break;
    case "Select":
      element = (
        <Select
          label={props.label}
          jsonKey={props.jsonKey}
          validate={props.validate}
          level={props.level}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          description={props.description}
          checkBool={props.checkBool}
        />
      );
      break;
    case "Group":
      element = (
        <Group
          label={props.label}
          validate={props.validate}
          jsonKey={props.jsonKey}
          subParameters={props.subParameters}
          level={props.level}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          description={props.description}
          checkBool={props.checkBool}
        />
      );
      break;
    case "Switch":
      element = (
        <Switch
          label={props.label}
          jsonKey={props.jsonKey}
          validate={props.validate}
          level={props.level}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          description={props.description}
          checkBool={props.checkBool}
        />
      );
      break;
    case "Radio":
      element = (
        <AllRadio
          validate={props.validate}
          level={props.level}
          jsonKey={props.jsonKey}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          description={props.description}
          checkBool={props.checkBool}
        />
      );
      break;
    case "Ignore":
      element = (
        <UiIgnore
          validate={props.validate}
          level={props.level}
          jsonKey={props.jsonKey}
          dispatch={props.dispatch}
          onSetGroupDataHandler={props?.onSetGroupDataHandler}
          initJsonData={props.initJsonData}
          subParameters={props.subParameters}
          checkBool={props.checkBool}
          conditions={props.conditions}
          groupData={props.groupData}
        />
      );
      break;
    default:
      element = "";
  }
  return element;
};
export default Element;
