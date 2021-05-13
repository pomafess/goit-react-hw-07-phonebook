import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import {getContacts, getFilterContacts} from '../../redux/phonebook/selectors'
import styles from './ContactList.module.css';

const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className={styles.contactListItem}>
            <p>{name}: {number}</p>
            <button type="button" className={styles.contactsListButton} onClick={onClickRemove}>Delete</button>
        </li>
    )
}

const ContactList = ({ filteredContacts, onRemove }) => {
    const result = filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
    ))
    
    return (
        filteredContacts.length > 0 && (
            <ul className={styles.contactsList}>
                {result}
            </ul>
        )
    )
}


ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}

const getFilteredContact = (contacts, value) => {
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
  }


const mapStateToProps = state => ({
    filteredContacts: getFilteredContact(getContacts(state),  getFilterContacts(state))
})

const mapDispatchToProps = dispatch => ({
    onRemove: (id) => dispatch(deleteContact(id)),
    
});

export default connect(mapStateToProps, mapDispatchToProps) (ContactList);