import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd ,showAdd}) => {
  return (
    <header className='header' >
        <h1>{title} </h1>
        <Button color={showAdd ? 'red':'green'} text={showAdd ? 'close' : 'add'}
        onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title :'Task Tracker',

}

Header.propTypes = {
  title : PropTypes.string.isRequired,
}

// css in js
// const headingStyle ={
//   color:'red',
//   margin:'40px',
//   backgroundColor:'white',
  
// }

export default Header
