import React from 'react'
import './_header.scss';
interface IProps{
    children:React.ReactNode
}
const Header = ({children}:IProps) => {
  return (
    <div className='header'>{children}</div>
  )
}

export default Header