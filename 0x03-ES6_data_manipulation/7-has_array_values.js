export default function hasValuesFromArray(setdata, arraydata) {
  return arraydata.every((element) => setdata.has(element));
}
