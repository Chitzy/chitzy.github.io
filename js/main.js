var downloadList;

$(document).ready(function() {

    $.ajaxSetup({ cache: false });

    hidedownload();

    $.getJSON('database.json', function(dbdata) {
        new Vue({
            el: '#group-list',
            data: dbdata
        });
    });
});

function showdownload(dldata)
{
    if(!downloadList) {
        downloadList = new Vue({
            el: '#download-list',
            data: dldata
        });
    }
    else {
        Vue.set(downloadList, 'versions', dldata.versions)
    }
    
    $('#group-list').css('display', 'none');
    $('#download-back-button').css('display', 'block');
    $('#download-list').css('display', 'block');
}

function hidedownload()
{
    $('#download-back-button').css('display', 'none');
    $('#download-list').css('display', 'none');
    $('#group-list').css('display', 'block');
}

