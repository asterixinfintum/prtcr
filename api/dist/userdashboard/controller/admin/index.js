"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authenticateToken = _interopRequireDefault(require("../../../utils/authenticateToken"));
var _user = _interopRequireDefault(require("../../../models/user"));
var _mongoose = require("mongoose");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var admindashboardcontroller = _express["default"].Router();
admindashboardcontroller.post('/user/dashboard/marginwalletstate', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var userid, marginwalletstate, useritem;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context.next = 21;
            break;
          }
          _context.prev = 1;
          userid = req.query.userid;
          marginwalletstate = req.body.marginwalletstate;
          _context.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context.sent;
          if (!useritem) {
            _context.next = 15;
            break;
          }
          useritem.tailoreddashboard.marginwalletstate = marginwalletstate;
          console.log(useritem.tailoreddashboard);
          _context.next = 12;
          return useritem.save();
        case 12:
          res.status(201).send({
            message: 'updated'
          });
          _context.next = 16;
          break;
        case 15:
          res.status(404).send({
            error: 'error'
          });
        case 16:
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 18]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/spotwalletstate', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userid, spotwalletstate, useritem;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context2.next = 20;
            break;
          }
          _context2.prev = 1;
          userid = req.query.userid;
          spotwalletstate = req.body.spotwalletstate;
          _context2.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context2.sent;
          if (!useritem) {
            _context2.next = 14;
            break;
          }
          useritem.tailoreddashboard.spotwalletstate = spotwalletstate;
          _context2.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
          _context2.next = 15;
          break;
        case 14:
          res.status(404).send({
            error: 'error'
          });
        case 15:
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 17]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/autotrademarketpercentage', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var userid, autotrademarketpercentage, useritem;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context3.next = 17;
            break;
          }
          _context3.prev = 1;
          userid = req.query.userid;
          autotrademarketpercentage = req.body.autotrademarketpercentage;
          _context3.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context3.sent;
          if (!useritem) {
            _context3.next = 12;
            break;
          }
          useritem.tailoreddashboard.autotrademarketpercentage = autotrademarketpercentage;
          _context3.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 14]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/autotrademarketstate', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userid, autotrademarketstate, useritem;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context4.next = 17;
            break;
          }
          _context4.prev = 1;
          userid = req.query.userid;
          autotrademarketstate = req.body.autotrademarketstate;
          _context4.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context4.sent;
          if (!useritem) {
            _context4.next = 12;
            break;
          }
          useritem.tailoreddashboard.autotrademarketstate = autotrademarketstate;
          _context4.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context4.next = 17;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 14]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/autotrademarketfigure', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userid, autotrademarketfigure, useritem;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context5.next = 17;
            break;
          }
          _context5.prev = 1;
          userid = req.query.userid;
          autotrademarketfigure = req.body.autotrademarketfigure;
          _context5.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context5.sent;
          if (!useritem) {
            _context5.next = 12;
            break;
          }
          useritem.tailoreddashboard.autotrademarketfigure = autotrademarketfigure;
          _context5.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context5.next = 17;
          break;
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 14]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/myprofitpercentfromyesterday', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userid, myprofitpercentfromyesterday, useritem;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context6.next = 17;
            break;
          }
          _context6.prev = 1;
          userid = req.query.userid;
          myprofitpercentfromyesterday = req.body.myprofitpercentfromyesterday;
          _context6.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context6.sent;
          if (!useritem) {
            _context6.next = 12;
            break;
          }
          useritem.tailoreddashboard.myprofitpercentfromyesterday = myprofitpercentfromyesterday;
          _context6.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context6.next = 17;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 14]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/myprofitpercent', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userid, myprofitpercent, useritem;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context7.next = 17;
            break;
          }
          _context7.prev = 1;
          userid = req.query.userid;
          myprofitpercent = req.body.myprofitpercent;
          _context7.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context7.sent;
          if (!useritem) {
            _context7.next = 12;
            break;
          }
          useritem.tailoreddashboard.myprofitpercent = myprofitpercent;
          _context7.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context7.next = 17;
          break;
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 14]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/profitsstate', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userid, profitsstate, useritem;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context8.next = 17;
            break;
          }
          _context8.prev = 1;
          userid = req.query.userid;
          profitsstate = req.body.profitsstate;
          _context8.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context8.sent;
          if (!useritem) {
            _context8.next = 12;
            break;
          }
          useritem.tailoreddashboard.profitsstate = profitsstate;
          _context8.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context8.next = 17;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 14]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/myprofitvalue', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userid, myprofitvalue, useritem;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context9.next = 17;
            break;
          }
          _context9.prev = 1;
          userid = req.query.userid;
          myprofitvalue = req.body.myprofitvalue;
          _context9.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context9.sent;
          if (!useritem) {
            _context9.next = 12;
            break;
          }
          useritem.tailoreddashboard.myprofitvalue = myprofitvalue;
          _context9.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context9.next = 17;
          break;
        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 14]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/updatetopassets', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userid, topassets, useritem;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context10.next = 17;
            break;
          }
          _context10.prev = 1;
          userid = req.query.userid;
          topassets = req.body.topassets;
          _context10.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context10.sent;
          if (!useritem) {
            _context10.next = 12;
            break;
          }
          useritem.tailoreddashboard.topassets = topassets;
          _context10.next = 11;
          return useritem.save();
        case 11:
          res.status(201).send({
            message: 'updated'
          });
        case 12:
          _context10.next = 17;
          break;
        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](1);
          res.status(500).send({
            error: 'error updating dashboard'
          });
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 14]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
admindashboardcontroller.post('/user/dashboard/addmessage', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var userid, message, useritem, notifications, options, update;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context11.next = 19;
            break;
          }
          _context11.prev = 1;
          userid = req.query.userid;
          message = req.body.message;
          _context11.next = 6;
          return _user["default"].findOne({
            _id: userid
          });
        case 6:
          useritem = _context11.sent;
          notifications = [].concat(_toConsumableArray(useritem.notifications), [{
            label: message,
            description: message
          }]);
          options = {
            "new": true,
            upsert: true
          };
          update = {
            $set: {
              notifications: notifications
            }
          };
          _context11.next = 12;
          return _user["default"].findOneAndUpdate({
            _id: userid
          }, update, options);
        case 12:
          res.status(201).send({
            message: 'user notifications updated'
          });
          _context11.next = 19;
          break;
        case 15:
          _context11.prev = 15;
          _context11.t0 = _context11["catch"](1);
          console.log(_context11.t0);
          res.status(500).send({
            error: 'error adding message'
          });
        case 19:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 15]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
var _default = exports["default"] = admindashboardcontroller;