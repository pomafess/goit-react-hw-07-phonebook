import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilterContacts } from '../../redux/phonebook/selectors';
import styles from './Filter.module.css'

const Filter = ({value, onChangeFilter}) => {
    return (
        <div className={styles.filter}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChangeFilter}/>
        </div>
    )
}

Filter.defaultProps = {
    value: '',
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    value: getFilterContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onChangeFilter: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Filter)