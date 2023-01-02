const Option = (props) => {
  if (props.selected) {
    console.log(props.selected);
    return <option value={props.value}>{props.children}</option>;
  }
  return <option value={props.value}>{props.children}</option>;
};
export default Option;
