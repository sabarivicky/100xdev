const people = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const grouped = people.reduce((acc, { city, name }) => {
//   const { city, name } = person;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(name);
  return acc;
}, {});

console.log(grouped);