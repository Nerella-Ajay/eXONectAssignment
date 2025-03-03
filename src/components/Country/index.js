import React, { useState } from "react";
import "./index.css";

function Country({ addCountry }) {
    const [name, setName] = useState("");

    return (
    <div className="country-container">
        <input
        type="text"
        className="country-input"
        placeholder="Enter country name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button
        className="country-add-btn"
        onClick={() => {
            if (name) addCountry(name);
            setName("");
        }}
        >
        Add Country
        </button>
    </div>
    );
}

export default Country;
