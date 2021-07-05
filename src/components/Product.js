import React from 'react'
import PropTypes from 'prop-types'

const Product = ({price, quantity,title}) => {
  // product component should render title and price
  // It should render title, price and quantity when given inventory
  return(
    <div>
      {title}-${price}*{quantity}
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
