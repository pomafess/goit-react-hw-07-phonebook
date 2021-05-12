import { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../contactForm';
import Filter from '../filter';
import ContactList from '../contactList';
import { fetchContact } from '../../redux/phonebook/phonebook-operations';
import styles from './Phonebook.module.css';

class Phonebook extends Component {


  componentDidMount() {
    this.props.fetchContact();
}

  render() {
    return(
      <>
            <div className={styles.container}>
                <section title="Phonebook" className={styles.section}>
            <h1>Phonebook</h1>
            <ContactForm />
          </section>
          <section title="Contacts" className={styles.section}>
            <h2>Contacts</h2>
            <Filter />
            {this.props.isLoading && <h1>Loading...</h1>}
            <ContactList /> 
          </section>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
 isLoading: state.phonebook.loading
});
const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)