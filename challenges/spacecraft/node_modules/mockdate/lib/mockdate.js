(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MockDate = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var RealDate = Date;
    var now = null;
    var MockDate = /** @class */ (function (_super) {
        __extends(Date, _super);
        function Date(y, m, d, h, M, s, ms) {
            _super.call(this) || this;
            var date;
            switch (arguments.length) {
                case 0:
                    if (now !== null) {
                        date = new RealDate(now.valueOf());
                    }
                    else {
                        date = new RealDate();
                    }
                    break;
                case 1:
                    date = new RealDate(y);
                    break;
                default:
                    d = typeof d === 'undefined' ? 1 : d;
                    h = h || 0;
                    M = M || 0;
                    s = s || 0;
                    ms = ms || 0;
                    date = new RealDate(y, m, d, h, M, s, ms);
                    break;
            }
            return date;
        }
        return Date;
    }(RealDate));
    MockDate.prototype = RealDate.prototype;
    MockDate.UTC = RealDate.UTC;
    MockDate.now = function () {
        return new MockDate().valueOf();
    };
    MockDate.parse = function (dateString) {
        return RealDate.parse(dateString);
    };
    MockDate.toString = function () {
        return RealDate.toString();
    };
    function set(date) {
        var dateObj = new Date(date.valueOf());
        if (isNaN(dateObj.getTime())) {
            throw new TypeError('mockdate: The time set is an invalid date: ' + date);
        }
        // @ts-ignore
        Date = MockDate;
        now = dateObj.valueOf();
    }
    function reset() {
        Date = RealDate;
    }
    var mockdate = {
        set: set,
        reset: reset,
    };

    exports.default = mockdate;
    exports.reset = reset;
    exports.set = set;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
