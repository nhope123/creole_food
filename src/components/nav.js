import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {openCreateRecipe} from '../redux/formSlice'
import logo from './../assets/icons/logo128.webp'
import addRecipe from './../assets/icons/file-add.webp'




class Navbar extends Component {
  static propTypes = {
    openCreateRecipe: PropTypes.func,
  }

  render() {
    return (
      <div className={'bg-success px-sm-5 py-sm-3 px-3 py-2 '} >
        <nav className={'container-xl navbar navbar-dark d-flex flex-row justify-content-between align-items-end px-0 py-0 ' }>
          <div className={'d-flex flex-row align-items-end'} >
            <a href={'https://github.com/nhope123/creole_food'} target={'_blank'}
               rel={'nofollow'} tabIndex={'0'} title={'Github Repository'}>
              <img src={logo} alt={'Website logo'} className={'d-inline-block logo'} />
            </a >
            <span className={'text-white fs-3 fs-sm-2 fw-bold px-3' }>{'Creole Food'}</span>

          </div>
          <div className={' btn create rounded-circle bg-white px-1 py-1'} tabIndex={'0'} onClick={this.props.openCreateRecipe}>
            <img src={addRecipe} alt={'Add recipe icon'} title={'Add Recipe'} className={'icon'}/>
          </div>

        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openCreateRecipe,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navbar)
