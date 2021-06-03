import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import edit from './../assets/editdocument1.png'
import deletePic from './../assets/trash_bin2.png'
import DeleteRecipe from './delete'

import {openDeleteModal} from '../redux/slice'
import {openEditRecipe} from '../redux/formSlice'

class Header extends Component {
  static propTypes = {
    data: PropTypes.object,
    openDeleteModal: PropTypes.func,
    openEditRecipe: PropTypes.func,
  }

  render() {
    return(
      <div className={'row'}>
        {/* Label */}
        <div className={'col-9 col-sm-10'}>
          <h3 className={'text-center'} >{this.props.data.title}</h3>
        </div >
        {/* Eidt buttons */}
        <div className={'col-3 col-sm-2 d-flex flex-row'} >
          <button type={'button'} className={'btn rounded-circle p-2 '} onClick={()=>{
            this.props.openEditRecipe(this.props.data)}} >
            <img className={'detail-icon'} src={edit} alt={'Edit button'} title={'Edit Recipe'}/>
          </button >
          <button type={'button'} className={'btn rounded-circle p-2'} onClick={this.props.openDeleteModal} >
            <img className={'detail-icon'} src={deletePic} alt={'Delete button'} title={'Delete Recipe'}/>
          </button >
          {/* Modal */}
          <DeleteRecipe />

        </div >
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.recipe.detail
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openDeleteModal,
    openEditRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
