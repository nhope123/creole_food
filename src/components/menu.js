import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {displayRecipe} from './../redux/slice'





class SideMenu extends Component{
  render(){

    return(
      <div className={`${this.props.main} position-relative`}>
        <h5 id={'sm-title'} className={`d-block w-100 h-100 text-white text-center py-2 ${this.props.titleclass}`} data-bs-toggle="dropdown" aria-expanded="false" >{'Recipe'}</h5>
        <ul className={this.props.listclass} aria-labelledby={'sm-title'}>
          {
            this.props.list.map((item,index)=>{
              return(
                <li className={this.props.itemclass} key={index} tabIndex={'0'} onClick={()=> this.props.callback(item)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class Menu extends Component {
  static propTypes = {
    recipeList: PropTypes.array,
  }
  render() {
    const sidebar = {
                      main: 'd-none d-sm-block',
                      titleclass: '',
                      listclass: 'list-group list-group-flush',
                      itemclass: 'list-group-item',
                      id: 'sm-title',
                      list:this.props.recipeList,
                      callback: this.props.displayRecipe
    }
    const dropbar = {
                      main: 'd-block d-sm-none dropdown ',
                      titleclass: 'dropdown-toggle',
                      listclass: 'drop-menu position-absolute',
                      itemclass: 'drop-item',
                      id: 'sm-title',
                      list:this.props.recipeList,
                      callback: this.props.displayRecipe,
    }

    return (
      <Fragment >
        <SideMenu {...sidebar} />
        <SideMenu {...dropbar} />
      </Fragment >
    )
  }
}

const mapStateToProps = (state) => ({
  recipeList: state.recipe.recipe_list,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    displayRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
