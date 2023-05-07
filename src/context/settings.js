import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "startpage.config"

const SETTINGS_KEY = "settings"

export const SettingsContext = createContext({
  settings: undefined,
  setSettings: (settings) => {},
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState()

  useEffect(() => {
    const settings = defaultConfig.usLocalStorage && localStorage.getItem(SETTINGS_KEY)
    if (settings && settings !== "undefined") {
      try {
        const jsonSettings = JSON.parse(settings)
        setSettings(prepareConfig(jsonSettings))
      } catch (e) {
        setSettings(prepareConfig(defaultConfig))
        console.log("Error parsing settings, resetting to default")
      }
    } else {
      setSettings(prepareConfig(defaultConfig))
    }
  }, [])

  useEffect(() => {
    if (settings && settings !== "undefined") {
      setLocalStorage(SETTINGS_KEY, JSON.stringify(settings))
    }
  }, [settings])

  const updateSettings = (newSettings) => {
    setSettings(prepareConfig(newSettings))
  }

  const resetSettings = () => {
    setSettings(prepareConfig(defaultConfig))
    setLocalStorage(SETTINGS_KEY, JSON.stringify(defaultConfig))
  }

  const setLocalStorage = (key, value) => {
    if (defaultConfig.usLocalStorage) {
      localStorage.setItem(key, value)
    }
  }

  const prepareConfig = (settings) => {
    const links = settings.sections.flatMap((section) => {
      return section.links.map((link) => ({
        ...link,
        section: section.title,
      }))
    })
    const defaults = {
      MAX_SEARCH_RESULTS: 10,
      SECTION_DEFAULTS: {
        maxLinks: 5,
        align: "left",
      },
    }

    return { ...settings, ...defaults, links }
  }

  return (
    <SettingsContext.Provider value={{ settings, setSettings: updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
