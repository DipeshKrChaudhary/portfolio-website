
function validateForm() {

				var fnames = document.forms["messageForm"]["Fname"].value;
				var lnames = document.forms["messageForm"]["Lname"].value;
				
				if (fnames == "" || lnames == ""){
					alert("Empty fields found. Please fill the form.");
				}
				else {
					alert("Thank you for the feedback.");
				}




