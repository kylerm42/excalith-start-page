import Link from "@/components/Link"
import * as fuzzysort from "fuzzysort"

const Section = ({ section, filter }) => {
  section = {
    align: "left",
    maxLinks: 5,
    ...section,
  }
  const alignment = section.align || "left"

  const links = fuzzysort.go(filter, section.links, {
    keys: ["name", "alias", "url"],
    limit: section.maxLinks,
    // threshold: -10000,
    all: true,
  })
  console.log(links)
  return (
    <div className={`mb-4 align-${alignment}`}>
      <h2 className={`text-title font-bold mt-0 mb-2 cursor-default text-${section.color}`}>
        {section.title}
      </h2>

      {links.map((link, index) => {
        {
          return <Link className="font-normal" key={index} linkData={link.obj} filter={filter} />
        }
      })}
    </div>
  )
}

export default Section
