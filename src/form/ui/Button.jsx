import "./button.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.children}
    </button>
  );
};
export default Button;
