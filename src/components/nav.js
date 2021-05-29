import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import logo from './../assets/logo128.png'
import addRecipe from './../assets/file-add.png'
import './../styles/nav.css';


export default class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className={'bg-success px-sm-5 py-sm-3 px-3 py-2 '} >
        <nav className={'container-xl navbar navbar-dark d-flex flex-row justify-content-between align-items-end px-0 py-0 ' }>
          <div className={'d-flex flex-row align-items-end'} >

              <img src={logo} alt={'Website logo'} className={'d-inline-block logo'} />

            <span className={'text-white fs-3 fs-sm-2 fw-bold px-3' }>{'Creole Food'}</span>
          </div>
          <div className={' btn create rounded-circle bg-white px-1 py-1'}>
            <img src={addRecipe} alt={'Add recipe icon'} title={'Add Recipe'} className={'icon'}/>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
