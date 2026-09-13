import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full  w-80 overflow-hidden relative rounded-4xl flex-shrink-0 bg-red-200'>
     <img className='h-full w-full object-cover ' src={props.img} alt=''></img>
     <RightCardContent tag={props.tag} id={props.id} intro={props.intro}/>
     
    </div>
  )
}

export default RightCard