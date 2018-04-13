(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file animation-display.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Image for displaying animated GIF image.
 *
 * @class
 * @augments videojs.Component
*/

var AnimationDisplay = function (_Component) {
  _inherits(AnimationDisplay, _Component);

  function AnimationDisplay() {
    _classCallCheck(this, AnimationDisplay);

    return _possibleConstructorReturn(this, (AnimationDisplay.__proto__ || Object.getPrototypeOf(AnimationDisplay)).apply(this, arguments));
  }

  _createClass(AnimationDisplay, [{
    key: 'createEl',


    /**
     * Create the `AnimationDisplay`s DOM element.
     *
     * @return {Element}
     *         The dom element that gets created.
     */
    value: function createEl() {
      return _get(AnimationDisplay.prototype.__proto__ || Object.getPrototypeOf(AnimationDisplay.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-animation-display',
        innerHTML: '<img />'
      });
    }
  }]);

  return AnimationDisplay;
}(Component);

Component.registerComponent('AnimationDisplay', AnimationDisplay);

exports.default = AnimationDisplay;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file camera-button.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to toggle between create and retry snapshot image.
 *
 * @class
 * @augments videojs.Button
*/

var CameraButton = function (_Button) {
    _inherits(CameraButton, _Button);

    function CameraButton() {
        _classCallCheck(this, CameraButton);

        return _possibleConstructorReturn(this, (CameraButton.__proto__ || Object.getPrototypeOf(CameraButton)).apply(this, arguments));
    }

    _createClass(CameraButton, [{
        key: 'buildCSSClass',

        /**
         * Builds the default DOM `className`.
         *
         * @return {string}
         *         The DOM `className` for this object.
         */
        value: function buildCSSClass() {
            return 'vjs-camera-button vjs-control vjs-button vjs-icon-photo-camera';
        }

        /**
         * Enable the `CameraButton` element so that it can be activated or clicked.
         */

    }, {
        key: 'enable',
        value: function enable() {
            _get(CameraButton.prototype.__proto__ || Object.getPrototypeOf(CameraButton.prototype), 'enable', this).call(this);

            this.on(this.player_, 'startRecord', this.onStart);
            this.on(this.player_, 'stopRecord', this.onStop);
        }

        /**
         * Disable the `CameraButton` element so that it cannot be activated or clicked.
         */

    }, {
        key: 'disable',
        value: function disable() {
            _get(CameraButton.prototype.__proto__ || Object.getPrototypeOf(CameraButton.prototype), 'disable', this).call(this);

            this.off(this.player_, 'startRecord', this.onStart);
            this.off(this.player_, 'stopRecord', this.onStop);
        }

        /**
         * This gets called when the button is clicked.
         *
         * @param {EventTarget~Event} event
         *        The `tap` or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */

    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            var recorder = this.player_.record();

            if (!recorder.isProcessing()) {
                // create snapshot
                recorder.start();
            } else {
                // retry
                recorder.retrySnapshot();

                // reset camera button
                this.onStop();
            }
        }

        /**
         * Add the vjs-icon-replay class to the element so it can change appearance.
         *
         * @param {EventTarget~Event} [event]
         *        The event that caused this function to run.
         *
         * @listens Player#startRecord
         */

    }, {
        key: 'onStart',
        value: function onStart(event) {
            // replace element class so it can change appearance
            this.removeClass('vjs-icon-photo-camera');
            this.addClass('vjs-icon-replay');

            // change the button text
            this.controlText('Retry');
        }

        /**
         * Add the vjs-icon-photo-camera class to the element so it can change appearance.
         *
         * @param {EventTarget~Event} [event]
         *        The event that caused this function to run.
         *
         * @listens Player#stopRecord
         */

    }, {
        key: 'onStop',
        value: function onStop(event) {
            // replace element class so it can change appearance
            this.removeClass('vjs-icon-replay');
            this.addClass('vjs-icon-photo-camera');

            // change the button text
            this.controlText('Image');
        }
    }]);

    return CameraButton;
}(Button);

/**
 * The text that should display over the `CameraButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


CameraButton.prototype.controlText_ = 'Image';

Component.registerComponent('CameraButton', CameraButton);

exports.default = CameraButton;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file device-button.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to select recording device.
 *
 * @class
 * @augments videojs.Button
*/

var DeviceButton = function (_Button) {
  _inherits(DeviceButton, _Button);

  function DeviceButton() {
    _classCallCheck(this, DeviceButton);

    return _possibleConstructorReturn(this, (DeviceButton.__proto__ || Object.getPrototypeOf(DeviceButton)).apply(this, arguments));
  }

  _createClass(DeviceButton, [{
    key: 'handleClick',

    /**
     * This gets called when this button gets:
     *
     * - Clicked (via the `click` event, listening starts in the constructor)
     * - Tapped (via the `tap` event, listening starts in the constructor)
     *
     * @param {EventTarget~Event} event
     *        The `keydown`, `tap`, or `click` event that caused this function to be
     *        called.
     *
     * @listens tap
     * @listens click
     */
    value: function handleClick(event) {
      // open device dialog
      this.player_.record().getDevice();
    }
  }]);

  return DeviceButton;
}(Button);

/**
 * The text that should display over the `DeviceButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


DeviceButton.prototype.controlText_ = 'Device';

Component.registerComponent('DeviceButton', DeviceButton);

exports.default = DeviceButton;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-canvas
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Canvas for displaying snapshot image.
 *
 * @class
 * @augments videojs.Component
*/

var RecordCanvas = function (_Component) {
  _inherits(RecordCanvas, _Component);

  function RecordCanvas() {
    _classCallCheck(this, RecordCanvas);

    return _possibleConstructorReturn(this, (RecordCanvas.__proto__ || Object.getPrototypeOf(RecordCanvas)).apply(this, arguments));
  }

  _createClass(RecordCanvas, [{
    key: 'createEl',


    /**
     * Create the `RecordCanvas`s DOM element.
     *
     * @return {Element}
     *         The dom element that gets created.
     */
    value: function createEl() {
      return _get(RecordCanvas.prototype.__proto__ || Object.getPrototypeOf(RecordCanvas.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-record-canvas',
        innerHTML: '<canvas></canvas>'
      });
    }
  }]);

  return RecordCanvas;
}(Component);

Component.registerComponent('RecordCanvas', RecordCanvas);

exports.default = RecordCanvas;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-indicator.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Icon indicating recording is active.
 *
 * @class
 * @augments videojs.Component
*/

var RecordIndicator = function (_Component) {
    _inherits(RecordIndicator, _Component);

    /**
     * The constructor function for the class.
     *
     * @private
     * @param {(videojs.Player|Object)} player - Video.js player instance.
     * @param {Object} options - Player options.
     */
    function RecordIndicator(player, options) {
        _classCallCheck(this, RecordIndicator);

        var _this = _possibleConstructorReturn(this, (RecordIndicator.__proto__ || Object.getPrototypeOf(RecordIndicator)).call(this, player, options));

        _this.enable();
        return _this;
    }

    /**
     * Create the `RecordIndicator`s DOM element.
     *
     * @return {Element}
     *         The dom element that gets created.
     */


    _createClass(RecordIndicator, [{
        key: 'createEl',
        value: function createEl() {
            return _get(RecordIndicator.prototype.__proto__ || Object.getPrototypeOf(RecordIndicator.prototype), 'createEl', this).call(this, 'div', {
                className: 'vjs-record-indicator vjs-control',
                dir: 'ltr'
            });
        }

        /**
         * Enable event handlers.
         */

    }, {
        key: 'enable',
        value: function enable() {
            this.on(this.player_, 'startRecord', this.show);
            this.on(this.player_, 'stopRecord', this.hide);
        }

        /**
         * Disable event handlers.
         */

    }, {
        key: 'disable',
        value: function disable() {
            this.off(this.player_, 'startRecord', this.show);
            this.off(this.player_, 'stopRecord', this.hide);
        }
    }]);

    return RecordIndicator;
}(Component);

Component.registerComponent('RecordIndicator', RecordIndicator);

exports.default = RecordIndicator;
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-toggle.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to toggle between start and stop recording.
 *
 * @class
 * @augments videojs.Button
*/

var RecordToggle = function (_Button) {
    _inherits(RecordToggle, _Button);

    function RecordToggle() {
        _classCallCheck(this, RecordToggle);

        return _possibleConstructorReturn(this, (RecordToggle.__proto__ || Object.getPrototypeOf(RecordToggle)).apply(this, arguments));
    }

    _createClass(RecordToggle, [{
        key: 'buildCSSClass',

        /**
         * Builds the default DOM `className`.
         *
         * @return {string}
         *         The DOM `className` for this object.
         */
        value: function buildCSSClass() {
            return 'vjs-record-button vjs-control vjs-button vjs-icon-record-start';
        }

        /**
         * Enable the `RecordToggle` element so that it can be activated or clicked.
         */

    }, {
        key: 'enable',
        value: function enable() {
            _get(RecordToggle.prototype.__proto__ || Object.getPrototypeOf(RecordToggle.prototype), 'enable', this).call(this);

            this.on(this.player_, 'startRecord', this.onStart);
            this.on(this.player_, 'stopRecord', this.onStop);
        }

        /**
         * Disable the `RecordToggle` element so that it cannot be activated or clicked.
         */

    }, {
        key: 'disable',
        value: function disable() {
            _get(RecordToggle.prototype.__proto__ || Object.getPrototypeOf(RecordToggle.prototype), 'disable', this).call(this);

            this.off(this.player_, 'startRecord', this.onStart);
            this.off(this.player_, 'stopRecord', this.onStop);
        }

        /**
         * This gets called when the button is clicked.
         *
         * @param {EventTarget~Event} event
         *        The `tap` or `click` event that caused this function to be
         *        called.
         *
         * @listens tap
         * @listens click
         */

    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            var recorder = this.player_.record();
            if (!recorder.isRecording()) {
                recorder.start();
            } else {
                recorder.stop();
            }
        }

        /**
         * Add the vjs-icon-record-stop class to the element so it can change appearance.
         *
         * @param {EventTarget~Event} [event]
         *        The event that caused this function to run.
         *
         * @listens Player#startRecord
         */

    }, {
        key: 'onStart',
        value: function onStart(event) {
            // replace element class so it can change appearance
            this.removeClass('vjs-icon-record-start');
            this.addClass('vjs-icon-record-stop');

            // change the button text
            this.controlText('Stop');
        }

        /**
         * Add the vjs-icon-record-start class to the element so it can change appearance.
         *
         * @param {EventTarget~Event} [event]
         *        The event that caused this function to run.
         *
         * @listens Player#stopRecord
         */

    }, {
        key: 'onStop',
        value: function onStop(event) {
            // replace element class so it can change appearance
            this.removeClass('vjs-icon-record-stop');
            this.addClass('vjs-icon-record-start');

            // change the button text
            this.controlText('Record');
        }
    }]);

    return RecordToggle;
}(Button);

/**
 * The text that should display over the `RecordToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


RecordToggle.prototype.controlText_ = 'Record';

Component.registerComponent('RecordToggle', RecordToggle);

exports.default = RecordToggle;
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file defaults.js
 * @since 2.0.0
 */

//plugin defaults
var pluginDefaultOptions = {
    // added by george
    videoBitsPerSecond: 800000,

    // Single snapshot image.
    image: false,
    // Include audio in the recorded clip.
    audio: false,
    // Include video in the recorded clip.
    video: false,
    // Animated GIF.
    animation: false,
    // Maximum length of the recorded clip.
    maxLength: 10,
    // Width of the recorded video frames.
    frameWidth: 320,
    // Height of the recorded video frames.
    frameHeight: 240,
    // Enables console logging for debugging purposes.
    debug: false,
    // The mime type for the video recorder. Default to 'video/webm'.
    // Use 'video/mp4' (Firefox) or 'video/webm;codecs=H264' (Chrome 52 and
    // newer) for MP4.
    videoMimeType: 'video/webm',
    // Video recorder type to use. This allows you to specify an alternative
    // recorder class, e.g. WhammyRecorder. Defaults to 'auto' which let's
    // recordrtc specify the best available recorder type.
    videoRecorderType: 'auto',
    // Audio recording library to use. Legal values are 'recordrtc',
    // 'libvorbis.js', 'opus-recorder', 'lamejs' and 'recorder.js'.
    audioEngine: 'recordrtc',
    // Audio recorder type to use. This allows you to specify an alternative
    // recorder class, e.g. StereoAudioRecorder. Defaults to 'auto' which let's
    // recordrtc specify the best available recorder type. Currently this
    // setting is only used with the 'recordrtc' audioEngine.
    audioRecorderType: 'auto',
    // The mime type for the audio recorder. Defaults to 'auto' which will pick
    // the best option available in the browser (e.g. either 'audio/wav',
    // 'audio/ogg' or 'audio/webm').
    audioMimeType: 'auto',
    // The size of the audio buffer (in sample-frames) which needs to
    // be processed each time onprocessaudio is called.
    // From the spec: This value controls how frequently the audioprocess event is
    // dispatched and how many sample-frames need to be processed each call.
    // Lower values for buffer size will result in a lower (better) latency.
    // Higher values will be necessary to avoid audio breakup and glitches.
    // Legal values are 256, 512, 1024, 2048, 4096, 8192 or 16384.
    audioBufferSize: 4096,
    // The audio sample rate (in sample-frames per second) at which the
    // AudioContext handles audio. It is assumed that all AudioNodes
    // in the context run at this rate. In making this assumption,
    // sample-rate converters or "varispeed" processors are not supported
    // in real-time processing.
    // The sampleRate parameter describes the sample-rate of the
    // linear PCM audio data in the buffer in sample-frames per second.
    // An implementation must support sample-rates in at least
    // the range 22050 to 96000.
    audioSampleRate: 44100,
    // The audio bitrate in kbps (only used in lamejs plugin).
    audioBitRate: 128,
    // Allows you to record single-channel audio, which can reduce the
    // filesize.
    audioChannels: 2,
    // URL for the audio worker.
    audioWorkerURL: '',
    // Frame rate in frames per second.
    animationFrameRate: 200,
    // Sets quality of color quantization (conversion of images to the
    // maximum 256 colors allowed by the GIF specification).
    // Lower values (minimum = 1) produce better colors,
    // but slow processing significantly. 10 is the default,
    // and produces good color mapping at reasonable speeds.
    // Values greater than 20 do not yield significant improvements
    // in speed.
    animationQuality: 10,
    // Accepts numbers in milliseconds; use this to force intervals-based blobs.
    timeSlice: 0
};

exports.default = pluginDefaultOptions;
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-engine.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

// supported recorder plugin engines
var RECORDRTC = 'recordrtc';
var LIBVORBISJS = 'libvorbis.js';
var RECORDERJS = 'recorder.js';
var LAMEJS = 'lamejs';
var OPUSRECORDER = 'opus-recorder';

/**
 * Base class for recorder backends.
 * @class
 * @augments videojs.Component
 */

var RecordEngine = function (_Component) {
    _inherits(RecordEngine, _Component);

    /**
     * Creates an instance of this class.
     *
     * @param  {Player} player
     *         The `Player` that this class should be attached to.
     *
     * @param  {Object} [options]
     *         The key/value store of player options.
     */
    function RecordEngine(player, options) {
        _classCallCheck(this, RecordEngine);

        // auto mixin the evented mixin (required since video.js v6.6.0)
        options.evented = true;

        return _possibleConstructorReturn(this, (RecordEngine.__proto__ || Object.getPrototypeOf(RecordEngine)).call(this, player, options));
    }

    /**
     * Remove any temporary data and references to streams.
     * @private
     */


    _createClass(RecordEngine, [{
        key: 'dispose',
        value: function dispose() {
            // dispose previous recording
            if (this.recordedData !== undefined) {
                URL.revokeObjectURL(this.recordedData);
            }
        }

        /**
         * Add filename and timestamp to recorded file object.
         *
         * @param {(blob|file)} fileObj - Blob or File object.
         */

    }, {
        key: 'addFileInfo',
        value: function addFileInfo(fileObj) {
            if (fileObj instanceof Blob || fileObj instanceof File) {
                // set modification date
                var now = new Date();
                try {
                    fileObj.lastModified = now.getTime();
                    fileObj.lastModifiedDate = now;
                } catch (e) {
                    if (e instanceof TypeError) {
                        // ignore: setting getter-only property "lastModifiedDate"
                    } else {
                        // re-raise error
                        throw e;
                    }
                }
                // guess extension name from mime type, e.g. audio/ogg, but
                // any extension is valid here. Chrome also accepts extended
                // mime types like video/webm;codecs=h264,vp9,opus
                var fileExtension = '.' + fileObj.type.split('/')[1];
                if (fileExtension.indexOf(';') > -1) {
                    fileExtension = fileExtension.split(';')[0];
                }

                // use timestamp in filename, e.g. 1451180941326.ogg
                try {
                    fileObj.name = now.getTime() + fileExtension;
                } catch (e) {
                    if (e instanceof TypeError) {
                        // ignore: setting getter-only property "name"
                    } else {
                        // re-raise error
                        throw e;
                    }
                }
            }
        }

        /**
         * Invoked when recording is stopped and resulting stream is available.
         *
         * @param {blob} data - Reference to the recorded Blob.
         */

    }, {
        key: 'onStopRecording',
        value: function onStopRecording(data) {
            this.recordedData = data;

            // add filename and timestamp to recorded file object
            this.addFileInfo(this.recordedData);

            // remove reference to recorded stream
            this.dispose();

            // notify listeners
            this.trigger('recordComplete');
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with names for the particular blob(s)
         *     you want to save. File extensions are added automatically. For
         *     example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            var fileName = name[Object.keys(name)[0]];

            if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
                return navigator.msSaveOrOpenBlob(this.recordedData, fileName);
            } else if (typeof navigator.msSaveBlob !== 'undefined') {
                return navigator.msSaveBlob(this.recordedData, fileName);
            }

            var hyperlink = document.createElement('a');
            hyperlink.href = URL.createObjectURL(this.recordedData);
            hyperlink.download = fileName;

            hyperlink.style = 'display:none;opacity:0;color:transparent;';
            (document.body || document.documentElement).appendChild(hyperlink);

            if (typeof hyperlink.click === 'function') {
                hyperlink.click();
            } else {
                hyperlink.target = '_blank';
                hyperlink.dispatchEvent(new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                }));
            }

            URL.revokeObjectURL(hyperlink.href);
        }
    }]);

    return RecordEngine;
}(Component);

// expose component for external plugins


videojs.RecordEngine = RecordEngine;
Component.registerComponent('RecordEngine', RecordEngine);

exports.RecordEngine = RecordEngine;
exports.RECORDRTC = RECORDRTC;
exports.LIBVORBISJS = LIBVORBISJS;
exports.RECORDERJS = RECORDERJS;
exports.LAMEJS = LAMEJS;
exports.OPUSRECORDER = OPUSRECORDER;
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file record-mode.js
 * @since 2.0.0
 */

// recorder modes
var IMAGE_ONLY = 'image_only';
var AUDIO_ONLY = 'audio_only';
var VIDEO_ONLY = 'video_only';
var AUDIO_VIDEO = 'audio_video';
var ANIMATION = 'animation';

var getRecorderMode = function getRecorderMode(image, audio, video, animation) {
    if (isModeEnabled(image)) {
        return IMAGE_ONLY;
    } else if (isModeEnabled(animation)) {
        return ANIMATION;
    } else if (isModeEnabled(audio) && !isModeEnabled(video)) {
        return AUDIO_ONLY;
    } else if (isModeEnabled(audio) && isModeEnabled(video)) {
        return AUDIO_VIDEO;
    } else if (!isModeEnabled(audio) && isModeEnabled(video)) {
        return VIDEO_ONLY;
    }
};

/**
 * Return boolean indicating whether mode is enabled or not.
 */
var isModeEnabled = function isModeEnabled(mode) {
    return mode === Object(mode) || mode === true;
};

exports.getRecorderMode = getRecorderMode;
exports.IMAGE_ONLY = IMAGE_ONLY;
exports.AUDIO_ONLY = AUDIO_ONLY;
exports.VIDEO_ONLY = VIDEO_ONLY;
exports.AUDIO_VIDEO = AUDIO_VIDEO;
exports.ANIMATION = ANIMATION;
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _recordEngine = require('./record-engine');

var _detectBrowser = require('../utils/detect-browser');

var _recordMode = require('./record-mode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file record-rtc.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Component = videojs.getComponent('Component');

/**
 * Engine used with the MRecordRTC class in the RecordRTC library.
 *
 * @class
 * @augments videojs.RecordEngine
 */

var RecordRTCEngine = function (_RecordEngine) {
    _inherits(RecordRTCEngine, _RecordEngine);

    function RecordRTCEngine() {
        _classCallCheck(this, RecordRTCEngine);

        return _possibleConstructorReturn(this, (RecordRTCEngine.__proto__ || Object.getPrototypeOf(RecordRTCEngine)).apply(this, arguments));
    }

    _createClass(RecordRTCEngine, [{
        key: 'setup',


        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;

            // setup RecordRTC
            this.engine = new RecordRTC.MRecordRTC();
            this.engine.mediaType = this.mediaType;
            this.engine.disableLogs = !this.debug;
            this.engine.mimeType = this.mimeType;

            // audio settings
            this.engine.bufferSize = this.bufferSize;
            this.engine.sampleRate = this.sampleRate;
            this.engine.numberOfAudioChannels = this.audioChannels;

            // video/canvas settings
            this.engine.video = this.video;
            this.engine.canvas = this.canvas;

            // animated gif settings
            this.engine.quality = this.quality;
            this.engine.frameRate = this.frameRate;
            if (this.onTimeStamp !== undefined) {
                this.engine.timeSlice = this.timeSlice;
                this.engine.onTimeStamp = this.onTimeStamp;
            }

            // connect stream to recording engine
            this.engine.addStream(this.inputStream);
        }

        /**
         * Remove any temporary data and references to streams.
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            _get(RecordRTCEngine.prototype.__proto__ || Object.getPrototypeOf(RecordRTCEngine.prototype), 'dispose', this).call(this);

            if (typeof this.engine.destroy === 'function') {
                this.engine.destroy();
            }
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            this.engine.startRecording();
        }

        /**
         * Stop recording. Result will be available async when onStopRecording
         * is called.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.engine.stopRecording(this.onStopRecording.bind(this));
        }

        /**
         * Pause recording.
         */

    }, {
        key: 'pause',
        value: function pause() {
            this.engine.pauseRecording();
        }

        /**
         * Resume recording.
         */

    }, {
        key: 'resume',
        value: function resume() {
            this.engine.resumeRecording();
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with names for the particular blob(s)
         *     you want to save. File extensions are added automatically. For
         *     example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            if (this.engine && name !== undefined) {
                this.engine.save(name);
            }
        }

        /**
         * Invoked when recording is stopped and resulting stream is available.
         *
         * @private
         * @param {string} audioVideoURL - Reference to the recorded Blob
         *     object, e.g. 'blob:http://localhost:8080/10100016-4248-9949-b0d6-0bb40db56eba'
         * @param {string} type - Media type, eg. 'video' or 'audio'.
         */

    }, {
        key: 'onStopRecording',
        value: function onStopRecording(audioVideoURL, type) {
            var _this2 = this;

            // store reference to recorded stream URL
            this.mediaURL = audioVideoURL;

            // store reference to recorded stream data
            var recordType = this.player().record().getRecordType();
            this.engine.getBlob(function (recording) {
                switch (recordType) {
                    case _recordMode.AUDIO_ONLY:
                        _this2.recordedData = recording.audio;

                        _this2.addFileInfo(_this2.recordedData);

                        // notify listeners
                        _this2.trigger('recordComplete');
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                        // when recording both audio and video, recordrtc
                        // calls this twice on chrome, first with audio data
                        // and then with video data.
                        // on firefox it's called once but with a single
                        // blob that includes both audio and video data.
                        if (recording.video !== undefined) {
                            // data is video-only but on firefox audio+video
                            _this2.recordedData = recording.video;

                            // on the chrome browser two blobs are created
                            // containing the separate audio/video streams.
                            if (recordType === _recordMode.AUDIO_VIDEO && (0, _detectBrowser.isChrome)()) {
                                // store both audio and video
                                _this2.recordedData = recording;

                                for (var mtype in _this2.recordedData) {
                                    _this2.addFileInfo(_this2.recordedData[mtype]);
                                }
                            } else {
                                _this2.addFileInfo(_this2.recordedData);
                            }

                            // notify listeners
                            _this2.trigger('recordComplete');
                        }
                        break;

                    case _recordMode.ANIMATION:
                        _this2.recordedData = recording.gif;

                        _this2.addFileInfo(_this2.recordedData);

                        // notify listeners
                        _this2.trigger('recordComplete');
                        break;
                }
            });
        }
    }]);

    return RecordRTCEngine;
}(_recordEngine.RecordEngine);

// expose plugin


videojs.RecordRTCEngine = RecordRTCEngine;

Component.registerComponent('RecordRTCEngine', RecordRTCEngine);

exports.default = RecordRTCEngine;
},{"../utils/detect-browser":16,"./record-engine":8,"./record-mode":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file lamejs-plugin.js
 * @since 1.1.0
 */

var RecordEngine = videojs.getComponent('RecordEngine');

/**
 * Audio-only engine for the lamejs library.
 *
 * @class
 * @augments videojs.RecordEngine
 */

var LamejsEngine = function (_RecordEngine) {
    _inherits(LamejsEngine, _RecordEngine);

    function LamejsEngine() {
        _classCallCheck(this, LamejsEngine);

        return _possibleConstructorReturn(this, (LamejsEngine.__proto__ || Object.getPrototypeOf(LamejsEngine)).apply(this, arguments));
    }

    _createClass(LamejsEngine, [{
        key: 'setup',

        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;
            this.audioType = 'audio/mp3';

            var config = {
                debug: this.debug,
                sampleRate: this.sampleRate,
                bitRate: this.bitRate
            };

            this.audioContext = new AudioContext();
            this.audioSourceNode = this.audioContext.createMediaStreamSource(this.inputStream);
            this.processor = this.audioContext.createScriptProcessor(16384, 1, 1);

            this.engine = new Worker(this.audioWorkerURL);
            this.engine.onmessage = this.onWorkerMessage.bind(this);

            this.engine.postMessage({ cmd: 'init', config: config });
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            this.processor.onaudioprocess = this.onAudioProcess.bind(this);
            this.audioSourceNode.connect(this.processor);
            this.processor.connect(this.audioContext.destination);
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.audioSourceNode.disconnect();
            this.processor.disconnect();
            this.processor.onaudioprocess = null;
            this.inputStream.getAudioTracks().forEach(function (track) {
                return track.stop();
            });
            this.audioContext.close();

            this.engine.postMessage({ cmd: 'finish' });
        }

        /**
         * Received a message from the worker.
         */

    }, {
        key: 'onWorkerMessage',
        value: function onWorkerMessage(ev) {
            switch (ev.data.cmd) {
                case 'end':
                    this.onStopRecording(new Blob(ev.data.buf, { type: this.audioType }));
                    break;

                case 'error':
                    this.player().trigger('error', ev.data.error);
                    break;

                default:
                    // invalid message received
                    this.player().trigger('error', ev.data);
                    break;
            }
        }

        /**
         * Continuous encoding of audio data.
         * @private
         */

    }, {
        key: 'onAudioProcess',
        value: function onAudioProcess(ev) {
            // send microphone data to LAME for MP3 encoding while recording
            var data = ev.inputBuffer.getChannelData(0);

            this.engine.postMessage({ cmd: 'encode', buf: data });
        }
    }]);

    return LamejsEngine;
}(RecordEngine);

