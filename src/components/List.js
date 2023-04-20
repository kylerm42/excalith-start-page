import React, { useState, useEffect } from "react"
import { groupBy } from "lodash"
import * as fuzzysort from "fuzzysort"
import Search from "@/components/Search"
import Section from "@/components/Section"
import { useSettings } from "@/context/settings"

const List = () => {
  const [query, setQuery] = useState("")
  const { settings } = useSettings()

  const handleQueryChange = (input) => {
    setQuery(input)
  }

  const handleSelectionChange = (idx) => {
    console.log("idx", idx)
  }

  const links = fuzzysort
    .go(query, settings.links, {
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
  const groupedLinks = groupBy(links, "section")

  const sections = query
    ? [{ title: "Links", color: "violet", links }]
    : settings.sections.map((section) => ({
        ...section,
        links: groupedLinks[section.title],
      }))

  return (
    <div id="list" className="h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5 grow">
        {sections.map((section, index) => {
          return <Section key={index} section={section} links={section.links} />
        })}
      </div>
      <Search onQueryChange={handleQueryChange} onSelectionChange={handleSelectionChange} />
    </div>
  )
}

export default List
