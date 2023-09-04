var studentArr = [];

function addStudent() {
  if (FirstName.value != "" && lastName && studentEmail.value != "" && phoneNumber != "" ) {
var  studentObj ={
  Firstname :FirstName.value ,
  lastName:lastName.value,
  emailno:studentEmail.value,
}
    studentName.value = "";
    document.getElementById("showEmptyErrorMessage").style.display = "none";
    document.getElementById("allButtons").style.display = "block";
    displayStudents();
    // console.log(studentArr);
  } else {
    document.getElementById("showEmptyErrorMessage").style.display = "block";
    console.log("You dey whine");
  }
}
function editStudent() {
  var newIndex = editedIndex.value;
  var newStudent = editedDetails.value;
  if (editedIndex.value != "" && editedDetails.value != "") {
    if (studentArr.length > newIndex - 1) {
      // console.log(editedIndex, editedValue);
      studentArr.splice(newIndex - 1, 1, newStudent);
      displayStudents();
      // editedNewIndex.value = ""
      // editedNewValue.value = ""
    } // } else {
    //   alert(`index is only ${studentArr.length} in number `);
    // }
  } else {
    getElementById("showErrorMessage").style.display = "block";
    displayStudents();
  }
}
function deleteFirstItem() {
  studentArr.shift();
  displayStudents();
}
function deleteLastItem() {
  studentArr.pop();
  displayStudents();
}
function deleteSpecificItem() {
  var startingIndex = Number(prompt("Enter a starting position"));
  var numberOfItems = Number(prompt("Enter number of items to delete"));
  studentArr.splice(startingIndex - 1, numberOfItems);
  // console.log( studentArr);
  displayStudents();
}
function addStart() {
  var item = prompt("Enter item you want to add");
  // console.log(item2);
  studentArr.unshift(item);
  displayStudents();
}
function deleteAll() {
  var confirmation = confirm("Are you sure you want to delete all?");
  if (confirmation == true) {
    studentArr.splice(0, studentArr.length);
    displayStudents();
  } else {
    displayStudents();
  }
}
function displayStudents() {
  document.getElementById("noStudentRegistered").style.display = "none";
  studentTable.innerHTML = `
        <tr>
        <th>S/N</th>
        <th>Students</th>
        <th>Email</th>
        <th>Matric Number</th>
        <th>Actions</th>
        </tr>
        `;
  for (let i = 0; i < studentArr.length; i++) {
    //    console.log(i);
    studentTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${studentArr[i].nameOfStudent}</td>
        <td>${studentArr[i].emailOfStudent}</td>
        <td>${studentArr[i].matricNo}</td>
        <td>
          <button class="btn btn-warning" onclick="editOne()">Edit</button>
          <button class="btn btn-danger" onclick="deleteOne(${i})">Delete</button>
        <td>
        </tr>
        `;
  }
}
function deleteOne(index) {
  console.log(`${index}`);
  studentArr.splice(index,1)
  displayStudents()
  
}