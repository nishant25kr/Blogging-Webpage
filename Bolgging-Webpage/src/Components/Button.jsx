import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    classname = '',
    ...props
}) {
  return (
    <div className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${classname} `} {...props}>
      button
    </div>
  )
}

export default Button
