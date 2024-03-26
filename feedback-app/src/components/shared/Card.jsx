import PropTypes from 'prop-types'

//children is a prop
//whatever i put inside <Card> </Card> will be put in a feedback card
//conditional class
//children is node and reverse is boolean
function Card({ children, reverse }) {
  //if reverse, then we want the class of reverse
  //return  <div className={`card ${reverse && 'reverse'}`}>{children}</div>

  //conditional styling
  return (
    <div
      className="card"
      style={{
        //if reverse then background colour is rgba, else white
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    > 
      {children} 
    </div>
  )
}

Card.propTypes = {
  children: PropTyopes.node.isRequired,
  reverse: PropTypes.bool
  
}

export default Card