global.$ = require('jquery');
global.jQuery = global.$;

require('jquery-migrate');

require('popper.js');
require('bootstrap');
require('jquery.animate-number');
require('jquery.easing');
require('magnific-popup');
require('owl.carousel');
require('scrollax');
require('stellar.js/jquery.stellar.js');
require('waypoints/lib/jquery.waypoints.js');
require('waypoints/lib/shortcuts/sticky.js');

require('./bootstrap');

global.AOS = require('./theme/aos.js');
require('./theme/bootstrap-datepicker.js');
require('./theme/range.js');
// require('./theme/map.js');

require('./theme/main.js');
