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
    const settings = localStorage.getItem(SETTINGS_KEY)
    if (settings && settings !== "undefined") {
      try {
        const jsonSettings = JSON.parse(settings)
        const links = jsonSettings.sections.flatMap((section) => ({
          ...section.links,
          section: section.name,
        }))
        setSettings(JSON.parse(settings))
      } catch (e) {
        setSettings(defaultConfig)
        console.log("Error parsing settings, resetting to default")
      }
    } else {
      setSettings(defaultConfig)
    }
  }, [])

  useEffect(() => {
    if (settings && settings !== "undefined") {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    }
  }, [settings])

  const updateSettings = async (newSettings) => {
    await setSettings(newSettings)
  }

  const resetSettings = () => {
    setSettings(defaultConfig)
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultConfig))
  }

  return (
    <SettingsContext.Provider value={{ settings, setSettings: updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
