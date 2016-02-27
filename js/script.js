$(document).ready(function(){
	
	var el = $('#nav_list_second li a');//����� ��������� ���� � ul � ������ id
	$('#nav_list_second li:has("ul")').append('<span></span>');
	el.click(function() {
		var checkedElement = $(this).next(),
			visibleElement = $('#nav_list_second ul:visible');
			
		visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');		
		if((checkedElement.is('ul')) && (!checkedElement.is(':visible'))) {
			checkedElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
			return false;
        }	
		if((checkedElement.is('ul')) && (checkedElement.is(':visible'))) {
			return false;
		}
	});	
});




