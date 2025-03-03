import React, { useState } from "react";
import "./index.css";

function City({ stateId, addCity }) {
    const [name, setName] = useState("");

    return (
    <div className="city-container">
        <input
        type="text"
        className="city-input"
        placeholder="Enter city name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button
        className="city-add-btn"
        onClick={() => {
            if (name) addCity(stateId, name);
            setName("");
        }}
        >
        Add City
        </button>
    </div>
    );
}

export default City;
