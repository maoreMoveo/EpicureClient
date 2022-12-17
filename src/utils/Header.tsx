import React from 'react'
import '../assets/styles/utils/_header.scss';
interface IProps{
    children:React.ReactNode
}
const Header = ({children}:IProps) => {
  return (
    <div className='header'>{children}</div>
  )
}

export default Header