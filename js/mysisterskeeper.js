$(document).on("pagecreate", "#askq",  function(event){
    
    $('#formAskQ').submit(function (e) {
    
        //cache the form element for use in this function
        var $this = $(this);
    
        //prevent the default submission of the form
        e.preventDefault();
    
        $.mobile.loading( "show", {
            text: "",
            textVisible: true,
            textonly: false,
            theme: "b",
            html: "<h3>Sending...</h3><p>Sending your question...</p>"
        });        
        var formPost;
        formPost = $this.serialize();
        $.ajax({
            type: "POST",
            url: "http://imaging.murraycox.com/ajax/sendquestion.php",
            data: formPost,
            dataType: "json",

            success: function(data){
                //if(data.status === 'success'){$("#myForm table").hide();}
                //Check status of the return?
                $.mobile.loading( "show", {
                    text: "",
                    textVisible: true,
                    textonly: false,
                    theme: "b",
                    html: "<h3>Sent!</h3><p>Thanks for your question! We'll let you know when we add it to the app.</p>"
                });
                setTimeout(function(){ $.mobile.loading( "hide" ); }, 5000);                
            },
            error: function(){
                $.mobile.loading( "show", {
                            text: "",
                            textVisible: true,
                            textonly: false,
                            theme: "b",
                            html: "<h3>Error!</h3><p>There was a problem sending your question. Please try again later...</p>"
                        });
                setTimeout(function(){ $.mobile.loading( "hide" ); }, 5000);
            }
        });
    });
});

$(document).on("pagecreate", "#gallery",  function(event){
    $( '.swipebox' ).swipebox();
});

$(function(){
	$( "[data-role='footer']" ).toolbar({ theme: "a" });
});

// Update the contents of the toolbars
$( document ).on( "pageshow", "[data-role='page']", function() {
    // Each of thepages has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Home">
    var current = $( this ).jqmData( "title" );
    // Remove active class from nav buttons
    $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    // Add active class to current nav button
    $( "[data-role='navbar'] a" ).each(function() {
        if ( $( this ).text() === current ) {
            $( this ).addClass( "ui-btn-active" );
        }
    });
});

$(document).on('mobileinit', function () {
    $.mobile.pushStateEnabled = false;
});


/* The splash screen auto-hide is disabled, so we give it a couple of seconds before hiding it */
document.addEventListener("deviceready", function(e) {
	window.setTimeout(function() {
		navigator.splashscreen.hide();
	},2000);
			
}, "false");

