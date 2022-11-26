import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
var phoneV,nameV,emailV,passwordV;
const db = getDatabase();
  
  // Reference
  // Getting data from Textboxes
  var PhoneBox = document.getElementById("phoneBox");
  var NameBox = document.getElementById("nameBox");
  var EmailBox = document.getElementById("emailBox");
  var PasswordBox = document.getElementById("passBox");
  //insert function-
  function insertData(event) {
    event.preventDefault();
    readFormData();
    if ( phoneV== "" && nameV == ""  && emailV == "" && passwordV=="") {
      alert("Fields can not be blank");
    } else {
      // Code to send the data to Firebase
      set(ref(db, "data/" + phoneV), {
        phoneNo: phoneV,
        name: nameV,
        email:emailV,
        password:passwordV,
        
      })
        .then(() => {
          alert("Data Stored Successfully");
          
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
      clearFormData();
    }
  }
//   read function-
//   function readData(event) {
//     event.preventDefault();
//     readFormData();
  
//     Code to read the data from Firebase
  
//     const dbref = ref(db);
  
//     get(child(dbref, "data/" + phoneV))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           NameBox.value = snapshot.val().name;
          
//           EmailBox.value = snapshot.val().email;
//           PasswordBox.value=snapshot.val().password;
//         } else {
//           alert("No Data Found");
//         }
//       })
//       .catch((error) => {
//         alert("Unsccussful", error);
//       });
//   }
  
  
  
  function readFormData() {
    phoneV = PhoneBox.value;
    nameV = NameBox.value;
    
    emailV = EmailBox.value;
    passwordV=PasswordBox.value;
    console.log(phoneV, nameV,emailV,passwordV);
  }
  function clearFormData() {
    PhoneBox.value = "";
    NameBox.value = "";
    EmailBox.value=""
    PasswordBox.value = "";
  }
  document.querySelectorAll(".btn")[0].onclick = insertData;
//   document.querySelectorAll(".btn")[1].onclick = readData;
  
Footer
