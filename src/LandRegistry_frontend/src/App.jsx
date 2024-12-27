import React, { useState } from "react";
import LandRegistrationForm from "./components/LandRegistrationForm";
import LandDetails from "./components/LandDetails";
import "./App.css";

function App() {
  const [landData, setLandData] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  const handleRegister = (data) => {
    setLandData((prevData) => ({
      ...prevData,
      [data.registrationId]: data,
    }));
    alert("Land registered successfully!");
  };

  const handleSearch = (registrationId) => {
    const result = landData[registrationId] || null;
    setSearchResult(result);
  };

  return (
    <div className="app">
      <h1>Land Registration Portal</h1>
      <div className="portal">
        <LandRegistrationForm onRegister={handleRegister} />
        <LandDetails onSearch={handleSearch} searchResult={searchResult} />
      </div>
    </div>
  );
}

export default App;
