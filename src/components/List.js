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

  console.log(settings)
  const links = fuzzysort.go(command, settings.links, {
    keys: ["name", "alias"],
    all: true,
  })

  const filteredSections = settings.sections.map((section) => {
    return {
      ...section,
      links: groupBy(links, "section")
    }
  })

  return (
    <div id="list">
      <div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5">
        {filteredSections.map((section, index) => {
          return <Section key={index} section={section} links={links} filter={command} />
        })}
      </div>
      <Search prompt={settings.prompt} commandChange={handleCommandChange} />
    </div>
  )
}

export default List
