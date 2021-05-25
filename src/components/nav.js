import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import logo from './../assets/logo128.png'
import addRecipe from './../assets/file-add.png'
import './../styles/nav.scss';

export default class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <nav className={'navbar navbar-dark d-flex flex-row justify-content-between align-items-center px-5 py-3' }>
        <div >

            <img src={logo} alt={'Website logo'} className={'d-inline-block logo'}/>

          <span>{'Creole Food'}</span>
        </div>
        <div>
          <img src={addRecipe} alt={'Website logo'} />
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
