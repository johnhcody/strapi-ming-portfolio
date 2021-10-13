import MenuButton from '../MenuButton'
import React from 'react'

const InfoBar: React.FunctionComponent = () => {
  return (
    <div className="w-full flex justify-around h-20 text-black">
      <MenuButton>About</MenuButton>
      <MenuButton>Contact</MenuButton>
      <MenuButton>Articles</MenuButton>
      <MenuButton>Project Mangement</MenuButton>
    </div>
  )
}

export default InfoBar
