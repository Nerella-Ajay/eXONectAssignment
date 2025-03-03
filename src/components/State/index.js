import React, { useState } from "react";
import "./index.css";

function State({ countryId, addState }) {
    const [name, setName] = useState("");

    return (
    <div className="state-container">
        <input
        type="text"
        className="state-input"
        placeholder="Enter state name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button
        className="state-add-btn"
        onClick={() => {
            if (name) addState(countryId, name);
            setName("");
        }}
        >
        Add State
        </button>
    </div>
    );
}

export default State;
