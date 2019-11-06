


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
  
  //creating variables 
  const database = firebase.database();

$(document).ready(function() {

      //generating onclick here inorder to submit what we have in inputs 

  $("#submit-button").on("click", function(event){
    event.preventDefault();

   const trainName = $("#input-train").val().trim();
   const destination = $("#input-destination").val().trim();
   const firstCome = $("#input-first").val().trim();
  // const firstCome = moment( $("#input-first").val().trim(), "hh:mm").format("hour");
   const frequency = $("#input-frequency").val().trim();

   const newRow = {
       trainName,
       destination,
       firstCome,
       frequency,
   }

   database.ref().push(newRow);
   
   // set the value empty for inputs
  $("#input-train").val("");
  $("#input-destination").val("");
  $("#input-first").val("");
  $("#input-frequency").val("");

})

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val())

 const trainName = childSnapshot.val().trainName;
 const destination = childSnapshot.val().destination;
 const firstCome = childSnapshot.val().firstCome;
 const frequency = childSnapshot.val().frequency;
 console.log(trainName);
 console.log(destination);
 console.log(firstCome);
 console.log(frequency);

  const firstTrain = moment(firstCome, "hh:mm A").subtract(1, "year");
  console.log (firstTrain);

  const currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm A"));

  // finding diffrent time between current time and the time that train is coming 
  const diffTime = moment().diff(moment(firstTrain), "minutes");
  console.log(diffTime);

  // Time apart (remainder)
  const Remainder = diffTime % frequency;
  console.log(Remainder);

  // Minute Until Train
  const minutesToTrain = frequency - Remainder;
  console.log( minutesToTrain);

  // Next Train
  const nextTrain = moment().add(minutesToTrain, "minutes");
  console.log(moment(nextTrain).format("hh:mm A"));

  const newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(moment(nextTrain).format("hh:mm A")),
      $("<td>").text(minutesToTrain),
  );

  $("#train-table").append(newRow);

});
});







