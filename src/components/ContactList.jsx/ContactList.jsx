import React from 'react';
import styled from 'styled-components';

const ContactItemWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  flex-grow: 1;
`;

const ContactName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ContactNumber = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      {contacts.map(contact => (
        <ContactItemWrapper key={contact.id}>
          <ContactInfo>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
          </ContactInfo>
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ContactItemWrapper>
      ))}
    </div>
  );
}

export default ContactList;
