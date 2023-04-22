import Link from "@/components/Link"

const Section = ({ section }) => {
  return (
    <div className={`mb-4 align-${section.align}`}>
      <h2 className={`text-title font-bold mt-0 mb-2 cursor-default text-${section.color}`}>
        {section.title}
      </h2>
      <ul>
        {section.links?.slice(0, section.maxLinks).map((link, index) => {
          {
            return <Link className="font-normal" key={index} linkData={link} />
          }
        })}
      </ul>
    </div>
  )
}

export default Section