// expose plugin


videojs.LamejsEngine = LamejsEngine;

exports.default = LamejsEngine;
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file libvorbis-plugin.js
 * @since 1.1.0
 */

var RecordEngine = videojs.getComponent('RecordEngine');

/**
 * Audio-only engine for the libvorbis.js library.
 *
 * @class
 * @augments videojs.RecordPlugin
 */

var LibVorbisEngine = function (_RecordEngine) {
    _inherits(LibVorbisEngine, _RecordEngine);

    function LibVorbisEngine() {
        _classCallCheck(this, LibVorbisEngine);

        return _possibleConstructorReturn(this, (LibVorbisEngine.__proto__ || Object.getPrototypeOf(LibVorbisEngine)).apply(this, arguments));
    }

    _createClass(LibVorbisEngine, [{
        key: 'setup',

        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;

            // setup libvorbis.js
            this.options = {
                audioBitsPerSecond: this.sampleRate
            };
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            this.chunks = [];
            this.engine = new VorbisMediaRecorder(this.inputStream, this.options);
            this.engine.ondataavailable = this.onData.bind(this);
            this.engine.onstop = this.onRecordingAvailable.bind(this);

            this.engine.start();
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.engine.stop();
        }

        /**
         * @private
         */

    }, {
        key: 'onData',
        value: function onData(event) {
            this.chunks.push(event.data);
        }

        /**
         * @private
         */

    }, {
        key: 'onRecordingAvailable',
        value: function onRecordingAvailable() {
            var blob = new Blob(this.chunks, { type: this.chunks[0].type });
            this.chunks = [];
            this.onStopRecording(blob);
        }
    }]);

    return LibVorbisEngine;
}(RecordEngine);

// expose plugin


videojs.LibVorbisEngine = LibVorbisEngine;

exports.default = LibVorbisEngine;
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file opus-recorder-plugin.js
 * @since 1.1.0
 */

var RecordEngine = videojs.getComponent('RecordEngine');

/**
 * Audio-only engine for the opus-recorder library.
 *
 * Audio is encoded using libopus.
 *
 * @class
 * @augments videojs.RecordEngine
 */

var OpusRecorderEngine = function (_RecordEngine) {
    _inherits(OpusRecorderEngine, _RecordEngine);

    function OpusRecorderEngine() {
        _classCallCheck(this, OpusRecorderEngine);

        return _possibleConstructorReturn(this, (OpusRecorderEngine.__proto__ || Object.getPrototypeOf(OpusRecorderEngine)).apply(this, arguments));
    }

    _createClass(OpusRecorderEngine, [{
        key: 'setup',

        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;

            // also supports 'audio/wav'; but make sure to use waveEncoder worker
            // in that case
            this.audioType = 'audio/ogg';

            this.engine = new Recorder({
                leaveStreamOpen: true,
                numberOfChannels: this.audioChannels,
                bufferLength: this.bufferSize,
                encoderSampleRate: this.sampleRate,
                encoderPath: this.audioWorkerURL
            });
            this.engine.ondataavailable = this.onRecordingAvailable.bind(this);

            this.audioContext = new AudioContext();
            this.audioSourceNode = this.audioContext.createMediaStreamSource(this.inputStream);
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            this.engine.start(this.audioSourceNode).then(function () {
                // recording started ok
            }).catch(function (err) {
                // can't start playback
                _this2.player().trigger('error', err);
            });
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.engine.stop();
        }

        /**
         * Pause recording.
         */

    }, {
        key: 'pause',
        value: function pause() {
            this.engine.pause();
        }

        /**
         * Resume recording.
         */

    }, {
        key: 'resume',
        value: function resume() {
            this.engine.resume();
        }

        /**
         * @private
         */

    }, {
        key: 'onRecordingAvailable',
        value: function onRecordingAvailable(data) {
            // Opus format stored in an Ogg container
            var blob = new Blob([data], { type: this.audioType });

            this.onStopRecording(blob);
        }
    }]);

    return OpusRecorderEngine;
}(RecordEngine);

// expose plugin


videojs.OpusRecorderEngine = OpusRecorderEngine;

exports.default = OpusRecorderEngine;
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file recorderjs-plugin.js
 * @since 1.1.0
 */

var RecordEngine = videojs.getComponent('RecordEngine');

/**
 * Audio-only engine for the recorder.js library.
 *
 * @class
 * @augments videojs.RecordEngine
 */

var RecorderjsEngine = function (_RecordEngine) {
    _inherits(RecorderjsEngine, _RecordEngine);

    function RecorderjsEngine() {
        _classCallCheck(this, RecorderjsEngine);

        return _possibleConstructorReturn(this, (RecorderjsEngine.__proto__ || Object.getPrototypeOf(RecorderjsEngine)).apply(this, arguments));
    }

    _createClass(RecorderjsEngine, [{
        key: 'setup',

        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;

            this.audioContext = new AudioContext();
            this.audioSourceNode = this.audioContext.createMediaStreamSource(this.inputStream);

            // setup recorder.js
            this.engine = new Recorder(this.audioSourceNode, {
                bufferLen: this.bufferSize,
                numChannels: this.audioChannels
            });
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            this.engine.record();
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.engine.stop();

            this.engine.exportWAV(this.onStopRecording.bind(this));

            this.engine.clear();
        }
    }]);

    return RecorderjsEngine;
}(RecordEngine);

// expose plugin


videojs.RecorderjsEngine = RecorderjsEngine;

exports.default = RecorderjsEngine;
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file browser-shim.js
 * @since 2.0.0
 */

var setSrcObject = function setSrcObject(stream, element, ignoreCreateObjectURL) {
    if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
        try {
            element.src = URL.createObjectURL(stream);
        } catch (e) {
            setSrcObject(stream, element, true);
            return;
        }
    } else if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        console.log('createObjectURL/srcObject both are not supported.');
    }
};

exports.default = setSrcObject;
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSafari = exports.isChrome = exports.isOpera = exports.isEdge = exports.detectBrowser = undefined;

var _window = require('global/window');

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Browser detector.
 *
 * @private
 * @return {object} result containing browser, version and minVersion
 *     properties.
 */
var detectBrowser = function detectBrowser() {
    // returned result object
    var result = {};
    result.browser = null;
    result.version = null;
    result.minVersion = null;

    // fail early if it's not a browser
    if (typeof _window2.default === 'undefined' || !_window2.default.navigator) {
        result.browser = 'Not a supported browser.';
        return result;
    }

    // Firefox
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
        result.minVersion = 31;
    } else if (navigator.webkitGetUserMedia) {
        // Chrome, Chromium, Webview, Opera
        if (_window2.default.webkitRTCPeerConnection) {
            result.browser = 'chrome';
            result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
            result.minVersion = 38;
        } else {
            // Safari (in an unpublished version) or unknown webkit-based.
            if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
                result.browser = 'safari';
                result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
                result.minVersion = 11;
            } else {
                // unknown webkit-based browser.
                result.browser = 'Unsupported webkit-based browser ' + 'with GUM support but no WebRTC support.';
                return result;
            }
        }
        // Edge
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
        result.browser = 'edge';
        result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        result.minVersion = 10547;
    } else if (navigator.mediaDevices && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        // Safari, with webkitGetUserMedia removed.
        result.browser = 'safari';
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    } else {
        // default fallthrough: not supported.
        result.browser = 'Not a supported browser.';
        return result;
    }

    return result;
};

/**
 * Extract browser version out of the provided user agent string.
 *
 * @private
 * @param {!string} uastring - userAgent string.
 * @param {!string} expr - Regular expression used as match criteria.
 * @param {!number} pos - position in the version string to be
 *     returned.
 * @return {!number} browser version.
 */
/**
 * @file detect-browser.js
 * @since 2.0.0
 */

var extractVersion = function extractVersion(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
};

var isEdge = function isEdge() {
    return detectBrowser().browser === 'edge';
};

var isSafari = function isSafari() {
    return detectBrowser().browser === 'safari';
};

var isOpera = function isOpera() {
    return !!_window2.default.opera || navigator.userAgent.indexOf('OPR/') !== -1;
};

var isChrome = function isChrome() {
    return detectBrowser().browser === 'chrome';
};

exports.detectBrowser = detectBrowser;
exports.isEdge = isEdge;
exports.isOpera = isOpera;
exports.isChrome = isChrome;
exports.isSafari = isSafari;
},{"global/window":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file format-time.js
 * @since 2.0.0
 */

/**
 * Format seconds as a time string, H:MM:SS, M:SS or M:SS:MMM.
 *
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide.
 *
 * @param {number} seconds - Number of seconds to be turned into a
 *     string.
 * @param {number} guide - Number (in seconds) to model the string
 *     after.
 * @param {number} msDisplayMax - Number (in milliseconds) to model the string
 *     after.
 * @return {string} Time formatted as H:MM:SS, M:SS or M:SS:MMM, e.g.
 *     0:00:12.
 * @private
 */
var formatTime = function formatTime(seconds, guide, msDisplayMax) {
    // Default to using seconds as guide
    seconds = seconds < 0 ? 0 : seconds;
    guide = guide || seconds;
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600),
        ms = Math.floor((seconds - s) * 1000);

    // handle invalid times
    if (isNaN(seconds) || seconds === Infinity) {
        // '-' is false for all relational operators (e.g. <, >=) so this
        // setting will add the minimum number of fields specified by the
        // guide
        h = m = s = ms = '-';
    }

    // Check if we need to show milliseconds
    if (guide > 0 && guide < msDisplayMax) {
        if (ms < 100) {
            if (ms < 10) {
                ms = '00' + ms;
            } else {
                ms = '0' + ms;
            }
        }
        ms = ':' + ms;
    } else {
        ms = '';
    }

    // Check if we need to show hours
    h = h > 0 || gh > 0 ? h + ':' : '';

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

    // Check if leading zero is need for seconds
    s = s < 10 ? '0' + s : s;

    return h + m + s + ms;
};

exports.default = formatTime;
},{}],18:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _animationDisplay = require('./controls/animation-display');

var _animationDisplay2 = _interopRequireDefault(_animationDisplay);

var _recordCanvas = require('./controls/record-canvas');

var _recordCanvas2 = _interopRequireDefault(_recordCanvas);

var _deviceButton = require('./controls/device-button');

var _deviceButton2 = _interopRequireDefault(_deviceButton);

var _cameraButton = require('./controls/camera-button');

var _cameraButton2 = _interopRequireDefault(_cameraButton);

var _recordToggle = require('./controls/record-toggle');

var _recordToggle2 = _interopRequireDefault(_recordToggle);

var _recordIndicator = require('./controls/record-indicator');

var _recordIndicator2 = _interopRequireDefault(_recordIndicator);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _formatTime = require('./utils/format-time');

var _formatTime2 = _interopRequireDefault(_formatTime);

var _browserShim = require('./utils/browser-shim');

var _browserShim2 = _interopRequireDefault(_browserShim);

var _detectBrowser = require('./utils/detect-browser');

var _recordRtc = require('./engine/record-rtc');

var _recordRtc2 = _interopRequireDefault(_recordRtc);

var _recordEngine = require('./engine/record-engine');

var _recordMode = require('./engine/record-mode');

var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file videojs.record.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The main file for the videojs-record project.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT license: https://github.com/collab-project/videojs-record/blob/master/LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Plugin = _video2.default.getPlugin('plugin');
var Player = _video2.default.getComponent('Player');

var AUTO = 'auto';

// monkey-patch play (#152)
Player.prototype.play = function play() {
    var retval = this.techGet_('play');
    // silence errors (unhandled promise from play)
    if (retval !== undefined && typeof retval.then === 'function') {
        retval.then(null, function (e) {});
    }
    return retval;
};

/**
 * Record audio/video/images using the Video.js player.
 *
 * @class
 * @augments videojs.Plugin
 */

