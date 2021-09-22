export const remove = (arr, i)  => {
  const shallowCopy = [...arr]
  shallowCopy.splice(i, 1)

  return shallowCopy
}

export const append = (arr, i, value) => {
  const shallowCopy = [...arr]
  const index = i + 1
  shallowCopy.splice(index, 0, value)
  return shallowCopy
}
