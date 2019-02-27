export const save = (K, V) => {
  window.localStorage.setItem(K, V)
}

export const get = (K) => {
  return window.localStorage.getItem(K)
}
