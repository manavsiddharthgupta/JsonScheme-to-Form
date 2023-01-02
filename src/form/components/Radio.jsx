import { Tooltip } from "@chakra-ui/react";
import "./radio.css";
const Radio = (props) => {
  let inputVal = props.defaultValue;
  return (
    <li>
      <input
        type="radio"
        id={props.value}
        value={props.value}
        name="same"
        defaultChecked={inputVal}
        onChange={props.onsetRadioDataHandler}
      />
      <label htmlFor={props.value}>
        {props.label}
        {props.description.length > 0 && (
          <Tooltip label={props.description}>
            <span className="tooltip">i</span>
          </Tooltip>
        )}
      </label>
    </li>
  );
};
export default Radio;
