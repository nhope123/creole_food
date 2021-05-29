import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {Header, Ingredient} from './layers'

const direct = [
                'Stir salt, paprika, cardamom, coriander, and black pepper together in a bowl.\
                 Add oil and maple syrup and stir until evenly combined.',
                 'Preheat a non-stick frying pan over medium-high heat, about 350 \
                 degrees F (175 degrees C).',
                 'Dredge salmon pieces through the maple syrup mixture until evenly \
                 coated on all sides.',
                 'Cook salmon in the preheated pan until fish flakes easily with a \
                 fork, 5 to 7 minutes per side.'
]

export default class Details extends Component {
  static propTypes = {

  }

  render() {
    return (

        <div className={'d-flex flex-column justify-content-evenly container p-3 h-100 w-100 m-0'}>
          {/* Header Layer */}
          <Header />

          {/* Ingredients Layer */}
          <Ingredient />

          {/* Direction */}
          <div id={'direction'} className={'row'}>

            {/* Directions */}
            <div className={'col-12 border border-primary  py-3'} >
              <h6 className={'fw-bold'}>Direction</h6 >
                <dl >
                  {direct.map((item, index)=>{
                    return(
                      <div  key={`${index }`}>
                        <dt className={'px-1'}  >{`Step ${index + 1} `} </dt >
                        <dd className={'px-1'}  > {item } </dd>
                      </div  >
                    );
                  })
                }

                </dl >
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
