#!/usr/bin/node
// Write a JavaScript script (static/scripts/1-hbnb.js):

// Your script must be executed only when DOM is loaded
// You must use JQuery
// Listen for changes on each input checkbox tag:
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked

document.addEvetListener('DOMContentLoaded', (event) => {
  const amenityIDlist = [];
  const amenityDict = {};
  $('input:checkbox').click(function () {
    if $(this).is(':checked')) {
      amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
      amenityIDlist = Object.keys(amenityDict);
      const vals = Object.values(amenityDict);
      $('DIV.amenities h4').append(vals);
    } else {
      delete amenityDict[$(this). attr('data-id')];
    }
  })
});
