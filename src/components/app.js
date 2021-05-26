import React, { Component } from 'react';

import Navbar from './nav'


class RecipeBook extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={'container-xl border border-primary'}>
          good stuff
        </div>
      </div>
    )
  }
}

export default RecipeBook;
