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
            this.engine.videoBitsPerSecond = this.videoBitsPerSecond;
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
            this.videoBitsPerSecond = recordOptions.videoBitsPerSecond;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvY29udHJvbHMvYW5pbWF0aW9uLWRpc3BsYXkuanMiLCJlczUvY29udHJvbHMvY2FtZXJhLWJ1dHRvbi5qcyIsImVzNS9jb250cm9scy9kZXZpY2UtYnV0dG9uLmpzIiwiZXM1L2NvbnRyb2xzL3JlY29yZC1jYW52YXMuanMiLCJlczUvY29udHJvbHMvcmVjb3JkLWluZGljYXRvci5qcyIsImVzNS9jb250cm9scy9yZWNvcmQtdG9nZ2xlLmpzIiwiZXM1L2RlZmF1bHRzLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtZW5naW5lLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtbW9kZS5qcyIsImVzNS9lbmdpbmUvcmVjb3JkLXJ0Yy5qcyIsImVzNS9wbHVnaW5zL2xhbWVqcy1wbHVnaW4uanMiLCJlczUvcGx1Z2lucy9saWJ2b3JiaXMtcGx1Z2luLmpzIiwiZXM1L3BsdWdpbnMvb3B1cy1yZWNvcmRlci1wbHVnaW4uanMiLCJlczUvcGx1Z2lucy9yZWNvcmRlcmpzLXBsdWdpbi5qcyIsImVzNS91dGlscy9icm93c2VyLXNoaW0uanMiLCJlczUvdXRpbHMvZGV0ZWN0LWJyb3dzZXIuanMiLCJlczUvdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJlczUvdmlkZW9qcy5yZWNvcmQuanMiLCJub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsInRlc3QvYnJvd3NlcmlmeS10ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2hqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIGFuaW1hdGlvbi1kaXNwbGF5LmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXHJcbiAqIEltYWdlIGZvciBkaXNwbGF5aW5nIGFuaW1hdGVkIEdJRiBpbWFnZS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkNvbXBvbmVudFxyXG4qL1xuXG52YXIgQW5pbWF0aW9uRGlzcGxheSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRpb25EaXNwbGF5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbmltYXRpb25EaXNwbGF5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRpb25EaXNwbGF5KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0aW9uRGlzcGxheS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGlvbkRpc3BsYXkpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbmltYXRpb25EaXNwbGF5LCBbe1xuICAgIGtleTogJ2NyZWF0ZUVsJyxcblxuXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGBBbmltYXRpb25EaXNwbGF5YHMgRE9NIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqICAgICAgICAgVGhlIGRvbSBlbGVtZW50IHRoYXQgZ2V0cyBjcmVhdGVkLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsKCkge1xuICAgICAgcmV0dXJuIF9nZXQoQW5pbWF0aW9uRGlzcGxheS5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBbmltYXRpb25EaXNwbGF5LnByb3RvdHlwZSksICdjcmVhdGVFbCcsIHRoaXMpLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWFuaW1hdGlvbi1kaXNwbGF5JyxcbiAgICAgICAgaW5uZXJIVE1MOiAnPGltZyAvPidcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRpb25EaXNwbGF5O1xufShDb21wb25lbnQpO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0FuaW1hdGlvbkRpc3BsYXknLCBBbmltYXRpb25EaXNwbGF5KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQW5pbWF0aW9uRGlzcGxheTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSBjYW1lcmEtYnV0dG9uLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxyXG4gKiBCdXR0b24gdG8gdG9nZ2xlIGJldHdlZW4gY3JlYXRlIGFuZCByZXRyeSBzbmFwc2hvdCBpbWFnZS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkJ1dHRvblxyXG4qL1xuXG52YXIgQ2FtZXJhQnV0dG9uID0gZnVuY3Rpb24gKF9CdXR0b24pIHtcbiAgICBfaW5oZXJpdHMoQ2FtZXJhQnV0dG9uLCBfQnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIENhbWVyYUJ1dHRvbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbWVyYUJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDYW1lcmFCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYW1lcmFCdXR0b24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FtZXJhQnV0dG9uLCBbe1xuICAgICAgICBrZXk6ICdidWlsZENTU0NsYXNzJyxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICAgICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZENTU0NsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuICd2anMtY2FtZXJhLWJ1dHRvbiB2anMtY29udHJvbCB2anMtYnV0dG9uIHZqcy1pY29uLXBob3RvLWNhbWVyYSc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgdGhlIGBDYW1lcmFCdXR0b25gIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgYWN0aXZhdGVkIG9yIGNsaWNrZWQuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICAgICAgICBfZ2V0KENhbWVyYUJ1dHRvbi5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYW1lcmFCdXR0b24ucHJvdG90eXBlKSwgJ2VuYWJsZScsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMub24odGhpcy5wbGF5ZXJfLCAnc3RhcnRSZWNvcmQnLCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLnBsYXllcl8sICdzdG9wUmVjb3JkJywgdGhpcy5vblN0b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlzYWJsZSB0aGUgYENhbWVyYUJ1dHRvbmAgZWxlbWVudCBzbyB0aGF0IGl0IGNhbm5vdCBiZSBhY3RpdmF0ZWQgb3IgY2xpY2tlZC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgICAgICAgX2dldChDYW1lcmFCdXR0b24ucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FtZXJhQnV0dG9uLnByb3RvdHlwZSksICdkaXNhYmxlJywgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXJfLCAnc3RhcnRSZWNvcmQnLCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXJfLCAnc3RvcFJlY29yZCcsIHRoaXMub25TdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBldmVudFxyXG4gICAgICAgICAqICAgICAgICBUaGUgYHRhcGAgb3IgYGNsaWNrYCBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIGJlXHJcbiAgICAgICAgICogICAgICAgIGNhbGxlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBsaXN0ZW5zIHRhcFxyXG4gICAgICAgICAqIEBsaXN0ZW5zIGNsaWNrXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjb3JkZXIgPSB0aGlzLnBsYXllcl8ucmVjb3JkKCk7XG5cbiAgICAgICAgICAgIGlmICghcmVjb3JkZXIuaXNQcm9jZXNzaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgc25hcHNob3RcbiAgICAgICAgICAgICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZXRyeVxuICAgICAgICAgICAgICAgIHJlY29yZGVyLnJldHJ5U25hcHNob3QoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGNhbWVyYSBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkIHRoZSB2anMtaWNvbi1yZXBsYXkgY2xhc3MgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gW2V2ZW50XVxyXG4gICAgICAgICAqICAgICAgICBUaGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBydW4uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyBQbGF5ZXIjc3RhcnRSZWNvcmRcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGVsZW1lbnQgY2xhc3Mgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd2anMtaWNvbi1waG90by1jYW1lcmEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1pY29uLXJlcGxheScpO1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGJ1dHRvbiB0ZXh0XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KCdSZXRyeScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkIHRoZSB2anMtaWNvbi1waG90by1jYW1lcmEgY2xhc3MgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gW2V2ZW50XVxyXG4gICAgICAgICAqICAgICAgICBUaGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBydW4uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyBQbGF5ZXIjc3RvcFJlY29yZFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblN0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25TdG9wKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGVsZW1lbnQgY2xhc3Mgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd2anMtaWNvbi1yZXBsYXknKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1pY29uLXBob3RvLWNhbWVyYScpO1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGJ1dHRvbiB0ZXh0XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KCdJbWFnZScpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbWVyYUJ1dHRvbjtcbn0oQnV0dG9uKTtcblxuLyoqXHJcbiAqIFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGRpc3BsYXkgb3ZlciB0aGUgYENhbWVyYUJ1dHRvbmBzIGNvbnRyb2xzLiBBZGRlZCBmb3IgbG9jYWxpemF0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cblxuXG5DYW1lcmFCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdJbWFnZSc7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ2FtZXJhQnV0dG9uJywgQ2FtZXJhQnV0dG9uKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FtZXJhQnV0dG9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgZGV2aWNlLWJ1dHRvbi5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcclxuICogQnV0dG9uIHRvIHNlbGVjdCByZWNvcmRpbmcgZGV2aWNlLlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuQnV0dG9uXHJcbiovXG5cbnZhciBEZXZpY2VCdXR0b24gPSBmdW5jdGlvbiAoX0J1dHRvbikge1xuICBfaW5oZXJpdHMoRGV2aWNlQnV0dG9uLCBfQnV0dG9uKTtcblxuICBmdW5jdGlvbiBEZXZpY2VCdXR0b24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldmljZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERldmljZUJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERldmljZUJ1dHRvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERldmljZUJ1dHRvbiwgW3tcbiAgICBrZXk6ICdoYW5kbGVDbGljaycsXG5cbiAgICAvKipcclxuICAgICAqIFRoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGlzIGJ1dHRvbiBnZXRzOlxyXG4gICAgICpcclxuICAgICAqIC0gQ2xpY2tlZCAodmlhIHRoZSBgY2xpY2tgIGV2ZW50LCBsaXN0ZW5pbmcgc3RhcnRzIGluIHRoZSBjb25zdHJ1Y3RvcilcclxuICAgICAqIC0gVGFwcGVkICh2aWEgdGhlIGB0YXBgIGV2ZW50LCBsaXN0ZW5pbmcgc3RhcnRzIGluIHRoZSBjb25zdHJ1Y3RvcilcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBldmVudFxyXG4gICAgICogICAgICAgIFRoZSBga2V5ZG93bmAsIGB0YXBgLCBvciBgY2xpY2tgIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgZnVuY3Rpb24gdG8gYmVcclxuICAgICAqICAgICAgICBjYWxsZWQuXHJcbiAgICAgKlxyXG4gICAgICogQGxpc3RlbnMgdGFwXHJcbiAgICAgKiBAbGlzdGVucyBjbGlja1xyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyBvcGVuIGRldmljZSBkaWFsb2dcbiAgICAgIHRoaXMucGxheWVyXy5yZWNvcmQoKS5nZXREZXZpY2UoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGV2aWNlQnV0dG9uO1xufShCdXR0b24pO1xuXG4vKipcclxuICogVGhlIHRleHQgdGhhdCBzaG91bGQgZGlzcGxheSBvdmVyIHRoZSBgRGV2aWNlQnV0dG9uYHMgY29udHJvbHMuIEFkZGVkIGZvciBsb2NhbGl6YXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xuXG5cbkRldmljZUJ1dHRvbi5wcm90b3R5cGUuY29udHJvbFRleHRfID0gJ0RldmljZSc7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRGV2aWNlQnV0dG9uJywgRGV2aWNlQnV0dG9uKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRGV2aWNlQnV0dG9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSByZWNvcmQtY2FudmFzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXHJcbiAqIENhbnZhcyBmb3IgZGlzcGxheWluZyBzbmFwc2hvdCBpbWFnZS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkNvbXBvbmVudFxyXG4qL1xuXG52YXIgUmVjb3JkQ2FudmFzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlY29yZENhbnZhcywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVjb3JkQ2FudmFzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNvcmRDYW52YXMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWNvcmRDYW52YXMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRDYW52YXMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWNvcmRDYW52YXMsIFt7XG4gICAga2V5OiAnY3JlYXRlRWwnLFxuXG5cbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgYFJlY29yZENhbnZhc2BzIERPTSBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiAgICAgICAgIFRoZSBkb20gZWxlbWVudCB0aGF0IGdldHMgY3JlYXRlZC5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KFJlY29yZENhbnZhcy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRDYW52YXMucHJvdG90eXBlKSwgJ2NyZWF0ZUVsJywgdGhpcykuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtcmVjb3JkLWNhbnZhcycsXG4gICAgICAgIGlubmVySFRNTDogJzxjYW52YXM+PC9jYW52YXM+J1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlY29yZENhbnZhcztcbn0oQ29tcG9uZW50KTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNvcmRDYW52YXMnLCBSZWNvcmRDYW52YXMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWNvcmRDYW52YXM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgcmVjb3JkLWluZGljYXRvci5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxyXG4gKiBJY29uIGluZGljYXRpbmcgcmVjb3JkaW5nIGlzIGFjdGl2ZS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkNvbXBvbmVudFxyXG4qL1xuXG52YXIgUmVjb3JkSW5kaWNhdG9yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmVjb3JkSW5kaWNhdG9yLCBfQ29tcG9uZW50KTtcblxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciB0aGUgY2xhc3MuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7KHZpZGVvanMuUGxheWVyfE9iamVjdCl9IHBsYXllciAtIFZpZGVvLmpzIHBsYXllciBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUGxheWVyIG9wdGlvbnMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSZWNvcmRJbmRpY2F0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNvcmRJbmRpY2F0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWNvcmRJbmRpY2F0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRJbmRpY2F0b3IpKS5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucykpO1xuXG4gICAgICAgIF90aGlzLmVuYWJsZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGBSZWNvcmRJbmRpY2F0b3JgcyBET00gZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogICAgICAgICBUaGUgZG9tIGVsZW1lbnQgdGhhdCBnZXRzIGNyZWF0ZWQuXHJcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlY29yZEluZGljYXRvciwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlRWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2dldChSZWNvcmRJbmRpY2F0b3IucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkSW5kaWNhdG9yLnByb3RvdHlwZSksICdjcmVhdGVFbCcsIHRoaXMpLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtcmVjb3JkLWluZGljYXRvciB2anMtY29udHJvbCcsXG4gICAgICAgICAgICAgICAgZGlyOiAnbHRyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyXywgJ3N0YXJ0UmVjb3JkJywgdGhpcy5zaG93KTtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5wbGF5ZXJfLCAnc3RvcFJlY29yZCcsIHRoaXMuaGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEaXNhYmxlIGV2ZW50IGhhbmRsZXJzLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdGFydFJlY29yZCcsIHRoaXMuc2hvdyk7XG4gICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdG9wUmVjb3JkJywgdGhpcy5oaWRlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmRJbmRpY2F0b3I7XG59KENvbXBvbmVudCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkSW5kaWNhdG9yJywgUmVjb3JkSW5kaWNhdG9yKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkSW5kaWNhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIHJlY29yZC10b2dnbGUuanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG52YXIgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXHJcbiAqIEJ1dHRvbiB0byB0b2dnbGUgYmV0d2VlbiBzdGFydCBhbmQgc3RvcCByZWNvcmRpbmcuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5CdXR0b25cclxuKi9cblxudmFyIFJlY29yZFRvZ2dsZSA9IGZ1bmN0aW9uIChfQnV0dG9uKSB7XG4gICAgX2luaGVyaXRzKFJlY29yZFRvZ2dsZSwgX0J1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBSZWNvcmRUb2dnbGUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNvcmRUb2dnbGUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkVG9nZ2xlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkVG9nZ2xlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlY29yZFRvZ2dsZSwgW3tcbiAgICAgICAga2V5OiAnYnVpbGRDU1NDbGFzcycsXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnVpbGRzIHRoZSBkZWZhdWx0IERPTSBgY2xhc3NOYW1lYC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAgICAgKiAgICAgICAgIFRoZSBET00gYGNsYXNzTmFtZWAgZm9yIHRoaXMgb2JqZWN0LlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRDU1NDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiAndmpzLXJlY29yZC1idXR0b24gdmpzLWNvbnRyb2wgdmpzLWJ1dHRvbiB2anMtaWNvbi1yZWNvcmQtc3RhcnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5hYmxlIHRoZSBgUmVjb3JkVG9nZ2xlYCBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIGFjdGl2YXRlZCBvciBjbGlja2VkLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgICAgICAgX2dldChSZWNvcmRUb2dnbGUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkVG9nZ2xlLnByb3RvdHlwZSksICdlbmFibGUnLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyXywgJ3N0YXJ0UmVjb3JkJywgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5wbGF5ZXJfLCAnc3RvcFJlY29yZCcsIHRoaXMub25TdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERpc2FibGUgdGhlIGBSZWNvcmRUb2dnbGVgIGVsZW1lbnQgc28gdGhhdCBpdCBjYW5ub3QgYmUgYWN0aXZhdGVkIG9yIGNsaWNrZWQuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2FibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgICAgICAgIF9nZXQoUmVjb3JkVG9nZ2xlLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFRvZ2dsZS5wcm90b3R5cGUpLCAnZGlzYWJsZScsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyXywgJ3N0YXJ0UmVjb3JkJywgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyXywgJ3N0b3BSZWNvcmQnLCB0aGlzLm9uU3RvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gZXZlbnRcclxuICAgICAgICAgKiAgICAgICAgVGhlIGB0YXBgIG9yIGBjbGlja2AgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBiZVxyXG4gICAgICAgICAqICAgICAgICBjYWxsZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyB0YXBcclxuICAgICAgICAgKiBAbGlzdGVucyBjbGlja1xyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVDbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY29yZGVyID0gdGhpcy5wbGF5ZXJfLnJlY29yZCgpO1xuICAgICAgICAgICAgaWYgKCFyZWNvcmRlci5pc1JlY29yZGluZygpKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkIHRoZSB2anMtaWNvbi1yZWNvcmQtc3RvcCBjbGFzcyB0byB0aGUgZWxlbWVudCBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2UuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBbZXZlbnRdXHJcbiAgICAgICAgICogICAgICAgIFRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIHJ1bi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBsaXN0ZW5zIFBsYXllciNzdGFydFJlY29yZFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgZWxlbWVudCBjbGFzcyBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2VcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1pY29uLXJlY29yZC1zdGFydCcpO1xuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWljb24tcmVjb3JkLXN0b3AnKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgICAgICAgdGhpcy5jb250cm9sVGV4dCgnU3RvcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkIHRoZSB2anMtaWNvbi1yZWNvcmQtc3RhcnQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gW2V2ZW50XVxyXG4gICAgICAgICAqICAgICAgICBUaGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBydW4uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbGlzdGVucyBQbGF5ZXIjc3RvcFJlY29yZFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblN0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25TdG9wKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGVsZW1lbnQgY2xhc3Mgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd2anMtaWNvbi1yZWNvcmQtc3RvcCcpO1xuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWljb24tcmVjb3JkLXN0YXJ0Jyk7XG5cbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgYnV0dG9uIHRleHRcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFRleHQoJ1JlY29yZCcpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlY29yZFRvZ2dsZTtcbn0oQnV0dG9uKTtcblxuLyoqXHJcbiAqIFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGRpc3BsYXkgb3ZlciB0aGUgYFJlY29yZFRvZ2dsZWBzIGNvbnRyb2xzLiBBZGRlZCBmb3IgbG9jYWxpemF0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cblxuXG5SZWNvcmRUb2dnbGUucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdSZWNvcmQnO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JlY29yZFRvZ2dsZScsIFJlY29yZFRvZ2dsZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY29yZFRvZ2dsZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxyXG4gKiBAZmlsZSBkZWZhdWx0cy5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbi8vcGx1Z2luIGRlZmF1bHRzXG52YXIgcGx1Z2luRGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gYWRkZWQgYnkgZ2VvcmdlXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kOiA4MDAwMDAsXG5cbiAgICAvLyBTaW5nbGUgc25hcHNob3QgaW1hZ2UuXG4gICAgaW1hZ2U6IGZhbHNlLFxuICAgIC8vIEluY2x1ZGUgYXVkaW8gaW4gdGhlIHJlY29yZGVkIGNsaXAuXG4gICAgYXVkaW86IGZhbHNlLFxuICAgIC8vIEluY2x1ZGUgdmlkZW8gaW4gdGhlIHJlY29yZGVkIGNsaXAuXG4gICAgdmlkZW86IGZhbHNlLFxuICAgIC8vIEFuaW1hdGVkIEdJRi5cbiAgICBhbmltYXRpb246IGZhbHNlLFxuICAgIC8vIE1heGltdW0gbGVuZ3RoIG9mIHRoZSByZWNvcmRlZCBjbGlwLlxuICAgIG1heExlbmd0aDogMTAsXG4gICAgLy8gV2lkdGggb2YgdGhlIHJlY29yZGVkIHZpZGVvIGZyYW1lcy5cbiAgICBmcmFtZVdpZHRoOiAzMjAsXG4gICAgLy8gSGVpZ2h0IG9mIHRoZSByZWNvcmRlZCB2aWRlbyBmcmFtZXMuXG4gICAgZnJhbWVIZWlnaHQ6IDI0MCxcbiAgICAvLyBFbmFibGVzIGNvbnNvbGUgbG9nZ2luZyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICAvLyBUaGUgbWltZSB0eXBlIGZvciB0aGUgdmlkZW8gcmVjb3JkZXIuIERlZmF1bHQgdG8gJ3ZpZGVvL3dlYm0nLlxuICAgIC8vIFVzZSAndmlkZW8vbXA0JyAoRmlyZWZveCkgb3IgJ3ZpZGVvL3dlYm07Y29kZWNzPUgyNjQnIChDaHJvbWUgNTIgYW5kXG4gICAgLy8gbmV3ZXIpIGZvciBNUDQuXG4gICAgdmlkZW9NaW1lVHlwZTogJ3ZpZGVvL3dlYm0nLFxuICAgIC8vIFZpZGVvIHJlY29yZGVyIHR5cGUgdG8gdXNlLiBUaGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBhbHRlcm5hdGl2ZVxuICAgIC8vIHJlY29yZGVyIGNsYXNzLCBlLmcuIFdoYW1teVJlY29yZGVyLiBEZWZhdWx0cyB0byAnYXV0bycgd2hpY2ggbGV0J3NcbiAgICAvLyByZWNvcmRydGMgc3BlY2lmeSB0aGUgYmVzdCBhdmFpbGFibGUgcmVjb3JkZXIgdHlwZS5cbiAgICB2aWRlb1JlY29yZGVyVHlwZTogJ2F1dG8nLFxuICAgIC8vIEF1ZGlvIHJlY29yZGluZyBsaWJyYXJ5IHRvIHVzZS4gTGVnYWwgdmFsdWVzIGFyZSAncmVjb3JkcnRjJyxcbiAgICAvLyAnbGlidm9yYmlzLmpzJywgJ29wdXMtcmVjb3JkZXInLCAnbGFtZWpzJyBhbmQgJ3JlY29yZGVyLmpzJy5cbiAgICBhdWRpb0VuZ2luZTogJ3JlY29yZHJ0YycsXG4gICAgLy8gQXVkaW8gcmVjb3JkZXIgdHlwZSB0byB1c2UuIFRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IGFuIGFsdGVybmF0aXZlXG4gICAgLy8gcmVjb3JkZXIgY2xhc3MsIGUuZy4gU3RlcmVvQXVkaW9SZWNvcmRlci4gRGVmYXVsdHMgdG8gJ2F1dG8nIHdoaWNoIGxldCdzXG4gICAgLy8gcmVjb3JkcnRjIHNwZWNpZnkgdGhlIGJlc3QgYXZhaWxhYmxlIHJlY29yZGVyIHR5cGUuIEN1cnJlbnRseSB0aGlzXG4gICAgLy8gc2V0dGluZyBpcyBvbmx5IHVzZWQgd2l0aCB0aGUgJ3JlY29yZHJ0YycgYXVkaW9FbmdpbmUuXG4gICAgYXVkaW9SZWNvcmRlclR5cGU6ICdhdXRvJyxcbiAgICAvLyBUaGUgbWltZSB0eXBlIGZvciB0aGUgYXVkaW8gcmVjb3JkZXIuIERlZmF1bHRzIHRvICdhdXRvJyB3aGljaCB3aWxsIHBpY2tcbiAgICAvLyB0aGUgYmVzdCBvcHRpb24gYXZhaWxhYmxlIGluIHRoZSBicm93c2VyIChlLmcuIGVpdGhlciAnYXVkaW8vd2F2JyxcbiAgICAvLyAnYXVkaW8vb2dnJyBvciAnYXVkaW8vd2VibScpLlxuICAgIGF1ZGlvTWltZVR5cGU6ICdhdXRvJyxcbiAgICAvLyBUaGUgc2l6ZSBvZiB0aGUgYXVkaW8gYnVmZmVyIChpbiBzYW1wbGUtZnJhbWVzKSB3aGljaCBuZWVkcyB0b1xuICAgIC8vIGJlIHByb2Nlc3NlZCBlYWNoIHRpbWUgb25wcm9jZXNzYXVkaW8gaXMgY2FsbGVkLlxuICAgIC8vIEZyb20gdGhlIHNwZWM6IFRoaXMgdmFsdWUgY29udHJvbHMgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpc1xuICAgIC8vIGRpc3BhdGNoZWQgYW5kIGhvdyBtYW55IHNhbXBsZS1mcmFtZXMgbmVlZCB0byBiZSBwcm9jZXNzZWQgZWFjaCBjYWxsLlxuICAgIC8vIExvd2VyIHZhbHVlcyBmb3IgYnVmZmVyIHNpemUgd2lsbCByZXN1bHQgaW4gYSBsb3dlciAoYmV0dGVyKSBsYXRlbmN5LlxuICAgIC8vIEhpZ2hlciB2YWx1ZXMgd2lsbCBiZSBuZWNlc3NhcnkgdG8gYXZvaWQgYXVkaW8gYnJlYWt1cCBhbmQgZ2xpdGNoZXMuXG4gICAgLy8gTGVnYWwgdmFsdWVzIGFyZSAyNTYsIDUxMiwgMTAyNCwgMjA0OCwgNDA5NiwgODE5MiBvciAxNjM4NC5cbiAgICBhdWRpb0J1ZmZlclNpemU6IDQwOTYsXG4gICAgLy8gVGhlIGF1ZGlvIHNhbXBsZSByYXRlIChpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQpIGF0IHdoaWNoIHRoZVxuICAgIC8vIEF1ZGlvQ29udGV4dCBoYW5kbGVzIGF1ZGlvLiBJdCBpcyBhc3N1bWVkIHRoYXQgYWxsIEF1ZGlvTm9kZXNcbiAgICAvLyBpbiB0aGUgY29udGV4dCBydW4gYXQgdGhpcyByYXRlLiBJbiBtYWtpbmcgdGhpcyBhc3N1bXB0aW9uLFxuICAgIC8vIHNhbXBsZS1yYXRlIGNvbnZlcnRlcnMgb3IgXCJ2YXJpc3BlZWRcIiBwcm9jZXNzb3JzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgLy8gaW4gcmVhbC10aW1lIHByb2Nlc3NpbmcuXG4gICAgLy8gVGhlIHNhbXBsZVJhdGUgcGFyYW1ldGVyIGRlc2NyaWJlcyB0aGUgc2FtcGxlLXJhdGUgb2YgdGhlXG4gICAgLy8gbGluZWFyIFBDTSBhdWRpbyBkYXRhIGluIHRoZSBidWZmZXIgaW4gc2FtcGxlLWZyYW1lcyBwZXIgc2Vjb25kLlxuICAgIC8vIEFuIGltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBzYW1wbGUtcmF0ZXMgaW4gYXQgbGVhc3RcbiAgICAvLyB0aGUgcmFuZ2UgMjIwNTAgdG8gOTYwMDAuXG4gICAgYXVkaW9TYW1wbGVSYXRlOiA0NDEwMCxcbiAgICAvLyBUaGUgYXVkaW8gYml0cmF0ZSBpbiBrYnBzIChvbmx5IHVzZWQgaW4gbGFtZWpzIHBsdWdpbikuXG4gICAgYXVkaW9CaXRSYXRlOiAxMjgsXG4gICAgLy8gQWxsb3dzIHlvdSB0byByZWNvcmQgc2luZ2xlLWNoYW5uZWwgYXVkaW8sIHdoaWNoIGNhbiByZWR1Y2UgdGhlXG4gICAgLy8gZmlsZXNpemUuXG4gICAgYXVkaW9DaGFubmVsczogMixcbiAgICAvLyBVUkwgZm9yIHRoZSBhdWRpbyB3b3JrZXIuXG4gICAgYXVkaW9Xb3JrZXJVUkw6ICcnLFxuICAgIC8vIEZyYW1lIHJhdGUgaW4gZnJhbWVzIHBlciBzZWNvbmQuXG4gICAgYW5pbWF0aW9uRnJhbWVSYXRlOiAyMDAsXG4gICAgLy8gU2V0cyBxdWFsaXR5IG9mIGNvbG9yIHF1YW50aXphdGlvbiAoY29udmVyc2lvbiBvZiBpbWFnZXMgdG8gdGhlXG4gICAgLy8gbWF4aW11bSAyNTYgY29sb3JzIGFsbG93ZWQgYnkgdGhlIEdJRiBzcGVjaWZpY2F0aW9uKS5cbiAgICAvLyBMb3dlciB2YWx1ZXMgKG1pbmltdW0gPSAxKSBwcm9kdWNlIGJldHRlciBjb2xvcnMsXG4gICAgLy8gYnV0IHNsb3cgcHJvY2Vzc2luZyBzaWduaWZpY2FudGx5LiAxMCBpcyB0aGUgZGVmYXVsdCxcbiAgICAvLyBhbmQgcHJvZHVjZXMgZ29vZCBjb2xvciBtYXBwaW5nIGF0IHJlYXNvbmFibGUgc3BlZWRzLlxuICAgIC8vIFZhbHVlcyBncmVhdGVyIHRoYW4gMjAgZG8gbm90IHlpZWxkIHNpZ25pZmljYW50IGltcHJvdmVtZW50c1xuICAgIC8vIGluIHNwZWVkLlxuICAgIGFuaW1hdGlvblF1YWxpdHk6IDEwLFxuICAgIC8vIEFjY2VwdHMgbnVtYmVycyBpbiBtaWxsaXNlY29uZHM7IHVzZSB0aGlzIHRvIGZvcmNlIGludGVydmFscy1iYXNlZCBibG9icy5cbiAgICB0aW1lU2xpY2U6IDBcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBsdWdpbkRlZmF1bHRPcHRpb25zOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSByZWNvcmQtZW5naW5lLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLy8gc3VwcG9ydGVkIHJlY29yZGVyIHBsdWdpbiBlbmdpbmVzXG52YXIgUkVDT1JEUlRDID0gJ3JlY29yZHJ0Yyc7XG52YXIgTElCVk9SQklTSlMgPSAnbGlidm9yYmlzLmpzJztcbnZhciBSRUNPUkRFUkpTID0gJ3JlY29yZGVyLmpzJztcbnZhciBMQU1FSlMgPSAnbGFtZWpzJztcbnZhciBPUFVTUkVDT1JERVIgPSAnb3B1cy1yZWNvcmRlcic7XG5cbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciByZWNvcmRlciBiYWNrZW5kcy5cclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkNvbXBvbmVudFxyXG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlY29yZEVuZ2luZSwgX0NvbXBvbmVudCk7XG5cbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtQbGF5ZXJ9IHBsYXllclxyXG4gICAgICogICAgICAgICBUaGUgYFBsYXllcmAgdGhhdCB0aGlzIGNsYXNzIHNob3VsZCBiZSBhdHRhY2hlZCB0by5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAgICogICAgICAgICBUaGUga2V5L3ZhbHVlIHN0b3JlIG9mIHBsYXllciBvcHRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVjb3JkRW5naW5lKHBsYXllciwgb3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkRW5naW5lKTtcblxuICAgICAgICAvLyBhdXRvIG1peGluIHRoZSBldmVudGVkIG1peGluIChyZXF1aXJlZCBzaW5jZSB2aWRlby5qcyB2Ni42LjApXG4gICAgICAgIG9wdGlvbnMuZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWNvcmRFbmdpbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRFbmdpbmUpKS5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGFueSB0ZW1wb3JhcnkgZGF0YSBhbmQgcmVmZXJlbmNlcyB0byBzdHJlYW1zLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVjb3JkRW5naW5lLCBbe1xuICAgICAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAvLyBkaXNwb3NlIHByZXZpb3VzIHJlY29yZGluZ1xuICAgICAgICAgICAgaWYgKHRoaXMucmVjb3JkZWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMucmVjb3JkZWREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBmaWxlbmFtZSBhbmQgdGltZXN0YW1wIHRvIHJlY29yZGVkIGZpbGUgb2JqZWN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHsoYmxvYnxmaWxlKX0gZmlsZU9iaiAtIEJsb2Igb3IgRmlsZSBvYmplY3QuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEZpbGVJbmZvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEZpbGVJbmZvKGZpbGVPYmopIHtcbiAgICAgICAgICAgIGlmIChmaWxlT2JqIGluc3RhbmNlb2YgQmxvYiB8fCBmaWxlT2JqIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIC8vIHNldCBtb2RpZmljYXRpb24gZGF0ZVxuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVPYmoubGFzdE1vZGlmaWVkID0gbm93LmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU9iai5sYXN0TW9kaWZpZWREYXRlID0gbm93O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZTogc2V0dGluZyBnZXR0ZXItb25seSBwcm9wZXJ0eSBcImxhc3RNb2RpZmllZERhdGVcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmUtcmFpc2UgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZ3Vlc3MgZXh0ZW5zaW9uIG5hbWUgZnJvbSBtaW1lIHR5cGUsIGUuZy4gYXVkaW8vb2dnLCBidXRcbiAgICAgICAgICAgICAgICAvLyBhbnkgZXh0ZW5zaW9uIGlzIHZhbGlkIGhlcmUuIENocm9tZSBhbHNvIGFjY2VwdHMgZXh0ZW5kZWRcbiAgICAgICAgICAgICAgICAvLyBtaW1lIHR5cGVzIGxpa2UgdmlkZW8vd2VibTtjb2RlY3M9aDI2NCx2cDksb3B1c1xuICAgICAgICAgICAgICAgIHZhciBmaWxlRXh0ZW5zaW9uID0gJy4nICsgZmlsZU9iai50eXBlLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICAgICAgaWYgKGZpbGVFeHRlbnNpb24uaW5kZXhPZignOycpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZUV4dGVuc2lvbiA9IGZpbGVFeHRlbnNpb24uc3BsaXQoJzsnKVswXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGltZXN0YW1wIGluIGZpbGVuYW1lLCBlLmcuIDE0NTExODA5NDEzMjYub2dnXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU9iai5uYW1lID0gbm93LmdldFRpbWUoKSArIGZpbGVFeHRlbnNpb247XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlOiBzZXR0aW5nIGdldHRlci1vbmx5IHByb3BlcnR5IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZS1yYWlzZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZWQgd2hlbiByZWNvcmRpbmcgaXMgc3RvcHBlZCBhbmQgcmVzdWx0aW5nIHN0cmVhbSBpcyBhdmFpbGFibGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge2Jsb2J9IGRhdGEgLSBSZWZlcmVuY2UgdG8gdGhlIHJlY29yZGVkIEJsb2IuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uU3RvcFJlY29yZGluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0b3BSZWNvcmRpbmcoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRlZERhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgICAvLyBhZGQgZmlsZW5hbWUgYW5kIHRpbWVzdGFtcCB0byByZWNvcmRlZCBmaWxlIG9iamVjdFxuICAgICAgICAgICAgdGhpcy5hZGRGaWxlSW5mbyh0aGlzLnJlY29yZGVkRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gcmVjb3JkZWQgc3RyZWFtXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZWNvcmRDb21wbGV0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvdyBzYXZlIGFzIGRpYWxvZyBpbiBicm93c2VyIHNvIHRoZSB1c2VyIGNhbiBzdG9yZSB0aGUgcmVjb3JkZWQgbWVkaWFcclxuICAgICAgICAgKiBsb2NhbGx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5hbWUgLSBPYmplY3Qgd2l0aCBuYW1lcyBmb3IgdGhlIHBhcnRpY3VsYXIgYmxvYihzKVxyXG4gICAgICAgICAqICAgICB5b3Ugd2FudCB0byBzYXZlLiBGaWxlIGV4dGVuc2lvbnMgYXJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuIEZvclxyXG4gICAgICAgICAqICAgICBleGFtcGxlOiB7J3ZpZGVvJzogJ25hbWUtb2YtdmlkZW8tZmlsZSd9LiBTdXBwb3J0ZWQga2V5cyBhcmVcclxuICAgICAgICAgKiAgICAgJ2F1ZGlvJywgJ3ZpZGVvJyBhbmQgJ2dpZicuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVBcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlQXMobmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gbmFtZVtPYmplY3Qua2V5cyhuYW1lKVswXV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHRoaXMucmVjb3JkZWREYXRhLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNTYXZlQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZUJsb2IodGhpcy5yZWNvcmRlZERhdGEsIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGh5cGVybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGh5cGVybGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICBoeXBlcmxpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcblxuICAgICAgICAgICAgaHlwZXJsaW5rLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7Y29sb3I6dHJhbnNwYXJlbnQ7JztcbiAgICAgICAgICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaHlwZXJsaW5rKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoeXBlcmxpbmsuY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBoeXBlcmxpbmsuY2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaHlwZXJsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgICAgICAgICAgICAgIGh5cGVybGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGh5cGVybGluay5ocmVmKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmRFbmdpbmU7XG59KENvbXBvbmVudCk7XG5cbi8vIGV4cG9zZSBjb21wb25lbnQgZm9yIGV4dGVybmFsIHBsdWdpbnNcblxuXG52aWRlb2pzLlJlY29yZEVuZ2luZSA9IFJlY29yZEVuZ2luZTtcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkRW5naW5lJywgUmVjb3JkRW5naW5lKTtcblxuZXhwb3J0cy5SZWNvcmRFbmdpbmUgPSBSZWNvcmRFbmdpbmU7XG5leHBvcnRzLlJFQ09SRFJUQyA9IFJFQ09SRFJUQztcbmV4cG9ydHMuTElCVk9SQklTSlMgPSBMSUJWT1JCSVNKUztcbmV4cG9ydHMuUkVDT1JERVJKUyA9IFJFQ09SREVSSlM7XG5leHBvcnRzLkxBTUVKUyA9IExBTUVKUztcbmV4cG9ydHMuT1BVU1JFQ09SREVSID0gT1BVU1JFQ09SREVSOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXHJcbiAqIEBmaWxlIHJlY29yZC1tb2RlLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxuLy8gcmVjb3JkZXIgbW9kZXNcbnZhciBJTUFHRV9PTkxZID0gJ2ltYWdlX29ubHknO1xudmFyIEFVRElPX09OTFkgPSAnYXVkaW9fb25seSc7XG52YXIgVklERU9fT05MWSA9ICd2aWRlb19vbmx5JztcbnZhciBBVURJT19WSURFTyA9ICdhdWRpb192aWRlbyc7XG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbnZhciBnZXRSZWNvcmRlck1vZGUgPSBmdW5jdGlvbiBnZXRSZWNvcmRlck1vZGUoaW1hZ2UsIGF1ZGlvLCB2aWRlbywgYW5pbWF0aW9uKSB7XG4gICAgaWYgKGlzTW9kZUVuYWJsZWQoaW1hZ2UpKSB7XG4gICAgICAgIHJldHVybiBJTUFHRV9PTkxZO1xuICAgIH0gZWxzZSBpZiAoaXNNb2RlRW5hYmxlZChhbmltYXRpb24pKSB7XG4gICAgICAgIHJldHVybiBBTklNQVRJT047XG4gICAgfSBlbHNlIGlmIChpc01vZGVFbmFibGVkKGF1ZGlvKSAmJiAhaXNNb2RlRW5hYmxlZCh2aWRlbykpIHtcbiAgICAgICAgcmV0dXJuIEFVRElPX09OTFk7XG4gICAgfSBlbHNlIGlmIChpc01vZGVFbmFibGVkKGF1ZGlvKSAmJiBpc01vZGVFbmFibGVkKHZpZGVvKSkge1xuICAgICAgICByZXR1cm4gQVVESU9fVklERU87XG4gICAgfSBlbHNlIGlmICghaXNNb2RlRW5hYmxlZChhdWRpbykgJiYgaXNNb2RlRW5hYmxlZCh2aWRlbykpIHtcbiAgICAgICAgcmV0dXJuIFZJREVPX09OTFk7XG4gICAgfVxufTtcblxuLyoqXHJcbiAqIFJldHVybiBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBtb2RlIGlzIGVuYWJsZWQgb3Igbm90LlxyXG4gKi9cbnZhciBpc01vZGVFbmFibGVkID0gZnVuY3Rpb24gaXNNb2RlRW5hYmxlZChtb2RlKSB7XG4gICAgcmV0dXJuIG1vZGUgPT09IE9iamVjdChtb2RlKSB8fCBtb2RlID09PSB0cnVlO1xufTtcblxuZXhwb3J0cy5nZXRSZWNvcmRlck1vZGUgPSBnZXRSZWNvcmRlck1vZGU7XG5leHBvcnRzLklNQUdFX09OTFkgPSBJTUFHRV9PTkxZO1xuZXhwb3J0cy5BVURJT19PTkxZID0gQVVESU9fT05MWTtcbmV4cG9ydHMuVklERU9fT05MWSA9IFZJREVPX09OTFk7XG5leHBvcnRzLkFVRElPX1ZJREVPID0gQVVESU9fVklERU87XG5leHBvcnRzLkFOSU1BVElPTiA9IEFOSU1BVElPTjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX3JlY29yZEVuZ2luZSA9IHJlcXVpcmUoJy4vcmVjb3JkLWVuZ2luZScpO1xuXG52YXIgX2RldGVjdEJyb3dzZXIgPSByZXF1aXJlKCcuLi91dGlscy9kZXRlY3QtYnJvd3NlcicpO1xuXG52YXIgX3JlY29yZE1vZGUgPSByZXF1aXJlKCcuL3JlY29yZC1tb2RlJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmaWxlIHJlY29yZC1ydGMuanNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHNpbmNlIDIuMC4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcclxuICogRW5naW5lIHVzZWQgd2l0aCB0aGUgTVJlY29yZFJUQyBjbGFzcyBpbiB0aGUgUmVjb3JkUlRDIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5SZWNvcmRFbmdpbmVcclxuICovXG5cbnZhciBSZWNvcmRSVENFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhSZWNvcmRSVENFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gUmVjb3JkUlRDRW5naW5lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkUlRDRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlY29yZFJUQ0VuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFJUQ0VuZ2luZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWNvcmRSVENFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHVwIHJlY29yZGluZyBlbmdpbmUuXHJcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cChzdHJlYW0sIG1lZGlhVHlwZSwgZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IG1lZGlhVHlwZTtcbiAgICAgICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuICAgICAgICAgICAgLy8gc2V0dXAgUmVjb3JkUlRDXG4gICAgICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBSZWNvcmRSVEMuTVJlY29yZFJUQygpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubWVkaWFUeXBlID0gdGhpcy5tZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kaXNhYmxlTG9ncyA9ICF0aGlzLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubWltZVR5cGUgPSB0aGlzLm1pbWVUeXBlO1xuXG4gICAgICAgICAgICAvLyBhdWRpbyBzZXR0aW5nc1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYnVmZmVyU2l6ZSA9IHRoaXMuYnVmZmVyU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNhbXBsZVJhdGUgPSB0aGlzLnNhbXBsZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSB0aGlzLmF1ZGlvQ2hhbm5lbHM7XG5cbiAgICAgICAgICAgIC8vIHZpZGVvL2NhbnZhcyBzZXR0aW5nc1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUudmlkZW9CaXRzUGVyU2Vjb25kID0gdGhpcy52aWRlb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS52aWRlbyA9IHRoaXMudmlkZW87XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgICAgICAgICAgLy8gYW5pbWF0ZWQgZ2lmIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5xdWFsaXR5ID0gdGhpcy5xdWFsaXR5O1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZnJhbWVSYXRlID0gdGhpcy5mcmFtZVJhdGU7XG4gICAgICAgICAgICBpZiAodGhpcy5vblRpbWVTdGFtcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUudGltZVNsaWNlID0gdGhpcy50aW1lU2xpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUub25UaW1lU3RhbXAgPSB0aGlzLm9uVGltZVN0YW1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25uZWN0IHN0cmVhbSB0byByZWNvcmRpbmcgZW5naW5lXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTdHJlYW0odGhpcy5pbnB1dFN0cmVhbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYW55IHRlbXBvcmFyeSBkYXRhIGFuZCByZWZlcmVuY2VzIHRvIHN0cmVhbXMuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3Bvc2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgICAgIF9nZXQoUmVjb3JkUlRDRW5naW5lLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFJUQ0VuZ2luZS5wcm90b3R5cGUpLCAnZGlzcG9zZScsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5lbmdpbmUuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGFydFJlY29yZGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcCByZWNvcmRpbmcuIFJlc3VsdCB3aWxsIGJlIGF2YWlsYWJsZSBhc3luYyB3aGVuIG9uU3RvcFJlY29yZGluZ1xyXG4gICAgICAgICAqIGlzIGNhbGxlZC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RvcFJlY29yZGluZyh0aGlzLm9uU3RvcFJlY29yZGluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBhdXNlIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5wYXVzZVJlY29yZGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzdW1lIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzdW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc3VtZVJlY29yZGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvdyBzYXZlIGFzIGRpYWxvZyBpbiBicm93c2VyIHNvIHRoZSB1c2VyIGNhbiBzdG9yZSB0aGUgcmVjb3JkZWQgbWVkaWFcclxuICAgICAgICAgKiBsb2NhbGx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5hbWUgLSBPYmplY3Qgd2l0aCBuYW1lcyBmb3IgdGhlIHBhcnRpY3VsYXIgYmxvYihzKVxyXG4gICAgICAgICAqICAgICB5b3Ugd2FudCB0byBzYXZlLiBGaWxlIGV4dGVuc2lvbnMgYXJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuIEZvclxyXG4gICAgICAgICAqICAgICBleGFtcGxlOiB7J3ZpZGVvJzogJ25hbWUtb2YtdmlkZW8tZmlsZSd9LiBTdXBwb3J0ZWQga2V5cyBhcmVcclxuICAgICAgICAgKiAgICAgJ2F1ZGlvJywgJ3ZpZGVvJyBhbmQgJ2dpZicuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVBcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlQXMobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lICYmIG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNhdmUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gcmVjb3JkaW5nIGlzIHN0b3BwZWQgYW5kIHJlc3VsdGluZyBzdHJlYW0gaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXVkaW9WaWRlb1VSTCAtIFJlZmVyZW5jZSB0byB0aGUgcmVjb3JkZWQgQmxvYlxyXG4gICAgICAgICAqICAgICBvYmplY3QsIGUuZy4gJ2Jsb2I6aHR0cDovL2xvY2FsaG9zdDo4MDgwLzEwMTAwMDE2LTQyNDgtOTk0OS1iMGQ2LTBiYjQwZGI1NmViYSdcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIE1lZGlhIHR5cGUsIGVnLiAndmlkZW8nIG9yICdhdWRpbycuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uU3RvcFJlY29yZGluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0b3BSZWNvcmRpbmcoYXVkaW9WaWRlb1VSTCwgdHlwZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byByZWNvcmRlZCBzdHJlYW0gVVJMXG4gICAgICAgICAgICB0aGlzLm1lZGlhVVJMID0gYXVkaW9WaWRlb1VSTDtcblxuICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHJlY29yZGVkIHN0cmVhbSBkYXRhXG4gICAgICAgICAgICB2YXIgcmVjb3JkVHlwZSA9IHRoaXMucGxheWVyKCkucmVjb3JkKCkuZ2V0UmVjb3JkVHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZ2V0QmxvYihmdW5jdGlvbiAocmVjb3JkaW5nKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZWNvcmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZWNvcmRlZERhdGEgPSByZWNvcmRpbmcuYXVkaW87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5hZGRGaWxlSW5mbyhfdGhpczIucmVjb3JkZWREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRyaWdnZXIoJ3JlY29yZENvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLlZJREVPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHJlY29yZGluZyBib3RoIGF1ZGlvIGFuZCB2aWRlbywgcmVjb3JkcnRjXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxscyB0aGlzIHR3aWNlIG9uIGNocm9tZSwgZmlyc3Qgd2l0aCBhdWRpbyBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiB3aXRoIHZpZGVvIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiBmaXJlZm94IGl0J3MgY2FsbGVkIG9uY2UgYnV0IHdpdGggYSBzaW5nbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJsb2IgdGhhdCBpbmNsdWRlcyBib3RoIGF1ZGlvIGFuZCB2aWRlbyBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZGluZy52aWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YSBpcyB2aWRlby1vbmx5IGJ1dCBvbiBmaXJlZm94IGF1ZGlvK3ZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlY29yZGVkRGF0YSA9IHJlY29yZGluZy52aWRlbztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIHRoZSBjaHJvbWUgYnJvd3NlciB0d28gYmxvYnMgYXJlIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWluaW5nIHRoZSBzZXBhcmF0ZSBhdWRpby92aWRlbyBzdHJlYW1zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmRUeXBlID09PSBfcmVjb3JkTW9kZS5BVURJT19WSURFTyAmJiAoMCwgX2RldGVjdEJyb3dzZXIuaXNDaHJvbWUpKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgYm90aCBhdWRpbyBhbmQgdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlY29yZGVkRGF0YSA9IHJlY29yZGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtdHlwZSBpbiBfdGhpczIucmVjb3JkZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuYWRkRmlsZUluZm8oX3RoaXMyLnJlY29yZGVkRGF0YVttdHlwZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmFkZEZpbGVJbmZvKF90aGlzMi5yZWNvcmRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlY29yZGVkRGF0YSA9IHJlY29yZGluZy5naWY7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5hZGRGaWxlSW5mbyhfdGhpczIucmVjb3JkZWREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRyaWdnZXIoJ3JlY29yZENvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmRSVENFbmdpbmU7XG59KF9yZWNvcmRFbmdpbmUuUmVjb3JkRW5naW5lKTtcblxuLy8gZXhwb3NlIHBsdWdpblxuXG5cbnZpZGVvanMuUmVjb3JkUlRDRW5naW5lID0gUmVjb3JkUlRDRW5naW5lO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JlY29yZFJUQ0VuZ2luZScsIFJlY29yZFJUQ0VuZ2luZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY29yZFJUQ0VuZ2luZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogQGZpbGUgbGFtZWpzLXBsdWdpbi5qc1xyXG4gKiBAc2luY2UgMS4xLjBcclxuICovXG5cbnZhciBSZWNvcmRFbmdpbmUgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUmVjb3JkRW5naW5lJyk7XG5cbi8qKlxyXG4gKiBBdWRpby1vbmx5IGVuZ2luZSBmb3IgdGhlIGxhbWVqcyBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuUmVjb3JkRW5naW5lXHJcbiAqL1xuXG52YXIgTGFtZWpzRW5naW5lID0gZnVuY3Rpb24gKF9SZWNvcmRFbmdpbmUpIHtcbiAgICBfaW5oZXJpdHMoTGFtZWpzRW5naW5lLCBfUmVjb3JkRW5naW5lKTtcblxuICAgIGZ1bmN0aW9uIExhbWVqc0VuZ2luZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhbWVqc0VuZ2luZSk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMYW1lanNFbmdpbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMYW1lanNFbmdpbmUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTGFtZWpzRW5naW5lLCBbe1xuICAgICAgICBrZXk6ICdzZXR1cCcsXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0dXAgcmVjb3JkaW5nIGVuZ2luZS5cclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKHN0cmVhbSwgbWVkaWFUeXBlLCBkZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1R5cGUgPSAnYXVkaW8vbXAzJztcblxuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZzogdGhpcy5kZWJ1ZyxcbiAgICAgICAgICAgICAgICBzYW1wbGVSYXRlOiB0aGlzLnNhbXBsZVJhdGUsXG4gICAgICAgICAgICAgICAgYml0UmF0ZTogdGhpcy5iaXRSYXRlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2VOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UodGhpcy5pbnB1dFN0cmVhbSk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcigxNjM4NCwgMSwgMSk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lID0gbmV3IFdvcmtlcih0aGlzLmF1ZGlvV29ya2VyVVJMKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm9ubWVzc2FnZSA9IHRoaXMub25Xb3JrZXJNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnBvc3RNZXNzYWdlKHsgY21kOiAnaW5pdCcsIGNvbmZpZzogY29uZmlnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gdGhpcy5vbkF1ZGlvUHJvY2Vzcy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZU5vZGUuY29ubmVjdCh0aGlzLnByb2Nlc3Nvcik7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Nvci5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3AgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Nvci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Nvci5vbmF1ZGlvcHJvY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5wb3N0TWVzc2FnZSh7IGNtZDogJ2ZpbmlzaCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWNlaXZlZCBhIG1lc3NhZ2UgZnJvbSB0aGUgd29ya2VyLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbldvcmtlck1lc3NhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Xb3JrZXJNZXNzYWdlKGV2KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2LmRhdGEuY21kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN0b3BSZWNvcmRpbmcobmV3IEJsb2IoZXYuZGF0YS5idWYsIHsgdHlwZTogdGhpcy5hdWRpb1R5cGUgfSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIoKS50cmlnZ2VyKCdlcnJvcicsIGV2LmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWQgbWVzc2FnZSByZWNlaXZlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcigpLnRyaWdnZXIoJ2Vycm9yJywgZXYuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29udGludW91cyBlbmNvZGluZyBvZiBhdWRpbyBkYXRhLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQXVkaW9Qcm9jZXNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQXVkaW9Qcm9jZXNzKGV2KSB7XG4gICAgICAgICAgICAvLyBzZW5kIG1pY3JvcGhvbmUgZGF0YSB0byBMQU1FIGZvciBNUDMgZW5jb2Rpbmcgd2hpbGUgcmVjb3JkaW5nXG4gICAgICAgICAgICB2YXIgZGF0YSA9IGV2LmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5wb3N0TWVzc2FnZSh7IGNtZDogJ2VuY29kZScsIGJ1ZjogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMYW1lanNFbmdpbmU7XG59KFJlY29yZEVuZ2luZSk7XG5cbi8vIGV4cG9zZSBwbHVnaW5cblxuXG52aWRlb2pzLkxhbWVqc0VuZ2luZSA9IExhbWVqc0VuZ2luZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGFtZWpzRW5naW5lOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSBsaWJ2b3JiaXMtcGx1Z2luLmpzXHJcbiAqIEBzaW5jZSAxLjEuMFxyXG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdSZWNvcmRFbmdpbmUnKTtcblxuLyoqXHJcbiAqIEF1ZGlvLW9ubHkgZW5naW5lIGZvciB0aGUgbGlidm9yYmlzLmpzIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5SZWNvcmRQbHVnaW5cclxuICovXG5cbnZhciBMaWJWb3JiaXNFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhMaWJWb3JiaXNFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gTGliVm9yYmlzRW5naW5lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGliVm9yYmlzRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExpYlZvcmJpc0VuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpYlZvcmJpc0VuZ2luZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMaWJWb3JiaXNFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoc3RyZWFtLCBtZWRpYVR5cGUsIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgICAgICAgICAgIC8vIHNldHVwIGxpYnZvcmJpcy5qc1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvQml0c1BlclNlY29uZDogdGhpcy5zYW1wbGVSYXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2h1bmtzID0gW107XG4gICAgICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBWb3JiaXNNZWRpYVJlY29yZGVyKHRoaXMuaW5wdXRTdHJlYW0sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5vbmRhdGFhdmFpbGFibGUgPSB0aGlzLm9uRGF0YS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUub25zdG9wID0gdGhpcy5vblJlY29yZGluZ0F2YWlsYWJsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRhdGEoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblJlY29yZGluZ0F2YWlsYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlY29yZGluZ0F2YWlsYWJsZSgpIHtcbiAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IodGhpcy5jaHVua3MsIHsgdHlwZTogdGhpcy5jaHVua3NbMF0udHlwZSB9KTtcbiAgICAgICAgICAgIHRoaXMuY2h1bmtzID0gW107XG4gICAgICAgICAgICB0aGlzLm9uU3RvcFJlY29yZGluZyhibG9iKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaWJWb3JiaXNFbmdpbmU7XG59KFJlY29yZEVuZ2luZSk7XG5cbi8vIGV4cG9zZSBwbHVnaW5cblxuXG52aWRlb2pzLkxpYlZvcmJpc0VuZ2luZSA9IExpYlZvcmJpc0VuZ2luZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGliVm9yYmlzRW5naW5lOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBAZmlsZSBvcHVzLXJlY29yZGVyLXBsdWdpbi5qc1xyXG4gKiBAc2luY2UgMS4xLjBcclxuICovXG5cbnZhciBSZWNvcmRFbmdpbmUgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUmVjb3JkRW5naW5lJyk7XG5cbi8qKlxyXG4gKiBBdWRpby1vbmx5IGVuZ2luZSBmb3IgdGhlIG9wdXMtcmVjb3JkZXIgbGlicmFyeS5cclxuICpcclxuICogQXVkaW8gaXMgZW5jb2RlZCB1c2luZyBsaWJvcHVzLlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1Z21lbnRzIHZpZGVvanMuUmVjb3JkRW5naW5lXHJcbiAqL1xuXG52YXIgT3B1c1JlY29yZGVyRW5naW5lID0gZnVuY3Rpb24gKF9SZWNvcmRFbmdpbmUpIHtcbiAgICBfaW5oZXJpdHMoT3B1c1JlY29yZGVyRW5naW5lLCBfUmVjb3JkRW5naW5lKTtcblxuICAgIGZ1bmN0aW9uIE9wdXNSZWNvcmRlckVuZ2luZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdXNSZWNvcmRlckVuZ2luZSk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPcHVzUmVjb3JkZXJFbmdpbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHVzUmVjb3JkZXJFbmdpbmUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoT3B1c1JlY29yZGVyRW5naW5lLCBbe1xuICAgICAgICBrZXk6ICdzZXR1cCcsXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0dXAgcmVjb3JkaW5nIGVuZ2luZS5cclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKHN0cmVhbSwgbWVkaWFUeXBlLCBkZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuXG4gICAgICAgICAgICAvLyBhbHNvIHN1cHBvcnRzICdhdWRpby93YXYnOyBidXQgbWFrZSBzdXJlIHRvIHVzZSB3YXZlRW5jb2RlciB3b3JrZXJcbiAgICAgICAgICAgIC8vIGluIHRoYXQgY2FzZVxuICAgICAgICAgICAgdGhpcy5hdWRpb1R5cGUgPSAnYXVkaW8vb2dnJztcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgUmVjb3JkZXIoe1xuICAgICAgICAgICAgICAgIGxlYXZlU3RyZWFtT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBudW1iZXJPZkNoYW5uZWxzOiB0aGlzLmF1ZGlvQ2hhbm5lbHMsXG4gICAgICAgICAgICAgICAgYnVmZmVyTGVuZ3RoOiB0aGlzLmJ1ZmZlclNpemUsXG4gICAgICAgICAgICAgICAgZW5jb2RlclNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICBlbmNvZGVyUGF0aDogdGhpcy5hdWRpb1dvcmtlclVSTFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5vbmRhdGFhdmFpbGFibGUgPSB0aGlzLm9uUmVjb3JkaW5nQXZhaWxhYmxlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZU5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSh0aGlzLmlucHV0U3RyZWFtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhcnQodGhpcy5hdWRpb1NvdXJjZU5vZGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIHJlY29yZGluZyBzdGFydGVkIG9rXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FuJ3Qgc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICBfdGhpczIucGxheWVyKCkudHJpZ2dlcignZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUGF1c2UgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXN1bWUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1bWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblJlY29yZGluZ0F2YWlsYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlY29yZGluZ0F2YWlsYWJsZShkYXRhKSB7XG4gICAgICAgICAgICAvLyBPcHVzIGZvcm1hdCBzdG9yZWQgaW4gYW4gT2dnIGNvbnRhaW5lclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogdGhpcy5hdWRpb1R5cGUgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub25TdG9wUmVjb3JkaW5nKGJsb2IpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE9wdXNSZWNvcmRlckVuZ2luZTtcbn0oUmVjb3JkRW5naW5lKTtcblxuLy8gZXhwb3NlIHBsdWdpblxuXG5cbnZpZGVvanMuT3B1c1JlY29yZGVyRW5naW5lID0gT3B1c1JlY29yZGVyRW5naW5lO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPcHVzUmVjb3JkZXJFbmdpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEBmaWxlIHJlY29yZGVyanMtcGx1Z2luLmpzXHJcbiAqIEBzaW5jZSAxLjEuMFxyXG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdSZWNvcmRFbmdpbmUnKTtcblxuLyoqXHJcbiAqIEF1ZGlvLW9ubHkgZW5naW5lIGZvciB0aGUgcmVjb3JkZXIuanMgbGlicmFyeS5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLlJlY29yZEVuZ2luZVxyXG4gKi9cblxudmFyIFJlY29yZGVyanNFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhSZWNvcmRlcmpzRW5naW5lLCBfUmVjb3JkRW5naW5lKTtcblxuICAgIGZ1bmN0aW9uIFJlY29yZGVyanNFbmdpbmUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNvcmRlcmpzRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlY29yZGVyanNFbmdpbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRlcmpzRW5naW5lKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlY29yZGVyanNFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxyXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoc3RyZWFtLCBtZWRpYVR5cGUsIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZU5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSh0aGlzLmlucHV0U3RyZWFtKTtcblxuICAgICAgICAgICAgLy8gc2V0dXAgcmVjb3JkZXIuanNcbiAgICAgICAgICAgIHRoaXMuZW5naW5lID0gbmV3IFJlY29yZGVyKHRoaXMuYXVkaW9Tb3VyY2VOb2RlLCB7XG4gICAgICAgICAgICAgICAgYnVmZmVyTGVuOiB0aGlzLmJ1ZmZlclNpemUsXG4gICAgICAgICAgICAgICAgbnVtQ2hhbm5lbHM6IHRoaXMuYXVkaW9DaGFubmVsc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVjb3JkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RvcCgpO1xuXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leHBvcnRXQVYodGhpcy5vblN0b3BSZWNvcmRpbmcuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVjb3JkZXJqc0VuZ2luZTtcbn0oUmVjb3JkRW5naW5lKTtcblxuLy8gZXhwb3NlIHBsdWdpblxuXG5cbnZpZGVvanMuUmVjb3JkZXJqc0VuZ2luZSA9IFJlY29yZGVyanNFbmdpbmU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY29yZGVyanNFbmdpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcclxuICogQGZpbGUgYnJvd3Nlci1zaGltLmpzXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKi9cblxudmFyIHNldFNyY09iamVjdCA9IGZ1bmN0aW9uIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQsIGlnbm9yZUNyZWF0ZU9iamVjdFVSTCkge1xuICAgIGlmICgnY3JlYXRlT2JqZWN0VVJMJyBpbiBVUkwgJiYgIWlnbm9yZUNyZWF0ZU9iamVjdFVSTCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICgnc3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH0gZWxzZSBpZiAoJ21velNyY09iamVjdCcgaW4gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50Lm1velNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlT2JqZWN0VVJML3NyY09iamVjdCBib3RoIGFyZSBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldFNyY09iamVjdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNTYWZhcmkgPSBleHBvcnRzLmlzQ2hyb21lID0gZXhwb3J0cy5pc09wZXJhID0gZXhwb3J0cy5pc0VkZ2UgPSBleHBvcnRzLmRldGVjdEJyb3dzZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfd2luZG93ID0gcmVxdWlyZSgnZ2xvYmFsL3dpbmRvdycpO1xuXG52YXIgX3dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aW5kb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcclxuICogQnJvd3NlciBkZXRlY3Rvci5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHJldHVybiB7b2JqZWN0fSByZXN1bHQgY29udGFpbmluZyBicm93c2VyLCB2ZXJzaW9uIGFuZCBtaW5WZXJzaW9uXHJcbiAqICAgICBwcm9wZXJ0aWVzLlxyXG4gKi9cbnZhciBkZXRlY3RCcm93c2VyID0gZnVuY3Rpb24gZGV0ZWN0QnJvd3NlcigpIHtcbiAgICAvLyByZXR1cm5lZCByZXN1bHQgb2JqZWN0XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC5icm93c2VyID0gbnVsbDtcbiAgICByZXN1bHQudmVyc2lvbiA9IG51bGw7XG4gICAgcmVzdWx0Lm1pblZlcnNpb24gPSBudWxsO1xuXG4gICAgLy8gZmFpbCBlYXJseSBpZiBpdCdzIG5vdCBhIGJyb3dzZXJcbiAgICBpZiAodHlwZW9mIF93aW5kb3cyLmRlZmF1bHQgPT09ICd1bmRlZmluZWQnIHx8ICFfd2luZG93Mi5kZWZhdWx0Lm5hdmlnYXRvcikge1xuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBzdXBwb3J0ZWQgYnJvd3Nlci4nO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3hcbiAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdmaXJlZm94JztcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LCAvRmlyZWZveFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgICAgICByZXN1bHQubWluVmVyc2lvbiA9IDMxO1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgICAvLyBDaHJvbWUsIENocm9taXVtLCBXZWJ2aWV3LCBPcGVyYVxuICAgICAgICBpZiAoX3dpbmRvdzIuZGVmYXVsdC53ZWJraXRSVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnY2hyb21lJztcbiAgICAgICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCwgL0Nocm9tKGV8aXVtKVxcLyhcXGQrKVxcLi8sIDIpO1xuICAgICAgICAgICAgcmVzdWx0Lm1pblZlcnNpb24gPSAzODtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNhZmFyaSAoaW4gYW4gdW5wdWJsaXNoZWQgdmVyc2lvbikgb3IgdW5rbm93biB3ZWJraXQtYmFzZWQuXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhcXGQrKS4oXFxkKykvKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ3NhZmFyaSc7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LCAvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vLCAxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQubWluVmVyc2lvbiA9IDExO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1bmtub3duIHdlYmtpdC1iYXNlZCBicm93c2VyLlxuICAgICAgICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ1Vuc3VwcG9ydGVkIHdlYmtpdC1iYXNlZCBicm93c2VyICcgKyAnd2l0aCBHVU0gc3VwcG9ydCBidXQgbm8gV2ViUlRDIHN1cHBvcnQuJztcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVkZ2VcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS4oXFxkKykkLykpIHtcbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnZWRnZSc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCwgL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8sIDIpO1xuICAgICAgICByZXN1bHQubWluVmVyc2lvbiA9IDEwNTQ3O1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8pKSB7XG4gICAgICAgIC8vIFNhZmFyaSwgd2l0aCB3ZWJraXRHZXRVc2VyTWVkaWEgcmVtb3ZlZC5cbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LCAvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGZhbGx0aHJvdWdoOiBub3Qgc3VwcG9ydGVkLlxuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBzdXBwb3J0ZWQgYnJvd3Nlci4nO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcclxuICogRXh0cmFjdCBicm93c2VyIHZlcnNpb24gb3V0IG9mIHRoZSBwcm92aWRlZCB1c2VyIGFnZW50IHN0cmluZy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHshc3RyaW5nfSB1YXN0cmluZyAtIHVzZXJBZ2VudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGFzIG1hdGNoIGNyaXRlcmlhLlxyXG4gKiBAcGFyYW0geyFudW1iZXJ9IHBvcyAtIHBvc2l0aW9uIGluIHRoZSB2ZXJzaW9uIHN0cmluZyB0byBiZVxyXG4gKiAgICAgcmV0dXJuZWQuXHJcbiAqIEByZXR1cm4geyFudW1iZXJ9IGJyb3dzZXIgdmVyc2lvbi5cclxuICovXG4vKipcclxuICogQGZpbGUgZGV0ZWN0LWJyb3dzZXIuanNcclxuICogQHNpbmNlIDIuMC4wXHJcbiAqL1xuXG52YXIgZXh0cmFjdFZlcnNpb24gPSBmdW5jdGlvbiBleHRyYWN0VmVyc2lvbih1YXN0cmluZywgZXhwciwgcG9zKSB7XG4gICAgdmFyIG1hdGNoID0gdWFzdHJpbmcubWF0Y2goZXhwcik7XG4gICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+PSBwb3MgJiYgcGFyc2VJbnQobWF0Y2hbcG9zXSwgMTApO1xufTtcblxudmFyIGlzRWRnZSA9IGZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgICByZXR1cm4gZGV0ZWN0QnJvd3NlcigpLmJyb3dzZXIgPT09ICdlZGdlJztcbn07XG5cbnZhciBpc1NhZmFyaSA9IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyKCkuYnJvd3NlciA9PT0gJ3NhZmFyaSc7XG59O1xuXG52YXIgaXNPcGVyYSA9IGZ1bmN0aW9uIGlzT3BlcmEoKSB7XG4gICAgcmV0dXJuICEhX3dpbmRvdzIuZGVmYXVsdC5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ09QUi8nKSAhPT0gLTE7XG59O1xuXG52YXIgaXNDaHJvbWUgPSBmdW5jdGlvbiBpc0Nocm9tZSgpIHtcbiAgICByZXR1cm4gZGV0ZWN0QnJvd3NlcigpLmJyb3dzZXIgPT09ICdjaHJvbWUnO1xufTtcblxuZXhwb3J0cy5kZXRlY3RCcm93c2VyID0gZGV0ZWN0QnJvd3NlcjtcbmV4cG9ydHMuaXNFZGdlID0gaXNFZGdlO1xuZXhwb3J0cy5pc09wZXJhID0gaXNPcGVyYTtcbmV4cG9ydHMuaXNDaHJvbWUgPSBpc0Nocm9tZTtcbmV4cG9ydHMuaXNTYWZhcmkgPSBpc1NhZmFyaTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxyXG4gKiBAZmlsZSBmb3JtYXQtdGltZS5qc1xyXG4gKiBAc2luY2UgMi4wLjBcclxuICovXG5cbi8qKlxyXG4gKiBGb3JtYXQgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nLCBIOk1NOlNTLCBNOlNTIG9yIE06U1M6TU1NLlxyXG4gKlxyXG4gKiBTdXBwbHlpbmcgYSBndWlkZSAoaW4gc2Vjb25kcykgd2lsbCBmb3JjZSBhIG51bWJlciBvZiBsZWFkaW5nIHplcm9zXHJcbiAqIHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlIGd1aWRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIE51bWJlciBvZiBzZWNvbmRzIHRvIGJlIHR1cm5lZCBpbnRvIGFcclxuICogICAgIHN0cmluZy5cclxuICogQHBhcmFtIHtudW1iZXJ9IGd1aWRlIC0gTnVtYmVyIChpbiBzZWNvbmRzKSB0byBtb2RlbCB0aGUgc3RyaW5nXHJcbiAqICAgICBhZnRlci5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1zRGlzcGxheU1heCAtIE51bWJlciAoaW4gbWlsbGlzZWNvbmRzKSB0byBtb2RlbCB0aGUgc3RyaW5nXHJcbiAqICAgICBhZnRlci5cclxuICogQHJldHVybiB7c3RyaW5nfSBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTLCBNOlNTIG9yIE06U1M6TU1NLCBlLmcuXHJcbiAqICAgICAwOjAwOjEyLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cbnZhciBmb3JtYXRUaW1lID0gZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSwgbXNEaXNwbGF5TWF4KSB7XG4gICAgLy8gRGVmYXVsdCB0byB1c2luZyBzZWNvbmRzIGFzIGd1aWRlXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgPCAwID8gMCA6IHNlY29uZHM7XG4gICAgZ3VpZGUgPSBndWlkZSB8fCBzZWNvbmRzO1xuICAgIHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgNjApLFxuICAgICAgICBtID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjAgJSA2MCksXG4gICAgICAgIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKSxcbiAgICAgICAgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCksXG4gICAgICAgIGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApLFxuICAgICAgICBtcyA9IE1hdGguZmxvb3IoKHNlY29uZHMgLSBzKSAqIDEwMDApO1xuXG4gICAgLy8gaGFuZGxlIGludmFsaWQgdGltZXNcbiAgICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgLy8gJy0nIGlzIGZhbHNlIGZvciBhbGwgcmVsYXRpb25hbCBvcGVyYXRvcnMgKGUuZy4gPCwgPj0pIHNvIHRoaXNcbiAgICAgICAgLy8gc2V0dGluZyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgICAgLy8gZ3VpZGVcbiAgICAgICAgaCA9IG0gPSBzID0gbXMgPSAnLSc7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBzaG93IG1pbGxpc2Vjb25kc1xuICAgIGlmIChndWlkZSA+IDAgJiYgZ3VpZGUgPCBtc0Rpc3BsYXlNYXgpIHtcbiAgICAgICAgaWYgKG1zIDwgMTAwKSB7XG4gICAgICAgICAgICBpZiAobXMgPCAxMCkge1xuICAgICAgICAgICAgICAgIG1zID0gJzAwJyArIG1zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtcyA9ICcwJyArIG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1zID0gJzonICsgbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXMgPSAnJztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgICBoID0gaCA+IDAgfHwgZ2ggPiAwID8gaCArICc6JyA6ICcnO1xuXG4gICAgLy8gSWYgaG91cnMgYXJlIHNob3dpbmcsIHdlIG1heSBuZWVkIHRvIGFkZCBhIGxlYWRpbmcgemVyby5cbiAgICAvLyBBbHdheXMgc2hvdyBhdCBsZWFzdCBvbmUgZGlnaXQgb2YgbWludXRlcy5cbiAgICBtID0gKChoIHx8IGdtID49IDEwKSAmJiBtIDwgMTAgPyAnMCcgKyBtIDogbSkgKyAnOic7XG5cbiAgICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICAgIHMgPSBzIDwgMTAgPyAnMCcgKyBzIDogcztcblxuICAgIHJldHVybiBoICsgbSArIHMgKyBtcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZvcm1hdFRpbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9hbmltYXRpb25EaXNwbGF5ID0gcmVxdWlyZSgnLi9jb250cm9scy9hbmltYXRpb24tZGlzcGxheScpO1xuXG52YXIgX2FuaW1hdGlvbkRpc3BsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uRGlzcGxheSk7XG5cbnZhciBfcmVjb3JkQ2FudmFzID0gcmVxdWlyZSgnLi9jb250cm9scy9yZWNvcmQtY2FudmFzJyk7XG5cbnZhciBfcmVjb3JkQ2FudmFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY29yZENhbnZhcyk7XG5cbnZhciBfZGV2aWNlQnV0dG9uID0gcmVxdWlyZSgnLi9jb250cm9scy9kZXZpY2UtYnV0dG9uJyk7XG5cbnZhciBfZGV2aWNlQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldmljZUJ1dHRvbik7XG5cbnZhciBfY2FtZXJhQnV0dG9uID0gcmVxdWlyZSgnLi9jb250cm9scy9jYW1lcmEtYnV0dG9uJyk7XG5cbnZhciBfY2FtZXJhQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVyYUJ1dHRvbik7XG5cbnZhciBfcmVjb3JkVG9nZ2xlID0gcmVxdWlyZSgnLi9jb250cm9scy9yZWNvcmQtdG9nZ2xlJyk7XG5cbnZhciBfcmVjb3JkVG9nZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY29yZFRvZ2dsZSk7XG5cbnZhciBfcmVjb3JkSW5kaWNhdG9yID0gcmVxdWlyZSgnLi9jb250cm9scy9yZWNvcmQtaW5kaWNhdG9yJyk7XG5cbnZhciBfcmVjb3JkSW5kaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY29yZEluZGljYXRvcik7XG5cbnZhciBfZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbnZhciBfZGVmYXVsdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHMpO1xuXG52YXIgX2Zvcm1hdFRpbWUgPSByZXF1aXJlKCcuL3V0aWxzL2Zvcm1hdC10aW1lJyk7XG5cbnZhciBfZm9ybWF0VGltZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtYXRUaW1lKTtcblxudmFyIF9icm93c2VyU2hpbSA9IHJlcXVpcmUoJy4vdXRpbHMvYnJvd3Nlci1zaGltJyk7XG5cbnZhciBfYnJvd3NlclNoaW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnJvd3NlclNoaW0pO1xuXG52YXIgX2RldGVjdEJyb3dzZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RldGVjdC1icm93c2VyJyk7XG5cbnZhciBfcmVjb3JkUnRjID0gcmVxdWlyZSgnLi9lbmdpbmUvcmVjb3JkLXJ0YycpO1xuXG52YXIgX3JlY29yZFJ0YzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWNvcmRSdGMpO1xuXG52YXIgX3JlY29yZEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lL3JlY29yZC1lbmdpbmUnKTtcblxudmFyIF9yZWNvcmRNb2RlID0gcmVxdWlyZSgnLi9lbmdpbmUvcmVjb3JkLW1vZGUnKTtcblxudmFyIF92aWRlbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wyd2aWRlb2pzJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyd2aWRlb2pzJ10gOiBudWxsKTtcblxudmFyIF92aWRlbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92aWRlbyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmaWxlIHZpZGVvanMucmVjb3JkLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoZSBtYWluIGZpbGUgZm9yIHRoZSB2aWRlb2pzLXJlY29yZCBwcm9qZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNSVQgbGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2NvbGxhYi1wcm9qZWN0L3ZpZGVvanMtcmVjb3JkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBQbHVnaW4gPSBfdmlkZW8yLmRlZmF1bHQuZ2V0UGx1Z2luKCdwbHVnaW4nKTtcbnZhciBQbGF5ZXIgPSBfdmlkZW8yLmRlZmF1bHQuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKTtcblxudmFyIEFVVE8gPSAnYXV0byc7XG5cbi8vIG1vbmtleS1wYXRjaCBwbGF5ICgjMTUyKVxuUGxheWVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gcGxheSgpIHtcbiAgICB2YXIgcmV0dmFsID0gdGhpcy50ZWNoR2V0XygncGxheScpO1xuICAgIC8vIHNpbGVuY2UgZXJyb3JzICh1bmhhbmRsZWQgcHJvbWlzZSBmcm9tIHBsYXkpXG4gICAgaWYgKHJldHZhbCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXR2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR2YWwudGhlbihudWxsLCBmdW5jdGlvbiAoZSkge30pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufTtcblxuLyoqXHJcbiAqIFJlY29yZCBhdWRpby92aWRlby9pbWFnZXMgdXNpbmcgdGhlIFZpZGVvLmpzIHBsYXllci5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdWdtZW50cyB2aWRlb2pzLlBsdWdpblxyXG4gKi9cblxudmFyIFJlY29yZCA9IGZ1bmN0aW9uIChfUGx1Z2luKSB7XG4gICAgX2luaGVyaXRzKFJlY29yZCwgX1BsdWdpbik7XG5cbiAgICAvKipcclxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIGNsYXNzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KHZpZGVvanMuUGxheWVyfE9iamVjdCl9IHBsYXllclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQbGF5ZXIgb3B0aW9ucy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlY29yZChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZCk7XG5cbiAgICAgICAgLy8gc2V0dXAgcGx1Z2luIG9wdGlvbnNcbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlY29yZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZCkpLmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKSk7XG5cbiAgICAgICAgX3RoaXMubG9hZE9wdGlvbnMoKTtcblxuICAgICAgICAvLyAocmUpc2V0IHJlY29yZGVyIHN0YXRlXG4gICAgICAgIF90aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAvLyBhZGQgZGV2aWNlIGJ1dHRvbiB3aXRoIGljb24gYmFzZWQgb24gdHlwZVxuICAgICAgICB2YXIgZGV2aWNlSWNvbiA9ICdhdi1wZXJtJztcbiAgICAgICAgc3dpdGNoIChfdGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuSU1BR0VfT05MWTpcbiAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgIGRldmljZUljb24gPSAndmlkZW8tcGVybSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgZGV2aWNlSWNvbiA9ICdhdWRpby1wZXJtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBfZGV2aWNlQnV0dG9uMi5kZWZhdWx0LnByb3RvdHlwZS5idWlsZENTU0NsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdXNlIGR5bmFtaWMgaWNvbiBjbGFzc1xuICAgICAgICAgICAgcmV0dXJuICd2anMtZGV2aWNlLWJ1dHRvbiB2anMtY29udHJvbCB2anMtaWNvbi0nICsgZGV2aWNlSWNvbjtcbiAgICAgICAgfTtcbiAgICAgICAgcGxheWVyLmRldmljZUJ1dHRvbiA9IG5ldyBfZGV2aWNlQnV0dG9uMi5kZWZhdWx0KHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIHBsYXllci5hZGRDaGlsZChwbGF5ZXIuZGV2aWNlQnV0dG9uKTtcblxuICAgICAgICAvLyBhZGQgYmxpbmtpbmcgcmVjb3JkIGluZGljYXRvclxuICAgICAgICBwbGF5ZXIucmVjb3JkSW5kaWNhdG9yID0gbmV3IF9yZWNvcmRJbmRpY2F0b3IyLmRlZmF1bHQocGxheWVyLCBvcHRpb25zKTtcbiAgICAgICAgcGxheWVyLnJlY29yZEluZGljYXRvci5oaWRlKCk7XG4gICAgICAgIHBsYXllci5hZGRDaGlsZChwbGF5ZXIucmVjb3JkSW5kaWNhdG9yKTtcblxuICAgICAgICAvLyBhZGQgY2FudmFzIGZvciByZWNvcmRpbmcgYW5kIGRpc3BsYXlpbmcgaW1hZ2VcbiAgICAgICAgcGxheWVyLnJlY29yZENhbnZhcyA9IG5ldyBfcmVjb3JkQ2FudmFzMi5kZWZhdWx0KHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIHBsYXllci5yZWNvcmRDYW52YXMuaGlkZSgpO1xuICAgICAgICBwbGF5ZXIuYWRkQ2hpbGQocGxheWVyLnJlY29yZENhbnZhcyk7XG5cbiAgICAgICAgLy8gYWRkIGltYWdlIGZvciBhbmltYXRpb24gZGlzcGxheVxuICAgICAgICBwbGF5ZXIuYW5pbWF0aW9uRGlzcGxheSA9IG5ldyBfYW5pbWF0aW9uRGlzcGxheTIuZGVmYXVsdChwbGF5ZXIsIG9wdGlvbnMpO1xuICAgICAgICBwbGF5ZXIuYW5pbWF0aW9uRGlzcGxheS5oaWRlKCk7XG4gICAgICAgIHBsYXllci5hZGRDaGlsZChwbGF5ZXIuYW5pbWF0aW9uRGlzcGxheSk7XG5cbiAgICAgICAgLy8gYWRkIGNhbWVyYSBidXR0b25cbiAgICAgICAgcGxheWVyLmNhbWVyYUJ1dHRvbiA9IG5ldyBfY2FtZXJhQnV0dG9uMi5kZWZhdWx0KHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIHBsYXllci5jYW1lcmFCdXR0b24uaGlkZSgpO1xuXG4gICAgICAgIC8vIGFkZCByZWNvcmQgdG9nZ2xlXG4gICAgICAgIHBsYXllci5yZWNvcmRUb2dnbGUgPSBuZXcgX3JlY29yZFRvZ2dsZTIuZGVmYXVsdChwbGF5ZXIsIG9wdGlvbnMpO1xuICAgICAgICBwbGF5ZXIucmVjb3JkVG9nZ2xlLmhpZGUoKTtcblxuICAgICAgICAvLyB3YWl0IHVudGlsIHBsYXllciB1aSBpcyByZWFkeVxuICAgICAgICBfdGhpcy5wbGF5ZXIub25lKCdyZWFkeScsIF90aGlzLnNldHVwVUkuYmluZChfdGhpcykpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXR1cCBwbHVnaW4gb3B0aW9ucy5cclxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVjb3JkLCBbe1xuICAgICAgICBrZXk6ICdsb2FkT3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciByZWNvcmRPcHRpb25zID0gX3ZpZGVvMi5kZWZhdWx0Lm1lcmdlT3B0aW9ucyhfZGVmYXVsdHMyLmRlZmF1bHQsIHRoaXMucGxheWVyLm9wdGlvbnNfLnBsdWdpbnMucmVjb3JkKTtcblxuICAgICAgICAgICAgLy8gcmVjb3JkIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLnJlY29yZEltYWdlID0gcmVjb3JkT3B0aW9ucy5pbWFnZTtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkQXVkaW8gPSByZWNvcmRPcHRpb25zLmF1ZGlvO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRWaWRlbyA9IHJlY29yZE9wdGlvbnMudmlkZW87XG4gICAgICAgICAgICB0aGlzLnJlY29yZEFuaW1hdGlvbiA9IHJlY29yZE9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5tYXhMZW5ndGggPSByZWNvcmRPcHRpb25zLm1heExlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuZGVidWcgPSByZWNvcmRPcHRpb25zLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRUaW1lU2xpY2UgPSByZWNvcmRPcHRpb25zLnRpbWVTbGljZTtcblxuICAgICAgICAgICAgLy8gdmlkZW8vY2FudmFzIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLnZpZGVvQml0c1BlclNlY29uZCA9IHJlY29yZE9wdGlvbnMudmlkZW9CaXRzUGVyU2Vjb25kO1xuICAgICAgICAgICAgdGhpcy52aWRlb0ZyYW1lV2lkdGggPSByZWNvcmRPcHRpb25zLmZyYW1lV2lkdGg7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRnJhbWVIZWlnaHQgPSByZWNvcmRPcHRpb25zLmZyYW1lSGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyVHlwZSA9IHJlY29yZE9wdGlvbnMudmlkZW9SZWNvcmRlclR5cGU7XG4gICAgICAgICAgICB0aGlzLnZpZGVvTWltZVR5cGUgPSByZWNvcmRPcHRpb25zLnZpZGVvTWltZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIGF1ZGlvIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmF1ZGlvRW5naW5lID0gcmVjb3JkT3B0aW9ucy5hdWRpb0VuZ2luZTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlclR5cGUgPSByZWNvcmRPcHRpb25zLmF1ZGlvUmVjb3JkZXJUeXBlO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1dvcmtlclVSTCA9IHJlY29yZE9wdGlvbnMuYXVkaW9Xb3JrZXJVUkw7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQnVmZmVyU2l6ZSA9IHJlY29yZE9wdGlvbnMuYXVkaW9CdWZmZXJTaXplO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NhbXBsZVJhdGUgPSByZWNvcmRPcHRpb25zLmF1ZGlvU2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CaXRSYXRlID0gcmVjb3JkT3B0aW9ucy5hdWRpb0JpdFJhdGU7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2hhbm5lbHMgPSByZWNvcmRPcHRpb25zLmF1ZGlvQ2hhbm5lbHM7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvTWltZVR5cGUgPSByZWNvcmRPcHRpb25zLmF1ZGlvTWltZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbiBzZXR0aW5nc1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJhdGUgPSByZWNvcmRPcHRpb25zLmFuaW1hdGlvbkZyYW1lUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uUXVhbGl0eSA9IHJlY29yZE9wdGlvbnMuYW5pbWF0aW9uUXVhbGl0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBsYXllciBVSSBpcyByZWFkeS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXR1cFVJJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwVUkoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgLy8gaW5zZXJ0IGN1c3RvbSBjb250cm9scyBvbiBsZWZ0LXNpZGUgb2YgY29udHJvbGJhclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCh0aGlzLnBsYXllci5jYW1lcmFCdXR0b24pO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZSh0aGlzLnBsYXllci5jYW1lcmFCdXR0b24uZWwoKSwgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5lbCgpLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZSh0aGlzLnBsYXllci5yZWNvcmRUb2dnbGUuZWwoKSwgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5lbCgpLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICAvLyBnZXQgcmlkIG9mIHVudXNlZCBjb250cm9sc1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbnRyb2xCYXIucmVtYWluaW5nVGltZURpc3BsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucmVtYWluaW5nVGltZURpc3BsYXkuZWwoKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbnRyb2xCYXIubGl2ZURpc3BsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIubGl2ZURpc3BsYXkuZWwoKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIGZlYXR1cmUgaXMgbmV2ZXIgdXNlZCBpbiB0aGlzIHBsdWdpblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubG9vcChmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIHR3ZWFrIHBsYXllciBVSSBiYXNlZCBvbiB0eXBlXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2UgdG8gdmlkZW9qcy13YXZlc3VyZmVyIHBsdWdpblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlciA9IHRoaXMucGxheWVyLndhdmVzdXJmZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLklNQUdFX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbWl6ZSBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5iaWdQbGF5QnV0dG9uLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWRtZXRhZGF0YSByZXNldHMgdGhlIGR1cmF0aW9uRGlzcGxheSBmb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub25lKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbWF4IHJlY29yZCB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuc2V0RHVyYXRpb24oX3RoaXMyLm1heExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgY29udHJvbHMgZG9uJ3Qgd29yayBmb3IgdGhpcyBVSSBzbyBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZW0gbm8gbWF0dGVyIHdoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnVzaW5nTmF0aXZlQ29udHJvbHNfID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIudGVjaF8uZWxfICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50ZWNoXy5lbF8uY29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNraW5nIG9yIHRhcHBpbmcgdGhlIHBsYXllciB2aWRlbyBlbGVtZW50IHNob3VsZCBub3QgdHJ5XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHN0YXJ0IHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlbW92ZVRlY2hDb250cm9sc0xpc3RlbmVyc18oKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIub3B0aW9uc18uY29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzIGNvbnRyb2wgaXNuJ3QgdXNlZCBieSB0aGlzIHBsdWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGNvbnRyb2xiYXIgZmFkZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3VzZXJpbmFjdGl2ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIudXNlckFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2aWRlb2pzIGF1dG9tYXRpY2FsbHkgaGlkZXMgdGhlIGNvbnRyb2xzIHdoZW4gbm8gdmFsaWQgJ3NvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgaW5jbHVkZWQgaW4gdGhlIHZpZGVvIG9yIGF1ZGlvIHRhZy4gRG9uJ3QuIEV2ZXIgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIuZWwoKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkaXNhYmxlIHRpbWUgZGlzcGxheSBldmVudHMgdGhhdCBjb25zdGFudGx5IHRyeSB0byByZXNldCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAvLyBhbmQgZHVyYXRpb24gdmFsdWVzXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vZmYoJ3RpbWV1cGRhdGUnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9mZignZHVyYXRpb25jaGFuZ2UnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9mZignbG9hZGVkbWV0YWRhdGEnKTtcblxuICAgICAgICAgICAgLy8gZGlzcGxheSBtYXggcmVjb3JkIHRpbWVcbiAgICAgICAgICAgIHRoaXMuc2V0RHVyYXRpb24odGhpcy5tYXhMZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIHBsYXkgY29udHJvbFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5wbGF5VG9nZ2xlLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgY3VycmVudGx5IHJlY29yZGluZyBvciBub3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBQbHVnaW4gY3VycmVudGx5IHJlY29yZGluZyBvciBub3QuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUmVjb3JkaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUmVjb3JkaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29yZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgY3VycmVudGx5IHByb2Nlc3NpbmcgcmVjb3JkZWQgZGF0YVxyXG4gICAgICAgICAqIG9yIG5vdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFBsdWdpbiBwcm9jZXNzaW5nIG9yIG5vdC5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNQcm9jZXNzaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUHJvY2Vzc2luZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBkZXN0cm95ZWQgb3Igbm90LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gUGx1Z2luIGRlc3Ryb3llZCBvciBub3QuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRGVzdHJveWVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyICYmIHRoaXMucGxheWVyLmNoaWxkcmVuKCkgPT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcGVuIHRoZSBicm93c2VyJ3MgcmVjb3JkaW5nIGRldmljZSBzZWxlY3Rpb24gZGlhbG9nLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREZXZpY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGV2aWNlKCkge1xuICAgICAgICAgICAgLy8gZGVmaW5lIGRldmljZSBjYWxsYmFja3Mgb25jZVxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlUmVhZHlDYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VSZWFkeUNhbGxiYWNrID0gdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VFcnJvckNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUVycm9yQ2FsbGJhY2sgPSB0aGlzLm9uRGV2aWNlRXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZVN0b3BDYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmVTdG9wQ2FsbGJhY2sgPSB0aGlzLm9uUmVjb3JkQ29tcGxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFzayB0aGUgYnJvd3NlciB0byBnaXZlIHRoZSB1c2VyIGFjY2VzcyB0byB0aGUgbWVkaWEgZGV2aWNlXG4gICAgICAgICAgICAvLyBhbmQgZ2V0IGEgc3RyZWFtIHJlZmVyZW5jZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHVwIG1pY3JvcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1JlY29yZGVyVHlwZSA9PT0gQVVUTyA/IHRydWUgOiB0aGlzLmF1ZGlvUmVjb3JkZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBtaWNyb3Bob25lIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS51bignZGV2aWNlUmVhZHknLCB0aGlzLmRldmljZVJlYWR5Q2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS51bignZGV2aWNlRXJyb3InLCB0aGlzLmRldmljZUVycm9yQ2FsbGJhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHVwIG5ldyBtaWNyb3Bob25lIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS5vbignZGV2aWNlUmVhZHknLCB0aGlzLmRldmljZVJlYWR5Q2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS5vbignZGV2aWNlRXJyb3InLCB0aGlzLmRldmljZUVycm9yQ2FsbGJhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGUgZXhpc3RpbmcgcGxheWJhY2sgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnNldHVwUGxheWJhY2tFdmVudHMoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIChyZSlzZXQgc3VyZmVyIGxpdmVNb2RlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLmxpdmVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLm1pY3JvcGhvbmUucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBicm93c2VyIGRldmljZSBzZWxlY3Rpb24gZGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgY2FtZXJhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IHRoaXMudmlkZW9SZWNvcmRlclR5cGUgPT09IEFVVE8gPyB0cnVlIDogdGhpcy52aWRlb1JlY29yZGVyVHlwZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy5nZXRSZWNvcmRUeXBlKCkgPT09IF9yZWNvcmRNb2RlLklNQUdFX09OTFkgPyB0aGlzLnJlY29yZEltYWdlIDogdGhpcy5yZWNvcmRWaWRlb1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpKS5jYXRjaCh0aGlzLm9uRGV2aWNlRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgY2FtZXJhIGFuZCBtaWNyb3Bob25lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IHRoaXMuYXVkaW9SZWNvcmRlclR5cGUgPT09IEFVVE8gPyB0cnVlIDogdGhpcy5hdWRpb1JlY29yZGVyVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvUmVjb3JkZXJUeXBlID09PSBBVVRPID8gdHJ1ZSA6IHRoaXMudmlkZW9SZWNvcmRlclR5cGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IHRoaXMucmVjb3JkQXVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy5yZWNvcmRWaWRlb1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpKS5jYXRjaCh0aGlzLm9uRGV2aWNlRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHVwIGNhbWVyYVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGVkIEdJRlxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLnJlY29yZEFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpKS5jYXRjaCh0aGlzLm9uRGV2aWNlRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlZCB3aGVuIHRoZSBkZXZpY2UgaXMgcmVhZHkuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcGFyYW0gc3RyZWFtOiBMb2NhbE1lZGlhU3RyZWFtIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkRldmljZVJlYWR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlUmVhZHkoc3RyZWFtKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fZGV2aWNlQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHN0cmVhbSBmb3Igc3RvcHBpbmcgZXRjLlxuICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG5cbiAgICAgICAgICAgIC8vIGhpZGUgZGV2aWNlIHNlbGVjdGlvbiBidXR0b25cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRldmljZUJ1dHRvbi5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IHRpbWUgKGUuZy4gd2hlbiBzdG9wRGV2aWNlIHdhcyB1c2VkKVxuICAgICAgICAgICAgdGhpcy5zZXREdXJhdGlvbih0aGlzLm1heExlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRUaW1lKDApO1xuXG4gICAgICAgICAgICAvLyBoaWRlIHBsYXkvcGF1c2UgY29udHJvbCAoZS5nLiB3aGVuIHN0b3BEZXZpY2Ugd2FzIHVzZWQpXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLnBsYXlUb2dnbGUuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyByZXNldCBwbGF5YmFjayBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyLCAndGltZXVwZGF0ZScsIHRoaXMucGxheWJhY2tUaW1lVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMub2ZmKHRoaXMucGxheWVyLCAnZW5kZWQnLCB0aGlzLnBsYXliYWNrVGltZVVwZGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIHNldHVwIHJlY29yZGluZyBlbmdpbmVcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFJlY29yZFR5cGUoKSAhPT0gX3JlY29yZE1vZGUuSU1BR0VfT05MWSkge1xuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBsaWJ2b3JiaXMuanMsIHJlY29yZGVyLmpzLCBvcHVzLXJlY29yZGVyIGFuZCBsYW1lanNcbiAgICAgICAgICAgICAgICAvLyBhcmUgb25seSBzdXBwb3J0ZWQgaW4gYXVkaW8tb25seSBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpICE9PSBfcmVjb3JkTW9kZS5BVURJT19PTkxZICYmICh0aGlzLmF1ZGlvRW5naW5lID09PSBfcmVjb3JkRW5naW5lLkxJQlZPUkJJU0pTIHx8IHRoaXMuYXVkaW9FbmdpbmUgPT09IF9yZWNvcmRFbmdpbmUuUkVDT1JERVJKUyB8fCB0aGlzLmF1ZGlvRW5naW5lID09PSBfcmVjb3JkRW5naW5lLkxBTUVKUyB8fCB0aGlzLmF1ZGlvRW5naW5lID09PSBfcmVjb3JkRW5naW5lLk9QVVNSRUNPUkRFUikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXJyZW50bHkgJyArIHRoaXMuYXVkaW9FbmdpbmUgKyAnIGlzIG9ubHkgc3VwcG9ydGVkIGluIGF1ZGlvLW9ubHkgbW9kZS4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgcmVjb3JkZXIgY2xhc3NcbiAgICAgICAgICAgICAgICB2YXIgRW5naW5lQ2xhc3M7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmF1ZGlvRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZEVuZ2luZS5SRUNPUkRSVEM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmRSVEMuanMgKGRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdpbmVDbGFzcyA9IF92aWRlbzIuZGVmYXVsdC5SZWNvcmRSVENFbmdpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRFbmdpbmUuTElCVk9SQklTSlM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsaWJ2b3JiaXMuanNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZUNsYXNzID0gX3ZpZGVvMi5kZWZhdWx0LkxpYlZvcmJpc0VuZ2luZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZEVuZ2luZS5SRUNPUkRFUkpTOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3JkZXIuanNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZUNsYXNzID0gX3ZpZGVvMi5kZWZhdWx0LlJlY29yZGVyanNFbmdpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRFbmdpbmUuTEFNRUpTOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFtZWpzXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdpbmVDbGFzcyA9IF92aWRlbzIuZGVmYXVsdC5MYW1lanNFbmdpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRFbmdpbmUuT1BVU1JFQ09SREVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B1cy1yZWNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgRW5naW5lQ2xhc3MgPSBfdmlkZW8yLmRlZmF1bHQuT3B1c1JlY29yZGVyRW5naW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVua25vd24gZW5naW5lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYXVkaW9FbmdpbmU6ICcgKyB0aGlzLmF1ZGlvRW5naW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29ubmVjdCBzdHJlYW0gdG8gcmVjb3JkaW5nIGVuZ2luZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmVDbGFzcyh0aGlzLnBsYXllciwgdGhpcy5wbGF5ZXIub3B0aW9uc18pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGxvYWQgJyArIHRoaXMuYXVkaW9FbmdpbmUgKyAnIHBsdWdpbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBmb3IgZXZlbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUub24oJ3JlY29yZENvbXBsZXRlJywgdGhpcy5lbmdpbmVTdG9wQ2FsbGJhY2spO1xuXG4gICAgICAgICAgICAgICAgLy8gYXVkaW8gc2V0dGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5idWZmZXJTaXplID0gdGhpcy5hdWRpb0J1ZmZlclNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc2FtcGxlUmF0ZSA9IHRoaXMuYXVkaW9TYW1wbGVSYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmJpdFJhdGUgPSB0aGlzLmF1ZGlvQml0UmF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hdWRpb0NoYW5uZWxzID0gdGhpcy5hdWRpb0NoYW5uZWxzO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmF1ZGlvV29ya2VyVVJMID0gdGhpcy5hdWRpb1dvcmtlclVSTDtcblxuICAgICAgICAgICAgICAgIC8vIG1pbWUgdHlwZVxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm1pbWVUeXBlID0ge1xuICAgICAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlb01pbWVUeXBlLFxuICAgICAgICAgICAgICAgICAgICBnaWY6ICdpbWFnZS9naWYnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdWRpb01pbWVUeXBlICE9PSBudWxsICYmIHRoaXMuYXVkaW9NaW1lVHlwZSAhPT0gQVVUTykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5taW1lVHlwZS5hdWRpbyA9IHRoaXMuYXVkaW9NaW1lVHlwZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB2aWRlby9jYW52YXMgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS52aWRlb0JpdHNQZXJTZWNvbmQgPSB0aGlzLnZpZGVvQml0c1BlclNlY29uZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS52aWRlbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmlkZW9GcmFtZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMudmlkZW9GcmFtZUhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2FudmFzID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy52aWRlb0ZyYW1lV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy52aWRlb0ZyYW1lSGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGVkIEdJRiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnF1YWxpdHkgPSB0aGlzLmFuaW1hdGlvblF1YWxpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZnJhbWVSYXRlID0gdGhpcy5hbmltYXRpb25GcmFtZVJhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyB0aW1lU2xpY2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNvcmRUaW1lU2xpY2UgJiYgdGhpcy5yZWNvcmRUaW1lU2xpY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnRpbWVTbGljZSA9IHRoaXMucmVjb3JkVGltZVNsaWNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5vblRpbWVTdGFtcCA9IHRoaXMub25UaW1lU3RhbXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHJlY29yZGVyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc2V0dXAodGhpcy5zdHJlYW0sIHRoaXMubWVkaWFUeXBlLCB0aGlzLmRlYnVnKTtcblxuICAgICAgICAgICAgICAgIC8vIHNob3cgZWxlbWVudHMgdGhhdCBzaG91bGQgbmV2ZXIgYmUgaGlkZGVuIGluIGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAvLyBhdWRpbyBhbmQvb3IgdmlkZW8gbW9kdXNcbiAgICAgICAgICAgICAgICB2YXIgdWlFbGVtZW50cyA9IFt0aGlzLnBsYXllci5jb250cm9sQmFyLmN1cnJlbnRUaW1lRGlzcGxheSwgdGhpcy5wbGF5ZXIuY29udHJvbEJhci50aW1lRGl2aWRlciwgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5kdXJhdGlvbkRpc3BsYXldO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsKCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gc2hvdyByZWNvcmQgYnV0dG9uXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkVG9nZ2xlLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZSByZWNvcmQgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkSW5kaWNhdG9yLmRpc2FibGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldHVwIFVJIGZvciByZXRyeWluZyBzbmFwc2hvdCAoZS5nLiB3aGVuIHN0b3BEZXZpY2Ugd2FzXG4gICAgICAgICAgICAgICAgLy8gdXNlZClcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJ5U25hcHNob3QoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGFuZCBzaG93IGNhbWVyYSBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW1lcmFCdXR0b24ub25TdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2FtZXJhQnV0dG9uLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2V0dXAgcHJldmlld1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpICE9PSBfcmVjb3JkTW9kZS5BVURJT19PTkxZKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyBsaXZlIHByZXZpZXdcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudCA9IHRoaXMucGxheWVyLmVsKCkuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudC5jb250cm9scyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gbXV0ZSBpbmNvbWluZyBhdWRpbyBmb3IgZmVlZGJhY2sgbG9vcHNcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudC5tdXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBoaWRlIHRoZSB2b2x1bWUgYmFyIHdoaWxlIGl0J3MgbXV0ZWRcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWb2x1bWVDb250cm9sKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIC8vIGxvYWQgc3RyZWFtXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuc3RyZWFtKTtcblxuICAgICAgICAgICAgICAgIC8vIHN0cmVhbSBsb2FkaW5nIGlzIGFzeW5jLCBzbyB3ZSB3YWl0IHVudGlsIGl0J3MgcmVhZHkgdG8gcGxheVxuICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJlYW1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLm1lZGlhRWxlbWVudC5wbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yd2FyZCB0byBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnBsYXllci50cmlnZ2VyKCdkZXZpY2VSZWFkeScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmb3J3YXJkIHRvIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2RldmljZVJlYWR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VkIHdoZW4gYW4gZGV2aWNlIGVycm9yIG9jY3VycmVkLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGV2aWNlRXJyb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25EZXZpY2VFcnJvcihjb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXZpY2VBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gc3RvcmUgY29kZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZGV2aWNlRXJyb3JDb2RlID0gY29kZTtcblxuICAgICAgICAgICAgLy8gZm9yd2FyZCBlcnJvciB0byBwbGF5ZXJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2RldmljZUVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Byb2Nlc3NpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBoaWRlIHBsYXkvcGF1c2UgY29udHJvbFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldCBwbGF5YmFjayBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICB0aGlzLm9mZih0aGlzLnBsYXllciwgJ3RpbWV1cGRhdGUnLCB0aGlzLnBsYXliYWNrVGltZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmYodGhpcy5wbGF5ZXIsICdlbmRlZCcsIHRoaXMucGxheWJhY2tUaW1lVXBkYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHByZXZpZXdcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGUgcGxheWJhY2sgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zZXR1cFBsYXliYWNrRXZlbnRzKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQvcmVzdW1lIGxpdmUgYXVkaW8gdmlzdWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLm1pY3JvcGhvbmUucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5saXZlTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zdXJmZXIubWljcm9waG9uZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLlZJREVPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aWV3IHZpZGVvIHN0cmVhbSBpbiB2aWRlbyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VmlkZW9QcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRDYW52YXMuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGlvbkRpc3BsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93IHByZXZpZXcgdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgYW5pbWF0aW9ucywgY2FwdHVyZSB0aGUgZmlyc3QgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBhcyBzb29uIGFzIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZUZyYW1lKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgdmlkZW8gcHJldmlldyAqKmFmdGVyKiogY2FwdHVyaW5nIGZpcnN0IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnN0YXJ0VmlkZW9QcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHJlY29yZGluZ1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNuYXBzaG90XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNuYXBzaG90KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignc3RhcnRSZWNvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBtZWRpYSBzdHJlYW0gb24gdmlkZW8gZWxlbWVudCB0byBhY3R1YWxseSBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGFjdHVhbGx5IHJlY29yZGluZyBwcm9jZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnN0YXJ0UmVjb3JkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgcmVzb3VyY2VzIGhhdmUgYWxyZWFkeSBsb2FkZWQsIHNvIHdlIGNhbiBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3JkaW5nIHJpZ2h0IGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCByZWNvcmRpbmcuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnRSZWNvcmRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RlciBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VUaW1lID0gdGhpcy5wYXVzZWRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IGNvdW50ZG93blxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24gPSB0aGlzLnBsYXllci5zZXRJbnRlcnZhbCh0aGlzLm9uQ291bnREb3duLmJpbmQodGhpcyksIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgcmVjb3JkaW5nXG4gICAgICAgICAgICBpZiAodGhpcy5lbmdpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3RhcnQgcmVjb3JkaW5nIHN0cmVhbVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhcnQoKTtcblxuICAgICAgICAgICAgLy8gbm90aWZ5IFVJXG4gICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdzdGFydFJlY29yZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcCByZWNvcmRpbmcuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Byb2Nlc3NpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpICE9PSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBVSVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdzdG9wUmVjb3JkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcCByZWNvcmRpbmcgc3RyZWFtIChyZXN1bHQgd2lsbCBiZSBhdmFpbGFibGUgYXN5bmMpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnJlY29yZGVkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVycyB0aGF0IGltYWdlIGRhdGEgaXMgKGFscmVhZHkpIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignZmluaXNoUmVjb3JkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIGRldmljZShzKSBhbmQgcmVjb3JkaW5nIGlmIGFjdGl2ZS5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcERldmljZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wRGV2aWNlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWNvcmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIC8vIHN0b3Agc3RyZWFtIG9uY2UgcmVjb3JkZWQgZGF0YSBpcyBhdmFpbGFibGUsXG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J2xsIGJyZWFrIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uZSgnZmluaXNoUmVjb3JkJywgdGhpcy5zdG9wU3RyZWFtLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3RvcCByZWNvcmRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcCBzdHJlYW0gbm93LCBzaW5jZSB0aGVyZSdzIG5vIHJlY29yZGVkIGRhdGEgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wIHN0cmVhbSBhbmQgZGV2aWNlLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wU3RyZWFtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTdHJlYW0oKSB7XG4gICAgICAgICAgICAvLyBzdG9wIHN0cmVhbSBhbmQgZGV2aWNlXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXZpY2VBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFJlY29yZFR5cGUoKSA9PT0gX3JlY29yZE1vZGUuQVVESU9fT05MWSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSBtaWNyb3Bob25lIHBsdWdpbiBzdG9wIGl0J3MgZGV2aWNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5taWNyb3Bob25lLnN0b3BEZXZpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBhdXNlIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzdW1lIHJlY29yZGluZy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzdW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkVGltZSArPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucGF1c2VUaW1lO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZWQgd2hlbiByZWNvcmRpbmcgY29tcGxldGVkIGFuZCB0aGUgcmVzdWx0aW5nIHN0cmVhbSBpc1xyXG4gICAgICAgICAqIGF2YWlsYWJsZS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblJlY29yZENvbXBsZXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVjb3JkQ29tcGxldGUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHJlY29yZGVkIHN0cmVhbSBkYXRhXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRlZERhdGEgPSB0aGlzLmVuZ2luZS5yZWNvcmRlZERhdGE7XG5cbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgcmVwbGF5IGJ1dHRvbiBiYWNrIHRvIGEgcGxheSBidXR0b25cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5yZW1vdmVDbGFzcygndmpzLWVuZGVkJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jb250cm9sQmFyLnBsYXlUb2dnbGUuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzIHRoYXQgZGF0YSBpcyBhdmFpbGFibGVcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2ZpbmlzaFJlY29yZCcpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXVzZSBwbGF5ZXIgc28gdXNlciBjYW4gc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIucGF1c2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR1cCBldmVudHMgZm9yIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnNldHVwUGxheWJhY2tFdmVudHModHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubG9hZGluZ1NwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgaW50ZXJhY3Rpb24gd2l0aCBjb250cm9scyBhZnRlciB3YXZlZm9ybVxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJpbmcgaXMgY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLm9uY2UoJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1Ll9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZpc3VhbGl6ZSByZWNvcmRlZCBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMucGxheWVyLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5WSURFT19PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fVklERU86XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdXNpbmcgdGhlIHBsYXllciBzbyB3ZSBjYW4gdmlzdWFsaXplIHRoZSByZWNvcmRlZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgdHJpZ2dlciBhbiBhc3luYyB2aWRlby5qcyAncGF1c2UnIGV2ZW50IHRoYXQgd2VcbiAgICAgICAgICAgICAgICAgICAgLy8gaGF2ZSB0byB3YWl0IGZvci5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub25lKCdwYXVzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZpZGVvIGRhdGEgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGxvYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnBsYXllci5sb2FkaW5nU3Bpbm5lci5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgc3RyZWFtIHRvdGFsIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUuc2V0RHVyYXRpb24oX3RoaXM1LnN0cmVhbUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRpbWUgZHVyaW5nIHBsYXliYWNrIGFuZCBhdCBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5vbihfdGhpczUucGxheWVyLCAndGltZXVwZGF0ZScsIF90aGlzNS5wbGF5YmFja1RpbWVVcGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1Lm9uKF90aGlzNS5wbGF5ZXIsICdlbmRlZCcsIF90aGlzNS5wbGF5YmFja1RpbWVVcGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bm11dGUgbG9jYWwgYXVkaW8gZHVyaW5nIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXM1LmdldFJlY29yZFR5cGUoKSA9PT0gX3JlY29yZE1vZGUuQVVESU9fVklERU8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubWVkaWFFbGVtZW50Lm11dGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSB2b2x1bWUgYmFyIHdoZW4gaXQncyB1bm11dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmRpc3BsYXlWb2x1bWVDb250cm9sKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHJlY29yZGVkIG1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF9kZXRlY3RCcm93c2VyLmlzQ2hyb21lKSgpICYmIF90aGlzNS5nZXRSZWNvcmRUeXBlKCkgPT09IF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHZpZGVvIHByb3BlcnR5IG9uIENocm9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2FkKF90aGlzNS5wbGF5ZXIucmVjb3JkZWREYXRhLnZpZGVvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvYWQoX3RoaXM1LnBsYXllci5yZWNvcmRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwYXVzZSBwbGF5ZXIgc28gdXNlciBjYW4gc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uIGRhdGEgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxvYWRpbmdTcGlubmVyLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IGFuaW1hdGlvbiB0b3RhbCBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER1cmF0aW9uKHRoaXMuc3RyZWFtRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgcHJldmlldyB2aWRlb1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcGF1c2UgcGxheWVyIHNvIHVzZXIgY2FuIHN0YXJ0IHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBhbmltYXRpb24gb24gcGxheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uKHRoaXMucGxheWVyLCAncGxheScsIHRoaXMuc2hvd0FuaW1hdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBhbmltYXRpb24gb24gcGF1c2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbih0aGlzLnBsYXllciwgJ3BhdXNlJywgdGhpcy5oaWRlQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VkIGR1cmluZyByZWNvcmRpbmcgYW5kIGRpc3BsYXlzIHRoZSByZW1haW5pbmcgdGltZS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNvdW50RG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvdW50RG93bigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5tYXhMZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gKG5vdyAtICh0aGlzLnN0YXJ0VGltZSArIHRoaXMucGF1c2VkVGltZSkpIC8gMTAwMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtRHVyYXRpb24gPSBjdXJyZW50VGltZTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+PSBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhdCB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gZHVyYXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcCByZWNvcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZShjdXJyZW50VGltZSwgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ3Byb2dyZXNzUmVjb3JkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgcmVjb3JkZWQgc3RyZWFtIGR1cmluZyBwbGF5YmFjay5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFJldHVybnMgMCBpZiBubyByZWNvcmRpbmcgaXMgYXZhaWxhYmxlICh5ZXQpLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDdXJyZW50VGltZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IGlzTmFOKHRoaXMuc3RyZWFtQ3VycmVudFRpbWUpID8gMCA6IHRoaXMuc3RyZWFtQ3VycmVudFRpbWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldFJlY29yZFR5cGUoKSA9PT0gX3JlY29yZE1vZGUuQVVESU9fT05MWSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gdGhpcy5zdXJmZXIuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyB0aGUgcGxheWVyJ3MgZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBjdXJyZW50IHRpbWUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY3VycmVudFRpbWU9MF0gLSBDdXJyZW50IHBvc2l0aW9uIG9mIHRoZVxyXG4gICAgICAgICAqICAgIHBsYXloZWFkIChpbiBzZWNvbmRzKS5cclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTBdIC0gRHVyYXRpb24gaW4gc2Vjb25kcy5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q3VycmVudFRpbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q3VycmVudFRpbWUoY3VycmVudFRpbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBjdXJyZW50VGltZSA9IGlzTmFOKGN1cnJlbnRUaW1lKSA/IDAgOiBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gaXNOYU4oZHVyYXRpb24pID8gMCA6IGR1cmF0aW9uO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZlci5zZXRDdXJyZW50VGltZShjdXJyZW50VGltZSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbUN1cnJlbnRUaW1lID0gTWF0aC5taW4oY3VycmVudFRpbWUsIGR1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY3VycmVudCB0aW1lIGRpc3BsYXkgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIuY3VycmVudFRpbWVEaXNwbGF5LmZvcm1hdHRlZFRpbWVfID0gdGhpcy5wbGF5ZXIuY29udHJvbEJhci5jdXJyZW50VGltZURpc3BsYXkuY29udGVudEVsKCkubGFzdENoaWxkLnRleHRDb250ZW50ID0gKDAsIF9mb3JtYXRUaW1lMi5kZWZhdWx0KSh0aGlzLnN0cmVhbUN1cnJlbnRUaW1lLCBkdXJhdGlvbiwgdGhpcy5tc0Rpc3BsYXlNYXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSByZWNvcmRlZCBzdHJlYW0gaW4gc2Vjb25kcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFJldHVybnMgMCBpZiBubyByZWNvcmRpbmcgaXMgYXZhaWxhYmxlICh5ZXQpLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREdXJhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IGlzTmFOKHRoaXMuc3RyZWFtRHVyYXRpb24pID8gMCA6IHRoaXMuc3RyZWFtRHVyYXRpb247XG5cbiAgICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIHBsYXllcidzIGVsZW1lbnQgZGlzcGxheWluZyB0aGUgZHVyYXRpb24gdGltZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MF0gLSBEdXJhdGlvbiBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldER1cmF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IGlzTmFOKGR1cmF0aW9uKSA/IDAgOiBkdXJhdGlvbjtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc2V0RHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb24gZGlzcGxheSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbEJhci5kdXJhdGlvbkRpc3BsYXkuZm9ybWF0dGVkVGltZV8gPSB0aGlzLnBsYXllci5jb250cm9sQmFyLmR1cmF0aW9uRGlzcGxheS5jb250ZW50RWwoKS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAoMCwgX2Zvcm1hdFRpbWUyLmRlZmF1bHQpKGR1cmF0aW9uLCBkdXJhdGlvbiwgdGhpcy5tc0Rpc3BsYXlNYXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IGxvYWRpbmcgZGF0YS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7KHN0cmluZ3xibG9ifGZpbGUpfSB1cmwgLSBFaXRoZXIgdGhlIFVSTCBvZiB0aGUgbWVkaWEgZmlsZSxcclxuICAgICAgICAgKiAgICAgYSBCbG9iLCBhIEZpbGUgb2JqZWN0IG9yIE1lZGlhU3RyZWFtLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0UmVjb3JkVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAvLyB2aXN1YWxpemUgcmVjb3JkZWQgQmxvYiBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIubG9hZCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuSU1BR0VfT05MWTpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLlZJREVPX09OTFk6XG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzaWduIGJsb2IgdXNpbmcgY3JlYXRlT2JqZWN0VVJMXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX2Jyb3dzZXJTaGltMi5kZWZhdWx0KSh1cmwsIHRoaXMubWVkaWFFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gc3RyZWFtIHdpdGhvdXQgY3JlYXRlT2JqZWN0VVJMXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX2Jyb3dzZXJTaGltMi5kZWZhdWx0KSh1cmwsIHRoaXMubWVkaWFFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgc2F2ZSBhcyBkaWFsb2cgaW4gYnJvd3NlciBzbyB0aGUgdXNlciBjYW4gc3RvcmUgdGhlIHJlY29yZGVkIG1lZGlhXHJcbiAgICAgICAgICogbG9jYWxseS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lIC0gT2JqZWN0IHdpdGggb25lIG9yIG1vcmUgbmFtZXMgZm9yIHRoZSBwYXJ0aWN1bGFyXHJcbiAgICAgICAgICogICAgIGJsb2IocykgeW91IHdhbnQgdG8gc2F2ZS4gRmlsZSBleHRlbnNpb25zIGFyZSBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgICAqICAgICBGb3IgZXhhbXBsZTogeyd2aWRlbyc6ICduYW1lLW9mLXZpZGVvLWZpbGUnfS4gU3VwcG9ydGVkIGtleXMgYXJlXHJcbiAgICAgICAgICogICAgICdhdWRpbycsICd2aWRlbycgYW5kICdnaWYnLlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlQXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSAmJiBuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zYXZlQXMobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXN0cm95IHBsdWdpbiBvbmx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogVXNlIGBkZXN0cm95YCB0byByZW1vdmUgdGhlIHBsdWdpbiBhbmQgdGhlIHBsYXllci5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICAgICAgLy8gZGlzYWJsZSBjb21tb24gZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vZmYoJ3JlYWR5Jyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5vZmYoJ3VzZXJpbmFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub2ZmKCdsb2FkZWRtZXRhZGF0YScpO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGNhbGxiYWNrcyBpZiByZWNvcmRpbmcgaXMgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5vZmYoJ3JlY29yZENvbXBsZXRlJywgdGhpcy5lbmdpbmVTdG9wQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdG9wIHJlY29yZGluZyBhbmQgZGV2aWNlXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcERldmljZSgpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGNvdW50ZG93blxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bik7XG5cbiAgICAgICAgICAgIC8vIGRpc3Bvc2Ugd2F2ZXN1cmZlci5qc1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UmVjb3JkVHlwZSgpID09IF9yZWNvcmRNb2RlLkFVRElPX09OTFkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdXJmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxzbyBkaXNwb3NlcyBwbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgICAgIF9nZXQoUmVjb3JkLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZC5wcm90b3R5cGUpLCAnZGlzcG9zZScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXN0cm95IHBsdWdpbiBhbmQgcGxheWVycyBhbmQgY2xlYW51cCByZXNvdXJjZXMuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlc2V0IHRoZSBwbHVnaW4uXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgY2FsbGJhY2tzIGlmIHJlY29yZGluZyBpcyBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm9mZigncmVjb3JkQ29tcGxldGUnLCB0aGlzLmVuZ2luZVN0b3BDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN0b3AgcmVjb3JkaW5nIGFuZCBkZXZpY2VcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdG9wRGV2aWNlKCk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jbGVhckludGVydmFsKHRoaXMuY291bnREb3duKTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5sb2FkT3B0aW9ucygpO1xuXG4gICAgICAgICAgICAvLyByZXNldCByZWNvcmRlciBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IHJlY29yZCB0aW1lXG4gICAgICAgICAgICB0aGlzLnNldER1cmF0aW9uKHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoMCk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IHBsYXllclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nZXRSZWNvcmRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFVRElPX09OTFk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1cmZlciAmJiB0aGlzLnN1cmZlci5zdXJmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtcHR5IGxhc3QgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZmVyLnN1cmZlci5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5JTUFHRV9PTkxZOlxuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQU5JTUFUSU9OOlxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBVSVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRDYW52YXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jYW1lcmFCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGlkZSBwbGF5IGNvbnRyb2xcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHNob3cgZGV2aWNlIHNlbGVjdGlvbiBidXR0b25cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmRldmljZUJ1dHRvbi5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgcmVjb3JkIGJ1dHRvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkVG9nZ2xlLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gbG9hZGVkbWV0YWRhdGEgcmVzZXRzIHRoZSBkdXJhdGlvbkRpc3BsYXkgZm9yIHRoZVxuICAgICAgICAgICAgLy8gZmlyc3QgdGltZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub25lKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IG1heCByZWNvcmQgdGltZVxuICAgICAgICAgICAgICAgIF90aGlzNi5zZXREdXJhdGlvbihfdGhpczYubWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzZXQgdGhlIHBsdWdpbiByZWNvcmRlciBzdGF0ZS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNldFN0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2RldmljZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgcmVjb3JkZXIgdHlwZS5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UmVjb3JkVHlwZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWNvcmRUeXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfcmVjb3JkTW9kZS5nZXRSZWNvcmRlck1vZGUpKHRoaXMucmVjb3JkSW1hZ2UsIHRoaXMucmVjb3JkQXVkaW8sIHRoaXMucmVjb3JkVmlkZW8sIHRoaXMucmVjb3JkQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZSBhbmQgZGlzcGxheSBzbmFwc2hvdCBpbWFnZS5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVTbmFwc2hvdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTbmFwc2hvdCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVGcmFtZSgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIHR1cm4gdGhlIGNhbnZhcyBkYXRhIGludG8gYmFzZTY0IGRhdGEgd2l0aCBhIFBORyBoZWFkZXJcbiAgICAgICAgICAgICAgICBfdGhpczcucGxheWVyLnJlY29yZGVkRGF0YSA9IHJlc3VsdC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBwcmV2aWV3IHZpZGVvXG4gICAgICAgICAgICAgICAgX3RoaXM3Lm1lZGlhRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgc25hcHNob3RcbiAgICAgICAgICAgICAgICBfdGhpczcucGxheWVyLnJlY29yZENhbnZhcy5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9wIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgIF90aGlzNy5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlc2V0IFVJIGZvciByZXRyeWluZyBhIHNuYXBzaG90IGltYWdlLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JldHJ5U25hcHNob3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0cnlTbmFwc2hvdCgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gcmV0cnk6IGhpZGUgdGhlIHNuYXBzaG90XG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWNvcmRDYW52YXMuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBzaG93IHByZXZpZXcgdmlkZW9cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmVsKCkuZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhcHR1cmUgZnJhbWUgZnJvbSBjYW1lcmEgYW5kIGNvcHkgZGF0YSB0byBjYW52YXMuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2FwdHVyZUZyYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVGcmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZGV0ZWN0ZWQgPSAoMCwgX2RldGVjdEJyb3dzZXIuZGV0ZWN0QnJvd3NlcikoKTtcbiAgICAgICAgICAgIHZhciByZWNvcmRDYW52YXMgPSB0aGlzLnBsYXllci5yZWNvcmRDYW52YXMuZWwoKS5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBjYW1lcmEsXG4gICAgICAgICAgICAvLyB3aGljaCBhbHNvIHdpcGVzIHRoZSBjb250ZW50IG9mIHRoZSBjYW52YXNcbiAgICAgICAgICAgIHJlY29yZENhbnZhcy53aWR0aCA9IHRoaXMucGxheWVyLndpZHRoKCk7XG4gICAgICAgICAgICByZWNvcmRDYW52YXMuaGVpZ2h0ID0gdGhpcy5wbGF5ZXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gTWVkaWFDYXB0dXJlIGlzIG9ubHkgc3VwcG9ydGVkIG9uOlxuICAgICAgICAgICAgICAgIC8vIC0gQ2hyb21lIDYwIGFuZCBuZXdlciAoc2VlXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9tZWRpYWNhcHR1cmUtaW1hZ2UvYmxvYi9naC1wYWdlcy9pbXBsZW1lbnRhdGlvbi1zdGF0dXMubWQpXG4gICAgICAgICAgICAgICAgLy8gLSBGaXJlZm94IGJlaGluZCBmbGFnIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgxNzcpXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpbXBvcnRpbmcgSW1hZ2VDYXB0dXJlIGNhbiBmYWlsIHdoZW4gZW5hYmxpbmcgY2hyb21lIGZsYWcgaXMgc3RpbGwgcmVxdWlyZWQuXG4gICAgICAgICAgICAgICAgLy8gaWYgc287IGlnbm9yZSBhbmQgY29udGludWVcbiAgICAgICAgICAgICAgICBpZiAoZGV0ZWN0ZWQuYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgZGV0ZWN0ZWQudmVyc2lvbiA+PSA2MCAmJiAodHlwZW9mIEltYWdlQ2FwdHVyZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoSW1hZ2VDYXB0dXJlKSkgPT09ICh0eXBlb2YgRnVuY3Rpb24gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKEZ1bmN0aW9uKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFjayA9IF90aGlzOC5zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUNhcHR1cmUgPSBuZXcgSW1hZ2VDYXB0dXJlKHRyYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG90b1NldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGg6IHJlY29yZENhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodDogcmVjb3JkQ2FudmFzLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFrZSBwaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUNhcHR1cmUudGFrZVBob3RvKHBob3RvU2V0dGluZ3MpLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbWFnZUJpdG1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCBhIGZyYW1lIGFuZCBjb3B5IGl0IG9udG8gdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzOC5kcmF3Q2FudmFzKHJlY29yZENhbnZhcywgaW1hZ2VCaXRtYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IG90aGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkQ2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vIEltYWdlQ2FwdHVyZSBhdmFpbGFibGU6IGRvIGl0IHRoZSBvbGRza29vbCB3YXlcblxuICAgICAgICAgICAgICAgIC8vIGdldCBhIGZyYW1lIGFuZCBjb3B5IGl0IG9udG8gdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIF90aGlzOC5kcmF3Q2FudmFzKHJlY29yZENhbnZhcywgX3RoaXM4Lm1lZGlhRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgb3RoZXJzXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRDYW52YXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3IGltYWdlIGZyYW1lIG9uIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RyYXdDYW52YXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd0NhbnZhcyhjYW52YXMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShlbGVtZW50LCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQgcHJldmlldyBvZiB2aWRlbyBzdHJlYW0uXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnRWaWRlb1ByZXZpZXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRWaWRlb1ByZXZpZXcoKSB7XG4gICAgICAgICAgICAvLyBkaXNhYmxlIHBsYXliYWNrIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vZmYoJ3RpbWV1cGRhdGUnKTtcbiAgICAgICAgICAgIHRoaXMub2ZmKCdkdXJhdGlvbmNoYW5nZScpO1xuICAgICAgICAgICAgdGhpcy5vZmYoJ2xvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgICB0aGlzLm9mZigncGxheScpO1xuXG4gICAgICAgICAgICAvLyBtdXRlIGxvY2FsIGF1ZGlvXG4gICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudC5tdXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgdm9sdW1lIGNvbnRyb2wgdG8gcHJldmVudCBmZWVkYmFja1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Vm9sdW1lQ29udHJvbChmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IG9yIHJlc3VtZSBsaXZlIHByZXZpZXdcbiAgICAgICAgICAgIHRoaXMubG9hZCh0aGlzLnN0cmVhbSk7XG4gICAgICAgICAgICB0aGlzLm1lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaG93IGFuaW1hdGVkIEdJRi5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzaG93QW5pbWF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dBbmltYXRpb24oKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uRGlzcGxheSA9IHRoaXMucGxheWVyLmFuaW1hdGlvbkRpc3BsYXkuZWwoKS5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGltYWdlIHNpemUgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHJlY29yZGVkIGFuaW1hdGlvblxuICAgICAgICAgICAgYW5pbWF0aW9uRGlzcGxheS53aWR0aCA9IHRoaXMucGxheWVyLndpZHRoKCk7XG4gICAgICAgICAgICBhbmltYXRpb25EaXNwbGF5LmhlaWdodCA9IHRoaXMucGxheWVyLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIHRoZSBmaXJzdCBmcmFtZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkQ2FudmFzLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gc2hvdyB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAoMCwgX2Jyb3dzZXJTaGltMi5kZWZhdWx0KSh0aGlzLnBsYXllci5yZWNvcmRlZERhdGEsIGFuaW1hdGlvbkRpc3BsYXksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGlvbkRpc3BsYXkuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGlkZSBhbmltYXRlZCBHSUYuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGlkZUFuaW1hdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlQW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgLy8gc2hvdyB0aGUgZmlyc3QgZnJhbWVcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZENhbnZhcy5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0aW9uRGlzcGxheS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGUgdGltZSBkdXJpbmcgcGxheWJhY2suXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheWJhY2tUaW1lVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXliYWNrVGltZVVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSwgdGhpcy5zdHJlYW1EdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWNlaXZlZCBuZXcgdGltZXN0YW1wICh3aGVuIHRpbWVTbGljZSBvcHRpb24gaXMgZW5hYmxlZCkuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25UaW1lU3RhbXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25UaW1lU3RhbXAoY3VycmVudCwgYWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5jdXJyZW50VGltZXN0YW1wID0gY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFsbFRpbWVzdGFtcHMgPSBhbGw7XG5cbiAgICAgICAgICAgIC8vIGdldCBibG9iIChvbmx5IGZvciBNZWRpYVN0cmVhbVJlY29yZGVyKVxuICAgICAgICAgICAgdmFyIGludGVybmFsO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzLmVuZ2luZS5lbmdpbmUuYXVkaW9SZWNvcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9yZWNvcmRNb2RlLkFOSU1BVElPTjpcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzLmVuZ2luZS5lbmdpbmUuZ2lmUmVjb3JkZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzLmVuZ2luZS5lbmdpbmUudmlkZW9SZWNvcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGludGVybmFsID0gaW50ZXJuYWwuZ2V0SW50ZXJuYWxSZWNvcmRlcigpO1xuICAgICAgICAgICAgaWYgKGludGVybmFsIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlY29yZGVkRGF0YSA9IGludGVybmFsLmdldEFycmF5T2ZCbG9icygpO1xuXG4gICAgICAgICAgICAgICAgLy8gaW5qZWN0IGZpbGUgaW5mbyBmb3IgbmV3ZXN0IGJsb2JcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRGaWxlSW5mbyh0aGlzLnBsYXllci5yZWNvcmRlZERhdGFbdGhpcy5wbGF5ZXIucmVjb3JkZWREYXRhLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm90aWZ5IG90aGVyc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXN0YW1wJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbWVkaWEgaW5wdXQgYW5kIG91dHB1dCBkZXZpY2VzXHJcbiAgICAgICAgICogYXZhaWxhYmxlIG9uIHRoZSBzeXN0ZW0uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5LlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbnVtZXJhdGVEZXZpY2VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVudW1lcmF0ZURldmljZXMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIHx8ICFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5lbnVtZXJhdGVFcnJvckNvZGUgPSAnZW51bWVyYXRlRGV2aWNlcygpIG5vdCBzdXBwb3J0ZWQuJztcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdlbnVtZXJhdGVFcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTGlzdCBjYW1lcmFzIGFuZCBtaWNyb3Bob25lcy5cbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyh0aGlzKS50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM5LmRldmljZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBkZXZpY2VzLmZvckVhY2goZnVuY3Rpb24gKGRldmljZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczkuZGV2aWNlcy5wdXNoKGRldmljZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgX3RoaXM5LnBsYXllci50cmlnZ2VyKCdlbnVtZXJhdGVSZWFkeScpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzOS5wbGF5ZXIuZW51bWVyYXRlRXJyb3JDb2RlID0gZXJyO1xuICAgICAgICAgICAgICAgIF90aGlzOS5wbGF5ZXIudHJpZ2dlcignZW51bWVyYXRlRXJyb3InKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hhbmdlIHRoZSBhdWRpbyBvdXRwdXQgZGV2aWNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkIC0gSWQgb2YgYXVkaW8gb3V0cHV0IGRldmljZS5cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QXVkaW9PdXRwdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXVkaW9PdXRwdXQoZGV2aWNlSWQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdldFJlY29yZFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuQVVESU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHdhdmVzdXJmZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJmZXIuc3VyZmVyLnNldFNpbmtJZChkZXZpY2VJZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczEwLnBsYXllci50cmlnZ2VyKCdhdWRpb091dHB1dFJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBwbGF5ZXIudGVjaF8uZWxfO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV2aWNlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5zaW5rSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRTaW5rSWQoZGV2aWNlSWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMTAucGxheWVyLnRyaWdnZXIoJ2F1ZGlvT3V0cHV0UmVhZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbyBvdXRwdXQgZGV2aWNlIHNlbGVjdGlvbi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgZGV2aWNlSWQ6ICcgKyBkZXZpY2VJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZXJyb3IgaWYgd2UgZ2V0IGhlcmU6IG5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdlcnJvcicsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaG93IG9yIGhpZGUgdGhlIHZvbHVtZSBtZW51LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc3BsYXkgLSBIaWRlL3Nob3cgdm9sdW1lIGNvbnRyb2wuXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlWb2x1bWVDb250cm9sJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BsYXlWb2x1bWVDb250cm9sKGRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb250cm9sQmFyLnZvbHVtZVBhbmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xCYXIudm9sdW1lUGFuZWwuZWwoKS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWNvcmQ7XG59KFBsdWdpbik7XG5cbi8vIHZlcnNpb24gbnIgZ2V0cyByZXBsYWNlZCBkdXJpbmcgYnVpbGRcblxuXG5SZWNvcmQuVkVSU0lPTiA9ICdkZXYnO1xuXG4vLyByZWdpc3RlciBwbHVnaW5cbl92aWRlbzIuZGVmYXVsdC5SZWNvcmQgPSBSZWNvcmQ7XG5fdmlkZW8yLmRlZmF1bHQucmVnaXN0ZXJQbHVnaW4oJ3JlY29yZCcsIFJlY29yZCk7XG5cbi8vIGV4cG9ydCBwbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFJlY29yZDogUmVjb3JkXG59OyIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXHJcbi8qIGVzbGludC1lbnYgcXVuaXQgKi9cclxudmFyIHEgPSB3aW5kb3cuUVVuaXQ7XHJcblxyXG52YXIgdnIgPSByZXF1aXJlKCcuLi9lczUvdmlkZW9qcy5yZWNvcmQuanMnKTtcclxuXHJcbnEubW9kdWxlKCdCcm93c2VyaWZ5IFJlcXVpcmUgdmlkZW9qcy5yZWNvcmQnKTtcclxucS50ZXN0KCd2aWRlb2pzLnJlY29yZCBzaG91bGQgYmUgcmVxdWlyYWJsZSBhbmQgYnVuZGxlZCB2aWEgYnJvd3NlcmlmeScsIGZ1bmN0aW9uKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0Lm9rKHZyLCAndmlkZW9qcy5yZWNvcmQgaXMgcmVxdWlyZWQgcHJvcGVybHknKTtcclxufSk7XHJcblxyXG52YXIgbGFtZSA9IHJlcXVpcmUoJy4uL2VzNS9wbHVnaW5zL2xhbWVqcy1wbHVnaW4uanMnKTtcclxuXHJcbnEubW9kdWxlKCdCcm93c2VyaWZ5IFJlcXVpcmUgbGFtZWpzJyk7XHJcbnEudGVzdCgnbGFtZWpzIHBsdWdpbiBzaG91bGQgYmUgcmVxdWlyYWJsZSBhbmQgYnVuZGxlZCB2aWEgYnJvd3NlcmlmeScsIGZ1bmN0aW9uKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0Lm9rKGxhbWUsICd2aWRlb2pzLnJlY29yZC5sYW1lanMgaXMgcmVxdWlyZWQgcHJvcGVybHknKTtcclxufSk7XHJcblxyXG5cclxudmFyIGxpYnZvcmJpcyA9IHJlcXVpcmUoJy4uL2VzNS9wbHVnaW5zL2xpYnZvcmJpcy1wbHVnaW4uanMnKTtcclxuXHJcbnEubW9kdWxlKCdCcm93c2VyaWZ5IFJlcXVpcmUgbGlidm9yYmlzJyk7XHJcbnEudGVzdCgnbGlidm9yYmlzIHBsdWdpbiBzaG91bGQgYmUgcmVxdWlyYWJsZSBhbmQgYnVuZGxlZCB2aWEgYnJvd3NlcmlmeScsIGZ1bmN0aW9uKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0Lm9rKGxpYnZvcmJpcywgJ3ZpZGVvanMucmVjb3JkLmxpYnZvcmJpcyBpcyByZXF1aXJlZCBwcm9wZXJseScpO1xyXG59KTtcclxuXHJcblxyXG52YXIgb3B1cyA9IHJlcXVpcmUoJy4uL2VzNS9wbHVnaW5zL29wdXMtcmVjb3JkZXItcGx1Z2luLmpzJyk7XHJcblxyXG5xLm1vZHVsZSgnQnJvd3NlcmlmeSBSZXF1aXJlIG9wdXMtcmVjb3JkZXInKTtcclxucS50ZXN0KCdvcHVzLXJlY29yZGVyIHBsdWdpbiBzaG91bGQgYmUgcmVxdWlyYWJsZSBhbmQgYnVuZGxlZCB2aWEgYnJvd3NlcmlmeScsIGZ1bmN0aW9uKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0Lm9rKG9wdXMsICd2aWRlb2pzLnJlY29yZC5vcHVzLXJlY29yZGVyIGlzIHJlcXVpcmVkIHByb3Blcmx5Jyk7XHJcbn0pO1xyXG5cclxuXHJcbnZhciByZWNvcmRlcmpzID0gcmVxdWlyZSgnLi4vZXM1L3BsdWdpbnMvcmVjb3JkZXJqcy1wbHVnaW4uanMnKTtcclxuXHJcbnEubW9kdWxlKCdCcm93c2VyaWZ5IFJlcXVpcmUgcmVjb3JkZXJqcycpO1xyXG5xLnRlc3QoJ3JlY29yZGVyanMgcGx1Z2luIHNob3VsZCBiZSByZXF1aXJhYmxlIGFuZCBidW5kbGVkIHZpYSBicm93c2VyaWZ5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQub2socmVjb3JkZXJqcywgJ3ZpZGVvanMucmVjb3JkLnJlY29yZGVyanMgaXMgcmVxdWlyZWQgcHJvcGVybHknKTtcclxufSk7XHJcbiJdfQ==
