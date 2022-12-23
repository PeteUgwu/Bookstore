export default function processData(object) {
  const newObject = Object.entries(object).map(
    ([key, value]) => Object.assign(value[0], { item_id: key }),
  );
  return newObject;
}
