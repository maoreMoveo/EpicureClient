import React from 'react'
import '../../assets/styles/components/common/_container.scss';
interface IProps{
    children:React.ReactNode
}
const Container = ({children}:IProps) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container