import { useState } from 'react'

export default function App() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    }
  ];

  return (
    <>
      <h1>GCPE Media Hub Sample</h1>
      {contacts.length === 0 ? 
        <p>There are no contacts.</p> 
      :
      contacts.map(contact => {
          return(
          <p key={contact.id}>
            <b>{contact.name}</b>
          </p>
          );
        })
      }
    </>
  );
}
