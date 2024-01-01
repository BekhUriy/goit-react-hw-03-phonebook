import React from 'react';
import './ContactList.css'; // Шлях до вашого файлу стилів

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="list">
    {contacts.map(contact => (
      <li key={contact.id} className="list-item">
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
