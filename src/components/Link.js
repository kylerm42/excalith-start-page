import React from "react"
import { Icon } from "@iconify/react"

const Link = ({ linkData }) => {
  const { name, url, icon, target, rank, isSelected } = linkData

  return (
    <a
      className={`block rank-${rank} ml-2 leading-2 my-1 px-1 rounded-selection ${
        isSelected ? "selected" : ""
      }`}
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
