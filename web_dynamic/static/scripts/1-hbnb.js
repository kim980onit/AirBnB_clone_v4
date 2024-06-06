
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
