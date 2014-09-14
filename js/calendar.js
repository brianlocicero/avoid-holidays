$(document).ready(function() {

  var holidays = [
  "01/01/2014",
  "01/20/2014",
  "02/17/2014",
  "05/26/2014",
  "07/04/2014",
  "09/01/2014",
  "10/13/2014",
  "11/11/2014",
  "11/27/2014",
  "12/25/2014"
  ];

  var selectedDate = "MM/DD/YYYY";

  $('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '1/1/2014',
      endDate: '12/31/2014',
      daysOfWeekDisabled: '0,6',
      beforeShowDay: function(date){
           var formattedDate = $.fn.datepicker.DPGlobal.formatDate(date, 'mm/dd/yyyy', 'en');
           if ($.inArray(formattedDate.toString(), holidays) != -1){
               return {
                  enabled : false
               };
           }
          return;
      },
  }).on('changeDate', function(e) {
    selectedDate = $.fn.datepicker.DPGlobal.formatDate(e.date, 'mm/dd/yyyy', 'en');
  }).on('changeMonth', function(e) {
    //table is rendered AFTER this fires, so timeout necessary
    var littleTimeout = setTimeout(function() {
      $('td.disabled').qtip({ // Grab some elements to apply the tooltip to
        content: {
            text: 'Weekends & holidays are not valid'
        },
        position: {
            my: 'bottom center',  // Position my top left...
            at: 'top center', // at the bottom right of...
        },
        style: {
          classes: 'qtip-dark'
        }
      });
    }, 500);
  });

  $('.saveDate').on('click', function() {
    $("#myModal").modal('hide');
    $(".form-control").val( selectedDate );
  });

  //use single arrows on calendar
  $('table tr th.prev').html('&lsaquo;');
  $('table tr th.next').html('&rsaquo;');


  //add tooltips
  $('td.disabled').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Weekends & holidays are not valid'
    },
    position: {
        my: 'bottom center',  // Position my top left...
        at: 'top center', // at the bottom right of...
    },
    style: {
      classes: 'qtip-dark'
    }
  });


});