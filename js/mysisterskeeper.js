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
