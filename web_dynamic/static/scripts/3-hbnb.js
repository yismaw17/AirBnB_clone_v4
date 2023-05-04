#!/usr/bin/node
// Write a JavaScript script (static/scripts/3-hbnb.js):
// Based on 2-hbnb.js
// Request http://0.0.0.0:5001/api/v1/places_search/:
// Description of this endpoint here. If this endpoint is not available, you will have to add it to the API (you can work all together for creating this endpoint)
// Send a POST request with Content-Type: application/json and an empty dictionary in the body - cURL version: curl "http://0.0.0.0:5001/api/v1/places_search" -XPOST -H "Content-Type: application/json" -d '{}'
// Loop into the result of the request and create an article tag representing a Place in the section.places. (you can remove the Owner tag in the place description)
// The final result must be the same as previously, but now, places are loaded from the front-end, not from the back-end!

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
});
