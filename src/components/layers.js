import React from 'react'
import edit from './../assets/editdocument.png'
import deletePic from './../assets/trash_bin2.png'

export const Header = props => {
  return(
    <div className={'row'}>
      {/* Label */}
      <div className={'col-9 col-sm-10'}>
        <h3 className={'text-center'} >{'Bake and Shark'}</h3>
      </div >
      {/* Eidt buttons */}
      <div className={'col-3 col-sm-2 d-flex flex-row'} >
        <button type={'button'} className={'btn rounded-circle p-2 '} >
          <img className={'detail-icon'} src={edit} alt={'Edit button'} />
        </button >
        <button type={'button'} className={'btn rounded-circle p-2'} >
          <img className={'detail-icon'} src={deletePic} alt={'Delete button'} />
        </button >
      </div >
    </div >
  )
}
