<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://www.parsecdn.com/js/parse-1.4.2.min.js"></script>

jQuery(document).ready(function() {

    Parse.$ = jQuery;
    Parse.initialize("...", "...");

    $('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }

        // do redirect
        //window.location.replace("Sign_In.html");
        // or
        window.location.href = "/Sign_In.html";
    });
});