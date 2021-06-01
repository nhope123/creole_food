import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Ingredient extends Component {
  static propTypes = {
    data: PropTypes.array,
    servings: PropTypes.string,
    src: PropTypes.string,
  }

  render() {
    return(
      <div id={'ingredient'} className={'d-flex flex-sm-row-reverse row py-3'}>

        {/* Image */}
        <div className={'d-flex flex-row align-items-center col-12 col-lg-5 border border-primary'} >
          <img id={'meal'} src={this.props.src} alt={'Completed meal '} />
        </div >

        {/* Ingredient list */}
        <div className={'col-12 col-lg-7 border border-primary py-3'} >
          <div >
            <h6 className={'fw-bold'}>Ingredients</h6 >
            <span >{this.props.servings}</span>
          </div >
          <ul className={'list-unstyled'} >
            {this.props.data.map((item, index)=>{
              return(<li className={'p-1 '} key={index}>{item}</li>)
            })}
          </ul >
        </div >

      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.recipe.detail.ingredients,
  servings: state.recipe.detail.servingSize,
  src: state.recipe.detail.src,
})

export default connect(mapStateToProps)(Ingredient)
