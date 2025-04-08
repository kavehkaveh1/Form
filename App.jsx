import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ViweContext from "./contexts/viewContext.js";
import Cancel from "./cancel/Cancel.jsx";
import Form from "./form/Form.jsx";
import View from "./view/View.jsx";
const App = () => {
  const [data, SetData] = useState({});
  return (
    <>
      <ViweContext.Provider
        value={{
          data,
          SetData,
        }}
      >
        <Routes>
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/form" element={<Form />} />
          <Route path="view" element={<View />} />
        </Routes>
      </ViweContext.Provider>
    </>
  );
};
export default App;
