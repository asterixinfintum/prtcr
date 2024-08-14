"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _order = _interopRequireDefault(require("../models/order"));
var _autotrade = _interopRequireDefault(require("../models/autotrade"));
var _executedtrade = _interopRequireDefault(require("../models/executedtrade"));
var _wllt = _interopRequireDefault(require("../../wallet/models/wllt"));
var _asset = _interopRequireDefault(require("../../models/asset"));
var _autotradepair = _interopRequireDefault(require("../models/autotradepair"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var orders = _express["default"].Router();
orders.post('/order/market', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var ownerId, _req$body, tradingPair, pairId, type, side, total, price, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            error: 'User not found.'
          }));
        case 2:
          _context.prev = 2;
          ownerId = req.user._id;
          _req$body = req.body, tradingPair = _req$body.tradingPair, pairId = _req$body.pairId, type = _req$body.type, side = _req$body.side, total = _req$body.total, price = _req$body.price, quantity = _req$body.quantity, assettobuy = _req$body.assettobuy, assettosell = _req$body.assettosell, wallettype = _req$body.wallettype, wallet = _req$body.wallet, assettobuytype = _req$body.assettobuytype, assettoselltype = _req$body.assettoselltype, fees = _req$body.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            pairId: pairId,
            type: type,
            side: side,
            total: total,
            price: price,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees
          });
          _context.next = 8;
          return order.save();
        case 8:
          _context.next = 10;
          return order.executeorder({
            percentage: 100
          });
        case 10:
          res.status(201).send({
            message: 'Order created successfully.'
          });
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.error('Error processing order:', _context.t0);
          res.status(400).send({
            error: 'An error occurred while processing the order.'
          });
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
orders.post('/order/limit', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var ownerId, _req$body2, tradingPair, pairId, type, side, total, limitprice, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", res.status(404).send({
            error: 'User not found.'
          }));
        case 2:
          _context2.prev = 2;
          ownerId = req.user._id;
          _req$body2 = req.body, tradingPair = _req$body2.tradingPair, pairId = _req$body2.pairId, type = _req$body2.type, side = _req$body2.side, total = _req$body2.total, limitprice = _req$body2.limitprice, quantity = _req$body2.quantity, assettobuy = _req$body2.assettobuy, assettosell = _req$body2.assettosell, wallettype = _req$body2.wallettype, wallet = _req$body2.wallet, assettobuytype = _req$body2.assettobuytype, assettoselltype = _req$body2.assettoselltype, fees = _req$body2.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            pairId: pairId,
            type: type,
            side: side,
            total: total,
            price: limitprice,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees,
            limitPrice: limitprice // Assuming you need this separately
          });
          _context2.next = 8;
          return order.save();
        case 8:
          res.status(201).send({
            message: 'Order created successfully.'
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          console.error('Error processing limit order:', _context2.t0);
          res.status(400).send({
            error: 'An error occurred while processing the limit order.'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 11]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
orders.post('/order/stoplimit', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var ownerId, _req$body3, tradingPair, pairId, type, side, total, limitprice, stopprice, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", res.status(404).send({
            error: 'User not found.'
          }));
        case 2:
          _context3.prev = 2;
          ownerId = req.user._id;
          _req$body3 = req.body, tradingPair = _req$body3.tradingPair, pairId = _req$body3.pairId, type = _req$body3.type, side = _req$body3.side, total = _req$body3.total, limitprice = _req$body3.limitprice, stopprice = _req$body3.stopprice, quantity = _req$body3.quantity, assettobuy = _req$body3.assettobuy, assettosell = _req$body3.assettosell, wallettype = _req$body3.wallettype, wallet = _req$body3.wallet, assettobuytype = _req$body3.assettobuytype, assettoselltype = _req$body3.assettoselltype, fees = _req$body3.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            pairId: pairId,
            type: type,
            side: side,
            total: total,
            price: limitprice,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees,
            limitPrice: limitprice,
            stopPrice: stopprice
          });
          _context3.next = 8;
          return order.save();
        case 8:
          res.status(201).send({
            message: 'Order created successfully.'
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          console.error('Error processing stop limit order:', _context3.t0);
          res.status(400).send({
            error: 'An error occurred while processing the stop limit order.'
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
orders.post('/order/automatictrade', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var ownerId, _req$body4, tradingPair, total, price, assettobuy, assettosell, assettobuytype, assettoselltype, wallettype, wallet, fees, quantity, autotrade, walletitem, autotradepair;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return", res.status(404).send({
            error: 'User not found.'
          }));
        case 2:
          _context4.prev = 2;
          ownerId = req.user._id;
          _req$body4 = req.body, tradingPair = _req$body4.tradingPair, total = _req$body4.total, price = _req$body4.price, assettobuy = _req$body4.assettobuy, assettosell = _req$body4.assettosell, assettobuytype = _req$body4.assettobuytype, assettoselltype = _req$body4.assettoselltype, wallettype = _req$body4.wallettype, wallet = _req$body4.wallet, fees = _req$body4.fees, quantity = _req$body4.quantity;
          autotrade = new _autotrade["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            total: total,
            price: price,
            assettobuy: assettobuy,
            assettosell: assettosell,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            wallettype: wallettype,
            wallet: wallet,
            fees: fees,
            quantity: quantity
          });
          _context4.next = 8;
          return autotrade.save();
        case 8:
          _context4.next = 10;
          return _wllt["default"].findOne({
            _id: wallet
          });
        case 10:
          walletitem = _context4.sent;
          _context4.next = 13;
          return walletitem.withdraw(total, assettosell);
        case 13:
          autotradepair = new _autotradepair["default"]({
            tradingPair: tradingPair
          });
          _context4.next = 16;
          return autotradepair.save();
        case 16:
          //console.log(autotrade)

          res.status(201).send({
            message: 'Auto trade created successfully.'
          });
          _context4.next = 23;
          break;
        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](2);
          console.error('Error creating auto trade:', _context4.t0);
          res.status(400).send({
            error: 'An error occurred while creating the auto trade.'
          });
        case 23:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 19]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
