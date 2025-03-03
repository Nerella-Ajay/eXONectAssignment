import React, { useState } from "react";
import "./App.css";
import City from "./components/City";
import Country from "./components/Country";
import State from "./components/State";

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const addCountry = (name) => setCountries([...countries, { id: Date.now(), name }]);
  const addState = (countryId, name) => setStates([...states, { id: Date.now(), countryId, name }]);
  const addCity = (stateId, name) => setCities([...cities, { id: Date.now(), stateId, name }]);

  const editItem = (id, items, setItems) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      setItems(items.map(item => item.id === id ? { ...item, name: newName } : item));
    }
  };

  const deleteItem = (id, items, setItems) => {
    if (window.confirm("Are you sure?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Countries, States and Cities Management</h1>
      <Country addCountry={addCountry} />

      <ul className="list">
        {countries.map((country) => (
          <li key={country.id} className="list-item">
            <strong>{country.name}</strong>
            <div className="buttons-container">
              <button className="edit-btn" onClick={() => editItem(country.id, countries, setCountries)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteItem(country.id, countries, setCountries)}>Delete</button>
            </div>
            <State countryId={country.id} addState={addState} />
            <ul className="nested-list">
              {states
                .filter((state) => state.countryId === country.id)
                .map((state) => (
                  <li key={state.id} className="list-item">
                    {state.name}
                    <div className="buttons-container">
                      <button className="edit-btn" onClick={() => editItem(state.id, states, setStates)}>Edit</button>
                      <button className="delete-btn" onClick={() => deleteItem(state.id, states, setStates)}>Delete</button>
                    </div>

                    <City stateId={state.id} addCity={addCity} />
                    <ul className="nested-list">
                      {cities
                        .filter((city) => city.stateId === state.id)
                        .map((city) => (
                          <li key={city.id} className="list-item">
                            {city.name}
                            <div className="buttons-container">
                              <button className="edit-btn" onClick={() => editItem(city.id, cities, setCities)}>Edit</button>
                              <button className="delete-btn" onClick={() => deleteItem(city.id, cities, setCities)}>Delete</button>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
