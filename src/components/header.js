import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import edit from './../assets/icons/editdocument.webp'
import deletePic from './../assets/icons/trash_bin.webp'
import pdfPic from './../assets/icons/pdf_download.webp'
import DeleteRecipe from './delete'

import {openDeleteModal, downloadPDF} from '../redux/slice'
import {openEditRecipe} from '../redux/formSlice'

class Header extends Component {
  static propTypes = {
    data: PropTypes.object,
    openDeleteModal: PropTypes.func,
    openEditRecipe: PropTypes.func,
    downloadPDF: PropTypes.func,
  }

  render() {
    return(
      <div className={'row'}>
        {/* Label */}
        <div className={'col-12 col-sm-10'}>
          <h3 className={'text-center'} >{this.props.data.title}</h3>
        </div >
        {/* Eidt buttons */}
        <div id={'icon-buttons'} className={'col-1 col-sm-2 d-flex flex-row flex-wrap justify-content-evenly'} >


          <button type={'button'} className={'btn rounded-circle p-1 '} onClick={()=>{
            this.props.downloadPDF(this.props.data)}} >
            <img className={'icon'} src={pdfPic} alt={'Pdf button'} title={'Download Pdf Version'}/>
          </button >


          <button type={'button'} className={'btn rounded-circle p-1 '} onClick={()=>{
            this.props.openEditRecipe(this.props.data)}} >
            <img className={'detail-icon'} src={edit} alt={'Edit button'} title={'Edit Recipe'}/>
          </button >
          <button type={'button'} className={'btn rounded-circle p-1'} onClick={this.props.openDeleteModal} >
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
    downloadPDF,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
