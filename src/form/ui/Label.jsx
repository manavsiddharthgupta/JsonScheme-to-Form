import "./label.css";
const Label = (props) => {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
};
export default Label;
