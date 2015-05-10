/**
 * Created by haakonkaurel on 10/05/15.
 */

$(document).ready(function() {
    $("#searchbox").on('keyup change', function() {
        var searchTerm = $(this).val();
        var elements = $("p, h1, h2, h3, h4");
        elements.highlightText(searchTerm);
        console.log(searchTerm);
    })
});

