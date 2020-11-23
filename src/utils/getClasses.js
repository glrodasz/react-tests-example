const getClasses = (color) =>
  `mt-2 relative bg-${color}-500 text-white py-4 px-10 rounded text-2xl font-bold overflow-visible`;

export default getClasses;

export const fakePromise = (x) => {
  if (x === 'a') {
    return Promise.resolve(10)
  }

  return Promise.resolve(5)
}
