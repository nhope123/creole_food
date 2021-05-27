import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SideMenu extends Component{
  render(){
    let name = ['Roasted Beef','Bake and Shark','Iced cool Teas','Roasted Beef','Bake and Shark','Iced cool Teas'];
    return(
      <div className={'d-block d-sm-none dropdown '}>
        <h5 id={'sm-title'} className={'d-block w-100 text-white text-center py-2 dropdown-toggle'} data-bs-toggle="dropdown" aria-expanded="false" >{'Recipe'}</h5>
        <ul className={'dropdown-menu'} aria-labelledby={'sm-title'}>
          {name.map((item,index)=>{
            return(<li ><a className={'dropdown-item'} href='#' key={index}>{item}</a></li>)
          })}
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
                      itemclass: 'list-group-item',
                      listclass: 'list-group list-group-flush',
                      main: 'd-none d-sm-block',
                      id: 'sm-title'
    }
    return (
      <Fragment >
        <SideMenu />
        {/*<SideMenu />*/}
      </Fragment >
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Menu)
