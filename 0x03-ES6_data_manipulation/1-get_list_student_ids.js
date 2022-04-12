export default function getListStudentIds(...args) {
  if (args && Array.isArray(args)) {
    return args.map((id) => id);
  }
  return [];
}
