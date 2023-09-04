var studentArr = [];
addStudent=()=>{
  if (studentName.value != "" && studentScore.value != "") {
var  studentObj ={
  nameOfStudent :studentName.value,
  ScoreOfStudent  :studentScore.value,
}
studentArr.push(studentObj)
localStorage.setItem("item", JSON.stringify(studentArr))
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
editStudent=()=> {
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
 deleteFirstItem=()=> {
  studentArr.shift();
  displayStudents();
}
 deleteLastItem=()=> {
  studentArr.pop();
  displayStudents();
}
 deleteSpecificItem=()=>{
  var startingIndex = Number(prompt("Enter a starting position"));
  var numberOfItems = Number(prompt("Enter number of items to delete"));
  studentArr.splice(startingIndex - 1, numberOfItems);
  // console.log( studentArr);
  displayStudents();
}
//  addStart(=) {
//   var item = prompt("Enter item you want to add");
//   // console.log(item2);
//   studentArr.unshift(item);
//   displayStudents();
// }
 deleteAll=()=> {
  var confirmation = confirm("Are you sure you want to delete all?");
  if (confirmation == true) {
    studentArr.splice(0, studentArr.length);
    displayStudents();
  } else {
    displayStudents();
  }
}
 displayStudents=()=> {
  document.getElementById("noStudentRegistered").style.display = "none";
    let grade = Math.ceil(studentScore.value)
    if (grade  >=0 && grade <40) {
      grade1.innerHTML = Fail
      
    }
  studentTable.innerHTML = `
        <tr>
        <th>S/N</th>
        <th>Students</th>
        <th>Score%</th>
        <th id="grade1">Grade</th>
        </tr>
        `;
  for (let i = 0; i < studentArr.length; i++) {
    //    console.log(i);
    studentTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${studentArr[i].nameOfStudent}</td>
        <td>${studentArr[i].ScoreOfStudent}</td>
        <td>
          <button class="btn btn-warning" onclick="editOne()">Edit</button>
          <button class="btn btn-danger" onclick="deleteOne(${i})">Delete</button>
        <td>
        </tr>
        `;
  }
}
 deleteOne=(index)=> {
  console.log(`${index}`);
  studentArr.splice(index,1)
  displayStudents()
  
}