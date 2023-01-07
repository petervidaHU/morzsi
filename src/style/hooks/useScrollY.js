import { useEffect, useState, useCallback } from "react"

function useScrollY() {
  const [isTop, setIsTop] = useState(false)
  const [prevY, setPrevY] = useState(0)
  const [isDown, setIsDown] = useState(true)

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    setIsTop(y < 10 ? true : false)
    setIsDown(prevY > y ? true : false)
    setPrevY(y)
  }, [prevY])

  const debounce = useCallback((func, wait = 5, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isTop, isDown }
}

export default useScrollY
