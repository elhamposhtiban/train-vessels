


 const firebaseConfig = {
    apiKey: "AIzaSyB8R0VWT1oesDwMBNdgTaVNHaBvqFFwMFM",
    authDomain: "train-vessels.firebaseapp.com",
    databaseURL: "https://train-vessels.firebaseio.com",
    projectId: "train-vessels",
    storageBucket: "train-vessels.appspot.com",
    messagingSenderId: "708232030880",
    appId: "1:708232030880:web:a40b6c70c66ad5ba3f37c5",
    measurementId: "G-G89E4JE211"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  
  //creating variables 
  const database = firebase.database();

  //generating onclick here inorder to submit what we have in inputs 

  $("#submit-button").on("click", function(event){
      event.preventDefault();

     const trainName = $("#input-train").val().trim();
     const destination = $("#input-destination").val().trim();
     const firstCome = $("#input-first").val().trim();
    //  const firstCome = moment( $("#input-first").val().trim(), "HH:MM").format("hour");
     const frequency = $("#input-frequency").val().trim();

     const newRow = {
         trainName,
         destination,
         firstCome,
         frequency,
     }

     database.ref().push(newRow);
     
     // set the value empty for inputs
    $("#input-train").va("");
    $("#input-destination").val("");
    $("#input-first").val("");
    $("#input-frequency").val("");

  })

