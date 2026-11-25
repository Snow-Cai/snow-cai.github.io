import { useLayoutEffect, type MouseEvent } from 'react'
import { sitePath } from './paths'

function isSameTabClick(event: MouseEvent<HTMLAnchorElement>) {
  return !event.defaultPrevented && event.button === 0
    && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
}

export function rememberProjectScroll(event: MouseEvent<HTMLAnchorElement>) {
  if (!isSameTabClick(event)) return

  history.replaceState({ ...history.state, projectListScrollY: window.scrollY }, '')
}

export function useProjectListScroll(restoreHash = false) {
  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const scrollY: unknown = history.state?.projectListScrollY

    if (navigation?.type === 'back_forward' && typeof scrollY === 'number') {
      // Restore after React has rendered the list, even if the browser reloaded it.
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    } else if (restoreHash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
    }
  }, [restoreHash])
}

export function backToProjectList(event: MouseEvent<HTMLAnchorElement>) {
  if (!isSameTabClick(event) || !document.referrer || history.length < 2) return

  const referrer = new URL(document.referrer)
  const pathname = referrer.pathname.replace(/\/+$/, '')
  const fromList = [sitePath(), sitePath('projects/')].some(path => path.replace(/\/+$/, '') === pathname)
  if (referrer.origin !== window.location.origin || !fromList) return

  event.preventDefault()
  history.back()
}
