
// // Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCyBbq8KjVhoJ20-sqifod7XbefRNXBNcw",
//     authDomain: "contactform-3bd7a.firebaseapp.com",
//     databaseURL: "https://contactform-3bd7a.firebaseio.com",
//     projectId: "contactform-3bd7a",
//     storageBucket: "contactform-3bd7a.appspot.com",
//     messagingSenderId: "876985572212",
//     appId: "1:876985572212:web:97ba17b207e672ce"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   // Reference messages collection
//   var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e) {
//     e.preventDefault();

//     // Get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var company = getInputVal('company');
//     var phone = getInputVal('phone');
//     var message = getInputVal('message');

//     // console.log(name, email, company, phone, message);
//     saveMessage(name, email, company, phone, message);
// }

// // Function tog et form values
// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message) {
//     var newMessageRef = messagesRef.push();
//         newMessageRef.set({
//         name: name,
//         company: company,
//         email: email,
//         phone: phone,
//         message: message
//     });
// }