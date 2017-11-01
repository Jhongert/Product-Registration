$(document).ready(function(){
	// datatable config
    $('table').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": [3] }
          ],
        order: [[ 0, "asc" ]],
        info: false,
        paging: false,
    });

	$('#submit').on('click', function(e){
		e.preventDefault();
		
		if(validate())
		{
			var data = {
				name: $('#name').val().trim(),
				department: $('#department').val(),
				price: $('#price').val().trim(),
				stock: $('#stock').val().trim(),
				active: $('#active').is(":checked")
			}
			$.post('/product/create', data, function(res){
				console.log(res);
			})
		} 
	});

    
         
    // Validate user's input         
    function validate(){

    	 // Remove all error messages and error classes
        $('span.help-block').remove();
        $('.has-error').removeClass('has-error');

        // Validate the name
    	var name = $('#name');
    	if(name.val().trim() === "")
    	{
    		displayError(name, 'Enter the name of the product.');
    		return false;
    	}

    	// Validate the department
    	var department = $('#department');
    	if(department.val().trim() === "")
    	{
    		displayError(department, 'Enter the department.');
    		return false;
    	}

    	// Validate the price
    	var price = $('#price');
    	if(price.val().trim() != "" && !/^\d+[\.]?\d+$/.test(price.val().trim()))
    	{
    		displayError(price, 'Price must be a number 0 or greater.');
    		return false;
    	}

    	// Validate the stock for 0 or a whole number greater than 0
    	var stock = $('#stock');
    	if(stock.val().trim() != "" && !/^\d+$/.test(stock.val().trim()))
    	{
    		displayError(stock, 'Stock must be 0 or a whole number greater than 0.');
    		return false;
    	}
    	return true;
    }            

    // This function is called by validate to display an error message
	// if the input is invalid
	function displayError(el, message){
		// Create a span element with class text-danger
		var $span = $('<span class="help-block">');

		// Add the message passed as argument to the new span
	    $span.html('<strong>' + message + '<strong>');

	    //Append the span to element that is not valid
	    el.after($span);
	   
	    // Set the focus 
	    el.focus();

	    // Add class "has-error to the element's parent"
	    el.parent().addClass('has-error');
	}

})