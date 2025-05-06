import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContactsTable from "./components/ContactsTable";

export default function App() {
  const contacts = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Andre L.", email: "andre@mediahub.ca" },
  ];

  return (
    <>
            <Header />
              <div className="container" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '1rem' }}>
              <div id='pageHeading'><h1>Media Contacts</h1></div>
              <ContactsTable data={contacts} />
            </div>
          </div>    
    </>
  );
}
