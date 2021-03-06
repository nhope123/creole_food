import React, { Component } from 'react'

import Header from './header'
import Ingredient from './ingredient'
import Direction from './directon'

class Details extends Component {

  render() {
    return (
        <div className={'d-flex flex-column justify-content-evenly container p-4 pb-5 h-100 w-100 m-0'}>
          {/* Header Layer */}
          <Header />
          {/* Ingredients Layer */}
          <Ingredient  />
          {/* Direction Layer */}
          <Direction  />
        </div >
    )
  }
}

export default Details;
