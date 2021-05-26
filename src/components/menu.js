import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class MyComponent extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>MyComponent</div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
