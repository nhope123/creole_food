import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactModal from 'react-modal'

import {closeCreateModal} from '../redux/slice'

class CreateRecipe extends Component {
  static propTypes = {
    createModal: PropTypes.bool,
    closeCreateModal: PropTypes.func,
  }

  render() {
    return (

      <ReactModal
                    isOpen={''}
                    onRequestClose={this.props.closeCreateModal}
                    contentLabel={''}
                    id={''}
                    className={''}
      >
        <div >
          <form >
            {/* Recipe editing title */}
            <div >
              <h2 >{`${'Add'} Recipe`}</h2>
            </div >
            {/* Recipe Form input */}
            <div  >
              <div >
                <label >{'Title'}</label >
                <input type={'text'} />
              </div >
              <div >
                <label >{'Serving'}</label >
                <input type={'text'} />
              </div >
              <div >
                <label >{'Ingredients'}</label >
                <input type={'text'} />
              </div >
              <div >
                <label >{'Directions'}</label >
                <input type={'text'} />
              </div >
              <div >
                <label >{'Image Source'}</label >
                <input type={'text'} />
              </div >
              <div >
                <label >{'Notes'}</label >
                <input type={'text'} />
              </div >
            </div >

            {/* Buttons */}
            <div className={' container-sm d-flex flex-row justify-content-evenly align-items-center'}>
              <button type={'button'} className={'btn btn-primary'}
                      tabIndex={'0'} onClick={this.props.closeCreateModal} >
                      {'Cancel'}
              </button>
              <button type={'button'} className={'btn btn-danger'}
                      tabIndex={'0'} >
                      {'Preview'}
              </button>
            </div >
          </form >
        </div >


      </ReactModal >
    )
  }
}

const mapStateToProps = (state) => ({
  createModal: state.recipe.createModal,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeCreateModal,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe)
