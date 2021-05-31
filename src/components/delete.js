import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactModal from 'react-modal'

import {closeDeleteModel, confirmDelete} from '../redux/slice'

ReactModal.setAppElement('#root')

class DeleteRecipe extends Component {
  static propTypes = {
    deleteModal: PropTypes.bool,
    closeDeleteModel: PropTypes.func,
    confirmDelete: PropTypes.func,
    title: PropTypes.string,
  }

  render() {
    return (

      <ReactModal
                  isOpen={this.props.deleteModal}
                  onRequestClose={this.props.closeDeleteModel}
                  contentLabel={`Delete ${this.props.title} Recipe`}
                  id={'delete-Modal'}
                  className={'d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100 '}


      >
        <div id={'dm-content'} className={' container  d-flex flex-column justify-content-between align-items-center p-2 border rounded'}>
          <div className={'text-center'} >{'Are you sure you want to delete this recipe?'}</div>
          <div className={' container-sm d-flex flex-row justify-content-evenly align-items-center'}>
            <button type={'button'} className={'btn btn-primary'}
                    tabIndex={'0'} onClick={this.props.closeDeleteModel} >
                    {'Cancel'}
            </button>
            <button type={'button'} className={'btn btn-danger'}
                    tabIndex={'0'} onClick={this.props.confirmDelete}>
                    {'Confirm'}
            </button>
          </div >

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
    closeDeleteModel,
    confirmDelete,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipe)
