import { AiOutlinePhone } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <>
      <div>
        <div>
          <FaUserAlt />
          <span>{contact.name}</span>
        </div>
        <div>
          <AiOutlinePhone />
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        onClick={() => {
          handleDeleteContact(contact.id);
        }}
      >
        delete
      </button>
    </>
  );
};

export default Contact;
