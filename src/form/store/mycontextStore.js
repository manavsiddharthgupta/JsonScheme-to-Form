// import React, { useState, useEffect, useMemo } from "react";
// import data from "../../jsoneditor/data/data.json";
// export const MyContext = React.createContext({
//   formValue: {},
//   setInputValue: () => {},
//   onSubmitTheForm: () => {},
// });

// export const MyProvider = (props) => {
//   const [formValue, setInputValue] = useState({});
//   let formMakeData = useMemo(() => {
//     return {};
//   }, []);
//   useEffect(() => {
//     let formMakeData = {};
//     data.forEach((each) => {
//       if (each.uiType === "Group") {
//         let groupData = {};
//         each.subParameters.forEach((each) => {
//           groupData[each.jsonKey] = `${
//             each.validate.defaultValue ? each.validate.defaultValue : ""
//           }`;
//         });
//         formMakeData[each.jsonKey] = groupData;
//       } else {
//         formMakeData[each.jsonKey] = `${
//           each.validate.defaultValue ? each.validate.defaultValue : ""
//         }`;
//       }
//     });
//     console.log(formMakeData);
//     setInputValue(() => {
//       return {
//         ...formMakeData,
//       };
//     });
//     console.log("useContext");
//   }, []);
//   console.log(formValue);
//   const onSubmitTheForm = (event) => {
//     event.preventDefault();
//     console.log(formValue);
//     setInputValue((prev) => {
//       return {
//         ...prev,
//         ...formMakeData,
//       };
//     });
//   };
//   return (
//     <MyContext.Provider value={{ formValue, setInputValue, onSubmitTheForm }}>
//       {props.children}
//     </MyContext.Provider>
//   );
// };
