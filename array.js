(function (scope) {
    'use strict';
    var numberOrder,
        isNumsArray,
        arraySort = Array.prototype.sort;

    Array.prototype.shuffle = function () {
        var shuffled = [],
            len = this.length,
            len0,
            i;

        for (len0 = len; len0 > 0; len0 -= 1) {
            i = Math.floor(Math.random() * len0);
            shuffled.push(this[i]);
            this.splice(i, 1);
        }
        for (i = 0; i < len; i += 1) {
            this[i] = shuffled[i];
        }
    };
    Array.prototype.shuffled = function () {
        var a = this.slice();

        a.shuffle();
        return a;
    };
    numberOrder = function (x, y) {
        return x - y;
    };
    isNumsArray = function (ary) {
        return ary.every(function (elem) {
            return typeof elem === 'number';
        });
    };
    Array.prototype.sort = function (orderFunc) {
        if (orderFunc === undefined && isNumsArray(this)) {
            arraySort.call(this, numberOrder);
        } else {
            arraySort.call(this, orderFunc);
        }
    };
    Array.prototype.sorted = function (orderFunc) {
        var a = this.slice();

        a.sort(orderFunc);
        return a;
    };
    Array.prototype.reversed = function () {
        var a = this.slice();

        a.reverse();
        return a;
    };
    scope.range = function (start, end, step) {
        var nums = [],
            i;

        if (step === 0) {
            throw {
                name: 'ValueError',
                message: 'range() arg 3 must not be zero',
            };
        }
        if (step === undefined) {
            step = 1;
        }
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (step > 0) {
            for (i = start; i < end; i += step) {
                nums.push(i);
            }
        } else {
            for (i = start; i > end; i += step) {
                nums.push(i);
            }
        }
        return nums;
    };
}(this.window || global));

