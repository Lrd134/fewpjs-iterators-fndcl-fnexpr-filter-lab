// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter(name =>{
    return name.toUpperCase() === string.toUpperCase();
  });
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(name => {
    return name.slice(0, string.length).toUpperCase() === string.toUpperCase();
  });
}

const matchName = (drivers, string) => {
  return drivers.filter(obj => {
    return obj.name === string;
  });
}