import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import * as fuzzysort from "fuzzysort"

const Link = ({ linkData, filter }) => {
  const { name, url, icon, target } = linkData

  return (
    <a className={`block`} href={url} rel="noopener noreferrer nofollow" target={target}>
      <span className="inline-block w-4 h-4 align-middle">
        <Icon icon={icon} />
      </span>
      <span className="inline-block pl-2 font-light leading-8 align-middle">{name}</span>
    </a>
  )
}

export default Link
