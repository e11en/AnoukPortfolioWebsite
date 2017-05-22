function sendEmail() {
	var submitButton = $("#submit-btn");

	if(validate()) {
		submitButton.attr("disabled", true);
		submitButton.val("Sending..");

		emailjs.send("default_service","templat",{name: "James", notes: "Check this out!"}) //e_sGXgNCyQ
		.then(function(response) {
		   //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		   submitButton.addClass("btn-success");
		   submitButton.val("Message send!");
		   submitButton.removeAttr("disabled");
		   
		   setTimeout( function()  {
					resetForm();
			}, 5000);
		}, function(err) {
		   //console.log("FAILED. error=", err);
		   resetForm();
		   $('#message').val("Something went wrong please contact the webmaster");
		   submitButton.val("Error");
		});
	}
}

function validate() {
	var valid = true;

	valid = checkInput("name");
	valid = checkInput("email");
	valid = checkInput("message");

	return valid;
}

function checkInput(input){
	if($('#'+input).val() == "")
	{
		$('#'+input).parent().addClass('has-error');
		return false;
	}
	return true;
}

function resetForm() {
	// Reset button
	var submitButton = $("#submit-btn");
	submitButton.val("Send");
	submitButton.removeClass("btn-success");

	// Reset input fields
	$('#name').val("");
	$('#email').val("");
	$('#message').val("");
}