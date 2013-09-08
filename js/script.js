$(document).ready(function() {
	$('#submit').click(function() {
		var userData = new Object();
		userData.flname = $('#fname').val().capitalize() + " " + $('#lname').val().capitalize();
		userData.email = $('#uniqname').val() + "@umich.edu";;
		userData.year = $('#year').val();
		userData.major = $('#major').val();

		alert(userData.flname + userData.email + userData.major + userData.year);

	})
});