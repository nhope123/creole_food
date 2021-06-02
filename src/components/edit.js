import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RecipePreview from './preview'

import {inputChange, closeCreateRecipe} from '../redux/formSlice'
import {setPreview} from '../redux/previewSlice'

const placeholders = [
  'APPLE PIE','1 bread;2 slices cheese',
  'Slice bread; Add cheese to bread slices', 'http://image.location.file.jpg',
  'Use any type bread. Add cheese as desire',
];
const formLabels =[
  'Recipe Title','Serving size','Ingredients separated by semicolon',
  'Directions separated by semicolon','Add url ending with file extension',
  'Add notes '
]

class EditRecipe extends Component {

  static propTypes = {
    closeCreateRecipe: PropTypes.func,
    inputChange: PropTypes.func,
    setPreview: PropTypes.func,
    title: PropTypes.string,
    servingSize: PropTypes.string,
    ingredients: PropTypes.string,
    directions: PropTypes.string,
    src: PropTypes.string,
    notes: PropTypes.string,
  }

  render() {
    return (
        <div id={'edit-modal-bg'}
            className={'container-fluid d-flex flex-column justify-content-evenly align-items-center  bg-white py-4 min-vw-100 min-vh-100'}>
          {/* Recipe editing title */}
          <div id={'form-header'} className={'py-2 px-4 bg-white'} >
            <h2 className={'m-0'} >
                {`${(this.props.editModal)? this.props.title: 'Input'} Recipe `}
            </h2>
          </div >

          <div id={'form-container'} className={' d-block position-relative p-4  bg-white '} >
            <form onSubmit={(event)=>{
                            event.preventDefault();
                            const info = {
                              title: event.target[0].value,
                              servingSize: `Serves ${event.target[1].value}`,
                              ingredients: event.target[2].value.split(';'),
                              directions: event.target[3].value.split(';'),
                              src: event.target[4].value,
                              notes: event.target[5].value,
                            }
                            this.props.setPreview(info)
            }}>

              {/* Recipe Form input */}
              <div  >
                <div className={'d-block pb-2'}>
                  <label className={'d-block'} htmlFor={'title'} title={formLabels[0]} >{'Title'}</label >
                  <input className={'d-block w-100 '} type={'text'} id={'title'} name={'title'} tabIndex={'0'}
                         placeholder={placeholders[0]} required  value={this.props.title}
                         onChange={(event)=>{this.props.inputChange(event,'title')}} />
                </div >
                <div className={'d-block pb-2'}>
                  <label className={'d-block'} htmlFor={'serve'} title={formLabels[1]} >{'Serving'}</label >
                  <input className={'d-block w-100'} id={'serve'} name={'serve'} type={'number'} min={'1'} max={'50'}
                         tabIndex={'0'} required  value={this.props.servingSize}
                         onChange={(event)=>{this.props.inputChange(event,'servingSize')}} />
                </div >
                <div className={'d-block pb-2'}>
                  <label className={'d-block'} htmlFor={'ingredients'} title={formLabels[2]} >{'Ingredients'}</label >
                  <textarea className={'d-block rounded '} id={'ingredients'} name={'ingredients'} tabIndex={'0'}
                            placeholder={placeholders[1]} required
                            value={this.props.ingredients}
                            onChange={(event)=>{
                                      this.props.inputChange(event,'ingredients')
                                    }}
                  ></textarea>
                </div >
                <div className={'d-block pb-2'} >
                  <label className={'d-block'} htmlFor={'directions'} title={formLabels[3]} >{'Directions'}</label >
                  <textarea id={'a'} className={'d-block '} id={'directions'} name={'directions'} tabIndex={'0'}
                            placeholder={placeholders[2]} required
                            value={this.props.directions}
                            onChange={(event)=>{this.props.inputChange(event,'directions')}}
                  ></textarea>
                </div >
                <div className={'d-block pb-2'} >
                  <label className={'d-block'} htmlFor={'image'} title={formLabels[4]} >{'Image Source'}</label >
                  <input className={'d-block w-100'} type={'url'} id={'image'} name={'image'} tabIndex={'0'}
                         placeholder={placeholders[3]} value={this.props.image}
                         onChange={(event)=>{this.props.inputChange(event,'image')}} />
                </div >
                <div className={'d-block pb-2'} >
                  <label className={'d-block'} htmlFor={'notes'} title={formLabels[5]} >{'Notes'}</label >
                  <textarea className={'d-block w-100'} id={'notes'} name={'notes'} tabIndex={'0'}
                            placeholder={placeholders[4]} value={this.props.notes}
                            onChange={(event)=>{this.props.inputChange(event,'notes')}}
                  ></textarea>
                </div >
              </div >

              {/* Buttons */}
              <div className={' container-sm d-flex flex-row justify-content-evenly align-items-center pt-3'}>
                <button type={'button'} className={'btn btn-primary'}
                        tabIndex={'0'} onClick={this.props.closeCreateRecipe} >
                        {'Cancel'}
                </button>
                <button type={'submit'} className={'btn btn-danger'}
                        tabIndex={'0'} >
                        {'Preview'}
                </button>
              </div >
            </form >
          </div >
          {/* Preview changes before submit */}
          <RecipePreview />
        </div >



    )
  }
}

const mapStateToProps = (state) => ({
  title: state.form.title,
  servingSize: state.form.servingSize,
  ingredients: state.form.ingredients,
  directions: state.form.directions,
  image: state.form.image,
  notes: state.form.notes,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeCreateRecipe,
    inputChange,
    setPreview,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
