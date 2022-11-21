// set the date we're counting down to
var target_date = new Date("January 17, 2023 08:00:00").getTime();

var Clock = (function(){
  var exports = function(element) {
    this._element = element;
    var html = '';
    for (var i=0;i<6;i++) {
      html += '<span>&nbsp;</span>';
    }
    this._element.innerHTML = html;
    this._slots = this._element.getElementsByTagName('span');
    this._tick();
  };
  exports.prototype = {
    _tick:function() {
      var time = new Date().getTime();
      var seconds_left = (target_date - time) / 1000;
      // do some time calculations
      var days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      var hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      var minutes = parseInt(seconds_left / 60);
      this._update(this._pad(days) + this._pad(hours) + this._pad(minutes));
      var self = this;
      setTimeout(function(){
        self._tick();
      },1000);
    },
    _pad:function(value) {
      return ('0' + value).slice(-2);
    },
    _update:function(timeString) {
      var i=0,l=this._slots.length,value,slot,now;
      for (;i<l;i++) {
        value = timeString.charAt(i);
        slot = this._slots[i];
        now = slot.getAttribute("data-now");
        if (!now) {
          slot.setAttribute("data-now", value);
          slot.setAttribute("data-old", value);
          continue;
        }
        if (now !== value) {
          this._flip(slot,value);
        }
      }
    },
    _flip:function(slot,value) {
      slot.classList.remove('flip');
      slot.setAttribute("data-old", slot.getAttribute("data-now"));
      slot.setAttribute("data-now", value);
      slot.offsetLeft;
      slot.classList.add('flip');
    }
  };
  return exports;
}());
var i=0,clocks = document.querySelectorAll('.clock'),l=clocks.length;
for (;i<l;i++) {
  new Clock(clocks[i]);
}