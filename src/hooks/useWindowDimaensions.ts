import { useState, useEffect } from 'react'

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions on mount
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty dependency array ensures the effect runs only once on mount

  return windowDimensions
}

export default useWindowDimensions
