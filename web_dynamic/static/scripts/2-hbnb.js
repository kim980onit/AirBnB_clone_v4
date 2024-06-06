
$(document).ready(function() {
    var checkedAmenities = [];
    const checkboxSelector = '.amenities .popover input[type="checkbox"]';
    $(checkboxSelector).change(function() {
        var id = $(this).data('id')
        var name = $(this).data('name')

        if ($(this).is(':checked')) {
            checkedAmenities.push(name);
        } else {
            var index = checkedAmenities.indexOf(name);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        $('.amenities h4').text(checkedAmenities.join(', '));
    });
});



$.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    var apiStatus = data.status;
    var apiStatusDiv = $('#api_status');

    if (apiStatus === 'OK') {
        apiStatusDiv.addClass('available');
    } else {
        apiStatusDiv.removeClass('available');
    }
})
