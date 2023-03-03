import PropTypes from 'prop-types';

import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, number, handleDeleteContact }) => {
  return (
    <Contact>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDeleteContact}>Delete</button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
