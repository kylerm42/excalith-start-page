import { isURL } from "@/utils/isURL"
import { openLink } from "@/utils/openLink"
import { publish } from "@/utils/event"

const registeredCommands = ["list", "help", "fetch", "config"]

export function runCommand(command, settings, links, highlightedLink) {
  const cmd_split = command.split(" ")

  if (highlightedLink >= 0) {
    openLink(links[highlightedLink].url, links[highlightedLink].target)
  } else if (registeredCommands.includes(cmd_split[0])) {
    publish("command", cmd_split)
  } else if (isURL(command)) {
    openLink("https://" + command, settings.urlLaunch.target)
  } else if (links.map((l) => l.alias).includes(command)) {
    const link = links.find((link) => link.alias === command)
    openLink(link.url, link.target)
  } else if (
    settings.search.engines.filter((shortcut) => command.startsWith(`${shortcut.alias} `)).length
  ) {
    const searchTest = `${e.alias} `
    const engine = settings.search.engines.find((e) => command.startsWith(searchTest))
    const query = command.replace(searchTest, "")

    executeSearch(query, engine)
  } else {
    executeSearch(
      command,
      settings.search.engines.find((e) => e.default)
    )
  }
}

function executeSearch(query, engine) {
  openLink(url.replace("{}", query), engine.target || settings.search.target)
}
