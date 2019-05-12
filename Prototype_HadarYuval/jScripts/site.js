//$(document).ready(function () {
//    $(window).on("orientationchange load resize", function () {
//        console.log("changed");
//        var width = $(document).width();
//        if (width < 992) {
//            $("#changeable-link").attr("href", "chatPage.html");

//        }
//        else if (width > 992) {
//            $("#changeable-link").attr("href", "#chatWithH2");
//        }
//    });
//});

   
$(document).ready(function () {
    //כדי למנוע אנימציה של תפריט ניווט - כרגע לא עובד!!!!!!!!!!!
    //$('.collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
    //    e.preventDefault();
    //});

    //$('[data-toggle="collapse"]').on('click', function (e) {
    //    e.preventDefault();
    //    $($(this).data('target')).toggleClass('in');
    //});

    //כדי לשנות קישור בתפריט ניווט בעת שינוי גודל מסך
    console.log("changed");
    if ($(window).width() < 768) {
        $("#changeable-link").attr("href", "‏‏chatPageContact.html");
    }
    else if (width > 768) {
        $("#changeable-link").attr("href", "#chatWithH2");
    }
});

$(window).resize(function () {
    console.log("changed1");
    if ($(window).width() < 768) {
        $("#changeable-link").attr("href", "‏‏chatPageContact.html");
    }
    else if (width > 768) {
        $("#changeable-link").attr("href", "#chatWithH2");
    }
});
