/**
 * Created by haakonkaurel on 10/05/15.
 */

$(document).ready(function() {
    $("#searchbox").on('keyup change', function() {
        var searchTerm = $(this).val();
        var elements = $("p, h1, h2, h3, h4");
        $(".highlight").each(function() {
            var p = $(this).parent();
            var text = p.text();
            $(this).remove();
            p.text(text);
        });
        if(!searchTerm) {
            return;
        }
        elements.highlightText(searchTerm);
    });
});

