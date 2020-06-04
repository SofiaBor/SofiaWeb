
$('#form').on('submit',function(e){
	workers_div = $('.workers');
	$.ajax({
	  type: "GET",
	  url: "http://dummy.restapiexample.com/api/v1/employees",
	  success: function(data){  
		  
		  if(data.status == 'success'){
			  data.data.forEach(function(worker){
				str_to_append = '<div class="worker">';
				str_to_append = str_to_append + '<span class="name">'+ worker.employee_name +'</span>';
				str_to_append = str_to_append + '<span class="age">'+ worker.employee_age +'</span>';
				str_to_append = str_to_append + '<span class="salary">'+ worker.employee_salary +'</span>';
				str_to_append = str_to_append +'</div>';
				
				workers_div.append(str_to_append);
				
			  });
		  }
		  
		},
	  dataType: "json",
	  contentType : "application/json"
	});	
	
	return false;
}
);
