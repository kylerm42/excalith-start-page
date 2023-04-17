import React, { useState } from "react"
import { groupBy } from "lodash"
import * as fuzzysort from "fuzzysort"
import Search from "@/components/Search"
import Section from "@/components/Section"
import { useSettings } from "@/context/settings"

const List = () => {
  const [command, setCommand] = useState("")
  const { settings } = useSettings()

  const handleCommandChange = (e) => {
    setCommand(e.target.value)
  }

  console.log("settings.links", settings.links)

  const links = fuzzysort
    .go(command, settings.links, {
      keys: ["name", "alias"],
      all: true,
    })
    .map((link) => ({
      ...link.obj,
      score: Math.max(link.filter((l) => l).map((l) => l.score)),
    }))
    .sort((a, b) => b.score - a.score)
    .map((link, index) => ({
      ...link,
      rank: index,
    }))

  console.log("links", links)

  const groupedLinks = groupBy(links, "section")

  console.log("groupedLinks", groupedLinks)

  return (
    <div id="list">
      <div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5">
        {settings.sections.map((section, index) => {
          return (
            <Section
              key={index}
              section={section}
              links={groupedLinks[section.title]}
              filter={command}
            />
          )
        })}
      </div>
      <Search prompt={settings.prompt} commandChange={handleCommandChange} />
    </div>
  )
}

export default List
