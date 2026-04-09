// import Profile from '../Lesson1/Profile/Profile';
// import userData from '../../userData.json';
// import friends from '../../friends.json';
// import FriendList from '../Lesson1/FriendList/FriendList';
// import transactions from '../../transactions.json';
// import TransactionHistory from '../Lesson1/TransactionHistory/TransactionHistory';
import { useState, useEffect } from 'react';
import ContactList from '../Lesson3/ContactList/ContactList';
import SearchBox from '../Lesson3/SearchBox/SearchBox';
import ContactForm from '../Lesson3/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
// import Description from '../Lesson2/Description/Description';
// import Options from '../Lesson2/Options/Options';
// import FeedBack from '../Lesson2/FeedBack/FeedBack';
// const feedbacksObj = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
const basicContacts = [
  { id: 'id-1 ', name: 'Rosie Simpson', number: '459-12-56 ' },
  { id: 'id-2 ', name: 'Hermione Kline', number: '443-89-12 ' },
  { id: 'id-3 ', name: 'Eden Clements', number: '645-17-79 ' },
  { id: 'id-4 ', name: 'Annie Copeland', number: '227-91-26 ' },
];
const getSavedContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
  if (!savedContacts || savedContacts.length == 0) {
    return basicContacts;
  }
  return savedContacts;
};
function App() {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleAddContact = newContact => {
    setContacts(prevState => {
      const finalContact = {
        id: nanoid(),
        ...newContact,
      };
      return [...prevState, finalContact];
    });
  };
  const onDeleteContact = deletedContact => {
    setContacts(prevState => {
      return prevState.filter(contact => {
        return contact.id !== deletedContact;
      });
    });
  };
  const filtredContactList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase());
  });
  return (
    <div className="wrapper">
      <h1> Phonebook </h1>
      <SearchBox filterValue={filterName} onChanged={setFilterName} />
      <ContactForm handleAddContact={handleAddContact} />
      <ContactList
        contacts={filtredContactList}
        handleDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
