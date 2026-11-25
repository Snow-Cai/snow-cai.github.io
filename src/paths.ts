const base = import.meta.env.BASE_URL

export function sitePath(path = '') {
  return `${base}${path.replace(/^\/+/, '')}`
}

export function currentPath() {
  const path = window.location.pathname
  if (path === base.slice(0, -1)) return ''
  return path.startsWith(base) ? path.slice(base.length).replace(/\/+$/, '') : path
}
