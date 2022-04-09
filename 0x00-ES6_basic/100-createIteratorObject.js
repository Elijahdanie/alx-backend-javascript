export default function createIteratorObject(report) {
  let allEmployers = [];
  Object.keys(report.allEmployees).forEach((key) => {
    allEmployers = allEmployers.concat(report.allEmployees[key]);
  });
  return allEmployers;
}
