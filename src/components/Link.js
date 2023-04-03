import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import * as fuzzysort from "fuzzysort"

const Link = ({ linkData, filter }) => {
  const [isHidden, setHidden] = useState(false)

  const { name, url, icon, target, alias } = linkData

  useEffect(() => {
    if (filter) {
      const isSelected =
        fuzzysort.single(filter, name) ||
        fuzzysort.single(filter, url) ||
        fuzzysort.single(filter, alias)
      setHidden(!isSelected)
    } else {
      setHidden(false)
    }
  }, [filter, name, target, url]),
    [filter]

  return (
    <a
      className={`block ${isHidden && "opacity-20"}`}
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
