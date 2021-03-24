import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = (e) => {
        console.log("clicked: ", e)
    };

    return (
        <div className='header'>
            <h2>{title}</h2>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </div>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string
}

export default Header
