import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from './nav';
import Menu from './menu';
import Details from './details';
import EditRecipe from './edit';

class RecipeBook extends Component {
  static propTypes = {
    createRecipe: PropTypes.bool,
  }

  render() {
    return (
      <Fragment >
      { (this.props.createRecipe)? <EditRecipe /> :(
        <div>
          <Navbar />
          <div className={'main-container container-xl border border-primary h-sm-25'}>
            <div className={'d-flex flex-row align-items-stretch row h-100 '} >
              <div id={'menu'} className={'d-block col-12 col-sm-3 border border-secondary p-0'} >
                <Menu />
              </div>
              <div id={'details'} className={' col-12 col-sm-9 border border-secondary '} >
                <Details />
              </div >

            </div>
          </div>

        </div>
      )}
      </Fragment >
    )
  }
}

const mapStateToProps = (state) => ({
  createRecipe: state.form.createRecipe,
});

export default connect(mapStateToProps)(RecipeBook);
