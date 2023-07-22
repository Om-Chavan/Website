const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCQ-_E5IZS9tjNz8dYspksfMWfAurm7dTo",
  authDomain: "contactform-95dc4.firebaseapp.com",
  databaseURL: "https://contactform-95dc4-default-rtdb.firebaseio.com",
  projectId: "contactform-95dc4",
  storageBucket: "contactform-95dc4.appspot.com",
  messagingSenderId: "33292552283",
  appId: "1:33292552283:web:a0cd4cf9053b5d3957977e"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var num = getElementVal("number");
  
    saveMessages(name, emailid, msgContent,num);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form

    setTimeout(() => {

        document.getElementById("contactForm").reset();
    }, 3000);
  }
  
  const saveMessages = (name, emailid, msgContent,num) => {
    var newForm = contactFormDB.push();
  
    newForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      number:num,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };







  var elem = document.getElementById("photo");
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }


  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }


  
  
  
  
  
  if (window.fullscreen) {
    document.getElementById("photo").addEventListener("click", closeFullscreen);
    // it's fullscreen!
  }
  if (window.min){
    document.getElementById("photo").addEventListener("click", openFullscreen);
    // not fs!
  }

