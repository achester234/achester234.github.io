console.log("Connected");

// Question 1 
console.log("Question 1:");
const employees = [{
        name: "Sam", 
        department: "Tech", 
        title: "Manager", 
        salary: 40000, 
        raise_elgible: true,
    },
    {
        name: "Mary", 
        department: "Finance", 
        title: "Trainee", 
        salary: 18500, 
        raise_elgible: true
    },
    {
        name: "Bill", 
        department: "HR", 
        title: "Executive", 
        salary: 21200, 
        raise_elgible: false
    }];

console.log(JSON.stringify(employees));

// Question 2
console.log("Question 2:");
const company = {
        company_name: "Tech Stars",
        website: "www.techstars.site",
        employees: employees
}

console.log(JSON.stringify(company));

// Question 3
console.log("Question 3:");
employees.push(
    {
        name: "Anna", 
        department: "Tech", 
        title: "Executive", 
        salary: 25600, 
        raise_elgible: false
    }
)

console.log(JSON.stringify(employees));
console.log(JSON.stringify(company));

// Question 4
console.log("Question 4:");

let total_salary = 0

for (let i = 0; i < company["employees"].length; i++) {
    total_salary += company["employees"][i]["salary"] 
};
console.log(total_salary);


// Question 5
console.log("Question 5:");

for (let i = 0; i < company["employees"].length; i++) {
    const employee = company["employees"][i];
    if (employee["raise_elgible"] == true) {
        employee["salary"] = employee["salary"] * 1.1
        employee["raise_elgible"] = false
    } 
}
console.log(JSON.stringify(company));

// Question 6
console.log("Question 6:");
for (let i = 0; i < company["employees"].length; i++) {
    const employee = company["employees"][i];
    employee["wfh"] = ['Anna', 'Sam'].includes(employee["name"])
}
console.log(JSON.stringify(company));