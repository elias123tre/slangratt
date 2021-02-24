import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children, useState, useEffect } from "react"

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const router = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ""

  const [className, setClassName] = useState(childClassName)
  useEffect(() => {
    setClassName(
      router.pathname === new URL(props.href, window.location.origin).pathname
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName
    )
  })

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
