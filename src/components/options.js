import React from 'react'

const OptionButtons = (props) => {
  return (
    <div id={'options'} className={' container-sm d-flex flex-row justify-content-evenly align-items-center py-4'}>
      <button type={'button'} className={'btn btn-primary'}
              tabIndex={'0'} onClick={()=>{
                if(props.data){
                  props.leftCallback[0]()
                  props.leftCallback[1](props.data)
                }else{
                  props.rightCallback()
                }
              } }>
              {props.leftButtonTitle}
      </button>
      <button type={'button'} className={'btn btn-danger'}
              tabIndex={'0'} onClick={() =>{
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
