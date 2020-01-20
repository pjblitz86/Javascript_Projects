const customers = ["Paul", "John", "Peter"];
const activeCustomers = ["Paul", "John"];

// find difference between arrays - use case for 3rd party package
const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
