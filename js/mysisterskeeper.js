$(document).on("pagecreate", "#askq",  function(event){
    $("#sendQuestion").click(function(){
        $.mobile.loading( "show", {
            text: "",
            textVisible: true,
            textonly: false,
            theme: "b",
            html: "<h3>Sent!</h3><p>Thanks for your question! We'll let you know when we add it to the app.</p>"
        });
        setTimeout(function(){ $.mobile.loading( "hide" ); }, 5000);
    });
});

$(document).on("pagecreate", "#gallery",  function(event){
    alert("here");
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

