$(document).ready(function(){
  $("#ping-pong-form").submit(function(event) {
    event.preventDefault();
    var submittedNumber = getsubmittedNumber();

    var generatedSequence = generateSequenceArray(submittedNumber);

     showGeneratedSequence(generatedSequence);

  });


   function getsubmittedNumber(){
       var submittedNumber = $("#ping-pong-num").val();
       return submittedNumber;
   }


   function generateSequenceArray(limit){
     var generatedSequence = [];

     for (var num = 1; num <=limit; num++) {

       if (num % 3 == 0 && num % 5 == 0) {
          generatedSequence.push("pingpong");
         }
          else if(num % 3 == 0){
            generatedSequence.push("ping")
          }
          else if (num % 5==0) {
             generatedSequence.push("pong")
          }
          else{
            generatedSequence.push(num);
          }
     }
     return  generatedSequence;
   }


   function showGeneratedSequence(sequenceArray){
     var ul = "<ul>"
     for (var num = 0; num < sequenceArray.length; num++) {
         ul += "<li>" + sequenceArray[num] + "</li>";
     }
     ul +="</ul>"
      $("#results-div").html(ul);
   }



});
