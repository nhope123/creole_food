import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {Header} from './layers'

const URL ='http://watchfit.com/wp-content/uploads/2015/05/junk-food-and-its-effects_11.jpg';
const ingrd = [
                '1 ½ teaspoons salt', '1 teaspoon paprika',
                '1 teaspoon ground cardamom', '1 teaspoon ground coriander',
                '½ teaspoon ground black pepper', '¼ cup grapeseed oil',
                '2 tablespoons maple syrup',
                '1 (2 pound) salmon fillet, cut into 3-inch pieces'
              ];

export default class Details extends Component {
  static propTypes = {

  }

  render() {
    return (

        <div className={'d-flex flex-column justify-content-evenly container p-3 h-100 w-100 m-0'}>
          {/* Header Layer */}
          <Header />

          {/* Ingredients Layer */}
          <div id={'ingredients'} className={'d-flex  row '}>
            {/* Ingredient list */}
            <div className={'col-12 col-lg-7 border border-primary '} >
              <div className={'fw-bold'}>Ingredients</div >
              <ul className={'list-unstyled'} >
                {ingrd.map((item, index)=>{
                  return(<li className={'p-1'} key={index}>{item}</li>)
                })}
              </ul >
            </div >
            {/* Image */}
            <div className={'col-12 col-lg-5 border border-primary'} >
              <img id={'meal'} src={URL} alt={'Completed meal '} />
            </div >


          </div >

          {/* Direction */}
          <div id={'direction'} className={'row'}>
            {/* Image */}
            <div className={'col-12 border border-primary '} >

            </div >


          </div >




        </div >

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Details)