var Record = function (_Plugin) {
    _inherits(Record, _Plugin);

    /**
     * The constructor function for the class.
     *
     * @param {(videojs.Player|Object)} player
     * @param {Object} options - Player options.
     */
    function Record(player, options) {
        _classCallCheck(this, Record);

        // setup plugin options
        var _this = _possibleConstructorReturn(this, (Record.__proto__ || Object.getPrototypeOf(Record)).call(this, player, options));

        _this.loadOptions();

        // (re)set recorder state
        _this.resetState();

        // add device button with icon based on type
        var deviceIcon = 'av-perm';
        switch (_this.getRecordType()) {
            case _recordMode.IMAGE_ONLY:
            case _recordMode.VIDEO_ONLY:
            case _recordMode.ANIMATION:
                deviceIcon = 'video-perm';
                break;
            case _recordMode.AUDIO_ONLY:
                deviceIcon = 'audio-perm';
                break;
        }
        _deviceButton2.default.prototype.buildCSSClass = function () {
            // use dynamic icon class
            return 'vjs-device-button vjs-control vjs-icon-' + deviceIcon;
        };
        player.deviceButton = new _deviceButton2.default(player, options);
        player.addChild(player.deviceButton);

        // add blinking record indicator
        player.recordIndicator = new _recordIndicator2.default(player, options);
        player.recordIndicator.hide();
        player.addChild(player.recordIndicator);

        // add canvas for recording and displaying image
        player.recordCanvas = new _recordCanvas2.default(player, options);
        player.recordCanvas.hide();
        player.addChild(player.recordCanvas);

        // add image for animation display
        player.animationDisplay = new _animationDisplay2.default(player, options);
        player.animationDisplay.hide();
        player.addChild(player.animationDisplay);

        // add camera button
        player.cameraButton = new _cameraButton2.default(player, options);
        player.cameraButton.hide();

        // add record toggle
        player.recordToggle = new _recordToggle2.default(player, options);
        player.recordToggle.hide();

        // wait until player ui is ready
        _this.player.one('ready', _this.setupUI.bind(_this));
        return _this;
    }

    /**
     * Setup plugin options.
     */


    _createClass(Record, [{
        key: 'loadOptions',
        value: function loadOptions() {
            var recordOptions = _video2.default.mergeOptions(_defaults2.default, this.player.options_.plugins.record);

            // record settings
            this.recordImage = recordOptions.image;
            this.recordAudio = recordOptions.audio;
            this.recordVideo = recordOptions.video;
            this.recordAnimation = recordOptions.animation;
            this.maxLength = recordOptions.maxLength;
            this.debug = recordOptions.debug;
            this.recordTimeSlice = recordOptions.timeSlice;

            // video/canvas settings
            this.videoFrameWidth = recordOptions.videoBitsPerSecond;
            this.videoFrameWidth = recordOptions.frameWidth;
            this.videoFrameHeight = recordOptions.frameHeight;
            this.videoRecorderType = recordOptions.videoRecorderType;
            this.videoMimeType = recordOptions.videoMimeType;

            // audio settings
            this.audioEngine = recordOptions.audioEngine;
            this.audioRecorderType = recordOptions.audioRecorderType;
            this.audioWorkerURL = recordOptions.audioWorkerURL;
            this.audioBufferSize = recordOptions.audioBufferSize;
            this.audioSampleRate = recordOptions.audioSampleRate;
            this.audioBitRate = recordOptions.audioBitRate;
            this.audioChannels = recordOptions.audioChannels;
            this.audioMimeType = recordOptions.audioMimeType;

            // animation settings
            this.animationFrameRate = recordOptions.animationFrameRate;
            this.animationQuality = recordOptions.animationQuality;
        }

        /**
         * Player UI is ready.
         * @private
         */

    }, {
        key: 'setupUI',
        value: function setupUI() {
            var _this2 = this;

            // insert custom controls on left-side of controlbar
            this.player.controlBar.addChild(this.player.cameraButton);
            this.player.controlBar.el().insertBefore(this.player.cameraButton.el(), this.player.controlBar.el().firstChild);
            this.player.controlBar.el().insertBefore(this.player.recordToggle.el(), this.player.controlBar.el().firstChild);

            // get rid of unused controls
            if (this.player.controlBar.remainingTimeDisplay !== undefined) {
                this.player.controlBar.remainingTimeDisplay.el().style.display = 'none';
            }
            if (this.player.controlBar.liveDisplay !== undefined) {
                this.player.controlBar.liveDisplay.el().style.display = 'none';
            }

            // loop feature is never used in this plugin
            this.player.loop(false);

            // tweak player UI based on type
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // reference to videojs-wavesurfer plugin
                    this.surfer = this.player.wavesurfer();
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    // customize controls
                    this.player.bigPlayButton.hide();

                    // loadedmetadata resets the durationDisplay for the
                    // first time
                    this.player.one('loadedmetadata', function () {
                        // display max record time
                        _this2.setDuration(_this2.maxLength);
                    });

                    // the native controls don't work for this UI so disable
                    // them no matter what
                    if (this.player.usingNativeControls_ === true) {
                        if (this.player.tech_.el_ !== undefined) {
                            this.player.tech_.el_.controls = false;
                        }
                    }

                    // clicking or tapping the player video element should not try
                    // to start playback
                    this.player.removeTechControlsListeners_();

                    if (this.player.options_.controls) {
                        // progress control isn't used by this plugin
                        this.player.controlBar.progressControl.hide();

                        // prevent controlbar fadeout
                        this.player.on('userinactive', function (event) {
                            _this2.player.userActive(true);
                        });

                        // videojs automatically hides the controls when no valid 'source'
                        // element is included in the video or audio tag. Don't. Ever again.
                        this.player.controlBar.show();
                        this.player.controlBar.el().style.display = 'flex';
                    }
                    break;
            }

            // disable time display events that constantly try to reset the current time
            // and duration values
            this.player.off('timeupdate');
            this.player.off('durationchange');
            this.player.off('loadedmetadata');

            // display max record time
            this.setDuration(this.maxLength);

            // hide play control
            this.player.controlBar.playToggle.hide();
        }

        /**
         * Indicates whether the plugin is currently recording or not.
         *
         * @return {boolean} Plugin currently recording or not.
         */

    }, {
        key: 'isRecording',
        value: function isRecording() {
            return this._recording;
        }

        /**
         * Indicates whether the plugin is currently processing recorded data
         * or not.
         *
         * @return {boolean} Plugin processing or not.
         */

    }, {
        key: 'isProcessing',
        value: function isProcessing() {
            return this._processing;
        }

        /**
         * Indicates whether the plugin is destroyed or not.
         *
         * @return {boolean} Plugin destroyed or not.
         */

    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this.player && this.player.children() === null;
        }

        /**
         * Open the browser's recording device selection dialog.
         */

    }, {
        key: 'getDevice',
        value: function getDevice() {
            // define device callbacks once
            if (this.deviceReadyCallback === undefined) {
                this.deviceReadyCallback = this.onDeviceReady.bind(this);
            }
            if (this.deviceErrorCallback === undefined) {
                this.deviceErrorCallback = this.onDeviceError.bind(this);
            }
            if (this.engineStopCallback === undefined) {
                this.engineStopCallback = this.onRecordComplete.bind(this);
            }
            // ask the browser to give the user access to the media device
            // and get a stream reference in the callback function
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // setup microphone
                    this.mediaType = {
                        audio: this.audioRecorderType === AUTO ? true : this.audioRecorderType,
                        video: false
                    };
                    // remove existing microphone listeners
                    this.surfer.surfer.microphone.un('deviceReady', this.deviceReadyCallback);
                    this.surfer.surfer.microphone.un('deviceError', this.deviceErrorCallback);

                    // setup new microphone listeners
                    this.surfer.surfer.microphone.on('deviceReady', this.deviceReadyCallback);
                    this.surfer.surfer.microphone.on('deviceError', this.deviceErrorCallback);

                    // disable existing playback events
                    this.surfer.setupPlaybackEvents(false);

                    // (re)set surfer liveMode
                    this.surfer.liveMode = true;
                    this.surfer.surfer.microphone.paused = false;

                    // open browser device selection dialog
                    this.surfer.surfer.microphone.start();
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                    // setup camera
                    this.mediaType = {
                        audio: false,
                        video: this.videoRecorderType === AUTO ? true : this.videoRecorderType
                    };
                    navigator.mediaDevices.getUserMedia({
                        audio: false,
                        video: this.getRecordType() === _recordMode.IMAGE_ONLY ? this.recordImage : this.recordVideo
                    }).then(this.onDeviceReady.bind(this)).catch(this.onDeviceError.bind(this));
                    break;

                case _recordMode.AUDIO_VIDEO:
                    // setup camera and microphone
                    this.mediaType = {
                        audio: this.audioRecorderType === AUTO ? true : this.audioRecorderType,
                        video: this.videoRecorderType === AUTO ? true : this.videoRecorderType
                    };
                    navigator.mediaDevices.getUserMedia({
                        audio: this.recordAudio,
                        video: this.recordVideo
                    }).then(this.onDeviceReady.bind(this)).catch(this.onDeviceError.bind(this));
                    break;

                case _recordMode.ANIMATION:
                    // setup camera
                    this.mediaType = {
                        // animated GIF
                        audio: false,
                        video: false,
                        gif: true
                    };
                    navigator.mediaDevices.getUserMedia({
                        audio: false,
                        video: this.recordAnimation
                    }).then(this.onDeviceReady.bind(this)).catch(this.onDeviceError.bind(this));
                    break;
            }
        }

        /**
         * Invoked when the device is ready.
         * @private
         * @param stream: LocalMediaStream instance.
         */

    }, {
        key: 'onDeviceReady',
        value: function onDeviceReady(stream) {
            var _this3 = this;

            this._deviceActive = true;

            // store reference to stream for stopping etc.
            this.stream = stream;

            // hide device selection button
            this.player.deviceButton.hide();

            // reset time (e.g. when stopDevice was used)
            this.setDuration(this.maxLength);
            this.setCurrentTime(0);

            // hide play/pause control (e.g. when stopDevice was used)
            this.player.controlBar.playToggle.hide();

            // reset playback listeners
            this.off(this.player, 'timeupdate', this.playbackTimeUpdate);
            this.off(this.player, 'ended', this.playbackTimeUpdate);

            // setup recording engine
            if (this.getRecordType() !== _recordMode.IMAGE_ONLY) {
                // currently libvorbis.js, recorder.js, opus-recorder and lamejs
                // are only supported in audio-only mode
                if (this.getRecordType() !== _recordMode.AUDIO_ONLY && (this.audioEngine === _recordEngine.LIBVORBISJS || this.audioEngine === _recordEngine.RECORDERJS || this.audioEngine === _recordEngine.LAMEJS || this.audioEngine === _recordEngine.OPUSRECORDER)) {
                    throw new Error('Currently ' + this.audioEngine + ' is only supported in audio-only mode.');
                }

                // get recorder class
                var EngineClass;
                switch (this.audioEngine) {
                    case _recordEngine.RECORDRTC:
                        // RecordRTC.js (default)
                        EngineClass = _video2.default.RecordRTCEngine;
                        break;

                    case _recordEngine.LIBVORBISJS:
                        // libvorbis.js
                        EngineClass = _video2.default.LibVorbisEngine;
                        break;

                    case _recordEngine.RECORDERJS:
                        // recorder.js
                        EngineClass = _video2.default.RecorderjsEngine;
                        break;

                    case _recordEngine.LAMEJS:
                        // lamejs
                        EngineClass = _video2.default.LamejsEngine;
                        break;

                    case _recordEngine.OPUSRECORDER:
                        // opus-recorder
                        EngineClass = _video2.default.OpusRecorderEngine;
                        break;

                    default:
                        // unknown engine
                        throw new Error('Unknown audioEngine: ' + this.audioEngine);
                }
                try {
                    // connect stream to recording engine
                    this.engine = new EngineClass(this.player, this.player.options_);
                } catch (err) {
                    console.error(err);
                    throw new Error('Could not load ' + this.audioEngine + ' plugin');
                }

                // listen for events
                this.engine.on('recordComplete', this.engineStopCallback);

                // audio settings
                this.engine.bufferSize = this.audioBufferSize;
                this.engine.sampleRate = this.audioSampleRate;
                this.engine.bitRate = this.audioBitRate;
                this.engine.audioChannels = this.audioChannels;
                this.engine.audioWorkerURL = this.audioWorkerURL;

                // mime type
                this.engine.mimeType = {
                    video: this.videoMimeType,
                    gif: 'image/gif'
                };
                if (this.audioMimeType !== null && this.audioMimeType !== AUTO) {
                    this.engine.mimeType.audio = this.audioMimeType;
                }

                // video/canvas settings
                this.engine.videoBitsPerSecond = this.videoBitsPerSecond;
                this.engine.video = {
                    width: this.videoFrameWidth,
                    height: this.videoFrameHeight
                };
                this.engine.canvas = {
                    width: this.videoFrameWidth,
                    height: this.videoFrameHeight
                };

                // animated GIF settings
                this.engine.quality = this.animationQuality;
                this.engine.frameRate = this.animationFrameRate;

                // timeSlice
                if (this.recordTimeSlice && this.recordTimeSlice > 0) {
                    this.engine.timeSlice = this.recordTimeSlice;
                    this.engine.onTimeStamp = this.onTimeStamp.bind(this);
                }

                // initialize recorder
                this.engine.setup(this.stream, this.mediaType, this.debug);

                // show elements that should never be hidden in animation,
                // audio and/or video modus
                var uiElements = [this.player.controlBar.currentTimeDisplay, this.player.controlBar.timeDivider, this.player.controlBar.durationDisplay];
                uiElements.forEach(function (element) {
                    if (element !== undefined) {
                        element.el().style.display = 'block';
                        element.show();
                    }
                });

                // show record button
                this.player.recordToggle.show();
            } else {
                // disable record indicator
                this.player.recordIndicator.disable();

                // setup UI for retrying snapshot (e.g. when stopDevice was
                // used)
                this.retrySnapshot();

                // reset and show camera button
                this.player.cameraButton.onStop();
                this.player.cameraButton.show();
            }

            // setup preview
            if (this.getRecordType() !== _recordMode.AUDIO_ONLY) {
                // show live preview
                this.mediaElement = this.player.el().firstChild;
                this.mediaElement.controls = false;

                // mute incoming audio for feedback loops
                this.mediaElement.muted = true;

                // hide the volume bar while it's muted
                this.displayVolumeControl(false);

                // load stream
                this.load(this.stream);

                // stream loading is async, so we wait until it's ready to play
                // the stream
                this.player.one('loadedmetadata', function () {
                    // start stream
                    _this3.mediaElement.play();

                    // forward to listeners
                    _this3.player.trigger('deviceReady');
                });
            } else {
                // forward to listeners
                this.player.trigger('deviceReady');
            }
        }

        /**
         * Invoked when an device error occurred.
         * @private
         */

    }, {
        key: 'onDeviceError',
        value: function onDeviceError(code) {
            this._deviceActive = false;

            // store code
            this.player.deviceErrorCode = code;

            // forward error to player
            this.player.trigger('deviceError');
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            var _this4 = this;

            if (!this.isProcessing()) {
                this._recording = true;

                // hide play/pause control
                this.player.controlBar.playToggle.hide();

                // reset playback listeners
                this.off(this.player, 'timeupdate', this.playbackTimeUpdate);
                this.off(this.player, 'ended', this.playbackTimeUpdate);

                // start preview
                switch (this.getRecordType()) {
                    case _recordMode.AUDIO_ONLY:
                        // disable playback events
                        this.surfer.setupPlaybackEvents(false);

                        // start/resume live audio visualization
                        this.surfer.surfer.microphone.paused = false;
                        this.surfer.liveMode = true;
                        this.surfer.surfer.microphone.play();
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                        // preview video stream in video element
                        this.startVideoPreview();
                        break;

                    case _recordMode.ANIMATION:
                        // hide the first frame
                        this.player.recordCanvas.hide();

                        // hide the animation
                        this.player.animationDisplay.hide();

                        // show preview video
                        this.mediaElement.style.display = 'block';

                        // for animations, capture the first frame
                        // that can be displayed as soon as recording
                        // is complete
                        this.captureFrame().then(function (result) {
                            // start video preview **after** capturing first frame
                            _this4.startVideoPreview();
                        });
                        break;
                }

                // start recording
                switch (this.getRecordType()) {
                    case _recordMode.IMAGE_ONLY:
                        // create snapshot
                        this.createSnapshot();

                        // notify UI
                        this.player.trigger('startRecord');
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                    case _recordMode.ANIMATION:
                        // wait for media stream on video element to actually load
                        this.player.one('loadedmetadata', function () {
                            // start actually recording process
                            _this4.startRecording();
                        });
                        break;

                    default:
                        // all resources have already loaded, so we can start
                        // recording right away
                        this.startRecording();
                }
            }
        }

        /**
         * Start recording.
         * @private
         */

    }, {
        key: 'startRecording',
        value: function startRecording() {
            // register starting point
            this.paused = false;
            this.pauseTime = this.pausedTime = 0;
            this.startTime = new Date().getTime();

            // start countdown
            this.countDown = this.player.setInterval(this.onCountDown.bind(this), 100);

            // cleanup previous recording
            if (this.engine !== undefined) {
                this.engine.dispose();
            }

            // start recording stream
            this.engine.start();

            // notify UI
            this.player.trigger('startRecord');
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            if (!this.isProcessing()) {
                this._recording = false;
                this._processing = true;

                if (this.getRecordType() !== _recordMode.IMAGE_ONLY) {
                    // notify UI
                    this.player.trigger('stopRecord');

                    // stop countdown
                    this.player.clearInterval(this.countDown);

                    // stop recording stream (result will be available async)
                    if (this.engine) {
                        this.engine.stop();
                    }
                } else {
                    if (this.player.recordedData) {
                        // notify listeners that image data is (already) available
                        this.player.trigger('finishRecord');
                    }
                }
            }
        }

        /**
         * Stop device(s) and recording if active.
         */

    }, {
        key: 'stopDevice',
        value: function stopDevice() {
            if (this.isRecording()) {
                // stop stream once recorded data is available,
                // otherwise it'll break recording
                this.player.one('finishRecord', this.stopStream.bind(this));

                // stop recording
                this.stop();
            } else {
                // stop stream now, since there's no recorded data available
                this.stopStream();
            }
        }

        /**
         * Stop stream and device.
         */

    }, {
        key: 'stopStream',
        value: function stopStream() {
            // stop stream and device
            if (this.stream) {
                this._deviceActive = false;

                if (this.getRecordType() === _recordMode.AUDIO_ONLY) {
                    // make the microphone plugin stop it's device
                    this.surfer.surfer.microphone.stopDevice();
                    return;
                }
                this.stream.getTracks().forEach(function (stream) {
                    stream.stop();
                });
            }
        }

        /**
         * Pause recording.
         */

    }, {
        key: 'pause',
        value: function pause() {
            if (!this.paused) {
                this.pauseTime = new Date().getTime();
                this.paused = true;

                this.engine.pause();
            }
        }

        /**
         * Resume recording.
         */

    }, {
        key: 'resume',
        value: function resume() {
            if (this.paused) {
                this.pausedTime += new Date().getTime() - this.pauseTime;

                this.engine.resume();
                this.paused = false;
            }
        }

        /**
         * Invoked when recording completed and the resulting stream is
         * available.
         * @private
         */

    }, {
        key: 'onRecordComplete',
        value: function onRecordComplete() {
            var _this5 = this;

            // store reference to recorded stream data
            this.player.recordedData = this.engine.recordedData;

            // change the replay button back to a play button
            this.player.controlBar.playToggle.removeClass('vjs-ended');
            this.player.controlBar.playToggle.show();

            // notify listeners that data is available
            this.player.trigger('finishRecord');

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // pause player so user can start playback
                    this.surfer.pause();

                    // setup events for playback
                    this.surfer.setupPlaybackEvents(true);

                    // display loader
                    this.player.loadingSpinner.show();

                    // restore interaction with controls after waveform
                    // rendering is complete
                    this.surfer.surfer.once('ready', function () {
                        _this5._processing = false;
                    });

                    // visualize recorded stream
                    this.load(this.player.recordedData);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                    // pausing the player so we can visualize the recorded data
                    // will trigger an async video.js 'pause' event that we
                    // have to wait for.
                    this.player.one('pause', function () {
                        // video data is ready
                        _this5._processing = false;

                        // hide loader
                        _this5.player.loadingSpinner.hide();

                        // show stream total duration
                        _this5.setDuration(_this5.streamDuration);

                        // update time during playback and at end
                        _this5.on(_this5.player, 'timeupdate', _this5.playbackTimeUpdate);
                        _this5.on(_this5.player, 'ended', _this5.playbackTimeUpdate);

                        // unmute local audio during playback
                        if (_this5.getRecordType() === _recordMode.AUDIO_VIDEO) {
                            _this5.mediaElement.muted = false;

                            // show the volume bar when it's unmuted
                            _this5.displayVolumeControl(true);
                        }

                        // load recorded media
                        if ((0, _detectBrowser.isChrome)() && _this5.getRecordType() === _recordMode.AUDIO_VIDEO) {
                            // use video property on Chrome
                            _this5.load(_this5.player.recordedData.video);
                        } else {
                            _this5.load(_this5.player.recordedData);
                        }
                    });

                    // pause player so user can start playback
                    this.player.pause();
                    break;

                case _recordMode.ANIMATION:
                    // animation data is ready
                    this._processing = false;

                    // hide loader
                    this.player.loadingSpinner.hide();

                    // show animation total duration
                    this.setDuration(this.streamDuration);

                    // hide preview video
                    this.mediaElement.style.display = 'none';

                    // show the first frame
                    this.player.recordCanvas.show();

                    // pause player so user can start playback
                    this.player.pause();

                    // show animation on play
                    this.on(this.player, 'play', this.showAnimation);

                    // hide animation on pause
                    this.on(this.player, 'pause', this.hideAnimation);
                    break;
            }
        }

        /**
         * Invoked during recording and displays the remaining time.
         * @private
         */

    }, {
        key: 'onCountDown',
        value: function onCountDown() {
            if (!this.paused) {
                var now = new Date().getTime();
                var duration = this.maxLength;
                var currentTime = (now - (this.startTime + this.pausedTime)) / 1000;

                this.streamDuration = currentTime;

                if (currentTime >= duration) {
                    // at the end
                    currentTime = duration;

                    // stop recording
                    this.stop();
                }

                // update duration
                this.setDuration(duration);

                // update current time
                this.setCurrentTime(currentTime, duration);

                // notify listeners
                this.player.trigger('progressRecord');
            }
        }

        /**
         * Get the current time of the recorded stream during playback.
         *
         * Returns 0 if no recording is available (yet).
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            var currentTime = isNaN(this.streamCurrentTime) ? 0 : this.streamCurrentTime;

            if (this.getRecordType() === _recordMode.AUDIO_ONLY) {
                currentTime = this.surfer.getCurrentTime();
            }

            return currentTime;
        }

        /**
         * Updates the player's element displaying the current time.
         *
         * @private
         * @param {number} [currentTime=0] - Current position of the
         *    playhead (in seconds).
         * @param {number} [duration=0] - Duration in seconds.
         */

    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(currentTime, duration) {
            currentTime = isNaN(currentTime) ? 0 : currentTime;
            duration = isNaN(duration) ? 0 : duration;

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    this.surfer.setCurrentTime(currentTime, duration);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    this.streamCurrentTime = Math.min(currentTime, duration);

                    // update current time display component
                    this.player.controlBar.currentTimeDisplay.formattedTime_ = this.player.controlBar.currentTimeDisplay.contentEl().lastChild.textContent = (0, _formatTime2.default)(this.streamCurrentTime, duration, this.msDisplayMax);
                    break;
            }
        }

        /**
         * Get the length of the recorded stream in seconds.
         *
         * Returns 0 if no recording is available (yet).
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            var duration = isNaN(this.streamDuration) ? 0 : this.streamDuration;

            return duration;
        }

        /**
         * Updates the player's element displaying the duration time.
         *
         * @param {number} [duration=0] - Duration in seconds.
         * @private
         */

    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            duration = isNaN(duration) ? 0 : duration;

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    this.surfer.setDuration(duration);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    // update duration display component
                    this.player.controlBar.durationDisplay.formattedTime_ = this.player.controlBar.durationDisplay.contentEl().lastChild.textContent = (0, _formatTime2.default)(duration, duration, this.msDisplayMax);
                    break;
            }
        }

        /**
         * Start loading data.
         *
         * @param {(string|blob|file)} url - Either the URL of the media file,
         *     a Blob, a File object or MediaStream.
         */

    }, {
        key: 'load',
        value: function load(url) {
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // visualize recorded Blob stream
                    this.surfer.load(url);
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    if (url instanceof Blob || url instanceof File) {
                        // assign blob using createObjectURL
                        (0, _browserShim2.default)(url, this.mediaElement, false);
                    } else {
                        // assign stream without createObjectURL
                        (0, _browserShim2.default)(url, this.mediaElement, true);
                    }
                    break;
            }
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with one or more names for the particular
         *     blob(s) you want to save. File extensions are added automatically.
         *     For example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            if (this.engine && name !== undefined) {
                this.engine.saveAs(name);
            }
        }

        /**
         * Destroy plugin only.
         *
         * Use `destroy` to remove the plugin and the player.
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            // disable common event listeners
            this.player.off('ready');
            this.player.off('userinactive');
            this.player.off('loadedmetadata');

            // prevent callbacks if recording is in progress
            if (this.engine) {
                this.engine.dispose();
                this.engine.off('recordComplete', this.engineStopCallback);
            }

            // stop recording and device
            this.stop();
            this.stopDevice();

            // stop countdown
            this.player.clearInterval(this.countDown);

            // dispose wavesurfer.js
            if (this.getRecordType() == _recordMode.AUDIO_ONLY) {
                if (this.surfer) {
                    // also disposes player
                    this.surfer.destroy();
                }
            }

            this.resetState();

            _get(Record.prototype.__proto__ || Object.getPrototypeOf(Record.prototype), 'dispose', this).call(this);
        }

        /**
         * Destroy plugin and players and cleanup resources.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.player.dispose();
        }

        /**
         * Reset the plugin.
         */

    }, {
        key: 'reset',
        value: function reset() {
            var _this6 = this;

            // prevent callbacks if recording is in progress
            if (this.engine) {
                this.engine.dispose();
                this.engine.off('recordComplete', this.engineStopCallback);
            }

            // stop recording and device
            this.stop();
            this.stopDevice();

            // stop countdown
            this.player.clearInterval(this.countDown);

            // reset options
            this.loadOptions();

            // reset recorder state
            this.resetState();

            // reset record time
            this.setDuration(this.maxLength);
            this.setCurrentTime(0);

            // reset player
            this.player.reset();
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    if (this.surfer && this.surfer.surfer) {
                        // empty last frame
                        this.surfer.surfer.empty();
                    }
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.ANIMATION:
                    // reset UI
                    this.player.recordCanvas.hide();
                    this.player.cameraButton.hide();
                    break;
            }

            // hide play control
            this.player.controlBar.playToggle.hide();

            // show device selection button
            this.player.deviceButton.show();

            // hide record button
            this.player.recordToggle.hide();

            // loadedmetadata resets the durationDisplay for the
            // first time
            this.player.one('loadedmetadata', function () {
                // display max record time
                _this6.setDuration(_this6.maxLength);
            });
        }

        /**
         * Reset the plugin recorder state.
         * @private
         */

    }, {
        key: 'resetState',
        value: function resetState() {
            this._recording = false;
            this._processing = false;
            this._deviceActive = false;
            this.devices = [];
        }

        /**
         * Get recorder type.
         */

    }, {
        key: 'getRecordType',
        value: function getRecordType() {
            return (0, _recordMode.getRecorderMode)(this.recordImage, this.recordAudio, this.recordVideo, this.recordAnimation);
        }

        /**
         * Create and display snapshot image.
         * @private
         */

    }, {
        key: 'createSnapshot',
        value: function createSnapshot() {
            var _this7 = this;

            this.captureFrame().then(function (result) {
                // turn the canvas data into base64 data with a PNG header
                _this7.player.recordedData = result.toDataURL('image/png');

                // hide preview video
                _this7.mediaElement.style.display = 'none';

                // show the snapshot
                _this7.player.recordCanvas.show();

                // stop recording
                _this7.stop();
            });
        }

        /**
         * Reset UI for retrying a snapshot image.
         * @private
         */

    }, {
        key: 'retrySnapshot',
        value: function retrySnapshot() {
            this._processing = false;

            // retry: hide the snapshot
            this.player.recordCanvas.hide();

            // show preview video
            this.player.el().firstChild.style.display = 'block';
        }

        /**
         * Capture frame from camera and copy data to canvas.
         * @private
         */

    }, {
        key: 'captureFrame',
        value: function captureFrame() {
            var _this8 = this;

            var detected = (0, _detectBrowser.detectBrowser)();
            var recordCanvas = this.player.recordCanvas.el().firstChild;

            // set the canvas size to the dimensions of the camera,
            // which also wipes the content of the canvas
            recordCanvas.width = this.player.width();
            recordCanvas.height = this.player.height();

            return new Promise(function (resolve, reject) {
                // MediaCapture is only supported on:
                // - Chrome 60 and newer (see
                // https://github.com/w3c/mediacapture-image/blob/gh-pages/implementation-status.md)
                // - Firefox behind flag (https://bugzilla.mozilla.org/show_bug.cgi?id=888177)
                //
                // importing ImageCapture can fail when enabling chrome flag is still required.
                // if so; ignore and continue
                if (detected.browser === 'chrome' && detected.version >= 60 && (typeof ImageCapture === 'undefined' ? 'undefined' : _typeof(ImageCapture)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
                    try {
                        var track = _this8.stream.getVideoTracks()[0];
                        var imageCapture = new ImageCapture(track);
                        var photoSettings = {
                            imageWidth: recordCanvas.width,
                            imageHeight: recordCanvas.height
                        };

                        // take picture
                        imageCapture.takePhoto(photoSettings).then(function (blob) {
                            return createImageBitmap(blob);
                        }).then(function (imageBitmap) {
                            // get a frame and copy it onto the canvas
                            _this8.drawCanvas(recordCanvas, imageBitmap);

                            // notify others
                            resolve(recordCanvas);
                        });
                        return;
                    } catch (err) {}
                }
                // no ImageCapture available: do it the oldskool way

                // get a frame and copy it onto the canvas
                _this8.drawCanvas(recordCanvas, _this8.mediaElement);

                // notify others
                resolve(recordCanvas);
            });
        }

        /**
         * Draw image frame on canvas element.
         * @private
         */

    }, {
        key: 'drawCanvas',
        value: function drawCanvas(canvas, element) {
            canvas.getContext('2d').drawImage(element, 0, 0, canvas.width, canvas.height);
        }

        /**
         * Start preview of video stream.
         * @private
         */

    }, {
        key: 'startVideoPreview',
        value: function startVideoPreview() {
            // disable playback events
            this.off('timeupdate');
            this.off('durationchange');
            this.off('loadedmetadata');
            this.off('play');

            // mute local audio
            this.mediaElement.muted = true;

            // hide volume control to prevent feedback
            this.displayVolumeControl(false);

            // start or resume live preview
            this.load(this.stream);
            this.mediaElement.play();
        }

        /**
         * Show animated GIF.
         * @private
         */

    }, {
        key: 'showAnimation',
        value: function showAnimation() {
            var animationDisplay = this.player.animationDisplay.el().firstChild;

            // set the image size to the dimensions of the recorded animation
            animationDisplay.width = this.player.width();
            animationDisplay.height = this.player.height();

            // hide the first frame
            this.player.recordCanvas.hide();

            // show the animation
            (0, _browserShim2.default)(this.player.recordedData, animationDisplay, false);
            this.player.animationDisplay.show();
        }

        /**
         * Hide animated GIF.
         * @private
         */

    }, {
        key: 'hideAnimation',
        value: function hideAnimation() {
            // show the first frame
            this.player.recordCanvas.show();

            // hide the animation
            this.player.animationDisplay.hide();
        }

        /**
         * Update time during playback.
         * @private
         */

    }, {
        key: 'playbackTimeUpdate',
        value: function playbackTimeUpdate() {
            this.setCurrentTime(this.player.currentTime(), this.streamDuration);
        }

        /**
         * Received new timestamp (when timeSlice option is enabled).
         * @private
         */

    }, {
        key: 'onTimeStamp',
        value: function onTimeStamp(current, all) {
            this.player.currentTimestamp = current;
            this.player.allTimestamps = all;

            // get blob (only for MediaStreamRecorder)
            var internal;
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    internal = this.engine.engine.audioRecorder;
                    break;

                case _recordMode.ANIMATION:
                    internal = this.engine.engine.gifRecorder;
                    break;

                default:
                    internal = this.engine.engine.videoRecorder;
            }
            internal = internal.getInternalRecorder();
            if (internal instanceof MediaStreamRecorder === true) {
                this.player.recordedData = internal.getArrayOfBlobs();

                // inject file info for newest blob
                this.engine.addFileInfo(this.player.recordedData[this.player.recordedData.length - 1]);
            }

            // notify others
            this.player.trigger('timestamp');
        }

        /**
         * Collects information about the media input and output devices
         * available on the system.
         *
         * Returns an array.
         */

    }, {
        key: 'enumerateDevices',
        value: function enumerateDevices() {
            var _this9 = this;

            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                this.player.enumerateErrorCode = 'enumerateDevices() not supported.';
                this.player.trigger('enumerateError');
                return;
            }

            // List cameras and microphones.
            navigator.mediaDevices.enumerateDevices(this).then(function (devices) {
                _this9.devices = [];
                devices.forEach(function (device) {
                    _this9.devices.push(device);
                });

                // notify listeners
                _this9.player.trigger('enumerateReady');
            }).catch(function (err) {
                _this9.player.enumerateErrorCode = err;
                _this9.player.trigger('enumerateError');
            });
        }

        /**
         * Change the audio output device.
         *
         * @param {string} deviceId - Id of audio output device.
         */

    }, {
        key: 'setAudioOutput',
        value: function setAudioOutput(deviceId) {
            var _this10 = this;

            var errorMessage = void 0;

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // use wavesurfer
                    this.surfer.surfer.setSinkId(deviceId).then(function (result) {
                        // notify listeners
                        _this10.player.trigger('audioOutputReady');
                    }).catch(function (err) {
                        errorMessage = err;
                    });
                    break;

                default:
                    var element = player.tech_.el_;
                    if (deviceId) {
                        if (typeof element.sinkId !== 'undefined') {
                            element.setSinkId(deviceId).then(function (result) {
                                // notify listeners
                                _this10.player.trigger('audioOutputReady');
                            }).catch(function (err) {
                                errorMessage = err;
                            });
                        } else {
                            errorMessage = 'Browser does not support audio output device selection.';
                        }
                    } else {
                        errorMessage = 'Invalid deviceId: ' + deviceId;
                    }
                    break;
            }

            // error if we get here: notify listeners
            if (errorMessage) {
                this.player.trigger('error', errorMessage);
            }
        }

        /**
         * Show or hide the volume menu.
         *
         * @private
         * @param {boolean} display - Hide/show volume control.
         */

    }, {
        key: 'displayVolumeControl',
        value: function displayVolumeControl(display) {
            if (this.player.controlBar.volumePanel !== undefined) {
                if (display === true) {
                    display = 'flex';
                } else {
                    display = 'none';
                }
                this.player.controlBar.volumePanel.el().style.display = display;
            }
        }
    }]);

    return Record;
}(Plugin);

// version nr gets replaced during build


Record.VERSION = 'dev';

// register plugin
_video2.default.Record = Record;
_video2.default.registerPlugin('record', Record);

