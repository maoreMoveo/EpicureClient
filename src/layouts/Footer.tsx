import React from 'react';
import './_footer.scss';
interface IProps{
    children:React.ReactNode
}
const Footer = ({children}:IProps) => {
  return (
    <div className='footer'>{children}</div>
  )
}

export default Footer