(function () {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }

        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }

    function _asyncToGenerator(fn) {
        return function () {
            var self = this,
                args = arguments;
            return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }

        return target;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        return function () {
            var Super = _getPrototypeOf(Derived),
                result;

            if (_isNativeReflectConstruct()) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o) {
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
                var i = 0;

                var F = function () {};

                return {
                    s: F,
                    n: function () {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: F
                };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var it,
            normalCompletion = true,
            didErr = false,
            err;
        return {
            s: function () {
                it = o[Symbol.iterator]();
            },
            n: function () {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function (e) {
                didErr = true;
                err = e;
            },
            f: function () {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var runtime_1 = createCommonjsModule(function (module) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = function (exports) {

            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined$1; // More compressible than void 0.

            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype);
                var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
                // .throw, and .return methods.

                generator._invoke = makeInvokeMethod(innerFn, self, context);
                return generator;
            }

            exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.

            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    };
                } catch (err) {
                    return {
                        type: "throw",
                        arg: err
                    };
                }
            }

            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield = "suspendedYield";
            var GenStateExecuting = "executing";
            var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.

            var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.


            var IteratorPrototype = {};

            IteratorPrototype[iteratorSymbol] = function () {
                return this;
            };

            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                // This environment has a native %IteratorPrototype%; use it instead
                // of the polyfill.
                IteratorPrototype = NativeIteratorPrototype;
            }

            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.

            function defineIteratorMethods(prototype) {
                ["next", "throw", "return"].forEach(function (method) {
                    prototype[method] = function (arg) {
                        return this._invoke(method, arg);
                    };
                });
            }

            exports.isGeneratorFunction = function (genFun) {
                var ctor = typeof genFun === "function" && genFun.constructor;
                return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
            };

            exports.mark = function (genFun) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;

                    if (!(toStringTagSymbol in genFun)) {
                        genFun[toStringTagSymbol] = "GeneratorFunction";
                    }
                }

                genFun.prototype = Object.create(Gp);
                return genFun;
            }; // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.


            exports.awrap = function (arg) {
                return {
                    __await: arg
                };
            };

            function AsyncIterator(generator, PromiseImpl) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);

                    if (record.type === "throw") {
                        reject(record.arg);
                    } else {
                        var result = record.arg;
                        var value = result.value;

                        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                            return PromiseImpl.resolve(value.__await).then(function (value) {
                                invoke("next", value, resolve, reject);
                            }, function (err) {
                                invoke("throw", err, resolve, reject);
                            });
                        }

                        return PromiseImpl.resolve(value).then(function (unwrapped) {
                            // When a yielded Promise is resolved, its final value becomes
                            // the .value of the Promise<{value,done}> result for the
                            // current iteration.
                            result.value = unwrapped;
                            resolve(result);
                        }, function (error) {
                            // If a rejected Promise was yielded, throw the rejection back
                            // into the async generator function so it can be handled there.
                            return invoke("throw", error, resolve, reject);
                        });
                    }
                }

                var previousPromise;

                function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new PromiseImpl(function (resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }

                    return previousPromise = // If enqueue has been called before, then we want to wait until
                        // all previous Promises have been resolved before calling invoke,
                        // so that results are always delivered in the correct order. If
                        // enqueue has not been called before, then it is important to
                        // call invoke immediately, without waiting on a callback to fire,
                        // so that the async generator function has the opportunity to do
                        // any necessary setup in a predictable way. This predictability
                        // is why the Promise constructor synchronously invokes its
                        // executor callback, and why async functions synchronously
                        // execute code before the first await. Since we implement simple
                        // async functions in terms of async generators, it is especially
                        // important to get this right, even though it requires care.
                        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                            // invocations of the iterator.
                            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                } // Define the unified helper method that is used to implement .next,
                // .throw, and .return (see defineIteratorMethods).


                this._invoke = enqueue;
            }

            defineIteratorMethods(AsyncIterator.prototype);

            AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                return this;
            };

            exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.

            exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                if (PromiseImpl === void 0) PromiseImpl = Promise;
                var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
                return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
                    : iter.next().then(function (result) {
                        return result.done ? result.value : iter.next();
                    });
            };

            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart;
                return function invoke(method, arg) {
                    if (state === GenStateExecuting) {
                        throw new Error("Generator is already running");
                    }

                    if (state === GenStateCompleted) {
                        if (method === "throw") {
                            throw arg;
                        } // Be forgiving, per 25.3.3.3.3 of the spec:
                        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


                        return doneResult();
                    }

                    context.method = method;
                    context.arg = arg;

                    while (true) {
                        var delegate = context.delegate;

                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);

                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }

                        if (context.method === "next") {
                            // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = context.arg;
                        } else if (context.method === "throw") {
                            if (state === GenStateSuspendedStart) {
                                state = GenStateCompleted;
                                throw context.arg;
                            }

                            context.dispatchException(context.arg);
                        } else if (context.method === "return") {
                            context.abrupt("return", context.arg);
                        }

                        state = GenStateExecuting;
                        var record = tryCatch(innerFn, self, context);

                        if (record.type === "normal") {
                            // If an exception is thrown from innerFn, we leave state ===
                            // GenStateExecuting and loop back for another invocation.
                            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                            if (record.arg === ContinueSentinel) {
                                continue;
                            }

                            return {
                                value: record.arg,
                                done: context.done
                            };
                        } else if (record.type === "throw") {
                            state = GenStateCompleted; // Dispatch the exception by looping back around to the
                            // context.dispatchException(context.arg) call above.

                            context.method = "throw";
                            context.arg = record.arg;
                        }
                    }
                };
            } // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.


            function maybeInvokeDelegate(delegate, context) {
                var method = delegate.iterator[context.method];

                if (method === undefined$1) {
                    // A .throw or .return when the delegate iterator has no .throw
                    // method always terminates the yield* loop.
                    context.delegate = null;

                    if (context.method === "throw") {
                        // Note: ["return"] must be used for ES3 parsing compatibility.
                        if (delegate.iterator["return"]) {
                            // If the delegate iterator has a return method, give it a
                            // chance to clean up.
                            context.method = "return";
                            context.arg = undefined$1;
                            maybeInvokeDelegate(delegate, context);

                            if (context.method === "throw") {
                                // If maybeInvokeDelegate(context) changed context.method from
                                // "return" to "throw", let that override the TypeError below.
                                return ContinueSentinel;
                            }
                        }

                        context.method = "throw";
                        context.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }

                    return ContinueSentinel;
                }

                var record = tryCatch(method, delegate.iterator, context.arg);

                if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                }

                var info = record.arg;

                if (!info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                }

                if (info.done) {
                    // Assign the result of the finished delegate to the temporary
                    // variable specified by delegate.resultName (see delegateYield).
                    context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

                    context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
                    // exception, let the outer generator proceed normally. If
                    // context.method was "next", forget context.arg since it has been
                    // "consumed" by the delegate iterator. If context.method was
                    // "return", allow the original .return call to continue in the
                    // outer generator.

                    if (context.method !== "return") {
                        context.method = "next";
                        context.arg = undefined$1;
                    }
                } else {
                    // Re-yield the result returned by the delegate method.
                    return info;
                } // The delegate iterator is finished, so forget it and continue with
                // the outer generator.


                context.delegate = null;
                return ContinueSentinel;
            } // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.


            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.

            Gp[iteratorSymbol] = function () {
                return this;
            };

            Gp.toString = function () {
                return "[object Generator]";
            };

            function pushTryEntry(locs) {
                var entry = {
                    tryLoc: locs[0]
                };

                if (1 in locs) {
                    entry.catchLoc = locs[1];
                }

                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }

                this.tryEntries.push(entry);
            }

            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }

            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [{
                    tryLoc: "root"
                }];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(true);
            }

            exports.keys = function (object) {
                var keys = [];

                for (var key in object) {
                    keys.push(key);
                }

                keys.reverse(); // Rather than returning an object with a next method, we keep
                // things simple and return the next function itself.

                return function next() {
                    while (keys.length) {
                        var key = keys.pop();

                        if (key in object) {
                            next.value = key;
                            next.done = false;
                            return next;
                        }
                    } // To avoid creating an additional object, we just hang the .value
                    // and .done properties off the next function object itself. This
                    // also ensures that the minifier will not anonymize the function.


                    next.done = true;
                    return next;
                };
            };

            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];

                    if (iteratorMethod) {
                        return iteratorMethod.call(iterable);
                    }

                    if (typeof iterable.next === "function") {
                        return iterable;
                    }

                    if (!isNaN(iterable.length)) {
                        var i = -1,
                            next = function next() {
                                while (++i < iterable.length) {
                                    if (hasOwn.call(iterable, i)) {
                                        next.value = iterable[i];
                                        next.done = false;
                                        return next;
                                    }
                                }

                                next.value = undefined$1;
                                next.done = true;
                                return next;
                            };

                        return next.next = next;
                    }
                } // Return an iterator with no values.


                return {
                    next: doneResult
                };
            }

            exports.values = values;

            function doneResult() {
                return {
                    value: undefined$1,
                    done: true
                };
            }

            Context.prototype = {
                constructor: Context,
                reset: function (skipTempReset) {
                    this.prev = 0;
                    this.next = 0; // Resetting context._sent for legacy support of Babel's
                    // function.sent implementation.

                    this.sent = this._sent = undefined$1;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = undefined$1;
                    this.tryEntries.forEach(resetTryEntry);

                    if (!skipTempReset) {
                        for (var name in this) {
                            // Not sure about the optimal order of these conditions:
                            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                                this[name] = undefined$1;
                            }
                        }
                    }
                },
                stop: function () {
                    this.done = true;
                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;

                    if (rootRecord.type === "throw") {
                        throw rootRecord.arg;
                    }

                    return this.rval;
                },
                dispatchException: function (exception) {
                    if (this.done) {
                        throw exception;
                    }

                    var context = this;

                    function handle(loc, caught) {
                        record.type = "throw";
                        record.arg = exception;
                        context.next = loc;

                        if (caught) {
                            // If the dispatched exception was caught by a catch block,
                            // then let that catch block handle the exception normally.
                            context.method = "next";
                            context.arg = undefined$1;
                        }

                        return !!caught;
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        var record = entry.completion;

                        if (entry.tryLoc === "root") {
                            // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                        }

                        if (entry.tryLoc <= this.prev) {
                            var hasCatch = hasOwn.call(entry, "catchLoc");
                            var hasFinally = hasOwn.call(entry, "finallyLoc");

                            if (hasCatch && hasFinally) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                } else if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else if (hasCatch) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                }
                            } else if (hasFinally) {
                                if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else {
                                throw new Error("try statement without catch or finally");
                            }
                        }
                    }
                },
                abrupt: function (type, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }

                    if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                        // Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null;
                    }

                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type;
                    record.arg = arg;

                    if (finallyEntry) {
                        this.method = "next";
                        this.next = finallyEntry.finallyLoc;
                        return ContinueSentinel;
                    }

                    return this.complete(record);
                },
                complete: function (record, afterLoc) {
                    if (record.type === "throw") {
                        throw record.arg;
                    }

                    if (record.type === "break" || record.type === "continue") {
                        this.next = record.arg;
                    } else if (record.type === "return") {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if (record.type === "normal" && afterLoc) {
                        this.next = afterLoc;
                    }

                    return ContinueSentinel;
                },
                finish: function (finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);
                            return ContinueSentinel;
                        }
                    }
                },
                "catch": function (tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;

                            if (record.type === "throw") {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }

                            return thrown;
                        }
                    } // The context.catch method must only be called with a location
                    // argument that corresponds to a known catch block.


                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };

                    if (this.method === "next") {
                        // Deliberately forget the last sent value so that we don't
                        // accidentally pass it on to the delegate.
                        this.arg = undefined$1;
                    }

                    return ContinueSentinel;
                }
            }; // Regardless of whether this script is executing as a CommonJS module
            // or not, return the runtime object so that we can declare the variable
            // regeneratorRuntime in the outer scope, which allows this module to be
            // injected easily by `bin/regenerator --include-runtime script.js`.

            return exports;
        }( // If this script is executing as a CommonJS module, use module.exports
            // as the regeneratorRuntime namespace. Otherwise create a new empty
            // object. Either way, the resulting object will be used to initialize
            // the regeneratorRuntime variable at the top of this file.
            module.exports );

        try {
            regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
            // This module should not be running in strict mode, so the above
            // assignment should always work unless something is misconfigured. Just
            // in case runtime.js accidentally runs in strict mode, we can escape
            // strict mode using a global Function call. This could conceivably fail
            // if a Content Security Policy forbids using Function, but in that case
            // the proper solution is to fix the accidental strict mode problem. If
            // you've misconfigured your bundler to force strict mode and applied a
            // CSP to forbid Function, and you're not willing to fix either of those
            // problems, please detail your unique predicament in a GitHub issue.
            Function("r", "regeneratorRuntime = r")(runtime);
        }
    });

    var LHBaseClass = /*#__PURE__*/function () {
        function LHBaseClass(params) {
            _classCallCheck(this, LHBaseClass);
        }

        _createClass(LHBaseClass, [{
            key: "getParam",
            value: function getParam(params, strKey, defaultValue) {
                params = params || {};

                if (strKey in params) {
                    return params[strKey];
                } else if (defaultValue === undefined) {
                    this.throwException(strKey + " is a required parameter", "Parameters Error");
                } else {
                    return defaultValue;
                }
            }
        }, {
            key: "throwException",
            value: function throwException(message) {
                var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
                throw new Error(this.constructor.name + " -- " + title + ": " + message);
            }
        }]);

        return LHBaseClass;
    }();

    var LHBaseClass_1 = LHBaseClass;

    var LHDelegate = /*#__PURE__*/function (_LHBaseClass) {
        _inherits(LHDelegate, _LHBaseClass);

        var _super = _createSuper(LHDelegate);

        function LHDelegate(params) {
            var _this;

            _classCallCheck(this, LHDelegate);

            _this = _super.call(this, params);
            _this.delegate = _this.getParam(params, "delegate", null);
            _this.delegateTypes = [];
            return _this;
        }

        _createClass(LHDelegate, [{
            key: "notify",
            value: function () {
                var _notify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegateString) {
                    var object,
                        _args = arguments;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    object = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;

                                    if (!this.delegateTypes.includes(delegateString)) {
                                        this.throwException("delegateString:" + delegateString + " is not defined in delegateTypes");
                                    }

                                    if (this.delegate) {
                                        this.delegate.receive(this, delegateString, object);
                                    }

                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function notify(_x) {
                    return _notify.apply(this, arguments);
                }

                return notify;
            }()
        }, {
            key: "receive",
            value: function () {
                var _receive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(notifier, delegateString) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:

                                case 1:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2);
                }));

                function receive(_x2, _x3) {
                    return _receive.apply(this, arguments);
                }

                return receive;
            }()
        }]);

        return LHDelegate;
    }(LHBaseClass_1);

    var LHDelegate_1 = LHDelegate;

    var propertyTypes = {
        STRING: "string",
        BOOL: "boolean",
        DATETIME: "dateTime",
        FILE: "attachment",
        NUMBER: "number",
        DECIMAL: "decimal",
        DATE: "extendedDateTime",
        // GUID: "guid",
        // AUTOGUID: "guid",
        // HYPERLINK: "object",
        // IMAGE: "image",
        MEMO: "extendedString" // MULTIVALUE: "object",
        // TIME: "extendedDateTime",
        // AUTONUMBER: "extendedNumber",
        // XML: "extendedString"

    };
    var methodTypes = {
        LIST: "list",
        READ: "read",
        CREATE: "create",
        EXECUTE: "execute",
        UPDATE: "update",
        DELETE: "delete"
    };
    var propertyTypes_1 = propertyTypes;
    var methodTypes_1 = methodTypes;
    var k2Types = {
        propertyTypes: propertyTypes_1,
        methodTypes: methodTypes_1
    };

    var propertyTypes$1 = k2Types.propertyTypes,
        methodTypes$1 = k2Types.methodTypes;

    var K2Base = /*#__PURE__*/function (_LHDelegate) {
        _inherits(K2Base, _LHDelegate);

        var _super = _createSuper(K2Base);

        function K2Base(params) {
            var _this;

            _classCallCheck(this, K2Base);

            _this = _super.call(this, params);
            _this.propertyTypes = _objectSpread2({}, propertyTypes$1);
            _this.methodTypes = _objectSpread2({}, methodTypes$1);
            return _this;
        }

        return K2Base;
    }(LHDelegate_1);

    var K2Base_1 = K2Base;

    var K2BaseIntegration = /*#__PURE__*/function (_K2Base) {
        _inherits(K2BaseIntegration, _K2Base);

        var _super = _createSuper(K2BaseIntegration);

        function K2BaseIntegration(params) {
            var _this;

            _classCallCheck(this, K2BaseIntegration);

            _this = _super.call(this, params);
            _this.metaData = {
                systemName: null,
                displayName: null,
                description: null
            };
            _this.smartObjects = [];
            return _this;
        }

        _createClass(K2BaseIntegration, [{
            key: "getSmartObject",
            value: function getSmartObject(name) {
                var _iterator = _createForOfIteratorHelper(this.smartObjects),
                    _step;

                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var obj = _step.value;

                        if (obj.name === name) {
                            return obj;
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }

                this.throwException("Smart Object does not exist!");
            }
        }, {
            key: "getMetaData",
            value: function getMetaData() {
                return this.metaData;
            }
        }, {
            key: "getSchemas",
            value: function getSchemas() {
                var returnSchema = {};

                var _iterator2 = _createForOfIteratorHelper(this.smartObjects),
                    _step2;

                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var obj = _step2.value;
                        returnSchema[obj.name] = obj.getSchema();
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }

                return {
                    displayName: this.metaData.displayName,
                    description: this.metaData.description,
                    objects: returnSchema
                };
            }
        }, {
            key: "execute",
            value: function () {
                var _execute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(objectName, methodName, parameters, properties) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    obj = this.getSmartObject(objectName);
                                    _context.next = 3;
                                    return obj[methodName](parameters, properties);

                                case 3:
                                    return _context.abrupt("return", _context.sent);

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function execute(_x, _x2, _x3, _x4) {
                    return _execute.apply(this, arguments);
                }

                return execute;
            }()
        }]);

        return K2BaseIntegration;
    }(K2Base_1);

    var K2BaseIntegration_1 = K2BaseIntegration;

    var K2BaseSmartObject = /*#__PURE__*/function (_K2Base) {
        _inherits(K2BaseSmartObject, _K2Base);

        var _super = _createSuper(K2BaseSmartObject);

        function K2BaseSmartObject(params) {
            var _this;

            _classCallCheck(this, K2BaseSmartObject);

            _this = _super.call(this, params);
            _this.name = "K2BaseSmartObject";
            _this.displayName = "K2 BaseSmart Object";
            _this.description = "K2 BaseSmart Object";
            _this.api = _this.getParam(params, "api");
            _this.props = {};
            return _this;
        }

        _createClass(K2BaseSmartObject, [{
            key: "getProperties",
            value: function getProperties() {
                return {};
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return {};
            }
        }, {
            key: "getSchema",
            value: function getSchema() {
                return {
                    displayName: this.displayName,
                    description: this.description,
                    properties: this.getProperties(),
                    methods: this.getMethods()
                };
            }
        }]);

        return K2BaseSmartObject;
    }(K2Base_1);

    var K2BaseSmartObject_1 = K2BaseSmartObject;

    var propertyTypes$2 = k2Types.propertyTypes,
        methodTypes$2 = k2Types.methodTypes;
    var fileThings = {
        fileProps: {
            id: "id",
            name: "name",
            path: "path",
            shareUrl: "shareUrl",
            size: "size",
            sourcePath: "sourcePath",
            destinationPath: "destinationPath",
            modifiedDate: "modifiedDate",
            directory: "directory",
            tags: "tags",
            parentFolderId: "parentFolderId",
            file: "File",
            // properties: "properties",
            tagName: "tagName",
            tagValue: "tagValue",
            result: "result"
        },

        get filePropertiesObj() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this.fileProps.id, {
                displayName: "File Id",
                description: "File Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.name, {
                displayName: "File Name",
                description: "File Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.shareUrl, {
                displayName: "Share URL",
                description: "Share URL",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.file, {
                displayName: "File",
                description: "Input File Prop",
                type: propertyTypes$2.FILE
            }), _defineProperty(_ref, this.fileProps.size, {
                displayName: "File Size",
                description: "Size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref, this.fileProps.sourcePath, {
                displayName: "Source Path",
                description: "Source Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.destinationPath, {
                displayName: "Destination Path",
                description: "Destination Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref, this.fileProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref, this.fileProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tagName, {
                displayName: "Tag Name",
                description: "Tag Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tagValue, {
                displayName: "Tag Value",
                description: "Tag Value",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.result, {
                displayName: "File Upload Results",
                description: "File Upload Results",
                type: propertyTypes$2.STRING
            }), _ref;
        },

        fileMethods: {
            getInfo: "getInfo",
            getInfoById: "getInfoById",
            getShareUrl: "getShareUrl",
            getShareUrlById: "getShareUrlById",
            download: "download",
            copy: "copy",
            "delete": "delete",
            move: "move",
            upload: "upload",
            updateTags: "updateTags",
            updateSingleTag: "updateSingleTag"
        },

        get fileMethodsObj() {
            var _ref2;

            return _ref2 = {}, _defineProperty(_ref2, this.fileMethods.getInfo, {
                displayName: "Get Info",
                description: "Get info for the file by a given path.",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.getInfoById, {
                displayName: "Get Info From Id",
                description: "Get metadata for a given file.",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.id],
                requiredInputs: [this.fileProps.id],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.getShareUrl, {
                displayName: "Get File Share URL",
                description: "Gets a basic share URL for a file.",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.shareUrl]
            }), _defineProperty(_ref2, this.fileMethods.getShareUrlById, {
                displayName: "Get File Share URL by Id",
                description: "Gets a basic share URL for a file with an Id.",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.id],
                requiredInputs: [this.fileProps.id],
                outputs: [this.fileProps.shareUrl]
            }), _defineProperty(_ref2, this.fileMethods.download, {
                displayName: "Download",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate, this.fileProps.file]
            }), _defineProperty(_ref2, this.fileMethods.copy, {
                displayName: "Copy File",
                description: "Copy a file into a given folder.",
                inputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                requiredInputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                type: methodTypes$2.CREATE,
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods["delete"], {
                displayName: "Delete File",
                description: "Delete File",
                type: methodTypes$2.DELETE,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: []
            }), _defineProperty(_ref2, this.fileMethods.move, {
                displayName: "Move File",
                description: "Move File",
                type: methodTypes$2.EXECUTE,
                inputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                requiredInputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.upload, {
                displayName: "Upload File",
                description: "Upload a File",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.path, this.fileProps.file],
                requiredInputs: [this.fileProps.path, this.fileProps.file],
                outputs: [this.fileProps.id, this.fileProps.name, // this.fileProps.parentFolderId,
                    // this.fileProps.directory,
                    // // this.fileProps.properties,
                    // this.fileProps.tags,
                    this.fileProps.path, // this.fileProps.size,
                    // this.fileProps.modifiedDate
                    this.fileProps.result]
            }), _defineProperty(_ref2, this.fileMethods.updateTags, {
                displayName: "Update Tags",
                description: "Update tags for a given file.",
                inputs: [this.fileProps.path, this.fileProps.tags],
                requiredInputs: [this.fileProps.path, this.fileProps.tags],
                type: methodTypes$2.UPDATE,
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.updateSingleTag, {
                displayName: "Update Single File Tag",
                description: "Update an individual metadata Tag of a File",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.fileProps.path, this.fileProps.tagName, this.fileProps.tagValue],
                requiredInputs: [this.fileProps.path, this.fileProps.tagName, this.fileProps.tagValue],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _ref2;
        }

    };
    var folderThings = {
        folderProps: {
            id: "id",
            name: "name",
            path: "path",
            shareUrl: "shareUrl",
            size: "size",
            sourcePath: "sourcePath",
            destinationPath: "destinationPath",
            modifiedDate: "modifiedDate",
            directory: "directory",
            tags: "tags",
            parentFolderId: "parentFolderId",
            // properties: "properties",
            tagName: "tagName",
            tagValue: "tagValue"
        },

        get folderPropertiesObj() {
            var _ref3;

            return _ref3 = {}, _defineProperty(_ref3, this.folderProps.id, {
                displayName: "Folder Id",
                description: "Folder Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.name, {
                displayName: "Folder Name",
                description: "Folder Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.shareUrl, {
                displayName: "Share URL",
                description: "Share URL",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.size, {
                displayName: "Size",
                description: "Size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref3, this.folderProps.sourcePath, {
                displayName: "Source Path",
                description: "Source Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.destinationPath, {
                displayName: "Destination Path",
                description: "Destination Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref3, this.folderProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref3, this.folderProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.tagName, {
                displayName: "Tag Name",
                description: "Tag Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.tagValue, {
                displayName: "Tag Value",
                description: "Tag Value",
                type: propertyTypes$2.STRING
            }), _ref3;
        },

        folderMethods: {
            listContents: "listContents",
            getInfoById: "getInfoById",
            getInfo: "getInfo",
            copy: "copy",
            create: "create",
            "delete": "delete",
            getShareUrl: "getShareUrl",
            getShareUrlById: 'getShareUrlById',
            move: "move",
            updateTags: "updateTags",
            updateSingleTag: "updateSingleTag"
        },

        get folderMethodsObj() {
            var _ref4;

            return _ref4 = {}, _defineProperty(_ref4, this.folderMethods.listContents, {
                displayName: "List Contents",
                description: "List all contents in a given folder",
                type: methodTypes$2.LIST,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.id, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.parentFolderId, this.folderProps.name, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.getInfoById, {
                displayName: "Get Info From Id",
                description: "Get metadata for a given folder.",
                type: methodTypes$2.READ,
                inputs: [this.folderProps.id],
                requiredInputs: [this.folderProps.id],
                // add metadata to outputs
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate, this.folderProps.parentFolderId, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.directory]
            }), _defineProperty(_ref4, this.folderMethods.getInfo, {
                displayName: "Get Info From Path",
                description: "Get metadata for a given folder.",
                type: methodTypes$2.READ,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                // add metadata to outputs
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate, this.folderProps.parentFolderId, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.directory]
            }), _defineProperty(_ref4, this.folderMethods.copy, {
                displayName: "Copy Folder",
                description: "Creates a copy of a folder, including its files.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                requiredInputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.create, {
                displayName: "Create Folder",
                description: "Create a new folder given a path.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.name, this.folderProps.id, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods["delete"], {
                displayName: "Delete Folder",
                description: "Deletes a folder",
                type: methodTypes$2.DELETE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: []
            }), _defineProperty(_ref4, this.folderMethods.getShareUrl, {
                displayName: "Get Folder Share URL",
                description: "Gets a basic share URL for a folder.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.shareUrl]
            }), _defineProperty(_ref4, this.folderMethods.getShareUrlById, {
                displayName: "Get Folder Share URL by Id",
                description: "Gets a basic share URL for a folder with an Id.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.id],
                requiredInputs: [this.folderProps.id],
                outputs: [this.folderProps.shareUrl]
            }), _defineProperty(_ref4, this.folderMethods.move, {
                displayName: "Move Folder",
                description: "Moves a folder to a new parent folder.",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                requiredInputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.updateTags, {
                displayName: "Update Folder Tags",
                description: "Update the Tags of a Folder",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.path, this.folderProps.tags],
                requiredInputs: [this.folderProps.path, this.folderProps.tags],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.updateSingleTag, {
                displayName: "Update Single Folder Tag",
                description: "Update an individual metadata Tag of a Folder",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.path, this.folderProps.tagName, this.folderProps.tagValue],
                requiredInputs: [this.folderProps.path, this.folderProps.tagName, this.folderProps.tagValue],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _ref4;
        }

    };
    var serviceThings = {
        serviceProps: {
            id: "id",
            name: "name",
            directory: "directory",
            // properties: "properties",
            tags: "tags",
            path: "path",
            size: "size",
            parentFolderId: "parentFolderId",
            modifiedDate: "modifiedDate",
            used: "used",
            shared: "shared",
            total: "total",
            keyWords: "keyWords"
        },

        get servicePropertiesObj() {
            var _ref5;

            return _ref5 = {}, _defineProperty(_ref5, this.serviceProps.id, {
                displayName: "Id",
                description: "Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.name, {
                displayName: "Name",
                description: "Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref5, this.serviceProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.size, {
                displayName: "Size",
                description: "size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref5, this.serviceProps.used, {
                displayName: "Used",
                description: "Used",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.shared, {
                displayName: "Shared",
                description: "Shared",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.total, {
                displayName: "Total",
                description: "Total",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.keyWords, {
                displayName: "Search Query",
                description: "Search query string according to the service",
                type: propertyTypes$2.STRING
            }), _ref5;
        },

        serviceMethods: {
            search: "search",
            getQuota: "getQuota"
        },

        get serviceMethodsObj() {
            var _ref6;

            return _ref6 = {}, _defineProperty(_ref6, this.serviceMethods.search, {
                displayName: "Search",
                description: "Search for items",
                type: methodTypes$2.LIST,
                inputs: [this.serviceProps.keyWords],
                requiredInputs: [this.serviceProps.keyWords],
                outputs: [this.serviceProps.id, this.serviceProps.name, this.serviceProps.directory, this.serviceProps.path, this.serviceProps.parentFolderId, // this.serviceProps.properties,
                    this.serviceProps.tags, this.serviceProps.size, this.serviceProps.modifiedDate]
            }), _defineProperty(_ref6, this.serviceMethods.getQuota, {
                displayName: "Get Quota",
                description: "Get storage quota",
                inputs: [],
                requiredInputs: [],
                type: methodTypes$2.READ,
                outputs: [this.serviceProps.total, this.serviceProps.used, this.serviceProps.shared]
            }), _ref6;
        }

    };

    var fileStorageSharedPropertiesAndMethods = _objectSpread2({}, fileThings, {}, folderThings, {}, serviceThings);

    var fileProps = fileStorageSharedPropertiesAndMethods.fileProps,
        filePropertiesObj = fileStorageSharedPropertiesAndMethods.filePropertiesObj,
        fileMethods = fileStorageSharedPropertiesAndMethods.fileMethods,
        fileMethodsObj = fileStorageSharedPropertiesAndMethods.fileMethodsObj; //Get parent folder id for output props

    function parentFolder(f) {
        var path = f.path_display;
        var folders = path.split("/"); // array of folders holding f
        //If f is one folder from root: ['', 'parent', 'f']

        folders.pop(); // remove f from array
        // get the last value in array
        // let parentFolder = folders[folders.length - 1];]

        if (folders.length == 1) {
            // If it's a single item, then it's root, and root needs the forward slash since join won't add it
            folders[0] = '/';
        }

        return "".concat(folders.join('/')); // in path format
    }

    function isFolder(f) {
        var type = f[".tag"]; // console.log("type: ", type);

        return type === "folder" ? true : false;
    }

    var File = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(File, _K2BaseSmartObject);

        var _super = _createSuper(File);

        function File(params) {
            var _this;

            _classCallCheck(this, File);

            _this = _super.call(this, params);
            _this.name = "file";
            _this.displayName = "File";
            _this.description = "File";
            _this.props = _objectSpread2({}, fileProps);
            _this.methods = _objectSpread2({}, fileMethods);
            return _this;
        }

        _createClass(File, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, filePropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, fileMethodsObj);
            } // Helper function to retrieve K2 template ID

        }, {
            key: "getK2TemplateId",
            value: function () {
                var _getK2TemplateId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res, template_ids, templates, i, template_res, k2templates, k2TemplateId, k2template, extraTemplates, c, extra_template_id, newk2TemplateGroup;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.api.listTemplates();

                                case 2:
                                    res = _context.sent;
                                    template_ids = res.template_ids;
                                    templates = [];
                                    i = 0;

                                case 6:
                                    if (!(i < template_ids.length)) {
                                        _context.next = 15;
                                        break;
                                    }

                                    _context.next = 9;
                                    return this.api.getTemplate(template_ids[i]);

                                case 9:
                                    template_res = _context.sent;
                                    // template object
                                    template_res["template_id"] = template_ids[i]; // add id property

                                    templates.push(template_res);

                                case 12:
                                    i++;
                                    _context.next = 6;
                                    break;

                                case 15:
                                    k2templates = templates.filter(function (template) {
                                        return template.name === "K2 Tags";
                                    });
                                    k2TemplateId = '';

                                    if (!(k2templates.length > 0)) {
                                        _context.next = 35;
                                        break;
                                    }

                                    k2template = k2templates.slice(0, 1);
                                    k2TemplateId = k2template[0].template_id;
                                    extraTemplates = k2templates.slice(1, k2templates.length); // array of remaining objects

                                    if (!(extraTemplates.length > 0)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    c = 0;

                                case 24:
                                    if (!(c < extraTemplates.length)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    extra_template_id = extraTemplates[c];
                                    console.log(extra_template_id);
                                    _context.next = 29;
                                    return this.api.deleteTemplate(extra_template_id.template_id);

                                case 29:
                                    return _context.abrupt("return", _context.sent);

                                case 30:
                                    c++;
                                    _context.next = 24;
                                    break;

                                case 33:
                                    _context.next = 39;
                                    break;

                                case 35:
                                    _context.next = 37;
                                    return this.api.createPropertyGroupTemplate("K2 Tags", "Tags for the K2 Platform Smart Objects", []);

                                case 37:
                                    newk2TemplateGroup = _context.sent;
                                    k2TemplateId = newk2TemplateGroup.template_id;

                                case 39:
                                    return _context.abrupt("return", k2TemplateId);

                                case 40:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getK2TemplateId() {
                    return _getK2TemplateId.apply(this, arguments);
                }

                return getK2TemplateId;
            }() // Helper function to retrieve K2 Tag values from Folder or File

        }, {
            key: "getK2Tags",
            value: function () {
                var _getK2Tags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, k2TemplateId) {
                    var res, propertyGroup;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 2:
                                    res = _context2.sent;
                                    propertyGroup = res.property_groups[0];
                                    return _context2.abrupt("return", propertyGroup ? propertyGroup.fields : '');

                                case 5:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getK2Tags(_x, _x2) {
                    return _getK2Tags.apply(this, arguments);
                }

                return getK2Tags;
            }()
        }, {
            key: "getInfo",
            value: function () {
                var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params, properties) {
                    var _postResult;

                    var path, k2TemplateId, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context3.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context3.sent;
                                    _context3.next = 6;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 6:
                                    data = _context3.sent;
                                    //Get parent folder id from path
                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context3.next = 14;
                                        break;
                                    }

                                    _context3.next = 12;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 12:
                                    parent = _context3.sent;
                                    parentFolderId = parent.id;

                                case 14:
                                    postResult((_postResult = {}, _defineProperty(_postResult, this.props.id, data.id), _defineProperty(_postResult, this.props.name, data.name), _defineProperty(_postResult, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult, this.props.directory, isFolder(data)), _defineProperty(_postResult, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult, this.props.path, data.path_display), _defineProperty(_postResult, this.props.size, data.size), _defineProperty(_postResult, this.props.modifiedDate, new Date(data.client_modified)), _postResult));

                                case 15:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function getInfo(_x3, _x4) {
                    return _getInfo.apply(this, arguments);
                }

                return getInfo;
            }()
        }, {
            key: "getInfoById",
            value: function () {
                var _getInfoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, properties) {
                    var _postResult2;

                    var id, k2TemplateId, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context4.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context4.sent;
                                    _context4.next = 6;
                                    return this.api.getFolderOrFileInfo(id, k2TemplateId);

                                case 6:
                                    data = _context4.sent;
                                    // same endpoint
                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context4.next = 14;
                                        break;
                                    }

                                    _context4.next = 12;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 12:
                                    parent = _context4.sent;
                                    parentFolderId = parent.id;

                                case 14:
                                    postResult((_postResult2 = {}, _defineProperty(_postResult2, this.props.id, data.id), _defineProperty(_postResult2, this.props.name, data.name), _defineProperty(_postResult2, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult2, this.props.directory, isFolder(data)), _defineProperty(_postResult2, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult2, this.props.path, data.path_display), _defineProperty(_postResult2, this.props.size, data.size), _defineProperty(_postResult2, this.props.modifiedDate, new Date(data.client_modified)), _postResult2));

                                case 15:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function getInfoById(_x5, _x6) {
                    return _getInfoById.apply(this, arguments);
                }

                return getInfoById;
            }() //TODO fix

        }, {
            key: "download",
            value: function () {
                var _download = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params, properties) {
                    var path, k2TemplateId, data, parentPath, parentFolderId, parent, downloadFileUrl, xhr;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context5.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context5.sent;
                                    _context5.next = 6;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 6:
                                    data = _context5.sent;
                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context5.next = 14;
                                        break;
                                    }

                                    _context5.next = 12;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 12:
                                    parent = _context5.sent;
                                    parentFolderId = parent.id;

                                case 14:
                                    downloadFileUrl = this.api.contentUrl;
                                    downloadFileUrl += this.api.URLs.downloadFile; //let file = await this.api.downloadFile(path);

                                    xhr = new XMLHttpRequest();
                                    xhr.withCredentials = true;
                                    xhr.props = this.props;

                                    xhr.onreadystatechange = function () {
                                        var _postResult3;

                                        if (xhr.readyState !== 4) return;
                                        if (xhr.status !== 200) throw new Error("Failed with status ".concat(xhr.status, " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " ")); // throw new Error(`Succeed with status ${xhr.status} ${xhr.statusText} and response ${xhr.response} `)

                                        postResult((_postResult3 = {}, _defineProperty(_postResult3, this.props.id, data.id), _defineProperty(_postResult3, this.props.name, data.name), _defineProperty(_postResult3, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult3, this.props.directory, false), _defineProperty(_postResult3, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult3, this.props.path, data.path_display), _defineProperty(_postResult3, this.props.size, data.size), _defineProperty(_postResult3, this.props.modifiedDate, new Date(data.modified_at)), _defineProperty(_postResult3, "File", {
                                            filename: data.name,
                                            content: xhr.response
                                        }), _postResult3));
                                    };

                                    xhr.open("POST", downloadFileUrl); // xhr.setRequestHeader("Content-Type", "application/json");

                                    xhr.setRequestHeader("Dropbox-API-Arg", '{"path":"' + path + '"}');
                                    xhr.responseType = 'blob';
                                    _context5.next = 25;
                                    return xhr.send();

                                case 25:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function download(_x7, _x8) {
                    return _download.apply(this, arguments);
                }

                return download;
            }()
        }, {
            key: "copy",
            value: function () {
                var _copy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params, properties) {
                    var _postResult4;

                    var source, dest, res, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    source = this.getParam(properties, this.props.sourcePath);
                                    dest = this.getParam(properties, this.props.destinationPath);
                                    _context6.next = 4;
                                    return this.api.copyFolderOrFile(source, dest);

                                case 4:
                                    res = _context6.sent;
                                    data = res.metadata; //Get parent folder id from path

                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context6.next = 13;
                                        break;
                                    }

                                    _context6.next = 11;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 11:
                                    parent = _context6.sent;
                                    parentFolderId = parent.id;

                                case 13:
                                    postResult((_postResult4 = {}, _defineProperty(_postResult4, this.props.id, data.id), _defineProperty(_postResult4, this.props.name, data.name), _defineProperty(_postResult4, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult4, this.props.directory, isFolder(data)), _defineProperty(_postResult4, this.props.tags, data.property_groups ? JSON.stringify(data.property_groups) : ''), _defineProperty(_postResult4, this.props.path, data.path_display), _defineProperty(_postResult4, this.props.size, data.size), _defineProperty(_postResult4, this.props.modifiedDate, new Date(data.client_modified)), _postResult4));

                                case 14:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function copy(_x9, _x10) {
                    return _copy.apply(this, arguments);
                }

                return copy;
            }()
        }, {
            key: "getShareUrl",
            value: function () {
                var _getShareUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params, properties) {
                    var path, data;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context7.next = 3;
                                    return this.api.getFolderOrFileShareURL(path);

                                case 3:
                                    data = _context7.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.url));

                                case 5:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function getShareUrl(_x11, _x12) {
                    return _getShareUrl.apply(this, arguments);
                }

                return getShareUrl;
            }()
        }, {
            key: "getShareUrlById",
            value: function () {
                var _getShareUrlById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params, properties) {
                    var id, data;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context8.next = 3;
                                    return this.api.getFolderOrFileShareURL(id);

                                case 3:
                                    data = _context8.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.url));

                                case 5:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function getShareUrlById(_x13, _x14) {
                    return _getShareUrlById.apply(this, arguments);
                }

                return getShareUrlById;
            }()
        }, {
            key: "move",
            value: function () {
                var _move = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params, properties) {
                    var _postResult7;

                    var source, dest, res, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    source = this.getParam(properties, this.props.sourcePath);
                                    dest = this.getParam(properties, this.props.destinationPath); // let destCall = [dest, source].join(); // conjoined

                                    _context9.next = 4;
                                    return this.api.moveFolderOrFile(source, dest);

                                case 4:
                                    res = _context9.sent;
                                    data = res.metadata; //Get parent folder id from path

                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context9.next = 13;
                                        break;
                                    }

                                    _context9.next = 11;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 11:
                                    parent = _context9.sent;
                                    parentFolderId = parent.id;

                                case 13:
                                    postResult((_postResult7 = {}, _defineProperty(_postResult7, this.props.id, data.id), _defineProperty(_postResult7, this.props.name, data.name), _defineProperty(_postResult7, this.props.path, data.path_display), _defineProperty(_postResult7, this.props.size, data.size), _defineProperty(_postResult7, this.props.modifiedDate, new Date(data.client_modified)), _defineProperty(_postResult7, this.props.directory, isFolder(data)), _defineProperty(_postResult7, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult7, this.props.tags, data.property_groups ? JSON.stringify(data.property_groups) : ''), _postResult7));

                                case 14:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function move(_x15, _x16) {
                    return _move.apply(this, arguments);
                }

                return move;
            }()
        }, {
            key: "delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(params, properties) {
                    var _postResult8;

                    var path, data;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context10.next = 3;
                                    return this.api.deleteFolderOrFile(path);

                                case 3:
                                    data = _context10.sent;
                                    postResult((_postResult8 = {}, _defineProperty(_postResult8, this.props.id, data.id), _defineProperty(_postResult8, this.props.name, data.name), _postResult8));

                                case 5:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this);
                }));

                function _delete(_x17, _x18) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }() //TODO need an Upload function

        }, {
            key: "upload",
            value: function () {
                var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params, properties) {
                    var path, file, resultingPath, parentFolderId, parent, xhr;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    file = this.getParam(properties, this.props.file);
                                    resultingPath = '';

                                    if (path.endsWith('/')) {
                                        resultingPath = path + file.filename;
                                    } else {
                                        resultingPath = path + '/' + file.filename;
                                    }

                                    parentFolderId = '';

                                    if (!(path !== '/')) {
                                        _context11.next = 10;
                                        break;
                                    }

                                    _context11.next = 8;
                                    return this.api.getFolderOrFileInfo(path);

                                case 8:
                                    parent = _context11.sent;
                                    parentFolderId = parent.id;

                                case 10:
                                    // let data = await this.api.uploadFile(resultingPath, file);
                                    xhr = new XMLHttpRequest();
                                    xhr.withCredentials = true;
                                    xhr.props = this.props;

                                    xhr.onreadystatechange = function () {
                                        var _postResult9;

                                        if (xhr.readyState !== 4) return;
                                        if (xhr.status !== 200) throw new Error("Failed with status " + JSON.stringify(xhr.response) + " And we tried sending to " + resultingPath);
                                        var data = JSON.parse(xhr.response);
                                        postResult((_postResult9 = {
                                            "result": "File uploaded successfully"
                                        }, _defineProperty(_postResult9, this.props.id, data.id), _defineProperty(_postResult9, this.props.name, data.name), _defineProperty(_postResult9, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult9, this.props.directory, false), _defineProperty(_postResult9, this.props.tags, ''), _defineProperty(_postResult9, this.props.path, data.path_display), _defineProperty(_postResult9, this.props.size, data.size), _defineProperty(_postResult9, this.props.modifiedDate, new Date(data.client_modified)), _postResult9));
                                    };

                                    xhr.open("POST", 'https://content.dropboxapi.com/2/files/upload');
                                    xhr.setRequestHeader("Content-Type", "application/octet-stream");
                                    xhr.setRequestHeader("Dropbox-API-Arg", '{"path":"' + resultingPath + '"}');
                                    xhr.send(file);

                                case 18:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function upload(_x19, _x20) {
                    return _upload.apply(this, arguments);
                }

                return upload;
            }()
        }, {
            key: "updateTags",
            value: function () {
                var _updateTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(params, properties) {
                    var _postResult10;

                    var path, tags, propertiesObj, newFieldNames, keyValueTags, _i, _Object$entries, _Object$entries$_i, key, value, k2TemplateId, fileInfo, data, parentPath, parentFolderId, parent;

                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) {
                            switch (_context12.prev = _context12.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tags = this.getParam(properties, this.props.tags);
                                    propertiesObj = tags;
                                    newFieldNames = [];
                                    keyValueTags = [];

                                    for (_i = 0, _Object$entries = Object.entries(propertiesObj); _i < _Object$entries.length; _i++) {
                                        _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                                        newFieldNames.push({
                                            // add new field names before their values
                                            name: key,
                                            description: "Automatically added by K2",
                                            type: "string"
                                        });
                                        keyValueTags.push({
                                            name: key,
                                            value: value
                                        });
                                    } //Get template id


                                    _context12.next = 8;
                                    return this.getK2TemplateId();

                                case 8:
                                    k2TemplateId = _context12.sent;
                                    _context12.next = 11;
                                    return this.api.updateTemplate(k2TemplateId, newFieldNames);

                                case 11:
                                    _context12.next = 13;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 13:
                                    fileInfo = _context12.sent;

                                    if (!(fileInfo.property_groups.length > 0)) {
                                        _context12.next = 19;
                                        break;
                                    }

                                    _context12.next = 17;
                                    return this.api.updateProperties(path, k2TemplateId, keyValueTags);

                                case 17:
                                    _context12.next = 21;
                                    break;

                                case 19:
                                    _context12.next = 21;
                                    return this.api.addProperties(path, k2TemplateId, keyValueTags);

                                case 21:
                                    _context12.next = 23;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 23:
                                    data = _context12.sent;
                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context12.next = 31;
                                        break;
                                    }

                                    _context12.next = 29;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 29:
                                    parent = _context12.sent;
                                    parentFolderId = parent.id;

                                case 31:
                                    postResult((_postResult10 = {}, _defineProperty(_postResult10, this.props.id, data.id), _defineProperty(_postResult10, this.props.name, data.name), _defineProperty(_postResult10, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult10, this.props.directory, false), _defineProperty(_postResult10, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult10, this.props.path, data.path_display), _defineProperty(_postResult10, this.props.size, data.size), _defineProperty(_postResult10, this.props.modifiedDate, new Date(data.client_modified)), _postResult10));

                                case 32:
                                case "end":
                                    return _context12.stop();
                            }
                        }
                    }, _callee12, this);
                }));

                function updateTags(_x21, _x22) {
                    return _updateTags.apply(this, arguments);
                }

                return updateTags;
            }()
        }, {
            key: "updateSingleTag",
            value: function () {
                var _updateSingleTag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(params, properties) {
                    var _postResult11;

                    var path, tagName, tagValue, k2TemplateId, newFieldsArray, updateFieldsArray, fileInfo, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) {
                            switch (_context13.prev = _context13.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tagName = this.getParam(properties, this.props.tagName);
                                    tagValue = this.getParam(properties, this.props.tagValue);
                                    _context13.next = 5;
                                    return this.getK2TemplateId();

                                case 5:
                                    k2TemplateId = _context13.sent;
                                    newFieldsArray = [{
                                        name: tagName,
                                        description: 'Automatically added by K2',
                                        type: 'string'
                                    }];
                                    _context13.next = 9;
                                    return this.api.updateTemplate(k2TemplateId, newFieldsArray);

                                case 9:
                                    updateFieldsArray = [{
                                        name: tagName,
                                        value: tagValue
                                    }];
                                    _context13.next = 12;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 12:
                                    fileInfo = _context13.sent;

                                    if (!(fileInfo.property_groups.length > 0)) {
                                        _context13.next = 18;
                                        break;
                                    }

                                    _context13.next = 16;
                                    return this.api.updateProperties(path, k2TemplateId, updateFieldsArray);

                                case 16:
                                    _context13.next = 20;
                                    break;

                                case 18:
                                    _context13.next = 20;
                                    return this.api.addProperties(path, k2TemplateId, updateFieldsArray);

                                case 20:
                                    _context13.next = 22;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 22:
                                    data = _context13.sent;
                                    parentPath = parentFolder(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context13.next = 30;
                                        break;
                                    }

                                    _context13.next = 28;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 28:
                                    parent = _context13.sent;
                                    parentFolderId = parent.id;

                                case 30:
                                    postResult((_postResult11 = {}, _defineProperty(_postResult11, this.props.id, data.id), _defineProperty(_postResult11, this.props.name, data.name), _defineProperty(_postResult11, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult11, this.props.directory, false), _defineProperty(_postResult11, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult11, this.props.path, data.path_display), _defineProperty(_postResult11, this.props.size, data.size), _defineProperty(_postResult11, this.props.modifiedDate, new Date(data.client_modified)), _postResult11));

                                case 31:
                                case "end":
                                    return _context13.stop();
                            }
                        }
                    }, _callee13, this);
                }));

                function updateSingleTag(_x23, _x24) {
                    return _updateSingleTag.apply(this, arguments);
                }

                return updateSingleTag;
            }()
        }]);

        return File;
    }(K2BaseSmartObject_1);

    var File_1 = File;

    var folderProps = fileStorageSharedPropertiesAndMethods.folderProps,
        folderPropertiesObj = fileStorageSharedPropertiesAndMethods.folderPropertiesObj,
        folderMethods = fileStorageSharedPropertiesAndMethods.folderMethods,
        folderMethodsObj = fileStorageSharedPropertiesAndMethods.folderMethodsObj; //Get parent folder id for output props

    function parentFolder$1(f) {
        var path = f.path_display;
        var folders = path.split("/"); // array of folders holding f
        //If f is one folder from root: ['', 'parent', 'f']

        folders.pop(); // remove f from array
        // get the last value in array
        // let parentFolder = folders[folders.length - 1];]

        if (folders.length == 1) {
            // If it's a single item, then it's root, and root needs the forward slash since join won't add it
            folders[0] = '/';
        }

        return "".concat(folders.join('/')); // in path format
    }

    function isFolder$1(f) {
        var type = f[".tag"]; // console.log("type: ", type);

        return type === "folder" ? true : false;
    }

    var Folder = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(Folder, _K2BaseSmartObject);

        var _super = _createSuper(Folder);

        function Folder(params) {
            var _this;

            _classCallCheck(this, Folder);

            _this = _super.call(this, params);
            _this.name = "folder";
            _this.displayName = "Folder";
            _this.description = "Folder";
            _this.props = _objectSpread2({}, folderProps);
            _this.methods = _objectSpread2({}, folderMethods);
            return _this;
        }

        _createClass(Folder, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, folderPropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, folderMethodsObj);
            } // Helper function to retrieve K2 template ID

        }, {
            key: "getK2TemplateId",
            value: function () {
                var _getK2TemplateId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res, template_ids, templates, i, template_res, k2templates, k2TemplateId, k2template, extraTemplates, c, extra_template_id, newk2TemplateGroup;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.api.listTemplates();

                                case 2:
                                    res = _context.sent;
                                    template_ids = res.template_ids;
                                    templates = [];
                                    i = 0;

                                case 6:
                                    if (!(i < template_ids.length)) {
                                        _context.next = 15;
                                        break;
                                    }

                                    _context.next = 9;
                                    return this.api.getTemplate(template_ids[i]);

                                case 9:
                                    template_res = _context.sent;
                                    // template object
                                    template_res["template_id"] = template_ids[i]; // add id property

                                    templates.push(template_res);

                                case 12:
                                    i++;
                                    _context.next = 6;
                                    break;

                                case 15:
                                    k2templates = templates.filter(function (template) {
                                        return template.name === "K2 Tags";
                                    });
                                    k2TemplateId = '';

                                    if (!(k2templates.length > 0)) {
                                        _context.next = 35;
                                        break;
                                    }

                                    k2template = k2templates.slice(0, 1);
                                    k2TemplateId = k2template[0].template_id;
                                    extraTemplates = k2templates.slice(1, k2templates.length); // array of remaining objects

                                    if (!(extraTemplates.length > 0)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    c = 0;

                                case 24:
                                    if (!(c < extraTemplates.length)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    extra_template_id = extraTemplates[c];
                                    console.log(extra_template_id);
                                    _context.next = 29;
                                    return this.api.deleteTemplate(extra_template_id.template_id);

                                case 29:
                                    return _context.abrupt("return", _context.sent);

                                case 30:
                                    c++;
                                    _context.next = 24;
                                    break;

                                case 33:
                                    _context.next = 39;
                                    break;

                                case 35:
                                    _context.next = 37;
                                    return this.api.createPropertyGroupTemplate("K2 Tags", "Tags for the K2 Platform Smart Objects", []);

                                case 37:
                                    newk2TemplateGroup = _context.sent;
                                    k2TemplateId = newk2TemplateGroup.template_id;

                                case 39:
                                    return _context.abrupt("return", k2TemplateId);

                                case 40:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getK2TemplateId() {
                    return _getK2TemplateId.apply(this, arguments);
                }

                return getK2TemplateId;
            }() // Helper function to retrieve K2 Tag values from Folder or File

        }, {
            key: "getK2Tags",
            value: function () {
                var _getK2Tags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, k2TemplateId) {
                    var res, propertyGroup;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 2:
                                    res = _context2.sent;
                                    propertyGroup = res.property_groups[0];
                                    return _context2.abrupt("return", propertyGroup ? propertyGroup.fields : '');

                                case 5:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getK2Tags(_x, _x2) {
                    return _getK2Tags.apply(this, arguments);
                }

                return getK2Tags;
            }()
        }, {
            key: "listContents",
            value: function () {
                var _listContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, properties) {
                    var _this2 = this;

                    var path, k2TemplateId, res, data;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context4.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context4.sent;
                                    _context4.next = 6;
                                    return this.api.listContentsOfFolder(path, false, 2000, false, false, true, true, k2TemplateId);

                                case 6:
                                    res = _context4.sent;
                                    data = res.entries;
                                    _context4.t0 = postResult;
                                    _context4.next = 11;
                                    return Promise.all(data.map( /*#__PURE__*/function () {
                                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(x) {
                                            var _ref2;

                                            var parentPath, parentFolderId, parent;
                                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                while (1) {
                                                    switch (_context3.prev = _context3.next) {
                                                        case 0:
                                                            // Get parent folder id from path
                                                            parentPath = parentFolder$1(x);
                                                            parentFolderId = '';

                                                            if (!(parentPath !== '/')) {
                                                                _context3.next = 7;
                                                                break;
                                                            }

                                                            _context3.next = 5;
                                                            return _this2.api.getFolderOrFileInfo(parentPath);

                                                        case 5:
                                                            parent = _context3.sent;
                                                            parentFolderId = parent.id;

                                                        case 7:
                                                            if (!(x['.tag'] == 'folder')) {
                                                                _context3.next = 11;
                                                                break;
                                                            }

                                                            _context3.next = 10;
                                                            return _this2.api.getFolderSize(x.path_display);

                                                        case 10:
                                                            x.size = _context3.sent;

                                                        case 11:
                                                            return _context3.abrupt("return", (_ref2 = {}, _defineProperty(_ref2, _this2.props.id, x.id), _defineProperty(_ref2, _this2.props.name, x.name), _defineProperty(_ref2, _this2.props.parentFolderId, parentFolderId), _defineProperty(_ref2, _this2.props.tags, x.property_groups.length > 0 ? JSON.stringify(x.property_groups[0].fields) : ''), _defineProperty(_ref2, _this2.props.path, x.path_display), _defineProperty(_ref2, _this2.props.modifiedDate, x.client_modified), _defineProperty(_ref2, _this2.props.size, x.size), _defineProperty(_ref2, _this2.props.directory, isFolder$1(x)), _ref2));

                                                        case 12:
                                                        case "end":
                                                            return _context3.stop();
                                                    }
                                                }
                                            }, _callee3);
                                        }));

                                        return function (_x5) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()));

                                case 11:
                                    _context4.t1 = _context4.sent;
                                    (0, _context4.t0)(_context4.t1);

                                case 13:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function listContents(_x3, _x4) {
                    return _listContents.apply(this, arguments);
                }

                return listContents;
            }()
        }, {
            key: "getInfoById",
            value: function () {
                var _getInfoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params, properties) {
                    var _postResult;

                    var id, k2TemplateId, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context5.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context5.sent;
                                    _context5.next = 6;
                                    return this.api.getFolderOrFileInfo(id, k2TemplateId);

                                case 6:
                                    data = _context5.sent;
                                    _context5.next = 9;
                                    return this.api.getFolderSize(id);

                                case 9:
                                    data.size = _context5.sent;
                                    // Get parent folder id from path
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context5.next = 17;
                                        break;
                                    }

                                    _context5.next = 15;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 15:
                                    parent = _context5.sent;
                                    parentFolderId = parent.id;

                                case 17:
                                    postResult((_postResult = {}, _defineProperty(_postResult, this.props.id, data.id), _defineProperty(_postResult, this.props.name, data.name), _defineProperty(_postResult, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult, this.props.directory, isFolder$1(data)), _defineProperty(_postResult, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult, this.props.path, data.path_display), _defineProperty(_postResult, this.props.size, data.size), _defineProperty(_postResult, this.props.modifiedDate, data.client_modified), _postResult));

                                case 18:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function getInfoById(_x6, _x7) {
                    return _getInfoById.apply(this, arguments);
                }

                return getInfoById;
            }()
        }, {
            key: "getInfo",
            value: function () {
                var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params, properties) {
                    var _postResult2;

                    var path, k2TemplateId, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context6.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TemplateId = _context6.sent;
                                    _context6.next = 6;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 6:
                                    data = _context6.sent;
                                    _context6.next = 9;
                                    return this.api.getFolderSize(path);

                                case 9:
                                    data.size = _context6.sent;
                                    //Get parent folder id from path
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context6.next = 17;
                                        break;
                                    }

                                    _context6.next = 15;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 15:
                                    parent = _context6.sent;
                                    parentFolderId = parent.id;

                                case 17:
                                    postResult((_postResult2 = {}, _defineProperty(_postResult2, this.props.id, data.id), _defineProperty(_postResult2, this.props.name, data.name), _defineProperty(_postResult2, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult2, this.props.directory, isFolder$1(data)), _defineProperty(_postResult2, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult2, this.props.path, data.path_display), _defineProperty(_postResult2, this.props.size, data.size), _defineProperty(_postResult2, this.props.modifiedDate, new Date(data.client_modified)), _postResult2));

                                case 18:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function getInfo(_x8, _x9) {
                    return _getInfo.apply(this, arguments);
                }

                return getInfo;
            }()
        }, {
            key: "create",
            value: function () {
                var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params, properties) {
                    var _postResult3;

                    var path, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context7.next = 3;
                                    return this.api.createFolder(path);

                                case 3:
                                    data = _context7.sent;
                                    _context7.next = 6;
                                    return this.api.getFolderSize(path);

                                case 6:
                                    data.metadata.size = _context7.sent;
                                    // Get parent folder id from path
                                    parentPath = parentFolder$1(data.metadata);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context7.next = 14;
                                        break;
                                    }

                                    _context7.next = 12;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 12:
                                    parent = _context7.sent;
                                    parentFolderId = parent.id;

                                case 14:
                                    postResult((_postResult3 = {}, _defineProperty(_postResult3, this.props.id, data.metadata.id), _defineProperty(_postResult3, this.props.name, data.metadata.name), _defineProperty(_postResult3, this.props.path, data.metadata.path_display), _defineProperty(_postResult3, this.props.size, data.metadata.size), _defineProperty(_postResult3, this.props.modifiedDate, data.metadata.client_modified), _defineProperty(_postResult3, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult3, this.props.directory, isFolder$1(data.metadata)), _defineProperty(_postResult3, this.props.tags, data.metadata.property_groups ? JSON.stringify(data.metadata.property_groups) : ''), _postResult3));

                                case 15:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function create(_x10, _x11) {
                    return _create.apply(this, arguments);
                }

                return create;
            }()
        }, {
            key: "delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params, properties) {
                    var path, data;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context8.next = 3;
                                    return this.api.deleteFolderOrFile(path);

                                case 3:
                                    data = _context8.sent;
                                    postResult({});

                                case 5:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function _delete(_x12, _x13) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }()
        }, {
            key: "getShareUrl",
            value: function () {
                var _getShareUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params, properties) {
                    var path, data;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context9.next = 3;
                                    return this.api.getFolderOrFileShareURL(path);

                                case 3:
                                    data = _context9.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.url));

                                case 5:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function getShareUrl(_x14, _x15) {
                    return _getShareUrl.apply(this, arguments);
                }

                return getShareUrl;
            }()
        }, {
            key: "getShareUrlById",
            value: function () {
                var _getShareUrlById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(params, properties) {
                    var id, data;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context10.next = 3;
                                    return this.api.getFolderOrFileShareURL(id);

                                case 3:
                                    data = _context10.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.url));

                                case 5:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this);
                }));

                function getShareUrlById(_x16, _x17) {
                    return _getShareUrlById.apply(this, arguments);
                }

                return getShareUrlById;
            }()
        }, {
            key: "copy",
            value: function () {
                var _copy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params, properties) {
                    var _postResult6;

                    var source, dest, res, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    source = this.getParam(properties, this.props.sourcePath);
                                    dest = this.getParam(properties, this.props.destinationPath);
                                    _context11.next = 4;
                                    return this.api.copyFolderOrFile(source, dest);

                                case 4:
                                    res = _context11.sent;
                                    // console.log(res)
                                    data = res.metadata;
                                    _context11.next = 8;
                                    return this.api.getFolderSize(data.id);

                                case 8:
                                    data.size = _context11.sent;
                                    // Get parent folder id from path
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context11.next = 16;
                                        break;
                                    }

                                    _context11.next = 14;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 14:
                                    parent = _context11.sent;
                                    parentFolderId = parent.id;

                                case 16:
                                    postResult((_postResult6 = {}, _defineProperty(_postResult6, this.props.id, data.id), _defineProperty(_postResult6, this.props.name, data.name), _defineProperty(_postResult6, this.props.path, data.path_display), _defineProperty(_postResult6, this.props.size, data.size), _defineProperty(_postResult6, this.props.modifiedDate, data.client_modified), _defineProperty(_postResult6, this.props.directory, isFolder$1(data)), _defineProperty(_postResult6, this.props.tags, data.property_groups ? JSON.stringify(data.property_groups) : ''), _defineProperty(_postResult6, this.props.parentFolderId, parentFolderId), _postResult6));

                                case 17:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function copy(_x18, _x19) {
                    return _copy.apply(this, arguments);
                }

                return copy;
            }()
        }, {
            key: "move",
            value: function () {
                var _move = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(params, properties) {
                    var _postResult7;

                    var source, dest, res, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) {
                            switch (_context12.prev = _context12.next) {
                                case 0:
                                    source = this.getParam(properties, this.props.sourcePath);
                                    dest = this.getParam(properties, this.props.destinationPath);
                                    _context12.next = 4;
                                    return this.api.moveFolderOrFile(source, dest);

                                case 4:
                                    res = _context12.sent;
                                    data = res.metadata;
                                    _context12.next = 8;
                                    return this.api.getFolderSize(data.id);

                                case 8:
                                    data.size = _context12.sent;
                                    // Get parent folder id from path
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context12.next = 16;
                                        break;
                                    }

                                    _context12.next = 14;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 14:
                                    parent = _context12.sent;
                                    parentFolderId = parent.id;

                                case 16:
                                    postResult((_postResult7 = {}, _defineProperty(_postResult7, this.props.id, data.id), _defineProperty(_postResult7, this.props.name, data.name), _defineProperty(_postResult7, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult7, this.props.directory, isFolder$1(data)), _defineProperty(_postResult7, this.props.tags, data.property_groups ? JSON.stringify(data.property_groups) : ''), _defineProperty(_postResult7, this.props.path, data.path_display), _defineProperty(_postResult7, this.props.size, data.size), _defineProperty(_postResult7, this.props.modifiedDate, data.client_modified), _postResult7));

                                case 17:
                                case "end":
                                    return _context12.stop();
                            }
                        }
                    }, _callee12, this);
                }));

                function move(_x20, _x21) {
                    return _move.apply(this, arguments);
                }

                return move;
            }()
        }, {
            key: "updateTags",
            value: function () {
                var _updateTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(params, properties) {
                    var _postResult8;

                    var path, tags, propertiesObj, newFieldNames, keyValueTags, _i, _Object$entries, _Object$entries$_i, key, value, k2TemplateId, folderInfo, data, parentPath, parentFolderId, parent;

                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) {
                            switch (_context13.prev = _context13.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tags = this.getParam(properties, this.props.tags); // console.log('tags', tags);

                                    propertiesObj = tags; // console.log(propertiesObj);

                                    newFieldNames = [];
                                    keyValueTags = [];

                                    for (_i = 0, _Object$entries = Object.entries(propertiesObj); _i < _Object$entries.length; _i++) {
                                        _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                                        newFieldNames.push({
                                            // add new field names before their values
                                            name: key,
                                            description: "Automatically added by K2",
                                            type: "string"
                                        });
                                        keyValueTags.push({
                                            name: key,
                                            value: value
                                        });
                                    } //Get template id


                                    _context13.next = 8;
                                    return this.getK2TemplateId();

                                case 8:
                                    k2TemplateId = _context13.sent;
                                    _context13.next = 11;
                                    return this.api.updateTemplate(k2TemplateId, newFieldNames);

                                case 11:
                                    _context13.next = 13;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 13:
                                    folderInfo = _context13.sent;

                                    if (!(folderInfo.property_groups.length > 0)) {
                                        _context13.next = 19;
                                        break;
                                    }

                                    _context13.next = 17;
                                    return this.api.updateProperties(path, k2TemplateId, keyValueTags);

                                case 17:
                                    _context13.next = 21;
                                    break;

                                case 19:
                                    _context13.next = 21;
                                    return this.api.addProperties(path, k2TemplateId, keyValueTags);

                                case 21:
                                    _context13.next = 23;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 23:
                                    data = _context13.sent;
                                    _context13.next = 26;
                                    return this.api.getFolderSize(path);

                                case 26:
                                    data.size = _context13.sent;
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context13.next = 34;
                                        break;
                                    }

                                    _context13.next = 32;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 32:
                                    parent = _context13.sent;
                                    parentFolderId = parent.id;

                                case 34:
                                    postResult((_postResult8 = {}, _defineProperty(_postResult8, this.props.id, data.id), _defineProperty(_postResult8, this.props.name, data.name), _defineProperty(_postResult8, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult8, this.props.directory, true), _defineProperty(_postResult8, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult8, this.props.path, data.path_display), _defineProperty(_postResult8, this.props.size, data.size), _defineProperty(_postResult8, this.props.modifiedDate, data.client_modified), _postResult8));

                                case 35:
                                case "end":
                                    return _context13.stop();
                            }
                        }
                    }, _callee13, this);
                }));

                function updateTags(_x22, _x23) {
                    return _updateTags.apply(this, arguments);
                }

                return updateTags;
            }()
        }, {
            key: "updateSingleTag",
            value: function () {
                var _updateSingleTag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(params, properties) {
                    var _postResult9;

                    var path, tagName, tagValue, k2TemplateId, newFieldsArray, updateFieldsArray, folderInfo, data, parentPath, parentFolderId, parent;
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                        while (1) {
                            switch (_context14.prev = _context14.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tagName = this.getParam(properties, this.props.tagName);
                                    tagValue = this.getParam(properties, this.props.tagValue);
                                    _context14.next = 5;
                                    return this.getK2TemplateId();

                                case 5:
                                    k2TemplateId = _context14.sent;
                                    newFieldsArray = [{
                                        name: tagName,
                                        description: 'Automatically added by K2',
                                        type: 'string'
                                    }];
                                    _context14.next = 9;
                                    return this.api.updateTemplate(k2TemplateId, newFieldsArray);

                                case 9:
                                    updateFieldsArray = [{
                                        name: tagName,
                                        value: tagValue
                                    }];
                                    _context14.next = 12;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 12:
                                    folderInfo = _context14.sent;

                                    if (!(folderInfo.property_groups.length > 0)) {
                                        _context14.next = 18;
                                        break;
                                    }

                                    _context14.next = 16;
                                    return this.api.updateProperties(path, k2TemplateId, updateFieldsArray);

                                case 16:
                                    _context14.next = 20;
                                    break;

                                case 18:
                                    _context14.next = 20;
                                    return this.api.addProperties(path, k2TemplateId, updateFieldsArray);

                                case 20:
                                    _context14.next = 22;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 22:
                                    data = _context14.sent;
                                    _context14.next = 25;
                                    return this.api.getFolderSize(path);

                                case 25:
                                    data.size = _context14.sent;
                                    parentPath = parentFolder$1(data);
                                    parentFolderId = '';

                                    if (!(parentPath !== '/')) {
                                        _context14.next = 33;
                                        break;
                                    }

                                    _context14.next = 31;
                                    return this.api.getFolderOrFileInfo(parentPath);

                                case 31:
                                    parent = _context14.sent;
                                    parentFolderId = parent.id;

                                case 33:
                                    postResult((_postResult9 = {}, _defineProperty(_postResult9, this.props.id, data.id), _defineProperty(_postResult9, this.props.name, data.name), _defineProperty(_postResult9, this.props.parentFolderId, parentFolderId), _defineProperty(_postResult9, this.props.directory, true), _defineProperty(_postResult9, this.props.tags, data.property_groups.length > 0 ? JSON.stringify(data.property_groups[0].fields) : ''), _defineProperty(_postResult9, this.props.path, data.path_display), _defineProperty(_postResult9, this.props.size, data.size), _defineProperty(_postResult9, this.props.modifiedDate, data.client_modified), _postResult9));

                                case 34:
                                case "end":
                                    return _context14.stop();
                            }
                        }
                    }, _callee14, this);
                }));

                function updateSingleTag(_x24, _x25) {
                    return _updateSingleTag.apply(this, arguments);
                }

                return updateSingleTag;
            }()
        }]);

        return Folder;
    }(K2BaseSmartObject_1);

    var Folder_1 = Folder;

    var serviceProps = fileStorageSharedPropertiesAndMethods.serviceProps,
        servicePropertiesObj = fileStorageSharedPropertiesAndMethods.servicePropertiesObj,
        serviceMethods = fileStorageSharedPropertiesAndMethods.serviceMethods,
        serviceMethodsObj = fileStorageSharedPropertiesAndMethods.serviceMethodsObj;

    function isFolder$2(f) {
        var type = f[".tag"]; // console.log("type: ", type);

        return type === "folder" ? true : false;
    }

    function parentFolder$2(f) {
        var path = f.path_display;
        var folders = path.split("/"); // array of folders holding f
        //If f is one folder from root: ['', 'parent', 'f']

        folders.pop(); // remove f from array
        // get the last value in array
        // let parentFolder = folders[folders.length - 1];]

        if (folders.length == 1) {
            // If it's a single item, then it's root, and root needs the forward slash since join won't add it
            folders[0] = '/';
        }

        return "".concat(folders.join('/')); // in path format
    }

    var Service = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(Service, _K2BaseSmartObject);

        var _super = _createSuper(Service);

        function Service(params) {
            var _this;

            _classCallCheck(this, Service);

            _this = _super.call(this, params);
            _this.name = "service";
            _this.displayName = "Service";
            _this.description = "Service";
            _this.props = _objectSpread2({}, serviceProps);
            _this.methods = _objectSpread2({}, serviceMethods);
            return _this;
        }

        _createClass(Service, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, servicePropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, serviceMethodsObj);
            } // Helper function to retrieve K2 template ID

        }, {
            key: "getK2TemplateId",
            value: function () {
                var _getK2TemplateId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res, template_ids, templates, i, template_res, k2templates, k2TemplateId, k2template, extraTemplates, c, extra_template_id, newk2TemplateGroup;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.api.listTemplates();

                                case 2:
                                    res = _context.sent;
                                    template_ids = res.template_ids;
                                    templates = [];
                                    i = 0;

                                case 6:
                                    if (!(i < template_ids.length)) {
                                        _context.next = 15;
                                        break;
                                    }

                                    _context.next = 9;
                                    return this.api.getTemplate(template_ids[i]);

                                case 9:
                                    template_res = _context.sent;
                                    // template object
                                    template_res["template_id"] = template_ids[i]; // add id property

                                    templates.push(template_res);

                                case 12:
                                    i++;
                                    _context.next = 6;
                                    break;

                                case 15:
                                    k2templates = templates.filter(function (template) {
                                        return template.name === "K2 Tags";
                                    });
                                    k2TemplateId = '';

                                    if (!(k2templates.length > 0)) {
                                        _context.next = 35;
                                        break;
                                    }

                                    k2template = k2templates.slice(0, 1);
                                    k2TemplateId = k2template[0].template_id;
                                    extraTemplates = k2templates.slice(1, k2templates.length); // array of remaining objects

                                    if (!(extraTemplates.length > 0)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    c = 0;

                                case 24:
                                    if (!(c < extraTemplates.length)) {
                                        _context.next = 33;
                                        break;
                                    }

                                    extra_template_id = extraTemplates[c];
                                    console.log(extra_template_id);
                                    _context.next = 29;
                                    return this.api.deleteTemplate(extra_template_id.template_id);

                                case 29:
                                    return _context.abrupt("return", _context.sent);

                                case 30:
                                    c++;
                                    _context.next = 24;
                                    break;

                                case 33:
                                    _context.next = 39;
                                    break;

                                case 35:
                                    _context.next = 37;
                                    return this.api.createPropertyGroupTemplate("K2 Tags", "Tags for the K2 Platform Smart Objects", []);

                                case 37:
                                    newk2TemplateGroup = _context.sent;
                                    k2TemplateId = newk2TemplateGroup.template_id;

                                case 39:
                                    return _context.abrupt("return", k2TemplateId);

                                case 40:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getK2TemplateId() {
                    return _getK2TemplateId.apply(this, arguments);
                }

                return getK2TemplateId;
            }() // Helper function to retrieve K2 Tag values from Folder or File

        }, {
            key: "getK2Tags",
            value: function () {
                var _getK2Tags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, k2TemplateId) {
                    var res, propertyGroup;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.api.getFolderOrFileInfo(path, k2TemplateId);

                                case 2:
                                    res = _context2.sent;
                                    propertyGroup = res.property_groups[0];
                                    return _context2.abrupt("return", propertyGroup ? propertyGroup.fields : '');

                                case 5:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getK2Tags(_x, _x2) {
                    return _getK2Tags.apply(this, arguments);
                }

                return getK2Tags;
            }()
        }, {
            key: "search",
            value: function () {
                var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, properties) {
                    var _this2 = this;

                    var keyWords, k2TagsTemplateId, data, result;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    keyWords = this.getParam(properties, this.props.keyWords);
                                    _context4.next = 3;
                                    return this.getK2TemplateId();

                                case 3:
                                    k2TagsTemplateId = _context4.sent;
                                    _context4.next = 6;
                                    return this.api.searchFolderOrFile(keyWords);

                                case 6:
                                    data = _context4.sent;
                                    result = data.matches; //TODO: map through data and get Parent Folder ID

                                    _context4.t0 = postResult;
                                    _context4.next = 11;
                                    return Promise.all(result.map( /*#__PURE__*/function () {
                                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(x) {
                                            var _ref2;

                                            var parentPath, parentFolderId, k2Tags, parent, size;
                                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                while (1) {
                                                    switch (_context3.prev = _context3.next) {
                                                        case 0:
                                                            parentPath = parentFolder$2(x.metadata.metadata);
                                                            parentFolderId = '';
                                                            _context3.next = 4;
                                                            return _this2.getK2Tags(x.metadata.metadata.path_display, k2TagsTemplateId);

                                                        case 4:
                                                            k2Tags = _context3.sent;

                                                            if (!(parentPath !== '/')) {
                                                                _context3.next = 10;
                                                                break;
                                                            }

                                                            _context3.next = 8;
                                                            return _this2.api.getFolderOrFileInfo(parentPath);

                                                        case 8:
                                                            parent = _context3.sent;
                                                            parentFolderId = parent.id;

                                                        case 10:
                                                            if (!(x['.tag'] == 'folder')) {
                                                                _context3.next = 15;
                                                                break;
                                                            }

                                                            _context3.next = 13;
                                                            return _this2.api.getFolderSize(x.metadata.metadata.path_display);

                                                        case 13:
                                                            size = _context3.sent;
                                                            x.metadata.metadata.size = size;

                                                        case 15:
                                                            return _context3.abrupt("return", (_ref2 = {}, _defineProperty(_ref2, _this2.props.id, x.metadata.metadata.id), _defineProperty(_ref2, _this2.props.name, x.metadata.metadata.name), _defineProperty(_ref2, _this2.props.parentFolderId, parentFolderId), _defineProperty(_ref2, _this2.props.tags, k2Tags ? JSON.stringify(k2Tags) : ''), _defineProperty(_ref2, _this2.props.path, x.metadata.metadata.path_display), _defineProperty(_ref2, _this2.props.modifiedDate, x.metadata.metadata.client_modified ? new Date(x.metadata.metadata.client_modified) : undefined), _defineProperty(_ref2, _this2.props.size, x.metadata.metadata.size), _defineProperty(_ref2, _this2.props.directory, isFolder$2(x.metadata.metadata)), _ref2));

                                                        case 16:
                                                        case "end":
                                                            return _context3.stop();
                                                    }
                                                }
                                            }, _callee3);
                                        }));

                                        return function (_x5) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()));

                                case 11:
                                    _context4.t1 = _context4.sent;
                                    (0, _context4.t0)(_context4.t1);

                                case 13:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function search(_x3, _x4) {
                    return _search.apply(this, arguments);
                }

                return search;
            }()
        }, {
            key: "getQuota",
            value: function () {
                var _getQuota = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params, properties) {
                    var _postResult;

                    var data, total;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    _context5.next = 2;
                                    return this.api.getQuota();

                                case 2:
                                    data = _context5.sent;
                                    total = data.allocation.allocated;
                                    return _context5.abrupt("return", postResult((_postResult = {}, _defineProperty(_postResult, this.props.total, total), _defineProperty(_postResult, this.props.used, data.used), _defineProperty(_postResult, this.props.shared, total), _postResult)));

                                case 5:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function getQuota(_x6, _x7) {
                    return _getQuota.apply(this, arguments);
                }

                return getQuota;
            }()
        }]);

        return Service;
    }(K2BaseSmartObject_1);

    var Service_1 = Service;

    var fetch = createCommonjsModule(function (module) {
        (function (self) {
            // with Ajax.

            if (!self.__disableNativeFetch && self.fetch) {
                return;
            }

            function normalizeName(name) {
                if (typeof name !== 'string') {
                    name = String(name);
                }

                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                    throw new TypeError('Invalid character in header field name');
                }

                return name.toLowerCase();
            }

            function normalizeValue(value) {
                if (typeof value !== 'string') {
                    value = String(value);
                }

                return value;
            }

            function Headers(headers) {
                this.map = {};

                if (headers instanceof Headers) {
                    headers.forEach(function (value, name) {
                        this.append(name, value);
                    }, this);
                } else if (headers) {
                    Object.getOwnPropertyNames(headers).forEach(function (name) {
                        this.append(name, headers[name]);
                    }, this);
                }
            }

            Headers.prototype.append = function (name, value) {
                name = normalizeName(name);
                value = normalizeValue(value);
                var list = this.map[name];

                if (!list) {
                    list = [];
                    this.map[name] = list;
                }

                list.push(value);
            };

            Headers.prototype['delete'] = function (name) {
                delete this.map[normalizeName(name)];
            };

            Headers.prototype.get = function (name) {
                var values = this.map[normalizeName(name)];
                return values ? values[0] : null;
            };

            Headers.prototype.getAll = function (name) {
                return this.map[normalizeName(name)] || [];
            };

            Headers.prototype.has = function (name) {
                return this.map.hasOwnProperty(normalizeName(name));
            };

            Headers.prototype.set = function (name, value) {
                this.map[normalizeName(name)] = [normalizeValue(value)];
            };

            Headers.prototype.forEach = function (callback, thisArg) {
                Object.getOwnPropertyNames(this.map).forEach(function (name) {
                    this.map[name].forEach(function (value) {
                        callback.call(thisArg, value, name, this);
                    }, this);
                }, this);
            };

            function consumed(body) {
                if (body.bodyUsed) {
                    return Promise.reject(new TypeError('Already read'));
                }

                body.bodyUsed = true;
            }

            function fileReaderReady(reader) {
                return new Promise(function (resolve, reject) {
                    reader.onload = function () {
                        resolve(reader.result);
                    };

                    reader.onerror = function () {
                        reject(reader.error);
                    };
                });
            }

            function readBlobAsArrayBuffer(blob) {
                var reader = new FileReader();
                reader.readAsArrayBuffer(blob);
                return fileReaderReady(reader);
            }

            function readBlobAsText(blob, options) {
                var reader = new FileReader();
                var contentType = options.headers.map['content-type'] ? options.headers.map['content-type'].toString() : '';
                var regex = /charset\=[0-9a-zA-Z\-\_]*;?/;

                var _charset = blob.type.match(regex) || contentType.match(regex);

                var args = [blob];

                if (_charset) {
                    args.push(_charset[0].replace(/^charset\=/, '').replace(/;$/, ''));
                }

                reader.readAsText.apply(reader, args);
                return fileReaderReady(reader);
            }

            var support = {
                blob: 'FileReader' in self && 'Blob' in self && function () {
                    try {
                        new Blob();
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                formData: 'FormData' in self,
                arrayBuffer: 'ArrayBuffer' in self
            };

            function Body() {
                this.bodyUsed = false;

                this._initBody = function (body, options) {
                    this._bodyInit = body;

                    if (typeof body === 'string') {
                        this._bodyText = body;
                    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                        this._bodyBlob = body;
                        this._options = options;
                    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                        this._bodyFormData = body;
                    } else if (!body) {
                        this._bodyText = '';
                    } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) ;
                };

                if (support.blob) {
                    this.blob = function () {
                        var rejected = consumed(this);

                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob);
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as blob');
                        } else {
                            return Promise.resolve(new Blob([this._bodyText]));
                        }
                    };

                    this.arrayBuffer = function () {
                        return this.blob().then(readBlobAsArrayBuffer);
                    };

                    this.text = function () {
                        var rejected = consumed(this);

                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return readBlobAsText(this._bodyBlob, this._options);
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as text');
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };
                } else {
                    this.text = function () {
                        var rejected = consumed(this);
                        return rejected ? rejected : Promise.resolve(this._bodyText);
                    };
                }

                if (support.formData) {
                    this.formData = function () {
                        return this.text().then(decode);
                    };
                }

                this.json = function () {
                    return this.text().then(JSON.parse);
                };

                return this;
            } // HTTP methods whose capitalization should be normalized


            var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

            function normalizeMethod(method) {
                var upcased = method.toUpperCase();
                return methods.indexOf(upcased) > -1 ? upcased : method;
            }

            function Request(input, options) {
                options = options || {};
                var body = options.body;

                if (Request.prototype.isPrototypeOf(input)) {
                    if (input.bodyUsed) {
                        throw new TypeError('Already read');
                    }

                    this.url = input.url;
                    this.responseType = input.responseType;
                    this.credentials = input.credentials;

                    if (!options.headers) {
                        this.headers = new Headers(input.headers);
                    }

                    this.method = input.method;
                    this.mode = input.mode;

                    if (!body) {
                        body = input._bodyInit;
                        input.bodyUsed = true;
                    }
                } else {
                    this.url = input;
                }

                this.responseType = options.responseType || this.responseType;
                this.credentials = options.credentials || this.credentials || 'omit';

                if (options.headers || !this.headers) {
                    this.headers = new Headers(options.headers);
                }

                this.method = normalizeMethod(options.method || this.method || 'GET');
                this.mode = options.mode || this.mode || null;
                this.referrer = null;

                if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                }

                this._initBody(body, options);
            }

            Request.prototype.clone = function () {
                return new Request(this);
            };

            function decode(body) {
                var form = new FormData();
                body.trim().split('&').forEach(function (bytes) {
                    if (bytes) {
                        var split = bytes.split('=');
                        var name = split.shift().replace(/\+/g, ' ');
                        var value = split.join('=').replace(/\+/g, ' ');
                        form.append(decodeURIComponent(name), decodeURIComponent(value));
                    }
                });
                return form;
            }

            function headers(xhr) {
                var head = new Headers(); // console.log(xhr._headers)
                // TODO figure out why this isn't supported
                // var pairs = xhr.getAllResponseHeaders().trim().split('\n')
                // pairs.forEach(function(header) {
                //     var split = header.trim().split(':')
                //     var key = split.shift().trim()
                //     var value = split.join(':').trim()
                //     head.append(key, value)
                // })
                // Alternative header parsing for now, using function we shouldn't use
                // for (var key in locationHeader) {
                //     if (locationHeader.hasOwnProperty(key)) {
                //         // Do things here
                //         head.append(key, locationHeader[key])
                //     }
                // }

                var locationHeader = xhr.getResponseHeader('location');

                if (locationHeader) {
                    head.append('location', locationHeader);
                }

                return head;
            }

            Body.call(Request.prototype);

            function Response(bodyInit, options) {
                if (!options) {
                    options = {};
                }

                this._initBody(bodyInit, options);

                this.type = 'default';
                this.status = options.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = options.statusText;
                this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
                this.url = options.url || '';
            }

            Body.call(Response.prototype);

            Response.prototype.clone = function () {
                return new Response(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Headers(this.headers),
                    url: this.url
                });
            };

            Response.error = function () {
                var response = new Response(null, {
                    status: 0,
                    statusText: ''
                });
                response.type = 'error';
                return response;
            };

            var redirectStatuses = [301, 302, 303, 307, 308];

            Response.redirect = function (url, status) {
                if (redirectStatuses.indexOf(status) === -1) {
                    throw new RangeError('Invalid status code');
                }

                return new Response(null, {
                    status: status,
                    headers: {
                        location: url
                    }
                });
            };

            self.Headers = Headers;
            self.Request = Request;
            self.Response = Response;

            self.fetch = function (input, init) {
                return new Promise(function (resolve, reject) {
                    var request;

                    if (Request.prototype.isPrototypeOf(input) && !init) {
                        request = input;
                    } else {
                        request = new Request(input, init);
                    }

                    var xhr = new XMLHttpRequest();

                    function responseURL() {
                        if ('responseURL' in xhr) {
                            return xhr.responseURL;
                        } // TODO Figure out why this isnt supported
                        // // Avoid security warnings on getResponseHeader when not allowed by CORS
                        // if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                        //     return xhr.getResponseHeader('X-Request-URL')
                        // }


                        return;
                    }

                    var __onLoadHandled = false;

                    function onload() {
                        if (xhr.readyState !== 4) {
                            return;
                        }

                        var status = xhr.status === 1223 ? 204 : xhr.status;

                        if (status < 100 || status > 599) {
                            if (__onLoadHandled) {
                                return;
                            } else {
                                __onLoadHandled = true;
                            }

                            reject(new TypeError('Network request failed'));
                            return;
                        }

                        var options = {
                            status: status,
                            statusText: xhr.statusText,
                            headers: headers(xhr),
                            url: responseURL()
                        };
                        var body = 'response' in xhr ? xhr.response : xhr.responseText;

                        if (__onLoadHandled) {
                            return;
                        } else {
                            __onLoadHandled = true;
                        }

                        resolve(new Response(body, options));
                    }

                    xhr.onreadystatechange = onload;
                    xhr.onload = onload;

                    xhr.onerror = function () {
                        if (__onLoadHandled) {
                            return;
                        } else {
                            __onLoadHandled = true;
                        }

                        reject(new TypeError('Network request failed'));
                    };

                    xhr.open(request.method, request.url, true); // `withCredentials` should be setted after calling `.open` in IE10
                    // http://stackoverflow.com/a/19667959/1219343

                    try {
                        if (request.credentials === 'include') {
                            // if ('withCredentials' in xhr) {
                            xhr.withCredentials = true; // } else {
                            //     console && console.warn && console.warn('withCredentials is not supported, you can ignore this warning');
                            // }
                            // console.log(`Inside fetch, here's responseType ${request.responseType}`)
                        }
                    } catch (e) {
                        console && console.warn && console.warn('set withCredentials error:' + e);
                    }

                    if ('responseType' in xhr && support.blob || request.responseType === 'blob') {
                        xhr.responseType = 'blob';
                    } // if ('responseType' in xhr && request.jsonResponseType) {
                    //     xhr.responseType = 'json'
                    // }


                    request.headers.forEach(function (value, name) {
                        xhr.setRequestHeader(name, value);
                    });
                    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                });
            };

            self.fetch.polyfill = true; // Support CommonJS

            if ( module.exports) {
                module.exports = self.fetch;
            }
        })(commonjsGlobal);
    });

    var DropboxAPI = /*#__PURE__*/function (_LHBaseClass) {
        _inherits(DropboxAPI, _LHBaseClass);

        var _super = _createSuper(DropboxAPI);

        function DropboxAPI(params) {
            var _this;

            _classCallCheck(this, DropboxAPI);

            _this = _super.call(this, params);
            _this.accessToken = _this.getParam(params, "accessToken", null);
            _this.clientId = _this.getParam(params, "clientId", null);
            _this.clientSecret = _this.getParam(params, "clientSecret", null);
            _this.redirectUri = _this.getParam(params, "redirectUri", null); // this.scopes = this.getParam(params, "scopes", null);

            _this.refreshToken = _this.getParam(params, "refreshToken", null); // if (!this.accessToken) {
            //   this.accessToken = process.env.accessToken;
            // }

            _this.baseUrl = "https://api.dropboxapi.com";
            _this.contentUrl = "https://content.dropboxapi.com";
            _this.URLs = {
                copyFileOrFolder: "/2/files/copy_v2",
                createFolder: "/2/files/create_folder_v2",
                deleteFolderOrFile: "/2/files/delete_v2",
                getFolderOrFileMetadata: "/2/files/get_metadata",
                getFolderOrFileShareURL: "/2/sharing/create_shared_link_with_settings",
                listSharedLinks: "/2/sharing/list_shared_links",
                listContentsOfFolder: "/2/files/list_folder",
                moveFolderOrFile: "/2/files/move_v2",
                downloadFile: "/2/files/download",
                uploadFile: "/2/files/upload",
                search: "/2/files/search_v2",
                getQuota: "/2/users/get_space_usage",
                overwriteProperties: "/2/file_properties/properties/overwrite",
                // for update tags?
                addTemplate: "/2/file_properties/templates/add_for_user",
                listTemplates: "/2/file_properties/templates/list_for_user",
                searchProperties: "/2/file_properties/properties/search",
                updateTemplate: "/2/file_properties/templates/update_for_user",
                //given a template id, add fields
                updateProperties: "/2/file_properties/properties/update",
                // given a path and a template id, add or update fields and remove fields
                getTemplate: "/2/file_properties/templates/get_for_user",
                // returns a template object given an id
                removeTemplate: "/2/file_properties/templates/remove_for_user",
                addProperties: "/2/file_properties/properties/add" // add a name and value to a property group/template

            };
            return _this;
        }

        _createClass(DropboxAPI, [{
            key: "setAccessToken",
            value: function () {
                var _setAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this.accessToken = accessToken;

                                case 1:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function setAccessToken(_x) {
                    return _setAccessToken.apply(this, arguments);
                }

                return setAccessToken;
            }()
        }, {
            key: "getHeaders",
            value: function getHeaders() {
                var headers = {
                    Authorization: "Bearer ".concat(this.accessToken),
                    "Content-Type": "application/json"
                };
                return headers;
            }
        }, {
            key: "_checkResponse",
            value: function () {
                var _checkResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response, url) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (response.status >= 400) {
                                        this.throwException("http [".concat(response.status, "] ").concat(url, ": ") + JSON.stringify(response));
                                    }

                                    _context2.prev = 1;
                                    _context2.next = 4;
                                    return response.json();

                                case 4:
                                    return _context2.abrupt("return", _context2.sent);

                                case 7:
                                    _context2.prev = 7;
                                    _context2.t0 = _context2["catch"](1);

                                    if (!(response.error === null || response.error === undefined)) {
                                        _context2.next = 11;
                                        break;
                                    }

                                    return _context2.abrupt("return", {
                                        error: null
                                    });

                                case 11:
                                    return _context2.abrupt("return", {
                                        error: JSON.stringify(response)
                                    });

                                case 12:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[1, 7]]);
                }));

                function _checkResponse(_x2, _x3) {
                    return _checkResponse2.apply(this, arguments);
                }

                return _checkResponse;
            }()
        }, {
            key: "_post",
            value: function () {
                var _post2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(apiUrlEnding, data) {
                    var urlString, response;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    urlString = this.baseUrl + apiUrlEnding;
                                    _context3.next = 3;
                                    return fetch(urlString, {
                                        method: "POST",
                                        headers: this.getHeaders(),
                                        body: JSON.stringify(data),
                                        credentials: "include"
                                    });

                                case 3:
                                    response = _context3.sent;
                                    _context3.next = 6;
                                    return this._checkResponse(response, urlString);

                                case 6:
                                    return _context3.abrupt("return", _context3.sent);

                                case 7:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function _post(_x4, _x5) {
                    return _post2.apply(this, arguments);
                }

                return _post;
            }() //get the metadata for a file or a folder
            // returned object should be something like :
            //   {
            //     ".tag": "file",
            //     "name": "IMG_9831.jpg",
            //     "path_lower": "/to/img_9831.jpg",
            //     "path_display": "/to/IMG_9831.jpg",
            //     "id": "id:66UxNuZv56AAAAAAAAAAGQ",
            //     "client_modified": "2020-04-06T16:26:00Z",
            //     "server_modified": "2020-04-06T16:26:00Z",
            //     "rev": "015a2a1b901876400000001b9aa26b0",
            //     "size": 2322112,
            //     "is_downloadable": true,
            //     "content_hash": "ca334c6d1a068372a2ac27cff452b1544ef40d73fb24c2ec4a7fd9d57c8d424a"
            // }

        }, {
            key: "getFolderOrFileInfo",
            value: function () {
                var _getFolderOrFileInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path, templateIdStringList) {
                    var params, res;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    if (path === "") {
                                        this.throwException("There should be a folder or File path that you want to get information of");
                                    } // Dropbox needs root folder to be an empty string


                                    if (path === '/') {
                                        path = '';
                                    }

                                    params = {
                                        path: path,
                                        include_media_info: false,
                                        include_deleted: false,
                                        include_has_explicit_shared_members: false
                                    };

                                    if (templateIdStringList) {
                                        params.include_property_groups = {
                                            ".tag": "filter_some",
                                            filter_some: [templateIdStringList]
                                        };
                                    }

                                    _context4.next = 6;
                                    return this._post(this.URLs.getFolderOrFileMetadata, params);

                                case 6:
                                    res = _context4.sent;
                                    console.log(res);
                                    return _context4.abrupt("return", res);

                                case 9:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function getFolderOrFileInfo(_x6, _x7) {
                    return _getFolderOrFileInfo.apply(this, arguments);
                }

                return getFolderOrFileInfo;
            }()
        }, {
            key: "getFolderSize",
            value: function () {
                var _getFolderSize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(path) {
                    var itemList, filteredFiles, size;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    if (path === "") {
                                        this.throwException("There should be a folder or File path that you want to get information of");
                                    }

                                    _context5.next = 3;
                                    return this.listContentsOfFolder(path, true);

                                case 3:
                                    itemList = _context5.sent;
                                    filteredFiles = itemList.entries.filter(function (item) {
                                        return item['.tag'] == 'file';
                                    });
                                    size = 0;

                                    if (filteredFiles.length > 0) {
                                        size = filteredFiles.map(function (file) {
                                            return file.size;
                                        }).reduce(function (prev, next) {
                                            return prev + next;
                                        });
                                    }

                                    return _context5.abrupt("return", size);

                                case 8:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function getFolderSize(_x8) {
                    return _getFolderSize.apply(this, arguments);
                }

                return getFolderSize;
            }()
        }, {
            key: "copyFolderOrFile",
            value: function () {
                var _copyFolderOrFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(from_path, to_path) {
                    var params;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    if (from_path === "") {
                                        this.throwException("there should be a path where you want to copy from");
                                    }

                                    if (to_path === "") {
                                        this.throwException("there should be a path where you want to copy to");
                                    }

                                    params = {
                                        from_path: from_path,
                                        to_path: to_path,
                                        allow_shared_folder: false,
                                        autorename: false,
                                        allow_ownership_transfer: false
                                    };
                                    _context6.next = 5;
                                    return this._post(this.URLs.copyFileOrFolder, params);

                                case 5:
                                    return _context6.abrupt("return", _context6.sent);

                                case 6:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function copyFolderOrFile(_x9, _x10) {
                    return _copyFolderOrFile.apply(this, arguments);
                }

                return copyFolderOrFile;
            }()
        }, {
            key: "createFolder",
            value: function () {
                var _createFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(path) {
                    var autorename,
                        params,
                        res,
                        _args7 = arguments;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    autorename = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;

                                    if (path === "") {
                                        this.throwException("there should be a path where you want to create a new folder");
                                    }

                                    params = {
                                        path: "".concat(path),
                                        autorename: autorename
                                    };
                                    _context7.next = 5;
                                    return this._post(this.URLs.createFolder, params);

                                case 5:
                                    res = _context7.sent;
                                    return _context7.abrupt("return", res);

                                case 7:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function createFolder(_x11) {
                    return _createFolder.apply(this, arguments);
                }

                return createFolder;
            }() // to delete a folder or file
            // params should be an object with the path that you want to delete
            //{
            //   "path": "/Homework/math/Prime_Numbers.txt"
            // }
            //returned object should be something like this:
            //   {
            //     "metadata": {
            //         ".tag": "folder",
            //         "name": "createsomething5",
            //         "path_lower": "/createsomething5",
            //         "path_display": "/createsomething5",
            //         "id": "id:66UxNuZv56AAAAAAAAAAGg"
            //     }
            // }

        }, {
            key: "deleteFolderOrFile",
            value: function () {
                var _deleteFolderOrFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(path) {
                    var params;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    if (path === "") {
                                        this.throwException("there should be a path where you want to delete a folder");
                                    }

                                    params = {
                                        path: path
                                    };
                                    _context8.next = 4;
                                    return this._post(this.URLs.deleteFolderOrFile, params);

                                case 4:
                                    return _context8.abrupt("return", _context8.sent);

                                case 5:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function deleteFolderOrFile(_x12) {
                    return _deleteFolderOrFile.apply(this, arguments);
                }

                return deleteFolderOrFile;
            }()
        }, {
            key: "getFolderOrFileShareURL",
            value: function () {
                var _getFolderOrFileShareURL = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(path) {
                    var requested_visibility,
                        audience,
                        access,
                        listSharedResponse,
                        settings,
                        params,
                        _args9 = arguments;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    requested_visibility = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : "public";
                                    audience = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "public";
                                    access = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : "viewer";

                                    if (path === "") {
                                        this.throwException("there should be a path that you want to share");
                                    }

                                    _context9.next = 6;
                                    return this._post(this.URLs.listSharedLinks, {
                                        path: path
                                    });

                                case 6:
                                    listSharedResponse = _context9.sent;

                                    if (!(listSharedResponse.links.length > 0)) {
                                        _context9.next = 11;
                                        break;
                                    }

                                    return _context9.abrupt("return", listSharedResponse.links[0]);

                                case 11:
                                    settings = {
                                        requested_visibility: requested_visibility,
                                        audience: audience,
                                        access: access
                                    };
                                    params = {
                                        path: path,
                                        settings: settings
                                    };
                                    _context9.next = 15;
                                    return this._post(this.URLs.getFolderOrFileShareURL, params);

                                case 15:
                                    return _context9.abrupt("return", _context9.sent);

                                case 16:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function getFolderOrFileShareURL(_x13) {
                    return _getFolderOrFileShareURL.apply(this, arguments);
                }

                return getFolderOrFileShareURL;
            }()
        }, {
            key: "listContentsOfFolder",
            value: function () {
                var _listContentsOfFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(path) {
                    var recursive,
                        limit,
                        include_deleted,
                        include_has_explicit_shared_members,
                        include_mounted_folders,
                        include_non_downloadable_files,
                        templateIdStringList,
                        params,
                        _args10 = arguments;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    recursive = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;
                                    limit = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : 2000;
                                    include_deleted = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : false;
                                    include_has_explicit_shared_members = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : false;
                                    include_mounted_folders = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : true;
                                    include_non_downloadable_files = _args10.length > 6 && _args10[6] !== undefined ? _args10[6] : true;
                                    templateIdStringList = _args10.length > 7 ? _args10[7] : undefined;

                                    if (path == undefined || path == null) {
                                        this.throwException("there should be a path that you want to list folder contents");
                                    } // Dropbox requires root to be a blank string


                                    if (path === '/') {
                                        path = '';
                                    }

                                    params = {
                                        path: path,
                                        recursive: recursive,
                                        include_deleted: include_deleted,
                                        include_has_explicit_shared_members: include_has_explicit_shared_members,
                                        include_mounted_folders: include_mounted_folders,
                                        limit: limit,
                                        include_non_downloadable_files: include_non_downloadable_files
                                    };

                                    if (templateIdStringList) {
                                        params.include_property_groups = {
                                            ".tag": "filter_some",
                                            filter_some: [templateIdStringList]
                                        };
                                    }

                                    _context10.next = 13;
                                    return this._post(this.URLs.listContentsOfFolder, params);

                                case 13:
                                    return _context10.abrupt("return", _context10.sent);

                                case 14:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this);
                }));

                function listContentsOfFolder(_x14) {
                    return _listContentsOfFolder.apply(this, arguments);
                }

                return listContentsOfFolder;
            }() // the returned object should be something like:
            //   {
            //     "metadata": {
            //         ".tag": "folder",
            //         "name": "createsomething4",
            //         "path_lower": "/createsomething3/createsomething4",
            //         "path_display": "/createsomething3/createsomething4",
            //         "id": "id:66UxNuZv56AAAAAAAAAAFg"
            //     }
            // }

        }, {
            key: "moveFolderOrFile",
            value: function () {
                var _moveFolderOrFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(from_path, to_path) {
                    var allow_shared_folder,
                        autorename,
                        allow_ownership_transfer,
                        params,
                        res,
                        _args11 = arguments;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    allow_shared_folder = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : false;
                                    autorename = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : false;
                                    allow_ownership_transfer = _args11.length > 4 && _args11[4] !== undefined ? _args11[4] : false;

                                    if (from_path === "") {
                                        this.throwException("there should be a path where you want to move from");
                                    }

                                    if (to_path === "") {
                                        this.throwException("there should be a path where you want to move to");
                                    }

                                    params = {
                                        from_path: from_path,
                                        to_path: to_path,
                                        allow_shared_folder: allow_shared_folder,
                                        autorename: autorename,
                                        allow_ownership_transfer: allow_ownership_transfer
                                    };
                                    _context11.next = 8;
                                    return this._post(this.URLs.moveFolderOrFile, params);

                                case 8:
                                    res = _context11.sent;
                                    console.log(res);
                                    return _context11.abrupt("return", res);

                                case 11:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function moveFolderOrFile(_x15, _x16) {
                    return _moveFolderOrFile.apply(this, arguments);
                }

                return moveFolderOrFile;
            }() //download a file from a user's dropbox
            // params should be an object with a file path that you want to download, something like following:
            //   {
            //     "path": "/Homework/math/Prime_Numbers.txt"
            // }
            //or
            //   {
            //     "path": "id:a4ayc_80_OEAAAAAAAAAYa"
            // }

        }, {
            key: "downloadFile",
            value: function () {
                var _downloadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(path) {
                    var dropboxApiArg, argKey, headers, urlString, res;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) {
                            switch (_context12.prev = _context12.next) {
                                case 0:
                                    if (path = "") {
                                        this.throwException("there should be a file path or ID that you want to download");
                                    }

                                    dropboxApiArg = {
                                        path: path
                                    };
                                    argKey = "Dropbox-API-Arg";
                                    headers = this.getHeaders();
                                    headers[argKey] = JSON.stringify(dropboxApiArg);
                                    urlString = this.contentUrl + this.URLs.downloadFile;
                                    _context12.next = 8;
                                    return fetch(urlString, {
                                        method: "POST",
                                        headers: headers,
                                        credentials: "include"
                                    });

                                case 8:
                                    res = _context12.sent;

                                    if (res.status >= 400) {
                                        this.throwException("http [".concat(res.status, "] ").concat(urlString, ":   ").concat(JSON.stringify(res), " and headers of ").concat(JSON.stringify(headers)));
                                    }

                                    return _context12.abrupt("return", res);

                                case 11:
                                case "end":
                                    return _context12.stop();
                            }
                        }
                    }, _callee12, this);
                }));

                function downloadFile(_x17) {
                    return _downloadFile.apply(this, arguments);
                }

                return downloadFile;
            }() //TODO need an Upload function

        }, {
            key: "uploadFile",
            value: function () {
                var _uploadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(path, fileContent) {
                    var dropboxApiArg, argKey, typeKey, headers, urlString, res;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) {
                            switch (_context13.prev = _context13.next) {
                                case 0:
                                    if (path = "") {
                                        this.throwException("there should be a file path or ID that you want to download");
                                    }

                                    dropboxApiArg = {
                                        path: path
                                    };
                                    argKey = "Dropbox-API-Arg";
                                    typeKey = "Content-Type";
                                    headers = this.getHeaders();
                                    headers[argKey] = JSON.stringify(dropboxApiArg);
                                    headers[typeKey] = "application/octet-stream";
                                    urlString = this.contentUrl + this.URLs.uploadFile;
                                    _context13.next = 10;
                                    return fetch(urlString, {
                                        method: "POST",
                                        headers: headers,
                                        credentials: "include",
                                        body: fileContent
                                    });

                                case 10:
                                    res = _context13.sent;

                                    if (res.status >= 400) {
                                        this.throwException("http [".concat(res.status, "] ").concat(urlString, ":   ").concat(JSON.stringify(res), " and headers of ").concat(JSON.stringify(headers)));
                                    }

                                    _context13.next = 14;
                                    return res.json();

                                case 14:
                                    return _context13.abrupt("return", _context13.sent);

                                case 15:
                                case "end":
                                    return _context13.stop();
                            }
                        }
                    }, _callee13, this);
                }));

                function uploadFile(_x18, _x19) {
                    return _uploadFile.apply(this, arguments);
                }

                return uploadFile;
            }() //searches for files and folders
            // data should be a query object

        }, {
            key: "searchFolderOrFile",
            value: function () {
                var _searchFolderOrFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
                    var include_highlights,
                        options,
                        params,
                        _args14 = arguments;
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                        while (1) {
                            switch (_context14.prev = _context14.next) {
                                case 0:
                                    include_highlights = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;

                                    if (!data || data === "") {
                                        this.throwException("the query data should not be empty");
                                    } // Default expanding the max results. Should/can update to allow other Options in request.


                                    options = {
                                        max_results: 1000
                                    };
                                    params = {
                                        query: data,
                                        options: options,
                                        include_highlights: include_highlights
                                    };
                                    _context14.next = 6;
                                    return this._post(this.URLs.search, params);

                                case 6:
                                    return _context14.abrupt("return", _context14.sent);

                                case 7:
                                case "end":
                                    return _context14.stop();
                            }
                        }
                    }, _callee14, this);
                }));

                function searchFolderOrFile(_x20) {
                    return _searchFolderOrFile.apply(this, arguments);
                }

                return searchFolderOrFile;
            }() //get the space usage information for the current user's account

        }, {
            key: "getQuota",
            value: function () {
                var _getQuota = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                    var headers, url, response;
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                        while (1) {
                            switch (_context15.prev = _context15.next) {
                                case 0:
                                    headers = {
                                        Authorization: "Bearer ".concat(this.accessToken)
                                    };
                                    url = this.baseUrl + this.URLs.getQuota;
                                    _context15.next = 4;
                                    return fetch(url, {
                                        method: "POST",
                                        headers: headers,
                                        credentials: "include"
                                    });

                                case 4:
                                    response = _context15.sent;
                                    _context15.next = 7;
                                    return this._checkResponse(response, url);

                                case 7:
                                    return _context15.abrupt("return", _context15.sent);

                                case 8:
                                case "end":
                                    return _context15.stop();
                            }
                        }
                    }, _callee15, this);
                }));

                function getQuota() {
                    return _getQuota.apply(this, arguments);
                }

                return getQuota;
            }() // For updating tags -- might be /properties/update instead??
            // Template id is included in tags

        }, {
            key: "overwriteProperties",
            value: function () {
                var _overwriteProperties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(path, template_id, fields) {
                    var propertyGroups, customFields, propertyGroupObj, i, body;
                    return regeneratorRuntime.wrap(function _callee16$(_context16) {
                        while (1) {
                            switch (_context16.prev = _context16.next) {
                                case 0:
                                    // templateId = the template ids for each prop group
                                    if (!template_id) {
                                        this.throwException("Must provide a valid template_id");
                                    }

                                    if (!path) {
                                        this.throwException('Please provide a path to update tags for');
                                    } // array of property group objects


                                    propertyGroups = []; // each template id should represent a new property group
                                    //optional array of custom values

                                    customFields = []; // objects of custom values should be pushed here
                                    // TODO: accomodate for multiple templates

                                    propertyGroupObj = {
                                        template_id: template_id
                                    }; // Add each of the custom field objects to the custom fields array

                                    if (fields !== undefined) {
                                        for (i = 0; i < fields.length; i++) {
                                            customFields.push({
                                                name: fields[i].name,
                                                value: fields[i].value
                                            });
                                        }
                                        propertyGroupObj["fields"] = customFields;
                                    }

                                    propertyGroups.push(propertyGroupObj); //Each template added should be its own object in property_groups
                                    //property_groups is an array of custom key:value's

                                    body = {
                                        path: path,
                                        property_groups: propertyGroups
                                    }; //Success returns null

                                    _context16.next = 10;
                                    return this._post(this.URLs.overwriteProperties, JSON.stringify(body));

                                case 10:
                                    return _context16.abrupt("return", _context16.sent);

                                case 11:
                                case "end":
                                    return _context16.stop();
                            }
                        }
                    }, _callee16, this);
                }));

                function overwriteProperties(_x21, _x22, _x23) {
                    return _overwriteProperties.apply(this, arguments);
                }

                return overwriteProperties;
            }()
        }, {
            key: "createPropertyGroupTemplate",
            value: function () {
                var _createPropertyGroupTemplate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(name, description, fields) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                        while (1) {
                            switch (_context17.prev = _context17.next) {
                                case 0:
                                    // fields optional
                                    //field object: {
                                    //           "name": "key",
                                    //           "description": "Key for each tag",
                                    //           "type": "string"
                                    //         }
                                    //fields must at least be an empty array
                                    body = {
                                        name: name,
                                        description: name,
                                        fields: fields
                                    };
                                    _context17.next = 3;
                                    return this._post(this.URLs.addTemplate, body);

                                case 3:
                                    return _context17.abrupt("return", _context17.sent);

                                case 4:
                                case "end":
                                    return _context17.stop();
                            }
                        }
                    }, _callee17, this);
                }));

                function createPropertyGroupTemplate(_x24, _x25, _x26) {
                    return _createPropertyGroupTemplate.apply(this, arguments);
                }

                return createPropertyGroupTemplate;
            }() // lists available templates for user

        }, {
            key: "listTemplates",
            value: function () {
                var _listTemplates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                    var urlString, response;
                    return regeneratorRuntime.wrap(function _callee18$(_context18) {
                        while (1) {
                            switch (_context18.prev = _context18.next) {
                                case 0:
                                    // take out content-type header
                                    urlString = this.baseUrl + this.URLs.listTemplates; // body is null

                                    _context18.next = 3;
                                    return fetch(urlString, {
                                        method: "POST",
                                        headers: {
                                            Authorization: "Bearer ".concat(this.accessToken)
                                        },
                                        credentials: "include"
                                    });

                                case 3:
                                    response = _context18.sent;
                                    _context18.next = 6;
                                    return this._checkResponse(response, urlString);

                                case 6:
                                    return _context18.abrupt("return", _context18.sent);

                                case 7:
                                case "end":
                                    return _context18.stop();
                            }
                        }
                    }, _callee18, this);
                }));

                function listTemplates() {
                    return _listTemplates.apply(this, arguments);
                }

                return listTemplates;
            }() // Returns files and folders whose property groups' fields have a template

        }, {
            key: "searchProperties",
            value: function () {
                var _searchProperties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(query, field_name) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                        while (1) {
                            switch (_context19.prev = _context19.next) {
                                case 0:
                                    // key:value <=> field_name:query
                                    // TODO add multiple queries
                                    body = {
                                        queries: [{
                                            query: query,
                                            mode: {
                                                ".tag": "field_name",
                                                field_name: field_name // must be consistent with templates' field name

                                            },
                                            logical_operator: "or_operator" // optional

                                        }],
                                        template_filter: "filter_none" // optional

                                    };
                                    _context19.next = 3;
                                    return this._post(this.URLs.searchProperties, body);

                                case 3:
                                    return _context19.abrupt("return", _context19.sent);

                                case 4:
                                case "end":
                                    return _context19.stop();
                            }
                        }
                    }, _callee19, this);
                }));

                function searchProperties(_x27, _x28) {
                    return _searchProperties.apply(this, arguments);
                }

                return searchProperties;
            }() // Returns a template object given an ide

        }, {
            key: "getTemplate",
            value: function () {
                var _getTemplate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(template_id) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                        while (1) {
                            switch (_context20.prev = _context20.next) {
                                case 0:
                                    body = {
                                        template_id: template_id
                                    };
                                    _context20.next = 3;
                                    return this._post(this.URLs.getTemplate, body);

                                case 3:
                                    return _context20.abrupt("return", _context20.sent);

                                case 4:
                                case "end":
                                    return _context20.stop();
                            }
                        }
                    }, _callee20, this);
                }));

                function getTemplate(_x29) {
                    return _getTemplate.apply(this, arguments);
                }

                return getTemplate;
            }() // permanently removes excess templates, used to delete any remaining 'K2 Tags' templates

        }, {
            key: "deleteTemplate",
            value: function () {
                var _deleteTemplate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(template_id) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                        while (1) {
                            switch (_context21.prev = _context21.next) {
                                case 0:
                                    body = {
                                        template_id: template_id
                                    };
                                    console.log(body);
                                    _context21.next = 4;
                                    return this._post(this.URLs.removeTemplate, body);

                                case 4:
                                    return _context21.abrupt("return", _context21.sent);

                                case 5:
                                case "end":
                                    return _context21.stop();
                            }
                        }
                    }, _callee21, this);
                }));

                function deleteTemplate(_x30) {
                    return _deleteTemplate.apply(this, arguments);
                }

                return deleteTemplate;
            }() // Updates property groups for a given path and template id

        }, {
            key: "updateProperties",
            value: function () {
                var _updateProperties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(path, property_group_template, fields) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                        while (1) {
                            switch (_context22.prev = _context22.next) {
                                case 0:
                                    console.log('fields arr', fields);
                                    body = {
                                        path: path,
                                        update_property_groups: [{
                                            template_id: property_group_template,
                                            add_or_update_fields: fields,
                                            remove_fields: []
                                        }]
                                    };
                                    console.log('body', body);
                                    console.log('add or update', body.update_property_groups[0].add_or_update_fields);
                                    _context22.next = 7;
                                    return this._post(this.URLs.updateProperties, body);

                                case 7:
                                    return _context22.abrupt("return", _context22.sent);

                                case 8:
                                case "end":
                                    return _context22.stop();
                            }
                        }
                    }, _callee22, this);
                }));

                function updateProperties(_x31, _x32, _x33) {
                    return _updateProperties.apply(this, arguments);
                }

                return updateProperties;
            }() //  Need to add the tag's field names in the template first

        }, {
            key: "updateTemplate",
            value: function () {
                var _updateTemplate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(template_id, add_fields) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee23$(_context23) {
                        while (1) {
                            switch (_context23.prev = _context23.next) {
                                case 0:
                                    body = {
                                        template_id: template_id,
                                        add_fields: add_fields
                                    };
                                    _context23.next = 3;
                                    return this._post(this.URLs.updateTemplate, body);

                                case 3:
                                    return _context23.abrupt("return", _context23.sent);

                                case 4:
                                case "end":
                                    return _context23.stop();
                            }
                        }
                    }, _callee23, this);
                }));

                function updateTemplate(_x34, _x35) {
                    return _updateTemplate.apply(this, arguments);
                }

                return updateTemplate;
            }() // Add values for each of the field names (already added)

        }, {
            key: "addProperties",
            value: function () {
                var _addProperties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(path, property_group_template, fields) {
                    var body;
                    return regeneratorRuntime.wrap(function _callee24$(_context24) {
                        while (1) {
                            switch (_context24.prev = _context24.next) {
                                case 0:
                                    body = {
                                        path: path,
                                        property_groups: [{
                                            template_id: property_group_template,
                                            fields: fields
                                        }]
                                    };
                                    _context24.next = 3;
                                    return this._post(this.URLs.addProperties, body);

                                case 3:
                                    return _context24.abrupt("return", _context24.sent);

                                case 4:
                                case "end":
                                    return _context24.stop();
                            }
                        }
                    }, _callee24, this);
                }));

                function addProperties(_x36, _x37, _x38) {
                    return _addProperties.apply(this, arguments);
                }

                return addProperties;
            }()
        }]);

        return DropboxAPI;
    }(LHBaseClass_1);

    var DropboxAPI_1 = DropboxAPI;

    var Integration = /*#__PURE__*/function (_K2BaseIntegration) {
        _inherits(Integration, _K2BaseIntegration);

        var _super = _createSuper(Integration);

        function Integration(params) {
            var _this;

            _classCallCheck(this, Integration);

            _this = _super.call(this, params);
            _this.metaData = {
                systemName: "DropboxIntegration",
                displayName: "Dropbox Integration",
                description: "Integration of Dropbox"
            };
            _this.api = new DropboxAPI_1(); //TODO remove this, it is for testing K2 until they fix their google authentication
            // this.api.setAccessToken("ya29.a0Ae4lvC23R69sxI7AYh7xcd5ja0XlRAumDfSHAOg-ha2opxa-1fDfI0fIG1fyHz8jp1dHpVcedJ42UUjR16Dt4h0P_T-2UrIA7svH-Tv0nbtE67Glui3CWG8Z02nA8KM6aB2Opylzkxbkidj4qMQ7ZJEhx6C-oRHLt9eT");

            var soParams = {
                api: _this.api
            };
            _this.smartObjects = [new File_1(soParams), new Folder_1(soParams), new Service_1(soParams)];
            return _this;
        }

        _createClass(Integration, [{
            key: "getMetaData",
            value: function getMetaData() {
                return this.metaData;
            }
        }]);

        return Integration;
    }(K2BaseIntegration_1);

    var integration$1 = Integration;

    integration = new integration$1();
    metadata = integration.getMetaData();

    ondescribe = function ondescribe(_ref) {
        var configuration = _ref.configuration;
        postSchema(integration.getSchemas());
    };

    onexecute = function onexecute(_ref2) {
        var objectName = _ref2.objectName,
            methodName = _ref2.methodName,
            parameters = _ref2.parameters,
            properties = _ref2.properties;
        return integration.execute(objectName, methodName, parameters, properties);
    };

}());
//# sourceMappingURL=index.js.map