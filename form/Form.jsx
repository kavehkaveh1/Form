import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import ViewContext from "../contexts/viewContext.js";
import "./fs.css";
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstAge, setfirstAge] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [toCancel, setToCancel] = useState(false);
  const [toggel, setToggel] = useState(false);
  const { SetData } = useContext(ViewContext);

  if (toCancel) {
    return <Navigate to="/cancel" />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName.trim() &&
      !lastName.trim() &&
      !firstAge.trim() &&
      !fatherName.trim() &&
      !motherName.trim() &&
      !gender.trim() &&
      !city.trim() &&
      !country.trim()
    ) {
      alert("Please fill in at least one field before submitting!");
      return;
    }

    setToggel((toggel) => !toggel);
    SetData({
      firstName,
      lastName,
      firstAge,
      fatherName,
      motherName,
      gender,
      city,
      country,
    });
    console.log(toggel);
  };

  return (
    <>
      <div className="continer">
        <div className="input">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name :</label>
            <input
              className="first_name "
              type="text"
              id="fname"
              name="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="firstname"
            />
            <label htmlFor="lname">Last name :</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="lastName"
            />
            <br />
            <br />
            <label htmlFor="age">age :</label>
            <input
              type="text"
              id="age"
              name="age"
              value={firstAge}
              onChange={(e) => setfirstAge(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="gender">gender :</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <br />
            <br />
            <label htmlFor="father name">father name :</label>
            <input
              className="first_name "
              type="text"
              id="father name"
              name="father name"
              value={fatherName}
              onChange={(e) => setfatherName(e.target.value)}
              placeholder="fatherName"
            />
            <label htmlFor="mother name">mother name :</label>
            <input
              type="text"
              id="mother name"
              name="mother name"
              value={motherName}
              onChange={(e) => setmotherName(e.target.value)}
              placeholder="MotherName"
            />
            <br />
            <br />
            <label htmlFor="country">Choose a country :</label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="iran">iran</option>
              <option value="italy">italy</option>
              <option value="us">us</option>
              <option value="uk">uk</option>
            </select>
            <br />
            <br />
            <label htmlFor="city">Choose a city :</label>
            <select
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="london">london</option>
              <option value="newyork">newyork</option>
              <option value="rome">rome</option>
              <option value="tehran">tehran</option>
            </select>
            <br />
            <br />
            <input type="submit" className="button1" onClick={handleSubmit} />
            {toggel ? <Navigate to="/view" /> : <Navigate to="/form" />}
            <button className="button2" onClick={() => setToCancel(true)}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
