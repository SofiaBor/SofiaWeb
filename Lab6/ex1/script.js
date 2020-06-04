


$('#form').on('submit',function(e){
	var email = $('#email');
	var name = $('#name_id');
	var message = $('#message');
	$('.validation_error').remove();

	if(email.val() == ""){		
		email.parent().after("<span class='validation_error'>Порожній email!</span>");
	}
	
	if(name.val() == ""){		
		name.parent().after("<span class='validation_error'>Порожнє ім'я!</span>");
	}
	
	if(message.val() == ""){		
		message.parent().after("<span class='validation_error'>Порожнє повідомлення!</span>");
	}
	
	if(email.val() == "" || name.val() == "" || message.val() == ""){return false;}	
	
	var formData = JSON.stringify($(this).serializeArray());
	console.log(formData);
	$.ajax({
	  type: "POST",
	  url: "https://www.google.com",
	  data: formData,
	  success: function(){},
	  dataType: "json",
	  contentType : "application/json"
	});	
	return false;
}
);
