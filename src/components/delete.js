import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactModal from 'react-modal'
import OptionButtons from './options'

import {closeDeleteModal, confirmDelete} from '../redux/slice'

ReactModal.setAppElement('#root')

class DeleteRecipe extends Component {
  static propTypes = {
    deleteModal: PropTypes.bool,
    closeDeleteModal: PropTypes.func,
    confirmDelete: PropTypes.func,
    title: PropTypes.string,
  }

  render() {
    const buttons = {
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Confirm',
      leftCallback: this.props.closeDeleteModal,
      rightCallback: this.props.confirmDelete,
      data: null,

    }

    return (
      <ReactModal
                  isOpen={this.props.deleteModal}
                  onRequestClose={this.props.closeDeleteModal}
                  contentLabel={`Delete ${this.props.title} Recipe`}
                  id={'delete-Modal'}
                  className={'d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100 '}
      >
        <div id={'dm-content'} className={' container  d-flex flex-column justify-content-between align-items-center p-2 border rounded'}>
          <div className={'text-center'} >{'Are you sure you want to delete this recipe?'}</div>
          {/* Choice to cancel or delete the recipe */}
          <OptionButtons {...buttons}/>
        </div >
      </ReactModal >

    )
  }
}

const mapStateToProps = (state) => ({
  deleteModal: state.recipe.deleteModal,
  title: state.recipe.detail.name,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeDeleteModal,
    confirmDelete,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipe)
