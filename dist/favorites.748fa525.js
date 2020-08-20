// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/helpers/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItemToLocalStorage = addItemToLocalStorage;
exports.getItemFromLocalStorage = getItemFromLocalStorage;
exports.removeItemFromLocalStorage = removeItemFromLocalStorage;

/**
 *The function adds an item in localStorage. As a parameter, accepts two arguments, the first argument  should be string, the second argument can be any kind of type.
 * @param {string}-localStorage property key
 * @param {*}-localStorage property value
 * @returns {*}-property value
 */
function addItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value)); //@TODO add try catch 

  return value;
}
/**
 *The function gets the item from localStorage by key. As a parameter accepts one  argument- property key.
 * @param {string}-localStorage property key
 * @returns {object}-local storage property value
 */


function getItemFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem("".concat(key)));
}
/**
 *The function removes the item from localStorage by key. As a parameter accepts one argument- property key, which will be deleted.
 * @param {string}-localStorage property key
 * @returns {string}-localStorage property key
 */


function removeItemFromLocalStorage(key) {
  localStorage.removeItem("".concat(key));
  return key;
}
},{}],"src/services/getFavoriteCountries.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFavoriteCountries = getFavoriteCountries;

var _localStorage = require("../helpers/localStorage.js");

function getFavoriteCountries() {
  return localStorage.hasOwnProperty("favoriteCountries") ? (0, _localStorage.getItemFromLocalStorage)("favoriteCountries") : (0, _localStorage.addItemToLocalStorage)("favoriteCountries", []);
}
},{"../helpers/localStorage.js":"src/helpers/localStorage.js"}],"src/constants/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASE_URL = void 0;
var BASE_URL = "https://restcountries.eu/rest/v2";
exports.BASE_URL = BASE_URL;
},{}],"src/helpers/array.helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItemByValue = removeItemByValue;

function removeItemByValue(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === value) {
      arr.splice(i, 1);
    }
  }

  return arr;
}
},{}],"src/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBookmarkIcon = exports.createTableRow = exports.renderErrorMessage = exports.render = exports.favoriteCountries = void 0;

var _getFavoriteCountries = require("./services/getFavoriteCountries.js");

var _api = require("./constants/api.js");

var _localStorage = require("./helpers/localStorage.js");

var _arrayHelper = require("./helpers/array.helper.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var favoriteCountries = _toConsumableArray((0, _getFavoriteCountries.getFavoriteCountries)());

exports.favoriteCountries = favoriteCountries;

var render = function render(body, countries, title) {
  var titleContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "We are the one";

  if (title) {
    title.innerText = "".concat(titleContext);
  }

  body.innerText = "";
  countries.forEach(function (state) {
    createTableRow(state.name, state.flag, body);
  });
};

exports.render = render;

var renderErrorMessage = function renderErrorMessage(body, message, title) {
  var titleContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "We are the one";

  if (title) {
    title.innerText = "".concat(titleContext);
  }

  body.innerText = "";
  var errMessage = document.createElement("h3");
  errMessage.innerText = "".concat(message);
  body.append(errMessage);
};

exports.renderErrorMessage = renderErrorMessage;

var createTableRow = function createTableRow(name, flag, tableBody) {
  var newRow = tableBody.insertRow(tableBody.length);
  var icon = createBookmarkIcon("far");
  var nameCell = newRow.insertCell(0);
  var flagCell = newRow.insertCell(1);
  var img = document.createElement("img");
  var countryName = document.createElement("h3");
  countryName.innerText = name;
  img.src = flag;
  img.classList.add("flag-img");
  flagCell.append(img);
  nameCell.appendChild(countryName);
  nameCell.appendChild(icon);
  nameCell.classList.add("bookmarkIcon");
  favoriteCountries.forEach(function (country) {
    if (country.name === name) {
      nameCell.appendChild(countryName);
      icon.classList.remove("far");
      icon.classList.add("fas");
      nameCell.appendChild(icon);
    }
  });
  nameCell.addEventListener("click", function () {
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      nameCell.innerText = "";
      nameCell.appendChild(countryName);
      nameCell.appendChild(icon);
      var favCountry = {
        name: "".concat(name),
        url: "".concat(_api.BASE_URL, "/name/").concat(name)
      };
      favoriteCountries.push(favCountry);
      (0, _localStorage.addItemToLocalStorage)("favoriteCountries", favoriteCountries);
      return;
    }

    if (icon.classList.contains("fas")) {
      (0, _arrayHelper.removeItemByValue)(favoriteCountries, name);
      (0, _localStorage.addItemToLocalStorage)("favoriteCountries", favoriteCountries);
      icon.classList.remove("fas");
      icon.classList.add("far");
      nameCell.innerText = "";
      nameCell.appendChild(countryName);
      nameCell.appendChild(icon);
      return;
    }
  });
  newRow.classList.add("country");
  return newRow;
};
/**
*A function create bookmark icon,  accept  one argument, icon class, the look of the icon  depends on that class.
* @param {string}-class name
* @returns {object}-icon
*/


exports.createTableRow = createTableRow;

var createBookmarkIcon = function createBookmarkIcon(classListItem) {
  var icon = document.createElement("i");
  icon.classList.add("".concat(classListItem));
  icon.classList.add("fa-bookmark");
  icon.classList.add("fa-2x");
  return icon;
};

exports.createBookmarkIcon = createBookmarkIcon;
},{"./services/getFavoriteCountries.js":"src/services/getFavoriteCountries.js","./constants/api.js":"src/constants/api.js","./helpers/localStorage.js":"src/helpers/localStorage.js","./helpers/array.helper.js":"src/helpers/array.helper.js"}],"src/helpers/request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doPut = exports.doPost = exports.doGet = void 0;

var request = function request(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var requestConfig = {
    method: method,
    headers: {// "Content-Type": "application/json;charset=utf-8",
    }
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  return fetch(url, requestConfig).then(function (r) {
    return r.json();
  });
};

var doGet = function doGet(url) {
  return request(url, "GET");
};

exports.doGet = doGet;

var doPost = function doPost(url, body) {
  return request(url, "POST", body);
};

exports.doPost = doPost;

var doPut = function doPut(url, body) {
  return request(url, "PUT", body);
};

exports.doPut = doPut;
},{}],"src/favorites.js":[function(require,module,exports) {
"use strict";

var _render = require("./render.js");

var _request = require("./helpers/request.js");

var tableBody = document.querySelector("tbody");

_render.favoriteCountries.forEach(function (country) {
  (0, _request.doGet)(country.url).then(function (r) {
    (0, _render.createTableRow)(r[0].name, r[0].flag, tableBody);
  });
});
},{"./render.js":"src/render.js","./helpers/request.js":"src/helpers/request.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52799" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","src/favorites.js"], null)
//# sourceMappingURL=/favorites.748fa525.js.map