// export const filterNumbers = (array, largerThan) => {
//   return array.filter(number => number <= largerThan)
// }

export const filterNumbers = (array, largerThan) => {
  let newArray = array.filter(number => number > largerThan)
  return newArray
}