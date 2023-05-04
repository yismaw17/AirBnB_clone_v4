#!/usr/bin/node
// Write a JavaScript script (static/scripts/4-hbnb.js):
// Based on 3-hbnb.js
// When the button tag is clicked, a new POST request to places_search should be made with the list of Amenities checked

document.addEvetListener('DOMContentLoaded', (event) => {
    const amenityIDlist = [];
    const amenityDict = {};
    $('input:checkbox').click(function () {
      if ($(this).is(':checked')) {
        amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
        amenityIDlist = Object.keys(amenityDict);
        const vals = Object.values(amenityDict);
        $('DIV.amenities h4').append(vals);
      } else {
        delete amenityDict[$(this). attr('data-id')];
      }
    });
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      success: function (data) {
        if (data.status === 'OK') {
          $('DIV#api_status').addClass('available');
        } else {
          $('DIV#api_status').removeClass('available');
        }
      }
    });
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: '{}',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            const containerDiv = document.geteElementByClass('title_box');
            const placeDivs = containerDiv.getElementByTagName('DIV');
            for (let i = 0; i < placeDivs.length; i++) {
                place = '<article><div><h2>' + `${data[i].name}` + '</h2><div>$' + `${data[i].price_by_night}` + '</div></div><div><div>' + `${data[i].max_guest}` + '</div><div>' + `${data[i].number_rooms}` + '</div><div>' + `${data[i].number_bathrooms}` + '</div></div><div>' + `${data[i].description}` + '</div></article>'
            }
            $('section.places').append('place');
        }
     });
     $('button').click(function () {
        amenityList
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            data: JSON.stringify(amenityVals),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                const containerDiv = document.geteElementByClass('title_box');
                const placeDivs = containerDiv.getElementByTagName('DIV');
                for (let i = 0; i < placeDivs.length; i++) {
                    place = '<article><div><h2>' + `${data[i].name}` + '</h2><div>$' + `${data[i].price_by_night}` + '</div></div><div><div>' + `${data[i].max_guest}` + '</div><div>' + `${data[i].number_rooms}` + '</div><div>' + `${data[i].number_bathrooms}` + '</div></div><div>' + `${data[i].description}` + '</div></article>'
                }
                $('section.places').append('place');
            }
        });
     });
});
