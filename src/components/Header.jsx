import PropTypes from 'prop-types'
import Button from './Button'

const onClick = () =>{
  console.log('clicked');
}

const Header = ({title}) => {
  return (
    <header className='header' >
        <h1>{title} </h1>
        <Button color='green' text='add' onClick={onClick} />
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
