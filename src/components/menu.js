import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let name = ['Roasted Beef','Bake and Shark','Iced cool Teas','Roasted Beef','Bake and Shark','Iced cool Teas'];

class SideMenu extends Component{
  render(){

    return(
      <div className={`${this.props.main} position-relative`}>
        <h5 id={'sm-title'} className={`d-block w-100 h-100 text-white text-center py-2 ${this.props.titleclass}`} data-bs-toggle="dropdown" aria-expanded="false" >{'Recipe'}</h5>
        <ul className={this.props.listclass} aria-labelledby={'sm-title'}>
          {
            name.map((item,index)=>{
              return(
                <li className={this.props.itemclass} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class DropMenu extends Component{
  render(){
    return(
      <Fragment >


      </Fragment >
    )
  }
}

export default class Menu extends Component {
  static propTypes = {

  }

  render() {
    const sidebar = {
                      main: 'd-none d-sm-block',
                      titleclass: '',
                      listclass: 'list-group list-group-flush',
                      itemclass: 'list-group-item',


                      id: 'sm-title'
    }
    const dropbar = {
                      main: 'd-block d-sm-none dropdown ',
                      titleclass: 'dropdown-toggle',
                      listclass: 'drop-menu position-absolute',
                      itemclass: 'drop-item',

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

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Menu)
