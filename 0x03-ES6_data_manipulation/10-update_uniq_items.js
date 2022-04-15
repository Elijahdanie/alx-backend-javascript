export default function updateUniqueItems(args) {
  if (!(args instanceof Map)) {
    throw Error('Cannot process');
  }

  args.forEach((val, key) => {
    if (val === 1) {
      args.set(key, 100);
    }
  });

  return args;
}
