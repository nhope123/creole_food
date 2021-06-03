import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactModal from 'react-modal'

import Ingredient from './ingredient'
import Direction from './directon'
import OptionButtons from './options'
import {unSetPreview} from '../redux/previewSlice'
import {updateRecipe} from '../redux/slice'
import {closeCreateRecipe} from '../redux/formSlice'

class RecipePreview extends Component {
  static propTypes = {
    activePreview: PropTypes.bool,
    data: PropTypes.object,
    unSetPreview: PropTypes.func,
    updateRecipe: PropTypes.func,
    closeCreateRecipe: PropTypes.func,
  }

  render() {

    //console.log(`data: ${JSON.stringify([this.props.data])}`);
    const buttons = {
      leftButtonTitle: 'Edit',
      rightButtonTitle: 'Confirm',
      leftCallback: this.props.unSetPreview,
      rightCallback: [
                      this.props.updateRecipe,
                      this.props.unSetPreview,
                      this.props.closeCreateRecipe
                    ],
      data: this.props.data,

    }
    return (
      <ReactModal
                    isOpen={this.props.activePreview}
                    onRequestClose={ this.props.unSetPreview}
                    contentLabel={`${ this.props.title} Recipe Preview`}
                    id={'edit-recipe'}
                    className={'container d-flex flex-column justify-content-center align-items-center bg-warning min-vh-100 min-vw-100 overflow-auto'}
      >
        <div >
          {/* Recipe title */}
          <div >
            <h2 >{this.props.data.title}</h2>
          </div >
          {/* Ingredients Layer */}
          <div >
            <Ingredient />
          </div>
          {/* Direction Layer */}
          <div >
            <Direction />
          </div >
          <OptionButtons {...buttons} />

        </div >


      </ReactModal >
    )
  }
}

const mapStateToProps = (state) => ({
  activePreview: state.preview.activePreview,
  data: state.preview.data,

})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    unSetPreview,
    updateRecipe,
    closeCreateRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePreview)
