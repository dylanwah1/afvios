$('#apiInsta').on('pageinit', function () {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/media/popular?client_id=262ea82d643b4fd49d5d6ec622e02c5a",
        success: function(data) {
            for (var i = 0; i < 10; i++) {
                $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
            }
        }
    });
});