import { isURL } from "@/utils/isURL"
import { publish } from "@/utils/event"
import { some } from "lodash"

const registeredCommands = ["list", "help", "fetch", "config"]

export function runCommand(command, settings, links, highlightedLink) {
  const cmd_split = command.split(" ")

  if (highlightedLink >= 0) {
    openLink(links[highlightedLink])
  } else if (registeredCommands.includes(cmd_split[0])) {
    publish("command", cmd_split)
  } else if (isURL(command)) {
    openLink({ url: "https://" + command, target: settings.urlLaunch.target })
  } else if (links.map((l) => l.alias).includes(command)) {
    const link = links.find((link) => link.alias === command)
    openLink(link)
  } else if (links[0]?.score === 0) {
    openLink(links[0])
  } else if (some(settings.search.engines, (engine) => command.startsWith(`${engine.alias} `))) {
    const engine = settings.search.engines.find((e) => command.startsWith(`${e.alias} `))
    const query = command.replace(`${engine.alias} `, "")

    executeSearch(query, engine)
  } else {
    console.log("searching...?")
    executeSearch(
      command,
      settings.search.engines.find((e) => e.default)
    )
  }
}

function executeSearch(query, engine) {
  openLink({ url: engine.url.replace("{}", query), target: engine.target || "_self" })
}

function openLink(link) {
  if (link.url) {
    window.open(link.url, link.target || "_self", "noopener noreferrer")
  } else if (link.urls) {
    link.urls.forEach((url, index, urls) =>
      window.open(url, index === urls.length - 1 ? "_self" : "_blank", "noopener noreferrer")
    )
  }
}
