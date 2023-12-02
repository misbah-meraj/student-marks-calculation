alert("Please Enter Your Subjects Marks")

var math = prompt("Enter Your Math Marks");
var urdu = prompt("Enter Your Urdu Marks");
var eng = prompt("Enter Your English Marks");
var sci = prompt("Enter Your Science Marks");
var comp = prompt("Enter Your Computer Marks");

console.log(math, urdu, eng, sci, comp);

math = +math;
urdu = +urdu;
eng = +eng;
sci = +sci;
comp = +comp; 

// Calculate total marks
var totalMarks = math + urdu + eng + sci + comp;

// Calculate percentage
var percentage = (totalMarks / (5 * 100)) * 100;

console.log(percentage + "%")

alert(" Total Marks : " + totalMarks + " Total Percentage : " + percentage + "%")
