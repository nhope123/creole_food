import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactModal from 'react-modal'

import Ingredient from './ingredient'
import Direction from './directon'
import OptionButtons from './options'
import {unSetPreview, closePreview,} from '../redux/previewSlice'
import {updateRecipe} from '../redux/slice'
import {closeCreateRecipe, openEditRecipe} from '../redux/formSlice'

class RecipePreview extends Component {
  static propTypes = {
    activePreview: PropTypes.bool,
    data: PropTypes.object,
    unSetPreview: PropTypes.func,
    closePreview: PropTypes.func,
    updateRecipe: PropTypes.func,
    closeCreateRecipe: PropTypes.func,
    openEditRecipe: PropTypes.func,
  }

  render() {

    //console.log(`data: ${JSON.stringify([this.props.data])}`);
    const buttons = {
      leftButtonTitle: 'Edit',
      rightButtonTitle: 'Confirm',
      leftCallback: [this.props.closePreview, this.props.openEditRecipe],
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
                    onRequestClose={ this.props.closePreview}
                    contentLabel={`${ this.props.title} Recipe Preview`}
                    id={'edit-recipe'}
                    overlayClassName={'override d-flex justify-content-center align-items-center '}
                    className={' position-absolute bg-white '}
      >
        <div className={'container  px-3  overflow-scroll'} >
          {/* Recipe title */}
          <div className={'text-center p-3'}>
            <h2 >{this.props.data.title}</h2>
          </div >
          {/* Ingredients Layer */}
          <div className={' pb-3'}>
            <Ingredient />
          </div>
          {/* Direction Layer */}
          <div className={' pb-3'}>
            <Direction />
          </div >
          <div className={' pb-4'} >
            <OptionButtons {...buttons} />
          </div >
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
    closePreview,
    updateRecipe,
    closeCreateRecipe,
    openEditRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePreview)
