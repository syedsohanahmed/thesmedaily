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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/feed.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/feed.js":
/*!*****************************!*\
  !*** ./src/backend/feed.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-serializejson */ "jquery-serializejson");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-color-picker-alpha */ "wp-color-picker-alpha");
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-util */ "wp-util");
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_5__);







(function ($) {
  "use strict";

  var count = 0,
      timer;

  var is_blocked = function is_blocked($node) {
    return $node.is('.processing') || $node.parents('.processing').length;
  };

  var block = function block() {
    $('#qlttf_modal').addClass('processing');
  };

  var unblock = function unblock() {
    $('#qlttf_modal').removeClass('processing');
  };

  _.mixin({
    escapeHtml: function escapeHtml(attribute) {
      return attribute.replace('&amp;', /&/g).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    },
    getFormData: function getFormData($form) {
      return $form.serializeJSON({
        checkboxUncheckedValue: 'false',
        parseBooleans: true,
        parseNulls: true
      });
    }
  }); // Model
  // ---------------------------------------------------------------------------


  var Feed = Backbone.Model.extend({
    defaults: qlttf_feed.args
  });
  var FeedViewTabs = Backbone.View.extend({
    templates: {},
    initialize: function initialize() {
      this.templates.window = wp.template('qlttf-modal-tabs');
    },
    render: function render() {
      this.model.attributes.panel = 'tab_panel_feed';
      this.$el.html(this.templates.window(this.model.attributes));
    }
  });
  var FeedViewPanels = Backbone.View.extend({
    templates: {},
    initialize: function initialize() {
      this.templates.window = wp.template('qlttf-modal-panels');
    },
    render: function render() {
      this.$el.html(this.templates.window(this.model.attributes));
      this.$el.trigger('qlttf-enhanced-color');
    }
  });
  var FeedView = Backbone.View.extend({
    events: {
      'change input': 'enable',
      'change textarea': 'enable',
      'change select': 'enable',
      'click .media-modal-image': 'setLayout',
      'click .media-modal-backdrop': 'close',
      'click .media-modal-close': 'close',
      'click .media-modal-prev': 'edit',
      'click .media-modal-next': 'edit',
      'click .media-modal-tab': 'tab',
      'change .media-modal-render-tabs': 'renderTabs',
      'change .media-modal-render-panels': 'renderPanels',
      'submit .media-modal-form': 'submit',
      'qlttf.color.change input': 'enable'
    },
    templates: {},
    initialize: function initialize() {
      _.bindAll(this, 'open', 'tab', 'edit', 'change', 'load', 'render', 'close', 'submit');

      this.init();
      this.open();
    },
    init: function init() {
      this.templates.window = wp.template('qlttf-modal-main');
    },
    assign: function assign(view, selector) {
      view.setElement(this.$(selector)).render();
    },
    render: function render() {
      var modal = this;
      modal.$el.html(modal.templates.window(modal.model.attributes));
      this.tabs = new FeedViewTabs({
        model: modal.model
      });
      this.panels = new FeedViewPanels({
        model: modal.model
      });
      this.assign(this.tabs, '#qlttf-modal-tabs');
      this.assign(this.panels, '#qlttf-modal-panels');

      _.delay(function () {
        modal.$el.trigger('qlttf-enhanced-color');
      }, 100);
    },
    load: function load() {
      var modal = this,
          $modal = modal.$el.find('#qlttf_modal');

      if (modal.model.attributes.id == undefined) {
        modal.render();
        return;
      }

      var order = parseInt($('#qlttf_feeds_table tr[data-feed_id=' + modal.model.get('id') + ']').data('feed_position'));
      $.ajax({
        url: ajaxurl,
        data: {
          action: 'qlttf_edit_feed',
          nonce: qlttf_feed.nonce.qlttf_edit_feed,
          feed_id: this.model.attributes.id
        },
        dataType: 'json',
        type: 'POST',
        beforeSend: function beforeSend() {},
        complete: function complete() {
          unblock();
        },
        error: function error() {
          alert('Error!');
        },
        success: function success(response) {
          if (response.success) {
            modal.model.set(response.data);
            modal.model.set({
              ///id: parseInt($('#qlttf_feeds_table tr[data-feed_position=' + order + ']').data('feed_id')),
              order: order
            });
            modal.render();
          } else {
            alert(response.data);
          }
        }
      });
    },
    edit: function edit(e) {
      e.preventDefault();
      var modal = this,
          $button = $(e.target),
          feed_count = parseInt($('#qlttf_feeds_table tr[data-feed_id]').length),
          /// order = parseInt(modal.model.get('order'));
      order = parseInt($('#qlttf_feeds_table tr[data-feed_id=' + modal.model.get('id') + ']').data('feed_position'));
      count++;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        if ($button.hasClass('media-modal-next')) {
          order = Math.min(order + count, feed_count);
        } else {
          order = Math.max(order - count, 1);
        }

        modal.model.set({
          id: parseInt($('#qlttf_feeds_table tr[data-feed_position=' + order + ']').data('feed_id'))
        });
        count = 0;
        modal.load();
      }, 300);
    },
    open: function open(e) {
      var modal = this;
      $('body').addClass('modal-open').append(this.$el);

      if (modal.model.attributes.id == undefined) {
        _.delay(function () {
          unblock();
          modal.setUsername();
        }, 100);

        return;
      }

      this.load();
    },
    setLayout: function setLayout(e) {
      e.preventDefault();
      e.stopPropagation();
      $(e.target).find('input[type=radio]').prop('checked', true); //.trigger('change');

      $(e.target).siblings().find('input[type=radio]').prop('checked', false);
      this.updateModel(e);
      this.renderPanels(e);
      this.renderTabs(e);
      this.enable(e);
    },
    setUsername: function setUsername(e) {
      var modal = this,
          $select = modal.$el.find('#qlttf_modal').find('form').find('select[name=username]');
      $select.trigger('change');
    },
    updateModel: function updateModel(e) {
      e.preventDefault();
      var modal = this,
          $form = modal.$el.find('#qlttf_modal').find('form');

      var model = _.getFormData($form);

      this.model.set(model);
    },
    tab: function tab(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#qlttf_modal'),
          $tab = $(e.currentTarget),
          $tabs = $modal.find('ul.qlttf-tabs'),
          panel = $tab.find('a').attr('href').replace('#', '');
      $tabs.find('.active').removeClass('active');
      $tab.addClass('active');
      this.model.attributes['panel'] = panel;
      this.model.changed['panel'] = panel;
      this.renderPanels(e);
    },
    renderTabs: function renderTabs(e) {
      this.renderPanels(e);
      this.tabs.render();
    },
    renderPanels: function renderPanels(e) {
      this.updateModel(e);
      this.panels.render();
    },
    change: function change(e) {
      e.preventDefault();
      this.updateModel(e);
    },
    reload: function reload(e) {
      if (this.$el.find('#qlttf_modal').hasClass('reload')) {
        location.reload();
        return;
      }

      this.remove();
      return;
    },
    close: function close(e) {
      e.preventDefault();
      this.undelegateEvents();
      $(document).off('focusin');
      $('body').removeClass('modal-open'); // if necesary reload... 

      this.$el.find('#qlttf_modal').addClass('reload');
      this.reload(e);
      return;
    },
    enable: function enable(e) {
      $('.media-modal-submit').prop('disabled', false);
      this.updateModel(e);
    },
    submit: function submit(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#qlttf_modal'),
          $spinner = $modal.find('.settings-save-status .spinner'),
          $saved = $modal.find('.settings-save-status .saved');
      $.ajax({
        url: ajaxurl,
        data: {
          action: 'qlttf_save_feed',
          nonce: qlttf_feed.nonce.qlttf_save_feed,
          feed: JSON.stringify(modal.model.attributes)
        },
        dataType: 'json',
        type: 'POST',
        beforeSend: function beforeSend() {
          $('.media-modal-submit').prop('disabled', true);
          $spinner.addClass('is-active');
        },
        complete: function complete() {
          $saved.addClass('is-active');
          $spinner.removeClass('is-active');

          _.delay(function () {
            $saved.removeClass('is-active');
          }, 1000);
        },
        error: function error(response) {
          alert('Error!');
        },
        success: function success(response) {
          if (response.success) {
            if (modal.model.attributes.id == undefined) {
              $modal.addClass('reload');
              modal.reload(e);
              modal.close(e);
            }
          } else {
            alert(response.data);
          }
        }
      });
      return false;
    }
  });
  var FeedModal = Backbone.View.extend({
    initialize: function initialize(e) {
      var $button = $(e.target),
          feed_id = $button.closest('[data-feed_position]').data('feed_id');
      var model = new Feed();
      model.set({
        id: feed_id
      });
      new FeedView({
        model: model
      }).render();
    }
  });
  $(document).on('qlttf-enhanced-color', function (e) {
    $('.color-picker').filter(':not(.enhanced)').each(function () {
      if ($(this).is('[readonly]')) {
        $(this).parent('.form-field').addClass('disabled-field');
      }

      $(this).wpColorPicker({
        change: function change(event, ui) {
          console.log('wpColorPicker');
          $(event.target).trigger('qlttf.color.change');
        }
      });
    });
  }); // Add feed
  // ---------------------------------------------------------------------------

  $('#qlttf-add-feed').on('click', function (e) {
    e.preventDefault();
    new FeedModal(e);
  }); // Edit feed
  // ---------------------------------------------------------------------------

  var exist_modal = false;
  $('.qlttf_edit_feed').on('click', function (e) {
    e.preventDefault();

    if (!exist_modal) {
      new FeedModal(e);
      exist_modal = true;
    }
  }); // Delete feed
  // ---------------------------------------------------------------------------

  $('.qlttf_delete_feed').on('click', function (e) {
    e.preventDefault();
    var c = confirm(qlttf_feed.message.confirm_delete);

    if (!c) {
      return false;
    }

    var $button = $(e.target),
        $spinner = $button.parent().find('.spinner'),
        feed_id = $button.closest('[data-feed_id]').data('feed_id');
    $.ajax({
      url: ajaxurl,
      data: {
        action: 'qlttf_delete_feed',
        nonce: qlttf_feed.nonce.qlttf_delete_feed,
        feed_id: feed_id
      },
      dataType: 'json',
      type: 'POST',
      beforeSend: function beforeSend() {
        $spinner.addClass('is-active');
      },
      complete: function complete() {
        $spinner.removeClass('is-active');
      },
      error: function error(response) {},
      success: function success(response) {
        if (response.data) {
          location.reload();
        } else {
          alert(response.data);
        }
      }
    });
  }); // Feed clear cache
  // ---------------------------------------------------------------------------

  $('.qlttf_clear_cache').on('click', function (e) {
    e.preventDefault();
    var c = confirm(qlttf_feed.message.confirm_clear_cache);

    if (!c) {
      return false;
    }

    var $button = $(e.target),
        $spinner = $button.parent().find('.spinner'),
        feed_id = $button.closest('[data-feed_id]').data('feed_id');
    $.ajax({
      url: ajaxurl,
      type: 'post',
      data: {
        action: 'qlttf_clear_cache',
        feed_id: feed_id,
        nonce: qlttf_feed.nonce.qlttf_clear_cache
      },
      beforeSend: function beforeSend() {
        $spinner.addClass('is-active');
      },
      success: function success(response) {
        if (response.success) {
          setTimeout(function () {
            $spinner.removeClass('is-active');
          }, 300);
        } else {
          alert(response.data);
        }
      },
      complete: function complete() {
        setTimeout(function () {
          $spinner.removeClass('is-active');
        }, 600);
      },
      error: function error(jqXHR, textStatus) {
        console.log(textStatus);
      }
    });
  }); // Copy shortcode
  // ---------------------------------------------------------------------------

  $(document).on('click', '[data-qlttf-copy-feed-shortcode]', function (e) {
    e.preventDefault();
    $($(this).data('qlttf-copy-feed-shortcode')).select();
    document.execCommand('copy');
  });
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "backbone":
/*!***********************************************!*\
  !*** external {"this":["window","Backbone"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["Backbone"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "jquery-serializejson":
/*!****************************************************!*\
  !*** external {"this":["window","serializeJSON"]} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["serializeJSON"]; }());

/***/ }),

/***/ "underscore":
/*!***********************************!*\
  !*** external {"this":["_","."]} ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]["."]; }());

/***/ }),

/***/ "wp-color-picker-alpha":
/*!****************************************************!*\
  !*** external {"this":["window","wpColorPicker"]} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["wpColorPicker"]; }());

/***/ }),

/***/ "wp-util":
/*!***************************************!*\
  !*** external {"this":["wp","util"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["util"]; }());

/***/ })

/******/ });
//# sourceMappingURL=feed.js.map