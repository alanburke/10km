// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

function barometer_animation() {
  var $barometer = $('div.barometer');
  var $current_number = $barometer.find('.current-number');
  var $barometer_progress = $barometer.find('.barometer-progress');
  var signups = $barometer.attr('data-signups');
  var target = $barometer.attr('data-target');
  var formatted_signups = $barometer.attr('data-formattedsignups');
  var formatted_target = $barometer.attr('data-formattedtarget');
  var percentate_signups = $barometer_progress.attr('data-percentage');

  if (parseInt(signups, 10) >= parseInt(target, 10)) {
    $barometer.find('.barometer-progress').addClass('js-completed');
  }

  $barometer.find('.barometer-progress').animate({width: percentate_signups + '%'}, {
    duration: 7000,
    step: function(now, fx) {
      // Update the element's text with rounded-up value:
      $current_number.text(Math.ceil(now) * target/100);
    },
    complete: function () {
      $current_number.text(formatted_signups);
    }
  });
}

