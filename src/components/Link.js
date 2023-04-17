import React from "react"
import { Icon } from "@iconify/react"

const Link = ({ linkData }) => {
  const { name, url, icon, target, rank } = linkData

  return (
    <a
      className={`block rank-${rank}`}
      href={url}
      rel="noopener noreferrer nofollow"
      target={target}
    >
      <span className="inline-block w-4 h-4 align-middle">
        <Icon icon={icon} />
      </span>
      <span className="inline-block pl-2 font-light leading-8 align-middle">{name}</span>
    </a>
  )
}

export default Link
