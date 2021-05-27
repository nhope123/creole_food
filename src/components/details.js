import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import edit from './../assets/editdocument.png'
import deletePic from './../assets/trash_bin.png'

export default class Details extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-10'}>
              <h3 className={'text-center'} >{'Bake and Shark'}</h3>
            </div >
            <div className={'col-2 d-flex flex-row'} >
              <button type={'button'} className={'btn btn-primary rounded-circle p-1 border border-secondary-2'} >
                <img className={'detail-icon'} src={edit} alt={'Edit button'} />
              </button >
              <button type={'button'} className={'btn btn-danger rounded-circle p-1'} >
                <img className={'detail-icon'} src={deletePic} alt={'Delete button'} />
              </button >
            </div >
          </div >
        </div>




      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Details)
