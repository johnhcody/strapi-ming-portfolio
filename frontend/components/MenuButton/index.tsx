import React, { FunctionComponent } from 'react'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`py-2 px-4 ${
        props.className ? props.className : 'bg-transparent text-black hover:text-gray-800'
      } focus:outline-none`}
    >
      {props.children}
    </button>
  )
}

export default Button
