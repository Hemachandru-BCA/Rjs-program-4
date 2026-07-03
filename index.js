// Complete the function using object destructuring.

let studentDetails = [
    {name: "ahalya", dept: "bca", age: 19},
    {name: "hema", dept: "mca", age: 21},
    {name: "chandru", dept:"bcam", age: 20}
];

function getStudentDetails(students) {
  for(const {name,age,dept} of studentDetails){
    console.log(name,age,dept);
  } 
    
}

let result = getStudentDetails(studentDetails);
