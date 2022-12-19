import React from 'react'
import '../../assets/styles/components/common/_main.scss';
interface IProps{
    children:React.ReactNode
}
const Main = ({children}:IProps) => {
  return (
    <div className='main'>{children}</div>
  )
}

export default Main;