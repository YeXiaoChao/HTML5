$(document).ready(function(){
    var exampleInfo = $(".example_info");
    var index;
    for (var i=0;i<exampleInfo.length;i++){
        index = i%15;
        if (index === 0) {
            $(exampleInfo[i]).addClass("tz_blue");
        } else if (index === 1) {
            $(exampleInfo[i]).addClass("tz_red");
        } else if (index === 2) {
            $(exampleInfo[i]).addClass("tz_gray");
        } else if (index === 3) {
            $(exampleInfo[i]).addClass("tz_org");
        } else if (index === 4) {
            $(exampleInfo[i]).addClass("tz_lv");
        } else if (index === 5) {
            $(exampleInfo[i]).addClass("tz_qing");
        } else if (index === 6) {
            $(exampleInfo[i]).addClass("tz_yellow");
        } else if (index === 7) {
            $(exampleInfo[i]).addClass("tz_bluees");
        } else if (index === 8) {
            $(exampleInfo[i]).addClass("tz_redd");
        } else if (index === 9) {
            $(exampleInfo[i]).addClass("tz_grayy");
        } else if (index === 10) {
            $(exampleInfo[i]).addClass("tz_orgg");
        } else if (index === 11) {
            $(exampleInfo[i]).addClass("tz_lvv");
        } else if (index === 12) {
            $(exampleInfo[i]).addClass("tz_qingg");
        } else if (index === 13) {
            $(exampleInfo[i]).addClass("tz_yelloww");
        } else if (index === 14) {
            $(exampleInfo[i]).addClass("tz_bluee");
        }
    }
});