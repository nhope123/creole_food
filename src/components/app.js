import React, { Component } from 'react';

import Navbar from './nav';
import Menu from './menu';
import Details from './details';

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
        <div className={'main-container container-xl border border-primary h-sm-25'}>
          <div className={'d-flex flex-row align-items-stretch row h-100 '} >
            <div id={'menu'} className={'d-block col-12 col-sm-3 border border-secondary p-0'} >
              <Menu />
            </div>
            <div id={'details'} className={' col-12 col-sm-9 border border-secondary '} >
              <Details />
            </div >



          </div>
        </div>

      </div>
    )
  }
}

export default RecipeBook;
