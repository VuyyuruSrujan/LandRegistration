import React, { useState } from "react";
import "./LandDetails.css";

function LandDetails({ onSearch, searchResult }) {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    onSearch(searchId);
  };

  return (
    <div className="land-details">
      <h2>Search Land Details</h2>
      <input
        type="text"
        placeholder="Enter Registration ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult ? (
        <div className="result">
          <p><strong>Owner Name:</strong> {searchResult.ownerName}</p>
          <p><strong>Location:</strong> {searchResult.location}</p>
          <p><strong>Area:</strong> {searchResult.area} sq. ft.</p>
        </div>
      ) : (
        searchId && <p>No data found for Registration ID: {searchId}</p>
      )}
    </div>
  );
}

export default LandDetails;
