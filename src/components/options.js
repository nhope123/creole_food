import React from 'react'

const OptionButtons = (props) => {
  return (
    <div className={' container-sm d-flex flex-row justify-content-evenly align-items-center'}>
      <button type={'button'} className={'btn btn-primary'}
              tabIndex={'0'} onClick={props.leftCallback} >
              {props.leftButtonTitle}
      </button>
      // BUG: Buttons not working
      <button type={'button'} className={'btn btn-danger'}
              tabIndex={'0'} onClick={(event) =>{
                if(props.data){
                  props.rightCallback[0](props.data)
                  props.rightCallback[1]()
                  props.rightCallback[2]()
                }else{
                  props.rightCallback()
                }
              }

            }>
              {props.rightButtonTitle}
      </button>
    </div >
  )
}

export default OptionButtons
