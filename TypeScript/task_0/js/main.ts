
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "Patate", lastName: "Douce", age: 40, location: "Marseille" };
const student2: Student = { firstName: "Pop", lastName: "Corn", age:44, location: "Pau" };
const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
