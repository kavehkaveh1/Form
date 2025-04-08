import { useContext } from "react";
import ViewContext from "../contexts/viewContext.js";
import "../view/style.css";

const View = () => {
  const { data } = useContext(ViewContext);

  return (
    <div className="view-container">
      {data.firstName && <h3> First name: {data.firstName}</h3>}
      {data.lastName && <h3> Last name: {data.lastName}</h3>}
      {data.firstAge && <h3> Age: {data.firstAge}</h3>}
      {data.fatherName && <h3> Father name: {data.fatherName}</h3>}
      {data.motherName && <h3> Mother name: {data.motherName}</h3>}
      {data.gender && <h3> Gender: {data.gender}</h3>}
      {data.city && <h3> City: {data.city}</h3>}
      {data.country && <h3> Country: {data.country}</h3>}
    </div>
  );
};

export default View;
