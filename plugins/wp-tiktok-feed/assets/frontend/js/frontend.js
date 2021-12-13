/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/index.js":
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
/*! exports provided: qlttf_init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qlttf_init", function() { return qlttf_init; });
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/frontend/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
///import './scss/editor.scss';

 //(function ($) {

"use strict";

var swiper_index = 0,
    $swipers = {}; ///alert("sdsda");
// Ajax load
// ---------------------------------------------------------------------------

function qlttf_load_item_images($item, next_max_id) {
  var $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
      $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item),
      feed = $item.data('feed');
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
    url: qlttf.ajax_url,
    type: 'post',
    timeout: 30000,
    data: {
      action: 'qlttf_load_item_images',
      next_max_id: next_max_id,
      feed: JSON.stringify(feed)
    },
    beforeSend: function beforeSend() {
      $spinner.show();
    },
    success: function success(response) {
      if (response.success !== true) {
        $wrap.append(jquery__WEBPACK_IMPORTED_MODULE_1___default()(response.data));
        $spinner.hide();
        return;
      }

      var $images = jquery__WEBPACK_IMPORTED_MODULE_1___default()(response.data);
      $wrap.append($images).trigger('qlttf.loaded', [$images]);
    },
    complete: function complete() {},
    error: function error(jqXHR, textStatus) {
      $spinner.hide();
    }
  });
}

function qlttf_init() {
  // Images
  // ---------------------------------------------------------------------------
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.loaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item),
        $button = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-button.load', $item),
        options = $item.data('feed'),
        total = jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).length,
        loaded = 0;
    $wrap.trigger('qlttf.imagesLoaded', [images]);
    /* 
         if (total) {
          $wrap.find('.tiktok-feed-video').load(function (e) {
            loaded++;
            if (loaded >= total) {
              $wrap.trigger('qlttf.imagesLoaded', [images]);
            }
          });
        } 
     */

    if (total < options.limit) {
      $spinner.hide();
      setTimeout(function () {
        $button.fadeOut();
      }, 300);
    }
  }); // Spinner
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.imagesLoaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item);
    $spinner.hide();
  }); // Gallery
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=gallery]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).each(function (i, item) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).addClass('ig-image-loaded');
      }, 150 + i * 30);
    });
  }); // Carousel and Carousel Vertical
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=carousel], .tiktok-feed-feed[data-feed_layout=carousel-vertical]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).each(function (i, item) {
      //setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).addClass('ig-image-loaded'); //}, 500 + (i * 50));
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=carousel] , .tiktok-feed-feed[data-feed_layout=carousel-vertical]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $swiper = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.swiper-container', $item),
        options = $item.data('feed');
    options.carousel.slides = options.carousel.slidespv; ///  options.carousel.interval = options.carousel.autoplay_interval;

    swiper_index++;
    $swipers[swiper_index] = new Swiper($swiper, {
      //direction: 'vertical',
      //wrapperClass: 'tiktok-feed-list',
      ///slideClass: 'tiktok-feed-item',
      loop: true,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 2,
      autoplay: options.carousel.autoplay ? {
        delay: parseInt(options.carousel.autoplay_interval)
      } : false,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        480: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: Math.min(2, parseInt(options.carousel.slides))
        },
        768: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: Math.min(3, parseInt(options.carousel.slides))
        },
        1024: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: parseInt(options.carousel.slides)
        }
      }
    });
  }); /// Highigth, Highigth Square and Masonry

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=highlight] , .tiktok-feed-feed[data-feed_layout=highlight-square], .tiktok-feed-feed[data-feed_layout=masonry]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item);

    if (!$wrap.data('masonry')) {
      $wrap.masonry({
        itemSelector: '.tiktok-feed-item',
        isResizable: true,
        isAnimated: false,
        transitionDuration: 0,
        percentPosition: true,
        columnWidth: '.tiktok-feed-item:last-child'
      });
    } else {
      $wrap.masonry('appended', images, false);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=highlight] , .tiktok-feed-feed[data-feed_layout=highlight-square], .tiktok-feed-feed[data-feed_layout=masonry]').on('layoutComplete', function (e, items) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(items).each(function (i, item) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(item.element).addClass('ig-image-loaded');
      }, 500 + i * 50);
    });
  }); // Popup
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.loaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
        options = $item.data('feed'); // Redirect
    // -------------------------------------------------------------------------

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item .tiktok-feed-icon', $wrap).on('click', function (e) {
      e.stopPropagation();
    }); // Carousel
    // -------------------------------------------------------------------------

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).on('mfpOpen', function (e) {});

    if (!options.popup.display) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).magnificPopup({
      type: 'inline',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = this.st.mainClass + ' ' + 'qlttf-mfp-wrap';
        },
        elementParse: function elementParse(item) {
          var media = '',
              text = '',
              profile = '',
              counter = '',
              digg_count = '',
              controls = options.popup.controls ? ' controls' : '',
              autoplay = options.popup.autoplay ? ' autoplay' : '',
              author = item.el.data('item').author;
          media = '<div class="loader" style="height: ' + item.el.data('item').height + 'px; width: ' + item.el.data('item').width + 'px;">\n\
                      <video ' + autoplay + ' ' + controls + '>\n\
                        <source src="' + item.el.data('item').covers.video + '" type="video/mp4">\n\
                     </video></div>';
          counter = '<div class="mfp-icons">\n\
                        <div class="mfp-counter">' + (item.index + 1) + ' / ' + jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).length + '</div>\n\
                        <a class="mfp-link" href="' + item.el.data('item').link + '" target="_blank" rel="noopener">\n\
                          <svg width="12px" height="14px" viewBox="0 0 29 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\
                            <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\
                              <g id="编组-2" transform="translate(0.979236, 0.000000)" fill-rule="nonzero">\n\
                                <path d="M10.7907645,12.33 L10.7907645,11.11 C10.3672629,11.0428887 9.93950674,11.0061284 9.51076448,10.9999786 C5.35996549,10.9912228 1.68509679,13.6810205 0.438667694,17.6402658 C-0.807761399,21.5995112 0.663505842,25.9093887 4.07076448,28.28 C1.51848484,25.5484816 0.809799545,21.5720834 2.26126817,18.1270053 C3.71273679,14.6819273 7.05329545,12.4115428 10.7907645,12.33 L10.7907645,12.33 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M11.0207645,26.15 C13.3415287,26.1468776 15.2491662,24.3185414 15.3507645,22 L15.3507645,1.31 L19.1307645,1.31 C19.0536068,0.877682322 19.0167818,0.439130992 19.0207645,0 L13.8507645,0 L13.8507645,20.67 C13.764798,23.0003388 11.8526853,24.846212 9.52076448,24.85 C8.82390914,24.844067 8.13842884,24.6726969 7.52076448,24.35 C8.33268245,25.4749154 9.63346203,26.1438878 11.0207645,26.15 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M26.1907645,8.33 L26.1907645,7.18 C24.79964,7.18047625 23.4393781,6.76996242 22.2807645,6 C23.2964446,7.18071769 24.6689622,7.99861177 26.1907645,8.33 L26.1907645,8.33 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M22.2807645,6 C21.1394675,4.70033161 20.5102967,3.02965216 20.5107645,1.3 L19.1307645,1.3 C19.4909812,3.23268519 20.6300383,4.93223067 22.2807645,6 L22.2807645,6 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M9.51076448,16.17 C7.51921814,16.1802178 5.79021626,17.544593 5.31721201,19.4791803 C4.84420777,21.4137677 5.74860956,23.4220069 7.51076448,24.35 C6.55594834,23.0317718 6.42106871,21.2894336 7.16162883,19.8399613 C7.90218896,18.3904889 9.39306734,17.4787782 11.0207645,17.48 C11.4547752,17.4854084 11.8857908,17.5527546 12.3007645,17.68 L12.3007645,12.42 C11.8769919,12.3565056 11.4492562,12.3230887 11.0207645,12.32 L10.7907645,12.32 L10.7907645,16.32 C10.3736368,16.2081544 9.94244934,16.1576246 9.51076448,16.17 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M26.1907645,8.33 L26.1907645,12.33 C23.61547,12.3250193 21.107025,11.5098622 19.0207645,10 L19.0207645,20.51 C19.0097352,25.7544158 14.7551919,30.0000116 9.51076448,30 C7.56312784,30.0034556 5.66240321,29.4024912 4.07076448,28.28 C6.72698674,31.1368108 10.8608257,32.0771989 14.4914706,30.6505586 C18.1221155,29.2239183 20.5099375,25.7208825 20.5107645,21.82 L20.5107645,11.34 C22.604024,12.8399663 25.1155724,13.6445013 27.6907645,13.64 L27.6907645,8.49 C27.1865925,8.48839535 26.6839313,8.43477816 26.1907645,8.33 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M19.0207645,20.51 L19.0207645,10 C21.1134087,11.5011898 23.6253623,12.3058546 26.2007645,12.3 L26.2007645,8.3 C24.6792542,7.97871265 23.3034403,7.17147491 22.2807645,6 C20.6300383,4.93223067 19.4909812,3.23268519 19.1307645,1.3 L15.3507645,1.3 L15.3507645,22 C15.2751521,23.8467664 14.0381991,25.4430201 12.268769,25.9772302 C10.4993389,26.5114403 8.58570942,25.8663815 7.50076448,24.37 C5.73860956,23.4420069 4.83420777,21.4337677 5.30721201,19.4991803 C5.78021626,17.564593 7.50921814,16.2002178 9.50076448,16.19 C9.934903,16.1938693 10.3661386,16.2612499 10.7807645,16.39 L10.7807645,12.39 C7.0223379,12.4536691 3.65653929,14.7319768 2.20094561,18.1976761 C0.745351938,21.6633753 1.47494493,25.6617476 4.06076448,28.39 C5.66809542,29.4755063 7.57158782,30.0378224 9.51076448,30 C14.7551919,30.0000116 19.0097352,25.7544158 19.0207645,20.51 Z" id="路径" fill="#000000"></path>\n\
                              </g>\n\
                            </g>\n\
                          </svg>\n\
                          TikTok\n\
                        </a>';

          if (options.popup.download) {
            counter += '<a class="mfp-link" href="' + item.el.data('item').download + '" target="_blank" rel="noopener">\n\
                        <i class="qlttf-icon-download"></i>Download</a>';
          }

          counter += '</div>';

          if (options.popup.profile) {
            profile = '<div class="mfp-author">\n\
                          <img src="' + author.image.small + '">\n\
                          <div>\n\
                            <span>' + author.full_name + '</span>\n\
                            <a href="' + author.link + '" title="' + author.full_name + '" target="_blank" rel="noopener">@' + author.username + '</a>\n\
                          </div>\n\
                        </div>';
          }

          if (options.popup.text) {
            text = '<div class="mfp-text">' + item.el.data('item').text + '</div>';
          }

          if (options.popup.digg_count || options.popup.comment_count || options.popup.date_count) {
            digg_count = '<div class="mfp-info">';

            if (options.popup.digg_count) {
              digg_count += '<div class="mfp-digg_count"><i class="qlttf-icon-heart"></i>' + item.el.data('item').digg_count + '</div>';
            }

            if (options.popup.date_count) {
              digg_count += '<div class="mfp-date">' + item.el.data('item').date + '</div>';
            }

            if (options.popup.comment_count) {
              digg_count += '<div class="mfp-comment_count"><i class="qlttf-icon-comment"></i>' + item.el.data('item').comment_count + '</div>';
            }

            digg_count += '</div>';
          }

          item.src = '<div class="mfp-figure ' + options.popup.align + '" style="height: ' + item.el.data('item').height + 'px;">' + media + '<div class="mfp-close"></div><div class="mfp-bottom-bar"><div class="mfp-title">' + profile + counter + text + digg_count + '</div></div></div>';
        }
      },
      gallery: {
        enabled: true
      }
    });
  }); // Init
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('click', '.tiktok-feed-button.load', function (e) {
    e.preventDefault();
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);

    if (!$item.hasClass('loaded')) {
      return false;
    }

    var next_max_id = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list .tiktok-feed-item:last-child', $item).data('item').i;
    qlttf_load_item_images($item, next_max_id);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('test', function (e) {
    e.preventDefault();
    /*    alert("alert"); */

    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);

    if (!$item.hasClass('loaded')) {
      return false;
    }

    qlttf_load_item_images($item, 0);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').each(function (index, item) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(item);

    if ($item.hasClass('loaded')) {
      return false;
    }

    qlttf_load_item_images($item, 0);
  }); // IE8
  // ---------------------------------------------------------------------------

  if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
    document.body.className += ' ' + 'tiktok-gallery-ie-8';
  }

  if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
    document.body.className += ' ' + 'tiktok-gallery-ie-9';
  }
}
qlttf_init(); // IE8
// ---------------------------------------------------------------------------

if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
  document.body.className += ' ' + 'tiktok-gallery-ie-8';
}

if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
  document.body.className += ' ' + 'tiktok-gallery-ie-9';
} //})(jQuery);

/***/ }),

/***/ "./src/frontend/scss/style.scss":
/*!**************************************!*\
  !*** ./src/frontend/scss/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map