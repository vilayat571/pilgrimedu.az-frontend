//import { useState } from "react"

interface IMessage{
    color:string,
    text:string
}

const Message:React.FC<IMessage> = ({color,text}) => {


  return (
  <p className={color}>
    {text}
  </p>
  )
}

export default Message
