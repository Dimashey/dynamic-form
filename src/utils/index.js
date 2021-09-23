export const removeItemFromArray = (arr, index) => {
  const shallowCopy = [...arr];
  shallowCopy.splice(index, 1);

  return shallowCopy;
};

export const appendItemToArray = (arr, index, value) => {
  const shallowCopy = [...arr];
  const appendedIndex = index + 1;
  shallowCopy.splice(appendedIndex, 0, value);

  return shallowCopy;
};
