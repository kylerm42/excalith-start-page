import React, { useState, useEffect } from "react"
import { groupBy } from "lodash"
import * as fuzzysort from "fuzzysort"
import Search from "@/components/Search"
import Section from "@/components/Section"
import { useSettings } from "@/context/settings"
import { runCommand } from "@/utils/command"

const DEFAULTS = {
  maxSearchResults: 10,
  section: {
    maxLinks: 5,
    align: "left",
  },
}

const List = ({ onLoad }) => {
  const { settings } = useSettings()
  const [query, setQuery] = useState("")
  const [highlightedLink, setHighlightedLink] = useState(-1)
  const [links, setLinks] = useState(settings.links)
  const [sections, setSections] = useState(settings.sections)

  const handleQueryChange = (input) => {
    setQuery(input)
    setHighlightedLink(-1)
  }

  const handleSelectionChange = (action) => {
    switch (action) {
      case "increment":
        const incAmount = links[0]?.score === 0 && highlightedLink < 0 ? 2 : 1
        setHighlightedLink((highlightedLink + incAmount) % links.length)
        break
      case "decrement":
        const decAmount = highlightedLink < 0 ? 0 : 1
        setHighlightedLink((highlightedLink + links.length - decAmount) % links.length)
        break
      case "reset":
        setHighlightedLink(-1)
        break
    }
  }

  const handleCommand = (command) => {
    runCommand(command, settings, links, highlightedLink)
  }

  useEffect(() => {
    handleQueryChange("")
    onLoad()
  }, [])

  useEffect(() => {
    // filter links by query
    const filteredLinks = filterLinks(query, settings.links, highlightedLink)
    // group by section
    const groupedLinks = groupBy(filteredLinks, "section")
    // limit links to section max
    const limitedLinks = query
      ? filteredLinks.splice(0, DEFAULTS.maxSearchResults)
      : Object.entries(groupedLinks).flatMap(([sectionName, links]) => {
          return links.splice(
            0,
            sections.find((s) => s.title === sectionName)?.maxLinks || DEFAULTS.section.maxLinks
          )
        })
    // select highlighted link
    limitedLinks[highlightedLink] && (limitedLinks[highlightedLink].isSelected = true)

    setLinks(limitedLinks)
    setSections(filterSections(query, settings.sections, limitedLinks))
  }, [highlightedLink, query])

  return (
    <div id="list" className="h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5 grow">
        {sections.map((section, index) => {
          return <Section key={index} section={section} />
        })}
      </div>
      <Search
        onQueryChange={handleQueryChange}
        onSelectionChange={handleSelectionChange}
        onCommand={handleCommand}
      />
    </div>
  )
}

function filterLinks(query, links, highlightedLink) {
  return fuzzysort
    .go(query, links, {
      keys: ["name", "alias"],
      all: true,
    })
    .map((link) => ({
      ...link.obj,
      score: link.score,
    }))
    .sort((a, b) => b.score - a.score)
    .map((link, index) => ({
      ...link,
      rank: index,
      isSelected: link.score === 0 && highlightedLink < 0,
    }))
}

function filterSections(query, sections = [], links = []) {
  return query
    ? [{ title: "Links", color: "violet", maxLinks: DEFAULTS.maxSearchResults, links }]
    : sections.map((section) => ({
        ...DEFAULTS.section,
        ...section,
        links: groupBy(links, "section")[section.title],
      }))
}

export default List
