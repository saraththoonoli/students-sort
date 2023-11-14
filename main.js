
// student details
let students = [
    { name: "sarath", age: 25, department: "Computer Science", totalMarks: 85 },
    { name: "mili", age: 25, department: "Cevil", totalMarks: 95 },
    { name: "jinas", age: 26, department: "B.com", totalMarks: 80 },
    { name: "akshaya", age: 28, department: "M.com", totalMarks: 75 },
    { name: "sruthi", age: 24, department: "B-tech", totalMarks: 92 },
];

function displayStudents(studentArray) {
    const studentTable = document.getElementById("studentData");
    studentTable.innerHTML = ''; // Clear previous data

    const rowsHTML = studentArray.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        </tr>
    `).join('');

    studentTable.innerHTML = rowsHTML;
}

// Display students details
displayStudents(students);



// To add a new students
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);
    const department = document.getElementById("departmentInput").value;
    const totalMarks = parseInt(document.getElementById("marksInput").value);

    // Add the new student to the array
    students.push({ name, age, department, totalMarks });

    // Display updated list
    displayStudents(students);

    // Clear form inputs
    document.getElementById("nameInput").value = '';
    document.getElementById("ageInput").value = '';
    document.getElementById("departmentInput").value = '';
    document.getElementById("marksInput").value = '';
});

// sort array
document.getElementById("sortField").addEventListener("change", function () {
    let sortBy = this.value;
    students.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    displayStudents(students);
});



// search for the table details
document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        Object.values(student).some(value =>
            String(value).toLowerCase().includes(searchTerm)
        )
    );
    displayStudents(filteredStudents);
});

// serach with marks
function filterStudents() {
    const marksFilterValue = parseInt(document.getElementById("marksFilter").value);
    const filteredStudents = students.filter(student => student.totalMarks > marksFilterValue);
    displayStudents(filteredStudents);
}

