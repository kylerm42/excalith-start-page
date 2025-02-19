import React, { useRef, useEffect, useState } from "react"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Search = ({ onQueryChange, onSelectionChange, onCommand }) => {
  const [isFocused, setIsFocused] = useState(false)
  const { settings } = useSettings()
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => inputRef.current.focus(), 0)
  }, [isFocused])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onCommand(inputRef.current.value)
      } else if (event.code === "Escape") {
        inputRef.current.value = ""
        onQueryChange("")
        onSelectionChange("reset")
      } else if (event.shiftKey && event.key === "Tab") {
        event.preventDefault()
        onSelectionChange("decrement")
      } else if (event.key === "Tab") {
        event.preventDefault()
        onSelectionChange("increment")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div id="search" className="flex">
      <Prompt />
      <input
        className={`grow inline-block bg-window-color text-white outline-none appearance-none shadow-none ml-2.5 caret-${settings.prompt.caretColor}`}
        type="text"
        onChange={(e) => {
          onQueryChange(e.target.value.toLowerCase())
        }}
        placeholder={settings.prompt.placeholder}
        autoFocus
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
        ref={inputRef}
      />
    </div>
  )
}

export default Search