orders.get('/orders', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userId, userOrders;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context5.next = 14;
            break;
          }
          _context5.prev = 1;
          userId = req.user._id;
          _context5.next = 5;
          return _order["default"].find({
            userId: userId
          });
        case 5:
          userOrders = _context5.sent;
          res.status(200).send({
            orders: userOrders
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          res.status(500).send({
            message: 'Error fetching orders',
            error: _context5.t0.message
          });
        case 12:
          _context5.next = 15;
          break;
        case 14:
          res.status(404).send({
            message: 'User not found'
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 9]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
orders.get('/trades', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userId, executedtrades;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context6.next = 14;
            break;
          }
          _context6.prev = 1;
          userId = req.user._id;
          _context6.next = 5;
          return _executedtrade["default"].find({
            userId: userId
          });
        case 5:
          executedtrades = _context6.sent;
          res.status(200).send({
            executedtrades: executedtrades
          });
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](1);
          res.status(500).send({
            message: 'Error fetching trades',
            error: _context6.t0.message
          });
        case 12:
          _context6.next = 15;
          break;
        case 14:
          res.status(404).send({
            message: 'User not found'
          });
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
orders.put('/order/cancel', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var orderid, orderitem;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context7.next = 10;
            break;
          }
          orderid = req.query.orderid;
          _context7.next = 4;
          return _order["default"].findOne({
            _id: orderid
          });
        case 4:
          orderitem = _context7.sent;
          _context7.next = 7;
          return orderitem.cancel();
        case 7:
          res.status(200).send({
            message: 'order cancelled'
          });
          _context7.next = 11;
          break;
        case 10:
          res.status(404).send({
            message: 'Error in found'
          });
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
orders.put('/autotrade/cancel', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var autotradeid, autotradeitem;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context8.next = 10;
            break;
          }
          autotradeid = req.query.autotradeid;
          _context8.next = 4;
          return _autotrade["default"].findOne({
            _id: autotradeid
          });
        case 4:
          autotradeitem = _context8.sent;
          _context8.next = 7;
          return autotradeitem.cancel();
        case 7:
          res.status(200).send({
            message: 'auto trade cancelled'
          });
          _context8.next = 11;
          break;
        case 10:
          res.status(404).send({
            message: 'Error in found'
          });
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
orders.get('/autotrades', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, autotrades;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context9.next = 14;
            break;
          }
          _context9.prev = 1;
          userId = req.user._id;
          _context9.next = 5;
          return _autotrade["default"].find({
            userId: userId
          });
        case 5:
          autotrades = _context9.sent;
          res.status(200).send({
            autotrades: autotrades
          });
          _context9.next = 12;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](1);
          res.status(500).send({
            message: 'Error fetching auto trades',
            error: _context9.t0.message
          });
        case 12:
          _context9.next = 15;
          break;
        case 14:
          res.status(404).send({
            message: 'User not found'
          });
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 9]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
orders.get('/orderplayground', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, userOrder, orderItem, _yield$orderItem$exec, walletasset, order, executedtrade;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = '650f3a7b1c2829c7bdbf9bdf';
          _context10.prev = 1;
          _context10.next = 4;
          return _order["default"].find({
            _id: id
          });
        case 4:
          userOrder = _context10.sent;
          orderItem = userOrder[0];
          _context10.next = 8;
          return orderItem.executesell(0.01, 0.16);
        case 8:
          _yield$orderItem$exec = _context10.sent;
          walletasset = _yield$orderItem$exec.walletasset;
          order = _yield$orderItem$exec.order;
          executedtrade = _yield$orderItem$exec.executedtrade;
          res.status(201).send({
            walletasset: walletasset,
            order: order,
            executedtrade: executedtrade
          });
          _context10.next = 18;
          break;
        case 15:
          _context10.prev = 15;
          _context10.t0 = _context10["catch"](1);
          res.status(500).send({
            message: 'Error executing sell',
            error: _context10.t0.message
          });
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 15]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
orders["delete"]('/allorders', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return deleteAllOrders();
        case 3:
          res.status(200).send({
            message: 'All Orders have been deleted.'
          });
          _context11.next = 9;
          break;
        case 6:
          _context11.prev = 6;
          _context11.t0 = _context11["catch"](0);
          res.status(500).send({
            message: 'Error deleting orders',
            error: _context11.t0.message
          });
        case 9:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 6]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
function deleteAllOrders() {
  return _deleteAllOrders.apply(this, arguments);
}
function _deleteAllOrders() {
  _deleteAllOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return _order["default"].deleteMany({});
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _deleteAllOrders.apply(this, arguments);
}
var _default = exports["default"] = orders;