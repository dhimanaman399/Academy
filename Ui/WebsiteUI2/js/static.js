$(document).ready(function () {
    $(".ViewProfile").click(function () {
        $(".headprofile").slideToggle();
    });
    $(".cntreptxt").mouseover(function () {
        $(".headCntPanel").show();
    });
    $(".cntreptxt").mouseout(function () {
        $(".headCntPanel").hide();
    });
    $(".menuBar").click(function () {
        $(".ganavPanel").slideToggle();
    });
    $(".profile_mob").click(function () {
        $(".headprofile").slideToggle();
    });
    $(".contcatResplnk").click(function () {
        $(".headCntPanel,.fadebg").show();
    });
    $(".close").click(function () {
        $(".headCntPanel,.fadebg").hide();
    });
    /* input focus_effect */
    $(".inputFocus").on('input', function () {
        if ($(this).val() == '' || $(this).val() == undefined) {
            $(this).removeClass("validate");

        }
        else {
            $(this).addClass("validate");
        }
    });

});