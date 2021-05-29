import React from 'react'
import edit from './../assets/editdocument.png'
import deletePic from './../assets/trash_bin2.png'

const URL ='http://watchfit.com/wp-content/uploads/2015/05/junk-food-and-its-effects_11.jpg';
const ingrd = [
                '1 ½ teaspoons salt', '1 teaspoon paprika',
                '1 teaspoon ground cardamom', '1 teaspoon ground coriander',
                '½ teaspoon ground black pepper', '¼ cup grapeseed oil',
                '2 tablespoons maple syrup',
                '1 (2 pound) salmon fillet, cut into 3-inch pieces'
              ];


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


export const Ingredient =  props => {
  return(
    <div id={'ingredients'} className={'d-flex flex-sm-row-reverse row py-3'}>

      {/* Image */}
      <div className={'d-flex flex-row align-items-center col-12 col-lg-5 border border-primary'} >
        <img id={'meal'} src={URL} alt={'Completed meal '} />
      </div >

      {/* Ingredient list */}
      <div className={'col-12 col-lg-7 border border-primary py-3'} >
        <h6 className={'fw-bold'}>Ingredients</h6 >
        <ul className={'list-unstyled'} >
          {ingrd.map((item, index)=>{
            return(<li className={'p-1'} key={index}>{item}</li>)
          })}
        </ul >
      </div >

    </div >
  )
}
