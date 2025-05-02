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
            <Header />
              <div className="container" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '1rem' }}>
              <div id='pageHeading'><h1>Media Contacts</h1></div>
              {contacts.map(contact => {
                return <p key={contact.id}>{contact.name}</p>
              })}
            </div>
          </div>    
    </>
  );
}
