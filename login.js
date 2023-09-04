var studentArr = [];

function addStudent() {
  if (firstName.value != "" && firstName.value != ""  && studentEmail.value != "" && phoneNumber.value != "") {
var  studentObj ={
  firstNameNew :firstName.value,
  lastNameNew :lastName.value,
  emailNew  :studentEmail.value,
  phoneNo:      phoneNumber.value,
}
studentArr.push(studentObj)
    firstName.value = "";
    lastName.value = "";
    studentEmail.value = "";
    phoneNumber.value = "";
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
  var newfirstName = editedFirstName.value;
  var newLastName = editedLastName.value;
  if (editedIndex.value != "" && editedFirstName.value != "" && editedLastName.value != "") {
    if (studentArr.length > newIndex - 1) {
      // console.log(editedIndex, editedValue);
      studentArr.splice(newIndex - 1, 1, 1, newfirstName,;.;p-;   newLastName);
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
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Actions</th>
        </tr>
        `;
  for (let i = 0; i < studentArr.length; i++) {
    //    console.log(i);
    studentTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${studentArr[i].firstNameNew}</td>
        <td>${studentArr[i]. lastNameNew }</td>
        <td>${studentArr[i].emailNew }</td>
        <td>${studentArr[i].phoneNo}</td>
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