(jQuery)(document).ready(function($){

	//скрытие кнопки вверх
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $(".scroll-up").fadeIn(500);
        }
        else {
            $(".scroll-up").fadeOut(500);
        }
    });

	//нажатие кнопки вверх
    $(".scroll-up").click(function() {
        $("body, html").animate({scrollTop: 0}, 400);
    });

	message = getCookie('message');

	// add_popup("m-feed-back-info");

	if (message != undefined && message != ''){
		message = message.replace(/\+/g, ' ');
		open_popup('Уведомление', message);		
		setCookie('message', '', 0);
	}
	
	$(document).on('submit', 'form', function () {
		Data = new Date();
		Year = Data.getFullYear();
		Month = ('0'+(Data.getMonth()+1)).slice(-2);
		Day = ('0' + Data.getDate()).slice(-2);
		currentDate = Year +'-'+ Month +'-'+ Day;
		$(this).append('<input type="hidden" name="date" value="'+ currentDate +'" />');
		return true;
	});

	function setCookie(cname, cvalue, exhour) {
		var d = new Date();
		d.setTime(d.getTime() + (exhour*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires +';path=/';
	}
	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	
	function add_popup (id, title = "", body = "", add_classes = "") {
		(jQuery)('body').append('\
			<div id="'+id+'" class="modal fade" tabindex="-1">\
				<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable '+add_classes+'">\
					<div class="modal-content">\
						<div class="modal-header">\
							<p class="modal-title">'+title+'</p>\
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
						</div>\
						<div class="modal-body">\
						'+body+'\
						</div>\
					</div>\
				</div>\
			</div>\
		');
	}
	
	function open_popup (title, body, add_classes = "", id = "m-feed-back-info", rewrite = true) {
		(jQuery)(document).ready(function($){
			if(rewrite){
				$('#'+id+' .modal-title').html(title);
				$('#'+id+' .modal-body').html(body);
			}
			$('#'+id+' .modal-dialog').addClass(add_classes);
			$('#'+id+'').modal('show');
		});
	}
});
