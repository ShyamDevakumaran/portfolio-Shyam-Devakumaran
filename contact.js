//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyAt_rBYc44aJeQRK8d0PDYoz8cGYUd2CgI",
  authDomain: "portfolio-5fcad.firebaseapp.com",
  projectId: "portfolio-5fcad",
  storageBucket: "portfolio-5fcad.appspot.com",
  messagingSenderId: "334580331460",
  appId: "1:334580331460:web:4a62b5bb97a3774a792a91"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("contactData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    fname: firstName,
    email: email,
    message: message
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})