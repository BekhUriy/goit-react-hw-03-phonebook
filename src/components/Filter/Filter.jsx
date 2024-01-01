import React from 'react';
import './Filter.css'; // Шлях до вашого файлу стилів

const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label>
      Filter contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
