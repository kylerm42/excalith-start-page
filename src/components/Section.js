import Link from "@/components/Link"

const Section = ({ section, links }) => {
  section = {
    align: "left",
    maxLinks: 5,
    ...section,
  }

  console.log("section", links)

  return (
    <div className={`mb-4 align-${section.align}`}>
      <h2 className={`text-title font-bold mt-0 mb-2 cursor-default text-${section.color}`}>
        {section.title}
      </h2>

      {links?.slice(0, section.maxLinks).map((link, index) => {
        {
          return <Link className="font-normal" key={index} linkData={link} />
        }
      })}
    </div>
  )
}

export default Section
