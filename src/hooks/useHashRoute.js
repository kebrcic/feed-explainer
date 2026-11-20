import { useEffect, useState } from 'react'

// Three views, addressed by hash so they work as plain links on GitHub Pages.
const routes = {
  home: 'Does your feed know why you clicked?',
  sources: 'Where the numbers come from',
  'ai-use': 'How AI was used',
}

function current() {
  const name = (window.location.hash || '').replace('#', '')
  return routes[name] ? name : 'home'
}

export default function useHashRoute() {
  const [route, setRoute] = useState(current)

  useEffect(() => {
    const onChange = () => {
      setRoute(current())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    document.title = routes[route]
  }, [route])

  return route
}
