var nE = { exports: {} }, cf = {}, rE = { exports: {} }, vf = { exports: {} };
vf.exports;
(function(s, f) {
  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = "18.3.1", m = Symbol.for("react.element"), E = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), F = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), Qe = Symbol.iterator, Pe = "@@iterator";
    function Se(c) {
      if (c === null || typeof c != "object")
        return null;
      var y = Qe && c[Qe] || c[Pe];
      return typeof y == "function" ? y : null;
    }
    var me = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, lt = {
      transition: null
    }, he = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, rt = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, Me = {}, Cn = null;
    function Rn(c) {
      Cn = c;
    }
    Me.setExtraStackFrame = function(c) {
      Cn = c;
    }, Me.getCurrentStack = null, Me.getStackAddendum = function() {
      var c = "";
      Cn && (c += Cn);
      var y = Me.getCurrentStack;
      return y && (c += y() || ""), c;
    };
    var Et = !1, et = !1, kn = !1, Ee = !1, He = !1, ht = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: lt,
      ReactCurrentOwner: rt
    };
    ht.ReactDebugCurrentFrame = Me, ht.ReactCurrentActQueue = he;
    function mt(c) {
      {
        for (var y = arguments.length, D = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          D[w - 1] = arguments[w];
        Gt("warn", c, D);
      }
    }
    function ge(c) {
      {
        for (var y = arguments.length, D = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          D[w - 1] = arguments[w];
        Gt("error", c, D);
      }
    }
    function Gt(c, y, D) {
      {
        var w = ht.ReactDebugCurrentFrame, B = w.getStackAddendum();
        B !== "" && (y += "%s", D = D.concat([B]));
        var se = D.map(function(Z) {
          return String(Z);
        });
        se.unshift("Warning: " + y), Function.prototype.apply.call(console[c], console, se);
      }
    }
    var Fr = {};
    function Zn(c, y) {
      {
        var D = c.constructor, w = D && (D.displayName || D.name) || "ReactClass", B = w + "." + y;
        if (Fr[B])
          return;
        ge("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", y, w), Fr[B] = !0;
      }
    }
    var mr = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(c) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(c, y, D) {
        Zn(c, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(c, y, D, w) {
        Zn(c, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(c, y, D, w) {
        Zn(c, "setState");
      }
    }, Ht = Object.assign, Tn = {};
    Object.freeze(Tn);
    function zn(c, y, D) {
      this.props = c, this.context = y, this.refs = Tn, this.updater = D || mr;
    }
    zn.prototype.isReactComponent = {}, zn.prototype.setState = function(c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, c, y, "setState");
    }, zn.prototype.forceUpdate = function(c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    };
    {
      var Hr = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, yr = function(c, y) {
        Object.defineProperty(zn.prototype, c, {
          get: function() {
            mt("%s(...) is deprecated in plain JavaScript React classes. %s", y[0], y[1]);
          }
        });
      };
      for (var gr in Hr)
        Hr.hasOwnProperty(gr) && yr(gr, Hr[gr]);
    }
    function er() {
    }
    er.prototype = zn.prototype;
    function Wt(c, y, D) {
      this.props = c, this.context = y, this.refs = Tn, this.updater = D || mr;
    }
    var xn = Wt.prototype = new er();
    xn.constructor = Wt, Ht(xn, zn.prototype), xn.isPureReactComponent = !0;
    function Fn() {
      var c = {
        current: null
      };
      return Object.seal(c), c;
    }
    var Hn = Array.isArray;
    function Ct(c) {
      return Hn(c);
    }
    function rn(c) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, D = y && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return D;
      }
    }
    function jt(c) {
      try {
        return Dt(c), !1;
      } catch {
        return !0;
      }
    }
    function Dt(c) {
      return "" + c;
    }
    function Ot(c) {
      if (jt(c))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(c)), Dt(c);
    }
    function jn(c, y, D) {
      var w = c.displayName;
      if (w)
        return w;
      var B = y.displayName || y.name || "";
      return B !== "" ? D + "(" + B + ")" : D;
    }
    function tr(c) {
      return c.displayName || "Context";
    }
    function Dn(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case C:
          return "Fragment";
        case E:
          return "Portal";
        case j:
          return "Profiler";
        case d:
          return "StrictMode";
        case _:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case F:
            var y = c;
            return tr(y) + ".Consumer";
          case P:
            var D = c;
            return tr(D._context) + ".Provider";
          case Y:
            return jn(c, c.render, "ForwardRef");
          case W:
            var w = c.displayName || null;
            return w !== null ? w : Dn(c.type) || "Memo";
          case V: {
            var B = c, se = B._payload, Z = B._init;
            try {
              return Dn(Z(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var br = Object.prototype.hasOwnProperty, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, rr, an;
    an = {};
    function Bn(c) {
      if (br.call(c, "ref")) {
        var y = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function yt(c) {
      if (br.call(c, "key")) {
        var y = Object.getOwnPropertyDescriptor(c, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ar(c, y) {
      var D = function() {
        pn || (pn = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
      };
      D.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: D,
        configurable: !0
      });
    }
    function aa(c, y) {
      var D = function() {
        rr || (rr = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
      };
      D.isReactWarning = !0, Object.defineProperty(c, "ref", {
        get: D,
        configurable: !0
      });
    }
    function ia(c) {
      if (typeof c.ref == "string" && rt.current && c.__self && rt.current.stateNode !== c.__self) {
        var y = Dn(rt.current.type);
        an[y] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y, c.ref), an[y] = !0);
      }
    }
    var q = function(c, y, D, w, B, se, Z) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: c,
        key: y,
        ref: D,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function re(c, y, D) {
      var w, B = {}, se = null, Z = null, fe = null, Oe = null;
      if (y != null) {
        Bn(y) && (Z = y.ref, ia(y)), yt(y) && (Ot(y.key), se = "" + y.key), fe = y.__self === void 0 ? null : y.__self, Oe = y.__source === void 0 ? null : y.__source;
        for (w in y)
          br.call(y, w) && !nr.hasOwnProperty(w) && (B[w] = y[w]);
      }
      var qe = arguments.length - 2;
      if (qe === 1)
        B.children = D;
      else if (qe > 1) {
        for (var Ke = Array(qe), Je = 0; Je < qe; Je++)
          Ke[Je] = arguments[Je + 2];
        Object.freeze && Object.freeze(Ke), B.children = Ke;
      }
      if (c && c.defaultProps) {
        var ot = c.defaultProps;
        for (w in ot)
          B[w] === void 0 && (B[w] = ot[w]);
      }
      if (se || Z) {
        var dt = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
        se && ar(B, dt), Z && aa(B, dt);
      }
      return q(c, se, Z, fe, Oe, rt.current, B);
    }
    function Ce(c, y) {
      var D = q(c.type, y, c.ref, c._self, c._source, c._owner, c.props);
      return D;
    }
    function $e(c, y, D) {
      if (c == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
      var w, B = Ht({}, c.props), se = c.key, Z = c.ref, fe = c._self, Oe = c._source, qe = c._owner;
      if (y != null) {
        Bn(y) && (Z = y.ref, qe = rt.current), yt(y) && (Ot(y.key), se = "" + y.key);
        var Ke;
        c.type && c.type.defaultProps && (Ke = c.type.defaultProps);
        for (w in y)
          br.call(y, w) && !nr.hasOwnProperty(w) && (y[w] === void 0 && Ke !== void 0 ? B[w] = Ke[w] : B[w] = y[w]);
      }
      var Je = arguments.length - 2;
      if (Je === 1)
        B.children = D;
      else if (Je > 1) {
        for (var ot = Array(Je), dt = 0; dt < Je; dt++)
          ot[dt] = arguments[dt + 2];
        B.children = ot;
      }
      return q(c.type, se, Z, fe, Oe, qe, B);
    }
    function Ye(c) {
      return typeof c == "object" && c !== null && c.$$typeof === m;
    }
    var _t = ".", gt = ":";
    function On(c) {
      var y = /[=:]/g, D = {
        "=": "=0",
        ":": "=2"
      }, w = c.replace(y, function(B) {
        return D[B];
      });
      return "$" + w;
    }
    var Xe = !1, Vn = /\/+/g;
    function at(c) {
      return c.replace(Vn, "$&/");
    }
    function it(c, y) {
      return typeof c == "object" && c !== null && c.key != null ? (Ot(c.key), On("" + c.key)) : y.toString(36);
    }
    function jr(c, y, D, w, B) {
      var se = typeof c;
      (se === "undefined" || se === "boolean") && (c = null);
      var Z = !1;
      if (c === null)
        Z = !0;
      else
        switch (se) {
          case "string":
          case "number":
            Z = !0;
            break;
          case "object":
            switch (c.$$typeof) {
              case m:
              case E:
                Z = !0;
            }
        }
      if (Z) {
        var fe = c, Oe = B(fe), qe = w === "" ? _t + it(fe, 0) : w;
        if (Ct(Oe)) {
          var Ke = "";
          qe != null && (Ke = at(qe) + "/"), jr(Oe, y, Ke, "", function(Cf) {
            return Cf;
          });
        } else
          Oe != null && (Ye(Oe) && (Oe.key && (!fe || fe.key !== Oe.key) && Ot(Oe.key), Oe = Ce(
            Oe,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            D + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Oe.key && (!fe || fe.key !== Oe.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              at("" + Oe.key) + "/"
            ) : "") + qe
          )), y.push(Oe));
        return 1;
      }
      var Je, ot, dt = 0, je = w === "" ? _t : w + gt;
      if (Ct(c))
        for (var Pa = 0; Pa < c.length; Pa++)
          Je = c[Pa], ot = je + it(Je, Pa), dt += jr(Je, y, D, ot, B);
      else {
        var no = Se(c);
        if (typeof no == "function") {
          var vu = c;
          no === vu.entries && (Xe || mt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xe = !0);
          for (var Ef = no.call(vu), ca, pu = 0; !(ca = Ef.next()).done; )
            Je = ca.value, ot = je + it(Je, pu++), dt += jr(Je, y, D, ot, B);
        } else if (se === "object") {
          var hu = String(c);
          throw new Error("Objects are not valid as a React child (found: " + (hu === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : hu) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return dt;
    }
    function Sr(c, y, D) {
      if (c == null)
        return c;
      var w = [], B = 0;
      return jr(c, w, "", "", function(se) {
        return y.call(D, se, B++);
      }), w;
    }
    function vi(c) {
      var y = 0;
      return Sr(c, function() {
        y++;
      }), y;
    }
    function Xi(c, y, D) {
      Sr(c, function() {
        y.apply(this, arguments);
      }, D);
    }
    function Zo(c) {
      return Sr(c, function(y) {
        return y;
      }) || [];
    }
    function pi(c) {
      if (!Ye(c))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return c;
    }
    function hi(c) {
      var y = {
        $$typeof: F,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: c,
        _currentValue2: c,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      y.Provider = {
        $$typeof: P,
        _context: y
      };
      var D = !1, w = !1, B = !1;
      {
        var se = {
          $$typeof: F,
          _context: y
        };
        Object.defineProperties(se, {
          Provider: {
            get: function() {
              return w || (w = !0, ge("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), y.Provider;
            },
            set: function(Z) {
              y.Provider = Z;
            }
          },
          _currentValue: {
            get: function() {
              return y._currentValue;
            },
            set: function(Z) {
              y._currentValue = Z;
            }
          },
          _currentValue2: {
            get: function() {
              return y._currentValue2;
            },
            set: function(Z) {
              y._currentValue2 = Z;
            }
          },
          _threadCount: {
            get: function() {
              return y._threadCount;
            },
            set: function(Z) {
              y._threadCount = Z;
            }
          },
          Consumer: {
            get: function() {
              return D || (D = !0, ge("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), y.Consumer;
            }
          },
          displayName: {
            get: function() {
              return y.displayName;
            },
            set: function(Z) {
              B || (mt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Z), B = !0);
            }
          }
        }), y.Consumer = se;
      }
      return y._currentRenderer = null, y._currentRenderer2 = null, y;
    }
    var oa = -1, Ua = 0, ua = 1, Er = 2;
    function Cr(c) {
      if (c._status === oa) {
        var y = c._result, D = y();
        if (D.then(function(se) {
          if (c._status === Ua || c._status === oa) {
            var Z = c;
            Z._status = ua, Z._result = se;
          }
        }, function(se) {
          if (c._status === Ua || c._status === oa) {
            var Z = c;
            Z._status = Er, Z._result = se;
          }
        }), c._status === oa) {
          var w = c;
          w._status = Ua, w._result = D;
        }
      }
      if (c._status === ua) {
        var B = c._result;
        return B === void 0 && ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, B), "default" in B || ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, B), B.default;
      } else
        throw c._result;
    }
    function Br(c) {
      var y = {
        // We use these fields to store the result.
        _status: oa,
        _result: c
      }, D = {
        $$typeof: V,
        _payload: y,
        _init: Cr
      };
      {
        var w, B;
        Object.defineProperties(D, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return w;
            },
            set: function(se) {
              ge("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = se, Object.defineProperty(D, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(se) {
              ge("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = se, Object.defineProperty(D, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return D;
    }
    function mi(c) {
      c != null && c.$$typeof === W ? ge("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof c != "function" ? ge("forwardRef requires a render function but was given %s.", c === null ? "null" : typeof c) : c.length !== 0 && c.length !== 2 && ge("forwardRef render functions accept exactly two parameters: props and ref. %s", c.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), c != null && (c.defaultProps != null || c.propTypes != null) && ge("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var y = {
        $$typeof: Y,
        render: c
      };
      {
        var D;
        Object.defineProperty(y, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return D;
          },
          set: function(w) {
            D = w, !c.name && !c.displayName && (c.displayName = w);
          }
        });
      }
      return y;
    }
    var Na;
    Na = Symbol.for("react.module.reference");
    function g(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === C || c === j || He || c === d || c === _ || c === te || Ee || c === ne || Et || et || kn || typeof c == "object" && c !== null && (c.$$typeof === V || c.$$typeof === W || c.$$typeof === P || c.$$typeof === F || c.$$typeof === Y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Na || c.getModuleId !== void 0));
    }
    function k(c, y) {
      g(c) || ge("memo: The first argument must be a component. Instead received: %s", c === null ? "null" : typeof c);
      var D = {
        $$typeof: W,
        type: c,
        compare: y === void 0 ? null : y
      };
      {
        var w;
        Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return w;
          },
          set: function(B) {
            w = B, !c.name && !c.displayName && (c.displayName = B);
          }
        });
      }
      return D;
    }
    function H() {
      var c = me.current;
      return c === null && ge(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), c;
    }
    function oe(c) {
      var y = H();
      if (c._context !== void 0) {
        var D = c._context;
        D.Consumer === c ? ge("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : D.Provider === c && ge("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return y.useContext(c);
    }
    function De(c) {
      var y = H();
      return y.useState(c);
    }
    function Ue(c, y, D) {
      var w = H();
      return w.useReducer(c, y, D);
    }
    function ue(c) {
      var y = H();
      return y.useRef(c);
    }
    function Re(c, y) {
      var D = H();
      return D.useEffect(c, y);
    }
    function wt(c, y) {
      var D = H();
      return D.useInsertionEffect(c, y);
    }
    function tt(c, y) {
      var D = H();
      return D.useLayoutEffect(c, y);
    }
    function st(c, y) {
      var D = H();
      return D.useCallback(c, y);
    }
    function on(c, y) {
      var D = H();
      return D.useMemo(c, y);
    }
    function Vr(c, y, D) {
      var w = H();
      return w.useImperativeHandle(c, y, D);
    }
    function ir(c, y) {
      {
        var D = H();
        return D.useDebugValue(c, y);
      }
    }
    function Bt() {
      var c = H();
      return c.useTransition();
    }
    function Pn(c) {
      var y = H();
      return y.useDeferredValue(c);
    }
    function Te() {
      var c = H();
      return c.useId();
    }
    function la(c, y, D) {
      var w = H();
      return w.useSyncExternalStore(c, y, D);
    }
    var ka = 0, eu, tu, nu, ru, au, iu, ou;
    function Xl() {
    }
    Xl.__reactDisabledLog = !0;
    function gf() {
      {
        if (ka === 0) {
          eu = console.log, tu = console.info, nu = console.warn, ru = console.error, au = console.group, iu = console.groupCollapsed, ou = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: Xl,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        ka++;
      }
    }
    function uu() {
      {
        if (ka--, ka === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ht({}, c, {
              value: eu
            }),
            info: Ht({}, c, {
              value: tu
            }),
            warn: Ht({}, c, {
              value: nu
            }),
            error: Ht({}, c, {
              value: ru
            }),
            group: Ht({}, c, {
              value: au
            }),
            groupCollapsed: Ht({}, c, {
              value: iu
            }),
            groupEnd: Ht({}, c, {
              value: ou
            })
          });
        }
        ka < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yi = ht.ReactCurrentDispatcher, or;
    function za(c, y, D) {
      {
        if (or === void 0)
          try {
            throw Error();
          } catch (B) {
            var w = B.stack.trim().match(/\n( *(at )?)/);
            or = w && w[1] || "";
          }
        return `
` + or + c;
      }
    }
    var Fa = !1, Ki;
    {
      var lu = typeof WeakMap == "function" ? WeakMap : Map;
      Ki = new lu();
    }
    function Kl(c, y) {
      if (!c || Fa)
        return "";
      {
        var D = Ki.get(c);
        if (D !== void 0)
          return D;
      }
      var w;
      Fa = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = yi.current, yi.current = null, gf();
      try {
        if (y) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (je) {
              w = je;
            }
            Reflect.construct(c, [], Z);
          } else {
            try {
              Z.call();
            } catch (je) {
              w = je;
            }
            c.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            w = je;
          }
          c();
        }
      } catch (je) {
        if (je && w && typeof je.stack == "string") {
          for (var fe = je.stack.split(`
`), Oe = w.stack.split(`
`), qe = fe.length - 1, Ke = Oe.length - 1; qe >= 1 && Ke >= 0 && fe[qe] !== Oe[Ke]; )
            Ke--;
          for (; qe >= 1 && Ke >= 0; qe--, Ke--)
            if (fe[qe] !== Oe[Ke]) {
              if (qe !== 1 || Ke !== 1)
                do
                  if (qe--, Ke--, Ke < 0 || fe[qe] !== Oe[Ke]) {
                    var Je = `
` + fe[qe].replace(" at new ", " at ");
                    return c.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", c.displayName)), typeof c == "function" && Ki.set(c, Je), Je;
                  }
                while (qe >= 1 && Ke >= 0);
              break;
            }
        }
      } finally {
        Fa = !1, yi.current = se, uu(), Error.prepareStackTrace = B;
      }
      var ot = c ? c.displayName || c.name : "", dt = ot ? za(ot) : "";
      return typeof c == "function" && Ki.set(c, dt), dt;
    }
    function su(c, y, D) {
      return Kl(c, !1);
    }
    function bf(c) {
      var y = c.prototype;
      return !!(y && y.isReactComponent);
    }
    function Ha(c, y, D) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Kl(c, bf(c));
      if (typeof c == "string")
        return za(c);
      switch (c) {
        case _:
          return za("Suspense");
        case te:
          return za("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case Y:
            return su(c.render);
          case W:
            return Ha(c.type, y, D);
          case V: {
            var w = c, B = w._payload, se = w._init;
            try {
              return Ha(se(B), y, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Jl = {}, cu = ht.ReactDebugCurrentFrame;
    function Ji(c) {
      if (c) {
        var y = c._owner, D = Ha(c.type, c._source, y ? y.type : null);
        cu.setExtraStackFrame(D);
      } else
        cu.setExtraStackFrame(null);
    }
    function Zl(c, y, D, w, B) {
      {
        var se = Function.call.bind(br);
        for (var Z in c)
          if (se(c, Z)) {
            var fe = void 0;
            try {
              if (typeof c[Z] != "function") {
                var Oe = Error((w || "React class") + ": " + D + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              fe = c[Z](y, Z, w, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qe) {
              fe = qe;
            }
            fe && !(fe instanceof Error) && (Ji(B), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", D, Z, typeof fe), Ji(null)), fe instanceof Error && !(fe.message in Jl) && (Jl[fe.message] = !0, Ji(B), ge("Failed %s type: %s", D, fe.message), Ji(null));
          }
      }
    }
    function Ne(c) {
      if (c) {
        var y = c._owner, D = Ha(c.type, c._source, y ? y.type : null);
        Rn(D);
      } else
        Rn(null);
    }
    var fu;
    fu = !1;
    function du() {
      if (rt.current) {
        var c = Dn(rt.current.type);
        if (c)
          return `

Check the render method of \`` + c + "`.";
      }
      return "";
    }
    function ye(c) {
      if (c !== void 0) {
        var y = c.fileName.replace(/^.*[\\\/]/, ""), D = c.lineNumber;
        return `

Check your code at ` + y + ":" + D + ".";
      }
      return "";
    }
    function es(c) {
      return c != null ? ye(c.__source) : "";
    }
    var un = {};
    function gi(c) {
      var y = du();
      if (!y) {
        var D = typeof c == "string" ? c : c.displayName || c.name;
        D && (y = `

Check the top-level render call using <` + D + ">.");
      }
      return y;
    }
    function ja(c, y) {
      if (!(!c._store || c._store.validated || c.key != null)) {
        c._store.validated = !0;
        var D = gi(y);
        if (!un[D]) {
          un[D] = !0;
          var w = "";
          c && c._owner && c._owner !== rt.current && (w = " It was passed a child from " + Dn(c._owner.type) + "."), Ne(c), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, w), Ne(null);
        }
      }
    }
    function ts(c, y) {
      if (typeof c == "object") {
        if (Ct(c))
          for (var D = 0; D < c.length; D++) {
            var w = c[D];
            Ye(w) && ja(w, y);
          }
        else if (Ye(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var B = Se(c);
          if (typeof B == "function" && B !== c.entries)
            for (var se = B.call(c), Z; !(Z = se.next()).done; )
              Ye(Z.value) && ja(Z.value, y);
        }
      }
    }
    function Vt(c) {
      {
        var y = c.type;
        if (y == null || typeof y == "string")
          return;
        var D;
        if (typeof y == "function")
          D = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === Y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === W))
          D = y.propTypes;
        else
          return;
        if (D) {
          var w = Dn(y);
          Zl(D, c.props, "prop", w, c);
        } else if (y.PropTypes !== void 0 && !fu) {
          fu = !0;
          var B = Dn(y);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(c) {
      {
        for (var y = Object.keys(c.props), D = 0; D < y.length; D++) {
          var w = y[D];
          if (w !== "children" && w !== "key") {
            Ne(c), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Ne(null);
            break;
          }
        }
        c.ref !== null && (Ne(c), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function ns(c, y, D) {
      var w = g(c);
      if (!w) {
        var B = "";
        (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var se = es(y);
        se ? B += se : B += du();
        var Z;
        c === null ? Z = "null" : Ct(c) ? Z = "array" : c !== void 0 && c.$$typeof === m ? (Z = "<" + (Dn(c.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof c, ge("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, B);
      }
      var fe = re.apply(this, arguments);
      if (fe == null)
        return fe;
      if (w)
        for (var Oe = 2; Oe < arguments.length; Oe++)
          ts(arguments[Oe], c);
      return c === C ? ct(fe) : Vt(fe), fe;
    }
    var $n = !1;
    function _n(c) {
      var y = ns.bind(null, c);
      return y.type = c, $n || ($n = !0, mt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(y, "type", {
        enumerable: !1,
        get: function() {
          return mt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: c
          }), c;
        }
      }), y;
    }
    function Pr(c, y, D) {
      for (var w = $e.apply(this, arguments), B = 2; B < arguments.length; B++)
        ts(arguments[B], w.type);
      return Vt(w), w;
    }
    function Sf(c, y) {
      var D = lt.transition;
      lt.transition = {};
      var w = lt.transition;
      lt.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        c();
      } finally {
        if (lt.transition = D, D === null && w._updatedFibers) {
          var B = w._updatedFibers.size;
          B > 10 && mt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), w._updatedFibers.clear();
        }
      }
    }
    var Zi = !1, bi = null;
    function rs(c) {
      if (bi === null)
        try {
          var y = ("require" + Math.random()).slice(0, 7), D = s && s[y];
          bi = D.call(s, "timers").setImmediate;
        } catch {
          bi = function(B) {
            Zi === !1 && (Zi = !0, typeof MessageChannel > "u" && ge("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var se = new MessageChannel();
            se.port1.onmessage = B, se.port2.postMessage(void 0);
          };
        }
      return bi(c);
    }
    var Ba = 0, as = !1;
    function is(c) {
      {
        var y = Ba;
        Ba++, he.current === null && (he.current = []);
        var D = he.isBatchingLegacy, w;
        try {
          if (he.isBatchingLegacy = !0, w = c(), !D && he.didScheduleLegacyUpdate) {
            var B = he.current;
            B !== null && (he.didScheduleLegacyUpdate = !1, to(B));
          }
        } catch (ot) {
          throw sa(y), ot;
        } finally {
          he.isBatchingLegacy = D;
        }
        if (w !== null && typeof w == "object" && typeof w.then == "function") {
          var se = w, Z = !1, fe = {
            then: function(ot, dt) {
              Z = !0, se.then(function(je) {
                sa(y), Ba === 0 ? eo(je, ot, dt) : ot(je);
              }, function(je) {
                sa(y), dt(je);
              });
            }
          };
          return !as && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            Z || (as = !0, ge("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), fe;
        } else {
          var Oe = w;
          if (sa(y), Ba === 0) {
            var qe = he.current;
            qe !== null && (to(qe), he.current = null);
            var Ke = {
              then: function(ot, dt) {
                he.current === null ? (he.current = [], eo(Oe, ot, dt)) : ot(Oe);
              }
            };
            return Ke;
          } else {
            var Je = {
              then: function(ot, dt) {
                ot(Oe);
              }
            };
            return Je;
          }
        }
      }
    }
    function sa(c) {
      c !== Ba - 1 && ge("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ba = c;
    }
    function eo(c, y, D) {
      {
        var w = he.current;
        if (w !== null)
          try {
            to(w), rs(function() {
              w.length === 0 ? (he.current = null, y(c)) : eo(c, y, D);
            });
          } catch (B) {
            D(B);
          }
        else
          y(c);
      }
    }
    var Va = !1;
    function to(c) {
      if (!Va) {
        Va = !0;
        var y = 0;
        try {
          for (; y < c.length; y++) {
            var D = c[y];
            do
              D = D(!0);
            while (D !== null);
          }
          c.length = 0;
        } catch (w) {
          throw c = c.slice(y + 1), w;
        } finally {
          Va = !1;
        }
      }
    }
    var os = ns, us = Pr, ls = _n, ss = {
      map: Sr,
      forEach: Xi,
      count: vi,
      toArray: Zo,
      only: pi
    };
    f.Children = ss, f.Component = zn, f.Fragment = C, f.Profiler = j, f.PureComponent = Wt, f.StrictMode = d, f.Suspense = _, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, f.act = is, f.cloneElement = us, f.createContext = hi, f.createElement = os, f.createFactory = ls, f.createRef = Fn, f.forwardRef = mi, f.isValidElement = Ye, f.lazy = Br, f.memo = k, f.startTransition = Sf, f.unstable_act = is, f.useCallback = st, f.useContext = oe, f.useDebugValue = ir, f.useDeferredValue = Pn, f.useEffect = Re, f.useId = Te, f.useImperativeHandle = Vr, f.useInsertionEffect = wt, f.useLayoutEffect = tt, f.useMemo = on, f.useReducer = Ue, f.useRef = ue, f.useState = De, f.useSyncExternalStore = la, f.useTransition = Bt, f.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(vf, vf.exports);
var qw = vf.exports;
rE.exports = qw;
var aE = rE.exports;
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var s = aE, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), j = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), V = Symbol.iterator, ne = "@@iterator";
  function Qe(g) {
    if (g === null || typeof g != "object")
      return null;
    var k = V && g[V] || g[ne];
    return typeof k == "function" ? k : null;
  }
  var Pe = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function Se(g) {
    {
      for (var k = arguments.length, H = new Array(k > 1 ? k - 1 : 0), oe = 1; oe < k; oe++)
        H[oe - 1] = arguments[oe];
      me("error", g, H);
    }
  }
  function me(g, k, H) {
    {
      var oe = Pe.ReactDebugCurrentFrame, De = oe.getStackAddendum();
      De !== "" && (k += "%s", H = H.concat([De]));
      var Ue = H.map(function(ue) {
        return String(ue);
      });
      Ue.unshift("Warning: " + k), Function.prototype.apply.call(console[g], console, Ue);
    }
  }
  var lt = !1, he = !1, rt = !1, Me = !1, Cn = !1, Rn;
  Rn = Symbol.for("react.module.reference");
  function Et(g) {
    return !!(typeof g == "string" || typeof g == "function" || g === m || g === C || Cn || g === E || g === F || g === Y || Me || g === W || lt || he || rt || typeof g == "object" && g !== null && (g.$$typeof === te || g.$$typeof === _ || g.$$typeof === d || g.$$typeof === j || g.$$typeof === P || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    g.$$typeof === Rn || g.getModuleId !== void 0));
  }
  function et(g, k, H) {
    var oe = g.displayName;
    if (oe)
      return oe;
    var De = k.displayName || k.name || "";
    return De !== "" ? H + "(" + De + ")" : H;
  }
  function kn(g) {
    return g.displayName || "Context";
  }
  function Ee(g) {
    if (g == null)
      return null;
    if (typeof g.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case m:
        return "Fragment";
      case p:
        return "Portal";
      case C:
        return "Profiler";
      case E:
        return "StrictMode";
      case F:
        return "Suspense";
      case Y:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case j:
          var k = g;
          return kn(k) + ".Consumer";
        case d:
          var H = g;
          return kn(H._context) + ".Provider";
        case P:
          return et(g, g.render, "ForwardRef");
        case _:
          var oe = g.displayName || null;
          return oe !== null ? oe : Ee(g.type) || "Memo";
        case te: {
          var De = g, Ue = De._payload, ue = De._init;
          try {
            return Ee(ue(Ue));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var He = Object.assign, ht = 0, mt, ge, Gt, Fr, Zn, mr, Ht;
  function Tn() {
  }
  Tn.__reactDisabledLog = !0;
  function zn() {
    {
      if (ht === 0) {
        mt = console.log, ge = console.info, Gt = console.warn, Fr = console.error, Zn = console.group, mr = console.groupCollapsed, Ht = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: Tn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: g,
          log: g,
          warn: g,
          error: g,
          group: g,
          groupCollapsed: g,
          groupEnd: g
        });
      }
      ht++;
    }
  }
  function Hr() {
    {
      if (ht--, ht === 0) {
        var g = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: He({}, g, {
            value: mt
          }),
          info: He({}, g, {
            value: ge
          }),
          warn: He({}, g, {
            value: Gt
          }),
          error: He({}, g, {
            value: Fr
          }),
          group: He({}, g, {
            value: Zn
          }),
          groupCollapsed: He({}, g, {
            value: mr
          }),
          groupEnd: He({}, g, {
            value: Ht
          })
        });
      }
      ht < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var yr = Pe.ReactCurrentDispatcher, gr;
  function er(g, k, H) {
    {
      if (gr === void 0)
        try {
          throw Error();
        } catch (De) {
          var oe = De.stack.trim().match(/\n( *(at )?)/);
          gr = oe && oe[1] || "";
        }
      return `
` + gr + g;
    }
  }
  var Wt = !1, xn;
  {
    var Fn = typeof WeakMap == "function" ? WeakMap : Map;
    xn = new Fn();
  }
  function Hn(g, k) {
    if (!g || Wt)
      return "";
    {
      var H = xn.get(g);
      if (H !== void 0)
        return H;
    }
    var oe;
    Wt = !0;
    var De = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Ue;
    Ue = yr.current, yr.current = null, zn();
    try {
      if (k) {
        var ue = function() {
          throw Error();
        };
        if (Object.defineProperty(ue.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(ue, []);
          } catch (Bt) {
            oe = Bt;
          }
          Reflect.construct(g, [], ue);
        } else {
          try {
            ue.call();
          } catch (Bt) {
            oe = Bt;
          }
          g.call(ue.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Bt) {
          oe = Bt;
        }
        g();
      }
    } catch (Bt) {
      if (Bt && oe && typeof Bt.stack == "string") {
        for (var Re = Bt.stack.split(`
`), wt = oe.stack.split(`
`), tt = Re.length - 1, st = wt.length - 1; tt >= 1 && st >= 0 && Re[tt] !== wt[st]; )
          st--;
        for (; tt >= 1 && st >= 0; tt--, st--)
          if (Re[tt] !== wt[st]) {
            if (tt !== 1 || st !== 1)
              do
                if (tt--, st--, st < 0 || Re[tt] !== wt[st]) {
                  var on = `
` + Re[tt].replace(" at new ", " at ");
                  return g.displayName && on.includes("<anonymous>") && (on = on.replace("<anonymous>", g.displayName)), typeof g == "function" && xn.set(g, on), on;
                }
              while (tt >= 1 && st >= 0);
            break;
          }
      }
    } finally {
      Wt = !1, yr.current = Ue, Hr(), Error.prepareStackTrace = De;
    }
    var Vr = g ? g.displayName || g.name : "", ir = Vr ? er(Vr) : "";
    return typeof g == "function" && xn.set(g, ir), ir;
  }
  function Ct(g, k, H) {
    return Hn(g, !1);
  }
  function rn(g) {
    var k = g.prototype;
    return !!(k && k.isReactComponent);
  }
  function jt(g, k, H) {
    if (g == null)
      return "";
    if (typeof g == "function")
      return Hn(g, rn(g));
    if (typeof g == "string")
      return er(g);
    switch (g) {
      case F:
        return er("Suspense");
      case Y:
        return er("SuspenseList");
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case P:
          return Ct(g.render);
        case _:
          return jt(g.type, k, H);
        case te: {
          var oe = g, De = oe._payload, Ue = oe._init;
          try {
            return jt(Ue(De), k, H);
          } catch {
          }
        }
      }
    return "";
  }
  var Dt = Object.prototype.hasOwnProperty, Ot = {}, jn = Pe.ReactDebugCurrentFrame;
  function tr(g) {
    if (g) {
      var k = g._owner, H = jt(g.type, g._source, k ? k.type : null);
      jn.setExtraStackFrame(H);
    } else
      jn.setExtraStackFrame(null);
  }
  function Dn(g, k, H, oe, De) {
    {
      var Ue = Function.call.bind(Dt);
      for (var ue in g)
        if (Ue(g, ue)) {
          var Re = void 0;
          try {
            if (typeof g[ue] != "function") {
              var wt = Error((oe || "React class") + ": " + H + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw wt.name = "Invariant Violation", wt;
            }
            Re = g[ue](k, ue, oe, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (tt) {
            Re = tt;
          }
          Re && !(Re instanceof Error) && (tr(De), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", H, ue, typeof Re), tr(null)), Re instanceof Error && !(Re.message in Ot) && (Ot[Re.message] = !0, tr(De), Se("Failed %s type: %s", H, Re.message), tr(null));
        }
    }
  }
  var br = Array.isArray;
  function nr(g) {
    return br(g);
  }
  function pn(g) {
    {
      var k = typeof Symbol == "function" && Symbol.toStringTag, H = k && g[Symbol.toStringTag] || g.constructor.name || "Object";
      return H;
    }
  }
  function rr(g) {
    try {
      return an(g), !1;
    } catch {
      return !0;
    }
  }
  function an(g) {
    return "" + g;
  }
  function Bn(g) {
    if (rr(g))
      return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(g)), an(g);
  }
  var yt = Pe.ReactCurrentOwner, ar = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, aa, ia, q;
  q = {};
  function re(g) {
    if (Dt.call(g, "ref")) {
      var k = Object.getOwnPropertyDescriptor(g, "ref").get;
      if (k && k.isReactWarning)
        return !1;
    }
    return g.ref !== void 0;
  }
  function Ce(g) {
    if (Dt.call(g, "key")) {
      var k = Object.getOwnPropertyDescriptor(g, "key").get;
      if (k && k.isReactWarning)
        return !1;
    }
    return g.key !== void 0;
  }
  function $e(g, k) {
    if (typeof g.ref == "string" && yt.current && k && yt.current.stateNode !== k) {
      var H = Ee(yt.current.type);
      q[H] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(yt.current.type), g.ref), q[H] = !0);
    }
  }
  function Ye(g, k) {
    {
      var H = function() {
        aa || (aa = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
      };
      H.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: H,
        configurable: !0
      });
    }
  }
  function _t(g, k) {
    {
      var H = function() {
        ia || (ia = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
      };
      H.isReactWarning = !0, Object.defineProperty(g, "ref", {
        get: H,
        configurable: !0
      });
    }
  }
  var gt = function(g, k, H, oe, De, Ue, ue) {
    var Re = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: f,
      // Built-in properties that belong on the element
      type: g,
      key: k,
      ref: H,
      props: ue,
      // Record the component responsible for creating this element.
      _owner: Ue
    };
    return Re._store = {}, Object.defineProperty(Re._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(Re, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: oe
    }), Object.defineProperty(Re, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: De
    }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
  };
  function On(g, k, H, oe, De) {
    {
      var Ue, ue = {}, Re = null, wt = null;
      H !== void 0 && (Bn(H), Re = "" + H), Ce(k) && (Bn(k.key), Re = "" + k.key), re(k) && (wt = k.ref, $e(k, De));
      for (Ue in k)
        Dt.call(k, Ue) && !ar.hasOwnProperty(Ue) && (ue[Ue] = k[Ue]);
      if (g && g.defaultProps) {
        var tt = g.defaultProps;
        for (Ue in tt)
          ue[Ue] === void 0 && (ue[Ue] = tt[Ue]);
      }
      if (Re || wt) {
        var st = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
        Re && Ye(ue, st), wt && _t(ue, st);
      }
      return gt(g, Re, wt, De, oe, yt.current, ue);
    }
  }
  var Xe = Pe.ReactCurrentOwner, Vn = Pe.ReactDebugCurrentFrame;
  function at(g) {
    if (g) {
      var k = g._owner, H = jt(g.type, g._source, k ? k.type : null);
      Vn.setExtraStackFrame(H);
    } else
      Vn.setExtraStackFrame(null);
  }
  var it;
  it = !1;
  function jr(g) {
    return typeof g == "object" && g !== null && g.$$typeof === f;
  }
  function Sr() {
    {
      if (Xe.current) {
        var g = Ee(Xe.current.type);
        if (g)
          return `

Check the render method of \`` + g + "`.";
      }
      return "";
    }
  }
  function vi(g) {
    return "";
  }
  var Xi = {};
  function Zo(g) {
    {
      var k = Sr();
      if (!k) {
        var H = typeof g == "string" ? g : g.displayName || g.name;
        H && (k = `

Check the top-level render call using <` + H + ">.");
      }
      return k;
    }
  }
  function pi(g, k) {
    {
      if (!g._store || g._store.validated || g.key != null)
        return;
      g._store.validated = !0;
      var H = Zo(k);
      if (Xi[H])
        return;
      Xi[H] = !0;
      var oe = "";
      g && g._owner && g._owner !== Xe.current && (oe = " It was passed a child from " + Ee(g._owner.type) + "."), at(g), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, oe), at(null);
    }
  }
  function hi(g, k) {
    {
      if (typeof g != "object")
        return;
      if (nr(g))
        for (var H = 0; H < g.length; H++) {
          var oe = g[H];
          jr(oe) && pi(oe, k);
        }
      else if (jr(g))
        g._store && (g._store.validated = !0);
      else if (g) {
        var De = Qe(g);
        if (typeof De == "function" && De !== g.entries)
          for (var Ue = De.call(g), ue; !(ue = Ue.next()).done; )
            jr(ue.value) && pi(ue.value, k);
      }
    }
  }
  function oa(g) {
    {
      var k = g.type;
      if (k == null || typeof k == "string")
        return;
      var H;
      if (typeof k == "function")
        H = k.propTypes;
      else if (typeof k == "object" && (k.$$typeof === P || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      k.$$typeof === _))
        H = k.propTypes;
      else
        return;
      if (H) {
        var oe = Ee(k);
        Dn(H, g.props, "prop", oe, g);
      } else if (k.PropTypes !== void 0 && !it) {
        it = !0;
        var De = Ee(k);
        Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
      }
      typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ua(g) {
    {
      for (var k = Object.keys(g.props), H = 0; H < k.length; H++) {
        var oe = k[H];
        if (oe !== "children" && oe !== "key") {
          at(g), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), at(null);
          break;
        }
      }
      g.ref !== null && (at(g), Se("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
    }
  }
  var ua = {};
  function Er(g, k, H, oe, De, Ue) {
    {
      var ue = Et(g);
      if (!ue) {
        var Re = "";
        (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var wt = vi();
        wt ? Re += wt : Re += Sr();
        var tt;
        g === null ? tt = "null" : nr(g) ? tt = "array" : g !== void 0 && g.$$typeof === f ? (tt = "<" + (Ee(g.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof g, Se("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Re);
      }
      var st = On(g, k, H, De, Ue);
      if (st == null)
        return st;
      if (ue) {
        var on = k.children;
        if (on !== void 0)
          if (oe)
            if (nr(on)) {
              for (var Vr = 0; Vr < on.length; Vr++)
                hi(on[Vr], g);
              Object.freeze && Object.freeze(on);
            } else
              Se("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            hi(on, g);
      }
      if (Dt.call(k, "key")) {
        var ir = Ee(g), Bt = Object.keys(k).filter(function(la) {
          return la !== "key";
        }), Pn = Bt.length > 0 ? "{key: someKey, " + Bt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!ua[ir + Pn]) {
          var Te = Bt.length > 0 ? "{" + Bt.join(": ..., ") + ": ...}" : "{}";
          Se(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pn, ir, Te, ir), ua[ir + Pn] = !0;
        }
      }
      return g === m ? Ua(st) : oa(st), st;
    }
  }
  function Cr(g, k, H) {
    return Er(g, k, H, !0);
  }
  function Br(g, k, H) {
    return Er(g, k, H, !1);
  }
  var mi = Br, Na = Cr;
  cf.Fragment = m, cf.jsx = mi, cf.jsxs = Na;
})();
nE.exports = cf;
var pM = nE.exports, iE = { exports: {} }, Jn = {}, oE = { exports: {} }, uE = {};
(function(s) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = !1, p = !1, m = 5;
    function E(q, re) {
      var Ce = q.length;
      q.push(re), j(q, re, Ce);
    }
    function C(q) {
      return q.length === 0 ? null : q[0];
    }
    function d(q) {
      if (q.length === 0)
        return null;
      var re = q[0], Ce = q.pop();
      return Ce !== re && (q[0] = Ce, P(q, Ce, 0)), re;
    }
    function j(q, re, Ce) {
      for (var $e = Ce; $e > 0; ) {
        var Ye = $e - 1 >>> 1, _t = q[Ye];
        if (F(_t, re) > 0)
          q[Ye] = re, q[$e] = _t, $e = Ye;
        else
          return;
      }
    }
    function P(q, re, Ce) {
      for (var $e = Ce, Ye = q.length, _t = Ye >>> 1; $e < _t; ) {
        var gt = ($e + 1) * 2 - 1, On = q[gt], Xe = gt + 1, Vn = q[Xe];
        if (F(On, re) < 0)
          Xe < Ye && F(Vn, On) < 0 ? (q[$e] = Vn, q[Xe] = re, $e = Xe) : (q[$e] = On, q[gt] = re, $e = gt);
        else if (Xe < Ye && F(Vn, re) < 0)
          q[$e] = Vn, q[Xe] = re, $e = Xe;
        else
          return;
      }
    }
    function F(q, re) {
      var Ce = q.sortIndex - re.sortIndex;
      return Ce !== 0 ? Ce : q.id - re.id;
    }
    var Y = 1, _ = 2, te = 3, W = 4, V = 5;
    function ne(q, re) {
    }
    var Qe = typeof performance == "object" && typeof performance.now == "function";
    if (Qe) {
      var Pe = performance;
      s.unstable_now = function() {
        return Pe.now();
      };
    } else {
      var Se = Date, me = Se.now();
      s.unstable_now = function() {
        return Se.now() - me;
      };
    }
    var lt = 1073741823, he = -1, rt = 250, Me = 5e3, Cn = 1e4, Rn = lt, Et = [], et = [], kn = 1, Ee = null, He = te, ht = !1, mt = !1, ge = !1, Gt = typeof setTimeout == "function" ? setTimeout : null, Fr = typeof clearTimeout == "function" ? clearTimeout : null, Zn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function mr(q) {
      for (var re = C(et); re !== null; ) {
        if (re.callback === null)
          d(et);
        else if (re.startTime <= q)
          d(et), re.sortIndex = re.expirationTime, E(Et, re);
        else
          return;
        re = C(et);
      }
    }
    function Ht(q) {
      if (ge = !1, mr(q), !mt)
        if (C(Et) !== null)
          mt = !0, Bn(Tn);
        else {
          var re = C(et);
          re !== null && yt(Ht, re.startTime - q);
        }
    }
    function Tn(q, re) {
      mt = !1, ge && (ge = !1, ar()), ht = !0;
      var Ce = He;
      try {
        var $e;
        if (!p)
          return zn(q, re);
      } finally {
        Ee = null, He = Ce, ht = !1;
      }
    }
    function zn(q, re) {
      var Ce = re;
      for (mr(Ce), Ee = C(Et); Ee !== null && !f && !(Ee.expirationTime > Ce && (!q || tr())); ) {
        var $e = Ee.callback;
        if (typeof $e == "function") {
          Ee.callback = null, He = Ee.priorityLevel;
          var Ye = Ee.expirationTime <= Ce, _t = $e(Ye);
          Ce = s.unstable_now(), typeof _t == "function" ? Ee.callback = _t : Ee === C(Et) && d(Et), mr(Ce);
        } else
          d(Et);
        Ee = C(Et);
      }
      if (Ee !== null)
        return !0;
      var gt = C(et);
      return gt !== null && yt(Ht, gt.startTime - Ce), !1;
    }
    function Hr(q, re) {
      switch (q) {
        case Y:
        case _:
        case te:
        case W:
        case V:
          break;
        default:
          q = te;
      }
      var Ce = He;
      He = q;
      try {
        return re();
      } finally {
        He = Ce;
      }
    }
    function yr(q) {
      var re;
      switch (He) {
        case Y:
        case _:
        case te:
          re = te;
          break;
        default:
          re = He;
          break;
      }
      var Ce = He;
      He = re;
      try {
        return q();
      } finally {
        He = Ce;
      }
    }
    function gr(q) {
      var re = He;
      return function() {
        var Ce = He;
        He = re;
        try {
          return q.apply(this, arguments);
        } finally {
          He = Ce;
        }
      };
    }
    function er(q, re, Ce) {
      var $e = s.unstable_now(), Ye;
      if (typeof Ce == "object" && Ce !== null) {
        var _t = Ce.delay;
        typeof _t == "number" && _t > 0 ? Ye = $e + _t : Ye = $e;
      } else
        Ye = $e;
      var gt;
      switch (q) {
        case Y:
          gt = he;
          break;
        case _:
          gt = rt;
          break;
        case V:
          gt = Rn;
          break;
        case W:
          gt = Cn;
          break;
        case te:
        default:
          gt = Me;
          break;
      }
      var On = Ye + gt, Xe = {
        id: kn++,
        callback: re,
        priorityLevel: q,
        startTime: Ye,
        expirationTime: On,
        sortIndex: -1
      };
      return Ye > $e ? (Xe.sortIndex = Ye, E(et, Xe), C(Et) === null && Xe === C(et) && (ge ? ar() : ge = !0, yt(Ht, Ye - $e))) : (Xe.sortIndex = On, E(Et, Xe), !mt && !ht && (mt = !0, Bn(Tn))), Xe;
    }
    function Wt() {
    }
    function xn() {
      !mt && !ht && (mt = !0, Bn(Tn));
    }
    function Fn() {
      return C(Et);
    }
    function Hn(q) {
      q.callback = null;
    }
    function Ct() {
      return He;
    }
    var rn = !1, jt = null, Dt = -1, Ot = m, jn = -1;
    function tr() {
      var q = s.unstable_now() - jn;
      return !(q < Ot);
    }
    function Dn() {
    }
    function br(q) {
      if (q < 0 || q > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      q > 0 ? Ot = Math.floor(1e3 / q) : Ot = m;
    }
    var nr = function() {
      if (jt !== null) {
        var q = s.unstable_now();
        jn = q;
        var re = !0, Ce = !0;
        try {
          Ce = jt(re, q);
        } finally {
          Ce ? pn() : (rn = !1, jt = null);
        }
      } else
        rn = !1;
    }, pn;
    if (typeof Zn == "function")
      pn = function() {
        Zn(nr);
      };
    else if (typeof MessageChannel < "u") {
      var rr = new MessageChannel(), an = rr.port2;
      rr.port1.onmessage = nr, pn = function() {
        an.postMessage(null);
      };
    } else
      pn = function() {
        Gt(nr, 0);
      };
    function Bn(q) {
      jt = q, rn || (rn = !0, pn());
    }
    function yt(q, re) {
      Dt = Gt(function() {
        q(s.unstable_now());
      }, re);
    }
    function ar() {
      Fr(Dt), Dt = -1;
    }
    var aa = Dn, ia = null;
    s.unstable_IdlePriority = V, s.unstable_ImmediatePriority = Y, s.unstable_LowPriority = W, s.unstable_NormalPriority = te, s.unstable_Profiling = ia, s.unstable_UserBlockingPriority = _, s.unstable_cancelCallback = Hn, s.unstable_continueExecution = xn, s.unstable_forceFrameRate = br, s.unstable_getCurrentPriorityLevel = Ct, s.unstable_getFirstCallbackNode = Fn, s.unstable_next = yr, s.unstable_pauseExecution = Wt, s.unstable_requestPaint = aa, s.unstable_runWithPriority = Hr, s.unstable_scheduleCallback = er, s.unstable_shouldYield = tr, s.unstable_wrapCallback = gr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(uE);
oE.exports = uE;
var Gw = oE.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var s = aE, f = Gw, p = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
  function E(e) {
    m = e;
  }
  function C(e) {
    if (!m) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      j("warn", e, n);
    }
  }
  function d(e) {
    if (!m) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      j("error", e, n);
    }
  }
  function j(e, t, n) {
    {
      var r = p.ReactDebugCurrentFrame, a = r.getStackAddendum();
      a !== "" && (t += "%s", n = n.concat([a]));
      var i = n.map(function(o) {
        return String(o);
      });
      i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
    }
  }
  var P = 0, F = 1, Y = 2, _ = 3, te = 4, W = 5, V = 6, ne = 7, Qe = 8, Pe = 9, Se = 10, me = 11, lt = 12, he = 13, rt = 14, Me = 15, Cn = 16, Rn = 17, Et = 18, et = 19, kn = 21, Ee = 22, He = 23, ht = 24, mt = 25, ge = !0, Gt = !1, Fr = !1, Zn = !1, mr = !1, Ht = !0, Tn = !1, zn = !0, Hr = !0, yr = !0, gr = !0, er = /* @__PURE__ */ new Set(), Wt = {}, xn = {};
  function Fn(e, t) {
    Hn(e, t), Hn(e + "Capture", t);
  }
  function Hn(e, t) {
    Wt[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Wt[e] = t;
    {
      var n = e.toLowerCase();
      xn[n] = e, e === "onDoubleClick" && (xn.ondblclick = e);
    }
    for (var r = 0; r < t.length; r++)
      er.add(t[r]);
  }
  var Ct = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rn = Object.prototype.hasOwnProperty;
  function jt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Dt(e) {
    try {
      return Ot(e), !1;
    } catch {
      return !0;
    }
  }
  function Ot(e) {
    return "" + e;
  }
  function jn(e, t) {
    if (Dt(e))
      return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ot(e);
  }
  function tr(e) {
    if (Dt(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), Ot(e);
  }
  function Dn(e, t) {
    if (Dt(e))
      return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ot(e);
  }
  function br(e, t) {
    if (Dt(e))
      return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), Ot(e);
  }
  function nr(e) {
    if (Dt(e))
      return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), Ot(e);
  }
  function pn(e) {
    if (Dt(e))
      return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jt(e)), Ot(e);
  }
  var rr = 0, an = 1, Bn = 2, yt = 3, ar = 4, aa = 5, ia = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", re = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ce = new RegExp("^[" + q + "][" + re + "]*$"), $e = {}, Ye = {};
  function _t(e) {
    return rn.call(Ye, e) ? !0 : rn.call($e, e) ? !1 : Ce.test(e) ? (Ye[e] = !0, !0) : ($e[e] = !0, d("Invalid attribute name: `%s`", e), !1);
  }
  function gt(e, t, n) {
    return t !== null ? t.type === rr : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function On(e, t, n, r) {
    if (n !== null && n.type === rr)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (r)
          return !1;
        if (n !== null)
          return !n.acceptsBooleans;
        var a = e.toLowerCase().slice(0, 5);
        return a !== "data-" && a !== "aria-";
      }
      default:
        return !1;
    }
  }
  function Xe(e, t, n, r) {
    if (t === null || typeof t > "u" || On(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case yt:
          return !t;
        case ar:
          return t === !1;
        case aa:
          return isNaN(t);
        case ia:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function Vn(e) {
    return it.hasOwnProperty(e) ? it[e] : null;
  }
  function at(e, t, n, r, a, i, o) {
    this.acceptsBooleans = t === Bn || t === yt || t === ar, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var it = {}, jr = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  jr.forEach(function(e) {
    it[e] = new at(
      e,
      rr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], n = e[1];
    it[t] = new at(
      t,
      an,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    it[e] = new at(
      e,
      Bn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    it[e] = new at(
      e,
      Bn,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(e) {
    it[e] = new at(
      e,
      yt,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    it[e] = new at(
      e,
      yt,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    it[e] = new at(
      e,
      ar,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    it[e] = new at(
      e,
      ia,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(e) {
    it[e] = new at(
      e,
      aa,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Sr = /[\-\:]([a-z])/g, vi = function(e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Sr, vi);
    it[t] = new at(
      t,
      an,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Sr, vi);
    it[t] = new at(
      t,
      an,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Sr, vi);
    it[t] = new at(
      t,
      an,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    it[e] = new at(
      e,
      an,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Xi = "xlinkHref";
  it[Xi] = new at(
    "xlinkHref",
    an,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    it[e] = new at(
      e,
      an,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var Zo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, pi = !1;
  function hi(e) {
    !pi && Zo.test(e) && (pi = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function oa(e, t, n, r) {
    if (r.mustUseProperty) {
      var a = r.propertyName;
      return e[a];
    } else {
      jn(n, t), r.sanitizeURL && hi("" + n);
      var i = r.attributeName, o = null;
      if (r.type === ar) {
        if (e.hasAttribute(i)) {
          var u = e.getAttribute(i);
          return u === "" ? !0 : Xe(t, n, r, !1) ? u : u === "" + n ? n : u;
        }
      } else if (e.hasAttribute(i)) {
        if (Xe(t, n, r, !1))
          return e.getAttribute(i);
        if (r.type === yt)
          return n;
        o = e.getAttribute(i);
      }
      return Xe(t, n, r, !1) ? o === null ? n : o : o === "" + n ? n : o;
    }
  }
  function Ua(e, t, n, r) {
    {
      if (!_t(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var a = e.getAttribute(t);
      return jn(n, t), a === "" + n ? n : a;
    }
  }
  function ua(e, t, n, r) {
    var a = Vn(t);
    if (!gt(t, a, r)) {
      if (Xe(t, n, a, r) && (n = null), r || a === null) {
        if (_t(t)) {
          var i = t;
          n === null ? e.removeAttribute(i) : (jn(n, t), e.setAttribute(i, "" + n));
        }
        return;
      }
      var o = a.mustUseProperty;
      if (o) {
        var u = a.propertyName;
        if (n === null) {
          var l = a.type;
          e[u] = l === yt ? !1 : "";
        } else
          e[u] = n;
        return;
      }
      var v = a.attributeName, h = a.attributeNamespace;
      if (n === null)
        e.removeAttribute(v);
      else {
        var S = a.type, b;
        S === yt || S === ar && n === !0 ? b = "" : (jn(n, v), b = "" + n, a.sanitizeURL && hi(b.toString())), h ? e.setAttributeNS(h, v, b) : e.setAttribute(v, b);
      }
    }
  }
  var Er = Symbol.for("react.element"), Cr = Symbol.for("react.portal"), Br = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"), Na = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), k = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Re = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), tt = Symbol.for("react.offscreen"), st = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Vr = Symbol.for("react.tracing_marker"), ir = Symbol.iterator, Bt = "@@iterator";
  function Pn(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = ir && e[ir] || e[Bt];
    return typeof t == "function" ? t : null;
  }
  var Te = Object.assign, la = 0, ka, eu, tu, nu, ru, au, iu;
  function ou() {
  }
  ou.__reactDisabledLog = !0;
  function Xl() {
    {
      if (la === 0) {
        ka = console.log, eu = console.info, tu = console.warn, nu = console.error, ru = console.group, au = console.groupCollapsed, iu = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: ou,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      la++;
    }
  }
  function gf() {
    {
      if (la--, la === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Te({}, e, {
            value: ka
          }),
          info: Te({}, e, {
            value: eu
          }),
          warn: Te({}, e, {
            value: tu
          }),
          error: Te({}, e, {
            value: nu
          }),
          group: Te({}, e, {
            value: ru
          }),
          groupCollapsed: Te({}, e, {
            value: au
          }),
          groupEnd: Te({}, e, {
            value: iu
          })
        });
      }
      la < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var uu = p.ReactCurrentDispatcher, yi;
  function or(e, t, n) {
    {
      if (yi === void 0)
        try {
          throw Error();
        } catch (a) {
          var r = a.stack.trim().match(/\n( *(at )?)/);
          yi = r && r[1] || "";
        }
      return `
` + yi + e;
    }
  }
  var za = !1, Fa;
  {
    var Ki = typeof WeakMap == "function" ? WeakMap : Map;
    Fa = new Ki();
  }
  function lu(e, t) {
    if (!e || za)
      return "";
    {
      var n = Fa.get(e);
      if (n !== void 0)
        return n;
    }
    var r;
    za = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var i;
    i = uu.current, uu.current = null, Xl();
    try {
      if (t) {
        var o = function() {
          throw Error();
        };
        if (Object.defineProperty(o.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(o, []);
          } catch (O) {
            r = O;
          }
          Reflect.construct(e, [], o);
        } else {
          try {
            o.call();
          } catch (O) {
            r = O;
          }
          e.call(o.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (O) {
          r = O;
        }
        e();
      }
    } catch (O) {
      if (O && r && typeof O.stack == "string") {
        for (var u = O.stack.split(`
`), l = r.stack.split(`
`), v = u.length - 1, h = l.length - 1; v >= 1 && h >= 0 && u[v] !== l[h]; )
          h--;
        for (; v >= 1 && h >= 0; v--, h--)
          if (u[v] !== l[h]) {
            if (v !== 1 || h !== 1)
              do
                if (v--, h--, h < 0 || u[v] !== l[h]) {
                  var S = `
` + u[v].replace(" at new ", " at ");
                  return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && Fa.set(e, S), S;
                }
              while (v >= 1 && h >= 0);
            break;
          }
      }
    } finally {
      za = !1, uu.current = i, gf(), Error.prepareStackTrace = a;
    }
    var b = e ? e.displayName || e.name : "", x = b ? or(b) : "";
    return typeof e == "function" && Fa.set(e, x), x;
  }
  function Kl(e, t, n) {
    return lu(e, !0);
  }
  function su(e, t, n) {
    return lu(e, !1);
  }
  function bf(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ha(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return lu(e, bf(e));
    if (typeof e == "string")
      return or(e);
    switch (e) {
      case oe:
        return or("Suspense");
      case De:
        return or("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return su(e.render);
        case Ue:
          return Ha(e.type, t, n);
        case ue: {
          var r = e, a = r._payload, i = r._init;
          try {
            return Ha(i(a), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function Jl(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case W:
        return or(e.type);
      case Cn:
        return or("Lazy");
      case he:
        return or("Suspense");
      case et:
        return or("SuspenseList");
      case P:
      case Y:
      case Me:
        return su(e.type);
      case me:
        return su(e.type.render);
      case F:
        return Kl(e.type);
      default:
        return "";
    }
  }
  function cu(e) {
    try {
      var t = "", n = e;
      do
        t += Jl(n), n = n.return;
      while (n);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  function Ji(e, t, n) {
    var r = e.displayName;
    if (r)
      return r;
    var a = t.displayName || t.name || "";
    return a !== "" ? n + "(" + a + ")" : n;
  }
  function Zl(e) {
    return e.displayName || "Context";
  }
  function Ne(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Br:
        return "Fragment";
      case Cr:
        return "Portal";
      case Na:
        return "Profiler";
      case mi:
        return "StrictMode";
      case oe:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case k:
          var t = e;
          return Zl(t) + ".Consumer";
        case g:
          var n = e;
          return Zl(n._context) + ".Provider";
        case H:
          return Ji(e, e.render, "ForwardRef");
        case Ue:
          var r = e.displayName || null;
          return r !== null ? r : Ne(e.type) || "Memo";
        case ue: {
          var a = e, i = a._payload, o = a._init;
          try {
            return Ne(o(i));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function fu(e, t, n) {
    var r = t.displayName || t.name || "";
    return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
  }
  function du(e) {
    return e.displayName || "Context";
  }
  function ye(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case ht:
        return "Cache";
      case Pe:
        var r = n;
        return du(r) + ".Consumer";
      case Se:
        var a = n;
        return du(a._context) + ".Provider";
      case Et:
        return "DehydratedFragment";
      case me:
        return fu(n, n.render, "ForwardRef");
      case ne:
        return "Fragment";
      case W:
        return n;
      case te:
        return "Portal";
      case _:
        return "Root";
      case V:
        return "Text";
      case Cn:
        return Ne(n);
      case Qe:
        return n === mi ? "StrictMode" : "Mode";
      case Ee:
        return "Offscreen";
      case lt:
        return "Profiler";
      case kn:
        return "Scope";
      case he:
        return "Suspense";
      case et:
        return "SuspenseList";
      case mt:
        return "TracingMarker";
      case F:
      case P:
      case Rn:
      case Y:
      case rt:
      case Me:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var es = p.ReactDebugCurrentFrame, un = null, gi = !1;
  function ja() {
    {
      if (un === null)
        return null;
      var e = un._debugOwner;
      if (e !== null && typeof e < "u")
        return ye(e);
    }
    return null;
  }
  function ts() {
    return un === null ? "" : cu(un);
  }
  function Vt() {
    es.getCurrentStack = null, un = null, gi = !1;
  }
  function ct(e) {
    es.getCurrentStack = e === null ? null : ts, un = e, gi = !1;
  }
  function ns() {
    return un;
  }
  function $n(e) {
    gi = e;
  }
  function _n(e) {
    return "" + e;
  }
  function Pr(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return pn(e), e;
      default:
        return "";
    }
  }
  var Sf = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function Zi(e, t) {
    Sf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function bi(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rs(e) {
    return e._valueTracker;
  }
  function Ba(e) {
    e._valueTracker = null;
  }
  function as(e) {
    var t = "";
    return e && (bi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function is(e) {
    var t = bi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    pn(e[t]);
    var r = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var a = n.get, i = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(u) {
          pn(u), r = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var o = {
        getValue: function() {
          return r;
        },
        setValue: function(u) {
          pn(u), r = "" + u;
        },
        stopTracking: function() {
          Ba(e), delete e[t];
        }
      };
      return o;
    }
  }
  function sa(e) {
    rs(e) || (e._valueTracker = is(e));
  }
  function eo(e) {
    if (!e)
      return !1;
    var t = rs(e);
    if (!t)
      return !0;
    var n = t.getValue(), r = as(e);
    return r !== n ? (t.setValue(r), !0) : !1;
  }
  function Va(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var to = !1, os = !1, us = !1, ls = !1;
  function ss(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function c(e, t) {
    var n = e, r = t.checked, a = Te({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? n._wrapperState.initialChecked
    });
    return a;
  }
  function y(e, t) {
    Zi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !os && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ja() || "A component", t.type), os = !0), t.value !== void 0 && t.defaultValue !== void 0 && !to && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ja() || "A component", t.type), to = !0);
    var n = e, r = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Pr(t.value != null ? t.value : r),
      controlled: ss(t)
    };
  }
  function D(e, t) {
    var n = e, r = t.checked;
    r != null && ua(n, "checked", r, !1);
  }
  function w(e, t) {
    var n = e;
    {
      var r = ss(t);
      !n._wrapperState.controlled && r && !ls && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0), n._wrapperState.controlled && !r && !us && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), us = !0);
    }
    D(e, t);
    var a = Pr(t.value), i = t.type;
    if (a != null)
      i === "number" ? (a === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != a) && (n.value = _n(a)) : n.value !== _n(a) && (n.value = _n(a));
    else if (i === "submit" || i === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? fe(n, t.type, a) : t.hasOwnProperty("defaultValue") && fe(n, t.type, Pr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function B(e, t, n) {
    var r = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type, i = a === "submit" || a === "reset";
      if (i && (t.value === void 0 || t.value === null))
        return;
      var o = _n(r._wrapperState.initialValue);
      n || o !== r.value && (r.value = o), r.defaultValue = o;
    }
    var u = r.name;
    u !== "" && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !!r._wrapperState.initialChecked, u !== "" && (r.name = u);
  }
  function se(e, t) {
    var n = e;
    w(n, t), Z(n, t);
  }
  function Z(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var r = e; r.parentNode; )
        r = r.parentNode;
      jn(n, "name");
      for (var a = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < a.length; i++) {
        var o = a[i];
        if (!(o === e || o.form !== e.form)) {
          var u = Qs(o);
          if (!u)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          eo(o), w(o, u);
        }
      }
    }
  }
  function fe(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Va(e.ownerDocument) !== e) && (n == null ? e.defaultValue = _n(e._wrapperState.initialValue) : e.defaultValue !== _n(n) && (e.defaultValue = _n(n)));
  }
  var Oe = !1, qe = !1, Ke = !1;
  function Je(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? s.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || qe || (qe = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (Ke || (Ke = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Oe && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Oe = !0);
  }
  function ot(e, t) {
    t.value != null && e.setAttribute("value", _n(Pr(t.value)));
  }
  var dt = Array.isArray;
  function je(e) {
    return dt(e);
  }
  var Pa;
  Pa = !1;
  function no() {
    var e = ja();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var vu = ["value", "defaultValue"];
  function Ef(e) {
    {
      Zi("select", e);
      for (var t = 0; t < vu.length; t++) {
        var n = vu[t];
        if (e[n] != null) {
          var r = je(e[n]);
          e.multiple && !r ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, no()) : !e.multiple && r && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, no());
        }
      }
    }
  }
  function ca(e, t, n, r) {
    var a = e.options;
    if (t) {
      for (var i = n, o = {}, u = 0; u < i.length; u++)
        o["$" + i[u]] = !0;
      for (var l = 0; l < a.length; l++) {
        var v = o.hasOwnProperty("$" + a[l].value);
        a[l].selected !== v && (a[l].selected = v), v && r && (a[l].defaultSelected = !0);
      }
    } else {
      for (var h = _n(Pr(n)), S = null, b = 0; b < a.length; b++) {
        if (a[b].value === h) {
          a[b].selected = !0, r && (a[b].defaultSelected = !0);
          return;
        }
        S === null && !a[b].disabled && (S = a[b]);
      }
      S !== null && (S.selected = !0);
    }
  }
  function pu(e, t) {
    return Te({}, t, {
      value: void 0
    });
  }
  function hu(e, t) {
    var n = e;
    Ef(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Pa && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Pa = !0);
  }
  function Cf(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var r = t.value;
    r != null ? ca(n, !!t.multiple, r, !1) : t.defaultValue != null && ca(n, !!t.multiple, t.defaultValue, !0);
  }
  function wE(e, t) {
    var n = e, r = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var a = t.value;
    a != null ? ca(n, !!t.multiple, a, !1) : r !== !!t.multiple && (t.defaultValue != null ? ca(n, !!t.multiple, t.defaultValue, !0) : ca(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function AE(e, t) {
    var n = e, r = t.value;
    r != null && ca(n, !!t.multiple, r, !1);
  }
  var zh = !1;
  function Rf(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var r = Te({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: _n(n._wrapperState.initialValue)
    });
    return r;
  }
  function Fh(e, t) {
    var n = e;
    Zi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !zh && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ja() || "A component"), zh = !0);
    var r = t.value;
    if (r == null) {
      var a = t.children, i = t.defaultValue;
      if (a != null) {
        d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (i != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (je(a)) {
            if (a.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            a = a[0];
          }
          i = a;
        }
      }
      i == null && (i = ""), r = i;
    }
    n._wrapperState = {
      initialValue: Pr(r)
    };
  }
  function Hh(e, t) {
    var n = e, r = Pr(t.value), a = Pr(t.defaultValue);
    if (r != null) {
      var i = _n(r);
      i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
    }
    a != null && (n.defaultValue = _n(a));
  }
  function jh(e, t) {
    var n = e, r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ME(e, t) {
    Hh(e, t);
  }
  var fa = "http://www.w3.org/1999/xhtml", LE = "http://www.w3.org/1998/Math/MathML", Tf = "http://www.w3.org/2000/svg";
  function xf(e) {
    switch (e) {
      case "svg":
        return Tf;
      case "math":
        return LE;
      default:
        return fa;
    }
  }
  function Df(e, t) {
    return e == null || e === fa ? xf(t) : e === Tf && t === "foreignObject" ? fa : e;
  }
  var UE = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  }, cs, Bh = UE(function(e, t) {
    if (e.namespaceURI === Tf && !("innerHTML" in e)) {
      cs = cs || document.createElement("div"), cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = cs.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), wn = 1, da = 3, Rt = 8, va = 9, Of = 11, fs = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === da) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, NE = {
    animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
    background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
    backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
    border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
    borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
    borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
    borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
    borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
    borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
    borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
    borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
    borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
    borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
    borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
    borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
    columns: ["columnCount", "columnWidth"],
    flex: ["flexBasis", "flexGrow", "flexShrink"],
    flexFlow: ["flexDirection", "flexWrap"],
    font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
    fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
    gap: ["columnGap", "rowGap"],
    grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
    gridColumn: ["gridColumnEnd", "gridColumnStart"],
    gridColumnGap: ["columnGap"],
    gridGap: ["columnGap", "rowGap"],
    gridRow: ["gridRowEnd", "gridRowStart"],
    gridRowGap: ["rowGap"],
    gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marker: ["markerEnd", "markerMid", "markerStart"],
    mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
    maskPosition: ["maskPositionX", "maskPositionY"],
    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
    overflow: ["overflowX", "overflowY"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    placeContent: ["alignContent", "justifyContent"],
    placeItems: ["alignItems", "justifyItems"],
    placeSelf: ["alignSelf", "justifySelf"],
    textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
    textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
    transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
    wordWrap: ["overflowWrap"]
  }, mu = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function kE(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var zE = ["Webkit", "ms", "Moz", "O"];
  Object.keys(mu).forEach(function(e) {
    zE.forEach(function(t) {
      mu[kE(t, e)] = mu[e];
    });
  });
  function _f(e, t, n) {
    var r = t == null || typeof t == "boolean" || t === "";
    return r ? "" : !n && typeof t == "number" && t !== 0 && !(mu.hasOwnProperty(e) && mu[e]) ? t + "px" : (br(t, e), ("" + t).trim());
  }
  var FE = /([A-Z])/g, HE = /^ms-/;
  function jE(e) {
    return e.replace(FE, "-$1").toLowerCase().replace(HE, "-ms-");
  }
  var Vh = function() {
  };
  {
    var BE = /^(?:webkit|moz|o)[A-Z]/, VE = /^-ms-/, PE = /-(.)/g, Ph = /;\s*$/, ro = {}, wf = {}, $h = !1, Yh = !1, $E = function(e) {
      return e.replace(PE, function(t, n) {
        return n.toUpperCase();
      });
    }, YE = function(e) {
      ro.hasOwnProperty(e) && ro[e] || (ro[e] = !0, d(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        $E(e.replace(VE, "ms-"))
      ));
    }, qE = function(e) {
      ro.hasOwnProperty(e) && ro[e] || (ro[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, GE = function(e, t) {
      wf.hasOwnProperty(t) && wf[t] || (wf[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ph, "")));
    }, WE = function(e, t) {
      $h || ($h = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
    }, IE = function(e, t) {
      Yh || (Yh = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    Vh = function(e, t) {
      e.indexOf("-") > -1 ? YE(e) : BE.test(e) ? qE(e) : Ph.test(t) && GE(e, t), typeof t == "number" && (isNaN(t) ? WE(e, t) : isFinite(t) || IE(e, t));
    };
  }
  var QE = Vh;
  function XE(e) {
    {
      var t = "", n = "";
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var a = e[r];
          if (a != null) {
            var i = r.indexOf("--") === 0;
            t += n + (i ? r : jE(r)) + ":", t += _f(r, a, i), n = ";";
          }
        }
      return t || null;
    }
  }
  function qh(e, t) {
    var n = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var a = r.indexOf("--") === 0;
        a || QE(r, t[r]);
        var i = _f(r, t[r], a);
        r === "float" && (r = "cssFloat"), a ? n.setProperty(r, i) : n[r] = i;
      }
  }
  function KE(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function Gh(e) {
    var t = {};
    for (var n in e)
      for (var r = NE[n] || [n], a = 0; a < r.length; a++)
        t[r[a]] = n;
    return t;
  }
  function JE(e, t) {
    {
      if (!t)
        return;
      var n = Gh(e), r = Gh(t), a = {};
      for (var i in n) {
        var o = n[i], u = r[i];
        if (u && o !== u) {
          var l = o + "," + u;
          if (a[l])
            continue;
          a[l] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", KE(e[o]) ? "Removing" : "Updating", o, u);
        }
      }
    }
  }
  var ZE = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, eC = Te({
    menuitem: !0
  }, ZE), tC = "__html";
  function Af(e, t) {
    if (t) {
      if (eC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(tC in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Si(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ds = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, Wh = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, ao = {}, nC = new RegExp("^(aria)-[" + re + "]*$"), rC = new RegExp("^(aria)[A-Z][" + re + "]*$");
  function aC(e, t) {
    {
      if (rn.call(ao, t) && ao[t])
        return !0;
      if (rC.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), r = Wh.hasOwnProperty(n) ? n : null;
        if (r == null)
          return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ao[t] = !0, !0;
        if (t !== r)
          return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), ao[t] = !0, !0;
      }
      if (nC.test(t)) {
        var a = t.toLowerCase(), i = Wh.hasOwnProperty(a) ? a : null;
        if (i == null)
          return ao[t] = !0, !1;
        if (t !== i)
          return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), ao[t] = !0, !0;
      }
    }
    return !0;
  }
  function iC(e, t) {
    {
      var n = [];
      for (var r in t) {
        var a = aC(e, r);
        a || n.push(r);
      }
      var i = n.map(function(o) {
        return "`" + o + "`";
      }).join(", ");
      n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
    }
  }
  function oC(e, t) {
    Si(e, t) || iC(e, t);
  }
  var Ih = !1;
  function uC(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Ih && (Ih = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var Qh = function() {
  };
  {
    var hn = {}, Xh = /^on./, lC = /^on[^A-Z]/, sC = new RegExp("^(aria)-[" + re + "]*$"), cC = new RegExp("^(aria)[A-Z][" + re + "]*$");
    Qh = function(e, t, n, r) {
      if (rn.call(hn, t) && hn[t])
        return !0;
      var a = t.toLowerCase();
      if (a === "onfocusin" || a === "onfocusout")
        return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hn[t] = !0, !0;
      if (r != null) {
        var i = r.registrationNameDependencies, o = r.possibleRegistrationNames;
        if (i.hasOwnProperty(t))
          return !0;
        var u = o.hasOwnProperty(a) ? o[a] : null;
        if (u != null)
          return d("Invalid event handler property `%s`. Did you mean `%s`?", t, u), hn[t] = !0, !0;
        if (Xh.test(t))
          return d("Unknown event handler property `%s`. It will be ignored.", t), hn[t] = !0, !0;
      } else if (Xh.test(t))
        return lC.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hn[t] = !0, !0;
      if (sC.test(t) || cC.test(t))
        return !0;
      if (a === "innerhtml")
        return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hn[t] = !0, !0;
      if (a === "aria")
        return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hn[t] = !0, !0;
      if (a === "is" && n !== null && n !== void 0 && typeof n != "string")
        return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), hn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hn[t] = !0, !0;
      var l = Vn(t), v = l !== null && l.type === rr;
      if (ds.hasOwnProperty(a)) {
        var h = ds[a];
        if (h !== t)
          return d("Invalid DOM property `%s`. Did you mean `%s`?", t, h), hn[t] = !0, !0;
      } else if (!v && t !== a)
        return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, a), hn[t] = !0, !0;
      return typeof n == "boolean" && On(t, n, l, !1) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), hn[t] = !0, !0) : v ? !0 : On(t, n, l, !1) ? (hn[t] = !0, !1) : ((n === "false" || n === "true") && l !== null && l.type === yt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), hn[t] = !0), !0);
    };
  }
  var fC = function(e, t, n) {
    {
      var r = [];
      for (var a in t) {
        var i = Qh(e, a, t[a], n);
        i || r.push(a);
      }
      var o = r.map(function(u) {
        return "`" + u + "`";
      }).join(", ");
      r.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e) : r.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e);
    }
  };
  function dC(e, t, n) {
    Si(e, t) || fC(e, t, n);
  }
  var Kh = 1, Mf = 2, yu = 4, vC = Kh | Mf | yu, gu = null;
  function pC(e) {
    gu !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gu = e;
  }
  function hC() {
    gu === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gu = null;
  }
  function mC(e) {
    return e === gu;
  }
  function Lf(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === da ? t.parentNode : t;
  }
  var Uf = null, io = null, oo = null;
  function Jh(e) {
    var t = Xa(e);
    if (t) {
      if (typeof Uf != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var r = Qs(n);
        Uf(t.stateNode, t.type, r);
      }
    }
  }
  function yC(e) {
    Uf = e;
  }
  function Zh(e) {
    io ? oo ? oo.push(e) : oo = [e] : io = e;
  }
  function gC() {
    return io !== null || oo !== null;
  }
  function em() {
    if (io) {
      var e = io, t = oo;
      if (io = null, oo = null, Jh(e), t)
        for (var n = 0; n < t.length; n++)
          Jh(t[n]);
    }
  }
  var tm = function(e, t) {
    return e(t);
  }, nm = function() {
  }, Nf = !1;
  function bC() {
    var e = gC();
    e && (nm(), em());
  }
  function rm(e, t, n) {
    if (Nf)
      return e(t, n);
    Nf = !0;
    try {
      return tm(e, t, n);
    } finally {
      Nf = !1, bC();
    }
  }
  function SC(e, t, n) {
    tm = e, nm = n;
  }
  function EC(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function CC(e, t, n) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        return !!(n.disabled && EC(t));
      default:
        return !1;
    }
  }
  function bu(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Qs(n);
    if (r === null)
      return null;
    var a = r[t];
    if (CC(t, e.type, r))
      return null;
    if (a && typeof a != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type.");
    return a;
  }
  var kf = !1;
  if (Ct)
    try {
      var Su = {};
      Object.defineProperty(Su, "passive", {
        get: function() {
          kf = !0;
        }
      }), window.addEventListener("test", Su, Su), window.removeEventListener("test", Su, Su);
    } catch {
      kf = !1;
    }
  function am(e, t, n, r, a, i, o, u, l) {
    var v = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, v);
    } catch (h) {
      this.onError(h);
    }
  }
  var im = am;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var zf = document.createElement("react");
    im = function(t, n, r, a, i, o, u, l, v) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var h = document.createEvent("Event"), S = !1, b = !0, x = window.event, O = Object.getOwnPropertyDescriptor(window, "event");
      function A() {
        zf.removeEventListener(M, ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = x);
      }
      var G = Array.prototype.slice.call(arguments, 3);
      function ae() {
        S = !0, A(), n.apply(r, G), b = !1;
      }
      var ee, Ae = !1, xe = !1;
      function R(T) {
        if (ee = T.error, Ae = !0, ee === null && T.colno === 0 && T.lineno === 0 && (xe = !0), T.defaultPrevented && ee != null && typeof ee == "object")
          try {
            ee._suppressLogging = !0;
          } catch {
          }
      }
      var M = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", R), zf.addEventListener(M, ae, !1), h.initEvent(M, !1, !1), zf.dispatchEvent(h), O && Object.defineProperty(window, "event", O), S && b && (Ae ? xe && (ee = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ee = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ee)), window.removeEventListener("error", R), !S)
        return A(), am.apply(this, arguments);
    };
  }
  var RC = im, uo = !1, vs = null, ps = !1, Ff = null, TC = {
    onError: function(e) {
      uo = !0, vs = e;
    }
  };
  function Hf(e, t, n, r, a, i, o, u, l) {
    uo = !1, vs = null, RC.apply(TC, arguments);
  }
  function xC(e, t, n, r, a, i, o, u, l) {
    if (Hf.apply(this, arguments), uo) {
      var v = jf();
      ps || (ps = !0, Ff = v);
    }
  }
  function DC() {
    if (ps) {
      var e = Ff;
      throw ps = !1, Ff = null, e;
    }
  }
  function OC() {
    return uo;
  }
  function jf() {
    if (uo) {
      var e = vs;
      return uo = !1, vs = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function lo(e) {
    return e._reactInternals;
  }
  function _C(e) {
    return e._reactInternals !== void 0;
  }
  function wC(e, t) {
    e._reactInternals = t;
  }
  var le = (
    /*                      */
    0
  ), so = (
    /*                */
    1
  ), Tt = (
    /*                    */
    2
  ), Le = (
    /*                       */
    4
  ), Ei = (
    /*                */
    16
  ), Eu = (
    /*                 */
    32
  ), Bf = (
    /*                     */
    64
  ), Be = (
    /*                   */
    128
  ), pa = (
    /*            */
    256
  ), $a = (
    /*                          */
    512
  ), Ci = (
    /*                     */
    1024
  ), Rr = (
    /*                      */
    2048
  ), ha = (
    /*                    */
    4096
  ), Ri = (
    /*                   */
    8192
  ), hs = (
    /*             */
    16384
  ), AC = Rr | Le | Bf | $a | Ci | hs, MC = (
    /*               */
    32767
  ), Cu = (
    /*                   */
    32768
  ), mn = (
    /*                */
    65536
  ), Vf = (
    /* */
    131072
  ), om = (
    /*                       */
    1048576
  ), Pf = (
    /*                    */
    2097152
  ), Ti = (
    /*                 */
    4194304
  ), $f = (
    /*                */
    8388608
  ), ma = (
    /*               */
    16777216
  ), ms = (
    /*              */
    33554432
  ), Yf = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Le | Ci | 0
  ), qf = Tt | Le | Ei | Eu | $a | ha | Ri, Ru = Le | Bf | $a | Ri, co = Rr | Ei, ya = Ti | $f | Pf, LC = p.ReactCurrentOwner;
  function xi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var r = t;
      do
        t = r, (t.flags & (Tt | ha)) !== le && (n = t.return), r = t.return;
      while (r);
    }
    return t.tag === _ ? n : null;
  }
  function um(e) {
    if (e.tag === he) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function lm(e) {
    return e.tag === _ ? e.stateNode.containerInfo : null;
  }
  function UC(e) {
    return xi(e) === e;
  }
  function NC(e) {
    {
      var t = LC.current;
      if (t !== null && t.tag === F) {
        var n = t, r = n.stateNode;
        r._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ye(n) || "A component"), r._warnedAboutRefsInRender = !0;
      }
    }
    var a = lo(e);
    return a ? xi(a) === a : !1;
  }
  function sm(e) {
    if (xi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function cm(e) {
    var t = e.alternate;
    if (!t) {
      var n = xi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var r = e, a = t; ; ) {
      var i = r.return;
      if (i === null)
        break;
      var o = i.alternate;
      if (o === null) {
        var u = i.return;
        if (u !== null) {
          r = a = u;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (var l = i.child; l; ) {
          if (l === r)
            return sm(i), e;
          if (l === a)
            return sm(i), t;
          l = l.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (r.return !== a.return)
        r = i, a = o;
      else {
        for (var v = !1, h = i.child; h; ) {
          if (h === r) {
            v = !0, r = i, a = o;
            break;
          }
          if (h === a) {
            v = !0, a = i, r = o;
            break;
          }
          h = h.sibling;
        }
        if (!v) {
          for (h = o.child; h; ) {
            if (h === r) {
              v = !0, r = o, a = i;
              break;
            }
            if (h === a) {
              v = !0, a = o, r = i;
              break;
            }
            h = h.sibling;
          }
          if (!v)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (r.alternate !== a)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (r.tag !== _)
      throw new Error("Unable to find node on an unmounted component.");
    return r.stateNode.current === r ? e : t;
  }
  function fm(e) {
    var t = cm(e);
    return t !== null ? dm(t) : null;
  }
  function dm(e) {
    if (e.tag === W || e.tag === V)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = dm(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function kC(e) {
    var t = cm(e);
    return t !== null ? vm(t) : null;
  }
  function vm(e) {
    if (e.tag === W || e.tag === V)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== te) {
        var n = vm(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var pm = f.unstable_scheduleCallback, zC = f.unstable_cancelCallback, FC = f.unstable_shouldYield, HC = f.unstable_requestPaint, Pt = f.unstable_now, jC = f.unstable_getCurrentPriorityLevel, ys = f.unstable_ImmediatePriority, Gf = f.unstable_UserBlockingPriority, Di = f.unstable_NormalPriority, BC = f.unstable_LowPriority, Wf = f.unstable_IdlePriority, VC = f.unstable_yieldValue, PC = f.unstable_setDisableYieldValue, fo = null, ln = null, Q = null, $r = !1, Tr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function $C(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Hr && (e = Te({}, e, {
        getLaneLabelMap: QC,
        injectProfilingHooks: IC
      })), fo = t.inject(e), ln = t;
    } catch (n) {
      d("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function YC(e, t) {
    if (ln && typeof ln.onScheduleFiberRoot == "function")
      try {
        ln.onScheduleFiberRoot(fo, e, t);
      } catch (n) {
        $r || ($r = !0, d("React instrumentation encountered an error: %s", n));
      }
  }
  function qC(e, t) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Be) === Be;
        if (yr) {
          var r;
          switch (t) {
            case Gn:
              r = ys;
              break;
            case ba:
              r = Gf;
              break;
            case Sa:
              r = Di;
              break;
            case Ts:
              r = Wf;
              break;
            default:
              r = Di;
              break;
          }
          ln.onCommitFiberRoot(fo, e, r, n);
        }
      } catch (a) {
        $r || ($r = !0, d("React instrumentation encountered an error: %s", a));
      }
  }
  function GC(e) {
    if (ln && typeof ln.onPostCommitFiberRoot == "function")
      try {
        ln.onPostCommitFiberRoot(fo, e);
      } catch (t) {
        $r || ($r = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function WC(e) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
      try {
        ln.onCommitFiberUnmount(fo, e);
      } catch (t) {
        $r || ($r = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function $t(e) {
    if (typeof VC == "function" && (PC(e), E(e)), ln && typeof ln.setStrictMode == "function")
      try {
        ln.setStrictMode(fo, e);
      } catch (t) {
        $r || ($r = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function IC(e) {
    Q = e;
  }
  function QC() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < Qf; n++) {
        var r = hR(t);
        e.set(t, r), t *= 2;
      }
      return e;
    }
  }
  function XC(e) {
    Q !== null && typeof Q.markCommitStarted == "function" && Q.markCommitStarted(e);
  }
  function hm() {
    Q !== null && typeof Q.markCommitStopped == "function" && Q.markCommitStopped();
  }
  function Tu(e) {
    Q !== null && typeof Q.markComponentRenderStarted == "function" && Q.markComponentRenderStarted(e);
  }
  function vo() {
    Q !== null && typeof Q.markComponentRenderStopped == "function" && Q.markComponentRenderStopped();
  }
  function KC(e) {
    Q !== null && typeof Q.markComponentPassiveEffectMountStarted == "function" && Q.markComponentPassiveEffectMountStarted(e);
  }
  function JC() {
    Q !== null && typeof Q.markComponentPassiveEffectMountStopped == "function" && Q.markComponentPassiveEffectMountStopped();
  }
  function ZC(e) {
    Q !== null && typeof Q.markComponentPassiveEffectUnmountStarted == "function" && Q.markComponentPassiveEffectUnmountStarted(e);
  }
  function eR() {
    Q !== null && typeof Q.markComponentPassiveEffectUnmountStopped == "function" && Q.markComponentPassiveEffectUnmountStopped();
  }
  function tR(e) {
    Q !== null && typeof Q.markComponentLayoutEffectMountStarted == "function" && Q.markComponentLayoutEffectMountStarted(e);
  }
  function nR() {
    Q !== null && typeof Q.markComponentLayoutEffectMountStopped == "function" && Q.markComponentLayoutEffectMountStopped();
  }
  function mm(e) {
    Q !== null && typeof Q.markComponentLayoutEffectUnmountStarted == "function" && Q.markComponentLayoutEffectUnmountStarted(e);
  }
  function ym() {
    Q !== null && typeof Q.markComponentLayoutEffectUnmountStopped == "function" && Q.markComponentLayoutEffectUnmountStopped();
  }
  function rR(e, t, n) {
    Q !== null && typeof Q.markComponentErrored == "function" && Q.markComponentErrored(e, t, n);
  }
  function aR(e, t, n) {
    Q !== null && typeof Q.markComponentSuspended == "function" && Q.markComponentSuspended(e, t, n);
  }
  function iR(e) {
    Q !== null && typeof Q.markLayoutEffectsStarted == "function" && Q.markLayoutEffectsStarted(e);
  }
  function oR() {
    Q !== null && typeof Q.markLayoutEffectsStopped == "function" && Q.markLayoutEffectsStopped();
  }
  function uR(e) {
    Q !== null && typeof Q.markPassiveEffectsStarted == "function" && Q.markPassiveEffectsStarted(e);
  }
  function lR() {
    Q !== null && typeof Q.markPassiveEffectsStopped == "function" && Q.markPassiveEffectsStopped();
  }
  function gm(e) {
    Q !== null && typeof Q.markRenderStarted == "function" && Q.markRenderStarted(e);
  }
  function sR() {
    Q !== null && typeof Q.markRenderYielded == "function" && Q.markRenderYielded();
  }
  function bm() {
    Q !== null && typeof Q.markRenderStopped == "function" && Q.markRenderStopped();
  }
  function cR(e) {
    Q !== null && typeof Q.markRenderScheduled == "function" && Q.markRenderScheduled(e);
  }
  function fR(e, t) {
    Q !== null && typeof Q.markForceUpdateScheduled == "function" && Q.markForceUpdateScheduled(e, t);
  }
  function If(e, t) {
    Q !== null && typeof Q.markStateUpdateScheduled == "function" && Q.markStateUpdateScheduled(e, t);
  }
  var ie = (
    /*                         */
    0
  ), _e = (
    /*                 */
    1
  ), Ge = (
    /*                    */
    2
  ), vt = (
    /*               */
    8
  ), Yr = (
    /*              */
    16
  ), Sm = Math.clz32 ? Math.clz32 : pR, dR = Math.log, vR = Math.LN2;
  function pR(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (dR(t) / vR | 0) | 0;
  }
  var Qf = 31, N = (
    /*                        */
    0
  ), Yt = (
    /*                          */
    0
  ), de = (
    /*                        */
    1
  ), po = (
    /*    */
    2
  ), ga = (
    /*             */
    4
  ), Oi = (
    /*            */
    8
  ), qr = (
    /*                     */
    16
  ), xu = (
    /*                */
    32
  ), ho = (
    /*                       */
    4194240
  ), Du = (
    /*                        */
    64
  ), Xf = (
    /*                        */
    128
  ), Kf = (
    /*                        */
    256
  ), Jf = (
    /*                        */
    512
  ), Zf = (
    /*                        */
    1024
  ), ed = (
    /*                        */
    2048
  ), td = (
    /*                        */
    4096
  ), nd = (
    /*                        */
    8192
  ), rd = (
    /*                        */
    16384
  ), ad = (
    /*                       */
    32768
  ), id = (
    /*                       */
    65536
  ), od = (
    /*                       */
    131072
  ), ud = (
    /*                       */
    262144
  ), ld = (
    /*                       */
    524288
  ), sd = (
    /*                       */
    1048576
  ), cd = (
    /*                       */
    2097152
  ), gs = (
    /*                            */
    130023424
  ), mo = (
    /*                             */
    4194304
  ), fd = (
    /*                             */
    8388608
  ), dd = (
    /*                             */
    16777216
  ), vd = (
    /*                             */
    33554432
  ), pd = (
    /*                             */
    67108864
  ), Em = mo, Ou = (
    /*          */
    134217728
  ), Cm = (
    /*                          */
    268435455
  ), _u = (
    /*               */
    268435456
  ), _i = (
    /*                        */
    536870912
  ), Yn = (
    /*                   */
    1073741824
  );
  function hR(e) {
    {
      if (e & de)
        return "Sync";
      if (e & po)
        return "InputContinuousHydration";
      if (e & ga)
        return "InputContinuous";
      if (e & Oi)
        return "DefaultHydration";
      if (e & qr)
        return "Default";
      if (e & xu)
        return "TransitionHydration";
      if (e & ho)
        return "Transition";
      if (e & gs)
        return "Retry";
      if (e & Ou)
        return "SelectiveHydration";
      if (e & _u)
        return "IdleHydration";
      if (e & _i)
        return "Idle";
      if (e & Yn)
        return "Offscreen";
    }
  }
  var nt = -1, bs = Du, Ss = mo;
  function wu(e) {
    switch (wi(e)) {
      case de:
        return de;
      case po:
        return po;
      case ga:
        return ga;
      case Oi:
        return Oi;
      case qr:
        return qr;
      case xu:
        return xu;
      case Du:
      case Xf:
      case Kf:
      case Jf:
      case Zf:
      case ed:
      case td:
      case nd:
      case rd:
      case ad:
      case id:
      case od:
      case ud:
      case ld:
      case sd:
      case cd:
        return e & ho;
      case mo:
      case fd:
      case dd:
      case vd:
      case pd:
        return e & gs;
      case Ou:
        return Ou;
      case _u:
        return _u;
      case _i:
        return _i;
      case Yn:
        return Yn;
      default:
        return d("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function Es(e, t) {
    var n = e.pendingLanes;
    if (n === N)
      return N;
    var r = N, a = e.suspendedLanes, i = e.pingedLanes, o = n & Cm;
    if (o !== N) {
      var u = o & ~a;
      if (u !== N)
        r = wu(u);
      else {
        var l = o & i;
        l !== N && (r = wu(l));
      }
    } else {
      var v = n & ~a;
      v !== N ? r = wu(v) : i !== N && (r = wu(i));
    }
    if (r === N)
      return N;
    if (t !== N && t !== r && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & a) === N) {
      var h = wi(r), S = wi(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        h >= S || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        h === qr && (S & ho) !== N
      )
        return t;
    }
    (r & ga) !== N && (r |= n & qr);
    var b = e.entangledLanes;
    if (b !== N)
      for (var x = e.entanglements, O = r & b; O > 0; ) {
        var A = Ai(O), G = 1 << A;
        r |= x[A], O &= ~G;
      }
    return r;
  }
  function mR(e, t) {
    for (var n = e.eventTimes, r = nt; t > 0; ) {
      var a = Ai(t), i = 1 << a, o = n[a];
      o > r && (r = o), t &= ~i;
    }
    return r;
  }
  function yR(e, t) {
    switch (e) {
      case de:
      case po:
      case ga:
        return t + 250;
      case Oi:
      case qr:
      case xu:
      case Du:
      case Xf:
      case Kf:
      case Jf:
      case Zf:
      case ed:
      case td:
      case nd:
      case rd:
      case ad:
      case id:
      case od:
      case ud:
      case ld:
      case sd:
      case cd:
        return t + 5e3;
      case mo:
      case fd:
      case dd:
      case vd:
      case pd:
        return nt;
      case Ou:
      case _u:
      case _i:
      case Yn:
        return nt;
      default:
        return d("Should have found matching lanes. This is a bug in React."), nt;
    }
  }
  function gR(e, t) {
    for (var n = e.pendingLanes, r = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, o = n; o > 0; ) {
      var u = Ai(o), l = 1 << u, v = i[u];
      v === nt ? ((l & r) === N || (l & a) !== N) && (i[u] = yR(l, t)) : v <= t && (e.expiredLanes |= l), o &= ~l;
    }
  }
  function bR(e) {
    return wu(e.pendingLanes);
  }
  function hd(e) {
    var t = e.pendingLanes & ~Yn;
    return t !== N ? t : t & Yn ? Yn : N;
  }
  function SR(e) {
    return (e & de) !== N;
  }
  function md(e) {
    return (e & Cm) !== N;
  }
  function Rm(e) {
    return (e & gs) === e;
  }
  function ER(e) {
    var t = de | ga | qr;
    return (e & t) === N;
  }
  function CR(e) {
    return (e & ho) === e;
  }
  function Cs(e, t) {
    var n = po | ga | Oi | qr;
    return (t & n) !== N;
  }
  function RR(e, t) {
    return (t & e.expiredLanes) !== N;
  }
  function Tm(e) {
    return (e & ho) !== N;
  }
  function xm() {
    var e = bs;
    return bs <<= 1, (bs & ho) === N && (bs = Du), e;
  }
  function TR() {
    var e = Ss;
    return Ss <<= 1, (Ss & gs) === N && (Ss = mo), e;
  }
  function wi(e) {
    return e & -e;
  }
  function Au(e) {
    return wi(e);
  }
  function Ai(e) {
    return 31 - Sm(e);
  }
  function yd(e) {
    return Ai(e);
  }
  function qn(e, t) {
    return (e & t) !== N;
  }
  function yo(e, t) {
    return (e & t) === t;
  }
  function be(e, t) {
    return e | t;
  }
  function Rs(e, t) {
    return e & ~t;
  }
  function Dm(e, t) {
    return e & t;
  }
  function cM(e) {
    return e;
  }
  function xR(e, t) {
    return e !== Yt && e < t ? e : t;
  }
  function gd(e) {
    for (var t = [], n = 0; n < Qf; n++)
      t.push(e);
    return t;
  }
  function Mu(e, t, n) {
    e.pendingLanes |= t, t !== _i && (e.suspendedLanes = N, e.pingedLanes = N);
    var r = e.eventTimes, a = yd(t);
    r[a] = n;
  }
  function DR(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var a = Ai(r), i = 1 << a;
      n[a] = nt, r &= ~i;
    }
  }
  function Om(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function OR(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = N, e.pingedLanes = N, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var r = e.entanglements, a = e.eventTimes, i = e.expirationTimes, o = n; o > 0; ) {
      var u = Ai(o), l = 1 << u;
      r[u] = N, a[u] = nt, i[u] = nt, o &= ~l;
    }
  }
  function bd(e, t) {
    for (var n = e.entangledLanes |= t, r = e.entanglements, a = n; a; ) {
      var i = Ai(a), o = 1 << i;
      // Is this one of the newly entangled lanes?
      o & t | // Is this lane transitively entangled with the newly entangled lanes?
      r[i] & t && (r[i] |= t), a &= ~o;
    }
  }
  function _R(e, t) {
    var n = wi(t), r;
    switch (n) {
      case ga:
        r = po;
        break;
      case qr:
        r = Oi;
        break;
      case Du:
      case Xf:
      case Kf:
      case Jf:
      case Zf:
      case ed:
      case td:
      case nd:
      case rd:
      case ad:
      case id:
      case od:
      case ud:
      case ld:
      case sd:
      case cd:
      case mo:
      case fd:
      case dd:
      case vd:
      case pd:
        r = xu;
        break;
      case _i:
        r = _u;
        break;
      default:
        r = Yt;
        break;
    }
    return (r & (e.suspendedLanes | t)) !== Yt ? Yt : r;
  }
  function _m(e, t, n) {
    if (Tr)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var a = yd(n), i = 1 << a, o = r[a];
        o.add(t), n &= ~i;
      }
  }
  function wm(e, t) {
    if (Tr)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var a = yd(t), i = 1 << a, o = n[a];
        o.size > 0 && (o.forEach(function(u) {
          var l = u.alternate;
          (l === null || !r.has(l)) && r.add(u);
        }), o.clear()), t &= ~i;
      }
  }
  function Am(e, t) {
    return null;
  }
  var Gn = de, ba = ga, Sa = qr, Ts = _i, Lu = Yt;
  function xr() {
    return Lu;
  }
  function qt(e) {
    Lu = e;
  }
  function wR(e, t) {
    var n = Lu;
    try {
      return Lu = e, t();
    } finally {
      Lu = n;
    }
  }
  function AR(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function MR(e, t) {
    return e > t ? e : t;
  }
  function Sd(e, t) {
    return e !== 0 && e < t;
  }
  function Mm(e) {
    var t = wi(e);
    return Sd(Gn, t) ? Sd(ba, t) ? md(t) ? Sa : Ts : ba : Gn;
  }
  function xs(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var Lm;
  function LR(e) {
    Lm = e;
  }
  function UR(e) {
    Lm(e);
  }
  var Ed;
  function NR(e) {
    Ed = e;
  }
  var Um;
  function kR(e) {
    Um = e;
  }
  var Nm;
  function zR(e) {
    Nm = e;
  }
  var km;
  function FR(e) {
    km = e;
  }
  var Cd = !1, Ds = [], Ya = null, qa = null, Ga = null, Uu = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), Wa = [], HR = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function jR(e) {
    return HR.indexOf(e) > -1;
  }
  function BR(e, t, n, r, a) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [r]
    };
  }
  function zm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ya = null;
        break;
      case "dragenter":
      case "dragleave":
        qa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ga = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        Uu.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var r = t.pointerId;
        Nu.delete(r);
        break;
      }
    }
  }
  function ku(e, t, n, r, a, i) {
    if (e === null || e.nativeEvent !== i) {
      var o = BR(t, n, r, a, i);
      if (t !== null) {
        var u = Xa(t);
        u !== null && Ed(u);
      }
      return o;
    }
    e.eventSystemFlags |= r;
    var l = e.targetContainers;
    return a !== null && l.indexOf(a) === -1 && l.push(a), e;
  }
  function VR(e, t, n, r, a) {
    switch (t) {
      case "focusin": {
        var i = a;
        return Ya = ku(Ya, e, t, n, r, i), !0;
      }
      case "dragenter": {
        var o = a;
        return qa = ku(qa, e, t, n, r, o), !0;
      }
      case "mouseover": {
        var u = a;
        return Ga = ku(Ga, e, t, n, r, u), !0;
      }
      case "pointerover": {
        var l = a, v = l.pointerId;
        return Uu.set(v, ku(Uu.get(v) || null, e, t, n, r, l)), !0;
      }
      case "gotpointercapture": {
        var h = a, S = h.pointerId;
        return Nu.set(S, ku(Nu.get(S) || null, e, t, n, r, h)), !0;
      }
    }
    return !1;
  }
  function Fm(e) {
    var t = Ui(e.target);
    if (t !== null) {
      var n = xi(t);
      if (n !== null) {
        var r = n.tag;
        if (r === he) {
          var a = um(n);
          if (a !== null) {
            e.blockedOn = a, km(e.priority, function() {
              Um(n);
            });
            return;
          }
        } else if (r === _) {
          var i = n.stateNode;
          if (xs(i)) {
            e.blockedOn = lm(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function PR(e) {
    for (var t = Nm(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, r = 0; r < Wa.length && Sd(t, Wa[r].priority); r++)
      ;
    Wa.splice(r, 0, n), r === 0 && Fm(n);
  }
  function Os(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], r = xd(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (r === null) {
        var a = e.nativeEvent, i = new a.constructor(a.type, a);
        pC(i), a.target.dispatchEvent(i), hC();
      } else {
        var o = Xa(r);
        return o !== null && Ed(o), e.blockedOn = r, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Hm(e, t, n) {
    Os(e) && n.delete(t);
  }
  function $R() {
    Cd = !1, Ya !== null && Os(Ya) && (Ya = null), qa !== null && Os(qa) && (qa = null), Ga !== null && Os(Ga) && (Ga = null), Uu.forEach(Hm), Nu.forEach(Hm);
  }
  function zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Cd || (Cd = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, $R)));
  }
  function Fu(e) {
    if (Ds.length > 0) {
      zu(Ds[0], e);
      for (var t = 1; t < Ds.length; t++) {
        var n = Ds[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Ya !== null && zu(Ya, e), qa !== null && zu(qa, e), Ga !== null && zu(Ga, e);
    var r = function(u) {
      return zu(u, e);
    };
    Uu.forEach(r), Nu.forEach(r);
    for (var a = 0; a < Wa.length; a++) {
      var i = Wa[a];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; Wa.length > 0; ) {
      var o = Wa[0];
      if (o.blockedOn !== null)
        break;
      Fm(o), o.blockedOn === null && Wa.shift();
    }
  }
  var go = p.ReactCurrentBatchConfig, Rd = !0;
  function jm(e) {
    Rd = !!e;
  }
  function YR() {
    return Rd;
  }
  function qR(e, t, n) {
    var r = Bm(t), a;
    switch (r) {
      case Gn:
        a = GR;
        break;
      case ba:
        a = WR;
        break;
      case Sa:
      default:
        a = Td;
        break;
    }
    return a.bind(null, t, n, e);
  }
  function GR(e, t, n, r) {
    var a = xr(), i = go.transition;
    go.transition = null;
    try {
      qt(Gn), Td(e, t, n, r);
    } finally {
      qt(a), go.transition = i;
    }
  }
  function WR(e, t, n, r) {
    var a = xr(), i = go.transition;
    go.transition = null;
    try {
      qt(ba), Td(e, t, n, r);
    } finally {
      qt(a), go.transition = i;
    }
  }
  function Td(e, t, n, r) {
    Rd && IR(e, t, n, r);
  }
  function IR(e, t, n, r) {
    var a = xd(e, t, n, r);
    if (a === null) {
      jd(e, t, r, _s, n), zm(e, r);
      return;
    }
    if (VR(a, e, t, n, r)) {
      r.stopPropagation();
      return;
    }
    if (zm(e, r), t & yu && jR(e)) {
      for (; a !== null; ) {
        var i = Xa(a);
        i !== null && UR(i);
        var o = xd(e, t, n, r);
        if (o === null && jd(e, t, r, _s, n), o === a)
          break;
        a = o;
      }
      a !== null && r.stopPropagation();
      return;
    }
    jd(e, t, r, null, n);
  }
  var _s = null;
  function xd(e, t, n, r) {
    _s = null;
    var a = Lf(r), i = Ui(a);
    if (i !== null) {
      var o = xi(i);
      if (o === null)
        i = null;
      else {
        var u = o.tag;
        if (u === he) {
          var l = um(o);
          if (l !== null)
            return l;
          i = null;
        } else if (u === _) {
          var v = o.stateNode;
          if (xs(v))
            return lm(o);
          i = null;
        } else
          o !== i && (i = null);
      }
    }
    return _s = i, null;
  }
  function Bm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return Gn;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return ba;
      case "message": {
        var t = jC();
        switch (t) {
          case ys:
            return Gn;
          case Gf:
            return ba;
          case Di:
          case BC:
            return Sa;
          case Wf:
            return Ts;
          default:
            return Sa;
        }
      }
      default:
        return Sa;
    }
  }
  function QR(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function XR(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function KR(e, t, n, r) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: r
    }), n;
  }
  function JR(e, t, n, r) {
    return e.addEventListener(t, n, {
      passive: r
    }), n;
  }
  var Hu = null, Dd = null, ju = null;
  function ZR(e) {
    return Hu = e, Dd = Pm(), !0;
  }
  function eT() {
    Hu = null, Dd = null, ju = null;
  }
  function Vm() {
    if (ju)
      return ju;
    var e, t = Dd, n = t.length, r, a = Pm(), i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++)
      ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === a[i - r]; r++)
      ;
    var u = r > 1 ? 1 - r : void 0;
    return ju = a.slice(e, u), ju;
  }
  function Pm() {
    return "value" in Hu ? Hu.value : Hu.textContent;
  }
  function ws(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function As() {
    return !0;
  }
  function $m() {
    return !1;
  }
  function Wn(e) {
    function t(n, r, a, i, o) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e)
        if (e.hasOwnProperty(u)) {
          var l = e[u];
          l ? this[u] = l(i) : this[u] = i[u];
        }
      var v = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
      return v ? this.isDefaultPrevented = As : this.isDefaultPrevented = $m, this.isPropagationStopped = $m, this;
    }
    return Te(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = As);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = As);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: As
    }), t;
  }
  var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Od = Wn(bo), Bu = Te({}, bo, {
    view: 0,
    detail: 0
  }), tT = Wn(Bu), _d, wd, Vu;
  function nT(e) {
    e !== Vu && (Vu && e.type === "mousemove" ? (_d = e.screenX - Vu.screenX, wd = e.screenY - Vu.screenY) : (_d = 0, wd = 0), Vu = e);
  }
  var Ms = Te({}, Bu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Md,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (nT(e), _d);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : wd;
    }
  }), Ym = Wn(Ms), rT = Te({}, Ms, {
    dataTransfer: 0
  }), aT = Wn(rT), iT = Te({}, Bu, {
    relatedTarget: 0
  }), Ad = Wn(iT), oT = Te({}, bo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uT = Wn(oT), lT = Te({}, bo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sT = Wn(lT), cT = Te({}, bo, {
    data: 0
  }), qm = Wn(cT), fT = qm, dT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, vT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  function pT(e) {
    if (e.key) {
      var t = dT[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = ws(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? vT[e.keyCode] || "Unidentified" : "";
  }
  var hT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mT(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var r = hT[e];
    return r ? !!n[r] : !1;
  }
  function Md(e) {
    return mT;
  }
  var yT = Te({}, Bu, {
    key: pT,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Md,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? ws(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ws(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gT = Wn(yT), bT = Te({}, Ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gm = Wn(bT), ST = Te({}, Bu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Md
  }), ET = Wn(ST), CT = Te({}, bo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), RT = Wn(CT), TT = Te({}, Ms, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), xT = Wn(TT), DT = [9, 13, 27, 32], Wm = 229, Ld = Ct && "CompositionEvent" in window, Pu = null;
  Ct && "documentMode" in document && (Pu = document.documentMode);
  var OT = Ct && "TextEvent" in window && !Pu, Im = Ct && (!Ld || Pu && Pu > 8 && Pu <= 11), Qm = 32, Xm = String.fromCharCode(Qm);
  function _T() {
    Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var Km = !1;
  function wT(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function AT(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function MT(e, t) {
    return e === "keydown" && t.keyCode === Wm;
  }
  function Jm(e, t) {
    switch (e) {
      case "keyup":
        return DT.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== Wm;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zm(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function ey(e) {
    return e.locale === "ko";
  }
  var So = !1;
  function LT(e, t, n, r, a) {
    var i, o;
    if (Ld ? i = AT(t) : So ? Jm(t, r) && (i = "onCompositionEnd") : MT(t, r) && (i = "onCompositionStart"), !i)
      return null;
    Im && !ey(r) && (!So && i === "onCompositionStart" ? So = ZR(a) : i === "onCompositionEnd" && So && (o = Vm()));
    var u = zs(n, i);
    if (u.length > 0) {
      var l = new qm(i, t, null, r, a);
      if (e.push({
        event: l,
        listeners: u
      }), o)
        l.data = o;
      else {
        var v = Zm(r);
        v !== null && (l.data = v);
      }
    }
  }
  function UT(e, t) {
    switch (e) {
      case "compositionend":
        return Zm(t);
      case "keypress":
        var n = t.which;
        return n !== Qm ? null : (Km = !0, Xm);
      case "textInput":
        var r = t.data;
        return r === Xm && Km ? null : r;
      default:
        return null;
    }
  }
  function NT(e, t) {
    if (So) {
      if (e === "compositionend" || !Ld && Jm(e, t)) {
        var n = Vm();
        return eT(), So = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!wT(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Im && !ey(t) ? null : t.data;
      default:
        return null;
    }
  }
  function kT(e, t, n, r, a) {
    var i;
    if (OT ? i = UT(t, r) : i = NT(t, r), !i)
      return null;
    var o = zs(n, "onBeforeInput");
    if (o.length > 0) {
      var u = new fT("onBeforeInput", "beforeinput", null, r, a);
      e.push({
        event: u,
        listeners: o
      }), u.data = i;
    }
  }
  function zT(e, t, n, r, a, i, o) {
    LT(e, t, n, r, a), kT(e, t, n, r, a);
  }
  var FT = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ty(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!FT[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function HT(e) {
    if (!Ct)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
  function jT() {
    Fn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function ny(e, t, n, r) {
    Zh(r);
    var a = zs(t, "onChange");
    if (a.length > 0) {
      var i = new Od("onChange", "change", null, n, r);
      e.push({
        event: i,
        listeners: a
      });
    }
  }
  var $u = null, Yu = null;
  function BT(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function VT(e) {
    var t = [];
    ny(t, Yu, e, Lf(e)), rm(PT, t);
  }
  function PT(e) {
    Sy(e, 0);
  }
  function Ls(e) {
    var t = Do(e);
    if (eo(t))
      return e;
  }
  function $T(e, t) {
    if (e === "change")
      return t;
  }
  var ry = !1;
  Ct && (ry = HT("input") && (!document.documentMode || document.documentMode > 9));
  function YT(e, t) {
    $u = e, Yu = t, $u.attachEvent("onpropertychange", iy);
  }
  function ay() {
    $u && ($u.detachEvent("onpropertychange", iy), $u = null, Yu = null);
  }
  function iy(e) {
    e.propertyName === "value" && Ls(Yu) && VT(e);
  }
  function qT(e, t, n) {
    e === "focusin" ? (ay(), YT(t, n)) : e === "focusout" && ay();
  }
  function GT(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ls(Yu);
  }
  function WT(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function IT(e, t) {
    if (e === "click")
      return Ls(t);
  }
  function QT(e, t) {
    if (e === "input" || e === "change")
      return Ls(t);
  }
  function XT(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || fe(e, "number", e.value);
  }
  function KT(e, t, n, r, a, i, o) {
    var u = n ? Do(n) : window, l, v;
    if (BT(u) ? l = $T : ty(u) ? ry ? l = QT : (l = GT, v = qT) : WT(u) && (l = IT), l) {
      var h = l(t, n);
      if (h) {
        ny(e, h, r, a);
        return;
      }
    }
    v && v(t, u, n), t === "focusout" && XT(u);
  }
  function JT() {
    Hn("onMouseEnter", ["mouseout", "mouseover"]), Hn("onMouseLeave", ["mouseout", "mouseover"]), Hn("onPointerEnter", ["pointerout", "pointerover"]), Hn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function ZT(e, t, n, r, a, i, o) {
    var u = t === "mouseover" || t === "pointerover", l = t === "mouseout" || t === "pointerout";
    if (u && !mC(r)) {
      var v = r.relatedTarget || r.fromElement;
      if (v && (Ui(v) || il(v)))
        return;
    }
    if (!(!l && !u)) {
      var h;
      if (a.window === a)
        h = a;
      else {
        var S = a.ownerDocument;
        S ? h = S.defaultView || S.parentWindow : h = window;
      }
      var b, x;
      if (l) {
        var O = r.relatedTarget || r.toElement;
        if (b = n, x = O ? Ui(O) : null, x !== null) {
          var A = xi(x);
          (x !== A || x.tag !== W && x.tag !== V) && (x = null);
        }
      } else
        b = null, x = n;
      if (b !== x) {
        var G = Ym, ae = "onMouseLeave", ee = "onMouseEnter", Ae = "mouse";
        (t === "pointerout" || t === "pointerover") && (G = Gm, ae = "onPointerLeave", ee = "onPointerEnter", Ae = "pointer");
        var xe = b == null ? h : Do(b), R = x == null ? h : Do(x), M = new G(ae, Ae + "leave", b, r, a);
        M.target = xe, M.relatedTarget = R;
        var T = null, z = Ui(a);
        if (z === n) {
          var K = new G(ee, Ae + "enter", x, r, a);
          K.target = R, K.relatedTarget = xe, T = K;
        }
        Rx(e, M, T, b, x);
      }
    }
  }
  function ex(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var In = typeof Object.is == "function" ? Object.is : ex;
  function qu(e, t) {
    if (In(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      if (!rn.call(t, i) || !In(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function oy(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function tx(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function uy(e, t) {
    for (var n = oy(e), r = 0, a = 0; n; ) {
      if (n.nodeType === da) {
        if (a = r + n.textContent.length, r <= t && a >= t)
          return {
            node: n,
            offset: t - r
          };
        r = a;
      }
      n = oy(tx(n));
    }
  }
  function nx(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
    if (!r || r.rangeCount === 0)
      return null;
    var a = r.anchorNode, i = r.anchorOffset, o = r.focusNode, u = r.focusOffset;
    try {
      a.nodeType, o.nodeType;
    } catch {
      return null;
    }
    return rx(e, a, i, o, u);
  }
  function rx(e, t, n, r, a) {
    var i = 0, o = -1, u = -1, l = 0, v = 0, h = e, S = null;
    e:
      for (; ; ) {
        for (var b = null; h === t && (n === 0 || h.nodeType === da) && (o = i + n), h === r && (a === 0 || h.nodeType === da) && (u = i + a), h.nodeType === da && (i += h.nodeValue.length), (b = h.firstChild) !== null; )
          S = h, h = b;
        for (; ; ) {
          if (h === e)
            break e;
          if (S === t && ++l === n && (o = i), S === r && ++v === a && (u = i), (b = h.nextSibling) !== null)
            break;
          h = S, S = h.parentNode;
        }
        h = b;
      }
    return o === -1 || u === -1 ? null : {
      start: o,
      end: u
    };
  }
  function ax(e, t) {
    var n = e.ownerDocument || document, r = n && n.defaultView || window;
    if (r.getSelection) {
      var a = r.getSelection(), i = e.textContent.length, o = Math.min(t.start, i), u = t.end === void 0 ? o : Math.min(t.end, i);
      if (!a.extend && o > u) {
        var l = u;
        u = o, o = l;
      }
      var v = uy(e, o), h = uy(e, u);
      if (v && h) {
        if (a.rangeCount === 1 && a.anchorNode === v.node && a.anchorOffset === v.offset && a.focusNode === h.node && a.focusOffset === h.offset)
          return;
        var S = n.createRange();
        S.setStart(v.node, v.offset), a.removeAllRanges(), o > u ? (a.addRange(S), a.extend(h.node, h.offset)) : (S.setEnd(h.node, h.offset), a.addRange(S));
      }
    }
  }
  function ly(e) {
    return e && e.nodeType === da;
  }
  function sy(e, t) {
    return !e || !t ? !1 : e === t ? !0 : ly(e) ? !1 : ly(t) ? sy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function ix(e) {
    return e && e.ownerDocument && sy(e.ownerDocument.documentElement, e);
  }
  function ox(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function cy() {
    for (var e = window, t = Va(); t instanceof e.HTMLIFrameElement; ) {
      if (ox(t))
        e = t.contentWindow;
      else
        return t;
      t = Va(e.document);
    }
    return t;
  }
  function Ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ux() {
    var e = cy();
    return {
      focusedElem: e,
      selectionRange: Ud(e) ? sx(e) : null
    };
  }
  function lx(e) {
    var t = cy(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && ix(n)) {
      r !== null && Ud(n) && cx(n, r);
      for (var a = [], i = n; i = i.parentNode; )
        i.nodeType === wn && a.push({
          element: i,
          left: i.scrollLeft,
          top: i.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var o = 0; o < a.length; o++) {
        var u = a[o];
        u.element.scrollLeft = u.left, u.element.scrollTop = u.top;
      }
    }
  }
  function sx(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = nx(e), t || {
      start: 0,
      end: 0
    };
  }
  function cx(e, t) {
    var n = t.start, r = t.end;
    r === void 0 && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : ax(e, t);
  }
  var fx = Ct && "documentMode" in document && document.documentMode <= 11;
  function dx() {
    Fn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var Eo = null, Nd = null, Gu = null, kd = !1;
  function vx(e) {
    if ("selectionStart" in e && Ud(e))
      return {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    };
  }
  function px(e) {
    return e.window === e ? e.document : e.nodeType === va ? e : e.ownerDocument;
  }
  function fy(e, t, n) {
    var r = px(n);
    if (!(kd || Eo == null || Eo !== Va(r))) {
      var a = vx(Eo);
      if (!Gu || !qu(Gu, a)) {
        Gu = a;
        var i = zs(Nd, "onSelect");
        if (i.length > 0) {
          var o = new Od("onSelect", "select", null, t, n);
          e.push({
            event: o,
            listeners: i
          }), o.target = Eo;
        }
      }
    }
  }
  function hx(e, t, n, r, a, i, o) {
    var u = n ? Do(n) : window;
    switch (t) {
      case "focusin":
        (ty(u) || u.contentEditable === "true") && (Eo = u, Nd = n, Gu = null);
        break;
      case "focusout":
        Eo = null, Nd = null, Gu = null;
        break;
      case "mousedown":
        kd = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        kd = !1, fy(e, r, a);
        break;
      case "selectionchange":
        if (fx)
          break;
      case "keydown":
      case "keyup":
        fy(e, r, a);
    }
  }
  function Us(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Co = {
    animationend: Us("Animation", "AnimationEnd"),
    animationiteration: Us("Animation", "AnimationIteration"),
    animationstart: Us("Animation", "AnimationStart"),
    transitionend: Us("Transition", "TransitionEnd")
  }, zd = {}, dy = {};
  Ct && (dy = document.createElement("div").style, "AnimationEvent" in window || (delete Co.animationend.animation, delete Co.animationiteration.animation, delete Co.animationstart.animation), "TransitionEvent" in window || delete Co.transitionend.transition);
  function Ns(e) {
    if (zd[e])
      return zd[e];
    if (!Co[e])
      return e;
    var t = Co[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in dy)
        return zd[e] = t[n];
    return e;
  }
  var vy = Ns("animationend"), py = Ns("animationiteration"), hy = Ns("animationstart"), my = Ns("transitionend"), yy = /* @__PURE__ */ new Map(), gy = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function Ia(e, t) {
    yy.set(e, t), Fn(t, [e]);
  }
  function mx() {
    for (var e = 0; e < gy.length; e++) {
      var t = gy[e], n = t.toLowerCase(), r = t[0].toUpperCase() + t.slice(1);
      Ia(n, "on" + r);
    }
    Ia(vy, "onAnimationEnd"), Ia(py, "onAnimationIteration"), Ia(hy, "onAnimationStart"), Ia("dblclick", "onDoubleClick"), Ia("focusin", "onFocus"), Ia("focusout", "onBlur"), Ia(my, "onTransitionEnd");
  }
  function yx(e, t, n, r, a, i, o) {
    var u = yy.get(t);
    if (u !== void 0) {
      var l = Od, v = t;
      switch (t) {
        case "keypress":
          if (ws(r) === 0)
            return;
        case "keydown":
        case "keyup":
          l = gT;
          break;
        case "focusin":
          v = "focus", l = Ad;
          break;
        case "focusout":
          v = "blur", l = Ad;
          break;
        case "beforeblur":
        case "afterblur":
          l = Ad;
          break;
        case "click":
          if (r.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          l = Ym;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          l = aT;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          l = ET;
          break;
        case vy:
        case py:
        case hy:
          l = uT;
          break;
        case my:
          l = RT;
          break;
        case "scroll":
          l = tT;
          break;
        case "wheel":
          l = xT;
          break;
        case "copy":
        case "cut":
        case "paste":
          l = sT;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          l = Gm;
          break;
      }
      var h = (i & yu) !== 0;
      {
        var S = !h && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", b = Ex(n, u, r.type, h, S);
        if (b.length > 0) {
          var x = new l(u, v, null, r, a);
          e.push({
            event: x,
            listeners: b
          });
        }
      }
    }
  }
  mx(), JT(), jT(), dx(), _T();
  function gx(e, t, n, r, a, i, o) {
    yx(e, t, n, r, a, i);
    var u = (i & vC) === 0;
    u && (ZT(e, t, n, r, a), KT(e, t, n, r, a), hx(e, t, n, r, a), zT(e, t, n, r, a));
  }
  var Wu = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Fd = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Wu));
  function by(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, xC(r, t, void 0, e), e.currentTarget = null;
  }
  function bx(e, t, n) {
    var r;
    if (n)
      for (var a = t.length - 1; a >= 0; a--) {
        var i = t[a], o = i.instance, u = i.currentTarget, l = i.listener;
        if (o !== r && e.isPropagationStopped())
          return;
        by(e, l, u), r = o;
      }
    else
      for (var v = 0; v < t.length; v++) {
        var h = t[v], S = h.instance, b = h.currentTarget, x = h.listener;
        if (S !== r && e.isPropagationStopped())
          return;
        by(e, x, b), r = S;
      }
  }
  function Sy(e, t) {
    for (var n = (t & yu) !== 0, r = 0; r < e.length; r++) {
      var a = e[r], i = a.event, o = a.listeners;
      bx(i, o, n);
    }
    DC();
  }
  function Sx(e, t, n, r, a) {
    var i = Lf(n), o = [];
    gx(o, e, r, n, i, t), Sy(o, t);
  }
  function ut(e, t) {
    Fd.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, r = XD(t), a = Tx(e);
    r.has(a) || (Ey(t, e, Mf, n), r.add(a));
  }
  function Hd(e, t, n) {
    Fd.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var r = 0;
    t && (r |= yu), Ey(n, e, r, t);
  }
  var ks = "_reactListening" + Math.random().toString(36).slice(2);
  function Iu(e) {
    if (!e[ks]) {
      e[ks] = !0, er.forEach(function(n) {
        n !== "selectionchange" && (Fd.has(n) || Hd(n, !1, e), Hd(n, !0, e));
      });
      var t = e.nodeType === va ? e : e.ownerDocument;
      t !== null && (t[ks] || (t[ks] = !0, Hd("selectionchange", !1, t)));
    }
  }
  function Ey(e, t, n, r, a) {
    var i = qR(e, t, n), o = void 0;
    kf && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = !0), e = e, r ? o !== void 0 ? KR(e, t, i, o) : XR(e, t, i) : o !== void 0 ? JR(e, t, i, o) : QR(e, t, i);
  }
  function Cy(e, t) {
    return e === t || e.nodeType === Rt && e.parentNode === t;
  }
  function jd(e, t, n, r, a) {
    var i = r;
    if (!(t & Kh) && !(t & Mf)) {
      var o = a;
      if (r !== null) {
        var u = r;
        e:
          for (; ; ) {
            if (u === null)
              return;
            var l = u.tag;
            if (l === _ || l === te) {
              var v = u.stateNode.containerInfo;
              if (Cy(v, o))
                break;
              if (l === te)
                for (var h = u.return; h !== null; ) {
                  var S = h.tag;
                  if (S === _ || S === te) {
                    var b = h.stateNode.containerInfo;
                    if (Cy(b, o))
                      return;
                  }
                  h = h.return;
                }
              for (; v !== null; ) {
                var x = Ui(v);
                if (x === null)
                  return;
                var O = x.tag;
                if (O === W || O === V) {
                  u = i = x;
                  continue e;
                }
                v = v.parentNode;
              }
            }
            u = u.return;
          }
      }
    }
    rm(function() {
      return Sx(e, t, n, i);
    });
  }
  function Qu(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ex(e, t, n, r, a, i) {
    for (var o = t !== null ? t + "Capture" : null, u = r ? o : t, l = [], v = e, h = null; v !== null; ) {
      var S = v, b = S.stateNode, x = S.tag;
      if (x === W && b !== null && (h = b, u !== null)) {
        var O = bu(v, u);
        O != null && l.push(Qu(v, O, h));
      }
      if (a)
        break;
      v = v.return;
    }
    return l;
  }
  function zs(e, t) {
    for (var n = t + "Capture", r = [], a = e; a !== null; ) {
      var i = a, o = i.stateNode, u = i.tag;
      if (u === W && o !== null) {
        var l = o, v = bu(a, n);
        v != null && r.unshift(Qu(a, v, l));
        var h = bu(a, t);
        h != null && r.push(Qu(a, h, l));
      }
      a = a.return;
    }
    return r;
  }
  function Ro(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== W);
    return e || null;
  }
  function Cx(e, t) {
    for (var n = e, r = t, a = 0, i = n; i; i = Ro(i))
      a++;
    for (var o = 0, u = r; u; u = Ro(u))
      o++;
    for (; a - o > 0; )
      n = Ro(n), a--;
    for (; o - a > 0; )
      r = Ro(r), o--;
    for (var l = a; l--; ) {
      if (n === r || r !== null && n === r.alternate)
        return n;
      n = Ro(n), r = Ro(r);
    }
    return null;
  }
  function Ry(e, t, n, r, a) {
    for (var i = t._reactName, o = [], u = n; u !== null && u !== r; ) {
      var l = u, v = l.alternate, h = l.stateNode, S = l.tag;
      if (v !== null && v === r)
        break;
      if (S === W && h !== null) {
        var b = h;
        if (a) {
          var x = bu(u, i);
          x != null && o.unshift(Qu(u, x, b));
        } else if (!a) {
          var O = bu(u, i);
          O != null && o.push(Qu(u, O, b));
        }
      }
      u = u.return;
    }
    o.length !== 0 && e.push({
      event: t,
      listeners: o
    });
  }
  function Rx(e, t, n, r, a) {
    var i = r && a ? Cx(r, a) : null;
    r !== null && Ry(e, t, r, i, !1), a !== null && n !== null && Ry(e, n, a, i, !0);
  }
  function Tx(e, t) {
    return e + "__bubble";
  }
  var An = !1, Xu = "dangerouslySetInnerHTML", Fs = "suppressContentEditableWarning", Qa = "suppressHydrationWarning", Ty = "autoFocus", Mi = "children", Li = "style", Hs = "__html", Bd, js, Ku, xy, Bs, Dy, Oy;
  Bd = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, js = function(e, t) {
    oC(e, t), uC(e, t), dC(e, t, {
      registrationNameDependencies: Wt,
      possibleRegistrationNames: xn
    });
  }, Dy = Ct && !document.documentMode, Ku = function(e, t, n) {
    if (!An) {
      var r = Vs(n), a = Vs(t);
      a !== r && (An = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(a), JSON.stringify(r)));
    }
  }, xy = function(e) {
    if (!An) {
      An = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), d("Extra attributes from the server: %s", t);
    }
  }, Bs = function(e, t) {
    t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Oy = function(e, t) {
    var n = e.namespaceURI === fa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var xx = /\r\n?/g, Dx = /\u0000|\uFFFD/g;
  function Vs(e) {
    nr(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(xx, `
`).replace(Dx, "");
  }
  function Ps(e, t, n, r) {
    var a = Vs(t), i = Vs(e);
    if (i !== a && (r && (An || (An = !0, d('Text content did not match. Server: "%s" Client: "%s"', i, a))), n && ge))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function _y(e) {
    return e.nodeType === va ? e : e.ownerDocument;
  }
  function Ox() {
  }
  function $s(e) {
    e.onclick = Ox;
  }
  function _x(e, t, n, r, a) {
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        var o = r[i];
        if (i === Li)
          o && Object.freeze(o), qh(t, o);
        else if (i === Xu) {
          var u = o ? o[Hs] : void 0;
          u != null && Bh(t, u);
        } else if (i === Mi)
          if (typeof o == "string") {
            var l = e !== "textarea" || o !== "";
            l && fs(t, o);
          } else
            typeof o == "number" && fs(t, "" + o);
        else
          i === Fs || i === Qa || i === Ty || (Wt.hasOwnProperty(i) ? o != null && (typeof o != "function" && Bs(i, o), i === "onScroll" && ut("scroll", t)) : o != null && ua(t, i, o, a));
      }
  }
  function wx(e, t, n, r) {
    for (var a = 0; a < t.length; a += 2) {
      var i = t[a], o = t[a + 1];
      i === Li ? qh(e, o) : i === Xu ? Bh(e, o) : i === Mi ? fs(e, o) : ua(e, i, o, r);
    }
  }
  function Ax(e, t, n, r) {
    var a, i = _y(n), o, u = r;
    if (u === fa && (u = xf(e)), u === fa) {
      if (a = Si(e, t), !a && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var l = i.createElement("div");
        l.innerHTML = "<script><\/script>";
        var v = l.firstChild;
        o = l.removeChild(v);
      } else if (typeof t.is == "string")
        o = i.createElement(e, {
          is: t.is
        });
      else if (o = i.createElement(e), e === "select") {
        var h = o;
        t.multiple ? h.multiple = !0 : t.size && (h.size = t.size);
      }
    } else
      o = i.createElementNS(u, e);
    return u === fa && !a && Object.prototype.toString.call(o) === "[object HTMLUnknownElement]" && !rn.call(Bd, e) && (Bd[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), o;
  }
  function Mx(e, t) {
    return _y(t).createTextNode(e);
  }
  function Lx(e, t, n, r) {
    var a = Si(t, n);
    js(t, n);
    var i;
    switch (t) {
      case "dialog":
        ut("cancel", e), ut("close", e), i = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e), i = n;
        break;
      case "video":
      case "audio":
        for (var o = 0; o < Wu.length; o++)
          ut(Wu[o], e);
        i = n;
        break;
      case "source":
        ut("error", e), i = n;
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e), i = n;
        break;
      case "details":
        ut("toggle", e), i = n;
        break;
      case "input":
        y(e, n), i = c(e, n), ut("invalid", e);
        break;
      case "option":
        Je(e, n), i = n;
        break;
      case "select":
        hu(e, n), i = pu(e, n), ut("invalid", e);
        break;
      case "textarea":
        Fh(e, n), i = Rf(e, n), ut("invalid", e);
        break;
      default:
        i = n;
    }
    switch (Af(t, i), _x(t, e, r, i, a), t) {
      case "input":
        sa(e), B(e, n, !1);
        break;
      case "textarea":
        sa(e), jh(e);
        break;
      case "option":
        ot(e, n);
        break;
      case "select":
        Cf(e, n);
        break;
      default:
        typeof i.onClick == "function" && $s(e);
        break;
    }
  }
  function Ux(e, t, n, r, a) {
    js(t, r);
    var i = null, o, u;
    switch (t) {
      case "input":
        o = c(e, n), u = c(e, r), i = [];
        break;
      case "select":
        o = pu(e, n), u = pu(e, r), i = [];
        break;
      case "textarea":
        o = Rf(e, n), u = Rf(e, r), i = [];
        break;
      default:
        o = n, u = r, typeof o.onClick != "function" && typeof u.onClick == "function" && $s(e);
        break;
    }
    Af(t, u);
    var l, v, h = null;
    for (l in o)
      if (!(u.hasOwnProperty(l) || !o.hasOwnProperty(l) || o[l] == null))
        if (l === Li) {
          var S = o[l];
          for (v in S)
            S.hasOwnProperty(v) && (h || (h = {}), h[v] = "");
        } else
          l === Xu || l === Mi || l === Fs || l === Qa || l === Ty || (Wt.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in u) {
      var b = u[l], x = o != null ? o[l] : void 0;
      if (!(!u.hasOwnProperty(l) || b === x || b == null && x == null))
        if (l === Li)
          if (b && Object.freeze(b), x) {
            for (v in x)
              x.hasOwnProperty(v) && (!b || !b.hasOwnProperty(v)) && (h || (h = {}), h[v] = "");
            for (v in b)
              b.hasOwnProperty(v) && x[v] !== b[v] && (h || (h = {}), h[v] = b[v]);
          } else
            h || (i || (i = []), i.push(l, h)), h = b;
        else if (l === Xu) {
          var O = b ? b[Hs] : void 0, A = x ? x[Hs] : void 0;
          O != null && A !== O && (i = i || []).push(l, O);
        } else
          l === Mi ? (typeof b == "string" || typeof b == "number") && (i = i || []).push(l, "" + b) : l === Fs || l === Qa || (Wt.hasOwnProperty(l) ? (b != null && (typeof b != "function" && Bs(l, b), l === "onScroll" && ut("scroll", e)), !i && x !== b && (i = [])) : (i = i || []).push(l, b));
    }
    return h && (JE(h, u[Li]), (i = i || []).push(Li, h)), i;
  }
  function Nx(e, t, n, r, a) {
    n === "input" && a.type === "radio" && a.name != null && D(e, a);
    var i = Si(n, r), o = Si(n, a);
    switch (wx(e, t, i, o), n) {
      case "input":
        w(e, a);
        break;
      case "textarea":
        Hh(e, a);
        break;
      case "select":
        wE(e, a);
        break;
    }
  }
  function kx(e) {
    {
      var t = e.toLowerCase();
      return ds.hasOwnProperty(t) && ds[t] || null;
    }
  }
  function zx(e, t, n, r, a, i, o) {
    var u, l;
    switch (u = Si(t, n), js(t, n), t) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (var v = 0; v < Wu.length; v++)
          ut(Wu[v], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        y(e, n), ut("invalid", e);
        break;
      case "option":
        Je(e, n);
        break;
      case "select":
        hu(e, n), ut("invalid", e);
        break;
      case "textarea":
        Fh(e, n), ut("invalid", e);
        break;
    }
    Af(t, n);
    {
      l = /* @__PURE__ */ new Set();
      for (var h = e.attributes, S = 0; S < h.length; S++) {
        var b = h[S].name.toLowerCase();
        switch (b) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            l.add(h[S].name);
        }
      }
    }
    var x = null;
    for (var O in n)
      if (n.hasOwnProperty(O)) {
        var A = n[O];
        if (O === Mi)
          typeof A == "string" ? e.textContent !== A && (n[Qa] !== !0 && Ps(e.textContent, A, i, o), x = [Mi, A]) : typeof A == "number" && e.textContent !== "" + A && (n[Qa] !== !0 && Ps(e.textContent, A, i, o), x = [Mi, "" + A]);
        else if (Wt.hasOwnProperty(O))
          A != null && (typeof A != "function" && Bs(O, A), O === "onScroll" && ut("scroll", e));
        else if (o && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof u == "boolean") {
          var G = void 0, ae = u && Tn ? null : Vn(O);
          if (n[Qa] !== !0) {
            if (!(O === Fs || O === Qa || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            O === "value" || O === "checked" || O === "selected")) {
              if (O === Xu) {
                var ee = e.innerHTML, Ae = A ? A[Hs] : void 0;
                if (Ae != null) {
                  var xe = Oy(e, Ae);
                  xe !== ee && Ku(O, ee, xe);
                }
              } else if (O === Li) {
                if (l.delete(O), Dy) {
                  var R = XE(A);
                  G = e.getAttribute("style"), R !== G && Ku(O, G, R);
                }
              } else if (u && !Tn)
                l.delete(O.toLowerCase()), G = Ua(e, O, A), A !== G && Ku(O, G, A);
              else if (!gt(O, ae, u) && !Xe(O, A, ae, u)) {
                var M = !1;
                if (ae !== null)
                  l.delete(ae.attributeName), G = oa(e, O, A, ae);
                else {
                  var T = r;
                  if (T === fa && (T = xf(t)), T === fa)
                    l.delete(O.toLowerCase());
                  else {
                    var z = kx(O);
                    z !== null && z !== O && (M = !0, l.delete(z)), l.delete(O);
                  }
                  G = Ua(e, O, A);
                }
                var K = Tn;
                !K && A !== G && !M && Ku(O, G, A);
              }
            }
          }
        }
      }
    switch (o && // $FlowFixMe - Should be inferred as not undefined.
    l.size > 0 && n[Qa] !== !0 && xy(l), t) {
      case "input":
        sa(e), B(e, n, !0);
        break;
      case "textarea":
        sa(e), jh(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && $s(e);
        break;
    }
    return x;
  }
  function Fx(e, t, n) {
    var r = e.nodeValue !== t;
    return r;
  }
  function Vd(e, t) {
    {
      if (An)
        return;
      An = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Pd(e, t) {
    {
      if (An)
        return;
      An = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function $d(e, t, n) {
    {
      if (An)
        return;
      An = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Yd(e, t) {
    {
      if (t === "" || An)
        return;
      An = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function Hx(e, t, n) {
    switch (t) {
      case "input":
        se(e, n);
        return;
      case "textarea":
        ME(e, n);
        return;
      case "select":
        AE(e, n);
        return;
    }
  }
  var Ju = function() {
  }, Zu = function() {
  };
  {
    var jx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wy = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], Bx = wy.concat(["button"]), Vx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Ay = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Zu = function(e, t) {
      var n = Te({}, e || Ay), r = {
        tag: t
      };
      return wy.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), Bx.indexOf(t) !== -1 && (n.pTagInButtonScope = null), jx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), n;
    };
    var Px = function(e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Vx.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, $x = function(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, My = {};
    Ju = function(e, t, n) {
      n = n || Ay;
      var r = n.current, a = r && r.tag;
      t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var i = Px(e, a) ? null : r, o = i ? null : $x(e, n), u = i || o;
      if (u) {
        var l = u.tag, v = !!i + "|" + e + "|" + l;
        if (!My[v]) {
          My[v] = !0;
          var h = e, S = "";
          if (e === "#text" ? /\S/.test(t) ? h = "Text nodes" : (h = "Whitespace text nodes", S = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : h = "<" + e + ">", i) {
            var b = "";
            l === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", h, l, S, b);
          } else
            d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", h, l);
        }
      }
    };
  }
  var Ys = "suppressHydrationWarning", qs = "$", Gs = "/$", el = "$?", tl = "$!", Yx = "style", qd = null, Gd = null;
  function qx(e) {
    var t, n, r = e.nodeType;
    switch (r) {
      case va:
      case Of: {
        t = r === va ? "#document" : "#fragment";
        var a = e.documentElement;
        n = a ? a.namespaceURI : Df(null, "");
        break;
      }
      default: {
        var i = r === Rt ? e.parentNode : e, o = i.namespaceURI || null;
        t = i.tagName, n = Df(o, t);
        break;
      }
    }
    {
      var u = t.toLowerCase(), l = Zu(null, u);
      return {
        namespace: n,
        ancestorInfo: l
      };
    }
  }
  function Gx(e, t, n) {
    {
      var r = e, a = Df(r.namespace, t), i = Zu(r.ancestorInfo, t);
      return {
        namespace: a,
        ancestorInfo: i
      };
    }
  }
  function fM(e) {
    return e;
  }
  function Wx(e) {
    qd = YR(), Gd = ux();
    var t = null;
    return jm(!1), t;
  }
  function Ix(e) {
    lx(Gd), jm(qd), qd = null, Gd = null;
  }
  function Qx(e, t, n, r, a) {
    var i;
    {
      var o = r;
      if (Ju(e, null, o.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var u = "" + t.children, l = Zu(o.ancestorInfo, e);
        Ju(null, u, l);
      }
      i = o.namespace;
    }
    var v = Ax(e, t, n, i);
    return al(a, v), ev(v, t), v;
  }
  function Xx(e, t) {
    e.appendChild(t);
  }
  function Kx(e, t, n, r, a) {
    switch (Lx(e, t, n, r), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function Jx(e, t, n, r, a, i) {
    {
      var o = i;
      if (typeof r.children != typeof n.children && (typeof r.children == "string" || typeof r.children == "number")) {
        var u = "" + r.children, l = Zu(o.ancestorInfo, t);
        Ju(null, u, l);
      }
    }
    return Ux(e, t, n, r);
  }
  function Wd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function Zx(e, t, n, r) {
    {
      var a = n;
      Ju(null, e, a.ancestorInfo);
    }
    var i = Mx(e, t);
    return al(r, i), i;
  }
  function eD() {
    var e = window.event;
    return e === void 0 ? Sa : Bm(e.type);
  }
  var Id = typeof setTimeout == "function" ? setTimeout : void 0, tD = typeof clearTimeout == "function" ? clearTimeout : void 0, Qd = -1, Ly = typeof Promise == "function" ? Promise : void 0, nD = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ly < "u" ? function(e) {
    return Ly.resolve(null).then(e).catch(rD);
  } : Id;
  function rD(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function aD(e, t, n, r) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && e.focus();
        return;
      case "img": {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function iD(e, t, n, r, a, i) {
    Nx(e, t, n, r, a), ev(e, a);
  }
  function Uy(e) {
    fs(e, "");
  }
  function oD(e, t, n) {
    e.nodeValue = n;
  }
  function uD(e, t) {
    e.appendChild(t);
  }
  function lD(e, t) {
    var n;
    e.nodeType === Rt ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var r = e._reactRootContainer;
    r == null && n.onclick === null && $s(n);
  }
  function sD(e, t, n) {
    e.insertBefore(t, n);
  }
  function cD(e, t, n) {
    e.nodeType === Rt ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function fD(e, t) {
    e.removeChild(t);
  }
  function dD(e, t) {
    e.nodeType === Rt ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Xd(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === Rt) {
        var i = a.data;
        if (i === Gs)
          if (r === 0) {
            e.removeChild(a), Fu(t);
            return;
          } else
            r--;
        else
          (i === qs || i === el || i === tl) && r++;
      }
      n = a;
    } while (n);
    Fu(t);
  }
  function vD(e, t) {
    e.nodeType === Rt ? Xd(e.parentNode, t) : e.nodeType === wn && Xd(e, t), Fu(e);
  }
  function pD(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function hD(e) {
    e.nodeValue = "";
  }
  function mD(e, t) {
    e = e;
    var n = t[Yx], r = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = _f("display", r);
  }
  function yD(e, t) {
    e.nodeValue = t;
  }
  function gD(e) {
    e.nodeType === wn ? e.textContent = "" : e.nodeType === va && e.documentElement && e.removeChild(e.documentElement);
  }
  function bD(e, t, n) {
    return e.nodeType !== wn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function SD(e, t) {
    return t === "" || e.nodeType !== da ? null : e;
  }
  function ED(e) {
    return e.nodeType !== Rt ? null : e;
  }
  function Ny(e) {
    return e.data === el;
  }
  function Kd(e) {
    return e.data === tl;
  }
  function CD(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, r, a;
    return t && (n = t.dgst, r = t.msg, a = t.stck), {
      message: r,
      digest: n,
      stack: a
    };
  }
  function RD(e, t) {
    e._reactRetry = t;
  }
  function Ws(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === wn || t === da)
        break;
      if (t === Rt) {
        var n = e.data;
        if (n === qs || n === tl || n === el)
          break;
        if (n === Gs)
          return null;
      }
    }
    return e;
  }
  function nl(e) {
    return Ws(e.nextSibling);
  }
  function TD(e) {
    return Ws(e.firstChild);
  }
  function xD(e) {
    return Ws(e.firstChild);
  }
  function DD(e) {
    return Ws(e.nextSibling);
  }
  function OD(e, t, n, r, a, i, o) {
    al(i, e), ev(e, n);
    var u;
    {
      var l = a;
      u = l.namespace;
    }
    var v = (i.mode & _e) !== ie;
    return zx(e, t, n, u, r, v, o);
  }
  function _D(e, t, n, r) {
    return al(n, e), n.mode & _e, Fx(e, t);
  }
  function wD(e, t) {
    al(t, e);
  }
  function AD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Rt) {
        var r = t.data;
        if (r === Gs) {
          if (n === 0)
            return nl(t);
          n--;
        } else
          (r === qs || r === tl || r === el) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ky(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Rt) {
        var r = t.data;
        if (r === qs || r === tl || r === el) {
          if (n === 0)
            return t;
          n--;
        } else
          r === Gs && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function MD(e) {
    Fu(e);
  }
  function LD(e) {
    Fu(e);
  }
  function UD(e) {
    return e !== "head" && e !== "body";
  }
  function ND(e, t, n, r) {
    var a = !0;
    Ps(t.nodeValue, n, r, a);
  }
  function kD(e, t, n, r, a, i) {
    if (t[Ys] !== !0) {
      var o = !0;
      Ps(r.nodeValue, a, i, o);
    }
  }
  function zD(e, t) {
    t.nodeType === wn ? Vd(e, t) : t.nodeType === Rt || Pd(e, t);
  }
  function FD(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === wn ? Vd(n, t) : t.nodeType === Rt || Pd(n, t));
    }
  }
  function HD(e, t, n, r, a) {
    (a || t[Ys] !== !0) && (r.nodeType === wn ? Vd(n, r) : r.nodeType === Rt || Pd(n, r));
  }
  function jD(e, t, n) {
    $d(e, t);
  }
  function BD(e, t) {
    Yd(e, t);
  }
  function VD(e, t, n) {
    {
      var r = e.parentNode;
      r !== null && $d(r, t);
    }
  }
  function PD(e, t) {
    {
      var n = e.parentNode;
      n !== null && Yd(n, t);
    }
  }
  function $D(e, t, n, r, a, i) {
    (i || t[Ys] !== !0) && $d(n, r);
  }
  function YD(e, t, n, r, a) {
    (a || t[Ys] !== !0) && Yd(n, r);
  }
  function qD(e) {
    d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function GD(e) {
    Iu(e);
  }
  var To = Math.random().toString(36).slice(2), xo = "__reactFiber$" + To, Jd = "__reactProps$" + To, rl = "__reactContainer$" + To, Zd = "__reactEvents$" + To, WD = "__reactListeners$" + To, ID = "__reactHandles$" + To;
  function QD(e) {
    delete e[xo], delete e[Jd], delete e[Zd], delete e[WD], delete e[ID];
  }
  function al(e, t) {
    t[xo] = e;
  }
  function Is(e, t) {
    t[rl] = e;
  }
  function zy(e) {
    e[rl] = null;
  }
  function il(e) {
    return !!e[rl];
  }
  function Ui(e) {
    var t = e[xo];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[rl] || n[xo], t) {
        var r = t.alternate;
        if (t.child !== null || r !== null && r.child !== null)
          for (var a = ky(e); a !== null; ) {
            var i = a[xo];
            if (i)
              return i;
            a = ky(a);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Xa(e) {
    var t = e[xo] || e[rl];
    return t && (t.tag === W || t.tag === V || t.tag === he || t.tag === _) ? t : null;
  }
  function Do(e) {
    if (e.tag === W || e.tag === V)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Qs(e) {
    return e[Jd] || null;
  }
  function ev(e, t) {
    e[Jd] = t;
  }
  function XD(e) {
    var t = e[Zd];
    return t === void 0 && (t = e[Zd] = /* @__PURE__ */ new Set()), t;
  }
  var Fy = {}, Hy = p.ReactDebugCurrentFrame;
  function Xs(e) {
    if (e) {
      var t = e._owner, n = Ha(e.type, e._source, t ? t.type : null);
      Hy.setExtraStackFrame(n);
    } else
      Hy.setExtraStackFrame(null);
  }
  function Dr(e, t, n, r, a) {
    {
      var i = Function.call.bind(rn);
      for (var o in e)
        if (i(e, o)) {
          var u = void 0;
          try {
            if (typeof e[o] != "function") {
              var l = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw l.name = "Invariant Violation", l;
            }
            u = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (v) {
            u = v;
          }
          u && !(u instanceof Error) && (Xs(a), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof u), Xs(null)), u instanceof Error && !(u.message in Fy) && (Fy[u.message] = !0, Xs(a), d("Failed %s type: %s", n, u.message), Xs(null));
        }
    }
  }
  var tv = [], Ks;
  Ks = [];
  var Ea = -1;
  function Ka(e) {
    return {
      current: e
    };
  }
  function sn(e, t) {
    if (Ea < 0) {
      d("Unexpected pop.");
      return;
    }
    t !== Ks[Ea] && d("Unexpected Fiber popped."), e.current = tv[Ea], tv[Ea] = null, Ks[Ea] = null, Ea--;
  }
  function cn(e, t, n) {
    Ea++, tv[Ea] = e.current, Ks[Ea] = n, e.current = t;
  }
  var nv;
  nv = {};
  var Qn = {};
  Object.freeze(Qn);
  var Ca = Ka(Qn), Gr = Ka(!1), rv = Qn;
  function Oo(e, t, n) {
    return n && Wr(t) ? rv : Ca.current;
  }
  function jy(e, t, n) {
    {
      var r = e.stateNode;
      r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function _o(e, t) {
    {
      var n = e.type, r = n.contextTypes;
      if (!r)
        return Qn;
      var a = e.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
        return a.__reactInternalMemoizedMaskedChildContext;
      var i = {};
      for (var o in r)
        i[o] = t[o];
      {
        var u = ye(e) || "Unknown";
        Dr(r, i, "context", u);
      }
      return a && jy(e, t, i), i;
    }
  }
  function Js() {
    return Gr.current;
  }
  function Wr(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Zs(e) {
    sn(Gr, e), sn(Ca, e);
  }
  function av(e) {
    sn(Gr, e), sn(Ca, e);
  }
  function By(e, t, n) {
    {
      if (Ca.current !== Qn)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      cn(Ca, t, e), cn(Gr, n, e);
    }
  }
  function Vy(e, t, n) {
    {
      var r = e.stateNode, a = t.childContextTypes;
      if (typeof r.getChildContext != "function") {
        {
          var i = ye(e) || "Unknown";
          nv[i] || (nv[i] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
        }
        return n;
      }
      var o = r.getChildContext();
      for (var u in o)
        if (!(u in a))
          throw new Error((ye(e) || "Unknown") + '.getChildContext(): key "' + u + '" is not defined in childContextTypes.');
      {
        var l = ye(e) || "Unknown";
        Dr(a, o, "child context", l);
      }
      return Te({}, n, o);
    }
  }
  function ec(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Qn;
      return rv = Ca.current, cn(Ca, n, e), cn(Gr, Gr.current, e), !0;
    }
  }
  function Py(e, t, n) {
    {
      var r = e.stateNode;
      if (!r)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var a = Vy(e, t, rv);
        r.__reactInternalMemoizedMergedChildContext = a, sn(Gr, e), sn(Ca, e), cn(Ca, a, e), cn(Gr, n, e);
      } else
        sn(Gr, e), cn(Gr, n, e);
    }
  }
  function KD(e) {
    {
      if (!UC(e) || e.tag !== F)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case _:
            return t.stateNode.context;
          case F: {
            var n = t.type;
            if (Wr(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var Ja = 0, tc = 1, Ra = null, iv = !1, ov = !1;
  function $y(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  function JD(e) {
    iv = !0, $y(e);
  }
  function Yy() {
    iv && Za();
  }
  function Za() {
    if (!ov && Ra !== null) {
      ov = !0;
      var e = 0, t = xr();
      try {
        var n = !0, r = Ra;
        for (qt(Gn); e < r.length; e++) {
          var a = r[e];
          do
            a = a(n);
          while (a !== null);
        }
        Ra = null, iv = !1;
      } catch (i) {
        throw Ra !== null && (Ra = Ra.slice(e + 1)), pm(ys, Za), i;
      } finally {
        qt(t), ov = !1;
      }
    }
    return null;
  }
  var wo = [], Ao = 0, nc = null, rc = 0, ur = [], lr = 0, Ni = null, Ta = 1, xa = "";
  function ZD(e) {
    return zi(), (e.flags & om) !== le;
  }
  function e0(e) {
    return zi(), rc;
  }
  function t0() {
    var e = xa, t = Ta, n = t & ~n0(t);
    return n.toString(32) + e;
  }
  function ki(e, t) {
    zi(), wo[Ao++] = rc, wo[Ao++] = nc, nc = e, rc = t;
  }
  function qy(e, t, n) {
    zi(), ur[lr++] = Ta, ur[lr++] = xa, ur[lr++] = Ni, Ni = e;
    var r = Ta, a = xa, i = ac(r) - 1, o = r & ~(1 << i), u = n + 1, l = ac(t) + i;
    if (l > 30) {
      var v = i - i % 5, h = (1 << v) - 1, S = (o & h).toString(32), b = o >> v, x = i - v, O = ac(t) + x, A = u << x, G = A | b, ae = S + a;
      Ta = 1 << O | G, xa = ae;
    } else {
      var ee = u << i, Ae = ee | o, xe = a;
      Ta = 1 << l | Ae, xa = xe;
    }
  }
  function uv(e) {
    zi();
    var t = e.return;
    if (t !== null) {
      var n = 1, r = 0;
      ki(e, n), qy(e, n, r);
    }
  }
  function ac(e) {
    return 32 - Sm(e);
  }
  function n0(e) {
    return 1 << ac(e) - 1;
  }
  function lv(e) {
    for (; e === nc; )
      nc = wo[--Ao], wo[Ao] = null, rc = wo[--Ao], wo[Ao] = null;
    for (; e === Ni; )
      Ni = ur[--lr], ur[lr] = null, xa = ur[--lr], ur[lr] = null, Ta = ur[--lr], ur[lr] = null;
  }
  function r0() {
    return zi(), Ni !== null ? {
      id: Ta,
      overflow: xa
    } : null;
  }
  function a0(e, t) {
    zi(), ur[lr++] = Ta, ur[lr++] = xa, ur[lr++] = Ni, Ta = t.id, xa = t.overflow, Ni = e;
  }
  function zi() {
    Qt() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var It = null, sr = null, Or = !1, Fi = !1, ei = null;
  function i0() {
    Or && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function Gy() {
    Fi = !0;
  }
  function o0() {
    return Fi;
  }
  function u0(e) {
    var t = e.stateNode.containerInfo;
    return sr = xD(t), It = e, Or = !0, ei = null, Fi = !1, !0;
  }
  function l0(e, t, n) {
    return sr = DD(t), It = e, Or = !0, ei = null, Fi = !1, n !== null && a0(e, n), !0;
  }
  function Wy(e, t) {
    switch (e.tag) {
      case _: {
        zD(e.stateNode.containerInfo, t);
        break;
      }
      case W: {
        var n = (e.mode & _e) !== ie;
        HD(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case he: {
        var r = e.memoizedState;
        r.dehydrated !== null && FD(r.dehydrated, t);
        break;
      }
    }
  }
  function Iy(e, t) {
    Wy(e, t);
    var n = dw();
    n.stateNode = t, n.return = e;
    var r = e.deletions;
    r === null ? (e.deletions = [n], e.flags |= Ei) : r.push(n);
  }
  function sv(e, t) {
    {
      if (Fi)
        return;
      switch (e.tag) {
        case _: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case W:
              var r = t.type;
              t.pendingProps, jD(n, r);
              break;
            case V:
              var a = t.pendingProps;
              BD(n, a);
              break;
          }
          break;
        }
        case W: {
          var i = e.type, o = e.memoizedProps, u = e.stateNode;
          switch (t.tag) {
            case W: {
              var l = t.type, v = t.pendingProps, h = (e.mode & _e) !== ie;
              $D(
                i,
                o,
                u,
                l,
                v,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case V: {
              var S = t.pendingProps, b = (e.mode & _e) !== ie;
              YD(
                i,
                o,
                u,
                S,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
          break;
        }
        case he: {
          var x = e.memoizedState, O = x.dehydrated;
          if (O !== null)
            switch (t.tag) {
              case W:
                var A = t.type;
                t.pendingProps, VD(O, A);
                break;
              case V:
                var G = t.pendingProps;
                PD(O, G);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function Qy(e, t) {
    t.flags = t.flags & ~ha | Tt, sv(e, t);
  }
  function Xy(e, t) {
    switch (e.tag) {
      case W: {
        var n = e.type;
        e.pendingProps;
        var r = bD(t, n);
        return r !== null ? (e.stateNode = r, It = e, sr = TD(r), !0) : !1;
      }
      case V: {
        var a = e.pendingProps, i = SD(t, a);
        return i !== null ? (e.stateNode = i, It = e, sr = null, !0) : !1;
      }
      case he: {
        var o = ED(t);
        if (o !== null) {
          var u = {
            dehydrated: o,
            treeContext: r0(),
            retryLane: Yn
          };
          e.memoizedState = u;
          var l = vw(o);
          return l.return = e, e.child = l, It = e, sr = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function cv(e) {
    return (e.mode & _e) !== ie && (e.flags & Be) === le;
  }
  function fv(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function dv(e) {
    if (Or) {
      var t = sr;
      if (!t) {
        cv(e) && (sv(It, e), fv()), Qy(It, e), Or = !1, It = e;
        return;
      }
      var n = t;
      if (!Xy(e, t)) {
        cv(e) && (sv(It, e), fv()), t = nl(n);
        var r = It;
        if (!t || !Xy(e, t)) {
          Qy(It, e), Or = !1, It = e;
          return;
        }
        Iy(r, n);
      }
    }
  }
  function s0(e, t, n) {
    var r = e.stateNode, a = !Fi, i = OD(r, e.type, e.memoizedProps, t, n, e, a);
    return e.updateQueue = i, i !== null;
  }
  function c0(e) {
    var t = e.stateNode, n = e.memoizedProps, r = _D(t, n, e);
    if (r) {
      var a = It;
      if (a !== null)
        switch (a.tag) {
          case _: {
            var i = a.stateNode.containerInfo, o = (a.mode & _e) !== ie;
            ND(
              i,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              o
            );
            break;
          }
          case W: {
            var u = a.type, l = a.memoizedProps, v = a.stateNode, h = (a.mode & _e) !== ie;
            kD(
              u,
              l,
              v,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              h
            );
            break;
          }
        }
    }
    return r;
  }
  function f0(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    wD(n, e);
  }
  function d0(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return AD(n);
  }
  function Ky(e) {
    for (var t = e.return; t !== null && t.tag !== W && t.tag !== _ && t.tag !== he; )
      t = t.return;
    It = t;
  }
  function ic(e) {
    if (e !== It)
      return !1;
    if (!Or)
      return Ky(e), Or = !0, !1;
    if (e.tag !== _ && (e.tag !== W || UD(e.type) && !Wd(e.type, e.memoizedProps))) {
      var t = sr;
      if (t)
        if (cv(e))
          Jy(e), fv();
        else
          for (; t; )
            Iy(e, t), t = nl(t);
    }
    return Ky(e), e.tag === he ? sr = d0(e) : sr = It ? nl(e.stateNode) : null, !0;
  }
  function v0() {
    return Or && sr !== null;
  }
  function Jy(e) {
    for (var t = sr; t; )
      Wy(e, t), t = nl(t);
  }
  function Mo() {
    It = null, sr = null, Or = !1, Fi = !1;
  }
  function Zy() {
    ei !== null && (Gb(ei), ei = null);
  }
  function Qt() {
    return Or;
  }
  function vv(e) {
    ei === null ? ei = [e] : ei.push(e);
  }
  var p0 = p.ReactCurrentBatchConfig, h0 = null;
  function m0() {
    return p0.transition;
  }
  var _r = {
    recordUnsafeLifecycleWarnings: function(e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function() {
    },
    recordLegacyContextWarning: function(e, t) {
    },
    flushLegacyContextWarning: function() {
    },
    discardPendingWarnings: function() {
    }
  };
  {
    var y0 = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & vt && (t = n), n = n.return;
      return t;
    }, Hi = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, ol = [], ul = [], ll = [], sl = [], cl = [], fl = [], ji = /* @__PURE__ */ new Set();
    _r.recordUnsafeLifecycleWarnings = function(e, t) {
      ji.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && ol.push(e), e.mode & vt && typeof t.UNSAFE_componentWillMount == "function" && ul.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ll.push(e), e.mode & vt && typeof t.UNSAFE_componentWillReceiveProps == "function" && sl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && cl.push(e), e.mode & vt && typeof t.UNSAFE_componentWillUpdate == "function" && fl.push(e));
    }, _r.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      ol.length > 0 && (ol.forEach(function(b) {
        e.add(ye(b) || "Component"), ji.add(b.type);
      }), ol = []);
      var t = /* @__PURE__ */ new Set();
      ul.length > 0 && (ul.forEach(function(b) {
        t.add(ye(b) || "Component"), ji.add(b.type);
      }), ul = []);
      var n = /* @__PURE__ */ new Set();
      ll.length > 0 && (ll.forEach(function(b) {
        n.add(ye(b) || "Component"), ji.add(b.type);
      }), ll = []);
      var r = /* @__PURE__ */ new Set();
      sl.length > 0 && (sl.forEach(function(b) {
        r.add(ye(b) || "Component"), ji.add(b.type);
      }), sl = []);
      var a = /* @__PURE__ */ new Set();
      cl.length > 0 && (cl.forEach(function(b) {
        a.add(ye(b) || "Component"), ji.add(b.type);
      }), cl = []);
      var i = /* @__PURE__ */ new Set();
      if (fl.length > 0 && (fl.forEach(function(b) {
        i.add(ye(b) || "Component"), ji.add(b.type);
      }), fl = []), t.size > 0) {
        var o = Hi(t);
        d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, o);
      }
      if (r.size > 0) {
        var u = Hi(r);
        d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, u);
      }
      if (i.size > 0) {
        var l = Hi(i);
        d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, l);
      }
      if (e.size > 0) {
        var v = Hi(e);
        C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, v);
      }
      if (n.size > 0) {
        var h = Hi(n);
        C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, h);
      }
      if (a.size > 0) {
        var S = Hi(a);
        C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
      }
    };
    var oc = /* @__PURE__ */ new Map(), eg = /* @__PURE__ */ new Set();
    _r.recordLegacyContextWarning = function(e, t) {
      var n = y0(e);
      if (n === null) {
        d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!eg.has(e.type)) {
        var r = oc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], oc.set(n, r)), r.push(e));
      }
    }, _r.flushLegacyContextWarning = function() {
      oc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], r = /* @__PURE__ */ new Set();
          e.forEach(function(i) {
            r.add(ye(i) || "Component"), eg.add(i.type);
          });
          var a = Hi(r);
          try {
            ct(n), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, a);
          } finally {
            Vt();
          }
        }
      });
    }, _r.discardPendingWarnings = function() {
      ol = [], ul = [], ll = [], sl = [], cl = [], fl = [], oc = /* @__PURE__ */ new Map();
    };
  }
  var pv, hv, mv, yv, gv, tg = function(e, t) {
  };
  pv = !1, hv = !1, mv = {}, yv = {}, gv = {}, tg = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = ye(t) || "Component";
      yv[n] || (yv[n] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function g0(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function dl(e, t, n) {
    var r = n.ref;
    if (r !== null && typeof r != "function" && typeof r != "object") {
      if ((e.mode & vt || zn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== F) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !g0(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var a = ye(e) || "Component";
        mv[a] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r), mv[a] = !0);
      }
      if (n._owner) {
        var i = n._owner, o;
        if (i) {
          var u = i;
          if (u.tag !== F)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          o = u.stateNode;
        }
        if (!o)
          throw new Error("Missing owner for string ref " + r + ". This error is likely caused by a bug in React. Please file an issue.");
        var l = o;
        Dn(r, "ref");
        var v = "" + r;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === v)
          return t.ref;
        var h = function(S) {
          var b = l.refs;
          S === null ? delete b[v] : b[v] = S;
        };
        return h._stringRef = v, h;
      } else {
        if (typeof r != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!n._owner)
          throw new Error("Element ref was specified as a string (" + r + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return r;
  }
  function uc(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function lc(e) {
    {
      var t = ye(e) || "Component";
      if (gv[t])
        return;
      gv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function ng(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function rg(e) {
    function t(R, M) {
      if (e) {
        var T = R.deletions;
        T === null ? (R.deletions = [M], R.flags |= Ei) : T.push(M);
      }
    }
    function n(R, M) {
      if (!e)
        return null;
      for (var T = M; T !== null; )
        t(R, T), T = T.sibling;
      return null;
    }
    function r(R, M) {
      for (var T = /* @__PURE__ */ new Map(), z = M; z !== null; )
        z.key !== null ? T.set(z.key, z) : T.set(z.index, z), z = z.sibling;
      return T;
    }
    function a(R, M) {
      var T = Ii(R, M);
      return T.index = 0, T.sibling = null, T;
    }
    function i(R, M, T) {
      if (R.index = T, !e)
        return R.flags |= om, M;
      var z = R.alternate;
      if (z !== null) {
        var K = z.index;
        return K < M ? (R.flags |= Tt, M) : K;
      } else
        return R.flags |= Tt, M;
    }
    function o(R) {
      return e && R.alternate === null && (R.flags |= Tt), R;
    }
    function u(R, M, T, z) {
      if (M === null || M.tag !== V) {
        var K = vh(T, R.mode, z);
        return K.return = R, K;
      } else {
        var I = a(M, T);
        return I.return = R, I;
      }
    }
    function l(R, M, T, z) {
      var K = T.type;
      if (K === Br)
        return h(R, M, T.props.children, z, T.key);
      if (M !== null && (M.elementType === K || // Keep this check inline so it only runs on the false path:
      lS(M, T) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof K == "object" && K !== null && K.$$typeof === ue && ng(K) === M.type)) {
        var I = a(M, T.props);
        return I.ref = dl(R, M, T), I.return = R, I._debugSource = T._source, I._debugOwner = T._owner, I;
      }
      var ce = dh(T, R.mode, z);
      return ce.ref = dl(R, M, T), ce.return = R, ce;
    }
    function v(R, M, T, z) {
      if (M === null || M.tag !== te || M.stateNode.containerInfo !== T.containerInfo || M.stateNode.implementation !== T.implementation) {
        var K = ph(T, R.mode, z);
        return K.return = R, K;
      } else {
        var I = a(M, T.children || []);
        return I.return = R, I;
      }
    }
    function h(R, M, T, z, K) {
      if (M === null || M.tag !== ne) {
        var I = fi(T, R.mode, z, K);
        return I.return = R, I;
      } else {
        var ce = a(M, T);
        return ce.return = R, ce;
      }
    }
    function S(R, M, T) {
      if (typeof M == "string" && M !== "" || typeof M == "number") {
        var z = vh("" + M, R.mode, T);
        return z.return = R, z;
      }
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Er: {
            var K = dh(M, R.mode, T);
            return K.ref = dl(R, null, M), K.return = R, K;
          }
          case Cr: {
            var I = ph(M, R.mode, T);
            return I.return = R, I;
          }
          case ue: {
            var ce = M._payload, pe = M._init;
            return S(R, pe(ce), T);
          }
        }
        if (je(M) || Pn(M)) {
          var Ie = fi(M, R.mode, T, null);
          return Ie.return = R, Ie;
        }
        uc(R, M);
      }
      return typeof M == "function" && lc(R), null;
    }
    function b(R, M, T, z) {
      var K = M !== null ? M.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return K !== null ? null : u(R, M, "" + T, z);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Er:
            return T.key === K ? l(R, M, T, z) : null;
          case Cr:
            return T.key === K ? v(R, M, T, z) : null;
          case ue: {
            var I = T._payload, ce = T._init;
            return b(R, M, ce(I), z);
          }
        }
        if (je(T) || Pn(T))
          return K !== null ? null : h(R, M, T, z, null);
        uc(R, T);
      }
      return typeof T == "function" && lc(R), null;
    }
    function x(R, M, T, z, K) {
      if (typeof z == "string" && z !== "" || typeof z == "number") {
        var I = R.get(T) || null;
        return u(M, I, "" + z, K);
      }
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Er: {
            var ce = R.get(z.key === null ? T : z.key) || null;
            return l(M, ce, z, K);
          }
          case Cr: {
            var pe = R.get(z.key === null ? T : z.key) || null;
            return v(M, pe, z, K);
          }
          case ue:
            var Ie = z._payload, ke = z._init;
            return x(R, M, T, ke(Ie), K);
        }
        if (je(z) || Pn(z)) {
          var bt = R.get(T) || null;
          return h(M, bt, z, K, null);
        }
        uc(M, z);
      }
      return typeof z == "function" && lc(M), null;
    }
    function O(R, M, T) {
      {
        if (typeof R != "object" || R === null)
          return M;
        switch (R.$$typeof) {
          case Er:
          case Cr:
            tg(R, T);
            var z = R.key;
            if (typeof z != "string")
              break;
            if (M === null) {
              M = /* @__PURE__ */ new Set(), M.add(z);
              break;
            }
            if (!M.has(z)) {
              M.add(z);
              break;
            }
            d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", z);
            break;
          case ue:
            var K = R._payload, I = R._init;
            O(I(K), M, T);
            break;
        }
      }
      return M;
    }
    function A(R, M, T, z) {
      for (var K = null, I = 0; I < T.length; I++) {
        var ce = T[I];
        K = O(ce, K, R);
      }
      for (var pe = null, Ie = null, ke = M, bt = 0, ze = 0, pt = null; ke !== null && ze < T.length; ze++) {
        ke.index > ze ? (pt = ke, ke = null) : pt = ke.sibling;
        var dn = b(R, ke, T[ze], z);
        if (dn === null) {
          ke === null && (ke = pt);
          break;
        }
        e && ke && dn.alternate === null && t(R, ke), bt = i(dn, bt, ze), Ie === null ? pe = dn : Ie.sibling = dn, Ie = dn, ke = pt;
      }
      if (ze === T.length) {
        if (n(R, ke), Qt()) {
          var nn = ze;
          ki(R, nn);
        }
        return pe;
      }
      if (ke === null) {
        for (; ze < T.length; ze++) {
          var Kn = S(R, T[ze], z);
          Kn !== null && (bt = i(Kn, bt, ze), Ie === null ? pe = Kn : Ie.sibling = Kn, Ie = Kn);
        }
        if (Qt()) {
          var Sn = ze;
          ki(R, Sn);
        }
        return pe;
      }
      for (var En = r(R, ke); ze < T.length; ze++) {
        var vn = x(En, R, ze, T[ze], z);
        vn !== null && (e && vn.alternate !== null && En.delete(vn.key === null ? ze : vn.key), bt = i(vn, bt, ze), Ie === null ? pe = vn : Ie.sibling = vn, Ie = vn);
      }
      if (e && En.forEach(function(Xo) {
        return t(R, Xo);
      }), Qt()) {
        var La = ze;
        ki(R, La);
      }
      return pe;
    }
    function G(R, M, T, z) {
      var K = Pn(T);
      if (typeof K != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        T[Symbol.toStringTag] === "Generator" && (hv || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hv = !0), T.entries === K && (pv || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pv = !0);
        var I = K.call(T);
        if (I)
          for (var ce = null, pe = I.next(); !pe.done; pe = I.next()) {
            var Ie = pe.value;
            ce = O(Ie, ce, R);
          }
      }
      var ke = K.call(T);
      if (ke == null)
        throw new Error("An iterable object provided no iterator.");
      for (var bt = null, ze = null, pt = M, dn = 0, nn = 0, Kn = null, Sn = ke.next(); pt !== null && !Sn.done; nn++, Sn = ke.next()) {
        pt.index > nn ? (Kn = pt, pt = null) : Kn = pt.sibling;
        var En = b(R, pt, Sn.value, z);
        if (En === null) {
          pt === null && (pt = Kn);
          break;
        }
        e && pt && En.alternate === null && t(R, pt), dn = i(En, dn, nn), ze === null ? bt = En : ze.sibling = En, ze = En, pt = Kn;
      }
      if (Sn.done) {
        if (n(R, pt), Qt()) {
          var vn = nn;
          ki(R, vn);
        }
        return bt;
      }
      if (pt === null) {
        for (; !Sn.done; nn++, Sn = ke.next()) {
          var La = S(R, Sn.value, z);
          La !== null && (dn = i(La, dn, nn), ze === null ? bt = La : ze.sibling = La, ze = La);
        }
        if (Qt()) {
          var Xo = nn;
          ki(R, Xo);
        }
        return bt;
      }
      for (var Yl = r(R, pt); !Sn.done; nn++, Sn = ke.next()) {
        var ta = x(Yl, R, nn, Sn.value, z);
        ta !== null && (e && ta.alternate !== null && Yl.delete(ta.key === null ? nn : ta.key), dn = i(ta, dn, nn), ze === null ? bt = ta : ze.sibling = ta, ze = ta);
      }
      if (e && Yl.forEach(function(Yw) {
        return t(R, Yw);
      }), Qt()) {
        var $w = nn;
        ki(R, $w);
      }
      return bt;
    }
    function ae(R, M, T, z) {
      if (M !== null && M.tag === V) {
        n(R, M.sibling);
        var K = a(M, T);
        return K.return = R, K;
      }
      n(R, M);
      var I = vh(T, R.mode, z);
      return I.return = R, I;
    }
    function ee(R, M, T, z) {
      for (var K = T.key, I = M; I !== null; ) {
        if (I.key === K) {
          var ce = T.type;
          if (ce === Br) {
            if (I.tag === ne) {
              n(R, I.sibling);
              var pe = a(I, T.props.children);
              return pe.return = R, pe._debugSource = T._source, pe._debugOwner = T._owner, pe;
            }
          } else if (I.elementType === ce || // Keep this check inline so it only runs on the false path:
          lS(I, T) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof ce == "object" && ce !== null && ce.$$typeof === ue && ng(ce) === I.type) {
            n(R, I.sibling);
            var Ie = a(I, T.props);
            return Ie.ref = dl(R, I, T), Ie.return = R, Ie._debugSource = T._source, Ie._debugOwner = T._owner, Ie;
          }
          n(R, I);
          break;
        } else
          t(R, I);
        I = I.sibling;
      }
      if (T.type === Br) {
        var ke = fi(T.props.children, R.mode, z, T.key);
        return ke.return = R, ke;
      } else {
        var bt = dh(T, R.mode, z);
        return bt.ref = dl(R, M, T), bt.return = R, bt;
      }
    }
    function Ae(R, M, T, z) {
      for (var K = T.key, I = M; I !== null; ) {
        if (I.key === K)
          if (I.tag === te && I.stateNode.containerInfo === T.containerInfo && I.stateNode.implementation === T.implementation) {
            n(R, I.sibling);
            var ce = a(I, T.children || []);
            return ce.return = R, ce;
          } else {
            n(R, I);
            break;
          }
        else
          t(R, I);
        I = I.sibling;
      }
      var pe = ph(T, R.mode, z);
      return pe.return = R, pe;
    }
    function xe(R, M, T, z) {
      var K = typeof T == "object" && T !== null && T.type === Br && T.key === null;
      if (K && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Er:
            return o(ee(R, M, T, z));
          case Cr:
            return o(Ae(R, M, T, z));
          case ue:
            var I = T._payload, ce = T._init;
            return xe(R, M, ce(I), z);
        }
        if (je(T))
          return A(R, M, T, z);
        if (Pn(T))
          return G(R, M, T, z);
        uc(R, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? o(ae(R, M, "" + T, z)) : (typeof T == "function" && lc(R), n(R, M));
    }
    return xe;
  }
  var Lo = rg(!0), ag = rg(!1);
  function b0(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, r = Ii(n, n.pendingProps);
      for (t.child = r, r.return = t; n.sibling !== null; )
        n = n.sibling, r = r.sibling = Ii(n, n.pendingProps), r.return = t;
      r.sibling = null;
    }
  }
  function S0(e, t) {
    for (var n = e.child; n !== null; )
      uw(n, t), n = n.sibling;
  }
  var bv = Ka(null), Sv;
  Sv = {};
  var sc = null, Uo = null, Ev = null, cc = !1;
  function fc() {
    sc = null, Uo = null, Ev = null, cc = !1;
  }
  function ig() {
    cc = !0;
  }
  function og() {
    cc = !1;
  }
  function ug(e, t, n) {
    cn(bv, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Sv && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Sv;
  }
  function Cv(e, t) {
    var n = bv.current;
    sn(bv, t), e._currentValue = n;
  }
  function Rv(e, t, n) {
    for (var r = e; r !== null; ) {
      var a = r.alternate;
      if (yo(r.childLanes, t) ? a !== null && !yo(a.childLanes, t) && (a.childLanes = be(a.childLanes, t)) : (r.childLanes = be(r.childLanes, t), a !== null && (a.childLanes = be(a.childLanes, t))), r === n)
        break;
      r = r.return;
    }
    r !== n && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function E0(e, t, n) {
    C0(e, t, n);
  }
  function C0(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var a = void 0, i = r.dependencies;
      if (i !== null) {
        a = r.child;
        for (var o = i.firstContext; o !== null; ) {
          if (o.context === t) {
            if (r.tag === F) {
              var u = Au(n), l = Da(nt, u);
              l.tag = vc;
              var v = r.updateQueue;
              if (v !== null) {
                var h = v.shared, S = h.pending;
                S === null ? l.next = l : (l.next = S.next, S.next = l), h.pending = l;
              }
            }
            r.lanes = be(r.lanes, n);
            var b = r.alternate;
            b !== null && (b.lanes = be(b.lanes, n)), Rv(r.return, n, e), i.lanes = be(i.lanes, n);
            break;
          }
          o = o.next;
        }
      } else if (r.tag === Se)
        a = r.type === e.type ? null : r.child;
      else if (r.tag === Et) {
        var x = r.return;
        if (x === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        x.lanes = be(x.lanes, n);
        var O = x.alternate;
        O !== null && (O.lanes = be(O.lanes, n)), Rv(x, n, e), a = r.sibling;
      } else
        a = r.child;
      if (a !== null)
        a.return = r;
      else
        for (a = r; a !== null; ) {
          if (a === e) {
            a = null;
            break;
          }
          var A = a.sibling;
          if (A !== null) {
            A.return = a.return, a = A;
            break;
          }
          a = a.return;
        }
      r = a;
    }
  }
  function No(e, t) {
    sc = e, Uo = null, Ev = null;
    var n = e.dependencies;
    if (n !== null) {
      var r = n.firstContext;
      r !== null && (qn(n.lanes, t) && Ol(), n.firstContext = null);
    }
  }
  function xt(e) {
    cc && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Ev !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Uo === null) {
        if (sc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Uo = n, sc.dependencies = {
          lanes: N,
          firstContext: n
        };
      } else
        Uo = Uo.next = n;
    }
    return t;
  }
  var Bi = null;
  function Tv(e) {
    Bi === null ? Bi = [e] : Bi.push(e);
  }
  function R0() {
    if (Bi !== null) {
      for (var e = 0; e < Bi.length; e++) {
        var t = Bi[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var r = n.next, a = t.pending;
          if (a !== null) {
            var i = a.next;
            a.next = r, n.next = i;
          }
          t.pending = n;
        }
      }
      Bi = null;
    }
  }
  function lg(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Tv(t)) : (n.next = a.next, a.next = n), t.interleaved = n, dc(e, r);
  }
  function T0(e, t, n, r) {
    var a = t.interleaved;
    a === null ? (n.next = n, Tv(t)) : (n.next = a.next, a.next = n), t.interleaved = n;
  }
  function x0(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Tv(t)) : (n.next = a.next, a.next = n), t.interleaved = n, dc(e, r);
  }
  function Mn(e, t) {
    return dc(e, t);
  }
  var D0 = dc;
  function dc(e, t) {
    e.lanes = be(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = be(n.lanes, t)), n === null && (e.flags & (Tt | ha)) !== le && aS(e);
    for (var r = e, a = e.return; a !== null; )
      a.childLanes = be(a.childLanes, t), n = a.alternate, n !== null ? n.childLanes = be(n.childLanes, t) : (a.flags & (Tt | ha)) !== le && aS(e), r = a, a = a.return;
    if (r.tag === _) {
      var i = r.stateNode;
      return i;
    } else
      return null;
  }
  var sg = 0, cg = 1, vc = 2, xv = 3, pc = !1, Dv, hc;
  Dv = !1, hc = null;
  function Ov(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: N
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function fg(e, t) {
    var n = t.updateQueue, r = e.updateQueue;
    if (n === r) {
      var a = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        effects: r.effects
      };
      t.updateQueue = a;
    }
  }
  function Da(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: sg,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function ti(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    var a = r.shared;
    if (hc === a && !Dv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Dv = !0), T_()) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, D0(e, n);
    } else
      return x0(e, a, t, n);
  }
  function mc(e, t, n) {
    var r = t.updateQueue;
    if (r !== null) {
      var a = r.shared;
      if (Tm(n)) {
        var i = a.lanes;
        i = Dm(i, e.pendingLanes);
        var o = be(i, n);
        a.lanes = o, bd(e, o);
      }
    }
  }
  function _v(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null) {
      var a = r.updateQueue;
      if (n === a) {
        var i = null, o = null, u = n.firstBaseUpdate;
        if (u !== null) {
          var l = u;
          do {
            var v = {
              eventTime: l.eventTime,
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            };
            o === null ? i = o = v : (o.next = v, o = v), l = l.next;
          } while (l !== null);
          o === null ? i = o = t : (o.next = t, o = t);
        } else
          i = o = t;
        n = {
          baseState: a.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: o,
          shared: a.shared,
          effects: a.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var h = n.lastBaseUpdate;
    h === null ? n.firstBaseUpdate = t : h.next = t, n.lastBaseUpdate = t;
  }
  function O0(e, t, n, r, a, i) {
    switch (n.tag) {
      case cg: {
        var o = n.payload;
        if (typeof o == "function") {
          ig();
          var u = o.call(i, r, a);
          {
            if (e.mode & vt) {
              $t(!0);
              try {
                o.call(i, r, a);
              } finally {
                $t(!1);
              }
            }
            og();
          }
          return u;
        }
        return o;
      }
      case xv:
        e.flags = e.flags & ~mn | Be;
      case sg: {
        var l = n.payload, v;
        if (typeof l == "function") {
          ig(), v = l.call(i, r, a);
          {
            if (e.mode & vt) {
              $t(!0);
              try {
                l.call(i, r, a);
              } finally {
                $t(!1);
              }
            }
            og();
          }
        } else
          v = l;
        return v == null ? r : Te({}, r, v);
      }
      case vc:
        return pc = !0, r;
    }
    return r;
  }
  function yc(e, t, n, r) {
    var a = e.updateQueue;
    pc = !1, hc = a.shared;
    var i = a.firstBaseUpdate, o = a.lastBaseUpdate, u = a.shared.pending;
    if (u !== null) {
      a.shared.pending = null;
      var l = u, v = l.next;
      l.next = null, o === null ? i = v : o.next = v, o = l;
      var h = e.alternate;
      if (h !== null) {
        var S = h.updateQueue, b = S.lastBaseUpdate;
        b !== o && (b === null ? S.firstBaseUpdate = v : b.next = v, S.lastBaseUpdate = l);
      }
    }
    if (i !== null) {
      var x = a.baseState, O = N, A = null, G = null, ae = null, ee = i;
      do {
        var Ae = ee.lane, xe = ee.eventTime;
        if (yo(r, Ae)) {
          if (ae !== null) {
            var M = {
              eventTime: xe,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Yt,
              tag: ee.tag,
              payload: ee.payload,
              callback: ee.callback,
              next: null
            };
            ae = ae.next = M;
          }
          x = O0(e, a, ee, x, t, n);
          var T = ee.callback;
          if (T !== null && // If the update was already committed, we should not queue its
          // callback again.
          ee.lane !== Yt) {
            e.flags |= Bf;
            var z = a.effects;
            z === null ? a.effects = [ee] : z.push(ee);
          }
        } else {
          var R = {
            eventTime: xe,
            lane: Ae,
            tag: ee.tag,
            payload: ee.payload,
            callback: ee.callback,
            next: null
          };
          ae === null ? (G = ae = R, A = x) : ae = ae.next = R, O = be(O, Ae);
        }
        if (ee = ee.next, ee === null) {
          if (u = a.shared.pending, u === null)
            break;
          var K = u, I = K.next;
          K.next = null, ee = I, a.lastBaseUpdate = K, a.shared.pending = null;
        }
      } while (!0);
      ae === null && (A = x), a.baseState = A, a.firstBaseUpdate = G, a.lastBaseUpdate = ae;
      var ce = a.shared.interleaved;
      if (ce !== null) {
        var pe = ce;
        do
          O = be(O, pe.lane), pe = pe.next;
        while (pe !== ce);
      } else
        i === null && (a.shared.lanes = N);
      jl(O), e.lanes = O, e.memoizedState = x;
    }
    hc = null;
  }
  function _0(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function dg() {
    pc = !1;
  }
  function gc() {
    return pc;
  }
  function vg(e, t, n) {
    var r = t.effects;
    if (t.effects = null, r !== null)
      for (var a = 0; a < r.length; a++) {
        var i = r[a], o = i.callback;
        o !== null && (i.callback = null, _0(o, n));
      }
  }
  var vl = {}, ni = Ka(vl), pl = Ka(vl), bc = Ka(vl);
  function Sc(e) {
    if (e === vl)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function pg() {
    var e = Sc(bc.current);
    return e;
  }
  function wv(e, t) {
    cn(bc, t, e), cn(pl, e, e), cn(ni, vl, e);
    var n = qx(t);
    sn(ni, e), cn(ni, n, e);
  }
  function ko(e) {
    sn(ni, e), sn(pl, e), sn(bc, e);
  }
  function Av() {
    var e = Sc(ni.current);
    return e;
  }
  function hg(e) {
    Sc(bc.current);
    var t = Sc(ni.current), n = Gx(t, e.type);
    t !== n && (cn(pl, e, e), cn(ni, n, e));
  }
  function Mv(e) {
    pl.current === e && (sn(ni, e), sn(pl, e));
  }
  var w0 = 0, mg = 1, yg = 1, hl = 2, wr = Ka(w0);
  function Lv(e, t) {
    return (e & t) !== 0;
  }
  function zo(e) {
    return e & mg;
  }
  function Uv(e, t) {
    return e & mg | t;
  }
  function A0(e, t) {
    return e | t;
  }
  function ri(e, t) {
    cn(wr, t, e);
  }
  function Fo(e) {
    sn(wr, e);
  }
  function M0(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function Ec(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === he) {
        var n = t.memoizedState;
        if (n !== null) {
          var r = n.dehydrated;
          if (r === null || Ny(r) || Kd(r))
            return t;
        }
      } else if (t.tag === et && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var a = (t.flags & Be) !== le;
        if (a)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ln = (
    /*   */
    0
  ), At = (
    /* */
    1
  ), Ir = (
    /*  */
    2
  ), Mt = (
    /*    */
    4
  ), Xt = (
    /*   */
    8
  ), Nv = [];
  function kv() {
    for (var e = 0; e < Nv.length; e++) {
      var t = Nv[e];
      t._workInProgressVersionPrimary = null;
    }
    Nv.length = 0;
  }
  function L0(e, t) {
    var n = t._getVersion, r = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
  }
  var X = p.ReactCurrentDispatcher, ml = p.ReactCurrentBatchConfig, zv, Ho;
  zv = /* @__PURE__ */ new Set();
  var Vi = N, We = null, Lt = null, Ut = null, Cc = !1, yl = !1, gl = 0, U0 = 0, N0 = 25, L = null, cr = null, ai = -1, Fv = !1;
  function Ve() {
    {
      var e = L;
      cr === null ? cr = [e] : cr.push(e);
    }
  }
  function $() {
    {
      var e = L;
      cr !== null && (ai++, cr[ai] !== e && k0(e));
    }
  }
  function jo(e) {
    e != null && !je(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", L, typeof e);
  }
  function k0(e) {
    {
      var t = ye(We);
      if (!zv.has(t) && (zv.add(t), cr !== null)) {
        for (var n = "", r = 30, a = 0; a <= ai; a++) {
          for (var i = cr[a], o = a === ai ? e : i, u = a + 1 + ". " + i; u.length < r; )
            u += " ";
          u += o + `
`, n += u;
        }
        d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
      }
    }
  }
  function fn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Hv(e, t) {
    if (Fv)
      return !1;
    if (t === null)
      return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", L), !1;
    e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, L, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!In(e[n], t[n]))
        return !1;
    return !0;
  }
  function Bo(e, t, n, r, a, i) {
    Vi = i, We = t, cr = e !== null ? e._debugHookTypes : null, ai = -1, Fv = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = N, e !== null && e.memoizedState !== null ? X.current = jg : cr !== null ? X.current = Hg : X.current = Fg;
    var o = n(r, a);
    if (yl) {
      var u = 0;
      do {
        if (yl = !1, gl = 0, u >= N0)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        u += 1, Fv = !1, Lt = null, Ut = null, t.updateQueue = null, ai = -1, X.current = Bg, o = n(r, a);
      } while (yl);
    }
    X.current = kc, t._debugHookTypes = cr;
    var l = Lt !== null && Lt.next !== null;
    if (Vi = N, We = null, Lt = null, Ut = null, L = null, cr = null, ai = -1, e !== null && (e.flags & ya) !== (t.flags & ya) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & _e) !== ie && d("Internal React error: Expected static flag was missing. Please notify the React team."), Cc = !1, l)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return o;
  }
  function Vo() {
    var e = gl !== 0;
    return gl = 0, e;
  }
  function gg(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Yr) !== ie ? t.flags &= ~(ms | ma | Rr | Le) : t.flags &= ~(Rr | Le), e.lanes = Rs(e.lanes, n);
  }
  function bg() {
    if (X.current = kc, Cc) {
      for (var e = We.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Cc = !1;
    }
    Vi = N, We = null, Lt = null, Ut = null, cr = null, ai = -1, L = null, Lg = !1, yl = !1, gl = 0;
  }
  function Qr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? We.memoizedState = Ut = e : Ut = Ut.next = e, Ut;
  }
  function fr() {
    var e;
    if (Lt === null) {
      var t = We.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = Lt.next;
    var n;
    if (Ut === null ? n = We.memoizedState : n = Ut.next, n !== null)
      Ut = n, n = Ut.next, Lt = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      Lt = e;
      var r = {
        memoizedState: Lt.memoizedState,
        baseState: Lt.baseState,
        baseQueue: Lt.baseQueue,
        queue: Lt.queue,
        next: null
      };
      Ut === null ? We.memoizedState = Ut = r : Ut = Ut.next = r;
    }
    return Ut;
  }
  function Sg() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function jv(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bv(e, t, n) {
    var r = Qr(), a;
    n !== void 0 ? a = n(t) : a = t, r.memoizedState = r.baseState = a;
    var i = {
      pending: null,
      interleaved: null,
      lanes: N,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: a
    };
    r.queue = i;
    var o = i.dispatch = j0.bind(null, We, i);
    return [r.memoizedState, o];
  }
  function Vv(e, t, n) {
    var r = fr(), a = r.queue;
    if (a === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    a.lastRenderedReducer = e;
    var i = Lt, o = i.baseQueue, u = a.pending;
    if (u !== null) {
      if (o !== null) {
        var l = o.next, v = u.next;
        o.next = v, u.next = l;
      }
      i.baseQueue !== o && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = o = u, a.pending = null;
    }
    if (o !== null) {
      var h = o.next, S = i.baseState, b = null, x = null, O = null, A = h;
      do {
        var G = A.lane;
        if (yo(Vi, G)) {
          if (O !== null) {
            var ee = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Yt,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            };
            O = O.next = ee;
          }
          if (A.hasEagerState)
            S = A.eagerState;
          else {
            var Ae = A.action;
            S = e(S, Ae);
          }
        } else {
          var ae = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          O === null ? (x = O = ae, b = S) : O = O.next = ae, We.lanes = be(We.lanes, G), jl(G);
        }
        A = A.next;
      } while (A !== null && A !== h);
      O === null ? b = S : O.next = x, In(S, r.memoizedState) || Ol(), r.memoizedState = S, r.baseState = b, r.baseQueue = O, a.lastRenderedState = S;
    }
    var xe = a.interleaved;
    if (xe !== null) {
      var R = xe;
      do {
        var M = R.lane;
        We.lanes = be(We.lanes, M), jl(M), R = R.next;
      } while (R !== xe);
    } else
      o === null && (a.lanes = N);
    var T = a.dispatch;
    return [r.memoizedState, T];
  }
  function Pv(e, t, n) {
    var r = fr(), a = r.queue;
    if (a === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    a.lastRenderedReducer = e;
    var i = a.dispatch, o = a.pending, u = r.memoizedState;
    if (o !== null) {
      a.pending = null;
      var l = o.next, v = l;
      do {
        var h = v.action;
        u = e(u, h), v = v.next;
      } while (v !== l);
      In(u, r.memoizedState) || Ol(), r.memoizedState = u, r.baseQueue === null && (r.baseState = u), a.lastRenderedState = u;
    }
    return [u, i];
  }
  function dM(e, t, n) {
  }
  function vM(e, t, n) {
  }
  function $v(e, t, n) {
    var r = We, a = Qr(), i, o = Qt();
    if (o) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      i = n(), Ho || i !== n() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ho = !0);
    } else {
      if (i = t(), !Ho) {
        var u = t();
        In(i, u) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Ho = !0);
      }
      var l = ef();
      if (l === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      Cs(l, Vi) || Eg(r, t, i);
    }
    a.memoizedState = i;
    var v = {
      value: i,
      getSnapshot: t
    };
    return a.queue = v, Oc(Rg.bind(null, r, v, e), [e]), r.flags |= Rr, bl(At | Xt, Cg.bind(null, r, v, i, t), void 0, null), i;
  }
  function Rc(e, t, n) {
    var r = We, a = fr(), i = t();
    if (!Ho) {
      var o = t();
      In(i, o) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Ho = !0);
    }
    var u = a.memoizedState, l = !In(u, i);
    l && (a.memoizedState = i, Ol());
    var v = a.queue;
    if (El(Rg.bind(null, r, v, e), [e]), v.getSnapshot !== t || l || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Ut !== null && Ut.memoizedState.tag & At) {
      r.flags |= Rr, bl(At | Xt, Cg.bind(null, r, v, i, t), void 0, null);
      var h = ef();
      if (h === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      Cs(h, Vi) || Eg(r, t, i);
    }
    return i;
  }
  function Eg(e, t, n) {
    e.flags |= hs;
    var r = {
      getSnapshot: t,
      value: n
    }, a = We.updateQueue;
    if (a === null)
      a = Sg(), We.updateQueue = a, a.stores = [r];
    else {
      var i = a.stores;
      i === null ? a.stores = [r] : i.push(r);
    }
  }
  function Cg(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Tg(t) && xg(e);
  }
  function Rg(e, t, n) {
    var r = function() {
      Tg(t) && xg(e);
    };
    return n(r);
  }
  function Tg(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var r = t();
      return !In(n, r);
    } catch {
      return !0;
    }
  }
  function xg(e) {
    var t = Mn(e, de);
    t !== null && Ft(t, e, de, nt);
  }
  function Tc(e) {
    var t = Qr();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: N,
      dispatch: null,
      lastRenderedReducer: jv,
      lastRenderedState: e
    };
    t.queue = n;
    var r = n.dispatch = B0.bind(null, We, n);
    return [t.memoizedState, r];
  }
  function Yv(e) {
    return Vv(jv);
  }
  function qv(e) {
    return Pv(jv);
  }
  function bl(e, t, n, r) {
    var a = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      // Circular
      next: null
    }, i = We.updateQueue;
    if (i === null)
      i = Sg(), We.updateQueue = i, i.lastEffect = a.next = a;
    else {
      var o = i.lastEffect;
      if (o === null)
        i.lastEffect = a.next = a;
      else {
        var u = o.next;
        o.next = a, a.next = u, i.lastEffect = a;
      }
    }
    return a;
  }
  function Gv(e) {
    var t = Qr();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function xc(e) {
    var t = fr();
    return t.memoizedState;
  }
  function Sl(e, t, n, r) {
    var a = Qr(), i = r === void 0 ? null : r;
    We.flags |= e, a.memoizedState = bl(At | t, n, void 0, i);
  }
  function Dc(e, t, n, r) {
    var a = fr(), i = r === void 0 ? null : r, o = void 0;
    if (Lt !== null) {
      var u = Lt.memoizedState;
      if (o = u.destroy, i !== null) {
        var l = u.deps;
        if (Hv(i, l)) {
          a.memoizedState = bl(t, n, o, i);
          return;
        }
      }
    }
    We.flags |= e, a.memoizedState = bl(At | t, n, o, i);
  }
  function Oc(e, t) {
    return (We.mode & Yr) !== ie ? Sl(ms | Rr | $f, Xt, e, t) : Sl(Rr | $f, Xt, e, t);
  }
  function El(e, t) {
    return Dc(Rr, Xt, e, t);
  }
  function Wv(e, t) {
    return Sl(Le, Ir, e, t);
  }
  function _c(e, t) {
    return Dc(Le, Ir, e, t);
  }
  function Iv(e, t) {
    var n = Le;
    return n |= Ti, (We.mode & Yr) !== ie && (n |= ma), Sl(n, Mt, e, t);
  }
  function wc(e, t) {
    return Dc(Le, Mt, e, t);
  }
  function Dg(e, t) {
    if (typeof t == "function") {
      var n = t, r = e();
      return n(r), function() {
        n(null);
      };
    } else if (t != null) {
      var a = t;
      a.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(a).join(", ") + "}");
      var i = e();
      return a.current = i, function() {
        a.current = null;
      };
    }
  }
  function Qv(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null, a = Le;
    return a |= Ti, (We.mode & Yr) !== ie && (a |= ma), Sl(a, Mt, Dg.bind(null, t, e), r);
  }
  function Ac(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null;
    return Dc(Le, Mt, Dg.bind(null, t, e), r);
  }
  function z0(e, t) {
  }
  var Mc = z0;
  function Xv(e, t) {
    var n = Qr(), r = t === void 0 ? null : t;
    return n.memoizedState = [e, r], e;
  }
  function Lc(e, t) {
    var n = fr(), r = t === void 0 ? null : t, a = n.memoizedState;
    if (a !== null && r !== null) {
      var i = a[1];
      if (Hv(r, i))
        return a[0];
    }
    return n.memoizedState = [e, r], e;
  }
  function Kv(e, t) {
    var n = Qr(), r = t === void 0 ? null : t, a = e();
    return n.memoizedState = [a, r], a;
  }
  function Uc(e, t) {
    var n = fr(), r = t === void 0 ? null : t, a = n.memoizedState;
    if (a !== null && r !== null) {
      var i = a[1];
      if (Hv(r, i))
        return a[0];
    }
    var o = e();
    return n.memoizedState = [o, r], o;
  }
  function Jv(e) {
    var t = Qr();
    return t.memoizedState = e, e;
  }
  function Og(e) {
    var t = fr(), n = Lt, r = n.memoizedState;
    return wg(t, r, e);
  }
  function _g(e) {
    var t = fr();
    if (Lt === null)
      return t.memoizedState = e, e;
    var n = Lt.memoizedState;
    return wg(t, n, e);
  }
  function wg(e, t, n) {
    var r = !ER(Vi);
    if (r) {
      if (!In(n, t)) {
        var a = xm();
        We.lanes = be(We.lanes, a), jl(a), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, Ol()), e.memoizedState = n, n;
  }
  function F0(e, t, n) {
    var r = xr();
    qt(AR(r, ba)), e(!0);
    var a = ml.transition;
    ml.transition = {};
    var i = ml.transition;
    ml.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (qt(r), ml.transition = a, a === null && i._updatedFibers) {
        var o = i._updatedFibers.size;
        o > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
      }
    }
  }
  function Zv() {
    var e = Tc(!1), t = e[0], n = e[1], r = F0.bind(null, n), a = Qr();
    return a.memoizedState = r, [t, r];
  }
  function Ag() {
    var e = Yv(), t = e[0], n = fr(), r = n.memoizedState;
    return [t, r];
  }
  function Mg() {
    var e = qv(), t = e[0], n = fr(), r = n.memoizedState;
    return [t, r];
  }
  var Lg = !1;
  function H0() {
    return Lg;
  }
  function ep() {
    var e = Qr(), t = ef(), n = t.identifierPrefix, r;
    if (Qt()) {
      var a = t0();
      r = ":" + n + "R" + a;
      var i = gl++;
      i > 0 && (r += "H" + i.toString(32)), r += ":";
    } else {
      var o = U0++;
      r = ":" + n + "r" + o.toString(32) + ":";
    }
    return e.memoizedState = r, r;
  }
  function Nc() {
    var e = fr(), t = e.memoizedState;
    return t;
  }
  function j0(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = si(e), a = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ug(e))
      Ng(t, a);
    else {
      var i = lg(e, t, a, r);
      if (i !== null) {
        var o = bn();
        Ft(i, e, r, o), kg(i, t, r);
      }
    }
    zg(e, r);
  }
  function B0(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = si(e), a = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ug(e))
      Ng(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === N && (i === null || i.lanes === N)) {
        var o = t.lastRenderedReducer;
        if (o !== null) {
          var u;
          u = X.current, X.current = Ar;
          try {
            var l = t.lastRenderedState, v = o(l, n);
            if (a.hasEagerState = !0, a.eagerState = v, In(v, l)) {
              T0(e, t, a, r);
              return;
            }
          } catch {
          } finally {
            X.current = u;
          }
        }
      }
      var h = lg(e, t, a, r);
      if (h !== null) {
        var S = bn();
        Ft(h, e, r, S), kg(h, t, r);
      }
    }
    zg(e, r);
  }
  function Ug(e) {
    var t = e.alternate;
    return e === We || t !== null && t === We;
  }
  function Ng(e, t) {
    yl = Cc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function kg(e, t, n) {
    if (Tm(n)) {
      var r = t.lanes;
      r = Dm(r, e.pendingLanes);
      var a = be(r, n);
      t.lanes = a, bd(e, a);
    }
  }
  function zg(e, t, n) {
    If(e, t);
  }
  var kc = {
    readContext: xt,
    useCallback: fn,
    useContext: fn,
    useEffect: fn,
    useImperativeHandle: fn,
    useInsertionEffect: fn,
    useLayoutEffect: fn,
    useMemo: fn,
    useReducer: fn,
    useRef: fn,
    useState: fn,
    useDebugValue: fn,
    useDeferredValue: fn,
    useTransition: fn,
    useMutableSource: fn,
    useSyncExternalStore: fn,
    useId: fn,
    unstable_isNewReconciler: Gt
  }, Fg = null, Hg = null, jg = null, Bg = null, Xr = null, Ar = null, zc = null;
  {
    var tp = function() {
      d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, ve = function() {
      d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Fg = {
      readContext: function(e) {
        return xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", Ve(), jo(t), Xv(e, t);
      },
      useContext: function(e) {
        return L = "useContext", Ve(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", Ve(), jo(t), Oc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", Ve(), jo(n), Qv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", Ve(), jo(t), Wv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", Ve(), jo(t), Iv(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", Ve(), jo(t);
        var n = X.current;
        X.current = Xr;
        try {
          return Kv(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", Ve();
        var r = X.current;
        X.current = Xr;
        try {
          return Bv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", Ve(), Gv(e);
      },
      useState: function(e) {
        L = "useState", Ve();
        var t = X.current;
        X.current = Xr;
        try {
          return Tc(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", Ve(), void 0;
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", Ve(), Jv(e);
      },
      useTransition: function() {
        return L = "useTransition", Ve(), Zv();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", Ve(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", Ve(), $v(e, t, n);
      },
      useId: function() {
        return L = "useId", Ve(), ep();
      },
      unstable_isNewReconciler: Gt
    }, Hg = {
      readContext: function(e) {
        return xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", $(), Xv(e, t);
      },
      useContext: function(e) {
        return L = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", $(), Oc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", $(), Qv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", $(), Wv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", $(), Iv(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", $();
        var n = X.current;
        X.current = Xr;
        try {
          return Kv(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", $();
        var r = X.current;
        X.current = Xr;
        try {
          return Bv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", $(), Gv(e);
      },
      useState: function(e) {
        L = "useState", $();
        var t = X.current;
        X.current = Xr;
        try {
          return Tc(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", $(), void 0;
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", $(), Jv(e);
      },
      useTransition: function() {
        return L = "useTransition", $(), Zv();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", $(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", $(), $v(e, t, n);
      },
      useId: function() {
        return L = "useId", $(), ep();
      },
      unstable_isNewReconciler: Gt
    }, jg = {
      readContext: function(e) {
        return xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", $(), Lc(e, t);
      },
      useContext: function(e) {
        return L = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", $(), El(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", $(), Ac(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", $(), _c(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", $(), wc(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", $();
        var n = X.current;
        X.current = Ar;
        try {
          return Uc(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", $();
        var r = X.current;
        X.current = Ar;
        try {
          return Vv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", $(), xc();
      },
      useState: function(e) {
        L = "useState", $();
        var t = X.current;
        X.current = Ar;
        try {
          return Yv(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", $(), Mc();
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", $(), Og(e);
      },
      useTransition: function() {
        return L = "useTransition", $(), Ag();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", $(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", $(), Rc(e, t);
      },
      useId: function() {
        return L = "useId", $(), Nc();
      },
      unstable_isNewReconciler: Gt
    }, Bg = {
      readContext: function(e) {
        return xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", $(), Lc(e, t);
      },
      useContext: function(e) {
        return L = "useContext", $(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", $(), El(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", $(), Ac(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", $(), _c(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", $(), wc(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", $();
        var n = X.current;
        X.current = zc;
        try {
          return Uc(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", $();
        var r = X.current;
        X.current = zc;
        try {
          return Pv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", $(), xc();
      },
      useState: function(e) {
        L = "useState", $();
        var t = X.current;
        X.current = zc;
        try {
          return qv(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", $(), Mc();
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", $(), _g(e);
      },
      useTransition: function() {
        return L = "useTransition", $(), Mg();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", $(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", $(), Rc(e, t);
      },
      useId: function() {
        return L = "useId", $(), Nc();
      },
      unstable_isNewReconciler: Gt
    }, Xr = {
      readContext: function(e) {
        return tp(), xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", ve(), Ve(), Xv(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ve(), Ve(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", ve(), Ve(), Oc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", ve(), Ve(), Qv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", ve(), Ve(), Wv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ve(), Ve(), Iv(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ve(), Ve();
        var n = X.current;
        X.current = Xr;
        try {
          return Kv(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", ve(), Ve();
        var r = X.current;
        X.current = Xr;
        try {
          return Bv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", ve(), Ve(), Gv(e);
      },
      useState: function(e) {
        L = "useState", ve(), Ve();
        var t = X.current;
        X.current = Xr;
        try {
          return Tc(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", ve(), Ve(), void 0;
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", ve(), Ve(), Jv(e);
      },
      useTransition: function() {
        return L = "useTransition", ve(), Ve(), Zv();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", ve(), Ve(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", ve(), Ve(), $v(e, t, n);
      },
      useId: function() {
        return L = "useId", ve(), Ve(), ep();
      },
      unstable_isNewReconciler: Gt
    }, Ar = {
      readContext: function(e) {
        return tp(), xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", ve(), $(), Lc(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ve(), $(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", ve(), $(), El(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", ve(), $(), Ac(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", ve(), $(), _c(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ve(), $(), wc(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ve(), $();
        var n = X.current;
        X.current = Ar;
        try {
          return Uc(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", ve(), $();
        var r = X.current;
        X.current = Ar;
        try {
          return Vv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", ve(), $(), xc();
      },
      useState: function(e) {
        L = "useState", ve(), $();
        var t = X.current;
        X.current = Ar;
        try {
          return Yv(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", ve(), $(), Mc();
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", ve(), $(), Og(e);
      },
      useTransition: function() {
        return L = "useTransition", ve(), $(), Ag();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", ve(), $(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", ve(), $(), Rc(e, t);
      },
      useId: function() {
        return L = "useId", ve(), $(), Nc();
      },
      unstable_isNewReconciler: Gt
    }, zc = {
      readContext: function(e) {
        return tp(), xt(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", ve(), $(), Lc(e, t);
      },
      useContext: function(e) {
        return L = "useContext", ve(), $(), xt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", ve(), $(), El(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return L = "useImperativeHandle", ve(), $(), Ac(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", ve(), $(), _c(e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", ve(), $(), wc(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", ve(), $();
        var n = X.current;
        X.current = Ar;
        try {
          return Uc(e, t);
        } finally {
          X.current = n;
        }
      },
      useReducer: function(e, t, n) {
        L = "useReducer", ve(), $();
        var r = X.current;
        X.current = Ar;
        try {
          return Pv(e, t, n);
        } finally {
          X.current = r;
        }
      },
      useRef: function(e) {
        return L = "useRef", ve(), $(), xc();
      },
      useState: function(e) {
        L = "useState", ve(), $();
        var t = X.current;
        X.current = Ar;
        try {
          return qv(e);
        } finally {
          X.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return L = "useDebugValue", ve(), $(), Mc();
      },
      useDeferredValue: function(e) {
        return L = "useDeferredValue", ve(), $(), _g(e);
      },
      useTransition: function() {
        return L = "useTransition", ve(), $(), Mg();
      },
      useMutableSource: function(e, t, n) {
        return L = "useMutableSource", ve(), $(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return L = "useSyncExternalStore", ve(), $(), Rc(e, t);
      },
      useId: function() {
        return L = "useId", ve(), $(), Nc();
      },
      unstable_isNewReconciler: Gt
    };
  }
  var ii = f.unstable_now, Vg = 0, Fc = -1, Cl = -1, Hc = -1, np = !1, jc = !1;
  function Pg() {
    return np;
  }
  function V0() {
    jc = !0;
  }
  function P0() {
    np = !1, jc = !1;
  }
  function $0() {
    np = jc, jc = !1;
  }
  function $g() {
    return Vg;
  }
  function Yg() {
    Vg = ii();
  }
  function rp(e) {
    Cl = ii(), e.actualStartTime < 0 && (e.actualStartTime = ii());
  }
  function qg(e) {
    Cl = -1;
  }
  function Bc(e, t) {
    if (Cl >= 0) {
      var n = ii() - Cl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Cl = -1;
    }
  }
  function Kr(e) {
    if (Fc >= 0) {
      var t = ii() - Fc;
      Fc = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case _:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
          case lt:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function ap(e) {
    if (Hc >= 0) {
      var t = ii() - Hc;
      Hc = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case _:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
          case lt:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function Jr() {
    Fc = ii();
  }
  function ip() {
    Hc = ii();
  }
  function op(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Mr(e, t) {
    if (e && e.defaultProps) {
      var n = Te({}, t), r = e.defaultProps;
      for (var a in r)
        n[a] === void 0 && (n[a] = r[a]);
      return n;
    }
    return t;
  }
  var up = {}, lp, sp, cp, fp, dp, Gg, Vc, vp, pp, hp, Rl;
  {
    lp = /* @__PURE__ */ new Set(), sp = /* @__PURE__ */ new Set(), cp = /* @__PURE__ */ new Set(), fp = /* @__PURE__ */ new Set(), vp = /* @__PURE__ */ new Set(), dp = /* @__PURE__ */ new Set(), pp = /* @__PURE__ */ new Set(), hp = /* @__PURE__ */ new Set(), Rl = /* @__PURE__ */ new Set();
    var Wg = /* @__PURE__ */ new Set();
    Vc = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Wg.has(n) || (Wg.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, Gg = function(e, t) {
      if (t === void 0) {
        var n = Ne(e) || "Component";
        dp.has(n) || (dp.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(up, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(up);
  }
  function mp(e, t, n, r) {
    var a = e.memoizedState, i = n(r, a);
    {
      if (e.mode & vt) {
        $t(!0);
        try {
          i = n(r, a);
        } finally {
          $t(!1);
        }
      }
      Gg(t, i);
    }
    var o = i == null ? a : Te({}, a, i);
    if (e.memoizedState = o, e.lanes === N) {
      var u = e.updateQueue;
      u.baseState = o;
    }
  }
  var yp = {
    isMounted: NC,
    enqueueSetState: function(e, t, n) {
      var r = lo(e), a = bn(), i = si(r), o = Da(a, i);
      o.payload = t, n != null && (Vc(n, "setState"), o.callback = n);
      var u = ti(r, o, i);
      u !== null && (Ft(u, r, i, a), mc(u, r, i)), If(r, i);
    },
    enqueueReplaceState: function(e, t, n) {
      var r = lo(e), a = bn(), i = si(r), o = Da(a, i);
      o.tag = cg, o.payload = t, n != null && (Vc(n, "replaceState"), o.callback = n);
      var u = ti(r, o, i);
      u !== null && (Ft(u, r, i, a), mc(u, r, i)), If(r, i);
    },
    enqueueForceUpdate: function(e, t) {
      var n = lo(e), r = bn(), a = si(n), i = Da(r, a);
      i.tag = vc, t != null && (Vc(t, "forceUpdate"), i.callback = t);
      var o = ti(n, i, a);
      o !== null && (Ft(o, n, a, r), mc(o, n, a)), fR(n, a);
    }
  };
  function Ig(e, t, n, r, a, i, o) {
    var u = e.stateNode;
    if (typeof u.shouldComponentUpdate == "function") {
      var l = u.shouldComponentUpdate(r, i, o);
      {
        if (e.mode & vt) {
          $t(!0);
          try {
            l = u.shouldComponentUpdate(r, i, o);
          } finally {
            $t(!1);
          }
        }
        l === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ne(t) || "Component");
      }
      return l;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !qu(n, r) || !qu(a, i) : !0;
  }
  function Y0(e, t, n) {
    var r = e.stateNode;
    {
      var a = Ne(t) || "Component", i = r.render;
      i || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", a) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", a)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", a), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", a), r.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", a), r.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", a), t.childContextTypes && !Rl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & vt) === ie && (Rl.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, a)), t.contextTypes && !Rl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & vt) === ie && (Rl.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, a)), r.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", a), t.contextType && t.contextTypes && !pp.has(t) && (pp.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", a)), typeof r.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", a), t.prototype && t.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ne(t) || "A pure component"), typeof r.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", a), typeof r.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", a), typeof r.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", a), typeof r.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", a);
      var o = r.props !== n;
      r.props !== void 0 && o && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", a, a), r.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", a, a), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !cp.has(t) && (cp.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ne(t))), typeof r.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", a), typeof r.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", a), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", a);
      var u = r.state;
      u && (typeof u != "object" || je(u)) && d("%s.state: must be set to an object or null", a), typeof r.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", a);
    }
  }
  function Qg(e, t) {
    t.updater = yp, e.stateNode = t, wC(t, e), t._reactInternalInstance = up;
  }
  function Xg(e, t, n) {
    var r = !1, a = Qn, i = Qn, o = t.contextType;
    if ("contextType" in t) {
      var u = (
        // Allow null for conditional declaration
        o === null || o !== void 0 && o.$$typeof === k && o._context === void 0
      );
      if (!u && !hp.has(t)) {
        hp.add(t);
        var l = "";
        o === void 0 ? l = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? l = " However, it is set to a " + typeof o + "." : o.$$typeof === g ? l = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? l = " Did you accidentally pass the Context.Consumer instead?" : l = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ne(t) || "Component", l);
      }
    }
    if (typeof o == "object" && o !== null)
      i = xt(o);
    else {
      a = Oo(e, t, !0);
      var v = t.contextTypes;
      r = v != null, i = r ? _o(e, a) : Qn;
    }
    var h = new t(n, i);
    if (e.mode & vt) {
      $t(!0);
      try {
        h = new t(n, i);
      } finally {
        $t(!1);
      }
    }
    var S = e.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null;
    Qg(e, h);
    {
      if (typeof t.getDerivedStateFromProps == "function" && S === null) {
        var b = Ne(t) || "Component";
        sp.has(b) || (sp.add(b), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, h.state === null ? "null" : "undefined", b));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
        var x = null, O = null, A = null;
        if (typeof h.componentWillMount == "function" && h.componentWillMount.__suppressDeprecationWarning !== !0 ? x = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (x = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && h.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? O = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (O = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && h.componentWillUpdate.__suppressDeprecationWarning !== !0 ? A = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (A = "UNSAFE_componentWillUpdate"), x !== null || O !== null || A !== null) {
          var G = Ne(t) || "Component", ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          fp.has(G) || (fp.add(G), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, G, ae, x !== null ? `
  ` + x : "", O !== null ? `
  ` + O : "", A !== null ? `
  ` + A : ""));
        }
      }
    }
    return r && jy(e, a, i), h;
  }
  function q0(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ye(e) || "Component"), yp.enqueueReplaceState(t, t.state, null));
  }
  function Kg(e, t, n, r) {
    var a = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== a) {
      {
        var i = ye(e) || "Component";
        lp.has(i) || (lp.add(i), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
      }
      yp.enqueueReplaceState(t, t.state, null);
    }
  }
  function gp(e, t, n, r) {
    Y0(e, t, n);
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Ov(e);
    var i = t.contextType;
    if (typeof i == "object" && i !== null)
      a.context = xt(i);
    else {
      var o = Oo(e, t, !0);
      a.context = _o(e, o);
    }
    {
      if (a.state === n) {
        var u = Ne(t) || "Component";
        vp.has(u) || (vp.add(u), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", u));
      }
      e.mode & vt && _r.recordLegacyContextWarning(e, a), _r.recordUnsafeLifecycleWarnings(e, a);
    }
    a.state = e.memoizedState;
    var l = t.getDerivedStateFromProps;
    if (typeof l == "function" && (mp(e, t, l, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function") && (q0(e, a), yc(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function") {
      var v = Le;
      v |= Ti, (e.mode & Yr) !== ie && (v |= ma), e.flags |= v;
    }
  }
  function G0(e, t, n, r) {
    var a = e.stateNode, i = e.memoizedProps;
    a.props = i;
    var o = a.context, u = t.contextType, l = Qn;
    if (typeof u == "object" && u !== null)
      l = xt(u);
    else {
      var v = Oo(e, t, !0);
      l = _o(e, v);
    }
    var h = t.getDerivedStateFromProps, S = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    !S && (typeof a.UNSAFE_componentWillReceiveProps == "function" || typeof a.componentWillReceiveProps == "function") && (i !== n || o !== l) && Kg(e, a, n, l), dg();
    var b = e.memoizedState, x = a.state = b;
    if (yc(e, n, a, r), x = e.memoizedState, i === n && b === x && !Js() && !gc()) {
      if (typeof a.componentDidMount == "function") {
        var O = Le;
        O |= Ti, (e.mode & Yr) !== ie && (O |= ma), e.flags |= O;
      }
      return !1;
    }
    typeof h == "function" && (mp(e, t, h, n), x = e.memoizedState);
    var A = gc() || Ig(e, t, i, n, b, x, l);
    if (A) {
      if (!S && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function") && (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function") {
        var G = Le;
        G |= Ti, (e.mode & Yr) !== ie && (G |= ma), e.flags |= G;
      }
    } else {
      if (typeof a.componentDidMount == "function") {
        var ae = Le;
        ae |= Ti, (e.mode & Yr) !== ie && (ae |= ma), e.flags |= ae;
      }
      e.memoizedProps = n, e.memoizedState = x;
    }
    return a.props = n, a.state = x, a.context = l, A;
  }
  function W0(e, t, n, r, a) {
    var i = t.stateNode;
    fg(e, t);
    var o = t.memoizedProps, u = t.type === t.elementType ? o : Mr(t.type, o);
    i.props = u;
    var l = t.pendingProps, v = i.context, h = n.contextType, S = Qn;
    if (typeof h == "object" && h !== null)
      S = xt(h);
    else {
      var b = Oo(t, n, !0);
      S = _o(t, b);
    }
    var x = n.getDerivedStateFromProps, O = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !O && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (o !== l || v !== S) && Kg(t, i, r, S), dg();
    var A = t.memoizedState, G = i.state = A;
    if (yc(t, r, i, a), G = t.memoizedState, o === l && A === G && !Js() && !gc() && !Fr)
      return typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Le), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Ci), !1;
    typeof x == "function" && (mp(t, n, x, r), G = t.memoizedState);
    var ae = gc() || Ig(t, n, u, r, A, G, S) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    Fr;
    return ae ? (!O && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, G, S), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, G, S)), typeof i.componentDidUpdate == "function" && (t.flags |= Le), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= Ci)) : (typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Le), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || A !== e.memoizedState) && (t.flags |= Ci), t.memoizedProps = r, t.memoizedState = G), i.props = r, i.state = G, i.context = S, ae;
  }
  function Pi(e, t) {
    return {
      value: e,
      source: t,
      stack: cu(t),
      digest: null
    };
  }
  function bp(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function I0(e, t) {
    return !0;
  }
  function Sp(e, t) {
    try {
      var n = I0(e, t);
      if (n === !1)
        return;
      var r = t.value, a = t.source, i = t.stack, o = i !== null ? i : "";
      if (r != null && r._suppressLogging) {
        if (e.tag === F)
          return;
        console.error(r);
      }
      var u = a ? ye(a) : null, l = u ? "The above error occurred in the <" + u + "> component:" : "The above error occurred in one of your React components:", v;
      if (e.tag === _)
        v = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var h = ye(e) || "Anonymous";
        v = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + h + ".");
      }
      var S = l + `
` + o + `

` + ("" + v);
      console.error(S);
    } catch (b) {
      setTimeout(function() {
        throw b;
      });
    }
  }
  var Q0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Jg(e, t, n) {
    var r = Da(nt, n);
    r.tag = xv, r.payload = {
      element: null
    };
    var a = t.value;
    return r.callback = function() {
      V_(a), Sp(e, t);
    }, r;
  }
  function Ep(e, t, n) {
    var r = Da(nt, n);
    r.tag = xv;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = t.value;
      r.payload = function() {
        return a(i);
      }, r.callback = function() {
        sS(e), Sp(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
      sS(e), Sp(e, t), typeof a != "function" && j_(this);
      var l = t.value, v = t.stack;
      this.componentDidCatch(l, {
        componentStack: v !== null ? v : ""
      }), typeof a != "function" && (qn(e.lanes, de) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ye(e) || "Unknown"));
    }), r;
  }
  function Zg(e, t, n) {
    var r = e.pingCache, a;
    if (r === null ? (r = e.pingCache = new Q0(), a = /* @__PURE__ */ new Set(), r.set(t, a)) : (a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a))), !a.has(n)) {
      a.add(n);
      var i = P_.bind(null, e, t, n);
      Tr && Bl(e, n), t.then(i, i);
    }
  }
  function X0(e, t, n, r) {
    var a = e.updateQueue;
    if (a === null) {
      var i = /* @__PURE__ */ new Set();
      i.add(n), e.updateQueue = i;
    } else
      a.add(n);
  }
  function K0(e, t) {
    var n = e.tag;
    if ((e.mode & _e) === ie && (n === P || n === me || n === Me)) {
      var r = e.alternate;
      r ? (e.updateQueue = r.updateQueue, e.memoizedState = r.memoizedState, e.lanes = r.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function eb(e) {
    var t = e;
    do {
      if (t.tag === he && M0(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function tb(e, t, n, r, a) {
    if ((e.mode & _e) === ie) {
      if (e === t)
        e.flags |= mn;
      else {
        if (e.flags |= Be, n.flags |= Vf, n.flags &= ~(AC | Cu), n.tag === F) {
          var i = n.alternate;
          if (i === null)
            n.tag = Rn;
          else {
            var o = Da(nt, de);
            o.tag = vc, ti(n, o, de);
          }
        }
        n.lanes = be(n.lanes, de);
      }
      return e;
    }
    return e.flags |= mn, e.lanes = a, e;
  }
  function J0(e, t, n, r, a) {
    if (n.flags |= Cu, Tr && Bl(e, a), r !== null && typeof r == "object" && typeof r.then == "function") {
      var i = r;
      K0(n), Qt() && n.mode & _e && Gy();
      var o = eb(t);
      if (o !== null) {
        o.flags &= ~pa, tb(o, t, n, e, a), o.mode & _e && Zg(e, i, a), X0(o, e, i);
        return;
      } else {
        if (!SR(a)) {
          Zg(e, i, a), eh();
          return;
        }
        var u = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        r = u;
      }
    } else if (Qt() && n.mode & _e) {
      Gy();
      var l = eb(t);
      if (l !== null) {
        (l.flags & mn) === le && (l.flags |= pa), tb(l, t, n, e, a), vv(Pi(r, n));
        return;
      }
    }
    r = Pi(r, n), M_(r);
    var v = t;
    do {
      switch (v.tag) {
        case _: {
          var h = r;
          v.flags |= mn;
          var S = Au(a);
          v.lanes = be(v.lanes, S);
          var b = Jg(v, h, S);
          _v(v, b);
          return;
        }
        case F:
          var x = r, O = v.type, A = v.stateNode;
          if ((v.flags & Be) === le && (typeof O.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && !eS(A))) {
            v.flags |= mn;
            var G = Au(a);
            v.lanes = be(v.lanes, G);
            var ae = Ep(v, x, G);
            _v(v, ae);
            return;
          }
          break;
      }
      v = v.return;
    } while (v !== null);
  }
  function Z0() {
    return null;
  }
  var Tl = p.ReactCurrentOwner, Lr = !1, Cp, xl, Rp, Tp, xp, $i, Dp, Pc, Dl;
  Cp = {}, xl = {}, Rp = {}, Tp = {}, xp = {}, $i = !1, Dp = {}, Pc = {}, Dl = {};
  function yn(e, t, n, r) {
    e === null ? t.child = ag(t, null, n, r) : t.child = Lo(t, e.child, n, r);
  }
  function eO(e, t, n, r) {
    t.child = Lo(t, e.child, null, r), t.child = Lo(t, null, n, r);
  }
  function nb(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Dr(
        i,
        r,
        // Resolved props
        "prop",
        Ne(n)
      );
    }
    var o = n.render, u = t.ref, l, v;
    No(t, a), Tu(t);
    {
      if (Tl.current = t, $n(!0), l = Bo(e, t, o, r, u, a), v = Vo(), t.mode & vt) {
        $t(!0);
        try {
          l = Bo(e, t, o, r, u, a), v = Vo();
        } finally {
          $t(!1);
        }
      }
      $n(!1);
    }
    return vo(), e !== null && !Lr ? (gg(e, t, a), Oa(e, t, a)) : (Qt() && v && uv(t), t.flags |= so, yn(e, t, l, a), t.child);
  }
  function rb(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      if (iw(i) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var o = i;
        return o = Qo(i), t.tag = Me, t.type = o, wp(t, i), ab(e, t, o, r, a);
      }
      {
        var u = i.propTypes;
        if (u && Dr(
          u,
          r,
          // Resolved props
          "prop",
          Ne(i)
        ), n.defaultProps !== void 0) {
          var l = Ne(i) || "Unknown";
          Dl[l] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", l), Dl[l] = !0);
        }
      }
      var v = fh(n.type, null, r, t, t.mode, a);
      return v.ref = t.ref, v.return = t, t.child = v, v;
    }
    {
      var h = n.type, S = h.propTypes;
      S && Dr(
        S,
        r,
        // Resolved props
        "prop",
        Ne(h)
      );
    }
    var b = e.child, x = kp(e, a);
    if (!x) {
      var O = b.memoizedProps, A = n.compare;
      if (A = A !== null ? A : qu, A(O, r) && e.ref === t.ref)
        return Oa(e, t, a);
    }
    t.flags |= so;
    var G = Ii(b, r);
    return G.ref = t.ref, G.return = t, t.child = G, G;
  }
  function ab(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var i = t.elementType;
      if (i.$$typeof === ue) {
        var o = i, u = o._payload, l = o._init;
        try {
          i = l(u);
        } catch {
          i = null;
        }
        var v = i && i.propTypes;
        v && Dr(
          v,
          r,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ne(i)
        );
      }
    }
    if (e !== null) {
      var h = e.memoizedProps;
      if (qu(h, r) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Lr = !1, t.pendingProps = r = h, kp(e, a))
          (e.flags & Vf) !== le && (Lr = !0);
        else
          return t.lanes = e.lanes, Oa(e, t, a);
    }
    return Op(e, t, n, r, a);
  }
  function ib(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || Zn)
      if ((t.mode & _e) === ie) {
        var o = {
          baseLanes: N,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = o, tf(t, n);
      } else if (qn(n, Yn)) {
        var S = {
          baseLanes: N,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = S;
        var b = i !== null ? i.baseLanes : n;
        tf(t, b);
      } else {
        var u = null, l;
        if (i !== null) {
          var v = i.baseLanes;
          l = be(v, n);
        } else
          l = n;
        t.lanes = t.childLanes = Yn;
        var h = {
          baseLanes: l,
          cachePool: u,
          transitions: null
        };
        return t.memoizedState = h, t.updateQueue = null, tf(t, l), null;
      }
    else {
      var x;
      i !== null ? (x = be(i.baseLanes, n), t.memoizedState = null) : x = n, tf(t, x);
    }
    return yn(e, t, a, n), t.child;
  }
  function tO(e, t, n) {
    var r = t.pendingProps;
    return yn(e, t, r, n), t.child;
  }
  function nO(e, t, n) {
    var r = t.pendingProps.children;
    return yn(e, t, r, n), t.child;
  }
  function rO(e, t, n) {
    {
      t.flags |= Le;
      {
        var r = t.stateNode;
        r.effectDuration = 0, r.passiveEffectDuration = 0;
      }
    }
    var a = t.pendingProps, i = a.children;
    return yn(e, t, i, n), t.child;
  }
  function ob(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= $a, t.flags |= Pf);
  }
  function Op(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Dr(
        i,
        r,
        // Resolved props
        "prop",
        Ne(n)
      );
    }
    var o;
    {
      var u = Oo(t, n, !0);
      o = _o(t, u);
    }
    var l, v;
    No(t, a), Tu(t);
    {
      if (Tl.current = t, $n(!0), l = Bo(e, t, n, r, o, a), v = Vo(), t.mode & vt) {
        $t(!0);
        try {
          l = Bo(e, t, n, r, o, a), v = Vo();
        } finally {
          $t(!1);
        }
      }
      $n(!1);
    }
    return vo(), e !== null && !Lr ? (gg(e, t, a), Oa(e, t, a)) : (Qt() && v && uv(t), t.flags |= so, yn(e, t, l, a), t.child);
  }
  function ub(e, t, n, r, a) {
    {
      switch (Sw(t)) {
        case !1: {
          var i = t.stateNode, o = t.type, u = new o(t.memoizedProps, i.context), l = u.state;
          i.updater.enqueueSetState(i, l, null);
          break;
        }
        case !0: {
          t.flags |= Be, t.flags |= mn;
          var v = new Error("Simulated error coming from DevTools"), h = Au(a);
          t.lanes = be(t.lanes, h);
          var S = Ep(t, Pi(v, t), h);
          _v(t, S);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var b = n.propTypes;
        b && Dr(
          b,
          r,
          // Resolved props
          "prop",
          Ne(n)
        );
      }
    }
    var x;
    Wr(n) ? (x = !0, ec(t)) : x = !1, No(t, a);
    var O = t.stateNode, A;
    O === null ? (Yc(e, t), Xg(t, n, r), gp(t, n, r, a), A = !0) : e === null ? A = G0(t, n, r, a) : A = W0(e, t, n, r, a);
    var G = _p(e, t, n, A, x, a);
    {
      var ae = t.stateNode;
      A && ae.props !== r && ($i || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ye(t) || "a component"), $i = !0);
    }
    return G;
  }
  function _p(e, t, n, r, a, i) {
    ob(e, t);
    var o = (t.flags & Be) !== le;
    if (!r && !o)
      return a && Py(t, n, !1), Oa(e, t, i);
    var u = t.stateNode;
    Tl.current = t;
    var l;
    if (o && typeof n.getDerivedStateFromError != "function")
      l = null, qg();
    else {
      Tu(t);
      {
        if ($n(!0), l = u.render(), t.mode & vt) {
          $t(!0);
          try {
            u.render();
          } finally {
            $t(!1);
          }
        }
        $n(!1);
      }
      vo();
    }
    return t.flags |= so, e !== null && o ? eO(e, t, l, i) : yn(e, t, l, i), t.memoizedState = u.state, a && Py(t, n, !0), t.child;
  }
  function lb(e) {
    var t = e.stateNode;
    t.pendingContext ? By(e, t.pendingContext, t.pendingContext !== t.context) : t.context && By(e, t.context, !1), wv(e, t.containerInfo);
  }
  function aO(e, t, n) {
    if (lb(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var r = t.pendingProps, a = t.memoizedState, i = a.element;
    fg(e, t), yc(t, r, null, n);
    var o = t.memoizedState;
    t.stateNode;
    var u = o.element;
    if (a.isDehydrated) {
      var l = {
        element: u,
        isDehydrated: !1,
        cache: o.cache,
        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
        transitions: o.transitions
      }, v = t.updateQueue;
      if (v.baseState = l, t.memoizedState = l, t.flags & pa) {
        var h = Pi(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return sb(e, t, u, n, h);
      } else if (u !== i) {
        var S = Pi(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return sb(e, t, u, n, S);
      } else {
        u0(t);
        var b = ag(t, null, u, n);
        t.child = b;
        for (var x = b; x; )
          x.flags = x.flags & ~Tt | ha, x = x.sibling;
      }
    } else {
      if (Mo(), u === i)
        return Oa(e, t, n);
      yn(e, t, u, n);
    }
    return t.child;
  }
  function sb(e, t, n, r, a) {
    return Mo(), vv(a), t.flags |= pa, yn(e, t, n, r), t.child;
  }
  function iO(e, t, n) {
    hg(t), e === null && dv(t);
    var r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = a.children, u = Wd(r, a);
    return u ? o = null : i !== null && Wd(r, i) && (t.flags |= Eu), ob(e, t), yn(e, t, o, n), t.child;
  }
  function oO(e, t) {
    return e === null && dv(t), null;
  }
  function uO(e, t, n, r) {
    Yc(e, t);
    var a = t.pendingProps, i = n, o = i._payload, u = i._init, l = u(o);
    t.type = l;
    var v = t.tag = ow(l), h = Mr(l, a), S;
    switch (v) {
      case P:
        return wp(t, l), t.type = l = Qo(l), S = Op(null, t, l, h, r), S;
      case F:
        return t.type = l = ih(l), S = ub(null, t, l, h, r), S;
      case me:
        return t.type = l = oh(l), S = nb(null, t, l, h, r), S;
      case rt: {
        if (t.type !== t.elementType) {
          var b = l.propTypes;
          b && Dr(
            b,
            h,
            // Resolved for outer only
            "prop",
            Ne(l)
          );
        }
        return S = rb(
          null,
          t,
          l,
          Mr(l.type, h),
          // The inner type can have defaults too
          r
        ), S;
      }
    }
    var x = "";
    throw l !== null && typeof l == "object" && l.$$typeof === ue && (x = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + l + ". " + ("Lazy element type must resolve to a class or function." + x));
  }
  function lO(e, t, n, r, a) {
    Yc(e, t), t.tag = F;
    var i;
    return Wr(n) ? (i = !0, ec(t)) : i = !1, No(t, a), Xg(t, n, r), gp(t, n, r, a), _p(null, t, n, !0, i, a);
  }
  function sO(e, t, n, r) {
    Yc(e, t);
    var a = t.pendingProps, i;
    {
      var o = Oo(t, n, !1);
      i = _o(t, o);
    }
    No(t, r);
    var u, l;
    Tu(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var v = Ne(n) || "Unknown";
        Cp[v] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", v, v), Cp[v] = !0);
      }
      t.mode & vt && _r.recordLegacyContextWarning(t, null), $n(!0), Tl.current = t, u = Bo(null, t, n, a, i, r), l = Vo(), $n(!1);
    }
    if (vo(), t.flags |= so, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0) {
      var h = Ne(n) || "Unknown";
      xl[h] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), xl[h] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0
    ) {
      {
        var S = Ne(n) || "Unknown";
        xl[S] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), xl[S] = !0);
      }
      t.tag = F, t.memoizedState = null, t.updateQueue = null;
      var b = !1;
      return Wr(n) ? (b = !0, ec(t)) : b = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, Ov(t), Qg(t, u), gp(t, n, a, r), _p(null, t, n, !0, b, r);
    } else {
      if (t.tag = P, t.mode & vt) {
        $t(!0);
        try {
          u = Bo(null, t, n, a, i, r), l = Vo();
        } finally {
          $t(!1);
        }
      }
      return Qt() && l && uv(t), yn(null, t, u, r), wp(t, n), t.child;
    }
  }
  function wp(e, t) {
    {
      if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", r = ja();
        r && (n += `

Check the render method of \`` + r + "`.");
        var a = r || "", i = e._debugSource;
        i && (a = i.fileName + ":" + i.lineNumber), xp[a] || (xp[a] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var o = Ne(t) || "Unknown";
        Dl[o] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", o), Dl[o] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var u = Ne(t) || "Unknown";
        Tp[u] || (d("%s: Function components do not support getDerivedStateFromProps.", u), Tp[u] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var l = Ne(t) || "Unknown";
        Rp[l] || (d("%s: Function components do not support contextType.", l), Rp[l] = !0);
      }
    }
  }
  var Ap = {
    dehydrated: null,
    treeContext: null,
    retryLane: Yt
  };
  function Mp(e) {
    return {
      baseLanes: e,
      cachePool: Z0(),
      transitions: null
    };
  }
  function cO(e, t) {
    var n = null;
    return {
      baseLanes: be(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function fO(e, t, n, r) {
    if (t !== null) {
      var a = t.memoizedState;
      if (a === null)
        return !1;
    }
    return Lv(e, hl);
  }
  function dO(e, t) {
    return Rs(e.childLanes, t);
  }
  function cb(e, t, n) {
    var r = t.pendingProps;
    Ew(t) && (t.flags |= Be);
    var a = wr.current, i = !1, o = (t.flags & Be) !== le;
    if (o || fO(a, e) ? (i = !0, t.flags &= ~Be) : (e === null || e.memoizedState !== null) && (a = A0(a, yg)), a = zo(a), ri(t, a), e === null) {
      dv(t);
      var u = t.memoizedState;
      if (u !== null) {
        var l = u.dehydrated;
        if (l !== null)
          return yO(t, l);
      }
      var v = r.children, h = r.fallback;
      if (i) {
        var S = vO(t, v, h, n), b = t.child;
        return b.memoizedState = Mp(n), t.memoizedState = Ap, S;
      } else
        return Lp(t, v);
    } else {
      var x = e.memoizedState;
      if (x !== null) {
        var O = x.dehydrated;
        if (O !== null)
          return gO(e, t, o, r, O, x, n);
      }
      if (i) {
        var A = r.fallback, G = r.children, ae = hO(e, t, G, A, n), ee = t.child, Ae = e.child.memoizedState;
        return ee.memoizedState = Ae === null ? Mp(n) : cO(Ae, n), ee.childLanes = dO(e, n), t.memoizedState = Ap, ae;
      } else {
        var xe = r.children, R = pO(e, t, xe, n);
        return t.memoizedState = null, R;
      }
    }
  }
  function Lp(e, t, n) {
    var r = e.mode, a = {
      mode: "visible",
      children: t
    }, i = Up(a, r);
    return i.return = e, e.child = i, i;
  }
  function vO(e, t, n, r) {
    var a = e.mode, i = e.child, o = {
      mode: "hidden",
      children: t
    }, u, l;
    return (a & _e) === ie && i !== null ? (u = i, u.childLanes = N, u.pendingProps = o, e.mode & Ge && (u.actualDuration = 0, u.actualStartTime = -1, u.selfBaseDuration = 0, u.treeBaseDuration = 0), l = fi(n, a, r, null)) : (u = Up(o, a), l = fi(n, a, r, null)), u.return = e, l.return = e, u.sibling = l, e.child = u, l;
  }
  function Up(e, t, n) {
    return fS(e, t, N, null);
  }
  function fb(e, t) {
    return Ii(e, t);
  }
  function pO(e, t, n, r) {
    var a = e.child, i = a.sibling, o = fb(a, {
      mode: "visible",
      children: n
    });
    if ((t.mode & _e) === ie && (o.lanes = r), o.return = t, o.sibling = null, i !== null) {
      var u = t.deletions;
      u === null ? (t.deletions = [i], t.flags |= Ei) : u.push(i);
    }
    return t.child = o, o;
  }
  function hO(e, t, n, r, a) {
    var i = t.mode, o = e.child, u = o.sibling, l = {
      mode: "hidden",
      children: n
    }, v;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (i & _e) === ie && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== o
    ) {
      var h = t.child;
      v = h, v.childLanes = N, v.pendingProps = l, t.mode & Ge && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = o.selfBaseDuration, v.treeBaseDuration = o.treeBaseDuration), t.deletions = null;
    } else
      v = fb(o, l), v.subtreeFlags = o.subtreeFlags & ya;
    var S;
    return u !== null ? S = Ii(u, r) : (S = fi(r, i, a, null), S.flags |= Tt), S.return = t, v.return = t, v.sibling = S, t.child = v, S;
  }
  function $c(e, t, n, r) {
    r !== null && vv(r), Lo(t, e.child, null, n);
    var a = t.pendingProps, i = a.children, o = Lp(t, i);
    return o.flags |= Tt, t.memoizedState = null, o;
  }
  function mO(e, t, n, r, a) {
    var i = t.mode, o = {
      mode: "visible",
      children: n
    }, u = Up(o, i), l = fi(r, i, a, null);
    return l.flags |= Tt, u.return = t, l.return = t, u.sibling = l, t.child = u, (t.mode & _e) !== ie && Lo(t, e.child, null, a), l;
  }
  function yO(e, t, n) {
    return (e.mode & _e) === ie ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = de) : Kd(t) ? e.lanes = Oi : e.lanes = Yn, null;
  }
  function gO(e, t, n, r, a, i, o) {
    if (n)
      if (t.flags & pa) {
        t.flags &= ~pa;
        var R = bp(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return $c(e, t, o, R);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Be, null;
        var M = r.children, T = r.fallback, z = mO(e, t, M, T, o), K = t.child;
        return K.memoizedState = Mp(o), t.memoizedState = Ap, z;
      }
    else {
      if (i0(), (t.mode & _e) === ie)
        return $c(
          e,
          t,
          o,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Kd(a)) {
        var u, l, v;
        {
          var h = CD(a);
          u = h.digest, l = h.message, v = h.stack;
        }
        var S;
        l ? S = new Error(l) : S = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var b = bp(S, u, v);
        return $c(e, t, o, b);
      }
      var x = qn(o, e.childLanes);
      if (Lr || x) {
        var O = ef();
        if (O !== null) {
          var A = _R(O, o);
          if (A !== Yt && A !== i.retryLane) {
            i.retryLane = A;
            var G = nt;
            Mn(e, A), Ft(O, e, A, G);
          }
        }
        eh();
        var ae = bp(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return $c(e, t, o, ae);
      } else if (Ny(a)) {
        t.flags |= Be, t.child = e.child;
        var ee = $_.bind(null, e);
        return RD(a, ee), null;
      } else {
        l0(t, a, i.treeContext);
        var Ae = r.children, xe = Lp(t, Ae);
        return xe.flags |= ha, xe;
      }
    }
  }
  function db(e, t, n) {
    e.lanes = be(e.lanes, t);
    var r = e.alternate;
    r !== null && (r.lanes = be(r.lanes, t)), Rv(e.return, t, n);
  }
  function bO(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === he) {
        var a = r.memoizedState;
        a !== null && db(r, n, e);
      } else if (r.tag === et)
        db(r, n, e);
      else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e)
        return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }
  function SO(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate;
      r !== null && Ec(r) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function EO(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Dp[e])
      if (Dp[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function CO(e, t) {
    e !== void 0 && !Pc[e] && (e !== "collapsed" && e !== "hidden" ? (Pc[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Pc[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function vb(e, t) {
    {
      var n = je(e), r = !n && typeof Pn(e) == "function";
      if (n || r) {
        var a = n ? "array" : "iterable";
        return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", a, t, a), !1;
      }
    }
    return !0;
  }
  function RO(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (je(e)) {
        for (var n = 0; n < e.length; n++)
          if (!vb(e[n], n))
            return;
      } else {
        var r = Pn(e);
        if (typeof r == "function") {
          var a = r.call(e);
          if (a)
            for (var i = a.next(), o = 0; !i.done; i = a.next()) {
              if (!vb(i.value, o))
                return;
              o++;
            }
        } else
          d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Np(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: a
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function pb(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail, o = r.children;
    EO(a), CO(i, a), RO(o, a), yn(e, t, o, n);
    var u = wr.current, l = Lv(u, hl);
    if (l)
      u = Uv(u, hl), t.flags |= Be;
    else {
      var v = e !== null && (e.flags & Be) !== le;
      v && bO(t, t.child, n), u = zo(u);
    }
    if (ri(t, u), (t.mode & _e) === ie)
      t.memoizedState = null;
    else
      switch (a) {
        case "forwards": {
          var h = SO(t.child), S;
          h === null ? (S = t.child, t.child = null) : (S = h.sibling, h.sibling = null), Np(
            t,
            !1,
            // isBackwards
            S,
            h,
            i
          );
          break;
        }
        case "backwards": {
          var b = null, x = t.child;
          for (t.child = null; x !== null; ) {
            var O = x.alternate;
            if (O !== null && Ec(O) === null) {
              t.child = x;
              break;
            }
            var A = x.sibling;
            x.sibling = b, b = x, x = A;
          }
          Np(
            t,
            !0,
            // isBackwards
            b,
            null,
            // last
            i
          );
          break;
        }
        case "together": {
          Np(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function TO(e, t, n) {
    wv(t, t.stateNode.containerInfo);
    var r = t.pendingProps;
    return e === null ? t.child = Lo(t, null, r, n) : yn(e, t, r, n), t.child;
  }
  var hb = !1;
  function xO(e, t, n) {
    var r = t.type, a = r._context, i = t.pendingProps, o = t.memoizedProps, u = i.value;
    {
      "value" in i || hb || (hb = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var l = t.type.propTypes;
      l && Dr(l, i, "prop", "Context.Provider");
    }
    if (ug(t, a, u), o !== null) {
      var v = o.value;
      if (In(v, u)) {
        if (o.children === i.children && !Js())
          return Oa(e, t, n);
      } else
        E0(t, a, n);
    }
    var h = i.children;
    return yn(e, t, h, n), t.child;
  }
  var mb = !1;
  function DO(e, t, n) {
    var r = t.type;
    r._context === void 0 ? r !== r.Consumer && (mb || (mb = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
    var a = t.pendingProps, i = a.children;
    typeof i != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), No(t, n);
    var o = xt(r);
    Tu(t);
    var u;
    return Tl.current = t, $n(!0), u = i(o), $n(!1), vo(), t.flags |= so, yn(e, t, u, n), t.child;
  }
  function Ol() {
    Lr = !0;
  }
  function Yc(e, t) {
    (t.mode & _e) === ie && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
  }
  function Oa(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), qg(), jl(t.lanes), qn(n, t.childLanes) ? (b0(e, t), t.child) : null;
  }
  function OO(e, t, n) {
    {
      var r = t.return;
      if (r === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === r.child)
        r.child = n;
      else {
        var a = r.child;
        if (a === null)
          throw new Error("Expected parent to have a child.");
        for (; a.sibling !== t; )
          if (a = a.sibling, a === null)
            throw new Error("Expected to find the previous sibling.");
        a.sibling = n;
      }
      var i = r.deletions;
      return i === null ? (r.deletions = [e], r.flags |= Ei) : i.push(e), n.flags |= Tt, n;
    }
  }
  function kp(e, t) {
    var n = e.lanes;
    return !!qn(n, t);
  }
  function _O(e, t, n) {
    switch (t.tag) {
      case _:
        lb(t), t.stateNode, Mo();
        break;
      case W:
        hg(t);
        break;
      case F: {
        var r = t.type;
        Wr(r) && ec(t);
        break;
      }
      case te:
        wv(t, t.stateNode.containerInfo);
        break;
      case Se: {
        var a = t.memoizedProps.value, i = t.type._context;
        ug(t, i, a);
        break;
      }
      case lt:
        {
          var o = qn(n, t.childLanes);
          o && (t.flags |= Le);
          {
            var u = t.stateNode;
            u.effectDuration = 0, u.passiveEffectDuration = 0;
          }
        }
        break;
      case he: {
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return ri(t, zo(wr.current)), t.flags |= Be, null;
          var v = t.child, h = v.childLanes;
          if (qn(n, h))
            return cb(e, t, n);
          ri(t, zo(wr.current));
          var S = Oa(e, t, n);
          return S !== null ? S.sibling : null;
        } else
          ri(t, zo(wr.current));
        break;
      }
      case et: {
        var b = (e.flags & Be) !== le, x = qn(n, t.childLanes);
        if (b) {
          if (x)
            return pb(e, t, n);
          t.flags |= Be;
        }
        var O = t.memoizedState;
        if (O !== null && (O.rendering = null, O.tail = null, O.lastEffect = null), ri(t, wr.current), x)
          break;
        return null;
      }
      case Ee:
      case He:
        return t.lanes = N, ib(e, t, n);
    }
    return Oa(e, t, n);
  }
  function yb(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return OO(e, t, fh(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var r = e.memoizedProps, a = t.pendingProps;
      if (r !== a || Js() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Lr = !0;
      else {
        var i = kp(e, n);
        if (!i && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Be) === le)
          return Lr = !1, _O(e, t, n);
        (e.flags & Vf) !== le ? Lr = !0 : Lr = !1;
      }
    } else if (Lr = !1, Qt() && ZD(t)) {
      var o = t.index, u = e0();
      qy(t, u, o);
    }
    switch (t.lanes = N, t.tag) {
      case Y:
        return sO(e, t, t.type, n);
      case Cn: {
        var l = t.elementType;
        return uO(e, t, l, n);
      }
      case P: {
        var v = t.type, h = t.pendingProps, S = t.elementType === v ? h : Mr(v, h);
        return Op(e, t, v, S, n);
      }
      case F: {
        var b = t.type, x = t.pendingProps, O = t.elementType === b ? x : Mr(b, x);
        return ub(e, t, b, O, n);
      }
      case _:
        return aO(e, t, n);
      case W:
        return iO(e, t, n);
      case V:
        return oO(e, t);
      case he:
        return cb(e, t, n);
      case te:
        return TO(e, t, n);
      case me: {
        var A = t.type, G = t.pendingProps, ae = t.elementType === A ? G : Mr(A, G);
        return nb(e, t, A, ae, n);
      }
      case ne:
        return tO(e, t, n);
      case Qe:
        return nO(e, t, n);
      case lt:
        return rO(e, t, n);
      case Se:
        return xO(e, t, n);
      case Pe:
        return DO(e, t, n);
      case rt: {
        var ee = t.type, Ae = t.pendingProps, xe = Mr(ee, Ae);
        if (t.type !== t.elementType) {
          var R = ee.propTypes;
          R && Dr(
            R,
            xe,
            // Resolved for outer only
            "prop",
            Ne(ee)
          );
        }
        return xe = Mr(ee.type, xe), rb(e, t, ee, xe, n);
      }
      case Me:
        return ab(e, t, t.type, t.pendingProps, n);
      case Rn: {
        var M = t.type, T = t.pendingProps, z = t.elementType === M ? T : Mr(M, T);
        return lO(e, t, M, z, n);
      }
      case et:
        return pb(e, t, n);
      case kn:
        break;
      case Ee:
        return ib(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Po(e) {
    e.flags |= Le;
  }
  function gb(e) {
    e.flags |= $a, e.flags |= Pf;
  }
  var bb, zp, Sb, Eb;
  bb = function(e, t, n, r) {
    for (var a = t.child; a !== null; ) {
      if (a.tag === W || a.tag === V)
        Xx(e, a.stateNode);
      else if (a.tag !== te) {
        if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
      }
      if (a === t)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t)
          return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }, zp = function(e, t) {
  }, Sb = function(e, t, n, r, a) {
    var i = e.memoizedProps;
    if (i !== r) {
      var o = t.stateNode, u = Av(), l = Jx(o, n, i, r, a, u);
      t.updateQueue = l, l && Po(t);
    }
  }, Eb = function(e, t, n, r) {
    n !== r && Po(t);
  };
  function _l(e, t) {
    if (!Qt())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        }
        case "collapsed": {
          for (var a = e.tail, i = null; a !== null; )
            a.alternate !== null && (i = a), a = a.sibling;
          i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
          break;
        }
      }
  }
  function Kt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = N, r = le;
    if (t) {
      if ((e.mode & Ge) !== ie) {
        for (var l = e.selfBaseDuration, v = e.child; v !== null; )
          n = be(n, be(v.lanes, v.childLanes)), r |= v.subtreeFlags & ya, r |= v.flags & ya, l += v.treeBaseDuration, v = v.sibling;
        e.treeBaseDuration = l;
      } else
        for (var h = e.child; h !== null; )
          n = be(n, be(h.lanes, h.childLanes)), r |= h.subtreeFlags & ya, r |= h.flags & ya, h.return = e, h = h.sibling;
      e.subtreeFlags |= r;
    } else {
      if ((e.mode & Ge) !== ie) {
        for (var a = e.actualDuration, i = e.selfBaseDuration, o = e.child; o !== null; )
          n = be(n, be(o.lanes, o.childLanes)), r |= o.subtreeFlags, r |= o.flags, a += o.actualDuration, i += o.treeBaseDuration, o = o.sibling;
        e.actualDuration = a, e.treeBaseDuration = i;
      } else
        for (var u = e.child; u !== null; )
          n = be(n, be(u.lanes, u.childLanes)), r |= u.subtreeFlags, r |= u.flags, u.return = e, u = u.sibling;
      e.subtreeFlags |= r;
    }
    return e.childLanes = n, t;
  }
  function wO(e, t, n) {
    if (v0() && (t.mode & _e) !== ie && (t.flags & Be) === le)
      return Jy(t), Mo(), t.flags |= pa | Cu | mn, !1;
    var r = ic(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (f0(t), Kt(t), (t.mode & Ge) !== ie) {
          var a = n !== null;
          if (a) {
            var i = t.child;
            i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Mo(), (t.flags & Be) === le && (t.memoizedState = null), t.flags |= Le, Kt(t), (t.mode & Ge) !== ie) {
          var o = n !== null;
          if (o) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return Zy(), !0;
  }
  function Cb(e, t, n) {
    var r = t.pendingProps;
    switch (lv(t), t.tag) {
      case Y:
      case Cn:
      case Me:
      case P:
      case me:
      case ne:
      case Qe:
      case lt:
      case Pe:
      case rt:
        return Kt(t), null;
      case F: {
        var a = t.type;
        return Wr(a) && Zs(t), Kt(t), null;
      }
      case _: {
        var i = t.stateNode;
        if (ko(t), av(t), kv(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
          var o = ic(t);
          if (o)
            Po(t);
          else if (e !== null) {
            var u = e.memoizedState;
            // Check if this is a client root
            (!u.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & pa) !== le) && (t.flags |= Ci, Zy());
          }
        }
        return zp(e, t), Kt(t), null;
      }
      case W: {
        Mv(t);
        var l = pg(), v = t.type;
        if (e !== null && t.stateNode != null)
          Sb(e, t, v, r, l), e.ref !== t.ref && gb(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return Kt(t), null;
          }
          var h = Av(), S = ic(t);
          if (S)
            s0(t, l, h) && Po(t);
          else {
            var b = Qx(v, r, l, h, t);
            bb(b, t, !1, !1), t.stateNode = b, Kx(b, v, r, l) && Po(t);
          }
          t.ref !== null && gb(t);
        }
        return Kt(t), null;
      }
      case V: {
        var x = r;
        if (e && t.stateNode != null) {
          var O = e.memoizedProps;
          Eb(e, t, O, x);
        } else {
          if (typeof x != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var A = pg(), G = Av(), ae = ic(t);
          ae ? c0(t) && Po(t) : t.stateNode = Zx(x, A, G, t);
        }
        return Kt(t), null;
      }
      case he: {
        Fo(t);
        var ee = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ae = wO(e, t, ee);
          if (!Ae)
            return t.flags & mn ? t : null;
        }
        if ((t.flags & Be) !== le)
          return t.lanes = n, (t.mode & Ge) !== ie && op(t), t;
        var xe = ee !== null, R = e !== null && e.memoizedState !== null;
        if (xe !== R && xe) {
          var M = t.child;
          if (M.flags |= Ri, (t.mode & _e) !== ie) {
            var T = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !mr);
            T || Lv(wr.current, yg) ? A_() : eh();
          }
        }
        var z = t.updateQueue;
        if (z !== null && (t.flags |= Le), Kt(t), (t.mode & Ge) !== ie && xe) {
          var K = t.child;
          K !== null && (t.treeBaseDuration -= K.treeBaseDuration);
        }
        return null;
      }
      case te:
        return ko(t), zp(e, t), e === null && GD(t.stateNode.containerInfo), Kt(t), null;
      case Se:
        var I = t.type._context;
        return Cv(I, t), Kt(t), null;
      case Rn: {
        var ce = t.type;
        return Wr(ce) && Zs(t), Kt(t), null;
      }
      case et: {
        Fo(t);
        var pe = t.memoizedState;
        if (pe === null)
          return Kt(t), null;
        var Ie = (t.flags & Be) !== le, ke = pe.rendering;
        if (ke === null)
          if (Ie)
            _l(pe, !1);
          else {
            var bt = L_() && (e === null || (e.flags & Be) === le);
            if (!bt)
              for (var ze = t.child; ze !== null; ) {
                var pt = Ec(ze);
                if (pt !== null) {
                  Ie = !0, t.flags |= Be, _l(pe, !1);
                  var dn = pt.updateQueue;
                  return dn !== null && (t.updateQueue = dn, t.flags |= Le), t.subtreeFlags = le, S0(t, n), ri(t, Uv(wr.current, hl)), t.child;
                }
                ze = ze.sibling;
              }
            pe.tail !== null && Pt() > $b() && (t.flags |= Be, Ie = !0, _l(pe, !1), t.lanes = Em);
          }
        else {
          if (!Ie) {
            var nn = Ec(ke);
            if (nn !== null) {
              t.flags |= Be, Ie = !0;
              var Kn = nn.updateQueue;
              if (Kn !== null && (t.updateQueue = Kn, t.flags |= Le), _l(pe, !0), pe.tail === null && pe.tailMode === "hidden" && !ke.alternate && !Qt())
                return Kt(t), null;
            } else
              // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Pt() * 2 - pe.renderingStartTime > $b() && n !== Yn && (t.flags |= Be, Ie = !0, _l(pe, !1), t.lanes = Em);
          }
          if (pe.isBackwards)
            ke.sibling = t.child, t.child = ke;
          else {
            var Sn = pe.last;
            Sn !== null ? Sn.sibling = ke : t.child = ke, pe.last = ke;
          }
        }
        if (pe.tail !== null) {
          var En = pe.tail;
          pe.rendering = En, pe.tail = En.sibling, pe.renderingStartTime = Pt(), En.sibling = null;
          var vn = wr.current;
          return Ie ? vn = Uv(vn, hl) : vn = zo(vn), ri(t, vn), En;
        }
        return Kt(t), null;
      }
      case kn:
        break;
      case Ee:
      case He: {
        Zp(t);
        var La = t.memoizedState, Xo = La !== null;
        if (e !== null) {
          var Yl = e.memoizedState, ta = Yl !== null;
          ta !== Xo && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !Zn && (t.flags |= Ri);
        }
        return !Xo || (t.mode & _e) === ie ? Kt(t) : qn(ea, Yn) && (Kt(t), t.subtreeFlags & (Tt | Le) && (t.flags |= Ri)), null;
      }
      case ht:
        return null;
      case mt:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function AO(e, t, n) {
    switch (lv(t), t.tag) {
      case F: {
        var r = t.type;
        Wr(r) && Zs(t);
        var a = t.flags;
        return a & mn ? (t.flags = a & ~mn | Be, (t.mode & Ge) !== ie && op(t), t) : null;
      }
      case _: {
        t.stateNode, ko(t), av(t), kv();
        var i = t.flags;
        return (i & mn) !== le && (i & Be) === le ? (t.flags = i & ~mn | Be, t) : null;
      }
      case W:
        return Mv(t), null;
      case he: {
        Fo(t);
        var o = t.memoizedState;
        if (o !== null && o.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Mo();
        }
        var u = t.flags;
        return u & mn ? (t.flags = u & ~mn | Be, (t.mode & Ge) !== ie && op(t), t) : null;
      }
      case et:
        return Fo(t), null;
      case te:
        return ko(t), null;
      case Se:
        var l = t.type._context;
        return Cv(l, t), null;
      case Ee:
      case He:
        return Zp(t), null;
      case ht:
        return null;
      default:
        return null;
    }
  }
  function Rb(e, t, n) {
    switch (lv(t), t.tag) {
      case F: {
        var r = t.type.childContextTypes;
        r != null && Zs(t);
        break;
      }
      case _: {
        t.stateNode, ko(t), av(t), kv();
        break;
      }
      case W: {
        Mv(t);
        break;
      }
      case te:
        ko(t);
        break;
      case he:
        Fo(t);
        break;
      case et:
        Fo(t);
        break;
      case Se:
        var a = t.type._context;
        Cv(a, t);
        break;
      case Ee:
      case He:
        Zp(t);
        break;
    }
  }
  var Tb = null;
  Tb = /* @__PURE__ */ new Set();
  var qc = !1, Jt = !1, MO = typeof WeakSet == "function" ? WeakSet : Set, J = null, $o = null, Yo = null;
  function LO(e) {
    Hf(null, function() {
      throw e;
    }), jf();
  }
  var UO = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ge)
      try {
        Jr(), t.componentWillUnmount();
      } finally {
        Kr(e);
      }
    else
      t.componentWillUnmount();
  };
  function xb(e, t) {
    try {
      oi(Mt, e);
    } catch (n) {
      Ze(e, t, n);
    }
  }
  function Fp(e, t, n) {
    try {
      UO(e, n);
    } catch (r) {
      Ze(e, t, r);
    }
  }
  function NO(e, t, n) {
    try {
      n.componentDidMount();
    } catch (r) {
      Ze(e, t, r);
    }
  }
  function Db(e, t) {
    try {
      _b(e);
    } catch (n) {
      Ze(e, t, n);
    }
  }
  function qo(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var r;
        try {
          if (yr && gr && e.mode & Ge)
            try {
              Jr(), r = n(null);
            } finally {
              Kr(e);
            }
          else
            r = n(null);
        } catch (a) {
          Ze(e, t, a);
        }
        typeof r == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ye(e));
      } else
        n.current = null;
  }
  function Gc(e, t, n) {
    try {
      n();
    } catch (r) {
      Ze(e, t, r);
    }
  }
  var Ob = !1;
  function kO(e, t) {
    Wx(e.containerInfo), J = t, zO();
    var n = Ob;
    return Ob = !1, n;
  }
  function zO() {
    for (; J !== null; ) {
      var e = J, t = e.child;
      (e.subtreeFlags & Yf) !== le && t !== null ? (t.return = e, J = t) : FO();
    }
  }
  function FO() {
    for (; J !== null; ) {
      var e = J;
      ct(e);
      try {
        HO(e);
      } catch (n) {
        Ze(e, e.return, n);
      }
      Vt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, J = t;
        return;
      }
      J = e.return;
    }
  }
  function HO(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Ci) !== le) {
      switch (ct(e), e.tag) {
        case P:
        case me:
        case Me:
          break;
        case F: {
          if (t !== null) {
            var r = t.memoizedProps, a = t.memoizedState, i = e.stateNode;
            e.type === e.elementType && !$i && (i.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ye(e) || "instance"), i.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ye(e) || "instance"));
            var o = i.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Mr(e.type, r), a);
            {
              var u = Tb;
              o === void 0 && !u.has(e.type) && (u.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ye(e)));
            }
            i.__reactInternalSnapshotBeforeUpdate = o;
          }
          break;
        }
        case _: {
          {
            var l = e.stateNode;
            gD(l.containerInfo);
          }
          break;
        }
        case W:
        case V:
        case te:
        case Rn:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Vt();
    }
  }
  function Ur(e, t, n) {
    var r = t.updateQueue, a = r !== null ? r.lastEffect : null;
    if (a !== null) {
      var i = a.next, o = i;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && ((e & Xt) !== Ln ? ZC(t) : (e & Mt) !== Ln && mm(t), (e & Ir) !== Ln && Vl(!0), Gc(t, n, u), (e & Ir) !== Ln && Vl(!1), (e & Xt) !== Ln ? eR() : (e & Mt) !== Ln && ym());
        }
        o = o.next;
      } while (o !== i);
    }
  }
  function oi(e, t) {
    var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
    if (r !== null) {
      var a = r.next, i = a;
      do {
        if ((i.tag & e) === e) {
          (e & Xt) !== Ln ? KC(t) : (e & Mt) !== Ln && tR(t);
          var o = i.create;
          (e & Ir) !== Ln && Vl(!0), i.destroy = o(), (e & Ir) !== Ln && Vl(!1), (e & Xt) !== Ln ? JC() : (e & Mt) !== Ln && nR();
          {
            var u = i.destroy;
            if (u !== void 0 && typeof u != "function") {
              var l = void 0;
              (i.tag & Mt) !== le ? l = "useLayoutEffect" : (i.tag & Ir) !== le ? l = "useInsertionEffect" : l = "useEffect";
              var v = void 0;
              u === null ? v = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof u.then == "function" ? v = `

It looks like you wrote ` + l + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + l + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : v = " You returned: " + u, d("%s must not return anything besides a function, which is used for clean-up.%s", l, v);
            }
          }
        }
        i = i.next;
      } while (i !== a);
    }
  }
  function jO(e, t) {
    if ((t.flags & Le) !== le)
      switch (t.tag) {
        case lt: {
          var n = t.stateNode.passiveEffectDuration, r = t.memoizedProps, a = r.id, i = r.onPostCommit, o = $g(), u = t.alternate === null ? "mount" : "update";
          Pg() && (u = "nested-update"), typeof i == "function" && i(a, u, n, o);
          var l = t.return;
          e:
            for (; l !== null; ) {
              switch (l.tag) {
                case _:
                  var v = l.stateNode;
                  v.passiveEffectDuration += n;
                  break e;
                case lt:
                  var h = l.stateNode;
                  h.passiveEffectDuration += n;
                  break e;
              }
              l = l.return;
            }
          break;
        }
      }
  }
  function BO(e, t, n, r) {
    if ((n.flags & Ru) !== le)
      switch (n.tag) {
        case P:
        case me:
        case Me: {
          if (!Jt)
            if (n.mode & Ge)
              try {
                Jr(), oi(Mt | At, n);
              } finally {
                Kr(n);
              }
            else
              oi(Mt | At, n);
          break;
        }
        case F: {
          var a = n.stateNode;
          if (n.flags & Le && !Jt)
            if (t === null)
              if (n.type === n.elementType && !$i && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ye(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ye(n) || "instance")), n.mode & Ge)
                try {
                  Jr(), a.componentDidMount();
                } finally {
                  Kr(n);
                }
              else
                a.componentDidMount();
            else {
              var i = n.elementType === n.type ? t.memoizedProps : Mr(n.type, t.memoizedProps), o = t.memoizedState;
              if (n.type === n.elementType && !$i && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ye(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ye(n) || "instance")), n.mode & Ge)
                try {
                  Jr(), a.componentDidUpdate(i, o, a.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  Kr(n);
                }
              else
                a.componentDidUpdate(i, o, a.__reactInternalSnapshotBeforeUpdate);
            }
          var u = n.updateQueue;
          u !== null && (n.type === n.elementType && !$i && (a.props !== n.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ye(n) || "instance"), a.state !== n.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ye(n) || "instance")), vg(n, u, a));
          break;
        }
        case _: {
          var l = n.updateQueue;
          if (l !== null) {
            var v = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case W:
                  v = n.child.stateNode;
                  break;
                case F:
                  v = n.child.stateNode;
                  break;
              }
            vg(n, l, v);
          }
          break;
        }
        case W: {
          var h = n.stateNode;
          if (t === null && n.flags & Le) {
            var S = n.type, b = n.memoizedProps;
            aD(h, S, b);
          }
          break;
        }
        case V:
          break;
        case te:
          break;
        case lt: {
          {
            var x = n.memoizedProps, O = x.onCommit, A = x.onRender, G = n.stateNode.effectDuration, ae = $g(), ee = t === null ? "mount" : "update";
            Pg() && (ee = "nested-update"), typeof A == "function" && A(n.memoizedProps.id, ee, n.actualDuration, n.treeBaseDuration, n.actualStartTime, ae);
            {
              typeof O == "function" && O(n.memoizedProps.id, ee, G, ae), F_(n);
              var Ae = n.return;
              e:
                for (; Ae !== null; ) {
                  switch (Ae.tag) {
                    case _:
                      var xe = Ae.stateNode;
                      xe.effectDuration += G;
                      break e;
                    case lt:
                      var R = Ae.stateNode;
                      R.effectDuration += G;
                      break e;
                  }
                  Ae = Ae.return;
                }
            }
          }
          break;
        }
        case he: {
          IO(e, n);
          break;
        }
        case et:
        case Rn:
        case kn:
        case Ee:
        case He:
        case mt:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    Jt || n.flags & $a && _b(n);
  }
  function VO(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        if (e.mode & Ge)
          try {
            Jr(), xb(e, e.return);
          } finally {
            Kr(e);
          }
        else
          xb(e, e.return);
        break;
      }
      case F: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && NO(e, e.return, t), Db(e, e.return);
        break;
      }
      case W: {
        Db(e, e.return);
        break;
      }
    }
  }
  function PO(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === W) {
        if (n === null) {
          n = r;
          try {
            var a = r.stateNode;
            t ? pD(a) : mD(r.stateNode, r.memoizedProps);
          } catch (o) {
            Ze(e, e.return, o);
          }
        }
      } else if (r.tag === V) {
        if (n === null)
          try {
            var i = r.stateNode;
            t ? hD(i) : yD(i, r.memoizedProps);
          } catch (o) {
            Ze(e, e.return, o);
          }
      } else if (!((r.tag === Ee || r.tag === He) && r.memoizedState !== null && r !== e)) {
        if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
      }
      if (r === e)
        return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e)
          return;
        n === r && (n = null), r = r.return;
      }
      n === r && (n = null), r.sibling.return = r.return, r = r.sibling;
    }
  }
  function _b(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, r;
      switch (e.tag) {
        case W:
          r = n;
          break;
        default:
          r = n;
      }
      if (typeof t == "function") {
        var a;
        if (e.mode & Ge)
          try {
            Jr(), a = t(r);
          } finally {
            Kr(e);
          }
        else
          a = t(r);
        typeof a == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ye(e));
      } else
        t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ye(e)), t.current = r;
    }
  }
  function $O(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function wb(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wb(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === W) {
        var n = e.stateNode;
        n !== null && QD(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function YO(e) {
    for (var t = e.return; t !== null; ) {
      if (Ab(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Ab(e) {
    return e.tag === W || e.tag === _ || e.tag === te;
  }
  function Mb(e) {
    var t = e;
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Ab(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== W && t.tag !== V && t.tag !== Et; ) {
          if (t.flags & Tt || t.child === null || t.tag === te)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Tt))
          return t.stateNode;
      }
  }
  function qO(e) {
    var t = YO(e);
    switch (t.tag) {
      case W: {
        var n = t.stateNode;
        t.flags & Eu && (Uy(n), t.flags &= ~Eu);
        var r = Mb(e);
        jp(e, r, n);
        break;
      }
      case _:
      case te: {
        var a = t.stateNode.containerInfo, i = Mb(e);
        Hp(e, i, a);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Hp(e, t, n) {
    var r = e.tag, a = r === W || r === V;
    if (a) {
      var i = e.stateNode;
      t ? cD(n, i, t) : lD(n, i);
    } else if (r !== te) {
      var o = e.child;
      if (o !== null) {
        Hp(o, t, n);
        for (var u = o.sibling; u !== null; )
          Hp(u, t, n), u = u.sibling;
      }
    }
  }
  function jp(e, t, n) {
    var r = e.tag, a = r === W || r === V;
    if (a) {
      var i = e.stateNode;
      t ? sD(n, i, t) : uD(n, i);
    } else if (r !== te) {
      var o = e.child;
      if (o !== null) {
        jp(o, t, n);
        for (var u = o.sibling; u !== null; )
          jp(u, t, n), u = u.sibling;
      }
    }
  }
  var Zt = null, Nr = !1;
  function GO(e, t, n) {
    {
      var r = t;
      e:
        for (; r !== null; ) {
          switch (r.tag) {
            case W: {
              Zt = r.stateNode, Nr = !1;
              break e;
            }
            case _: {
              Zt = r.stateNode.containerInfo, Nr = !0;
              break e;
            }
            case te: {
              Zt = r.stateNode.containerInfo, Nr = !0;
              break e;
            }
          }
          r = r.return;
        }
      if (Zt === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      Lb(e, t, n), Zt = null, Nr = !1;
    }
    $O(n);
  }
  function ui(e, t, n) {
    for (var r = n.child; r !== null; )
      Lb(e, t, r), r = r.sibling;
  }
  function Lb(e, t, n) {
    switch (WC(n), n.tag) {
      case W:
        Jt || qo(n, t);
      case V: {
        {
          var r = Zt, a = Nr;
          Zt = null, ui(e, t, n), Zt = r, Nr = a, Zt !== null && (Nr ? dD(Zt, n.stateNode) : fD(Zt, n.stateNode));
        }
        return;
      }
      case Et: {
        Zt !== null && (Nr ? vD(Zt, n.stateNode) : Xd(Zt, n.stateNode));
        return;
      }
      case te: {
        {
          var i = Zt, o = Nr;
          Zt = n.stateNode.containerInfo, Nr = !0, ui(e, t, n), Zt = i, Nr = o;
        }
        return;
      }
      case P:
      case me:
      case rt:
      case Me: {
        if (!Jt) {
          var u = n.updateQueue;
          if (u !== null) {
            var l = u.lastEffect;
            if (l !== null) {
              var v = l.next, h = v;
              do {
                var S = h, b = S.destroy, x = S.tag;
                b !== void 0 && ((x & Ir) !== Ln ? Gc(n, t, b) : (x & Mt) !== Ln && (mm(n), n.mode & Ge ? (Jr(), Gc(n, t, b), Kr(n)) : Gc(n, t, b), ym())), h = h.next;
              } while (h !== v);
            }
          }
        }
        ui(e, t, n);
        return;
      }
      case F: {
        if (!Jt) {
          qo(n, t);
          var O = n.stateNode;
          typeof O.componentWillUnmount == "function" && Fp(n, t, O);
        }
        ui(e, t, n);
        return;
      }
      case kn: {
        ui(e, t, n);
        return;
      }
      case Ee: {
        if (
          // TODO: Remove this dead flag
          n.mode & _e
        ) {
          var A = Jt;
          Jt = A || n.memoizedState !== null, ui(e, t, n), Jt = A;
        } else
          ui(e, t, n);
        break;
      }
      default: {
        ui(e, t, n);
        return;
      }
    }
  }
  function WO(e) {
    e.memoizedState;
  }
  function IO(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var r = t.alternate;
      if (r !== null) {
        var a = r.memoizedState;
        if (a !== null) {
          var i = a.dehydrated;
          i !== null && LD(i);
        }
      }
    }
  }
  function Ub(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new MO()), t.forEach(function(r) {
        var a = Y_.bind(null, e, r);
        if (!n.has(r)) {
          if (n.add(r), Tr)
            if ($o !== null && Yo !== null)
              Bl(Yo, $o);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          r.then(a, a);
        }
      });
    }
  }
  function QO(e, t, n) {
    $o = n, Yo = e, ct(t), Nb(t, e), ct(t), $o = null, Yo = null;
  }
  function kr(e, t, n) {
    var r = t.deletions;
    if (r !== null)
      for (var a = 0; a < r.length; a++) {
        var i = r[a];
        try {
          GO(e, t, i);
        } catch (l) {
          Ze(i, t, l);
        }
      }
    var o = ns();
    if (t.subtreeFlags & qf)
      for (var u = t.child; u !== null; )
        ct(u), Nb(u, e), u = u.sibling;
    ct(o);
  }
  function Nb(e, t, n) {
    var r = e.alternate, a = e.flags;
    switch (e.tag) {
      case P:
      case me:
      case rt:
      case Me: {
        if (kr(t, e), Zr(e), a & Le) {
          try {
            Ur(Ir | At, e, e.return), oi(Ir | At, e);
          } catch (ce) {
            Ze(e, e.return, ce);
          }
          if (e.mode & Ge) {
            try {
              Jr(), Ur(Mt | At, e, e.return);
            } catch (ce) {
              Ze(e, e.return, ce);
            }
            Kr(e);
          } else
            try {
              Ur(Mt | At, e, e.return);
            } catch (ce) {
              Ze(e, e.return, ce);
            }
        }
        return;
      }
      case F: {
        kr(t, e), Zr(e), a & $a && r !== null && qo(r, r.return);
        return;
      }
      case W: {
        kr(t, e), Zr(e), a & $a && r !== null && qo(r, r.return);
        {
          if (e.flags & Eu) {
            var i = e.stateNode;
            try {
              Uy(i);
            } catch (ce) {
              Ze(e, e.return, ce);
            }
          }
          if (a & Le) {
            var o = e.stateNode;
            if (o != null) {
              var u = e.memoizedProps, l = r !== null ? r.memoizedProps : u, v = e.type, h = e.updateQueue;
              if (e.updateQueue = null, h !== null)
                try {
                  iD(o, h, v, l, u, e);
                } catch (ce) {
                  Ze(e, e.return, ce);
                }
            }
          }
        }
        return;
      }
      case V: {
        if (kr(t, e), Zr(e), a & Le) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var S = e.stateNode, b = e.memoizedProps, x = r !== null ? r.memoizedProps : b;
          try {
            oD(S, x, b);
          } catch (ce) {
            Ze(e, e.return, ce);
          }
        }
        return;
      }
      case _: {
        if (kr(t, e), Zr(e), a & Le && r !== null) {
          var O = r.memoizedState;
          if (O.isDehydrated)
            try {
              MD(t.containerInfo);
            } catch (ce) {
              Ze(e, e.return, ce);
            }
        }
        return;
      }
      case te: {
        kr(t, e), Zr(e);
        return;
      }
      case he: {
        kr(t, e), Zr(e);
        var A = e.child;
        if (A.flags & Ri) {
          var G = A.stateNode, ae = A.memoizedState, ee = ae !== null;
          if (G.isHidden = ee, ee) {
            var Ae = A.alternate !== null && A.alternate.memoizedState !== null;
            Ae || w_();
          }
        }
        if (a & Le) {
          try {
            WO(e);
          } catch (ce) {
            Ze(e, e.return, ce);
          }
          Ub(e);
        }
        return;
      }
      case Ee: {
        var xe = r !== null && r.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & _e
        ) {
          var R = Jt;
          Jt = R || xe, kr(t, e), Jt = R;
        } else
          kr(t, e);
        if (Zr(e), a & Ri) {
          var M = e.stateNode, T = e.memoizedState, z = T !== null, K = e;
          if (M.isHidden = z, z && !xe && (K.mode & _e) !== ie) {
            J = K;
            for (var I = K.child; I !== null; )
              J = I, KO(I), I = I.sibling;
          }
          PO(K, z);
        }
        return;
      }
      case et: {
        kr(t, e), Zr(e), a & Le && Ub(e);
        return;
      }
      case kn:
        return;
      default: {
        kr(t, e), Zr(e);
        return;
      }
    }
  }
  function Zr(e) {
    var t = e.flags;
    if (t & Tt) {
      try {
        qO(e);
      } catch (n) {
        Ze(e, e.return, n);
      }
      e.flags &= ~Tt;
    }
    t & ha && (e.flags &= ~ha);
  }
  function XO(e, t, n) {
    $o = n, Yo = t, J = e, kb(e, t, n), $o = null, Yo = null;
  }
  function kb(e, t, n) {
    for (var r = (e.mode & _e) !== ie; J !== null; ) {
      var a = J, i = a.child;
      if (a.tag === Ee && r) {
        var o = a.memoizedState !== null, u = o || qc;
        if (u) {
          Bp(e, t, n);
          continue;
        } else {
          var l = a.alternate, v = l !== null && l.memoizedState !== null, h = v || Jt, S = qc, b = Jt;
          qc = u, Jt = h, Jt && !b && (J = a, JO(a));
          for (var x = i; x !== null; )
            J = x, kb(
              x,
              // New root; bubble back up to here and stop.
              t,
              n
            ), x = x.sibling;
          J = a, qc = S, Jt = b, Bp(e, t, n);
          continue;
        }
      }
      (a.subtreeFlags & Ru) !== le && i !== null ? (i.return = a, J = i) : Bp(e, t, n);
    }
  }
  function Bp(e, t, n) {
    for (; J !== null; ) {
      var r = J;
      if ((r.flags & Ru) !== le) {
        var a = r.alternate;
        ct(r);
        try {
          BO(t, a, r, n);
        } catch (o) {
          Ze(r, r.return, o);
        }
        Vt();
      }
      if (r === e) {
        J = null;
        return;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, J = i;
        return;
      }
      J = r.return;
    }
  }
  function KO(e) {
    for (; J !== null; ) {
      var t = J, n = t.child;
      switch (t.tag) {
        case P:
        case me:
        case rt:
        case Me: {
          if (t.mode & Ge)
            try {
              Jr(), Ur(Mt, t, t.return);
            } finally {
              Kr(t);
            }
          else
            Ur(Mt, t, t.return);
          break;
        }
        case F: {
          qo(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Fp(t, t.return, r);
          break;
        }
        case W: {
          qo(t, t.return);
          break;
        }
        case Ee: {
          var a = t.memoizedState !== null;
          if (a) {
            zb(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, J = n) : zb(e);
    }
  }
  function zb(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, J = n;
        return;
      }
      J = t.return;
    }
  }
  function JO(e) {
    for (; J !== null; ) {
      var t = J, n = t.child;
      if (t.tag === Ee) {
        var r = t.memoizedState !== null;
        if (r) {
          Fb(e);
          continue;
        }
      }
      n !== null ? (n.return = t, J = n) : Fb(e);
    }
  }
  function Fb(e) {
    for (; J !== null; ) {
      var t = J;
      ct(t);
      try {
        VO(t);
      } catch (r) {
        Ze(t, t.return, r);
      }
      if (Vt(), t === e) {
        J = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, J = n;
        return;
      }
      J = t.return;
    }
  }
  function ZO(e, t, n, r) {
    J = t, e_(t, e, n, r);
  }
  function e_(e, t, n, r) {
    for (; J !== null; ) {
      var a = J, i = a.child;
      (a.subtreeFlags & co) !== le && i !== null ? (i.return = a, J = i) : t_(e, t, n, r);
    }
  }
  function t_(e, t, n, r) {
    for (; J !== null; ) {
      var a = J;
      if ((a.flags & Rr) !== le) {
        ct(a);
        try {
          n_(t, a, n, r);
        } catch (o) {
          Ze(a, a.return, o);
        }
        Vt();
      }
      if (a === e) {
        J = null;
        return;
      }
      var i = a.sibling;
      if (i !== null) {
        i.return = a.return, J = i;
        return;
      }
      J = a.return;
    }
  }
  function n_(e, t, n, r) {
    switch (t.tag) {
      case P:
      case me:
      case Me: {
        if (t.mode & Ge) {
          ip();
          try {
            oi(Xt | At, t);
          } finally {
            ap(t);
          }
        } else
          oi(Xt | At, t);
        break;
      }
    }
  }
  function r_(e) {
    J = e, a_();
  }
  function a_() {
    for (; J !== null; ) {
      var e = J, t = e.child;
      if ((J.flags & Ei) !== le) {
        var n = e.deletions;
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r];
            J = a, u_(a, e);
          }
          {
            var i = e.alternate;
            if (i !== null) {
              var o = i.child;
              if (o !== null) {
                i.child = null;
                do {
                  var u = o.sibling;
                  o.sibling = null, o = u;
                } while (o !== null);
              }
            }
          }
          J = e;
        }
      }
      (e.subtreeFlags & co) !== le && t !== null ? (t.return = e, J = t) : i_();
    }
  }
  function i_() {
    for (; J !== null; ) {
      var e = J;
      (e.flags & Rr) !== le && (ct(e), o_(e), Vt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, J = t;
        return;
      }
      J = e.return;
    }
  }
  function o_(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        e.mode & Ge ? (ip(), Ur(Xt | At, e, e.return), ap(e)) : Ur(Xt | At, e, e.return);
        break;
      }
    }
  }
  function u_(e, t) {
    for (; J !== null; ) {
      var n = J;
      ct(n), s_(n, t), Vt();
      var r = n.child;
      r !== null ? (r.return = n, J = r) : l_(e);
    }
  }
  function l_(e) {
    for (; J !== null; ) {
      var t = J, n = t.sibling, r = t.return;
      if (wb(t), t === e) {
        J = null;
        return;
      }
      if (n !== null) {
        n.return = r, J = n;
        return;
      }
      J = r;
    }
  }
  function s_(e, t) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        e.mode & Ge ? (ip(), Ur(Xt, e, t), ap(e)) : Ur(Xt, e, t);
        break;
      }
    }
  }
  function c_(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        try {
          oi(Mt | At, e);
        } catch (n) {
          Ze(e, e.return, n);
        }
        break;
      }
      case F: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          Ze(e, e.return, n);
        }
        break;
      }
    }
  }
  function f_(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        try {
          oi(Xt | At, e);
        } catch (t) {
          Ze(e, e.return, t);
        }
        break;
      }
    }
  }
  function d_(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me: {
        try {
          Ur(Mt | At, e, e.return);
        } catch (n) {
          Ze(e, e.return, n);
        }
        break;
      }
      case F: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Fp(e, e.return, t);
        break;
      }
    }
  }
  function v_(e) {
    switch (e.tag) {
      case P:
      case me:
      case Me:
        try {
          Ur(Xt | At, e, e.return);
        } catch (t) {
          Ze(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var wl = Symbol.for;
    wl("selector.component"), wl("selector.has_pseudo_class"), wl("selector.role"), wl("selector.test_id"), wl("selector.text");
  }
  var p_ = [];
  function h_() {
    p_.forEach(function(e) {
      return e();
    });
  }
  var m_ = p.ReactCurrentActQueue;
  function y_(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function Hb() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && m_.current !== null && d("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var g_ = Math.ceil, Vp = p.ReactCurrentDispatcher, Pp = p.ReactCurrentOwner, en = p.ReactCurrentBatchConfig, zr = p.ReactCurrentActQueue, Nt = (
    /*             */
    0
  ), jb = (
    /*               */
    1
  ), tn = (
    /*                */
    2
  ), dr = (
    /*                */
    4
  ), _a = 0, Al = 1, Yi = 2, Wc = 3, Ml = 4, Bb = 5, $p = 6, we = Nt, gn = null, ft = null, kt = N, ea = N, Yp = Ka(N), zt = _a, Ll = null, Ic = N, Ul = N, Qc = N, Nl = null, Un = null, qp = 0, Vb = 500, Pb = 1 / 0, b_ = 500, wa = null;
  function kl() {
    Pb = Pt() + b_;
  }
  function $b() {
    return Pb;
  }
  var Xc = !1, Gp = null, Go = null, qi = !1, li = null, zl = N, Wp = [], Ip = null, S_ = 50, Fl = 0, Qp = null, Xp = !1, Kc = !1, E_ = 50, Wo = 0, Jc = null, Hl = nt, Zc = N, Yb = !1;
  function ef() {
    return gn;
  }
  function bn() {
    return (we & (tn | dr)) !== Nt ? Pt() : (Hl !== nt || (Hl = Pt()), Hl);
  }
  function si(e) {
    var t = e.mode;
    if ((t & _e) === ie)
      return de;
    if ((we & tn) !== Nt && kt !== N)
      return Au(kt);
    var n = m0() !== h0;
    if (n) {
      if (en.transition !== null) {
        var r = en.transition;
        r._updatedFibers || (r._updatedFibers = /* @__PURE__ */ new Set()), r._updatedFibers.add(e);
      }
      return Zc === Yt && (Zc = xm()), Zc;
    }
    var a = xr();
    if (a !== Yt)
      return a;
    var i = eD();
    return i;
  }
  function C_(e) {
    var t = e.mode;
    return (t & _e) === ie ? de : TR();
  }
  function Ft(e, t, n, r) {
    G_(), Yb && d("useInsertionEffect must not schedule updates."), Xp && (Kc = !0), Mu(e, n, r), (we & tn) !== N && e === gn ? Q_(t) : (Tr && _m(e, t, n), X_(t), e === gn && ((we & tn) === Nt && (Ul = be(Ul, n)), zt === Ml && ci(e, kt)), Nn(e, r), n === de && we === Nt && (t.mode & _e) === ie && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !zr.isBatchingLegacy && (kl(), Yy()));
  }
  function R_(e, t, n) {
    var r = e.current;
    r.lanes = t, Mu(e, t, n), Nn(e, n);
  }
  function T_(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (we & tn) !== Nt
    );
  }
  function Nn(e, t) {
    var n = e.callbackNode;
    gR(e, t);
    var r = Es(e, e === gn ? kt : N);
    if (r === N) {
      n !== null && oS(n), e.callbackNode = null, e.callbackPriority = Yt;
      return;
    }
    var a = wi(r), i = e.callbackPriority;
    if (i === a && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(zr.current !== null && n !== rh)) {
      n == null && i !== de && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && oS(n);
    var o;
    if (a === de)
      e.tag === Ja ? (zr.isBatchingLegacy !== null && (zr.didScheduleLegacyUpdate = !0), JD(Wb.bind(null, e))) : $y(Wb.bind(null, e)), zr.current !== null ? zr.current.push(Za) : nD(function() {
        (we & (tn | dr)) === Nt && Za();
      }), o = null;
    else {
      var u;
      switch (Mm(r)) {
        case Gn:
          u = ys;
          break;
        case ba:
          u = Gf;
          break;
        case Sa:
          u = Di;
          break;
        case Ts:
          u = Wf;
          break;
        default:
          u = Di;
          break;
      }
      o = ah(u, qb.bind(null, e));
    }
    e.callbackPriority = a, e.callbackNode = o;
  }
  function qb(e, t) {
    if (P0(), Hl = nt, Zc = N, (we & (tn | dr)) !== Nt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, r = Ma();
    if (r && e.callbackNode !== n)
      return null;
    var a = Es(e, e === gn ? kt : N);
    if (a === N)
      return null;
    var i = !Cs(e, a) && !RR(e, a) && !t, o = i ? N_(e, a) : nf(e, a);
    if (o !== _a) {
      if (o === Yi) {
        var u = hd(e);
        u !== N && (a = u, o = Kp(e, u));
      }
      if (o === Al) {
        var l = Ll;
        throw Gi(e, N), ci(e, a), Nn(e, Pt()), l;
      }
      if (o === $p)
        ci(e, a);
      else {
        var v = !Cs(e, a), h = e.current.alternate;
        if (v && !D_(h)) {
          if (o = nf(e, a), o === Yi) {
            var S = hd(e);
            S !== N && (a = S, o = Kp(e, S));
          }
          if (o === Al) {
            var b = Ll;
            throw Gi(e, N), ci(e, a), Nn(e, Pt()), b;
          }
        }
        e.finishedWork = h, e.finishedLanes = a, x_(e, o, a);
      }
    }
    return Nn(e, Pt()), e.callbackNode === n ? qb.bind(null, e) : null;
  }
  function Kp(e, t) {
    var n = Nl;
    if (xs(e)) {
      var r = Gi(e, t);
      r.flags |= pa, qD(e.containerInfo);
    }
    var a = nf(e, t);
    if (a !== Yi) {
      var i = Un;
      Un = n, i !== null && Gb(i);
    }
    return a;
  }
  function Gb(e) {
    Un === null ? Un = e : Un.push.apply(Un, e);
  }
  function x_(e, t, n) {
    switch (t) {
      case _a:
      case Al:
        throw new Error("Root did not complete. This is a bug in React.");
      case Yi: {
        Wi(e, Un, wa);
        break;
      }
      case Wc: {
        if (ci(e, n), Rm(n) && // do not delay if we're inside an act() scope
        !uS()) {
          var r = qp + Vb - Pt();
          if (r > 10) {
            var a = Es(e, N);
            if (a !== N)
              break;
            var i = e.suspendedLanes;
            if (!yo(i, n)) {
              bn(), Om(e, i);
              break;
            }
            e.timeoutHandle = Id(Wi.bind(null, e, Un, wa), r);
            break;
          }
        }
        Wi(e, Un, wa);
        break;
      }
      case Ml: {
        if (ci(e, n), CR(n))
          break;
        if (!uS()) {
          var o = mR(e, n), u = o, l = Pt() - u, v = q_(l) - l;
          if (v > 10) {
            e.timeoutHandle = Id(Wi.bind(null, e, Un, wa), v);
            break;
          }
        }
        Wi(e, Un, wa);
        break;
      }
      case Bb: {
        Wi(e, Un, wa);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function D_(e) {
    for (var t = e; ; ) {
      if (t.flags & hs) {
        var n = t.updateQueue;
        if (n !== null) {
          var r = n.stores;
          if (r !== null)
            for (var a = 0; a < r.length; a++) {
              var i = r[a], o = i.getSnapshot, u = i.value;
              try {
                if (!In(o(), u))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var l = t.child;
      if (t.subtreeFlags & hs && l !== null) {
        l.return = t, t = l;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function ci(e, t) {
    t = Rs(t, Qc), t = Rs(t, Ul), DR(e, t);
  }
  function Wb(e) {
    if ($0(), (we & (tn | dr)) !== Nt)
      throw new Error("Should not already be working.");
    Ma();
    var t = Es(e, N);
    if (!qn(t, de))
      return Nn(e, Pt()), null;
    var n = nf(e, t);
    if (e.tag !== Ja && n === Yi) {
      var r = hd(e);
      r !== N && (t = r, n = Kp(e, r));
    }
    if (n === Al) {
      var a = Ll;
      throw Gi(e, N), ci(e, t), Nn(e, Pt()), a;
    }
    if (n === $p)
      throw new Error("Root did not complete. This is a bug in React.");
    var i = e.current.alternate;
    return e.finishedWork = i, e.finishedLanes = t, Wi(e, Un, wa), Nn(e, Pt()), null;
  }
  function O_(e, t) {
    t !== N && (bd(e, be(t, de)), Nn(e, Pt()), (we & (tn | dr)) === Nt && (kl(), Za()));
  }
  function Jp(e, t) {
    var n = we;
    we |= jb;
    try {
      return e(t);
    } finally {
      we = n, we === Nt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !zr.isBatchingLegacy && (kl(), Yy());
    }
  }
  function __(e, t, n, r, a) {
    var i = xr(), o = en.transition;
    try {
      return en.transition = null, qt(Gn), e(t, n, r, a);
    } finally {
      qt(i), en.transition = o, we === Nt && kl();
    }
  }
  function Aa(e) {
    li !== null && li.tag === Ja && (we & (tn | dr)) === Nt && Ma();
    var t = we;
    we |= jb;
    var n = en.transition, r = xr();
    try {
      return en.transition = null, qt(Gn), e ? e() : void 0;
    } finally {
      qt(r), en.transition = n, we = t, (we & (tn | dr)) === Nt && Za();
    }
  }
  function Ib() {
    return (we & (tn | dr)) !== Nt;
  }
  function tf(e, t) {
    cn(Yp, ea, e), ea = be(ea, t);
  }
  function Zp(e) {
    ea = Yp.current, sn(Yp, e);
  }
  function Gi(e, t) {
    e.finishedWork = null, e.finishedLanes = N;
    var n = e.timeoutHandle;
    if (n !== Qd && (e.timeoutHandle = Qd, tD(n)), ft !== null)
      for (var r = ft.return; r !== null; ) {
        var a = r.alternate;
        Rb(a, r), r = r.return;
      }
    gn = e;
    var i = Ii(e.current, null);
    return ft = i, kt = ea = t, zt = _a, Ll = null, Ic = N, Ul = N, Qc = N, Nl = null, Un = null, R0(), _r.discardPendingWarnings(), i;
  }
  function Qb(e, t) {
    do {
      var n = ft;
      try {
        if (fc(), bg(), Vt(), Pp.current = null, n === null || n.return === null) {
          zt = Al, Ll = t, ft = null;
          return;
        }
        if (yr && n.mode & Ge && Bc(n, !0), Hr)
          if (vo(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var r = t;
            aR(n, r, kt);
          } else
            rR(n, t, kt);
        J0(e, n.return, n, t, kt), Zb(n);
      } catch (a) {
        t = a, ft === n && n !== null ? (n = n.return, ft = n) : n = ft;
        continue;
      }
      return;
    } while (!0);
  }
  function Xb() {
    var e = Vp.current;
    return Vp.current = kc, e === null ? kc : e;
  }
  function Kb(e) {
    Vp.current = e;
  }
  function w_() {
    qp = Pt();
  }
  function jl(e) {
    Ic = be(e, Ic);
  }
  function A_() {
    zt === _a && (zt = Wc);
  }
  function eh() {
    (zt === _a || zt === Wc || zt === Yi) && (zt = Ml), gn !== null && (md(Ic) || md(Ul)) && ci(gn, kt);
  }
  function M_(e) {
    zt !== Ml && (zt = Yi), Nl === null ? Nl = [e] : Nl.push(e);
  }
  function L_() {
    return zt === _a;
  }
  function nf(e, t) {
    var n = we;
    we |= tn;
    var r = Xb();
    if (gn !== e || kt !== t) {
      if (Tr) {
        var a = e.memoizedUpdaters;
        a.size > 0 && (Bl(e, kt), a.clear()), wm(e, t);
      }
      wa = Am(), Gi(e, t);
    }
    gm(t);
    do
      try {
        U_();
        break;
      } catch (i) {
        Qb(e, i);
      }
    while (!0);
    if (fc(), we = n, Kb(r), ft !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return bm(), gn = null, kt = N, zt;
  }
  function U_() {
    for (; ft !== null; )
      Jb(ft);
  }
  function N_(e, t) {
    var n = we;
    we |= tn;
    var r = Xb();
    if (gn !== e || kt !== t) {
      if (Tr) {
        var a = e.memoizedUpdaters;
        a.size > 0 && (Bl(e, kt), a.clear()), wm(e, t);
      }
      wa = Am(), kl(), Gi(e, t);
    }
    gm(t);
    do
      try {
        k_();
        break;
      } catch (i) {
        Qb(e, i);
      }
    while (!0);
    return fc(), Kb(r), we = n, ft !== null ? (sR(), _a) : (bm(), gn = null, kt = N, zt);
  }
  function k_() {
    for (; ft !== null && !FC(); )
      Jb(ft);
  }
  function Jb(e) {
    var t = e.alternate;
    ct(e);
    var n;
    (e.mode & Ge) !== ie ? (rp(e), n = th(t, e, ea), Bc(e, !0)) : n = th(t, e, ea), Vt(), e.memoizedProps = e.pendingProps, n === null ? Zb(e) : ft = n, Pp.current = null;
  }
  function Zb(e) {
    var t = e;
    do {
      var n = t.alternate, r = t.return;
      if ((t.flags & Cu) === le) {
        ct(t);
        var a = void 0;
        if ((t.mode & Ge) === ie ? a = Cb(n, t, ea) : (rp(t), a = Cb(n, t, ea), Bc(t, !1)), Vt(), a !== null) {
          ft = a;
          return;
        }
      } else {
        var i = AO(n, t);
        if (i !== null) {
          i.flags &= MC, ft = i;
          return;
        }
        if ((t.mode & Ge) !== ie) {
          Bc(t, !1);
          for (var o = t.actualDuration, u = t.child; u !== null; )
            o += u.actualDuration, u = u.sibling;
          t.actualDuration = o;
        }
        if (r !== null)
          r.flags |= Cu, r.subtreeFlags = le, r.deletions = null;
        else {
          zt = $p, ft = null;
          return;
        }
      }
      var l = t.sibling;
      if (l !== null) {
        ft = l;
        return;
      }
      t = r, ft = t;
    } while (t !== null);
    zt === _a && (zt = Bb);
  }
  function Wi(e, t, n) {
    var r = xr(), a = en.transition;
    try {
      en.transition = null, qt(Gn), z_(e, t, n, r);
    } finally {
      en.transition = a, qt(r);
    }
    return null;
  }
  function z_(e, t, n, r) {
    do
      Ma();
    while (li !== null);
    if (W_(), (we & (tn | dr)) !== Nt)
      throw new Error("Should not already be working.");
    var a = e.finishedWork, i = e.finishedLanes;
    if (XC(i), a === null)
      return hm(), null;
    if (i === N && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = N, a === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Yt;
    var o = be(a.lanes, a.childLanes);
    OR(e, o), e === gn && (gn = null, ft = null, kt = N), ((a.subtreeFlags & co) !== le || (a.flags & co) !== le) && (qi || (qi = !0, Ip = n, ah(Di, function() {
      return Ma(), null;
    })));
    var u = (a.subtreeFlags & (Yf | qf | Ru | co)) !== le, l = (a.flags & (Yf | qf | Ru | co)) !== le;
    if (u || l) {
      var v = en.transition;
      en.transition = null;
      var h = xr();
      qt(Gn);
      var S = we;
      we |= dr, Pp.current = null, kO(e, a), Yg(), QO(e, a, i), Ix(e.containerInfo), e.current = a, iR(i), XO(a, e, i), oR(), HC(), we = S, qt(h), en.transition = v;
    } else
      e.current = a, Yg();
    var b = qi;
    if (qi ? (qi = !1, li = e, zl = i) : (Wo = 0, Jc = null), o = e.pendingLanes, o === N && (Go = null), b || rS(e.current, !1), qC(a.stateNode, r), Tr && e.memoizedUpdaters.clear(), h_(), Nn(e, Pt()), t !== null)
      for (var x = e.onRecoverableError, O = 0; O < t.length; O++) {
        var A = t[O], G = A.stack, ae = A.digest;
        x(A.value, {
          componentStack: G,
          digest: ae
        });
      }
    if (Xc) {
      Xc = !1;
      var ee = Gp;
      throw Gp = null, ee;
    }
    return qn(zl, de) && e.tag !== Ja && Ma(), o = e.pendingLanes, qn(o, de) ? (V0(), e === Qp ? Fl++ : (Fl = 0, Qp = e)) : Fl = 0, Za(), hm(), null;
  }
  function Ma() {
    if (li !== null) {
      var e = Mm(zl), t = MR(Sa, e), n = en.transition, r = xr();
      try {
        return en.transition = null, qt(t), H_();
      } finally {
        qt(r), en.transition = n;
      }
    }
    return !1;
  }
  function F_(e) {
    Wp.push(e), qi || (qi = !0, ah(Di, function() {
      return Ma(), null;
    }));
  }
  function H_() {
    if (li === null)
      return !1;
    var e = Ip;
    Ip = null;
    var t = li, n = zl;
    if (li = null, zl = N, (we & (tn | dr)) !== Nt)
      throw new Error("Cannot flush passive effects while already rendering.");
    Xp = !0, Kc = !1, uR(n);
    var r = we;
    we |= dr, r_(t.current), ZO(t, t.current, n, e);
    {
      var a = Wp;
      Wp = [];
      for (var i = 0; i < a.length; i++) {
        var o = a[i];
        jO(t, o);
      }
    }
    lR(), rS(t.current, !0), we = r, Za(), Kc ? t === Jc ? Wo++ : (Wo = 0, Jc = t) : Wo = 0, Xp = !1, Kc = !1, GC(t);
    {
      var u = t.current.stateNode;
      u.effectDuration = 0, u.passiveEffectDuration = 0;
    }
    return !0;
  }
  function eS(e) {
    return Go !== null && Go.has(e);
  }
  function j_(e) {
    Go === null ? Go = /* @__PURE__ */ new Set([e]) : Go.add(e);
  }
  function B_(e) {
    Xc || (Xc = !0, Gp = e);
  }
  var V_ = B_;
  function tS(e, t, n) {
    var r = Pi(n, t), a = Jg(e, r, de), i = ti(e, a, de), o = bn();
    i !== null && (Mu(i, de, o), Nn(i, o));
  }
  function Ze(e, t, n) {
    if (LO(n), Vl(!1), e.tag === _) {
      tS(e, e, n);
      return;
    }
    var r = null;
    for (r = t; r !== null; ) {
      if (r.tag === _) {
        tS(r, e, n);
        return;
      } else if (r.tag === F) {
        var a = r.type, i = r.stateNode;
        if (typeof a.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !eS(i)) {
          var o = Pi(n, e), u = Ep(r, o, de), l = ti(r, u, de), v = bn();
          l !== null && (Mu(l, de, v), Nn(l, v));
          return;
        }
      }
      r = r.return;
    }
    d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function P_(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t);
    var a = bn();
    Om(e, n), K_(e), gn === e && yo(kt, n) && (zt === Ml || zt === Wc && Rm(kt) && Pt() - qp < Vb ? Gi(e, N) : Qc = be(Qc, n)), Nn(e, a);
  }
  function nS(e, t) {
    t === Yt && (t = C_(e));
    var n = bn(), r = Mn(e, t);
    r !== null && (Mu(r, t, n), Nn(r, n));
  }
  function $_(e) {
    var t = e.memoizedState, n = Yt;
    t !== null && (n = t.retryLane), nS(e, n);
  }
  function Y_(e, t) {
    var n = Yt, r;
    switch (e.tag) {
      case he:
        r = e.stateNode;
        var a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case et:
        r = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    r !== null && r.delete(t), nS(e, n);
  }
  function q_(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : g_(e / 1960) * 1960;
  }
  function G_() {
    if (Fl > S_)
      throw Fl = 0, Qp = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    Wo > E_ && (Wo = 0, Jc = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function W_() {
    _r.flushLegacyContextWarning(), _r.flushPendingUnsafeLifecycleWarnings();
  }
  function rS(e, t) {
    ct(e), rf(e, ma, d_), t && rf(e, ms, v_), rf(e, ma, c_), t && rf(e, ms, f_), Vt();
  }
  function rf(e, t, n) {
    for (var r = e, a = null; r !== null; ) {
      var i = r.subtreeFlags & t;
      r !== a && r.child !== null && i !== le ? r = r.child : ((r.flags & t) !== le && n(r), r.sibling !== null ? r = r.sibling : r = a = r.return);
    }
  }
  var af = null;
  function aS(e) {
    {
      if ((we & tn) !== Nt || !(e.mode & _e))
        return;
      var t = e.tag;
      if (t !== Y && t !== _ && t !== F && t !== P && t !== me && t !== rt && t !== Me)
        return;
      var n = ye(e) || "ReactComponent";
      if (af !== null) {
        if (af.has(n))
          return;
        af.add(n);
      } else
        af = /* @__PURE__ */ new Set([n]);
      var r = un;
      try {
        ct(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        r ? ct(e) : Vt();
      }
    }
  }
  var th;
  {
    var I_ = null;
    th = function(e, t, n) {
      var r = dS(I_, t);
      try {
        return yb(e, t, n);
      } catch (i) {
        if (o0() || i !== null && typeof i == "object" && typeof i.then == "function")
          throw i;
        if (fc(), bg(), Rb(e, t), dS(t, r), t.mode & Ge && rp(t), Hf(null, yb, null, e, t, n), OC()) {
          var a = jf();
          typeof a == "object" && a !== null && a._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
        }
        throw i;
      }
    };
  }
  var iS = !1, nh;
  nh = /* @__PURE__ */ new Set();
  function Q_(e) {
    if (gi && !H0())
      switch (e.tag) {
        case P:
        case me:
        case Me: {
          var t = ft && ye(ft) || "Unknown", n = t;
          if (!nh.has(n)) {
            nh.add(n);
            var r = ye(e) || "Unknown";
            d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", r, t, t);
          }
          break;
        }
        case F: {
          iS || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iS = !0);
          break;
        }
      }
  }
  function Bl(e, t) {
    if (Tr) {
      var n = e.memoizedUpdaters;
      n.forEach(function(r) {
        _m(e, r, t);
      });
    }
  }
  var rh = {};
  function ah(e, t) {
    {
      var n = zr.current;
      return n !== null ? (n.push(t), rh) : pm(e, t);
    }
  }
  function oS(e) {
    if (e !== rh)
      return zC(e);
  }
  function uS() {
    return zr.current !== null;
  }
  function X_(e) {
    {
      if (e.mode & _e) {
        if (!Hb())
          return;
      } else if (!y_() || we !== Nt || e.tag !== P && e.tag !== me && e.tag !== Me)
        return;
      if (zr.current === null) {
        var t = un;
        try {
          ct(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ye(e));
        } finally {
          t ? ct(e) : Vt();
        }
      }
    }
  }
  function K_(e) {
    e.tag !== Ja && Hb() && zr.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function Vl(e) {
    Yb = e;
  }
  var vr = null, Io = null, J_ = function(e) {
    vr = e;
  };
  function Qo(e) {
    {
      if (vr === null)
        return e;
      var t = vr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function ih(e) {
    return Qo(e);
  }
  function oh(e) {
    {
      if (vr === null)
        return e;
      var t = vr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = Qo(e.render);
          if (e.render !== n) {
            var r = {
              $$typeof: H,
              render: n
            };
            return e.displayName !== void 0 && (r.displayName = e.displayName), r;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function lS(e, t) {
    {
      if (vr === null)
        return !1;
      var n = e.elementType, r = t.type, a = !1, i = typeof r == "object" && r !== null ? r.$$typeof : null;
      switch (e.tag) {
        case F: {
          typeof r == "function" && (a = !0);
          break;
        }
        case P: {
          (typeof r == "function" || i === ue) && (a = !0);
          break;
        }
        case me: {
          (i === H || i === ue) && (a = !0);
          break;
        }
        case rt:
        case Me: {
          (i === Ue || i === ue) && (a = !0);
          break;
        }
        default:
          return !1;
      }
      if (a) {
        var o = vr(n);
        if (o !== void 0 && o === vr(r))
          return !0;
      }
      return !1;
    }
  }
  function sS(e) {
    {
      if (vr === null || typeof WeakSet != "function")
        return;
      Io === null && (Io = /* @__PURE__ */ new WeakSet()), Io.add(e);
    }
  }
  var Z_ = function(e, t) {
    {
      if (vr === null)
        return;
      var n = t.staleFamilies, r = t.updatedFamilies;
      Ma(), Aa(function() {
        uh(e.current, r, n);
      });
    }
  }, ew = function(e, t) {
    {
      if (e.context !== Qn)
        return;
      Ma(), Aa(function() {
        Pl(t, e, null, null);
      });
    }
  };
  function uh(e, t, n) {
    {
      var r = e.alternate, a = e.child, i = e.sibling, o = e.tag, u = e.type, l = null;
      switch (o) {
        case P:
        case Me:
        case F:
          l = u;
          break;
        case me:
          l = u.render;
          break;
      }
      if (vr === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var v = !1, h = !1;
      if (l !== null) {
        var S = vr(l);
        S !== void 0 && (n.has(S) ? h = !0 : t.has(S) && (o === F ? h = !0 : v = !0));
      }
      if (Io !== null && (Io.has(e) || r !== null && Io.has(r)) && (h = !0), h && (e._debugNeedsRemount = !0), h || v) {
        var b = Mn(e, de);
        b !== null && Ft(b, e, de, nt);
      }
      a !== null && !h && uh(a, t, n), i !== null && uh(i, t, n);
    }
  }
  var tw = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), r = new Set(t.map(function(a) {
        return a.current;
      }));
      return lh(e.current, r, n), n;
    }
  };
  function lh(e, t, n) {
    {
      var r = e.child, a = e.sibling, i = e.tag, o = e.type, u = null;
      switch (i) {
        case P:
        case Me:
        case F:
          u = o;
          break;
        case me:
          u = o.render;
          break;
      }
      var l = !1;
      u !== null && t.has(u) && (l = !0), l ? nw(e, n) : r !== null && lh(r, t, n), a !== null && lh(a, t, n);
    }
  }
  function nw(e, t) {
    {
      var n = rw(e, t);
      if (n)
        return;
      for (var r = e; ; ) {
        switch (r.tag) {
          case W:
            t.add(r.stateNode);
            return;
          case te:
            t.add(r.stateNode.containerInfo);
            return;
          case _:
            t.add(r.stateNode.containerInfo);
            return;
        }
        if (r.return === null)
          throw new Error("Expected to reach root first.");
        r = r.return;
      }
    }
  }
  function rw(e, t) {
    for (var n = e, r = !1; ; ) {
      if (n.tag === W)
        r = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return r;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return r;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var sh;
  {
    sh = !1;
    try {
      var cS = Object.preventExtensions({});
    } catch {
      sh = !0;
    }
  }
  function aw(e, t, n, r) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.flags = le, this.subtreeFlags = le, this.deletions = null, this.lanes = N, this.childLanes = N, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !sh && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var Xn = function(e, t, n, r) {
    return new aw(e, t, n, r);
  };
  function ch(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function iw(e) {
    return typeof e == "function" && !ch(e) && e.defaultProps === void 0;
  }
  function ow(e) {
    if (typeof e == "function")
      return ch(e) ? F : P;
    if (e != null) {
      var t = e.$$typeof;
      if (t === H)
        return me;
      if (t === Ue)
        return rt;
    }
    return Y;
  }
  function Ii(e, t) {
    var n = e.alternate;
    n === null ? (n = Xn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = le, n.subtreeFlags = le, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & ya, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var r = e.dependencies;
    switch (n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case Y:
      case P:
      case Me:
        n.type = Qo(e.type);
        break;
      case F:
        n.type = ih(e.type);
        break;
      case me:
        n.type = oh(e.type);
        break;
    }
    return n;
  }
  function uw(e, t) {
    e.flags &= ya | Tt;
    var n = e.alternate;
    if (n === null)
      e.childLanes = N, e.lanes = t, e.child = null, e.subtreeFlags = le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = le, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var r = n.dependencies;
      e.dependencies = r === null ? null : {
        lanes: r.lanes,
        firstContext: r.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function lw(e, t, n) {
    var r;
    return e === tc ? (r = _e, t === !0 && (r |= vt, r |= Yr)) : r = ie, Tr && (r |= Ge), Xn(_, null, null, r);
  }
  function fh(e, t, n, r, a, i) {
    var o = Y, u = e;
    if (typeof e == "function")
      ch(e) ? (o = F, u = ih(u)) : u = Qo(u);
    else if (typeof e == "string")
      o = W;
    else
      e:
        switch (e) {
          case Br:
            return fi(n.children, a, i, t);
          case mi:
            o = Qe, a |= vt, (a & _e) !== ie && (a |= Yr);
            break;
          case Na:
            return sw(n, a, i, t);
          case oe:
            return cw(n, a, i, t);
          case De:
            return fw(n, a, i, t);
          case tt:
            return fS(n, a, i, t);
          case st:
          case Re:
          case on:
          case Vr:
          case wt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case g:
                  o = Se;
                  break e;
                case k:
                  o = Pe;
                  break e;
                case H:
                  o = me, u = oh(u);
                  break e;
                case Ue:
                  o = rt;
                  break e;
                case ue:
                  o = Cn, u = null;
                  break e;
              }
            var l = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var v = r ? ye(r) : null;
              v && (l += `

Check the render method of \`` + v + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + l));
          }
        }
    var h = Xn(o, n, t, a);
    return h.elementType = e, h.type = u, h.lanes = i, h._debugOwner = r, h;
  }
  function dh(e, t, n) {
    var r = null;
    r = e._owner;
    var a = e.type, i = e.key, o = e.props, u = fh(a, i, o, r, t, n);
    return u._debugSource = e._source, u._debugOwner = e._owner, u;
  }
  function fi(e, t, n, r) {
    var a = Xn(ne, e, r, t);
    return a.lanes = n, a;
  }
  function sw(e, t, n, r) {
    typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var a = Xn(lt, e, r, t | Ge);
    return a.elementType = Na, a.lanes = n, a.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, a;
  }
  function cw(e, t, n, r) {
    var a = Xn(he, e, r, t);
    return a.elementType = oe, a.lanes = n, a;
  }
  function fw(e, t, n, r) {
    var a = Xn(et, e, r, t);
    return a.elementType = De, a.lanes = n, a;
  }
  function fS(e, t, n, r) {
    var a = Xn(Ee, e, r, t);
    a.elementType = tt, a.lanes = n;
    var i = {
      isHidden: !1
    };
    return a.stateNode = i, a;
  }
  function vh(e, t, n) {
    var r = Xn(V, e, null, t);
    return r.lanes = n, r;
  }
  function dw() {
    var e = Xn(W, null, null, ie);
    return e.elementType = "DELETED", e;
  }
  function vw(e) {
    var t = Xn(Et, null, null, ie);
    return t.stateNode = e, t;
  }
  function ph(e, t, n) {
    var r = e.children !== null ? e.children : [], a = Xn(te, r, e.key, t);
    return a.lanes = n, a.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, a;
  }
  function dS(e, t) {
    return e === null && (e = Xn(Y, null, null, ie)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function pw(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Qd, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yt, this.eventTimes = gd(N), this.expirationTimes = gd(nt), this.pendingLanes = N, this.suspendedLanes = N, this.pingedLanes = N, this.expiredLanes = N, this.mutableReadLanes = N, this.finishedLanes = N, this.entangledLanes = N, this.entanglements = gd(N), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var i = this.pendingUpdatersLaneMap = [], o = 0; o < Qf; o++)
        i.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case tc:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case Ja:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function vS(e, t, n, r, a, i, o, u, l, v) {
    var h = new pw(e, t, n, u, l), S = lw(t, i);
    h.current = S, S.stateNode = h;
    {
      var b = {
        element: r,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      S.memoizedState = b;
    }
    return Ov(S), h;
  }
  var hh = "18.3.1";
  function hw(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return tr(r), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Cr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var mh, yh;
  mh = !1, yh = {};
  function pS(e) {
    if (!e)
      return Qn;
    var t = lo(e), n = KD(t);
    if (t.tag === F) {
      var r = t.type;
      if (Wr(r))
        return Vy(t, r, n);
    }
    return n;
  }
  function mw(e, t) {
    {
      var n = lo(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var r = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
      }
      var a = fm(n);
      if (a === null)
        return null;
      if (a.mode & vt) {
        var i = ye(n) || "Component";
        if (!yh[i]) {
          yh[i] = !0;
          var o = un;
          try {
            ct(a), n.mode & vt ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
          } finally {
            o ? ct(o) : Vt();
          }
        }
      }
      return a.stateNode;
    }
  }
  function hS(e, t, n, r, a, i, o, u) {
    var l = !1, v = null;
    return vS(e, t, l, v, n, r, a, i, o);
  }
  function mS(e, t, n, r, a, i, o, u, l, v) {
    var h = !0, S = vS(n, r, h, e, a, i, o, u, l);
    S.context = pS(null);
    var b = S.current, x = bn(), O = si(b), A = Da(x, O);
    return A.callback = t ?? null, ti(b, A, O), R_(S, O, x), S;
  }
  function Pl(e, t, n, r) {
    YC(t, e);
    var a = t.current, i = bn(), o = si(a);
    cR(o);
    var u = pS(n);
    t.context === null ? t.context = u : t.pendingContext = u, gi && un !== null && !mh && (mh = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ye(un) || "Unknown"));
    var l = Da(i, o);
    l.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r), l.callback = r);
    var v = ti(a, l, o);
    return v !== null && (Ft(v, a, o, i), mc(v, a, o)), o;
  }
  function of(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case W:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function yw(e) {
    switch (e.tag) {
      case _: {
        var t = e.stateNode;
        if (xs(t)) {
          var n = bR(t);
          O_(t, n);
        }
        break;
      }
      case he: {
        Aa(function() {
          var a = Mn(e, de);
          if (a !== null) {
            var i = bn();
            Ft(a, e, de, i);
          }
        });
        var r = de;
        gh(e, r);
        break;
      }
    }
  }
  function yS(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = xR(n.retryLane, t));
  }
  function gh(e, t) {
    yS(e, t);
    var n = e.alternate;
    n && yS(n, t);
  }
  function gw(e) {
    if (e.tag === he) {
      var t = Ou, n = Mn(e, t);
      if (n !== null) {
        var r = bn();
        Ft(n, e, t, r);
      }
      gh(e, t);
    }
  }
  function bw(e) {
    if (e.tag === he) {
      var t = si(e), n = Mn(e, t);
      if (n !== null) {
        var r = bn();
        Ft(n, e, t, r);
      }
      gh(e, t);
    }
  }
  function gS(e) {
    var t = kC(e);
    return t === null ? null : t.stateNode;
  }
  var bS = function(e) {
    return null;
  };
  function Sw(e) {
    return bS(e);
  }
  var SS = function(e) {
    return !1;
  };
  function Ew(e) {
    return SS(e);
  }
  var ES = null, CS = null, RS = null, TS = null, xS = null, DS = null, OS = null, _S = null, wS = null;
  {
    var AS = function(e, t, n) {
      var r = t[n], a = je(e) ? e.slice() : Te({}, e);
      return n + 1 === t.length ? (je(a) ? a.splice(r, 1) : delete a[r], a) : (a[r] = AS(e[r], t, n + 1), a);
    }, MS = function(e, t) {
      return AS(e, t, 0);
    }, LS = function(e, t, n, r) {
      var a = t[r], i = je(e) ? e.slice() : Te({}, e);
      if (r + 1 === t.length) {
        var o = n[r];
        i[o] = i[a], je(i) ? i.splice(a, 1) : delete i[a];
      } else
        i[a] = LS(
          // $FlowFixMe number or string is fine here
          e[a],
          t,
          n,
          r + 1
        );
      return i;
    }, US = function(e, t, n) {
      if (t.length !== n.length) {
        C("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var r = 0; r < n.length - 1; r++)
          if (t[r] !== n[r]) {
            C("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return LS(e, t, n, 0);
    }, NS = function(e, t, n, r) {
      if (n >= t.length)
        return r;
      var a = t[n], i = je(e) ? e.slice() : Te({}, e);
      return i[a] = NS(e[a], t, n + 1, r), i;
    }, kS = function(e, t, n) {
      return NS(e, t, 0, n);
    }, bh = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    ES = function(e, t, n, r) {
      var a = bh(e, t);
      if (a !== null) {
        var i = kS(a.memoizedState, n, r);
        a.memoizedState = i, a.baseState = i, e.memoizedProps = Te({}, e.memoizedProps);
        var o = Mn(e, de);
        o !== null && Ft(o, e, de, nt);
      }
    }, CS = function(e, t, n) {
      var r = bh(e, t);
      if (r !== null) {
        var a = MS(r.memoizedState, n);
        r.memoizedState = a, r.baseState = a, e.memoizedProps = Te({}, e.memoizedProps);
        var i = Mn(e, de);
        i !== null && Ft(i, e, de, nt);
      }
    }, RS = function(e, t, n, r) {
      var a = bh(e, t);
      if (a !== null) {
        var i = US(a.memoizedState, n, r);
        a.memoizedState = i, a.baseState = i, e.memoizedProps = Te({}, e.memoizedProps);
        var o = Mn(e, de);
        o !== null && Ft(o, e, de, nt);
      }
    }, TS = function(e, t, n) {
      e.pendingProps = kS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = Mn(e, de);
      r !== null && Ft(r, e, de, nt);
    }, xS = function(e, t) {
      e.pendingProps = MS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = Mn(e, de);
      n !== null && Ft(n, e, de, nt);
    }, DS = function(e, t, n) {
      e.pendingProps = US(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = Mn(e, de);
      r !== null && Ft(r, e, de, nt);
    }, OS = function(e) {
      var t = Mn(e, de);
      t !== null && Ft(t, e, de, nt);
    }, _S = function(e) {
      bS = e;
    }, wS = function(e) {
      SS = e;
    };
  }
  function Cw(e) {
    var t = fm(e);
    return t === null ? null : t.stateNode;
  }
  function Rw(e) {
    return null;
  }
  function Tw() {
    return un;
  }
  function xw(e) {
    var t = e.findFiberByHostInstance, n = p.ReactCurrentDispatcher;
    return $C({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: ES,
      overrideHookStateDeletePath: CS,
      overrideHookStateRenamePath: RS,
      overrideProps: TS,
      overridePropsDeletePath: xS,
      overridePropsRenamePath: DS,
      setErrorHandler: _S,
      setSuspenseHandler: wS,
      scheduleUpdate: OS,
      currentDispatcherRef: n,
      findHostInstanceByFiber: Cw,
      findFiberByHostInstance: t || Rw,
      // React Refresh
      findHostInstancesForRefresh: tw,
      scheduleRefresh: Z_,
      scheduleRoot: ew,
      setRefreshHandler: J_,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: Tw,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: hh
    });
  }
  var zS = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function Sh(e) {
    this._internalRoot = e;
  }
  uf.prototype.render = Sh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : lf(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== Rt) {
        var r = gS(t.current);
        r && r.parentNode !== n && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    Pl(e, t, null, null);
  }, uf.prototype.unmount = Sh.prototype.unmount = function() {
    typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ib() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Aa(function() {
        Pl(null, e, null, null);
      }), zy(t);
    }
  };
  function Dw(e, t) {
    if (!lf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    FS(e);
    var n = !1, r = !1, a = "", i = zS;
    t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var o = hS(e, tc, null, n, r, a, i);
    Is(o.current, e);
    var u = e.nodeType === Rt ? e.parentNode : e;
    return Iu(u), new Sh(o);
  }
  function uf(e) {
    this._internalRoot = e;
  }
  function Ow(e) {
    e && PR(e);
  }
  uf.prototype.unstable_scheduleHydration = Ow;
  function _w(e, t, n) {
    if (!lf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    FS(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var r = n ?? null, a = n != null && n.hydratedSources || null, i = !1, o = !1, u = "", l = zS;
    n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError));
    var v = mS(t, null, e, tc, r, i, o, u, l);
    if (Is(v.current, e), Iu(e), a)
      for (var h = 0; h < a.length; h++) {
        var S = a[h];
        L0(v, S);
      }
    return new uf(v);
  }
  function lf(e) {
    return !!(e && (e.nodeType === wn || e.nodeType === va || e.nodeType === Of || !Ht));
  }
  function $l(e) {
    return !!(e && (e.nodeType === wn || e.nodeType === va || e.nodeType === Of || e.nodeType === Rt && e.nodeValue === " react-mount-point-unstable "));
  }
  function FS(e) {
    e.nodeType === wn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), il(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var ww = p.ReactCurrentOwner, HS;
  HS = function(e) {
    if (e._reactRootContainer && e.nodeType !== Rt) {
      var t = gS(e._reactRootContainer.current);
      t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, r = Eh(e), a = !!(r && Xa(r));
    a && !n && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === wn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function Eh(e) {
    return e ? e.nodeType === va ? e.documentElement : e.firstChild : null;
  }
  function jS() {
  }
  function Aw(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var b = of(o);
          i.call(b);
        };
      }
      var o = mS(
        t,
        r,
        e,
        Ja,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        jS
      );
      e._reactRootContainer = o, Is(o.current, e);
      var u = e.nodeType === Rt ? e.parentNode : e;
      return Iu(u), Aa(), o;
    } else {
      for (var l; l = e.lastChild; )
        e.removeChild(l);
      if (typeof r == "function") {
        var v = r;
        r = function() {
          var b = of(h);
          v.call(b);
        };
      }
      var h = hS(
        e,
        Ja,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        jS
      );
      e._reactRootContainer = h, Is(h.current, e);
      var S = e.nodeType === Rt ? e.parentNode : e;
      return Iu(S), Aa(function() {
        Pl(t, h, n, r);
      }), h;
    }
  }
  function Mw(e, t) {
    e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function sf(e, t, n, r, a) {
    HS(n), Mw(a === void 0 ? null : a, "render");
    var i = n._reactRootContainer, o;
    if (!i)
      o = Aw(n, t, e, a, r);
    else {
      if (o = i, typeof a == "function") {
        var u = a;
        a = function() {
          var l = of(o);
          u.call(l);
        };
      }
      Pl(t, o, e, a);
    }
    return of(o);
  }
  var BS = !1;
  function Lw(e) {
    {
      BS || (BS = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = ww.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ne(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === wn ? e : mw(e, "findDOMNode");
  }
  function Uw(e, t, n) {
    if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$l(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = il(t) && t._reactRootContainer === void 0;
      r && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return sf(null, e, t, !0, n);
  }
  function Nw(e, t, n) {
    if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$l(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = il(t) && t._reactRootContainer === void 0;
      r && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return sf(null, e, t, !1, n);
  }
  function kw(e, t, n, r) {
    if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$l(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !_C(e))
      throw new Error("parentComponent must be a valid React Component");
    return sf(e, t, n, !1, r);
  }
  var VS = !1;
  function zw(e) {
    if (VS || (VS = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !$l(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = il(e) && e._reactRootContainer === void 0;
      t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = Eh(e), r = n && !Xa(n);
        r && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Aa(function() {
        sf(null, null, e, !1, function() {
          e._reactRootContainer = null, zy(e);
        });
      }), !0;
    } else {
      {
        var a = Eh(e), i = !!(a && Xa(a)), o = e.nodeType === wn && $l(e.parentNode) && !!e.parentNode._reactRootContainer;
        i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  LR(yw), NR(gw), kR(bw), zR(xr), FR(wR), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yC(Hx), SC(Jp, __, Aa);
  function Fw(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lf(t))
      throw new Error("Target container is not a DOM element.");
    return hw(e, t, null, n);
  }
  function Hw(e, t, n, r) {
    return kw(e, t, n, r);
  }
  var Ch = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [Xa, Do, Qs, Zh, em, Jp]
  };
  function jw(e, t) {
    return Ch.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Dw(e, t);
  }
  function Bw(e, t, n) {
    return Ch.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _w(e, t, n);
  }
  function Vw(e) {
    return Ib() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Aa(e);
  }
  var Pw = xw({
    findFiberByHostInstance: Ui,
    bundleType: 1,
    version: hh,
    rendererPackageName: "react-dom"
  });
  if (!Pw && Ct && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var PS = window.location.protocol;
    /^(https?|file):$/.test(PS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ch, Jn.createPortal = Fw, Jn.createRoot = jw, Jn.findDOMNode = Lw, Jn.flushSync = Vw, Jn.hydrate = Uw, Jn.hydrateRoot = Bw, Jn.render = Nw, Jn.unmountComponentAtNode = zw, Jn.unstable_batchedUpdates = Jp, Jn.unstable_renderSubtreeIntoContainer = Hw, Jn.version = hh, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
iE.exports = Jn;
var Ww = iE.exports, Iw, $S = Ww;
{
  var YS = $S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Iw = function(s, f) {
    YS.usingClientEntryPoint = !0;
    try {
      return $S.createRoot(s, f);
    } finally {
      YS.usingClientEntryPoint = !1;
    }
  };
}
function lE(s, f) {
  return function() {
    return s.apply(f, arguments);
  };
}
const { toString: Qw } = Object.prototype, { getPrototypeOf: Lh } = Object, pf = /* @__PURE__ */ ((s) => (f) => {
  const p = Qw.call(f);
  return s[p] || (s[p] = p.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ra = (s) => (s = s.toLowerCase(), (f) => pf(f) === s), hf = (s) => (f) => typeof f === s, { isArray: Jo } = Array, Gl = hf("undefined");
function Xw(s) {
  return s !== null && !Gl(s) && s.constructor !== null && !Gl(s.constructor) && pr(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const sE = ra("ArrayBuffer");
function Kw(s) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(s) : f = s && s.buffer && sE(s.buffer), f;
}
const Jw = hf("string"), pr = hf("function"), cE = hf("number"), mf = (s) => s !== null && typeof s == "object", Zw = (s) => s === !0 || s === !1, ff = (s) => {
  if (pf(s) !== "object")
    return !1;
  const f = Lh(s);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, eA = ra("Date"), tA = ra("File"), nA = ra("Blob"), rA = ra("FileList"), aA = (s) => mf(s) && pr(s.pipe), iA = (s) => {
  let f;
  return s && (typeof FormData == "function" && s instanceof FormData || pr(s.append) && ((f = pf(s)) === "formdata" || // detect form-data instance
  f === "object" && pr(s.toString) && s.toString() === "[object FormData]"));
}, oA = ra("URLSearchParams"), uA = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wl(s, f, { allOwnKeys: p = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let m, E;
  if (typeof s != "object" && (s = [s]), Jo(s))
    for (m = 0, E = s.length; m < E; m++)
      f.call(null, s[m], m, s);
  else {
    const C = p ? Object.getOwnPropertyNames(s) : Object.keys(s), d = C.length;
    let j;
    for (m = 0; m < d; m++)
      j = C[m], f.call(null, s[j], j, s);
  }
}
function fE(s, f) {
  f = f.toLowerCase();
  const p = Object.keys(s);
  let m = p.length, E;
  for (; m-- > 0; )
    if (E = p[m], f === E.toLowerCase())
      return E;
  return null;
}
const dE = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, vE = (s) => !Gl(s) && s !== dE;
function Oh() {
  const { caseless: s } = vE(this) && this || {}, f = {}, p = (m, E) => {
    const C = s && fE(f, E) || E;
    ff(f[C]) && ff(m) ? f[C] = Oh(f[C], m) : ff(m) ? f[C] = Oh({}, m) : Jo(m) ? f[C] = m.slice() : f[C] = m;
  };
  for (let m = 0, E = arguments.length; m < E; m++)
    arguments[m] && Wl(arguments[m], p);
  return f;
}
const lA = (s, f, p, { allOwnKeys: m } = {}) => (Wl(f, (E, C) => {
  p && pr(E) ? s[C] = lE(E, p) : s[C] = E;
}, { allOwnKeys: m }), s), sA = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), cA = (s, f, p, m) => {
  s.prototype = Object.create(f.prototype, m), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: f.prototype
  }), p && Object.assign(s.prototype, p);
}, fA = (s, f, p, m) => {
  let E, C, d;
  const j = {};
  if (f = f || {}, s == null)
    return f;
  do {
    for (E = Object.getOwnPropertyNames(s), C = E.length; C-- > 0; )
      d = E[C], (!m || m(d, s, f)) && !j[d] && (f[d] = s[d], j[d] = !0);
    s = p !== !1 && Lh(s);
  } while (s && (!p || p(s, f)) && s !== Object.prototype);
  return f;
}, dA = (s, f, p) => {
  s = String(s), (p === void 0 || p > s.length) && (p = s.length), p -= f.length;
  const m = s.indexOf(f, p);
  return m !== -1 && m === p;
}, vA = (s) => {
  if (!s)
    return null;
  if (Jo(s))
    return s;
  let f = s.length;
  if (!cE(f))
    return null;
  const p = new Array(f);
  for (; f-- > 0; )
    p[f] = s[f];
  return p;
}, pA = /* @__PURE__ */ ((s) => (f) => s && f instanceof s)(typeof Uint8Array < "u" && Lh(Uint8Array)), hA = (s, f) => {
  const m = (s && s[Symbol.iterator]).call(s);
  let E;
  for (; (E = m.next()) && !E.done; ) {
    const C = E.value;
    f.call(s, C[0], C[1]);
  }
}, mA = (s, f) => {
  let p;
  const m = [];
  for (; (p = s.exec(f)) !== null; )
    m.push(p);
  return m;
}, yA = ra("HTMLFormElement"), gA = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(p, m, E) {
    return m.toUpperCase() + E;
  }
), qS = (({ hasOwnProperty: s }) => (f, p) => s.call(f, p))(Object.prototype), bA = ra("RegExp"), pE = (s, f) => {
  const p = Object.getOwnPropertyDescriptors(s), m = {};
  Wl(p, (E, C) => {
    let d;
    (d = f(E, C, s)) !== !1 && (m[C] = d || E);
  }), Object.defineProperties(s, m);
}, SA = (s) => {
  pE(s, (f, p) => {
    if (pr(s) && ["arguments", "caller", "callee"].indexOf(p) !== -1)
      return !1;
    const m = s[p];
    if (pr(m)) {
      if (f.enumerable = !1, "writable" in f) {
        f.writable = !1;
        return;
      }
      f.set || (f.set = () => {
        throw Error("Can not rewrite read-only method '" + p + "'");
      });
    }
  });
}, EA = (s, f) => {
  const p = {}, m = (E) => {
    E.forEach((C) => {
      p[C] = !0;
    });
  };
  return Jo(s) ? m(s) : m(String(s).split(f)), p;
}, CA = () => {
}, RA = (s, f) => (s = +s, Number.isFinite(s) ? s : f), Rh = "abcdefghijklmnopqrstuvwxyz", GS = "0123456789", hE = {
  DIGIT: GS,
  ALPHA: Rh,
  ALPHA_DIGIT: Rh + Rh.toUpperCase() + GS
}, TA = (s = 16, f = hE.ALPHA_DIGIT) => {
  let p = "";
  const { length: m } = f;
  for (; s--; )
    p += f[Math.random() * m | 0];
  return p;
};
function xA(s) {
  return !!(s && pr(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const DA = (s) => {
  const f = new Array(10), p = (m, E) => {
    if (mf(m)) {
      if (f.indexOf(m) >= 0)
        return;
      if (!("toJSON" in m)) {
        f[E] = m;
        const C = Jo(m) ? [] : {};
        return Wl(m, (d, j) => {
          const P = p(d, E + 1);
          !Gl(P) && (C[j] = P);
        }), f[E] = void 0, C;
      }
    }
    return m;
  };
  return p(s, 0);
}, OA = ra("AsyncFunction"), _A = (s) => s && (mf(s) || pr(s)) && pr(s.then) && pr(s.catch), U = {
  isArray: Jo,
  isArrayBuffer: sE,
  isBuffer: Xw,
  isFormData: iA,
  isArrayBufferView: Kw,
  isString: Jw,
  isNumber: cE,
  isBoolean: Zw,
  isObject: mf,
  isPlainObject: ff,
  isUndefined: Gl,
  isDate: eA,
  isFile: tA,
  isBlob: nA,
  isRegExp: bA,
  isFunction: pr,
  isStream: aA,
  isURLSearchParams: oA,
  isTypedArray: pA,
  isFileList: rA,
  forEach: Wl,
  merge: Oh,
  extend: lA,
  trim: uA,
  stripBOM: sA,
  inherits: cA,
  toFlatObject: fA,
  kindOf: pf,
  kindOfTest: ra,
  endsWith: dA,
  toArray: vA,
  forEachEntry: hA,
  matchAll: mA,
  isHTMLForm: yA,
  hasOwnProperty: qS,
  hasOwnProp: qS,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pE,
  freezeMethods: SA,
  toObjectSet: EA,
  toCamelCase: gA,
  noop: CA,
  toFiniteNumber: RA,
  findKey: fE,
  global: dE,
  isContextDefined: vE,
  ALPHABET: hE,
  generateString: TA,
  isSpecCompliantForm: xA,
  toJSONObject: DA,
  isAsyncFn: OA,
  isThenable: _A
};
function Fe(s, f, p, m, E) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", f && (this.code = f), p && (this.config = p), m && (this.request = m), E && (this.response = E);
}
U.inherits(Fe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const mE = Fe.prototype, yE = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((s) => {
  yE[s] = { value: s };
});
Object.defineProperties(Fe, yE);
Object.defineProperty(mE, "isAxiosError", { value: !0 });
Fe.from = (s, f, p, m, E, C) => {
  const d = Object.create(mE);
  return U.toFlatObject(s, d, function(P) {
    return P !== Error.prototype;
  }, (j) => j !== "isAxiosError"), Fe.call(d, s.message, f, p, m, E), d.cause = s, d.name = s.name, C && Object.assign(d, C), d;
};
const wA = null;
function _h(s) {
  return U.isPlainObject(s) || U.isArray(s);
}
function gE(s) {
  return U.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function WS(s, f, p) {
  return s ? s.concat(f).map(function(E, C) {
    return E = gE(E), !p && C ? "[" + E + "]" : E;
  }).join(p ? "." : "") : f;
}
function AA(s) {
  return U.isArray(s) && !s.some(_h);
}
const MA = U.toFlatObject(U, {}, null, function(f) {
  return /^is[A-Z]/.test(f);
});
function yf(s, f, p) {
  if (!U.isObject(s))
    throw new TypeError("target must be an object");
  f = f || new FormData(), p = U.toFlatObject(p, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ne, Qe) {
    return !U.isUndefined(Qe[ne]);
  });
  const m = p.metaTokens, E = p.visitor || Y, C = p.dots, d = p.indexes, P = (p.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(f);
  if (!U.isFunction(E))
    throw new TypeError("visitor must be a function");
  function F(V) {
    if (V === null)
      return "";
    if (U.isDate(V))
      return V.toISOString();
    if (!P && U.isBlob(V))
      throw new Fe("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(V) || U.isTypedArray(V) ? P && typeof Blob == "function" ? new Blob([V]) : Buffer.from(V) : V;
  }
  function Y(V, ne, Qe) {
    let Pe = V;
    if (V && !Qe && typeof V == "object") {
      if (U.endsWith(ne, "{}"))
        ne = m ? ne : ne.slice(0, -2), V = JSON.stringify(V);
      else if (U.isArray(V) && AA(V) || (U.isFileList(V) || U.endsWith(ne, "[]")) && (Pe = U.toArray(V)))
        return ne = gE(ne), Pe.forEach(function(me, lt) {
          !(U.isUndefined(me) || me === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? WS([ne], lt, C) : d === null ? ne : ne + "[]",
            F(me)
          );
        }), !1;
    }
    return _h(V) ? !0 : (f.append(WS(Qe, ne, C), F(V)), !1);
  }
  const _ = [], te = Object.assign(MA, {
    defaultVisitor: Y,
    convertValue: F,
    isVisitable: _h
  });
  function W(V, ne) {
    if (!U.isUndefined(V)) {
      if (_.indexOf(V) !== -1)
        throw Error("Circular reference detected in " + ne.join("."));
      _.push(V), U.forEach(V, function(Pe, Se) {
        (!(U.isUndefined(Pe) || Pe === null) && E.call(
          f,
          Pe,
          U.isString(Se) ? Se.trim() : Se,
          ne,
          te
        )) === !0 && W(Pe, ne ? ne.concat(Se) : [Se]);
      }), _.pop();
    }
  }
  if (!U.isObject(s))
    throw new TypeError("data must be an object");
  return W(s), f;
}
function IS(s) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(m) {
    return f[m];
  });
}
function Uh(s, f) {
  this._pairs = [], s && yf(s, this, f);
}
const bE = Uh.prototype;
bE.append = function(f, p) {
  this._pairs.push([f, p]);
};
bE.toString = function(f) {
  const p = f ? function(m) {
    return f.call(this, m, IS);
  } : IS;
  return this._pairs.map(function(E) {
    return p(E[0]) + "=" + p(E[1]);
  }, "").join("&");
};
function LA(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function SE(s, f, p) {
  if (!f)
    return s;
  const m = p && p.encode || LA, E = p && p.serialize;
  let C;
  if (E ? C = E(f, p) : C = U.isURLSearchParams(f) ? f.toString() : new Uh(f, p).toString(m), C) {
    const d = s.indexOf("#");
    d !== -1 && (s = s.slice(0, d)), s += (s.indexOf("?") === -1 ? "?" : "&") + C;
  }
  return s;
}
class QS {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(f, p, m) {
    return this.handlers.push({
      fulfilled: f,
      rejected: p,
      synchronous: m ? m.synchronous : !1,
      runWhen: m ? m.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(f) {
    this.handlers[f] && (this.handlers[f] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(f) {
    U.forEach(this.handlers, function(m) {
      m !== null && f(m);
    });
  }
}
const EE = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, UA = typeof URLSearchParams < "u" ? URLSearchParams : Uh, NA = typeof FormData < "u" ? FormData : null, kA = typeof Blob < "u" ? Blob : null, zA = {
  isBrowser: !0,
  classes: {
    URLSearchParams: UA,
    FormData: NA,
    Blob: kA
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, CE = typeof window < "u" && typeof document < "u", FA = ((s) => CE && ["ReactNative", "NativeScript", "NS"].indexOf(s) < 0)(typeof navigator < "u" && navigator.product), HA = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", jA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: CE,
  hasStandardBrowserEnv: FA,
  hasStandardBrowserWebWorkerEnv: HA
}, Symbol.toStringTag, { value: "Module" })), na = {
  ...jA,
  ...zA
};
function BA(s, f) {
  return yf(s, new na.classes.URLSearchParams(), Object.assign({
    visitor: function(p, m, E, C) {
      return na.isNode && U.isBuffer(p) ? (this.append(m, p.toString("base64")), !1) : C.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function VA(s) {
  return U.matchAll(/\w+|\[(\w*)]/g, s).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function PA(s) {
  const f = {}, p = Object.keys(s);
  let m;
  const E = p.length;
  let C;
  for (m = 0; m < E; m++)
    C = p[m], f[C] = s[C];
  return f;
}
function RE(s) {
  function f(p, m, E, C) {
    let d = p[C++];
    if (d === "__proto__")
      return !0;
    const j = Number.isFinite(+d), P = C >= p.length;
    return d = !d && U.isArray(E) ? E.length : d, P ? (U.hasOwnProp(E, d) ? E[d] = [E[d], m] : E[d] = m, !j) : ((!E[d] || !U.isObject(E[d])) && (E[d] = []), f(p, m, E[d], C) && U.isArray(E[d]) && (E[d] = PA(E[d])), !j);
  }
  if (U.isFormData(s) && U.isFunction(s.entries)) {
    const p = {};
    return U.forEachEntry(s, (m, E) => {
      f(VA(m), E, p, 0);
    }), p;
  }
  return null;
}
function $A(s, f, p) {
  if (U.isString(s))
    try {
      return (f || JSON.parse)(s), U.trim(s);
    } catch (m) {
      if (m.name !== "SyntaxError")
        throw m;
    }
  return (p || JSON.stringify)(s);
}
const Il = {
  transitional: EE,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, p) {
    const m = p.getContentType() || "", E = m.indexOf("application/json") > -1, C = U.isObject(f);
    if (C && U.isHTMLForm(f) && (f = new FormData(f)), U.isFormData(f))
      return E ? JSON.stringify(RE(f)) : f;
    if (U.isArrayBuffer(f) || U.isBuffer(f) || U.isStream(f) || U.isFile(f) || U.isBlob(f))
      return f;
    if (U.isArrayBufferView(f))
      return f.buffer;
    if (U.isURLSearchParams(f))
      return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let j;
    if (C) {
      if (m.indexOf("application/x-www-form-urlencoded") > -1)
        return BA(f, this.formSerializer).toString();
      if ((j = U.isFileList(f)) || m.indexOf("multipart/form-data") > -1) {
        const P = this.env && this.env.FormData;
        return yf(
          j ? { "files[]": f } : f,
          P && new P(),
          this.formSerializer
        );
      }
    }
    return C || E ? (p.setContentType("application/json", !1), $A(f)) : f;
  }],
  transformResponse: [function(f) {
    const p = this.transitional || Il.transitional, m = p && p.forcedJSONParsing, E = this.responseType === "json";
    if (f && U.isString(f) && (m && !this.responseType || E)) {
      const d = !(p && p.silentJSONParsing) && E;
      try {
        return JSON.parse(f);
      } catch (j) {
        if (d)
          throw j.name === "SyntaxError" ? Fe.from(j, Fe.ERR_BAD_RESPONSE, this, null, this.response) : j;
      }
    }
    return f;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: na.classes.FormData,
    Blob: na.classes.Blob
  },
  validateStatus: function(f) {
    return f >= 200 && f < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  Il.headers[s] = {};
});
const YA = U.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), qA = (s) => {
  const f = {};
  let p, m, E;
  return s && s.split(`
`).forEach(function(d) {
    E = d.indexOf(":"), p = d.substring(0, E).trim().toLowerCase(), m = d.substring(E + 1).trim(), !(!p || f[p] && YA[p]) && (p === "set-cookie" ? f[p] ? f[p].push(m) : f[p] = [m] : f[p] = f[p] ? f[p] + ", " + m : m);
  }), f;
}, XS = Symbol("internals");
function ql(s) {
  return s && String(s).trim().toLowerCase();
}
function df(s) {
  return s === !1 || s == null ? s : U.isArray(s) ? s.map(df) : String(s);
}
function GA(s) {
  const f = /* @__PURE__ */ Object.create(null), p = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let m;
  for (; m = p.exec(s); )
    f[m[1]] = m[2];
  return f;
}
const WA = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function Th(s, f, p, m, E) {
  if (U.isFunction(m))
    return m.call(this, f, p);
  if (E && (f = p), !!U.isString(f)) {
    if (U.isString(m))
      return f.indexOf(m) !== -1;
    if (U.isRegExp(m))
      return m.test(f);
  }
}
function IA(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, p, m) => p.toUpperCase() + m);
}
function QA(s, f) {
  const p = U.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((m) => {
    Object.defineProperty(s, m + p, {
      value: function(E, C, d) {
        return this[m].call(this, f, E, C, d);
      },
      configurable: !0
    });
  });
}
class hr {
  constructor(f) {
    f && this.set(f);
  }
  set(f, p, m) {
    const E = this;
    function C(j, P, F) {
      const Y = ql(P);
      if (!Y)
        throw new Error("header name must be a non-empty string");
      const _ = U.findKey(E, Y);
      (!_ || E[_] === void 0 || F === !0 || F === void 0 && E[_] !== !1) && (E[_ || P] = df(j));
    }
    const d = (j, P) => U.forEach(j, (F, Y) => C(F, Y, P));
    return U.isPlainObject(f) || f instanceof this.constructor ? d(f, p) : U.isString(f) && (f = f.trim()) && !WA(f) ? d(qA(f), p) : f != null && C(p, f, m), this;
  }
  get(f, p) {
    if (f = ql(f), f) {
      const m = U.findKey(this, f);
      if (m) {
        const E = this[m];
        if (!p)
          return E;
        if (p === !0)
          return GA(E);
        if (U.isFunction(p))
          return p.call(this, E, m);
        if (U.isRegExp(p))
          return p.exec(E);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, p) {
    if (f = ql(f), f) {
      const m = U.findKey(this, f);
      return !!(m && this[m] !== void 0 && (!p || Th(this, this[m], m, p)));
    }
    return !1;
  }
  delete(f, p) {
    const m = this;
    let E = !1;
    function C(d) {
      if (d = ql(d), d) {
        const j = U.findKey(m, d);
        j && (!p || Th(m, m[j], j, p)) && (delete m[j], E = !0);
      }
    }
    return U.isArray(f) ? f.forEach(C) : C(f), E;
  }
  clear(f) {
    const p = Object.keys(this);
    let m = p.length, E = !1;
    for (; m--; ) {
      const C = p[m];
      (!f || Th(this, this[C], C, f, !0)) && (delete this[C], E = !0);
    }
    return E;
  }
  normalize(f) {
    const p = this, m = {};
    return U.forEach(this, (E, C) => {
      const d = U.findKey(m, C);
      if (d) {
        p[d] = df(E), delete p[C];
        return;
      }
      const j = f ? IA(C) : String(C).trim();
      j !== C && delete p[C], p[j] = df(E), m[j] = !0;
    }), this;
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const p = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (m, E) => {
      m != null && m !== !1 && (p[E] = f && U.isArray(m) ? m.join(", ") : m);
    }), p;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, p]) => f + ": " + p).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...p) {
    const m = new this(f);
    return p.forEach((E) => m.set(E)), m;
  }
  static accessor(f) {
    const m = (this[XS] = this[XS] = {
      accessors: {}
    }).accessors, E = this.prototype;
    function C(d) {
      const j = ql(d);
      m[j] || (QA(E, d), m[j] = !0);
    }
    return U.isArray(f) ? f.forEach(C) : C(f), this;
  }
}
hr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(hr.prototype, ({ value: s }, f) => {
  let p = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => s,
    set(m) {
      this[p] = m;
    }
  };
});
U.freezeMethods(hr);
function xh(s, f) {
  const p = this || Il, m = f || p, E = hr.from(m.headers);
  let C = m.data;
  return U.forEach(s, function(j) {
    C = j.call(p, C, E.normalize(), f ? f.status : void 0);
  }), E.normalize(), C;
}
function TE(s) {
  return !!(s && s.__CANCEL__);
}
function Ql(s, f, p) {
  Fe.call(this, s ?? "canceled", Fe.ERR_CANCELED, f, p), this.name = "CanceledError";
}
U.inherits(Ql, Fe, {
  __CANCEL__: !0
});
function XA(s, f, p) {
  const m = p.config.validateStatus;
  !p.status || !m || m(p.status) ? s(p) : f(new Fe(
    "Request failed with status code " + p.status,
    [Fe.ERR_BAD_REQUEST, Fe.ERR_BAD_RESPONSE][Math.floor(p.status / 100) - 4],
    p.config,
    p.request,
    p
  ));
}
const KA = na.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, f, p, m, E, C) {
      const d = [s + "=" + encodeURIComponent(f)];
      U.isNumber(p) && d.push("expires=" + new Date(p).toGMTString()), U.isString(m) && d.push("path=" + m), U.isString(E) && d.push("domain=" + E), C === !0 && d.push("secure"), document.cookie = d.join("; ");
    },
    read(s) {
      const f = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return f ? decodeURIComponent(f[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function JA(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function ZA(s, f) {
  return f ? s.replace(/\/?\/$/, "") + "/" + f.replace(/^\/+/, "") : s;
}
function xE(s, f) {
  return s && !JA(f) ? ZA(s, f) : f;
}
const eM = na.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), p = document.createElement("a");
    let m;
    function E(C) {
      let d = C;
      return f && (p.setAttribute("href", d), d = p.href), p.setAttribute("href", d), {
        href: p.href,
        protocol: p.protocol ? p.protocol.replace(/:$/, "") : "",
        host: p.host,
        search: p.search ? p.search.replace(/^\?/, "") : "",
        hash: p.hash ? p.hash.replace(/^#/, "") : "",
        hostname: p.hostname,
        port: p.port,
        pathname: p.pathname.charAt(0) === "/" ? p.pathname : "/" + p.pathname
      };
    }
    return m = E(window.location.href), function(d) {
      const j = U.isString(d) ? E(d) : d;
      return j.protocol === m.protocol && j.host === m.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function tM(s) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return f && f[1] || "";
}
function nM(s, f) {
  s = s || 10;
  const p = new Array(s), m = new Array(s);
  let E = 0, C = 0, d;
  return f = f !== void 0 ? f : 1e3, function(P) {
    const F = Date.now(), Y = m[C];
    d || (d = F), p[E] = P, m[E] = F;
    let _ = C, te = 0;
    for (; _ !== E; )
      te += p[_++], _ = _ % s;
    if (E = (E + 1) % s, E === C && (C = (C + 1) % s), F - d < f)
      return;
    const W = Y && F - Y;
    return W ? Math.round(te * 1e3 / W) : void 0;
  };
}
function KS(s, f) {
  let p = 0;
  const m = nM(50, 250);
  return (E) => {
    const C = E.loaded, d = E.lengthComputable ? E.total : void 0, j = C - p, P = m(j), F = C <= d;
    p = C;
    const Y = {
      loaded: C,
      total: d,
      progress: d ? C / d : void 0,
      bytes: j,
      rate: P || void 0,
      estimated: P && d && F ? (d - C) / P : void 0,
      event: E
    };
    Y[f ? "download" : "upload"] = !0, s(Y);
  };
}
const rM = typeof XMLHttpRequest < "u", aM = rM && function(s) {
  return new Promise(function(p, m) {
    let E = s.data;
    const C = hr.from(s.headers).normalize();
    let { responseType: d, withXSRFToken: j } = s, P;
    function F() {
      s.cancelToken && s.cancelToken.unsubscribe(P), s.signal && s.signal.removeEventListener("abort", P);
    }
    let Y;
    if (U.isFormData(E)) {
      if (na.hasStandardBrowserEnv || na.hasStandardBrowserWebWorkerEnv)
        C.setContentType(!1);
      else if ((Y = C.getContentType()) !== !1) {
        const [ne, ...Qe] = Y ? Y.split(";").map((Pe) => Pe.trim()).filter(Boolean) : [];
        C.setContentType([ne || "multipart/form-data", ...Qe].join("; "));
      }
    }
    let _ = new XMLHttpRequest();
    if (s.auth) {
      const ne = s.auth.username || "", Qe = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
      C.set("Authorization", "Basic " + btoa(ne + ":" + Qe));
    }
    const te = xE(s.baseURL, s.url);
    _.open(s.method.toUpperCase(), SE(te, s.params, s.paramsSerializer), !0), _.timeout = s.timeout;
    function W() {
      if (!_)
        return;
      const ne = hr.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), Pe = {
        data: !d || d === "text" || d === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: ne,
        config: s,
        request: _
      };
      XA(function(me) {
        p(me), F();
      }, function(me) {
        m(me), F();
      }, Pe), _ = null;
    }
    if ("onloadend" in _ ? _.onloadend = W : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, _.onabort = function() {
      _ && (m(new Fe("Request aborted", Fe.ECONNABORTED, s, _)), _ = null);
    }, _.onerror = function() {
      m(new Fe("Network Error", Fe.ERR_NETWORK, s, _)), _ = null;
    }, _.ontimeout = function() {
      let Qe = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const Pe = s.transitional || EE;
      s.timeoutErrorMessage && (Qe = s.timeoutErrorMessage), m(new Fe(
        Qe,
        Pe.clarifyTimeoutError ? Fe.ETIMEDOUT : Fe.ECONNABORTED,
        s,
        _
      )), _ = null;
    }, na.hasStandardBrowserEnv && (j && U.isFunction(j) && (j = j(s)), j || j !== !1 && eM(te))) {
      const ne = s.xsrfHeaderName && s.xsrfCookieName && KA.read(s.xsrfCookieName);
      ne && C.set(s.xsrfHeaderName, ne);
    }
    E === void 0 && C.setContentType(null), "setRequestHeader" in _ && U.forEach(C.toJSON(), function(Qe, Pe) {
      _.setRequestHeader(Pe, Qe);
    }), U.isUndefined(s.withCredentials) || (_.withCredentials = !!s.withCredentials), d && d !== "json" && (_.responseType = s.responseType), typeof s.onDownloadProgress == "function" && _.addEventListener("progress", KS(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", KS(s.onUploadProgress)), (s.cancelToken || s.signal) && (P = (ne) => {
      _ && (m(!ne || ne.type ? new Ql(null, s, _) : ne), _.abort(), _ = null);
    }, s.cancelToken && s.cancelToken.subscribe(P), s.signal && (s.signal.aborted ? P() : s.signal.addEventListener("abort", P)));
    const V = tM(te);
    if (V && na.protocols.indexOf(V) === -1) {
      m(new Fe("Unsupported protocol " + V + ":", Fe.ERR_BAD_REQUEST, s));
      return;
    }
    _.send(E || null);
  });
}, wh = {
  http: wA,
  xhr: aM
};
U.forEach(wh, (s, f) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: f });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: f });
  }
});
const JS = (s) => `- ${s}`, iM = (s) => U.isFunction(s) || s === null || s === !1, DE = {
  getAdapter: (s) => {
    s = U.isArray(s) ? s : [s];
    const { length: f } = s;
    let p, m;
    const E = {};
    for (let C = 0; C < f; C++) {
      p = s[C];
      let d;
      if (m = p, !iM(p) && (m = wh[(d = String(p)).toLowerCase()], m === void 0))
        throw new Fe(`Unknown adapter '${d}'`);
      if (m)
        break;
      E[d || "#" + C] = m;
    }
    if (!m) {
      const C = Object.entries(E).map(
        ([j, P]) => `adapter ${j} ` + (P === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = f ? C.length > 1 ? `since :
` + C.map(JS).join(`
`) : " " + JS(C[0]) : "as no adapter specified";
      throw new Fe(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return m;
  },
  adapters: wh
};
function Dh(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new Ql(null, s);
}
function ZS(s) {
  return Dh(s), s.headers = hr.from(s.headers), s.data = xh.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), DE.getAdapter(s.adapter || Il.adapter)(s).then(function(m) {
    return Dh(s), m.data = xh.call(
      s,
      s.transformResponse,
      m
    ), m.headers = hr.from(m.headers), m;
  }, function(m) {
    return TE(m) || (Dh(s), m && m.response && (m.response.data = xh.call(
      s,
      s.transformResponse,
      m.response
    ), m.response.headers = hr.from(m.response.headers))), Promise.reject(m);
  });
}
const eE = (s) => s instanceof hr ? { ...s } : s;
function Ko(s, f) {
  f = f || {};
  const p = {};
  function m(F, Y, _) {
    return U.isPlainObject(F) && U.isPlainObject(Y) ? U.merge.call({ caseless: _ }, F, Y) : U.isPlainObject(Y) ? U.merge({}, Y) : U.isArray(Y) ? Y.slice() : Y;
  }
  function E(F, Y, _) {
    if (U.isUndefined(Y)) {
      if (!U.isUndefined(F))
        return m(void 0, F, _);
    } else
      return m(F, Y, _);
  }
  function C(F, Y) {
    if (!U.isUndefined(Y))
      return m(void 0, Y);
  }
  function d(F, Y) {
    if (U.isUndefined(Y)) {
      if (!U.isUndefined(F))
        return m(void 0, F);
    } else
      return m(void 0, Y);
  }
  function j(F, Y, _) {
    if (_ in f)
      return m(F, Y);
    if (_ in s)
      return m(void 0, F);
  }
  const P = {
    url: C,
    method: C,
    data: C,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: j,
    headers: (F, Y) => E(eE(F), eE(Y), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, s, f)), function(Y) {
    const _ = P[Y] || E, te = _(s[Y], f[Y], Y);
    U.isUndefined(te) && _ !== j || (p[Y] = te);
  }), p;
}
const OE = "1.6.8", Nh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, f) => {
  Nh[s] = function(m) {
    return typeof m === s || "a" + (f < 1 ? "n " : " ") + s;
  };
});
const tE = {};
Nh.transitional = function(f, p, m) {
  function E(C, d) {
    return "[Axios v" + OE + "] Transitional option '" + C + "'" + d + (m ? ". " + m : "");
  }
  return (C, d, j) => {
    if (f === !1)
      throw new Fe(
        E(d, " has been removed" + (p ? " in " + p : "")),
        Fe.ERR_DEPRECATED
      );
    return p && !tE[d] && (tE[d] = !0, console.warn(
      E(
        d,
        " has been deprecated since v" + p + " and will be removed in the near future"
      )
    )), f ? f(C, d, j) : !0;
  };
};
function oM(s, f, p) {
  if (typeof s != "object")
    throw new Fe("options must be an object", Fe.ERR_BAD_OPTION_VALUE);
  const m = Object.keys(s);
  let E = m.length;
  for (; E-- > 0; ) {
    const C = m[E], d = f[C];
    if (d) {
      const j = s[C], P = j === void 0 || d(j, C, s);
      if (P !== !0)
        throw new Fe("option " + C + " must be " + P, Fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (p !== !0)
      throw new Fe("Unknown option " + C, Fe.ERR_BAD_OPTION);
  }
}
const Ah = {
  assertOptions: oM,
  validators: Nh
}, di = Ah.validators;
class Qi {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new QS(),
      response: new QS()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(f, p) {
    try {
      return await this._request(f, p);
    } catch (m) {
      if (m instanceof Error) {
        let E;
        Error.captureStackTrace ? Error.captureStackTrace(E = {}) : E = new Error();
        const C = E.stack ? E.stack.replace(/^.+\n/, "") : "";
        m.stack ? C && !String(m.stack).endsWith(C.replace(/^.+\n.+\n/, "")) && (m.stack += `
` + C) : m.stack = C;
      }
      throw m;
    }
  }
  _request(f, p) {
    typeof f == "string" ? (p = p || {}, p.url = f) : p = f || {}, p = Ko(this.defaults, p);
    const { transitional: m, paramsSerializer: E, headers: C } = p;
    m !== void 0 && Ah.assertOptions(m, {
      silentJSONParsing: di.transitional(di.boolean),
      forcedJSONParsing: di.transitional(di.boolean),
      clarifyTimeoutError: di.transitional(di.boolean)
    }, !1), E != null && (U.isFunction(E) ? p.paramsSerializer = {
      serialize: E
    } : Ah.assertOptions(E, {
      encode: di.function,
      serialize: di.function
    }, !0)), p.method = (p.method || this.defaults.method || "get").toLowerCase();
    let d = C && U.merge(
      C.common,
      C[p.method]
    );
    C && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (V) => {
        delete C[V];
      }
    ), p.headers = hr.concat(d, C);
    const j = [];
    let P = !0;
    this.interceptors.request.forEach(function(ne) {
      typeof ne.runWhen == "function" && ne.runWhen(p) === !1 || (P = P && ne.synchronous, j.unshift(ne.fulfilled, ne.rejected));
    });
    const F = [];
    this.interceptors.response.forEach(function(ne) {
      F.push(ne.fulfilled, ne.rejected);
    });
    let Y, _ = 0, te;
    if (!P) {
      const V = [ZS.bind(this), void 0];
      for (V.unshift.apply(V, j), V.push.apply(V, F), te = V.length, Y = Promise.resolve(p); _ < te; )
        Y = Y.then(V[_++], V[_++]);
      return Y;
    }
    te = j.length;
    let W = p;
    for (_ = 0; _ < te; ) {
      const V = j[_++], ne = j[_++];
      try {
        W = V(W);
      } catch (Qe) {
        ne.call(this, Qe);
        break;
      }
    }
    try {
      Y = ZS.call(this, W);
    } catch (V) {
      return Promise.reject(V);
    }
    for (_ = 0, te = F.length; _ < te; )
      Y = Y.then(F[_++], F[_++]);
    return Y;
  }
  getUri(f) {
    f = Ko(this.defaults, f);
    const p = xE(f.baseURL, f.url);
    return SE(p, f.params, f.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(f) {
  Qi.prototype[f] = function(p, m) {
    return this.request(Ko(m || {}, {
      method: f,
      url: p,
      data: (m || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(f) {
  function p(m) {
    return function(C, d, j) {
      return this.request(Ko(j || {}, {
        method: f,
        headers: m ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: C,
        data: d
      }));
    };
  }
  Qi.prototype[f] = p(), Qi.prototype[f + "Form"] = p(!0);
});
class kh {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let p;
    this.promise = new Promise(function(C) {
      p = C;
    });
    const m = this;
    this.promise.then((E) => {
      if (!m._listeners)
        return;
      let C = m._listeners.length;
      for (; C-- > 0; )
        m._listeners[C](E);
      m._listeners = null;
    }), this.promise.then = (E) => {
      let C;
      const d = new Promise((j) => {
        m.subscribe(j), C = j;
      }).then(E);
      return d.cancel = function() {
        m.unsubscribe(C);
      }, d;
    }, f(function(C, d, j) {
      m.reason || (m.reason = new Ql(C, d, j), p(m.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(f) {
    if (this.reason) {
      f(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(f) : this._listeners = [f];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(f) {
    if (!this._listeners)
      return;
    const p = this._listeners.indexOf(f);
    p !== -1 && this._listeners.splice(p, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let f;
    return {
      token: new kh(function(E) {
        f = E;
      }),
      cancel: f
    };
  }
}
function uM(s) {
  return function(p) {
    return s.apply(null, p);
  };
}
function lM(s) {
  return U.isObject(s) && s.isAxiosError === !0;
}
const Mh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Mh).forEach(([s, f]) => {
  Mh[f] = s;
});
function _E(s) {
  const f = new Qi(s), p = lE(Qi.prototype.request, f);
  return U.extend(p, Qi.prototype, f, { allOwnKeys: !0 }), U.extend(p, f, null, { allOwnKeys: !0 }), p.create = function(E) {
    return _E(Ko(s, E));
  }, p;
}
const St = _E(Il);
St.Axios = Qi;
St.CanceledError = Ql;
St.CancelToken = kh;
St.isCancel = TE;
St.VERSION = OE;
St.toFormData = yf;
St.AxiosError = Fe;
St.Cancel = St.CanceledError;
St.all = function(f) {
  return Promise.all(f);
};
St.spread = uM;
St.isAxiosError = lM;
St.mergeConfig = Ko;
St.AxiosHeaders = hr;
St.formToJSON = (s) => RE(U.isHTMLForm(s) ? new FormData(s) : s);
St.getAdapter = DE.getAdapter;
St.HttpStatusCode = Mh;
St.default = St;
class sM {
  post(f, p) {
    const m = { "Content-Type": "application/json" };
    return St.post(f, p, { headers: m }).then((E) => E.data).catch((E) => {
      throw E.response.data;
    });
  }
  get(f) {
    return St.get(f).then((p) => p.data).catch((p) => {
      throw p.response.data;
    });
  }
}
const hM = new sM();
export {
  hM as C,
  Iw as c,
  pM as j,
  aE as r
};