// export plugin
module.exports = {
    Record: Record
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./controls/animation-display":1,"./controls/camera-button":2,"./controls/device-button":3,"./controls/record-canvas":4,"./controls/record-indicator":5,"./controls/record-toggle":6,"./defaults":7,"./engine/record-engine":8,"./engine/record-mode":9,"./engine/record-rtc":10,"./utils/browser-shim":15,"./utils/detect-browser":16,"./utils/format-time":17}],19:[function(require,module,exports){
(function (global){
var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
/* eslint-disable no-var */
/* eslint-env qunit */
var q = window.QUnit;

var vr = require('../es5/videojs.record.js');

q.module('Browserify Require videojs.record');
q.test('videojs.record should be requirable and bundled via browserify', function(assert) {
    assert.ok(vr, 'videojs.record is required properly');
});

var lame = require('../es5/plugins/lamejs-plugin.js');

q.module('Browserify Require lamejs');
q.test('lamejs plugin should be requirable and bundled via browserify', function(assert) {
    assert.ok(lame, 'videojs.record.lamejs is required properly');
});


var libvorbis = require('../es5/plugins/libvorbis-plugin.js');

q.module('Browserify Require libvorbis');
q.test('libvorbis plugin should be requirable and bundled via browserify', function(assert) {
    assert.ok(libvorbis, 'videojs.record.libvorbis is required properly');
});


var opus = require('../es5/plugins/opus-recorder-plugin.js');

q.module('Browserify Require opus-recorder');
q.test('opus-recorder plugin should be requirable and bundled via browserify', function(assert) {
    assert.ok(opus, 'videojs.record.opus-recorder is required properly');
});


var recorderjs = require('../es5/plugins/recorderjs-plugin.js');

q.module('Browserify Require recorderjs');
q.test('recorderjs plugin should be requirable and bundled via browserify', function(assert) {
    assert.ok(recorderjs, 'videojs.record.recorderjs is required properly');
});

},{"../es5/plugins/lamejs-plugin.js":11,"../es5/plugins/libvorbis-plugin.js":12,"../es5/plugins/opus-recorder-plugin.js":13,"../es5/plugins/recorderjs-plugin.js":14,"../es5/videojs.record.js":18}]},{},[20])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvY29udHJvbHMvYW5pbWF0aW9uLWRpc3BsYXkuanMiLCJlczUvY29udHJvbHMvY2FtZXJhLWJ1dHRvbi5qcyIsImVzNS9jb250cm9scy9kZXZpY2UtYnV0dG9uLmpzIiwiZXM1L2NvbnRyb2xzL3JlY29yZC1jYW52YXMuanMiLCJlczUvY29udHJvbHMvcmVjb3JkLWluZGljYXRvci5qcyIsImVzNS9jb250cm9scy9yZWNvcmQtdG9nZ2xlLmpzIiwiZXM1L2RlZmF1bHRzLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtZW5naW5lLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtbW9kZS5qcyIsImVzNS9lbmdpbmUvcmVjb3JkLXJ0Yy5qcyIsImVzNS9wbHVnaW5zL2xhbWVqcy1wbHVnaW4uanMiLCJlczUvcGx1Z2lucy9saWJ2b3JiaXMtcGx1Z2luLmpzIiwiZXM1L3BsdWdpbnMvb3B1cy1yZWNvcmRlci1wbHVnaW4uanMiLCJlczUvcGx1Z2lucy9yZWNvcmRlcmpzLXBsdWdpbi5qcyIsImVzNS91dGlscy9icm93c2VyLXNoaW0uanMiLCJlczUvdXRpbHMvZGV0ZWN0LWJyb3dzZXIuanMiLCJlczUvdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJlczUvdmlkZW9qcy5yZWNvcmQuanMiLCJub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsInRlc3QvYnJvd3NlcmlmeS10ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSBhbmltYXRpb24tZGlzcGxheS5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxyXG4gKiBJbWFnZSBmb3IgZGlzcGxheWluZyBhbmltYXRlZCBHSUYgaW1hZ2UuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5Db21wb25lbnRcclxuKi9cblxudmFyIEFuaW1hdGlvbkRpc3BsYXkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0aW9uRGlzcGxheSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQW5pbWF0aW9uRGlzcGxheSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0aW9uRGlzcGxheSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFuaW1hdGlvbkRpc3BsYXkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBbmltYXRpb25EaXNwbGF5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0aW9uRGlzcGxheSwgW3tcbiAgICBrZXk6ICdjcmVhdGVFbCcsXG5cblxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBgQW5pbWF0aW9uRGlzcGxheWBzIERPTSBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiAgICAgICAgIFRoZSBkb20gZWxlbWVudCB0aGF0IGdldHMgY3JlYXRlZC5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KEFuaW1hdGlvbkRpc3BsYXkucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0aW9uRGlzcGxheS5wcm90b3R5cGUpLCAnY3JlYXRlRWwnLCB0aGlzKS5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1hbmltYXRpb24tZGlzcGxheScsXG4gICAgICAgIGlubmVySFRNTDogJzxpbWcgLz4nXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0aW9uRGlzcGxheTtcbn0oQ29tcG9uZW50KTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdBbmltYXRpb25EaXNwbGF5JywgQW5pbWF0aW9uRGlzcGxheSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFuaW1hdGlvbkRpc3BsYXk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgY2FtZXJhLWJ1dHRvbi5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcclxuICogQnV0dG9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGNyZWF0ZSBhbmQgcmV0cnkgc25hcHNob3QgaW1hZ2UuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5CdXR0b25cclxuKi9cblxudmFyIENhbWVyYUJ1dHRvbiA9IGZ1bmN0aW9uIChfQnV0dG9uKSB7XG4gICAgX2luaGVyaXRzKENhbWVyYUJ1dHRvbiwgX0J1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBDYW1lcmFCdXR0b24oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1lcmFCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2FtZXJhQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FtZXJhQnV0dG9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbWVyYUJ1dHRvbiwgW3tcbiAgICAgICAga2V5OiAnYnVpbGRDU1NDbGFzcycsXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnVpbGRzIHRoZSBkZWZhdWx0IERPTSBgY2xhc3NOYW1lYC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAgICAgKiAgICAgICAgIFRoZSBET00gYGNsYXNzTmFtZWAgZm9yIHRoaXMgb2JqZWN0LlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRDU1NDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiAndmpzLWNhbWVyYS1idXR0b24gdmpzLWNvbnRyb2wgdmpzLWJ1dHRvbiB2anMtaWNvbi1waG90by1jYW1lcmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5hYmxlIHRoZSBgQ2FtZXJhQnV0dG9uYCBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIGFjdGl2YXRlZCBvciBjbGlja2VkLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgICAgICAgX2dldChDYW1lcmFCdXR0b24ucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FtZXJhQnV0dG9uLnByb3RvdHlwZSksICdlbmFibGUnLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyXywgJ3N0YXJ0UmVjb3JkJywgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5wbGF5ZXJfLCAnc3RvcFJlY29yZCcsIHRoaXMub25TdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERpc2FibGUgdGhlIGBDYW1lcmFCdXR0b25gIGVsZW1lbnQgc28gdGhhdCBpdCBjYW5ub3QgYmUgYWN0aXZhdGVkIG9yIGNsaWNrZWQuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2FibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgICAgICAgIF9nZXQoQ2FtZXJhQnV0dG9uLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhbWVyYUJ1dHRvbi5wcm90b3R5cGUpLCAnZGlzYWJsZScsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyXywgJ3N0YXJ0UmVjb3JkJywgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyXywgJ3N0b3BSZWNvcmQnLCB0aGlzLm9uU3RvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gZXZlbnRcclxuICAgICAgICAgKiAgICAgICAgVGhlIGB0YXBgIG9yIGBjbGlja2AgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBiZVxyXG4gICAgICAgICAqICAgICAgICBjYWxsZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyB0YXBcclxuICAgICAgICAgKiBAbGlzdGVucyBjbGlja1xyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVDbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY29yZGVyID0gdGhpcy5wbGF5ZXJfLnJlY29yZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXJlY29yZGVyLmlzUHJvY2Vzc2luZygpKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNuYXBzaG90XG4gICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0cnlcbiAgICAgICAgICAgICAgICByZWNvcmRlci5yZXRyeVNuYXBzaG90KCk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldCBjYW1lcmEgYnV0dG9uXG4gICAgICAgICAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCB0aGUgdmpzLWljb24tcmVwbGF5IGNsYXNzIHRvIHRoZSBlbGVtZW50IHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR+RXZlbnR9IFtldmVudF1cclxuICAgICAgICAgKiAgICAgICAgVGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgZnVuY3Rpb24gdG8gcnVuLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGxpc3RlbnMgUGxheWVyI3N0YXJ0UmVjb3JkXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcGhvdG8tY2FtZXJhJyk7XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1yZXBsYXknKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgICAgICAgdGhpcy5jb250cm9sVGV4dCgnUmV0cnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCB0aGUgdmpzLWljb24tcGhvdG8tY2FtZXJhIGNsYXNzIHRvIHRoZSBlbGVtZW50IHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR+RXZlbnR9IFtldmVudF1cclxuICAgICAgICAgKiAgICAgICAgVGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgZnVuY3Rpb24gdG8gcnVuLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGxpc3RlbnMgUGxheWVyI3N0b3BSZWNvcmRcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RvcChldmVudCkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcmVwbGF5Jyk7XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1waG90by1jYW1lcmEnKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgICAgICAgdGhpcy5jb250cm9sVGV4dCgnSW1hZ2UnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW1lcmFCdXR0b247XG59KEJ1dHRvbik7XG5cbi8qKlxyXG4gKiBUaGUgdGV4dCB0aGF0IHNob3VsZCBkaXNwbGF5IG92ZXIgdGhlIGBDYW1lcmFCdXR0b25gcyBjb250cm9scy4gQWRkZWQgZm9yIGxvY2FsaXphdGlvbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHByaXZhdGVcclxuICovXG5cblxuQ2FtZXJhQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnSW1hZ2UnO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NhbWVyYUJ1dHRvbicsIENhbWVyYUJ1dHRvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYUJ1dHRvbjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIGRldmljZS1idXR0b24uanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG52YXIgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXHJcbiAqIEJ1dHRvbiB0byBzZWxlY3QgcmVjb3JkaW5nIGRldmljZS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkJ1dHRvblxyXG4qL1xuXG52YXIgRGV2aWNlQnV0dG9uID0gZnVuY3Rpb24gKF9CdXR0b24pIHtcbiAgX2luaGVyaXRzKERldmljZUJ1dHRvbiwgX0J1dHRvbik7XG5cbiAgZnVuY3Rpb24gRGV2aWNlQnV0dG9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZpY2VCdXR0b24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEZXZpY2VCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXZpY2VCdXR0b24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEZXZpY2VCdXR0b24sIFt7XG4gICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhpcyBidXR0b24gZ2V0czpcclxuICAgICAqXHJcbiAgICAgKiAtIENsaWNrZWQgKHZpYSB0aGUgYGNsaWNrYCBldmVudCwgbGlzdGVuaW5nIHN0YXJ0cyBpbiB0aGUgY29uc3RydWN0b3IpXHJcbiAgICAgKiAtIFRhcHBlZCAodmlhIHRoZSBgdGFwYCBldmVudCwgbGlzdGVuaW5nIHN0YXJ0cyBpbiB0aGUgY29uc3RydWN0b3IpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gZXZlbnRcclxuICAgICAqICAgICAgICBUaGUgYGtleWRvd25gLCBgdGFwYCwgb3IgYGNsaWNrYCBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIGJlXHJcbiAgICAgKiAgICAgICAgY2FsbGVkLlxyXG4gICAgICpcclxuICAgICAqIEBsaXN0ZW5zIHRhcFxyXG4gICAgICogQGxpc3RlbnMgY2xpY2tcclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgLy8gb3BlbiBkZXZpY2UgZGlhbG9nXG4gICAgICB0aGlzLnBsYXllcl8ucmVjb3JkKCkuZ2V0RGV2aWNlKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERldmljZUJ1dHRvbjtcbn0oQnV0dG9uKTtcblxuLyoqXHJcbiAqIFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGRpc3BsYXkgb3ZlciB0aGUgYERldmljZUJ1dHRvbmBzIGNvbnRyb2xzLiBBZGRlZCBmb3IgbG9jYWxpemF0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cblxuXG5EZXZpY2VCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdEZXZpY2UnO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0RldmljZUJ1dHRvbicsIERldmljZUJ1dHRvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERldmljZUJ1dHRvbjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgcmVjb3JkLWNhbnZhc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxyXG4gKiBDYW52YXMgZm9yIGRpc3BsYXlpbmcgc25hcHNob3QgaW1hZ2UuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5Db21wb25lbnRcclxuKi9cblxudmFyIFJlY29yZENhbnZhcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWNvcmRDYW52YXMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlY29yZENhbnZhcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkQ2FudmFzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkQ2FudmFzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkQ2FudmFzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVjb3JkQ2FudmFzLCBbe1xuICAgIGtleTogJ2NyZWF0ZUVsJyxcblxuXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGBSZWNvcmRDYW52YXNgcyBET00gZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogICAgICAgICBUaGUgZG9tIGVsZW1lbnQgdGhhdCBnZXRzIGNyZWF0ZWQuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWwoKSB7XG4gICAgICByZXR1cm4gX2dldChSZWNvcmRDYW52YXMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkQ2FudmFzLnByb3RvdHlwZSksICdjcmVhdGVFbCcsIHRoaXMpLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLXJlY29yZC1jYW52YXMnLFxuICAgICAgICBpbm5lckhUTUw6ICc8Y2FudmFzPjwvY2FudmFzPidcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWNvcmRDYW52YXM7XG59KENvbXBvbmVudCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkQ2FudmFzJywgUmVjb3JkQ2FudmFzKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkQ2FudmFzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIHJlY29yZC1pbmRpY2F0b3IuanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcclxuICogSWNvbiBpbmRpY2F0aW5nIHJlY29yZGluZyBpcyBhY3RpdmUuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5Db21wb25lbnRcclxuKi9cblxudmFyIFJlY29yZEluZGljYXRvciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlY29yZEluZGljYXRvciwgX0NvbXBvbmVudCk7XG5cbiAgICAvKipcclxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIGNsYXNzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0geyh2aWRlb2pzLlBsYXllcnxPYmplY3QpfSBwbGF5ZXIgLSBWaWRlby5qcyBwbGF5ZXIgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBsYXllciBvcHRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVjb3JkSW5kaWNhdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkSW5kaWNhdG9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkSW5kaWNhdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkSW5kaWNhdG9yKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcblxuICAgICAgICBfdGhpcy5lbmFibGUoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBgUmVjb3JkSW5kaWNhdG9yYHMgRE9NIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqICAgICAgICAgVGhlIGRvbSBlbGVtZW50IHRoYXQgZ2V0cyBjcmVhdGVkLlxyXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSZWNvcmRJbmRpY2F0b3IsIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZUVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXQoUmVjb3JkSW5kaWNhdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZEluZGljYXRvci5wcm90b3R5cGUpLCAnY3JlYXRlRWwnLCB0aGlzKS5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXJlY29yZC1pbmRpY2F0b3IgdmpzLWNvbnRyb2wnLFxuICAgICAgICAgICAgICAgIGRpcjogJ2x0cidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5hYmxlIGV2ZW50IGhhbmRsZXJzLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLnBsYXllcl8sICdzdGFydFJlY29yZCcsIHRoaXMuc2hvdyk7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyXywgJ3N0b3BSZWNvcmQnLCB0aGlzLmhpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlzYWJsZSBldmVudCBoYW5kbGVycy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXJfLCAnc3RhcnRSZWNvcmQnLCB0aGlzLnNob3cpO1xuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXJfLCAnc3RvcFJlY29yZCcsIHRoaXMuaGlkZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVjb3JkSW5kaWNhdG9yO1xufShDb21wb25lbnQpO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JlY29yZEluZGljYXRvcicsIFJlY29yZEluZGljYXRvcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY29yZEluZGljYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSByZWNvcmQtdG9nZ2xlLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxyXG4gKiBCdXR0b24gdG8gdG9nZ2xlIGJldHdlZW4gc3RhcnQgYW5kIHN0b3AgcmVjb3JkaW5nLlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuQnV0dG9uXHJcbiovXG5cbnZhciBSZWNvcmRUb2dnbGUgPSBmdW5jdGlvbiAoX0J1dHRvbikge1xuICAgIF9pbmhlcml0cyhSZWNvcmRUb2dnbGUsIF9CdXR0b24pO1xuXG4gICAgZnVuY3Rpb24gUmVjb3JkVG9nZ2xlKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkVG9nZ2xlKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlY29yZFRvZ2dsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFRvZ2dsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWNvcmRUb2dnbGUsIFt7XG4gICAgICAgIGtleTogJ2J1aWxkQ1NTQ2xhc3MnLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgZGVmYXVsdCBET00gYGNsYXNzTmFtZWAuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgICAgICogICAgICAgICBUaGUgRE9NIGBjbGFzc05hbWVgIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkQ1NTQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Zqcy1yZWNvcmQtYnV0dG9uIHZqcy1jb250cm9sIHZqcy1idXR0b24gdmpzLWljb24tcmVjb3JkLXN0YXJ0JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVuYWJsZSB0aGUgYFJlY29yZFRvZ2dsZWAgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBhY3RpdmF0ZWQgb3IgY2xpY2tlZC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5hYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgICAgICAgIF9nZXQoUmVjb3JkVG9nZ2xlLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFRvZ2dsZS5wcm90b3R5cGUpLCAnZW5hYmxlJywgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5vbih0aGlzLnBsYXllcl8sICdzdGFydFJlY29yZCcsIHRoaXMub25TdGFydCk7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyXywgJ3N0b3BSZWNvcmQnLCB0aGlzLm9uU3RvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEaXNhYmxlIHRoZSBgUmVjb3JkVG9nZ2xlYCBlbGVtZW50IHNvIHRoYXQgaXQgY2Fubm90IGJlIGFjdGl2YXRlZCBvciBjbGlja2VkLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICAgICAgICBfZ2V0KFJlY29yZFRvZ2dsZS5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRUb2dnbGUucHJvdG90eXBlKSwgJ2Rpc2FibGUnLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdGFydFJlY29yZCcsIHRoaXMub25TdGFydCk7XG4gICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdG9wUmVjb3JkJywgdGhpcy5vblN0b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBnZXRzIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XHJcbiAgICAgICAgICogICAgICAgIFRoZSBgdGFwYCBvciBgY2xpY2tgIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgZnVuY3Rpb24gdG8gYmVcclxuICAgICAgICAgKiAgICAgICAgY2FsbGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGxpc3RlbnMgdGFwXHJcbiAgICAgICAgICogQGxpc3RlbnMgY2xpY2tcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWNvcmRlciA9IHRoaXMucGxheWVyXy5yZWNvcmQoKTtcbiAgICAgICAgICAgIGlmICghcmVjb3JkZXIuaXNSZWNvcmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCB0aGUgdmpzLWljb24tcmVjb3JkLXN0b3AgY2xhc3MgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gW2V2ZW50XVxyXG4gICAgICAgICAqICAgICAgICBUaGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBydW4uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyBQbGF5ZXIjc3RhcnRSZWNvcmRcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGVsZW1lbnQgY2xhc3Mgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd2anMtaWNvbi1yZWNvcmQtc3RhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1pY29uLXJlY29yZC1zdG9wJyk7XG5cbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgYnV0dG9uIHRleHRcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFRleHQoJ1N0b3AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCB0aGUgdmpzLWljb24tcmVjb3JkLXN0YXJ0IGNsYXNzIHRvIHRoZSBlbGVtZW50IHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR+RXZlbnR9IFtldmVudF1cclxuICAgICAgICAgKiAgICAgICAgVGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgZnVuY3Rpb24gdG8gcnVuLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGxpc3RlbnMgUGxheWVyI3N0b3BSZWNvcmRcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RvcChldmVudCkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcmVjb3JkLXN0b3AnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1pY29uLXJlY29yZC1zdGFydCcpO1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGJ1dHRvbiB0ZXh0XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KCdSZWNvcmQnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmRUb2dnbGU7XG59KEJ1dHRvbik7XG5cbi8qKlxyXG4gKiBUaGUgdGV4dCB0aGF0IHNob3VsZCBkaXNwbGF5IG92ZXIgdGhlIGBSZWNvcmRUb2dnbGVgcyBjb250cm9scy4gQWRkZWQgZm9yIGxvY2FsaXphdGlvbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHByaXZhdGVcclxuICovXG5cblxuUmVjb3JkVG9nZ2xlLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnUmVjb3JkJztcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNvcmRUb2dnbGUnLCBSZWNvcmRUb2dnbGUpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWNvcmRUb2dnbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcclxuICogQGZpbGUgZGVmYXVsdHMuanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG4vL3BsdWdpbiBkZWZhdWx0c1xudmFyIHBsdWdpbkRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIGFkZGVkIGJ5IGdlb3JnZVxuICAgIHZpZGVvQml0c1BlclNlY29uZDogODAwMDAwLFxuXG4gICAgLy8gU2luZ2xlIHNuYXBzaG90IGltYWdlLlxuICAgIGltYWdlOiBmYWxzZSxcbiAgICAvLyBJbmNsdWRlIGF1ZGlvIGluIHRoZSByZWNvcmRlZCBjbGlwLlxuICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAvLyBJbmNsdWRlIHZpZGVvIGluIHRoZSByZWNvcmRlZCBjbGlwLlxuICAgIHZpZGVvOiBmYWxzZSxcbiAgICAvLyBBbmltYXRlZCBHSUYuXG4gICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAvLyBNYXhpbXVtIGxlbmd0aCBvZiB0aGUgcmVjb3JkZWQgY2xpcC5cbiAgICBtYXhMZW5ndGg6IDEwLFxuICAgIC8vIFdpZHRoIG9mIHRoZSByZWNvcmRlZCB2aWRlbyBmcmFtZXMuXG4gICAgZnJhbWVXaWR0aDogMzIwLFxuICAgIC8vIEhlaWdodCBvZiB0aGUgcmVjb3JkZWQgdmlkZW8gZnJhbWVzLlxuICAgIGZyYW1lSGVpZ2h0OiAyNDAsXG4gICAgLy8gRW5hYmxlcyBjb25zb2xlIGxvZ2dpbmcgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgLy8gVGhlIG1pbWUgdHlwZSBmb3IgdGhlIHZpZGVvIHJlY29yZGVyLiBEZWZhdWx0IHRvICd2aWRlby93ZWJtJy5cbiAgICAvLyBVc2UgJ3ZpZGVvL21wNCcgKEZpcmVmb3gpIG9yICd2aWRlby93ZWJtO2NvZGVjcz1IMjY0JyAoQ2hyb21lIDUyIGFuZFxuICAgIC8vIG5ld2VyKSBmb3IgTVA0LlxuICAgIHZpZGVvTWltZVR5cGU6ICd2aWRlby93ZWJtJyxcbiAgICAvLyBWaWRlbyByZWNvcmRlciB0eXBlIHRvIHVzZS4gVGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgYW4gYWx0ZXJuYXRpdmVcbiAgICAvLyByZWNvcmRlciBjbGFzcywgZS5nLiBXaGFtbXlSZWNvcmRlci4gRGVmYXVsdHMgdG8gJ2F1dG8nIHdoaWNoIGxldCdzXG4gICAgLy8gcmVjb3JkcnRjIHNwZWNpZnkgdGhlIGJlc3QgYXZhaWxhYmxlIHJlY29yZGVyIHR5cGUuXG4gICAgdmlkZW9SZWNvcmRlclR5cGU6ICdhdXRvJyxcbiAgICAvLyBBdWRpbyByZWNvcmRpbmcgbGlicmFyeSB0byB1c2UuIExlZ2FsIHZhbHVlcyBhcmUgJ3JlY29yZHJ0YycsXG4gICAgLy8gJ2xpYnZvcmJpcy5qcycsICdvcHVzLXJlY29yZGVyJywgJ2xhbWVqcycgYW5kICdyZWNvcmRlci5qcycuXG4gICAgYXVkaW9FbmdpbmU6ICdyZWNvcmRydGMnLFxuICAgIC8vIEF1ZGlvIHJlY29yZGVyIHR5cGUgdG8gdXNlLiBUaGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBhbHRlcm5hdGl2ZVxuICAgIC8vIHJlY29yZGVyIGNsYXNzLCBlLmcuIFN0ZXJlb0F1ZGlvUmVjb3JkZXIuIERlZmF1bHRzIHRvICdhdXRvJyB3aGljaCBsZXQnc1xuICAgIC8vIHJlY29yZHJ0YyBzcGVjaWZ5IHRoZSBiZXN0IGF2YWlsYWJsZSByZWNvcmRlciB0eXBlLiBDdXJyZW50bHkgdGhpc1xuICAgIC8vIHNldHRpbmcgaXMgb25seSB1c2VkIHdpdGggdGhlICdyZWNvcmRydGMnIGF1ZGlvRW5naW5lLlxuICAgIGF1ZGlvUmVjb3JkZXJUeXBlOiAnYXV0bycsXG4gICAgLy8gVGhlIG1pbWUgdHlwZSBmb3IgdGhlIGF1ZGlvIHJlY29yZGVyLiBEZWZhdWx0cyB0byAnYXV0bycgd2hpY2ggd2lsbCBwaWNrXG4gICAgLy8gdGhlIGJlc3Qgb3B0aW9uIGF2YWlsYWJsZSBpbiB0aGUgYnJvd3NlciAoZS5nLiBlaXRoZXIgJ2F1ZGlvL3dhdicsXG4gICAgLy8gJ2F1ZGlvL29nZycgb3IgJ2F1ZGlvL3dlYm0nKS5cbiAgICBhdWRpb01pbWVUeXBlOiAnYXV0bycsXG4gICAgLy8gVGhlIHNpemUgb2YgdGhlIGF1ZGlvIGJ1ZmZlciAoaW4gc2FtcGxlLWZyYW1lcykgd2hpY2ggbmVlZHMgdG9cbiAgICAvLyBiZSBwcm9jZXNzZWQgZWFjaCB0aW1lIG9ucHJvY2Vzc2F1ZGlvIGlzIGNhbGxlZC5cbiAgICAvLyBGcm9tIHRoZSBzcGVjOiBUaGlzIHZhbHVlIGNvbnRyb2xzIGhvdyBmcmVxdWVudGx5IHRoZSBhdWRpb3Byb2Nlc3MgZXZlbnQgaXNcbiAgICAvLyBkaXNwYXRjaGVkIGFuZCBob3cgbWFueSBzYW1wbGUtZnJhbWVzIG5lZWQgdG8gYmUgcHJvY2Vzc2VkIGVhY2ggY2FsbC5cbiAgICAvLyBMb3dlciB2YWx1ZXMgZm9yIGJ1ZmZlciBzaXplIHdpbGwgcmVzdWx0IGluIGEgbG93ZXIgKGJldHRlcikgbGF0ZW5jeS5cbiAgICAvLyBIaWdoZXIgdmFsdWVzIHdpbGwgYmUgbmVjZXNzYXJ5IHRvIGF2b2lkIGF1ZGlvIGJyZWFrdXAgYW5kIGdsaXRjaGVzLlxuICAgIC8vIExlZ2FsIHZhbHVlcyBhcmUgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDQwOTYsIDgxOTIgb3IgMTYzODQuXG4gICAgYXVkaW9CdWZmZXJTaXplOiA0MDk2LFxuICAgIC8vIFRoZSBhdWRpbyBzYW1wbGUgcmF0ZSAoaW4gc2FtcGxlLWZyYW1lcyBwZXIgc2Vjb25kKSBhdCB3aGljaCB0aGVcbiAgICAvLyBBdWRpb0NvbnRleHQgaGFuZGxlcyBhdWRpby4gSXQgaXMgYXNzdW1lZCB0aGF0IGFsbCBBdWRpb05vZGVzXG4gICAgLy8gaW4gdGhlIGNvbnRleHQgcnVuIGF0IHRoaXMgcmF0ZS4gSW4gbWFraW5nIHRoaXMgYXNzdW1wdGlvbixcbiAgICAvLyBzYW1wbGUtcmF0ZSBjb252ZXJ0ZXJzIG9yIFwidmFyaXNwZWVkXCIgcHJvY2Vzc29ycyBhcmUgbm90IHN1cHBvcnRlZFxuICAgIC8vIGluIHJlYWwtdGltZSBwcm9jZXNzaW5nLlxuICAgIC8vIFRoZSBzYW1wbGVSYXRlIHBhcmFtZXRlciBkZXNjcmliZXMgdGhlIHNhbXBsZS1yYXRlIG9mIHRoZVxuICAgIC8vIGxpbmVhciBQQ00gYXVkaW8gZGF0YSBpbiB0aGUgYnVmZmVyIGluIHNhbXBsZS1mcmFtZXMgcGVyIHNlY29uZC5cbiAgICAvLyBBbiBpbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgc2FtcGxlLXJhdGVzIGluIGF0IGxlYXN0XG4gICAgLy8gdGhlIHJhbmdlIDIyMDUwIHRvIDk2MDAwLlxuICAgIGF1ZGlvU2FtcGxlUmF0ZTogNDQxMDAsXG4gICAgLy8gVGhlIGF1ZGlvIGJpdHJhdGUgaW4ga2JwcyAob25seSB1c2VkIGluIGxhbWVqcyBwbHVnaW4pLlxuICAgIGF1ZGlvQml0UmF0ZTogMTI4LFxuICAgIC8vIEFsbG93cyB5b3UgdG8gcmVjb3JkIHNpbmdsZS1jaGFubmVsIGF1ZGlvLCB3aGljaCBjYW4gcmVkdWNlIHRoZVxuICAgIC8vIGZpbGVzaXplLlxuICAgIGF1ZGlvQ2hhbm5lbHM6IDIsXG4gICAgLy8gVVJMIGZvciB0aGUgYXVkaW8gd29ya2VyLlxuICAgIGF1ZGlvV29ya2VyVVJMOiAnJyxcbiAgICAvLyBGcmFtZSByYXRlIGluIGZyYW1lcyBwZXIgc2Vjb25kLlxuICAgIGFuaW1hdGlvbkZyYW1lUmF0ZTogMjAwLFxuICAgIC8vIFNldHMgcXVhbGl0eSBvZiBjb2xvciBxdWFudGl6YXRpb24gKGNvbnZlcnNpb24gb2YgaW1hZ2VzIHRvIHRoZVxuICAgIC8vIG1heGltdW0gMjU2IGNvbG9ycyBhbGxvd2VkIGJ5IHRoZSBHSUYgc3BlY2lmaWNhdGlvbikuXG4gICAgLy8gTG93ZXIgdmFsdWVzIChtaW5pbXVtID0gMSkgcHJvZHVjZSBiZXR0ZXIgY29sb3JzLFxuICAgIC8vIGJ1dCBzbG93IHByb2Nlc3Npbmcgc2lnbmlmaWNhbnRseS4gMTAgaXMgdGhlIGRlZmF1bHQsXG4gICAgLy8gYW5kIHByb2R1Y2VzIGdvb2QgY29sb3IgbWFwcGluZyBhdCByZWFzb25hYmxlIHNwZWVkcy5cbiAgICAvLyBWYWx1ZXMgZ3JlYXRlciB0aGFuIDIwIGRvIG5vdCB5aWVsZCBzaWduaWZpY2FudCBpbXByb3ZlbWVudHNcbiAgICAvLyBpbiBzcGVlZC5cbiAgICBhbmltYXRpb25RdWFsaXR5OiAxMCxcbiAgICAvLyBBY2NlcHRzIG51bWJlcnMgaW4gbWlsbGlzZWNvbmRzOyB1c2UgdGhpcyB0byBmb3JjZSBpbnRlcnZhbHMtYmFzZWQgYmxvYnMuXG4gICAgdGltZVNsaWNlOiAwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwbHVnaW5EZWZhdWx0T3B0aW9uczsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgcmVjb3JkLWVuZ2luZS5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8vIHN1cHBvcnRlZCByZWNvcmRlciBwbHVnaW4gZW5naW5lc1xudmFyIFJFQ09SRFJUQyA9ICdyZWNvcmRydGMnO1xudmFyIExJQlZPUkJJU0pTID0gJ2xpYnZvcmJpcy5qcyc7XG52YXIgUkVDT1JERVJKUyA9ICdyZWNvcmRlci5qcyc7XG52YXIgTEFNRUpTID0gJ2xhbWVqcyc7XG52YXIgT1BVU1JFQ09SREVSID0gJ29wdXMtcmVjb3JkZXInO1xuXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcmVjb3JkZXIgYmFja2VuZHMuXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5Db21wb25lbnRcclxuICovXG5cbnZhciBSZWNvcmRFbmdpbmUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZWNvcmRFbmdpbmUsIF9Db21wb25lbnQpO1xuXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7UGxheWVyfSBwbGF5ZXJcclxuICAgICAqICAgICAgICAgVGhlIGBQbGF5ZXJgIHRoYXQgdGhpcyBjbGFzcyBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgICAqICAgICAgICAgVGhlIGtleS92YWx1ZSBzdG9yZSBvZiBwbGF5ZXIgb3B0aW9ucy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlY29yZEVuZ2luZShwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZEVuZ2luZSk7XG5cbiAgICAgICAgLy8gYXV0byBtaXhpbiB0aGUgZXZlbnRlZCBtaXhpbiAocmVxdWlyZWQgc2luY2UgdmlkZW8uanMgdjYuNi4wKVxuICAgICAgICBvcHRpb25zLmV2ZW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkRW5naW5lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkRW5naW5lKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbnkgdGVtcG9yYXJ5IGRhdGEgYW5kIHJlZmVyZW5jZXMgdG8gc3RyZWFtcy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlY29yZEVuZ2luZSwgW3tcbiAgICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZSBwcmV2aW91cyByZWNvcmRpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZGVkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgZmlsZW5hbWUgYW5kIHRpbWVzdGFtcCB0byByZWNvcmRlZCBmaWxlIG9iamVjdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7KGJsb2J8ZmlsZSl9IGZpbGVPYmogLSBCbG9iIG9yIEZpbGUgb2JqZWN0LlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRGaWxlSW5mbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGaWxlSW5mbyhmaWxlT2JqKSB7XG4gICAgICAgICAgICBpZiAoZmlsZU9iaiBpbnN0YW5jZW9mIEJsb2IgfHwgZmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgbW9kaWZpY2F0aW9uIGRhdGVcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlT2JqLmxhc3RNb2RpZmllZCA9IG5vdy5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVPYmoubGFzdE1vZGlmaWVkRGF0ZSA9IG5vdztcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmU6IHNldHRpbmcgZ2V0dGVyLW9ubHkgcHJvcGVydHkgXCJsYXN0TW9kaWZpZWREYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlLXJhaXNlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGd1ZXNzIGV4dGVuc2lvbiBuYW1lIGZyb20gbWltZSB0eXBlLCBlLmcuIGF1ZGlvL29nZywgYnV0XG4gICAgICAgICAgICAgICAgLy8gYW55IGV4dGVuc2lvbiBpcyB2YWxpZCBoZXJlLiBDaHJvbWUgYWxzbyBhY2NlcHRzIGV4dGVuZGVkXG4gICAgICAgICAgICAgICAgLy8gbWltZSB0eXBlcyBsaWtlIHZpZGVvL3dlYm07Y29kZWNzPWgyNjQsdnA5LG9wdXNcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUV4dGVuc2lvbiA9ICcuJyArIGZpbGVPYmoudHlwZS5zcGxpdCgnLycpWzFdO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlRXh0ZW5zaW9uLmluZGV4T2YoJzsnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVFeHRlbnNpb24gPSBmaWxlRXh0ZW5zaW9uLnNwbGl0KCc7JylbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRpbWVzdGFtcCBpbiBmaWxlbmFtZSwgZS5nLiAxNDUxMTgwOTQxMzI2Lm9nZ1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVPYmoubmFtZSA9IG5vdy5nZXRUaW1lKCkgKyBmaWxlRXh0ZW5zaW9uO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZTogc2V0dGluZyBnZXR0ZXItb25seSBwcm9wZXJ0eSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmUtcmFpc2UgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gcmVjb3JkaW5nIGlzIHN0b3BwZWQgYW5kIHJlc3VsdGluZyBzdHJlYW0gaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtibG9ifSBkYXRhIC0gUmVmZXJlbmNlIHRvIHRoZSByZWNvcmRlZCBCbG9iLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblN0b3BSZWNvcmRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25TdG9wUmVjb3JkaW5nKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZWREYXRhID0gZGF0YTtcblxuICAgICAgICAgICAgLy8gYWRkIGZpbGVuYW1lIGFuZCB0aW1lc3RhbXAgdG8gcmVjb3JkZWQgZmlsZSBvYmplY3RcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZUluZm8odGhpcy5yZWNvcmRlZERhdGEpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIHJlY29yZGVkIHN0cmVhbVxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG5cbiAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgc2F2ZSBhcyBkaWFsb2cgaW4gYnJvd3NlciBzbyB0aGUgdXNlciBjYW4gc3RvcmUgdGhlIHJlY29yZGVkIG1lZGlhXHJcbiAgICAgICAgICogbG9jYWxseS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lIC0gT2JqZWN0IHdpdGggbmFtZXMgZm9yIHRoZSBwYXJ0aWN1bGFyIGJsb2IocylcclxuICAgICAgICAgKiAgICAgeW91IHdhbnQgdG8gc2F2ZS4gRmlsZSBleHRlbnNpb25zIGFyZSBhZGRlZCBhdXRvbWF0aWNhbGx5LiBGb3JcclxuICAgICAgICAgKiAgICAgZXhhbXBsZTogeyd2aWRlbyc6ICduYW1lLW9mLXZpZGVvLWZpbGUnfS4gU3VwcG9ydGVkIGtleXMgYXJlXHJcbiAgICAgICAgICogICAgICdhdWRpbycsICd2aWRlbycgYW5kICdnaWYnLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlQXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IG5hbWVbT2JqZWN0LmtleXMobmFtZSlbMF1dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih0aGlzLnJlY29yZGVkRGF0YSwgZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1zU2F2ZUJsb2IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iKHRoaXMucmVjb3JkZWREYXRhLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBoeXBlcmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBoeXBlcmxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5yZWNvcmRlZERhdGEpO1xuICAgICAgICAgICAgaHlwZXJsaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XG5cbiAgICAgICAgICAgIGh5cGVybGluay5zdHlsZSA9ICdkaXNwbGF5Om5vbmU7b3BhY2l0eTowO2NvbG9yOnRyYW5zcGFyZW50Oyc7XG4gICAgICAgICAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGh5cGVybGluayk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHlwZXJsaW5rLmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaHlwZXJsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGh5cGVybGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgICAgICAgICAgICBoeXBlcmxpbmsuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChoeXBlcmxpbmsuaHJlZik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVjb3JkRW5naW5lO1xufShDb21wb25lbnQpO1xuXG4vLyBleHBvc2UgY29tcG9uZW50IGZvciBleHRlcm5hbCBwbHVnaW5zXG5cblxudmlkZW9qcy5SZWNvcmRFbmdpbmUgPSBSZWNvcmRFbmdpbmU7XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JlY29yZEVuZ2luZScsIFJlY29yZEVuZ2luZSk7XG5cbmV4cG9ydHMuUmVjb3JkRW5naW5lID0gUmVjb3JkRW5naW5lO1xuZXhwb3J0cy5SRUNPUkRSVEMgPSBSRUNPUkRSVEM7XG5leHBvcnRzLkxJQlZPUkJJU0pTID0gTElCVk9SQklTSlM7XG5leHBvcnRzLlJFQ09SREVSSlMgPSBSRUNPUkRFUkpTO1xuZXhwb3J0cy5MQU1FSlMgPSBMQU1FSlM7XG5leHBvcnRzLk9QVVNSRUNPUkRFUiA9IE9QVVNSRUNPUkRFUjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxyXG4gKiBAZmlsZSByZWNvcmQtbW9kZS5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbi8vIHJlY29yZGVyIG1vZGVzXG52YXIgSU1BR0VfT05MWSA9ICdpbWFnZV9vbmx5JztcbnZhciBBVURJT19PTkxZID0gJ2F1ZGlvX29ubHknO1xudmFyIFZJREVPX09OTFkgPSAndmlkZW9fb25seSc7XG52YXIgQVVESU9fVklERU8gPSAnYXVkaW9fdmlkZW8nO1xudmFyIEFOSU1BVElPTiA9ICdhbmltYXRpb24nO1xuXG52YXIgZ2V0UmVjb3JkZXJNb2RlID0gZnVuY3Rpb24gZ2V0UmVjb3JkZXJNb2RlKGltYWdlLCBhdWRpbywgdmlkZW8sIGFuaW1hdGlvbikge1xuICAgIGlmIChpc01vZGVFbmFibGVkKGltYWdlKSkge1xuICAgICAgICByZXR1cm4gSU1BR0VfT05MWTtcbiAgICB9IGVsc2UgaWYgKGlzTW9kZUVuYWJsZWQoYW5pbWF0aW9uKSkge1xuICAgICAgICByZXR1cm4gQU5JTUFUSU9OO1xuICAgIH0gZWxzZSBpZiAoaXNNb2RlRW5hYmxlZChhdWRpbykgJiYgIWlzTW9kZUVuYWJsZWQodmlkZW8pKSB7XG4gICAgICAgIHJldHVybiBBVURJT19PTkxZO1xuICAgIH0gZWxzZSBpZiAoaXNNb2RlRW5hYmxlZChhdWRpbykgJiYgaXNNb2RlRW5hYmxlZCh2aWRlbykpIHtcbiAgICAgICAgcmV0dXJuIEFVRElPX1ZJREVPO1xuICAgIH0gZWxzZSBpZiAoIWlzTW9kZUVuYWJsZWQoYXVkaW8pICYmIGlzTW9kZUVuYWJsZWQodmlkZW8pKSB7XG4gICAgICAgIHJldHVybiBWSURFT19PTkxZO1xuICAgIH1cbn07XG5cbi8qKlxyXG4gKiBSZXR1cm4gYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgbW9kZSBpcyBlbmFibGVkIG9yIG5vdC5cclxuICovXG52YXIgaXNNb2RlRW5hYmxlZCA9IGZ1bmN0aW9uIGlzTW9kZUVuYWJsZWQobW9kZSkge1xuICAgIHJldHVybiBtb2RlID09PSBPYmplY3QobW9kZSkgfHwgbW9kZSA9PT0gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuZ2V0UmVjb3JkZXJNb2RlID0gZ2V0UmVjb3JkZXJNb2RlO1xuZXhwb3J0cy5JTUFHRV9PTkxZID0gSU1BR0VfT05MWTtcbmV4cG9ydHMuQVVESU9fT05MWSA9IEFVRElPX09OTFk7XG5leHBvcnRzLlZJREVPX09OTFkgPSBWSURFT19PTkxZO1xuZXhwb3J0cy5BVURJT19WSURFTyA9IEFVRElPX1ZJREVPO1xuZXhwb3J0cy5BTklNQVRJT04gPSBBTklNQVRJT047IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9yZWNvcmRFbmdpbmUgPSByZXF1aXJlKCcuL3JlY29yZC1lbmdpbmUnKTtcblxudmFyIF9kZXRlY3RCcm93c2VyID0gcmVxdWlyZSgnLi4vdXRpbHMvZGV0ZWN0LWJyb3dzZXInKTtcblxudmFyIF9yZWNvcmRNb2RlID0gcmVxdWlyZSgnLi9yZWNvcmQtbW9kZScpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZmlsZSByZWNvcmQtcnRjLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBzaW5jZSAyLjAuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXHJcbiAqIEVuZ2luZSB1c2VkIHdpdGggdGhlIE1SZWNvcmRSVEMgY2xhc3MgaW4gdGhlIFJlY29yZFJUQyBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuUmVjb3JkRW5naW5lXHJcbiAqL1xuXG52YXIgUmVjb3JkUlRDRW5naW5lID0gZnVuY3Rpb24gKF9SZWNvcmRFbmdpbmUpIHtcbiAgICBfaW5oZXJpdHMoUmVjb3JkUlRDRW5naW5lLCBfUmVjb3JkRW5naW5lKTtcblxuICAgIGZ1bmN0aW9uIFJlY29yZFJUQ0VuZ2luZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZFJUQ0VuZ2luZSk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWNvcmRSVENFbmdpbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRSVENFbmdpbmUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVjb3JkUlRDRW5naW5lLCBbe1xuICAgICAgICBrZXk6ICdzZXR1cCcsXG5cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoc3RyZWFtLCBtZWRpYVR5cGUsIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgICAgICAgICAgIC8vIHNldHVwIFJlY29yZFJUQ1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgUmVjb3JkUlRDLk1SZWNvcmRSVEMoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm1lZGlhVHlwZSA9IHRoaXMubWVkaWFUeXBlO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGlzYWJsZUxvZ3MgPSAhdGhpcy5kZWJ1ZztcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm1pbWVUeXBlID0gdGhpcy5taW1lVHlwZTtcblxuICAgICAgICAgICAgLy8gYXVkaW8gc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmJ1ZmZlclNpemUgPSB0aGlzLmJ1ZmZlclNpemU7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zYW1wbGVSYXRlID0gdGhpcy5zYW1wbGVSYXRlO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gdGhpcy5hdWRpb0NoYW5uZWxzO1xuXG4gICAgICAgICAgICAvLyB2aWRlby9jYW52YXMgc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnZpZGVvID0gdGhpcy52aWRlbztcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgICAgICAgICAvLyBhbmltYXRlZCBnaWYgc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnF1YWxpdHkgPSB0aGlzLnF1YWxpdHk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lUmF0ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uVGltZVN0YW1wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS50aW1lU2xpY2UgPSB0aGlzLnRpbWVTbGljZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5vblRpbWVTdGFtcCA9IHRoaXMub25UaW1lU3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbm5lY3Qgc3RyZWFtIHRvIHJlY29yZGluZyBlbmdpbmVcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFN0cmVhbSh0aGlzLmlucHV0U3RyZWFtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgdGVtcG9yYXJ5IGRhdGEgYW5kIHJlZmVyZW5jZXMgdG8gc3RyZWFtcy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICAgICAgX2dldChSZWNvcmRSVENFbmdpbmUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkUlRDRW5naW5lLnByb3RvdHlwZSksICdkaXNwb3NlJywgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmVuZ2luZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0YXJ0UmVjb3JkaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy4gUmVzdWx0IHdpbGwgYmUgYXZhaWxhYmxlIGFzeW5jIHdoZW4gb25TdG9wUmVjb3JkaW5nXHJcbiAgICAgICAgICogaXMgY2FsbGVkLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdG9wUmVjb3JkaW5nKHRoaXMub25TdG9wUmVjb3JkaW5nLmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUGF1c2UgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnBhdXNlUmVjb3JkaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXN1bWUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1bWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzdW1lUmVjb3JkaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaG93IHNhdmUgYXMgZGlhbG9nIGluIGJyb3dzZXIgc28gdGhlIHVzZXIgY2FuIHN0b3JlIHRoZSByZWNvcmRlZCBtZWRpYVxyXG4gICAgICAgICAqIGxvY2FsbHkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gbmFtZSAtIE9iamVjdCB3aXRoIG5hbWVzIGZvciB0aGUgcGFydGljdWxhciBibG9iKHMpXHJcbiAgICAgICAgICogICAgIHlvdSB3YW50IHRvIHNhdmUuIEZpbGUgZXh0ZW5zaW9ucyBhcmUgYWRkZWQgYXV0b21hdGljYWxseS4gRm9yXHJcbiAgICAgICAgICogICAgIGV4YW1wbGU6IHsndmlkZW8nOiAnbmFtZS1vZi12aWRlby1maWxlJ30uIFN1cHBvcnRlZCBrZXlzIGFyZVxyXG4gICAgICAgICAqICAgICAnYXVkaW8nLCAndmlkZW8nIGFuZCAnZ2lmJy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZUFzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVBcyhuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmdpbmUgJiYgbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc2F2ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZWQgd2hlbiByZWNvcmRpbmcgaXMgc3RvcHBlZCBhbmQgcmVzdWx0aW5nIHN0cmVhbSBpcyBhdmFpbGFibGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdWRpb1ZpZGVvVVJMIC0gUmVmZXJlbmNlIHRvIHRoZSByZWNvcmRlZCBCbG9iXHJcbiAgICAgICAgICogICAgIG9iamVjdCwgZS5nLiAnYmxvYjpodHRwOi8vbG9jYWxob3N0OjgwODAvMTAxMDAwMTYtNDI0OC05OTQ5LWIwZDYtMGJiNDBkYjU2ZWJhJ1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gTWVkaWEgdHlwZSwgZWcuICd2aWRlbycgb3IgJ2F1ZGlvJy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdG9wUmVjb3JkaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RvcFJlY29yZGluZyhhdWRpb1ZpZGVvVVJMLCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHJlY29yZGVkIHN0cmVhbSBVUkxcbiAgICAgICAgICAgIHRoaXMubWVkaWFVUkwgPSBhdWRpb1ZpZGVvVVJMO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gcmVjb3JkZWQgc3RyZWFtIGRhdGFcbiAgICAgICAgICAgIHZhciByZWNvcmRUeXBlID0gdGhpcy5wbGF5ZXIoKS5yZWNvcmQoKS5nZXRSZWNvcmRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5nZXRCbG9iKGZ1bmN0aW9uIChyZWNvcmRpbmcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlY29yZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlY29yZGVkRGF0YSA9IHJlY29yZGluZy5hdWRpbztcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmFkZEZpbGVJbmZvKF90aGlzMi5yZWNvcmRlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcmVjb3JkaW5nIGJvdGggYXVkaW8gYW5kIHZpZGVvLCByZWNvcmRydGNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxzIHRoaXMgdHdpY2Ugb24gY2hyb21lLCBmaXJzdCB3aXRoIGF1ZGlvIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIHdpdGggdmlkZW8gZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIGZpcmVmb3ggaXQncyBjYWxsZWQgb25jZSBidXQgd2l0aCBhIHNpbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxvYiB0aGF0IGluY2x1ZGVzIGJvdGggYXVkaW8gYW5kIHZpZGVvIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkaW5nLnZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIGlzIHZpZGVvLW9ubHkgYnV0IG9uIGZpcmVmb3ggYXVkaW8rdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nLnZpZGVvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIGNocm9tZSBicm93c2VyIHR3byBibG9icyBhcmUgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5pbmcgdGhlIHNlcGFyYXRlIGF1ZGlvL3ZpZGVvIHN0cmVhbXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZFR5cGUgPT09IF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPICYmICgwLCBfZGV0ZWN0QnJvd3Nlci5pc0Nocm9tZSkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBib3RoIGF1ZGlvIGFuZCB2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG10eXBlIGluIF90aGlzMi5yZWNvcmRlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5hZGRGaWxlSW5mbyhfdGhpczIucmVjb3JkZWREYXRhW210eXBlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuYWRkRmlsZUluZm8oX3RoaXMyLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi50cmlnZ2VyKCdyZWNvcmRDb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nLmdpZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmFkZEZpbGVJbmZvKF90aGlzMi5yZWNvcmRlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlY29yZFJUQ0VuZ2luZTtcbn0oX3JlY29yZEVuZ2luZS5SZWNvcmRFbmdpbmUpO1xuXG4vLyBleHBvc2UgcGx1Z2luXG5cblxudmlkZW9qcy5SZWNvcmRSVENFbmdpbmUgPSBSZWNvcmRSVENFbmdpbmU7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkUlRDRW5naW5lJywgUmVjb3JkUlRDRW5naW5lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkUlRDRW5naW5lOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSBsYW1lanMtcGx1Z2luLmpzXHJcbiAqIEBzaW5jZSAxLjEuMFxyXG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdSZWNvcmRFbmdpbmUnKTtcblxuLyoqXHJcbiAqIEF1ZGlvLW9ubHkgZW5naW5lIGZvciB0aGUgbGFtZWpzIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5SZWNvcmRFbmdpbmVcclxuICovXG5cbnZhciBMYW1lanNFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhMYW1lanNFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gTGFtZWpzRW5naW5lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGFtZWpzRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExhbWVqc0VuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExhbWVqc0VuZ2luZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMYW1lanNFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoc3RyZWFtLCBtZWRpYVR5cGUsIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHlwZSA9ICdhdWRpby9tcDMnO1xuXG4gICAgICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRlYnVnOiB0aGlzLmRlYnVnLFxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICBiaXRSYXRlOiB0aGlzLmJpdFJhdGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZU5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSh0aGlzLmlucHV0U3RyZWFtKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc29yID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDE2Mzg0LCAxLCAxKTtcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgV29ya2VyKHRoaXMuYXVkaW9Xb3JrZXJVUkwpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUub25tZXNzYWdlID0gdGhpcy5vbldvcmtlck1lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucG9zdE1lc3NhZ2UoeyBjbWQ6ICdpbml0JywgY29uZmlnOiBjb25maWcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSB0aGlzLm9uQXVkaW9Qcm9jZXNzLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlTm9kZS5jb25uZWN0KHRoaXMucHJvY2Vzc29yKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc29yLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2VOb2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnBvc3RNZXNzYWdlKHsgY21kOiAnZmluaXNoJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlY2VpdmVkIGEgbWVzc2FnZSBmcm9tIHRoZSB3b3JrZXIuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uV29ya2VyTWVzc2FnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbldvcmtlck1lc3NhZ2UoZXYpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuZGF0YS5jbWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3RvcFJlY29yZGluZyhuZXcgQmxvYihldi5kYXRhLmJ1ZiwgeyB0eXBlOiB0aGlzLmF1ZGlvVHlwZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcigpLnRyaWdnZXIoJ2Vycm9yJywgZXYuZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZXJyb3InLCBldi5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250aW51b3VzIGVuY29kaW5nIG9mIGF1ZGlvIGRhdGEuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25BdWRpb1Byb2Nlc3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25BdWRpb1Byb2Nlc3MoZXYpIHtcbiAgICAgICAgICAgIC8vIHNlbmQgbWljcm9waG9uZSBkYXRhIHRvIExBTUUgZm9yIE1QMyBlbmNvZGluZyB3aGlsZSByZWNvcmRpbmdcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXYuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnBvc3RNZXNzYWdlKHsgY21kOiAnZW5jb2RlJywgYnVmOiBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExhbWVqc0VuZ2luZTtcbn0oUmVjb3JkRW5naW5lKTtcblxuLy8gZXhwb3NlIHBsdWdpblxuXG5cbnZpZGVvanMuTGFtZWpzRW5naW5lID0gTGFtZWpzRW5naW5lO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYW1lanNFbmdpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIGxpYnZvcmJpcy1wbHVnaW4uanNcclxuICogQHNpbmNlIDEuMS4wXHJcbiAqL1xuXG52YXIgUmVjb3JkRW5naW5lID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1JlY29yZEVuZ2luZScpO1xuXG4vKipcclxuICogQXVkaW8tb25seSBlbmdpbmUgZm9yIHRoZSBsaWJ2b3JiaXMuanMgbGlicmFyeS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLlJlY29yZFBsdWdpblxyXG4gKi9cblxudmFyIExpYlZvcmJpc0VuZ2luZSA9IGZ1bmN0aW9uIChfUmVjb3JkRW5naW5lKSB7XG4gICAgX2luaGVyaXRzKExpYlZvcmJpc0VuZ2luZSwgX1JlY29yZEVuZ2luZSk7XG5cbiAgICBmdW5jdGlvbiBMaWJWb3JiaXNFbmdpbmUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJWb3JiaXNFbmdpbmUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGliVm9yYmlzRW5naW5lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGliVm9yYmlzRW5naW5lKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExpYlZvcmJpc0VuZ2luZSwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHVwIHJlY29yZGluZyBlbmdpbmUuXHJcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cChzdHJlYW0sIG1lZGlhVHlwZSwgZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IG1lZGlhVHlwZTtcbiAgICAgICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuICAgICAgICAgICAgLy8gc2V0dXAgbGlidm9yYmlzLmpzXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kOiB0aGlzLnNhbXBsZVJhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lID0gbmV3IFZvcmJpc01lZGlhUmVjb3JkZXIodGhpcy5pbnB1dFN0cmVhbSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm9uZGF0YWF2YWlsYWJsZSA9IHRoaXMub25EYXRhLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5vbnN0b3AgPSB0aGlzLm9uUmVjb3JkaW5nQXZhaWxhYmxlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25EYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGF0YShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uUmVjb3JkaW5nQXZhaWxhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVjb3JkaW5nQXZhaWxhYmxlKCkge1xuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYih0aGlzLmNodW5rcywgeyB0eXBlOiB0aGlzLmNodW5rc1swXS50eXBlIH0pO1xuICAgICAgICAgICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub25TdG9wUmVjb3JkaW5nKGJsb2IpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExpYlZvcmJpc0VuZ2luZTtcbn0oUmVjb3JkRW5naW5lKTtcblxuLy8gZXhwb3NlIHBsdWdpblxuXG5cbnZpZGVvanMuTGliVm9yYmlzRW5naW5lID0gTGliVm9yYmlzRW5naW5lO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaWJWb3JiaXNFbmdpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIG9wdXMtcmVjb3JkZXItcGx1Z2luLmpzXHJcbiAqIEBzaW5jZSAxLjEuMFxyXG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdSZWNvcmRFbmdpbmUnKTtcblxuLyoqXHJcbiAqIEF1ZGlvLW9ubHkgZW5naW5lIGZvciB0aGUgb3B1cy1yZWNvcmRlciBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBBdWRpbyBpcyBlbmNvZGVkIHVzaW5nIGxpYm9wdXMuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5SZWNvcmRFbmdpbmVcclxuICovXG5cbnZhciBPcHVzUmVjb3JkZXJFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhPcHVzUmVjb3JkZXJFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gT3B1c1JlY29yZGVyRW5naW5lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3B1c1JlY29yZGVyRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9wdXNSZWNvcmRlckVuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdXNSZWNvcmRlckVuZ2luZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhPcHVzUmVjb3JkZXJFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoc3RyZWFtLCBtZWRpYVR5cGUsIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgICAgICAgICAgIC8vIGFsc28gc3VwcG9ydHMgJ2F1ZGlvL3dhdic7IGJ1dCBtYWtlIHN1cmUgdG8gdXNlIHdhdmVFbmNvZGVyIHdvcmtlclxuICAgICAgICAgICAgLy8gaW4gdGhhdCBjYXNlXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHlwZSA9ICdhdWRpby9vZ2cnO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBSZWNvcmRlcih7XG4gICAgICAgICAgICAgICAgbGVhdmVTdHJlYW1PcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIG51bWJlck9mQ2hhbm5lbHM6IHRoaXMuYXVkaW9DaGFubmVscyxcbiAgICAgICAgICAgICAgICBidWZmZXJMZW5ndGg6IHRoaXMuYnVmZmVyU2l6ZSxcbiAgICAgICAgICAgICAgICBlbmNvZGVyU2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgIGVuY29kZXJQYXRoOiB0aGlzLmF1ZGlvV29ya2VyVVJMXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm9uZGF0YWF2YWlsYWJsZSA9IHRoaXMub25SZWNvcmRpbmdBdmFpbGFibGUuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHRoaXMuaW5wdXRTdHJlYW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGFydCh0aGlzLmF1ZGlvU291cmNlTm9kZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkaW5nIHN0YXJ0ZWQgb2tcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBjYW4ndCBzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIoKS50cmlnZ2VyKCdlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3AgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQYXVzZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlc3VtZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc3VtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uUmVjb3JkaW5nQXZhaWxhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVjb3JkaW5nQXZhaWxhYmxlKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIE9wdXMgZm9ybWF0IHN0b3JlZCBpbiBhbiBPZ2cgY29udGFpbmVyXG4gICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiB0aGlzLmF1ZGlvVHlwZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5vblN0b3BSZWNvcmRpbmcoYmxvYik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gT3B1c1JlY29yZGVyRW5naW5lO1xufShSZWNvcmRFbmdpbmUpO1xuXG4vLyBleHBvc2UgcGx1Z2luXG5cblxudmlkZW9qcy5PcHVzUmVjb3JkZXJFbmdpbmUgPSBPcHVzUmVjb3JkZXJFbmdpbmU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9wdXNSZWNvcmRlckVuZ2luZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgcmVjb3JkZXJqcy1wbHVnaW4uanNcclxuICogQHNpbmNlIDEuMS4wXHJcbiAqL1xuXG52YXIgUmVjb3JkRW5naW5lID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1JlY29yZEVuZ2luZScpO1xuXG4vKipcclxuICogQXVkaW8tb25seSBlbmdpbmUgZm9yIHRoZSByZWNvcmRlci5qcyBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuUmVjb3JkRW5naW5lXHJcbiAqL1xuXG52YXIgUmVjb3JkZXJqc0VuZ2luZSA9IGZ1bmN0aW9uIChfUmVjb3JkRW5naW5lKSB7XG4gICAgX2luaGVyaXRzKFJlY29yZGVyanNFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gUmVjb3JkZXJqc0VuZ2luZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZGVyanNFbmdpbmUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkZXJqc0VuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZGVyanNFbmdpbmUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVjb3JkZXJqc0VuZ2luZSwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHVwIHJlY29yZGluZyBlbmdpbmUuXHJcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cChzdHJlYW0sIG1lZGlhVHlwZSwgZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IG1lZGlhVHlwZTtcbiAgICAgICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHRoaXMuaW5wdXRTdHJlYW0pO1xuXG4gICAgICAgICAgICAvLyBzZXR1cCByZWNvcmRlci5qc1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgUmVjb3JkZXIodGhpcy5hdWRpb1NvdXJjZU5vZGUsIHtcbiAgICAgICAgICAgICAgICBidWZmZXJMZW46IHRoaXMuYnVmZmVyU2l6ZSxcbiAgICAgICAgICAgICAgICBudW1DaGFubmVsczogdGhpcy5hdWRpb0NoYW5uZWxzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZWNvcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3AgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdG9wKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4cG9ydFdBVih0aGlzLm9uU3RvcFJlY29yZGluZy5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmRlcmpzRW5naW5lO1xufShSZWNvcmRFbmdpbmUpO1xuXG4vLyBleHBvc2UgcGx1Z2luXG5cblxudmlkZW9qcy5SZWNvcmRlcmpzRW5naW5lID0gUmVjb3JkZXJqc0VuZ2luZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkZXJqc0VuZ2luZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxyXG4gKiBAZmlsZSBicm93c2VyLXNoaW0uanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG52YXIgc2V0U3JjT2JqZWN0ID0gZnVuY3Rpb24gc2V0U3JjT2JqZWN0KHN0cmVhbSwgZWxlbWVudCwgaWdub3JlQ3JlYXRlT2JqZWN0VVJMKSB7XG4gICAgaWYgKCdjcmVhdGVPYmplY3RVUkwnIGluIFVSTCAmJiAhaWdub3JlQ3JlYXRlT2JqZWN0VVJMKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0U3JjT2JqZWN0KHN0cmVhbSwgZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCdzcmNPYmplY3QnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSBlbHNlIGlmICgnbW96U3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVPYmplY3RVUkwvc3JjT2JqZWN0IGJvdGggYXJlIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0U3JjT2JqZWN0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1NhZmFyaSA9IGV4cG9ydHMuaXNDaHJvbWUgPSBleHBvcnRzLmlzT3BlcmEgPSBleHBvcnRzLmlzRWRnZSA9IGV4cG9ydHMuZGV0ZWN0QnJvd3NlciA9IHVuZGVmaW5lZDtcblxudmFyIF93aW5kb3cgPSByZXF1aXJlKCdnbG9iYWwvd2luZG93Jyk7XG5cbnZhciBfd2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBCcm93c2VyIGRldGVjdG9yLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IHJlc3VsdCBjb250YWluaW5nIGJyb3dzZXIsIHZlcnNpb24gYW5kIG1pblZlcnNpb25cclxuICogICAgIHByb3BlcnRpZXMuXHJcbiAqL1xudmFyIGRldGVjdEJyb3dzZXIgPSBmdW5jdGlvbiBkZXRlY3RCcm93c2VyKCkge1xuICAgIC8vIHJldHVybmVkIHJlc3VsdCBvYmplY3RcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LmJyb3dzZXIgPSBudWxsO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gbnVsbDtcbiAgICByZXN1bHQubWluVmVyc2lvbiA9IG51bGw7XG5cbiAgICAvLyBmYWlsIGVhcmx5IGlmIGl0J3Mgbm90IGEgYnJvd3NlclxuICAgIGlmICh0eXBlb2YgX3dpbmRvdzIuZGVmYXVsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgIV93aW5kb3cyLmRlZmF1bHQubmF2aWdhdG9yKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIHN1cHBvcnRlZCBicm93c2VyLic7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gRmlyZWZveFxuICAgIGlmIChuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsIC9GaXJlZm94XFwvKFxcZCspXFwuLywgMSk7XG4gICAgICAgIHJlc3VsdC5taW5WZXJzaW9uID0gMzE7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSB7XG4gICAgICAgIC8vIENocm9tZSwgQ2hyb21pdW0sIFdlYnZpZXcsIE9wZXJhXG4gICAgICAgIGlmIChfd2luZG93Mi5kZWZhdWx0LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdjaHJvbWUnO1xuICAgICAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LCAvQ2hyb20oZXxpdW0pXFwvKFxcZCspXFwuLywgMik7XG4gICAgICAgICAgICByZXN1bHQubWluVmVyc2lvbiA9IDM4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2FmYXJpIChpbiBhbiB1bnB1Ymxpc2hlZCB2ZXJzaW9uKSBvciB1bmtub3duIHdlYmtpdC1iYXNlZC5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFxcZCspLihcXGQrKS8pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5taW5WZXJzaW9uID0gMTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVua25vd24gd2Via2l0LWJhc2VkIGJyb3dzZXIuXG4gICAgICAgICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnVW5zdXBwb3J0ZWQgd2Via2l0LWJhc2VkIGJyb3dzZXIgJyArICd3aXRoIEdVTSBzdXBwb3J0IGJ1dCBubyBXZWJSVEMgc3VwcG9ydC4nO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWRnZVxuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSkge1xuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdlZGdlJztcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LCAvRWRnZVxcLyhcXGQrKS4oXFxkKykkLywgMik7XG4gICAgICAgIHJlc3VsdC5taW5WZXJzaW9uID0gMTA1NDc7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLykpIHtcbiAgICAgICAgLy8gU2FmYXJpLCB3aXRoIHdlYmtpdEdldFVzZXJNZWRpYSByZW1vdmVkLlxuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQgZmFsbHRocm91Z2g6IG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIHN1cHBvcnRlZCBicm93c2VyLic7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxyXG4gKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIC0gdXNlckFnZW50IHN0cmluZy5cclxuICogQHBhcmFtIHshc3RyaW5nfSBleHByIC0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgYXMgbWF0Y2ggY3JpdGVyaWEuXHJcbiAqIEBwYXJhbSB7IW51bWJlcn0gcG9zIC0gcG9zaXRpb24gaW4gdGhlIHZlcnNpb24gc3RyaW5nIHRvIGJlXHJcbiAqICAgICByZXR1cm5lZC5cclxuICogQHJldHVybiB7IW51bWJlcn0gYnJvd3NlciB2ZXJzaW9uLlxyXG4gKi9cbi8qKlxyXG4gKiBAZmlsZSBkZXRlY3QtYnJvd3Nlci5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBleHRyYWN0VmVyc2lvbiA9IGZ1bmN0aW9uIGV4dHJhY3RWZXJzaW9uKHVhc3RyaW5nLCBleHByLCBwb3MpIHtcbiAgICB2YXIgbWF0Y2ggPSB1YXN0cmluZy5tYXRjaChleHByKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID49IHBvcyAmJiBwYXJzZUludChtYXRjaFtwb3NdLCAxMCk7XG59O1xuXG52YXIgaXNFZGdlID0gZnVuY3Rpb24gaXNFZGdlKCkge1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyKCkuYnJvd3NlciA9PT0gJ2VkZ2UnO1xufTtcblxudmFyIGlzU2FmYXJpID0gZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXIoKS5icm93c2VyID09PSAnc2FmYXJpJztcbn07XG5cbnZhciBpc09wZXJhID0gZnVuY3Rpb24gaXNPcGVyYSgpIHtcbiAgICByZXR1cm4gISFfd2luZG93Mi5kZWZhdWx0Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT1BSLycpICE9PSAtMTtcbn07XG5cbnZhciBpc0Nocm9tZSA9IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyKCkuYnJvd3NlciA9PT0gJ2Nocm9tZSc7XG59O1xuXG5leHBvcnRzLmRldGVjdEJyb3dzZXIgPSBkZXRlY3RCcm93c2VyO1xuZXhwb3J0cy5pc0VkZ2UgPSBpc0VkZ2U7XG5leHBvcnRzLmlzT3BlcmEgPSBpc09wZXJhO1xuZXhwb3J0cy5pc0Nocm9tZSA9IGlzQ2hyb21lO1xuZXhwb3J0cy5pc1NhZmFyaSA9IGlzU2FmYXJpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXHJcbiAqIEBmaWxlIGZvcm1hdC10aW1lLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxuLyoqXHJcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1MsIE06U1Mgb3IgTTpTUzpNTU0uXHJcbiAqXHJcbiAqIFN1cHBseWluZyBhIGd1aWRlIChpbiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3NcclxuICogdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYVxyXG4gKiAgICAgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZ3VpZGUgLSBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmdcclxuICogICAgIGFmdGVyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbXNEaXNwbGF5TWF4IC0gTnVtYmVyIChpbiBtaWxsaXNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmdcclxuICogICAgIGFmdGVyLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRpbWUgZm9ybWF0dGVkIGFzIEg6TU06U1MsIE06U1Mgb3IgTTpTUzpNTU0sIGUuZy5cclxuICogICAgIDA6MDA6MTIuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xudmFyIGZvcm1hdFRpbWUgPSBmdW5jdGlvbiBmb3JtYXRUaW1lKHNlY29uZHMsIGd1aWRlLCBtc0Rpc3BsYXlNYXgpIHtcbiAgICAvLyBEZWZhdWx0IHRvIHVzaW5nIHNlY29uZHMgYXMgZ3VpZGVcbiAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDAgPyAwIDogc2Vjb25kcztcbiAgICBndWlkZSA9IGd1aWRlIHx8IHNlY29uZHM7XG4gICAgdmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCksXG4gICAgICAgIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKSxcbiAgICAgICAgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApLFxuICAgICAgICBnbSA9IE1hdGguZmxvb3IoZ3VpZGUgLyA2MCAlIDYwKSxcbiAgICAgICAgZ2ggPSBNYXRoLmZsb29yKGd1aWRlIC8gMzYwMCksXG4gICAgICAgIG1zID0gTWF0aC5mbG9vcigoc2Vjb25kcyAtIHMpICogMTAwMCk7XG5cbiAgICAvLyBoYW5kbGUgaW52YWxpZCB0aW1lc1xuICAgIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgICAgICAvLyAnLScgaXMgZmFsc2UgZm9yIGFsbCByZWxhdGlvbmFsIG9wZXJhdG9ycyAoZS5nLiA8LCA+PSkgc28gdGhpc1xuICAgICAgICAvLyBzZXR0aW5nIHdpbGwgYWRkIHRoZSBtaW5pbXVtIG51bWJlciBvZiBmaWVsZHMgc3BlY2lmaWVkIGJ5IHRoZVxuICAgICAgICAvLyBndWlkZVxuICAgICAgICBoID0gbSA9IHMgPSBtcyA9ICctJztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgbWlsbGlzZWNvbmRzXG4gICAgaWYgKGd1aWRlID4gMCAmJiBndWlkZSA8IG1zRGlzcGxheU1heCkge1xuICAgICAgICBpZiAobXMgPCAxMDApIHtcbiAgICAgICAgICAgIGlmIChtcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbXMgPSAnMDAnICsgbXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1zID0gJzAnICsgbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbXMgPSAnOicgKyBtcztcbiAgICB9IGVsc2Uge1xuICAgICAgICBtcyA9ICcnO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gc2hvdyBob3Vyc1xuICAgIGggPSBoID4gMCB8fCBnaCA+IDAgPyBoICsgJzonIDogJyc7XG5cbiAgICAvLyBJZiBob3VycyBhcmUgc2hvd2luZywgd2UgbWF5IG5lZWQgdG8gYWRkIGEgbGVhZGluZyB6ZXJvLlxuICAgIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICAgIG0gPSAoKGggfHwgZ20gPj0gMTApICYmIG0gPCAxMCA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAgIC8vIENoZWNrIGlmIGxlYWRpbmcgemVybyBpcyBuZWVkIGZvciBzZWNvbmRzXG4gICAgcyA9IHMgPCAxMCA/ICcwJyArIHMgOiBzO1xuXG4gICAgcmV0dXJuIGggKyBtICsgcyArIG1zO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0VGltZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX2FuaW1hdGlvbkRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbnRyb2xzL2FuaW1hdGlvbi1kaXNwbGF5Jyk7XG5cbnZhciBfYW5pbWF0aW9uRGlzcGxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmltYXRpb25EaXNwbGF5KTtcblxudmFyIF9yZWNvcmRDYW52YXMgPSByZXF1aXJlKCcuL2NvbnRyb2xzL3JlY29yZC1jYW52YXMnKTtcblxudmFyIF9yZWNvcmRDYW52YXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjb3JkQ2FudmFzKTtcblxudmFyIF9kZXZpY2VCdXR0b24gPSByZXF1aXJlKCcuL2NvbnRyb2xzL2RldmljZS1idXR0b24nKTtcblxudmFyIF9kZXZpY2VCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV2aWNlQnV0dG9uKTtcblxudmFyIF9jYW1lcmFCdXR0b24gPSByZXF1aXJlKCcuL2NvbnRyb2xzL2NhbWVyYS1idXR0b24nKTtcblxudmFyIF9jYW1lcmFCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZXJhQnV0dG9uKTtcblxudmFyIF9yZWNvcmRUb2dnbGUgPSByZXF1aXJlKCcuL2NvbnRyb2xzL3JlY29yZC10b2dnbGUnKTtcblxudmFyIF9yZWNvcmRUb2dnbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjb3JkVG9nZ2xlKTtcblxudmFyIF9yZWNvcmRJbmRpY2F0b3IgPSByZXF1aXJlKCcuL2NvbnRyb2xzL3JlY29yZC1pbmRpY2F0b3InKTtcblxudmFyIF9yZWNvcmRJbmRpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjb3JkSW5kaWNhdG9yKTtcblxudmFyIF9kZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxudmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0cyk7XG5cbnZhciBfZm9ybWF0VGltZSA9IHJlcXVpcmUoJy4vdXRpbHMvZm9ybWF0LXRpbWUnKTtcblxudmFyIF9mb3JtYXRUaW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zvcm1hdFRpbWUpO1xuXG52YXIgX2Jyb3dzZXJTaGltID0gcmVxdWlyZSgnLi91dGlscy9icm93c2VyLXNoaW0nKTtcblxudmFyIF9icm93c2VyU2hpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9icm93c2VyU2hpbSk7XG5cbnZhciBfZGV0ZWN0QnJvd3NlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGV0ZWN0LWJyb3dzZXInKTtcblxudmFyIF9yZWNvcmRSdGMgPSByZXF1aXJlKCcuL2VuZ2luZS9yZWNvcmQtcnRjJyk7XG5cbnZhciBfcmVjb3JkUnRjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY29yZFJ0Yyk7XG5cbnZhciBfcmVjb3JkRW5naW5lID0gcmVxdWlyZSgnLi9lbmdpbmUvcmVjb3JkLWVuZ2luZScpO1xuXG52YXIgX3JlY29yZE1vZGUgPSByZXF1aXJlKCcuL2VuZ2luZS9yZWNvcmQtbW9kZScpO1xuXG52YXIgX3ZpZGVvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ3ZpZGVvanMnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ3ZpZGVvanMnXSA6IG51bGwpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZpbGUgdmlkZW9qcy5yZWNvcmQuanNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVGhlIG1haW4gZmlsZSBmb3IgdGhlIHZpZGVvanMtcmVjb3JkIHByb2plY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1JVCBsaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vY29sbGFiLXByb2plY3QvdmlkZW9qcy1yZWNvcmQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIFBsdWdpbiA9IF92aWRlbzIuZGVmYXVsdC5nZXRQbHVnaW4oJ3BsdWdpbicpO1xudmFyIFBsYXllciA9IF92aWRlbzIuZGVmYXVsdC5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuXG52YXIgQVVUTyA9ICdhdXRvJztcblxuLy8gbW9ua2V5LXBhdGNoIHBsYXkgKCMxNTIpXG5QbGF5ZXIucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHZhciByZXR2YWwgPSB0aGlzLnRlY2hHZXRfKCdwbGF5Jyk7XG4gICAgLy8gc2lsZW5jZSBlcnJvcnMgKHVuaGFuZGxlZCBwcm9taXNlIGZyb20gcGxheSlcbiAgICBpZiAocmV0dmFsICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJldHZhbC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHZhbC50aGVuKG51bGwsIGZ1bmN0aW9uIChlKSB7fSk7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59O1xuXG4vKipcclxuICogUmVjb3JkIGF1ZGlvL3ZpZGVvL2ltYWdlcyB1c2luZyB0aGUgVmlkZW8uanMgcGxheWVyLlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuUGx1Z2luXHJcbiAqL1xuXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKF9QbHVnaW4pIHtcbiAgICBfaW5oZXJpdHMoUmVjb3JkLCBfUGx1Z2luKTtcblxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciB0aGUgY2xhc3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsodmlkZW9qcy5QbGF5ZXJ8T2JqZWN0KX0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBsYXllciBvcHRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVjb3JkKHBsYXllciwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkKTtcblxuICAgICAgICAvLyBzZXR1cCBwbHVnaW4gb3B0aW9uc1xuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcblxuICAgICAgICBfdGhpcy5sb2FkT3B0aW9ucygpO1xuXG4gICAgICAgIC8vIChyZSlzZXQgcmVjb3JkZXIgc3RhdGVcbiAgICAgICAgX3RoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIGFkZCBkZXZpY2UgYnV0dG9uIHdpdGggaWNvbiBiYXNlZCBvbiB0eXBlXG4gICAgICAgIHZhciBkZXZpY2VJY29uID0gJ2F2LXBlcm0nO1xuICAgICAgICBzd2l0Y2ggKF90aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZOlxuICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgZGV2aWNlSWNvbiA9ICd2aWRlby1wZXJtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICBkZXZpY2VJY29uID0gJ2F1ZGlvLXBlcm0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIF9kZXZpY2VCdXR0b24yLmRlZmF1bHQucHJvdG90eXBlLmJ1aWxkQ1NTQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB1c2UgZHluYW1pYyBpY29uIGNsYXNzXG4gICAgICAgICAgICByZXR1cm4gJ3Zqcy1kZXZpY2UtYnV0dG9uIHZqcy1jb250cm9sIHZqcy1pY29uLScgKyBkZXZpY2VJY29uO1xuICAgICAgICB9O1xuICAgICAgICBwbGF5ZXIuZGV2aWNlQnV0dG9uID0gbmV3IF9kZXZpY2VCdXR0b24yLmRlZmF1bHQocGxheWVyLCBvcHRpb25zKTtcbiAgICAgICAgcGxheWVyLmFkZENoaWxkKHBsYXllci5kZXZpY2VCdXR0b24pO1xuXG4gICAgICAgIC8vIGFkZCBibGlua2luZyByZWNvcmQgaW5kaWNhdG9yXG4gICAgICAgIHBsYXllci5yZWNvcmRJbmRpY2F0b3IgPSBuZXcgX3JlY29yZEluZGljYXRvcjIuZGVmYXVsdChwbGF5ZXIsIG9wdGlvbnMpO1xuICAgICAgICBwbGF5ZXIucmVjb3JkSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgcGxheWVyLmFkZENoaWxkKHBsYXllci5yZWNvcmRJbmRpY2F0b3IpO1xuXG4gICAgICAgIC8vIGFkZCBjYW52YXMgZm9yIHJlY29yZGluZyBhbmQgZGlzcGxheWluZyBpbWFnZVxuICAgICAgICBwbGF5ZXIucmVjb3JkQ2FudmFzID0gbmV3IF9yZWNvcmRDYW52YXMyLmRlZmF1bHQocGxheWVyLCBvcHRpb25zKTtcbiAgICAgICAgcGxheWVyLnJlY29yZENhbnZhcy5oaWRlKCk7XG4gICAgICAgIHBsYXllci5hZGRDaGlsZChwbGF5ZXIucmVjb3JkQ2FudmFzKTtcblxuICAgICAgICAvLyBhZGQgaW1hZ2UgZm9yIGFuaW1hdGlvbiBkaXNwbGF5XG4gICAgICAgIHBsYXllci5hbmltYXRpb25EaXNwbGF5ID0gbmV3IF9hbmltYXRpb25EaXNwbGF5Mi5kZWZhdWx0KHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIHBsYXllci5hbmltYXRpb25EaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgcGxheWVyLmFkZENoaWxkKHBsYXllci5hbmltYXRpb25EaXNwbGF5KTtcblxuICAgICAgICAvLyBhZGQgY2FtZXJhIGJ1dHRvblxuICAgICAgICBwbGF5ZXIuY2FtZXJhQnV0dG9uID0gbmV3IF9jYW1lcmFCdXR0b24yLmRlZmF1bHQocGxheWVyLCBvcHRpb25zKTtcbiAgICAgICAgcGxheWVyLmNhbWVyYUJ1dHRvbi5oaWRlKCk7XG5cbiAgICAgICAgLy8gYWRkIHJlY29yZCB0b2dnbGVcbiAgICAgICAgcGxheWVyLnJlY29yZFRvZ2dsZSA9IG5ldyBfcmVjb3JkVG9nZ2xlMi5kZWZhdWx0KHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIHBsYXllci5yZWNvcmRUb2dnbGUuaGlkZSgpO1xuXG4gICAgICAgIC8vIHdhaXQgdW50aWwgcGxheWVyIHVpIGlzIHJlYWR5XG4gICAgICAgIF90aGlzLnBsYXllci5vbmUoJ3JlYWR5JywgX3RoaXMuc2V0dXBVSS5iaW5kKF90aGlzKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHVwIHBsdWdpbiBvcHRpb25zLlxyXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSZWNvcmQsIFt7XG4gICAgICAgIGtleTogJ2xvYWRPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRPcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIHJlY29yZE9wdGlvbnMgPSBfdmlkZW8yLmRlZmF1bHQubWVyZ2VPcHRpb25zKF9kZWZhdWx0czIuZGVmYXVsdCwgdGhpcy5wbGF5ZXIub3B0aW9uc18ucGx1Z2lucy5yZWNvcmQpO1xuXG4gICAgICAgICAgICAvLyByZWNvcmQgc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMucmVjb3JkSW1hZ2UgPSByZWNvcmRPcHRpb25zLmltYWdlO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRBdWRpbyA9IHJlY29yZE9wdGlvbnMuYXVkaW87XG4gICAgICAgICAgICB0aGlzLnJlY29yZFZpZGVvID0gcmVjb3JkT3B0aW9ucy52aWRlbztcbiAgICAgICAgICAgIHRoaXMucmVjb3JkQW5pbWF0aW9uID0gcmVjb3JkT3B0aW9ucy5hbmltYXRpb247XG4gICAgICAgICAgICB0aGlzLm1heExlbmd0aCA9IHJlY29yZE9wdGlvbnMubWF4TGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IHJlY29yZE9wdGlvbnMuZGVidWc7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFRpbWVTbGljZSA9IHJlY29yZE9wdGlvbnMudGltZVNsaWNlO1xuXG4gICAgICAgICAgICAvLyB2aWRlby9jYW52YXMgc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMudmlkZW9GcmFtZVdpZHRoID0gcmVjb3JkT3B0aW9ucy52aWRlb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRnJhbWVXaWR0aCA9IHJlY29yZE9wdGlvbnMuZnJhbWVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudmlkZW9GcmFtZUhlaWdodCA9IHJlY29yZE9wdGlvbnMuZnJhbWVIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXJUeXBlID0gcmVjb3JkT3B0aW9ucy52aWRlb1JlY29yZGVyVHlwZTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9NaW1lVHlwZSA9IHJlY29yZE9wdGlvbnMudmlkZW9NaW1lVHlwZTtcblxuICAgICAgICAgICAgLy8gYXVkaW8gc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbmdpbmUgPSByZWNvcmRPcHRpb25zLmF1ZGlvRW5naW5lO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyVHlwZSA9IHJlY29yZE9wdGlvbnMuYXVkaW9SZWNvcmRlclR5cGU7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvV29ya2VyVVJMID0gcmVjb3JkT3B0aW9ucy5hdWRpb1dvcmtlclVSTDtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdWZmZXJTaXplID0gcmVjb3JkT3B0aW9ucy5hdWRpb0J1ZmZlclNpemU7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU2FtcGxlUmF0ZSA9IHJlY29yZE9wdGlvbnMuYXVkaW9TYW1wbGVSYXRlO1xuICAgICAgICAgICAgdGhpcy5hdWRpb0JpdFJhdGUgPSByZWNvcmRPcHRpb25zLmF1ZGlvQml0UmF0ZTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DaGFubmVscyA9IHJlY29yZE9wdGlvbnMuYXVkaW9DaGFubmVscztcbiAgICAgICAgICAgIHRoaXMuYXVkaW9NaW1lVHlwZSA9IHJlY29yZE9wdGlvbnMuYXVkaW9NaW1lVHlwZTtcblxuICAgICAgICAgICAgLy8gYW5pbWF0aW9uIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmF0ZSA9IHJlY29yZE9wdGlvbnMuYW5pbWF0aW9uRnJhbWVSYXRlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25RdWFsaXR5ID0gcmVjb3JkT3B0aW9ucy5hbmltYXRpb25RdWFsaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUGxheWVyIFVJIGlzIHJlYWR5LlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldHVwVUknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBVSSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBpbnNlcnQgY3VzdG9tIGNvbnRyb2xzIG9uIGxlZnQtc2lkZSBvZiBjb250cm9sYmFyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKHRoaXMucGxheWVyLmNhbWVyYUJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKHRoaXMucGxheWVyLmNhbWVyYUJ1dHRvbi5lbCgpLCB0aGlzLnBsYXllci5jb250cm9sQmFyLmVsKCkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKHRoaXMucGxheWVyLnJlY29yZFRvZ2dsZS5lbCgpLCB0aGlzLnBsYXllci5jb250cm9sQmFyLmVsKCkuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgICAgIC8vIGdldCByaWQgb2YgdW51c2VkIGNvbnRyb2xzXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29udHJvbEJhci5yZW1haW5pbmdUaW1lRGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5yZW1haW5pbmdUaW1lRGlzcGxheS5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29udHJvbEJhci5saXZlRGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5saXZlRGlzcGxheS5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgZmVhdHVyZSBpcyBuZXZlciB1c2VkIGluIHRoaXMgcGx1Z2luXG4gICAgICAgICAgICB0aGlzLnBsYXllci5sb29wKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gdHdlYWsgcGxheWVyIFVJIGJhc2VkIG9uIHR5cGVcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSB0byB2aWRlb2pzLXdhdmVzdXJmZXIgcGx1Z2luXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyID0gdGhpcy5wbGF5ZXIud2F2ZXN1cmZlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuSU1BR0VfT05MWTpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLlZJREVPX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9taXplIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmJpZ1BsYXlCdXR0b24uaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWRlZG1ldGFkYXRhIHJlc2V0cyB0aGUgZHVyYXRpb25EaXNwbGF5IGZvciB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBtYXggcmVjb3JkIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXREdXJhdGlvbihfdGhpczIubWF4TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBjb250cm9scyBkb24ndCB3b3JrIGZvciB0aGlzIFVJIHNvIGRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbSBubyBtYXR0ZXIgd2hhdFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIudXNpbmdOYXRpdmVDb250cm9sc18gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci50ZWNoXy5lbF8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRlY2hfLmVsXy5jb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tpbmcgb3IgdGFwcGluZyB0aGUgcGxheWVyIHZpZGVvIGVsZW1lbnQgc2hvdWxkIG5vdCB0cnlcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlVGVjaENvbnRyb2xzTGlzdGVuZXJzXygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5vcHRpb25zXy5jb250cm9scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgY29udHJvbCBpc24ndCB1c2VkIGJ5IHRoaXMgcGx1Z2luXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLnByb2dyZXNzQ29udHJvbC5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgY29udHJvbGJhciBmYWRlb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndXNlcmluYWN0aXZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnBsYXllci51c2VyQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZpZGVvanMgYXV0b21hdGljYWxseSBoaWRlcyB0aGUgY29udHJvbHMgd2hlbiBubyB2YWxpZCAnc291cmNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBpbmNsdWRlZCBpbiB0aGUgdmlkZW8gb3IgYXVkaW8gdGFnLiBEb24ndC4gRXZlciBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRpc2FibGUgdGltZSBkaXNwbGF5IGV2ZW50cyB0aGF0IGNvbnN0YW50bHkgdHJ5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgIC8vIGFuZCBkdXJhdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9mZigndGltZXVwZGF0ZScpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub2ZmKCdkdXJhdGlvbmNoYW5nZScpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub2ZmKCdsb2FkZWRtZXRhZGF0YScpO1xuXG4gICAgICAgICAgICAvLyBkaXNwbGF5IG1heCByZWNvcmQgdGltZVxuICAgICAgICAgICAgdGhpcy5zZXREdXJhdGlvbih0aGlzLm1heExlbmd0aCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgcGxheSBjb250cm9sXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLnBsYXlUb2dnbGUuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBjdXJyZW50bHkgcmVjb3JkaW5nIG9yIG5vdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFBsdWdpbiBjdXJyZW50bHkgcmVjb3JkaW5nIG9yIG5vdC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNSZWNvcmRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSZWNvcmRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb3JkaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyByZWNvcmRlZCBkYXRhXHJcbiAgICAgICAgICogb3Igbm90LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gUGx1Z2luIHByb2Nlc3Npbmcgb3Igbm90LlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Byb2Nlc3NpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQcm9jZXNzaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3Npbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGRlc3Ryb3llZCBvciBub3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBQbHVnaW4gZGVzdHJveWVkIG9yIG5vdC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNEZXN0cm95ZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIgJiYgdGhpcy5wbGF5ZXIuY2hpbGRyZW4oKSA9PT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wZW4gdGhlIGJyb3dzZXIncyByZWNvcmRpbmcgZGV2aWNlIHNlbGVjdGlvbiBkaWFsb2cuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERldmljZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXZpY2UoKSB7XG4gICAgICAgICAgICAvLyBkZWZpbmUgZGV2aWNlIGNhbGxiYWNrcyBvbmNlXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VSZWFkeUNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVJlYWR5Q2FsbGJhY2sgPSB0aGlzLm9uRGV2aWNlUmVhZHkuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUVycm9yQ2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlRXJyb3JDYWxsYmFjayA9IHRoaXMub25EZXZpY2VFcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lU3RvcENhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZVN0b3BDYWxsYmFjayA9IHRoaXMub25SZWNvcmRDb21wbGV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXNrIHRoZSBicm93c2VyIHRvIGdpdmUgdGhlIHVzZXIgYWNjZXNzIHRvIHRoZSBtZWRpYSBkZXZpY2VcbiAgICAgICAgICAgIC8vIGFuZCBnZXQgYSBzdHJlYW0gcmVmZXJlbmNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgbWljcm9waG9uZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvUmVjb3JkZXJUeXBlID09PSBBVVRPID8gdHJ1ZSA6IHRoaXMuYXVkaW9SZWNvcmRlclR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIG1pY3JvcGhvbmUgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLnVuKCdkZXZpY2VSZWFkeScsIHRoaXMuZGV2aWNlUmVhZHlDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLnVuKCdkZXZpY2VFcnJvcicsIHRoaXMuZGV2aWNlRXJyb3JDYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgbmV3IG1pY3JvcGhvbmUgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLm9uKCdkZXZpY2VSZWFkeScsIHRoaXMuZGV2aWNlUmVhZHlDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLm9uKCdkZXZpY2VFcnJvcicsIHRoaXMuZGV2aWNlRXJyb3JDYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBleGlzdGluZyBwbGF5YmFjayBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc2V0dXBQbGF5YmFja0V2ZW50cyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKHJlKXNldCBzdXJmZXIgbGl2ZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIubGl2ZU1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBvcGVuIGJyb3dzZXIgZGV2aWNlIHNlbGVjdGlvbiBkaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLm1pY3JvcGhvbmUuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLklNQUdFX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR1cCBjYW1lcmFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlb1JlY29yZGVyVHlwZSA9PT0gQVVUTyA/IHRydWUgOiB0aGlzLnZpZGVvUmVjb3JkZXJUeXBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLmdldFJlY29yZFR5cGUoKSA9PT0gX3JlY29yZE1vZGUuSU1BR0VfT05MWSA/IHRoaXMucmVjb3JkSW1hZ2UgOiB0aGlzLnJlY29yZFZpZGVvXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcykpLmNhdGNoKHRoaXMub25EZXZpY2VFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPOlxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR1cCBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1JlY29yZGVyVHlwZSA9PT0gQVVUTyA/IHRydWUgOiB0aGlzLmF1ZGlvUmVjb3JkZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IHRoaXMudmlkZW9SZWNvcmRlclR5cGUgPT09IEFVVE8gPyB0cnVlIDogdGhpcy52aWRlb1JlY29yZGVyVHlwZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogdGhpcy5yZWNvcmRBdWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLnJlY29yZFZpZGVvXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcykpLmNhdGNoKHRoaXMub25EZXZpY2VFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgY2FtZXJhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0ZWQgR0lGXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWY6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IHRoaXMucmVjb3JkQW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcykpLmNhdGNoKHRoaXMub25EZXZpY2VFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGRldmljZSBpcyByZWFkeS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSBzdHJlYW06IExvY2FsTWVkaWFTdHJlYW0gaW5zdGFuY2UuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGV2aWNlUmVhZHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25EZXZpY2VSZWFkeShzdHJlYW0pIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9kZXZpY2VBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gc3RyZWFtIGZvciBzdG9wcGluZyBldGMuXG4gICAgICAgICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcblxuICAgICAgICAgICAgLy8gaGlkZSBkZXZpY2Ugc2VsZWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZGV2aWNlQnV0dG9uLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgdGltZSAoZS5nLiB3aGVuIHN0b3BEZXZpY2Ugd2FzIHVzZWQpXG4gICAgICAgICAgICB0aGlzLnNldER1cmF0aW9uKHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoMCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgcGxheS9wYXVzZSBjb250cm9sIChlLmcuIHdoZW4gc3RvcERldmljZSB3YXMgdXNlZClcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IHBsYXliYWNrIGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXIsICd0aW1ldXBkYXRlJywgdGhpcy5wbGF5YmFja1RpbWVVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXIsICdlbmRlZCcsIHRoaXMucGxheWJhY2tUaW1lVXBkYXRlKTtcblxuICAgICAgICAgICAgLy8gc2V0dXAgcmVjb3JkaW5nIGVuZ2luZVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpICE9PSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZKSB7XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IGxpYnZvcmJpcy5qcywgcmVjb3JkZXIuanMsIG9wdXMtcmVjb3JkZXIgYW5kIGxhbWVqc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBvbmx5IHN1cHBvcnRlZCBpbiBhdWRpby1vbmx5IG1vZGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRSZWNvcmRUeXBlKCkgIT09IF9yZWNvcmRNb2RlLkFVRElPX09OTFkgJiYgKHRoaXMuYXVkaW9FbmdpbmUgPT09IF9yZWNvcmRFbmdpbmUuTElCVk9SQklTSlMgfHwgdGhpcy5hdWRpb0VuZ2luZSA9PT0gX3JlY29yZEVuZ2luZS5SRUNPUkRFUkpTIHx8IHRoaXMuYXVkaW9FbmdpbmUgPT09IF9yZWNvcmRFbmdpbmUuTEFNRUpTIHx8IHRoaXMuYXVkaW9FbmdpbmUgPT09IF9yZWNvcmRFbmdpbmUuT1BVU1JFQ09SREVSKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnJlbnRseSAnICsgdGhpcy5hdWRpb0VuZ2luZSArICcgaXMgb25seSBzdXBwb3J0ZWQgaW4gYXVkaW8tb25seSBtb2RlLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdldCByZWNvcmRlciBjbGFzc1xuICAgICAgICAgICAgICAgIHZhciBFbmdpbmVDbGFzcztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYXVkaW9FbmdpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkRW5naW5lLlJFQ09SRFJUQzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZFJUQy5qcyAoZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZUNsYXNzID0gX3ZpZGVvMi5kZWZhdWx0LlJlY29yZFJUQ0VuZ2luZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZEVuZ2luZS5MSUJWT1JCSVNKUzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpYnZvcmJpcy5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgRW5naW5lQ2xhc3MgPSBfdmlkZW8yLmRlZmF1bHQuTGliVm9yYmlzRW5naW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkRW5naW5lLlJFQ09SREVSSlM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRlci5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgRW5naW5lQ2xhc3MgPSBfdmlkZW8yLmRlZmF1bHQuUmVjb3JkZXJqc0VuZ2luZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZEVuZ2luZS5MQU1FSlM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYW1lanNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZUNsYXNzID0gX3ZpZGVvMi5kZWZhdWx0LkxhbWVqc0VuZ2luZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZEVuZ2luZS5PUFVTUkVDT1JERVI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHVzLXJlY29yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdpbmVDbGFzcyA9IF92aWRlbzIuZGVmYXVsdC5PcHVzUmVjb3JkZXJFbmdpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5rbm93biBlbmdpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBhdWRpb0VuZ2luZTogJyArIHRoaXMuYXVkaW9FbmdpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0IHN0cmVhbSB0byByZWNvcmRpbmcgZW5naW5lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZUNsYXNzKHRoaXMucGxheWVyLCB0aGlzLnBsYXllci5vcHRpb25zXyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgbG9hZCAnICsgdGhpcy5hdWRpb0VuZ2luZSArICcgcGx1Z2luJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIGZvciBldmVudHNcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5vbigncmVjb3JkQ29tcGxldGUnLCB0aGlzLmVuZ2luZVN0b3BDYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAvLyBhdWRpbyBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmJ1ZmZlclNpemUgPSB0aGlzLmF1ZGlvQnVmZmVyU2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zYW1wbGVSYXRlID0gdGhpcy5hdWRpb1NhbXBsZVJhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYml0UmF0ZSA9IHRoaXMuYXVkaW9CaXRSYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmF1ZGlvQ2hhbm5lbHMgPSB0aGlzLmF1ZGlvQ2hhbm5lbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYXVkaW9Xb3JrZXJVUkwgPSB0aGlzLmF1ZGlvV29ya2VyVVJMO1xuXG4gICAgICAgICAgICAgICAgLy8gbWltZSB0eXBlXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUubWltZVR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvTWltZVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGdpZjogJ2ltYWdlL2dpZidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvTWltZVR5cGUgIT09IG51bGwgJiYgdGhpcy5hdWRpb01pbWVUeXBlICE9PSBBVVRPKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm1pbWVUeXBlLmF1ZGlvID0gdGhpcy5hdWRpb01pbWVUeXBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHZpZGVvL2NhbnZhcyBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnZpZGVvQml0c1BlclNlY29uZCA9IHRoaXMudmlkZW9CaXRzUGVyU2Vjb25kO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnZpZGVvID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy52aWRlb0ZyYW1lV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy52aWRlb0ZyYW1lSGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5jYW52YXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnZpZGVvRnJhbWVXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnZpZGVvRnJhbWVIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0ZWQgR0lGIHNldHRpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucXVhbGl0eSA9IHRoaXMuYW5pbWF0aW9uUXVhbGl0eTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5mcmFtZVJhdGUgPSB0aGlzLmFuaW1hdGlvbkZyYW1lUmF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIHRpbWVTbGljZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZFRpbWVTbGljZSAmJiB0aGlzLnJlY29yZFRpbWVTbGljZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUudGltZVNsaWNlID0gdGhpcy5yZWNvcmRUaW1lU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm9uVGltZVN0YW1wID0gdGhpcy5vblRpbWVTdGFtcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgcmVjb3JkZXJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zZXR1cCh0aGlzLnN0cmVhbSwgdGhpcy5tZWRpYVR5cGUsIHRoaXMuZGVidWcpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBlbGVtZW50cyB0aGF0IHNob3VsZCBuZXZlciBiZSBoaWRkZW4gaW4gYW5pbWF0aW9uLFxuICAgICAgICAgICAgICAgIC8vIGF1ZGlvIGFuZC9vciB2aWRlbyBtb2R1c1xuICAgICAgICAgICAgICAgIHZhciB1aUVsZW1lbnRzID0gW3RoaXMucGxheWVyLmNvbnRyb2xCYXIuY3VycmVudFRpbWVEaXNwbGF5LCB0aGlzLnBsYXllci5jb250cm9sQmFyLnRpbWVEaXZpZGVyLCB0aGlzLnBsYXllci5jb250cm9sQmFyLmR1cmF0aW9uRGlzcGxheV07XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWwoKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzaG93IHJlY29yZCBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRUb2dnbGUuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlIHJlY29yZCBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRJbmRpY2F0b3IuZGlzYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0dXAgVUkgZm9yIHJldHJ5aW5nIHNuYXBzaG90IChlLmcuIHdoZW4gc3RvcERldmljZSB3YXNcbiAgICAgICAgICAgICAgICAvLyB1c2VkKVxuICAgICAgICAgICAgICAgIHRoaXMucmV0cnlTbmFwc2hvdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgYW5kIHNob3cgY2FtZXJhIGJ1dHRvblxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbWVyYUJ1dHRvbi5vblN0b3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW1lcmFCdXR0b24uc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZXR1cCBwcmV2aWV3XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRSZWNvcmRUeXBlKCkgIT09IF9yZWNvcmRNb2RlLkFVRElPX09OTFkpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG93IGxpdmUgcHJldmlld1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50ID0gdGhpcy5wbGF5ZXIuZWwoKS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50LmNvbnRyb2xzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBtdXRlIGluY29taW5nIGF1ZGlvIGZvciBmZWVkYmFjayBsb29wc1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50Lm11dGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIGhpZGUgdGhlIHZvbHVtZSBiYXIgd2hpbGUgaXQncyBtdXRlZFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVZvbHVtZUNvbnRyb2woZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gbG9hZCBzdHJlYW1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5zdHJlYW0pO1xuXG4gICAgICAgICAgICAgICAgLy8gc3RyZWFtIGxvYWRpbmcgaXMgYXN5bmMsIHNvIHdlIHdhaXQgdW50aWwgaXQncyByZWFkeSB0byBwbGF5XG4gICAgICAgICAgICAgICAgLy8gdGhlIHN0cmVhbVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICBfdGhpczMubWVkaWFFbGVtZW50LnBsYXkoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBmb3J3YXJkIHRvIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMucGxheWVyLnRyaWdnZXIoJ2RldmljZVJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZvcndhcmQgdG8gbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignZGV2aWNlUmVhZHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZWQgd2hlbiBhbiBkZXZpY2UgZXJyb3Igb2NjdXJyZWQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25EZXZpY2VFcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZUVycm9yKGNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RldmljZUFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBjb2RlXG4gICAgICAgICAgICB0aGlzLnBsYXllci5kZXZpY2VFcnJvckNvZGUgPSBjb2RlO1xuXG4gICAgICAgICAgICAvLyBmb3J3YXJkIGVycm9yIHRvIHBsYXllclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignZGV2aWNlRXJyb3InKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUHJvY2Vzc2luZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIGhpZGUgcGxheS9wYXVzZSBjb250cm9sXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5wbGF5VG9nZ2xlLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHBsYXliYWNrIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyLCAndGltZXVwZGF0ZScsIHRoaXMucGxheWJhY2tUaW1lVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllciwgJ2VuZGVkJywgdGhpcy5wbGF5YmFja1RpbWVVcGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgcHJldmlld1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBwbGF5YmFjayBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnNldHVwUGxheWJhY2tFdmVudHMoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFydC9yZXN1bWUgbGl2ZSBhdWRpbyB2aXN1YWxpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLmxpdmVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpZXcgdmlkZW8gc3RyZWFtIGluIHZpZGVvIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRWaWRlb1ByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSB0aGUgZmlyc3QgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0aW9uRGlzcGxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgcHJldmlldyB2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBhbmltYXRpb25zLCBjYXB0dXJlIHRoZSBmaXJzdCBmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBjYW4gYmUgZGlzcGxheWVkIGFzIHNvb24gYXMgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlRnJhbWUoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB2aWRlbyBwcmV2aWV3ICoqYWZ0ZXIqKiBjYXB0dXJpbmcgZmlyc3QgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuc3RhcnRWaWRlb1ByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLklNQUdFX09OTFk6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgc25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU25hcHNob3QoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IFVJXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdzdGFydFJlY29yZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1lZGlhIHN0cmVhbSBvbiB2aWRlbyBlbGVtZW50IHRvIGFjdHVhbGx5IGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgYWN0dWFsbHkgcmVjb3JkaW5nIHByb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCByZXNvdXJjZXMgaGF2ZSBhbHJlYWR5IGxvYWRlZCwgc28gd2UgY2FuIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRpbmcgcmlnaHQgYXdheVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFJlY29yZGluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydFJlY29yZGluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFJlY29yZGluZygpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZVRpbWUgPSB0aGlzLnBhdXNlZFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgLy8gc3RhcnQgY291bnRkb3duXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93biA9IHRoaXMucGxheWVyLnNldEludGVydmFsKHRoaXMub25Db3VudERvd24uYmluZCh0aGlzKSwgMTAwKTtcblxuICAgICAgICAgICAgLy8gY2xlYW51cCBwcmV2aW91cyByZWNvcmRpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdGFydCByZWNvcmRpbmcgc3RyZWFtXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGFydCgpO1xuXG4gICAgICAgICAgICAvLyBub3RpZnkgVUlcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ3N0YXJ0UmVjb3JkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUHJvY2Vzc2luZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRSZWNvcmRUeXBlKCkgIT09IF9yZWNvcmRNb2RlLklNQUdFX09OTFkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IFVJXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ3N0b3BSZWNvcmQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIGNvdW50ZG93blxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jbGVhckludGVydmFsKHRoaXMuY291bnREb3duKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHJlY29yZGluZyBzdHJlYW0gKHJlc3VsdCB3aWxsIGJlIGF2YWlsYWJsZSBhc3luYylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIucmVjb3JkZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzIHRoYXQgaW1hZ2UgZGF0YSBpcyAoYWxyZWFkeSkgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdmaW5pc2hSZWNvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3AgZGV2aWNlKHMpIGFuZCByZWNvcmRpbmcgaWYgYWN0aXZlLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wRGV2aWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BEZXZpY2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlY29yZGluZygpKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcCBzdHJlYW0gb25jZSByZWNvcmRlZCBkYXRhIGlzIGF2YWlsYWJsZSxcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgaXQnbGwgYnJlYWsgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub25lKCdmaW5pc2hSZWNvcmQnLCB0aGlzLnN0b3BTdHJlYW0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9wIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9wIHN0cmVhbSBub3csIHNpbmNlIHRoZXJlJ3Mgbm8gcmVjb3JkZWQgZGF0YSBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3Agc3RyZWFtIGFuZCBkZXZpY2UuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BTdHJlYW0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFN0cmVhbSgpIHtcbiAgICAgICAgICAgIC8vIHN0b3Agc3RyZWFtIGFuZCBkZXZpY2VcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RldmljZUFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpID09PSBfcmVjb3JkTW9kZS5BVURJT19PTkxZKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIG1pY3JvcGhvbmUgcGx1Z2luIHN0b3AgaXQncyBkZXZpY2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLm1pY3JvcGhvbmUuc3RvcERldmljZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0uc3RvcCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUGF1c2UgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXN1bWUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1bWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWRUaW1lICs9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5wYXVzZVRpbWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXN1bWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHJlY29yZGluZyBjb21wbGV0ZWQgYW5kIHRoZSByZXN1bHRpbmcgc3RyZWFtIGlzXHJcbiAgICAgICAgICogYXZhaWxhYmxlLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uUmVjb3JkQ29tcGxldGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25SZWNvcmRDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gcmVjb3JkZWQgc3RyZWFtIGRhdGFcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZGVkRGF0YSA9IHRoaXMuZW5naW5lLnJlY29yZGVkRGF0YTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSByZXBsYXkgYnV0dG9uIGJhY2sgdG8gYSBwbGF5IGJ1dHRvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5wbGF5VG9nZ2xlLnJlbW92ZUNsYXNzKCd2anMtZW5kZWQnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnMgdGhhdCBkYXRhIGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignZmluaXNoUmVjb3JkJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdXNlIHBsYXllciBzbyB1c2VyIGNhbiBzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5wYXVzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHVwIGV2ZW50cyBmb3IgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc2V0dXBQbGF5YmFja0V2ZW50cyh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGxvYWRlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5sb2FkaW5nU3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdG9yZSBpbnRlcmFjdGlvbiB3aXRoIGNvbnRyb2xzIGFmdGVyIHdhdmVmb3JtXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmluZyBpcyBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIub25jZSgncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmlzdWFsaXplIHJlY29yZGVkIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5wbGF5ZXIucmVjb3JkZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLlZJREVPX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF1c2luZyB0aGUgcGxheWVyIHNvIHdlIGNhbiB2aXN1YWxpemUgdGhlIHJlY29yZGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lsbCB0cmlnZ2VyIGFuIGFzeW5jIHZpZGVvLmpzICdwYXVzZScgZXZlbnQgdGhhdCB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHdhaXQgZm9yLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbmUoJ3BhdXNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmlkZW8gZGF0YSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1Ll9wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUucGxheWVyLmxvYWRpbmdTcGlubmVyLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBzdHJlYW0gdG90YWwgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5zZXREdXJhdGlvbihfdGhpczUuc3RyZWFtRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGltZSBkdXJpbmcgcGxheWJhY2sgYW5kIGF0IGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1Lm9uKF90aGlzNS5wbGF5ZXIsICd0aW1ldXBkYXRlJywgX3RoaXM1LnBsYXliYWNrVGltZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUub24oX3RoaXM1LnBsYXllciwgJ2VuZGVkJywgX3RoaXM1LnBsYXliYWNrVGltZVVwZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVubXV0ZSBsb2NhbCBhdWRpbyBkdXJpbmcgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczUuZ2V0UmVjb3JkVHlwZSgpID09PSBfcmVjb3JkTW9kZS5BVURJT19WSURFTykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5tZWRpYUVsZW1lbnQubXV0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIHZvbHVtZSBiYXIgd2hlbiBpdCdzIHVubXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUuZGlzcGxheVZvbHVtZUNvbnRyb2wodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgcmVjb3JkZWQgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgX2RldGVjdEJyb3dzZXIuaXNDaHJvbWUpKCkgJiYgX3RoaXM1LmdldFJlY29yZFR5cGUoKSA9PT0gX3JlY29yZE1vZGUuQVVESU9fVklERU8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdmlkZW8gcHJvcGVydHkgb24gQ2hyb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvYWQoX3RoaXM1LnBsYXllci5yZWNvcmRlZERhdGEudmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9hZChfdGhpczUucGxheWVyLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdXNlIHBsYXllciBzbyB1c2VyIGNhbiBzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24gZGF0YSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubG9hZGluZ1NwaW5uZXIuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgYW5pbWF0aW9uIHRvdGFsIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RHVyYXRpb24odGhpcy5zdHJlYW1EdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBwcmV2aWV3IHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgZmlyc3QgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkQ2FudmFzLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwYXVzZSBwbGF5ZXIgc28gdXNlciBjYW4gc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IGFuaW1hdGlvbiBvbiBwbGF5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub24odGhpcy5wbGF5ZXIsICdwbGF5JywgdGhpcy5zaG93QW5pbWF0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGFuaW1hdGlvbiBvbiBwYXVzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyLCAncGF1c2UnLCB0aGlzLmhpZGVBbmltYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZWQgZHVyaW5nIHJlY29yZGluZyBhbmQgZGlzcGxheXMgdGhlIHJlbWFpbmluZyB0aW1lLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ291bnREb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ291bnREb3duKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSB0aGlzLm1heExlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSAobm93IC0gKHRoaXMuc3RhcnRUaW1lICsgdGhpcy5wYXVzZWRUaW1lKSkgLyAxMDAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJlYW1EdXJhdGlvbiA9IGN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lID49IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGF0IHRoZSBlbmRcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWUgPSBkdXJhdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNldER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lLCBkdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcigncHJvZ3Jlc3NSZWNvcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSByZWNvcmRlZCBzdHJlYW0gZHVyaW5nIHBsYXliYWNrLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogUmV0dXJucyAwIGlmIG5vIHJlY29yZGluZyBpcyBhdmFpbGFibGUgKHlldCkuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gaXNOYU4odGhpcy5zdHJlYW1DdXJyZW50VGltZSkgPyAwIDogdGhpcy5zdHJlYW1DdXJyZW50VGltZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpID09PSBfcmVjb3JkTW9kZS5BVURJT19PTkxZKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgPSB0aGlzLnN1cmZlci5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXIncyBlbGVtZW50IGRpc3BsYXlpbmcgdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtjdXJyZW50VGltZT0wXSAtIEN1cnJlbnQgcG9zaXRpb24gb2YgdGhlXHJcbiAgICAgICAgICogICAgcGxheWhlYWQgKGluIHNlY29uZHMpLlxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MF0gLSBEdXJhdGlvbiBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRDdXJyZW50VGltZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDdXJyZW50VGltZShjdXJyZW50VGltZSwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gaXNOYU4oY3VycmVudFRpbWUpID8gMCA6IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgZHVyYXRpb24gPSBpc05hTihkdXJhdGlvbikgPyAwIDogZHVyYXRpb247XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnNldEN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtQ3VycmVudFRpbWUgPSBNYXRoLm1pbihjdXJyZW50VGltZSwgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJyZW50IHRpbWUgZGlzcGxheSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5jdXJyZW50VGltZURpc3BsYXkuZm9ybWF0dGVkVGltZV8gPSB0aGlzLnBsYXllci5jb250cm9sQmFyLmN1cnJlbnRUaW1lRGlzcGxheS5jb250ZW50RWwoKS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAoMCwgX2Zvcm1hdFRpbWUyLmRlZmF1bHQpKHRoaXMuc3RyZWFtQ3VycmVudFRpbWUsIGR1cmF0aW9uLCB0aGlzLm1zRGlzcGxheU1heCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHJlY29yZGVkIHN0cmVhbSBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogUmV0dXJucyAwIGlmIG5vIHJlY29yZGluZyBpcyBhdmFpbGFibGUgKHlldCkuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldER1cmF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gaXNOYU4odGhpcy5zdHJlYW1EdXJhdGlvbikgPyAwIDogdGhpcy5zdHJlYW1EdXJhdGlvbjtcblxuICAgICAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyB0aGUgcGxheWVyJ3MgZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBkdXJhdGlvbiB0aW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0wXSAtIER1cmF0aW9uIGluIHNlY29uZHMuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0RHVyYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gaXNOYU4oZHVyYXRpb24pID8gMCA6IGR1cmF0aW9uO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zZXREdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBkdXJhdGlvbiBkaXNwbGF5IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLmR1cmF0aW9uRGlzcGxheS5mb3JtYXR0ZWRUaW1lXyA9IHRoaXMucGxheWVyLmNvbnRyb2xCYXIuZHVyYXRpb25EaXNwbGF5LmNvbnRlbnRFbCgpLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICgwLCBfZm9ybWF0VGltZTIuZGVmYXVsdCkoZHVyYXRpb24sIGR1cmF0aW9uLCB0aGlzLm1zRGlzcGxheU1heCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgbG9hZGluZyBkYXRhLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHsoc3RyaW5nfGJsb2J8ZmlsZSl9IHVybCAtIEVpdGhlciB0aGUgVVJMIG9mIHRoZSBtZWRpYSBmaWxlLFxyXG4gICAgICAgICAqICAgICBhIEJsb2IsIGEgRmlsZSBvYmplY3Qgb3IgTWVkaWFTdHJlYW0uXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIC8vIHZpc3VhbGl6ZSByZWNvcmRlZCBCbG9iIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5sb2FkKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsIGluc3RhbmNlb2YgQmxvYiB8fCB1cmwgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gYmxvYiB1c2luZyBjcmVhdGVPYmplY3RVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfYnJvd3NlclNoaW0yLmRlZmF1bHQpKHVybCwgdGhpcy5tZWRpYUVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBzdHJlYW0gd2l0aG91dCBjcmVhdGVPYmplY3RVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfYnJvd3NlclNoaW0yLmRlZmF1bHQpKHVybCwgdGhpcy5tZWRpYUVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvdyBzYXZlIGFzIGRpYWxvZyBpbiBicm93c2VyIHNvIHRoZSB1c2VyIGNhbiBzdG9yZSB0aGUgcmVjb3JkZWQgbWVkaWFcclxuICAgICAgICAgKiBsb2NhbGx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5hbWUgLSBPYmplY3Qgd2l0aCBvbmUgb3IgbW9yZSBuYW1lcyBmb3IgdGhlIHBhcnRpY3VsYXJcclxuICAgICAgICAgKiAgICAgYmxvYihzKSB5b3Ugd2FudCB0byBzYXZlLiBGaWxlIGV4dGVuc2lvbnMgYXJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAgICAgICogICAgIEZvciBleGFtcGxlOiB7J3ZpZGVvJzogJ25hbWUtb2YtdmlkZW8tZmlsZSd9LiBTdXBwb3J0ZWQga2V5cyBhcmVcclxuICAgICAgICAgKiAgICAgJ2F1ZGlvJywgJ3ZpZGVvJyBhbmQgJ2dpZicuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVBcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlQXMobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lICYmIG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNhdmVBcyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlc3Ryb3kgcGx1Z2luIG9ubHkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBVc2UgYGRlc3Ryb3lgIHRvIHJlbW92ZSB0aGUgcGx1Z2luIGFuZCB0aGUgcGxheWVyLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAvLyBkaXNhYmxlIGNvbW1vbiBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9mZigncmVhZHknKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9mZigndXNlcmluYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5vZmYoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgY2FsbGJhY2tzIGlmIHJlY29yZGluZyBpcyBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm9mZigncmVjb3JkQ29tcGxldGUnLCB0aGlzLmVuZ2luZVN0b3BDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN0b3AgcmVjb3JkaW5nIGFuZCBkZXZpY2VcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdG9wRGV2aWNlKCk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jbGVhckludGVydmFsKHRoaXMuY291bnREb3duKTtcblxuICAgICAgICAgICAgLy8gZGlzcG9zZSB3YXZlc3VyZmVyLmpzXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRSZWNvcmRUeXBlKCkgPT0gX3JlY29yZE1vZGUuQVVESU9fT05MWSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1cmZlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIGRpc3Bvc2VzIHBsYXllclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgX2dldChSZWNvcmQucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkLnByb3RvdHlwZSksICdkaXNwb3NlJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlc3Ryb3kgcGx1Z2luIGFuZCBwbGF5ZXJzIGFuZCBjbGVhbnVwIHJlc291cmNlcy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzZXQgdGhlIHBsdWdpbi5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICAgICAgLy8gcHJldmVudCBjYWxsYmFja3MgaWYgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAodGhpcy5lbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUub2ZmKCdyZWNvcmRDb21wbGV0ZScsIHRoaXMuZW5naW5lU3RvcENhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3RvcCByZWNvcmRpbmcgYW5kIGRldmljZVxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BEZXZpY2UoKTtcblxuICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd25cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pO1xuXG4gICAgICAgICAgICAvLyByZXNldCBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLmxvYWRPcHRpb25zKCk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IHJlY29yZGVyIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgcmVjb3JkIHRpbWVcbiAgICAgICAgICAgIHRoaXMuc2V0RHVyYXRpb24odGhpcy5tYXhMZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSgwKTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgcGxheWVyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VyZmVyICYmIHRoaXMuc3VyZmVyLnN1cmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1wdHkgbGFzdCBmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLklNQUdFX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IFVJXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNhbWVyYUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBoaWRlIHBsYXkgY29udHJvbFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5wbGF5VG9nZ2xlLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gc2hvdyBkZXZpY2Ugc2VsZWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZGV2aWNlQnV0dG9uLnNob3coKTtcblxuICAgICAgICAgICAgLy8gaGlkZSByZWNvcmQgYnV0dG9uXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRUb2dnbGUuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBsb2FkZWRtZXRhZGF0YSByZXNldHMgdGhlIGR1cmF0aW9uRGlzcGxheSBmb3IgdGhlXG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbWF4IHJlY29yZCB0aW1lXG4gICAgICAgICAgICAgICAgX3RoaXM2LnNldER1cmF0aW9uKF90aGlzNi5tYXhMZW5ndGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXNldCB0aGUgcGx1Z2luIHJlY29yZGVyIHN0YXRlLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2V0U3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRTdGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZGV2aWNlQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRldmljZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCByZWNvcmRlciB0eXBlLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSZWNvcmRUeXBlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlY29yZFR5cGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9yZWNvcmRNb2RlLmdldFJlY29yZGVyTW9kZSkodGhpcy5yZWNvcmRJbWFnZSwgdGhpcy5yZWNvcmRBdWRpbywgdGhpcy5yZWNvcmRWaWRlbywgdGhpcy5yZWNvcmRBbmltYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGFuZCBkaXNwbGF5IHNuYXBzaG90IGltYWdlLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZVNuYXBzaG90JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVNuYXBzaG90KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZUZyYW1lKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gdHVybiB0aGUgY2FudmFzIGRhdGEgaW50byBiYXNlNjQgZGF0YSB3aXRoIGEgUE5HIGhlYWRlclxuICAgICAgICAgICAgICAgIF90aGlzNy5wbGF5ZXIucmVjb3JkZWREYXRhID0gcmVzdWx0LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBoaWRlIHByZXZpZXcgdmlkZW9cbiAgICAgICAgICAgICAgICBfdGhpczcubWVkaWFFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBzbmFwc2hvdFxuICAgICAgICAgICAgICAgIF90aGlzNy5wbGF5ZXIucmVjb3JkQ2FudmFzLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vIHN0b3AgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgX3RoaXM3LnN0b3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzZXQgVUkgZm9yIHJldHJ5aW5nIGEgc25hcHNob3QgaW1hZ2UuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmV0cnlTbmFwc2hvdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXRyeVNuYXBzaG90KCkge1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyByZXRyeTogaGlkZSB0aGUgc25hcHNob3RcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHNob3cgcHJldmlldyB2aWRlb1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZWwoKS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSBmcmFtZSBmcm9tIGNhbWVyYSBhbmQgY29weSBkYXRhIHRvIGNhbnZhcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjYXB0dXJlRnJhbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZUZyYW1lKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBkZXRlY3RlZCA9ICgwLCBfZGV0ZWN0QnJvd3Nlci5kZXRlY3RCcm93c2VyKSgpO1xuICAgICAgICAgICAgdmFyIHJlY29yZENhbnZhcyA9IHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5lbCgpLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemUgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGNhbWVyYSxcbiAgICAgICAgICAgIC8vIHdoaWNoIGFsc28gd2lwZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgcmVjb3JkQ2FudmFzLndpZHRoID0gdGhpcy5wbGF5ZXIud2lkdGgoKTtcbiAgICAgICAgICAgIHJlY29yZENhbnZhcy5oZWlnaHQgPSB0aGlzLnBsYXllci5oZWlnaHQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBNZWRpYUNhcHR1cmUgaXMgb25seSBzdXBwb3J0ZWQgb246XG4gICAgICAgICAgICAgICAgLy8gLSBDaHJvbWUgNjAgYW5kIG5ld2VyIChzZWVcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL21lZGlhY2FwdHVyZS1pbWFnZS9ibG9iL2doLXBhZ2VzL2ltcGxlbWVudGF0aW9uLXN0YXR1cy5tZClcbiAgICAgICAgICAgICAgICAvLyAtIEZpcmVmb3ggYmVoaW5kIGZsYWcgKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4ODE3NylcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGltcG9ydGluZyBJbWFnZUNhcHR1cmUgY2FuIGZhaWwgd2hlbiBlbmFibGluZyBjaHJvbWUgZmxhZyBpcyBzdGlsbCByZXF1aXJlZC5cbiAgICAgICAgICAgICAgICAvLyBpZiBzbzsgaWdub3JlIGFuZCBjb250aW51ZVxuICAgICAgICAgICAgICAgIGlmIChkZXRlY3RlZC5icm93c2VyID09PSAnY2hyb21lJyAmJiBkZXRlY3RlZC52ZXJzaW9uID49IDYwICYmICh0eXBlb2YgSW1hZ2VDYXB0dXJlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihJbWFnZUNhcHR1cmUpKSA9PT0gKHR5cGVvZiBGdW5jdGlvbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoRnVuY3Rpb24pKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNrID0gX3RoaXM4LnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlQ2FwdHVyZSA9IG5ldyBJbWFnZUNhcHR1cmUodHJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob3RvU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aDogcmVjb3JkQ2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0OiByZWNvcmRDYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWtlIHBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQ2FwdHVyZS50YWtlUGhvdG8ocGhvdG9TZXR0aW5ncykudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltYWdlQml0bWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IGEgZnJhbWUgYW5kIGNvcHkgaXQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM4LmRyYXdDYW52YXMocmVjb3JkQ2FudmFzLCBpbWFnZUJpdG1hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRDYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm8gSW1hZ2VDYXB0dXJlIGF2YWlsYWJsZTogZG8gaXQgdGhlIG9sZHNrb29sIHdheVxuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGEgZnJhbWUgYW5kIGNvcHkgaXQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgX3RoaXM4LmRyYXdDYW52YXMocmVjb3JkQ2FudmFzLCBfdGhpczgubWVkaWFFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBvdGhlcnNcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZENhbnZhcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyYXcgaW1hZ2UgZnJhbWUgb24gY2FudmFzIGVsZW1lbnQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZHJhd0NhbnZhcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhcywgZWxlbWVudCkge1xuICAgICAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGVsZW1lbnQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCBwcmV2aWV3IG9mIHZpZGVvIHN0cmVhbS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydFZpZGVvUHJldmlldycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFZpZGVvUHJldmlldygpIHtcbiAgICAgICAgICAgIC8vIGRpc2FibGUgcGxheWJhY2sgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9mZigndGltZXVwZGF0ZScpO1xuICAgICAgICAgICAgdGhpcy5vZmYoJ2R1cmF0aW9uY2hhbmdlJyk7XG4gICAgICAgICAgICB0aGlzLm9mZignbG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICAgIHRoaXMub2ZmKCdwbGF5Jyk7XG5cbiAgICAgICAgICAgIC8vIG11dGUgbG9jYWwgYXVkaW9cbiAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50Lm11dGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gaGlkZSB2b2x1bWUgY29udHJvbCB0byBwcmV2ZW50IGZlZWRiYWNrXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWb2x1bWVDb250cm9sKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb3IgcmVzdW1lIGxpdmUgcHJldmlld1xuICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuc3RyZWFtKTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgYW5pbWF0ZWQgR0lGLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Nob3dBbmltYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd0FuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25EaXNwbGF5ID0gdGhpcy5wbGF5ZXIuYW5pbWF0aW9uRGlzcGxheS5lbCgpLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW1hZ2Ugc2l6ZSB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcmVjb3JkZWQgYW5pbWF0aW9uXG4gICAgICAgICAgICBhbmltYXRpb25EaXNwbGF5LndpZHRoID0gdGhpcy5wbGF5ZXIud2lkdGgoKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRpc3BsYXkuaGVpZ2h0ID0gdGhpcy5wbGF5ZXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRDYW52YXMuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBzaG93IHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgICgwLCBfYnJvd3NlclNoaW0yLmRlZmF1bHQpKHRoaXMucGxheWVyLnJlY29yZGVkRGF0YSwgYW5pbWF0aW9uRGlzcGxheSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0aW9uRGlzcGxheS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIaWRlIGFuaW1hdGVkIEdJRi5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoaWRlQW5pbWF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGVBbmltYXRpb24oKSB7XG4gICAgICAgICAgICAvLyBzaG93IHRoZSBmaXJzdCBmcmFtZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkQ2FudmFzLnNob3coKTtcblxuICAgICAgICAgICAgLy8gaGlkZSB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICB0aGlzLnBsYXllci5hbmltYXRpb25EaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZSB0aW1lIGR1cmluZyBwbGF5YmFjay5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwbGF5YmFja1RpbWVVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheWJhY2tUaW1lVXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpLCB0aGlzLnN0cmVhbUR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlY2VpdmVkIG5ldyB0aW1lc3RhbXAgKHdoZW4gdGltZVNsaWNlIG9wdGlvbiBpcyBlbmFibGVkKS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblRpbWVTdGFtcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRpbWVTdGFtcChjdXJyZW50LCBhbGwpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lc3RhbXAgPSBjdXJyZW50O1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWxsVGltZXN0YW1wcyA9IGFsbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGJsb2IgKG9ubHkgZm9yIE1lZGlhU3RyZWFtUmVjb3JkZXIpXG4gICAgICAgICAgICB2YXIgaW50ZXJuYWw7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMuZW5naW5lLmVuZ2luZS5hdWRpb1JlY29yZGVyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMuZW5naW5lLmVuZ2luZS5naWZSZWNvcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMuZW5naW5lLmVuZ2luZS52aWRlb1JlY29yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW50ZXJuYWwgPSBpbnRlcm5hbC5nZXRJbnRlcm5hbFJlY29yZGVyKCk7XG4gICAgICAgICAgICBpZiAoaW50ZXJuYWwgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbVJlY29yZGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkZWREYXRhID0gaW50ZXJuYWwuZ2V0QXJyYXlPZkJsb2JzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbmplY3QgZmlsZSBpbmZvIGZvciBuZXdlc3QgYmxvYlxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZEZpbGVJbmZvKHRoaXMucGxheWVyLnJlY29yZGVkRGF0YVt0aGlzLnBsYXllci5yZWNvcmRlZERhdGEubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBub3RpZnkgb3RoZXJzXG4gICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1lc3RhbXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3RzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtZWRpYSBpbnB1dCBhbmQgb3V0cHV0IGRldmljZXNcclxuICAgICAgICAgKiBhdmFpbGFibGUgb24gdGhlIHN5c3RlbS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VudW1lcmF0ZURldmljZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW51bWVyYXRlRGV2aWNlcygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMgfHwgIW5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmVudW1lcmF0ZUVycm9yQ29kZSA9ICdlbnVtZXJhdGVEZXZpY2VzKCkgbm90IHN1cHBvcnRlZC4nO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2VudW1lcmF0ZUVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBMaXN0IGNhbWVyYXMgYW5kIG1pY3JvcGhvbmVzLlxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGRldmljZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpczkuZGV2aWNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGRldmljZXMuZm9yRWFjaChmdW5jdGlvbiAoZGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzOS5kZXZpY2VzLnB1c2goZGV2aWNlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICBfdGhpczkucGxheWVyLnRyaWdnZXIoJ2VudW1lcmF0ZVJlYWR5Jyk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM5LnBsYXllci5lbnVtZXJhdGVFcnJvckNvZGUgPSBlcnI7XG4gICAgICAgICAgICAgICAgX3RoaXM5LnBsYXllci50cmlnZ2VyKCdlbnVtZXJhdGVFcnJvcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGFuZ2UgdGhlIGF1ZGlvIG91dHB1dCBkZXZpY2UuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgLSBJZCBvZiBhdWRpbyBvdXRwdXQgZGV2aWNlLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRBdWRpb091dHB1dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdWRpb091dHB1dChkZXZpY2VJZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAvLyB1c2Ugd2F2ZXN1cmZlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIuc2V0U2lua0lkKGRldmljZUlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMTAucGxheWVyLnRyaWdnZXIoJ2F1ZGlvT3V0cHV0UmVhZHknKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHBsYXllci50ZWNoXy5lbF87XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXZpY2VJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LnNpbmtJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFNpbmtJZChkZXZpY2VJZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMxMC5wbGF5ZXIudHJpZ2dlcignYXVkaW9PdXRwdXRSZWFkeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGF1ZGlvIG91dHB1dCBkZXZpY2Ugc2VsZWN0aW9uLic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBkZXZpY2VJZDogJyArIGRldmljZUlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBlcnJvciBpZiB3ZSBnZXQgaGVyZTogbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2Vycm9yJywgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgb3IgaGlkZSB0aGUgdm9sdW1lIG1lbnUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzcGxheSAtIEhpZGUvc2hvdyB2b2x1bWUgY29udHJvbC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGxheVZvbHVtZUNvbnRyb2wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGxheVZvbHVtZUNvbnRyb2woZGlzcGxheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbnRyb2xCYXIudm9sdW1lUGFuZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci52b2x1bWVQYW5lbC5lbCgpLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlY29yZDtcbn0oUGx1Z2luKTtcblxuLy8gdmVyc2lvbiBuciBnZXRzIHJlcGxhY2VkIGR1cmluZyBidWlsZFxuXG5cblJlY29yZC5WRVJTSU9OID0gJ2Rldic7XG5cbi8vIHJlZ2lzdGVyIHBsdWdpblxuX3ZpZGVvMi5kZWZhdWx0LlJlY29yZCA9IFJlY29yZDtcbl92aWRlbzIuZGVmYXVsdC5yZWdpc3RlclBsdWdpbigncmVjb3JkJywgUmVjb3JkKTtcblxuLy8gZXhwb3J0IHBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUmVjb3JkOiBSZWNvcmRcbn07IiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cclxuLyogZXNsaW50LWVudiBxdW5pdCAqL1xyXG52YXIgcSA9IHdpbmRvdy5RVW5pdDtcclxuXHJcbnZhciB2ciA9IHJlcXVpcmUoJy4uL2VzNS92aWRlb2pzLnJlY29yZC5qcycpO1xyXG5cclxucS5tb2R1bGUoJ0Jyb3dzZXJpZnkgUmVxdWlyZSB2aWRlb2pzLnJlY29yZCcpO1xyXG5xLnRlc3QoJ3ZpZGVvanMucmVjb3JkIHNob3VsZCBiZSByZXF1aXJhYmxlIGFuZCBidW5kbGVkIHZpYSBicm93c2VyaWZ5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQub2sodnIsICd2aWRlb2pzLnJlY29yZCBpcyByZXF1aXJlZCBwcm9wZXJseScpO1xyXG59KTtcclxuXHJcbnZhciBsYW1lID0gcmVxdWlyZSgnLi4vZXM1L3BsdWdpbnMvbGFtZWpzLXBsdWdpbi5qcycpO1xyXG5cclxucS5tb2R1bGUoJ0Jyb3dzZXJpZnkgUmVxdWlyZSBsYW1lanMnKTtcclxucS50ZXN0KCdsYW1lanMgcGx1Z2luIHNob3VsZCBiZSByZXF1aXJhYmxlIGFuZCBidW5kbGVkIHZpYSBicm93c2VyaWZ5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQub2sobGFtZSwgJ3ZpZGVvanMucmVjb3JkLmxhbWVqcyBpcyByZXF1aXJlZCBwcm9wZXJseScpO1xyXG59KTtcclxuXHJcblxyXG52YXIgbGlidm9yYmlzID0gcmVxdWlyZSgnLi4vZXM1L3BsdWdpbnMvbGlidm9yYmlzLXBsdWdpbi5qcycpO1xyXG5cclxucS5tb2R1bGUoJ0Jyb3dzZXJpZnkgUmVxdWlyZSBsaWJ2b3JiaXMnKTtcclxucS50ZXN0KCdsaWJ2b3JiaXMgcGx1Z2luIHNob3VsZCBiZSByZXF1aXJhYmxlIGFuZCBidW5kbGVkIHZpYSBicm93c2VyaWZ5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQub2sobGlidm9yYmlzLCAndmlkZW9qcy5yZWNvcmQubGlidm9yYmlzIGlzIHJlcXVpcmVkIHByb3Blcmx5Jyk7XHJcbn0pO1xyXG5cclxuXHJcbnZhciBvcHVzID0gcmVxdWlyZSgnLi4vZXM1L3BsdWdpbnMvb3B1cy1yZWNvcmRlci1wbHVnaW4uanMnKTtcclxuXHJcbnEubW9kdWxlKCdCcm93c2VyaWZ5IFJlcXVpcmUgb3B1cy1yZWNvcmRlcicpO1xyXG5xLnRlc3QoJ29wdXMtcmVjb3JkZXIgcGx1Z2luIHNob3VsZCBiZSByZXF1aXJhYmxlIGFuZCBidW5kbGVkIHZpYSBicm93c2VyaWZ5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQub2sob3B1cywgJ3ZpZGVvanMucmVjb3JkLm9wdXMtcmVjb3JkZXIgaXMgcmVxdWlyZWQgcHJvcGVybHknKTtcclxufSk7XHJcblxyXG5cclxudmFyIHJlY29yZGVyanMgPSByZXF1aXJlKCcuLi9lczUvcGx1Z2lucy9yZWNvcmRlcmpzLXBsdWdpbi5qcycpO1xyXG5cclxucS5tb2R1bGUoJ0Jyb3dzZXJpZnkgUmVxdWlyZSByZWNvcmRlcmpzJyk7XHJcbnEudGVzdCgncmVjb3JkZXJqcyBwbHVnaW4gc2hvdWxkIGJlIHJlcXVpcmFibGUgYW5kIGJ1bmRsZWQgdmlhIGJyb3dzZXJpZnknLCBmdW5jdGlvbihhc3NlcnQpIHtcclxuICAgIGFzc2VydC5vayhyZWNvcmRlcmpzLCAndmlkZW9qcy5yZWNvcmQucmVjb3JkZXJqcyBpcyByZXF1aXJlZCBwcm9wZXJseScpO1xyXG59KTtcclxuIl19
