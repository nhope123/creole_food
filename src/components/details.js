import React, { Component, Fragment } from 'react'

import Header from './header'
import Ingredient from './ingredient'
import Direction from './directon'

class Details extends Component {

  render() {
    return (
        <div className={'d-flex flex-column justify-content-evenly container p-3 h-100 w-100 m-0'}>
          {/* Header Layer */}
          <Header />
          {/* Ingredients Layer */}
          <Ingredient  />
          {/* Direction */}
          <Direction  />
        </div >
    )
  }
}

export default Details;
