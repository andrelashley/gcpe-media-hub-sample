import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
      {contacts.length === 0 ? 
        <p>There are no contacts.</p> 
      :
      contacts.map(contact => {
          return(
            <>
            <Header />
              <div className="container" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '1rem' }}>
              <p key={contact.id}>
                <b>{contact.name}</b>
              </p>
            </div>
          </div>
            </>
            
          );
        })
      }
    </>
  );
}
