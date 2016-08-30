(function () {
    'use strict';
    var expect = require('chai').expect;
    require('../array.js');

    describe('array test', function () {
        it('should pass this canary test', function () {
            expect(true).to.be.true;
        });

        var ary,
            ary_sorted,
            ary_reversed,
            num_ary,
            num_ary_sorted,
            num_ary_reversed,
            num_order;

        num_order= function (x, y) {
            return x - y;
        };
        beforeEach(function () {
            ary = ['e', 'a', 'c', 'b', 'd'],
            ary_sorted = ['a', 'b', 'c', 'd', 'e'],
            ary_reversed = ['d', 'b', 'c', 'a', 'e'];            
            num_ary = [5, 1, 4, 2, 3, 10];
            num_ary_sorted = [1, 2, 3, 4, 5, 10];
            num_ary_reversed = [10, 3, 2, 4, 1, 5];
        });
        it('ary.sorted()', function () {
            var a = ary.sorted();
            
            expect(a).to.eql(ary_sorted);
        });
        it('ary.sorted() (not in place)', function () {
            var a = ary.slice();
            
            ary.sorted();
            expect(ary).to.eql(a);
        });
        it('ary.reversed()', function () {
            var a = ary.reversed();
            
            expect(a).to.eql(ary_reversed);
        });
        it('ary.reversed() (not in place)', function () {
            var a = ary.slice();
            
            ary.reversed();
            expect(ary).to.eql(a);
        });
        it('num_ary.sort()', function () {
            num_ary.sort();
            expect(num_ary).to.eql(num_ary_sorted);
        });
        it('num_ary.sorted()', function () {
            var a = num_ary.sorted();
            
            expect(a).to.eql(num_ary_sorted);
        });
        it('num_ary.sorted() (not in place)', function () {
            var a = num_ary.slice();

            num_ary.sorted();
            expect(num_ary).to.eql(a);
        });
        it('range(0)', function () {
            expect(range(0)).to.eql([]);
        });
        it('range(1)', function () {
            expect(range(1)).to.eql([0]);
        });
        it('range(5)', function () {
            expect(range(5)).to.eql([0, 1, 2, 3, 4]);
        });
        it('range(-1)', function () {
            expect(range(1)).to.eql([0]);
        });
        it('range(-5)', function () {
            expect(range(-5)).to.eql([]);
        });
        it('range(2, 5)', function() {
            expect(range(2, 5)).to.eql([2, 3, 4]);
        });
        it('range(5, 2)', function() {
            expect(range(5, 2)).to.eql([]);
        });
        it('range(1, -1)', function() {
            expect(range(1, -1)).to.eql([]);
        });
        it('range(-2, 2)', function () {
            expect(range(-2, 2)).to.eql([-2, -1, 0, 1]);
        });
        it('range(-5, -2)', function () {
            expect(range(-5, -2)).to.eql([-5, -4, -3]);
        });
        it('range(-2, -5)', function () {
            expect(range(-2, -5)).to.eql([]);
        });
        it('range(1, 10, 2)', function() {
            expect(range(1, 10, 2)).to.eql([1, 3, 5, 7, 9]);
        });
        it('range(10, 1, 2)', function() {
            expect(range(10, 1, 2)).to.eql([]);
        });
        it('range(1, 10, -2)', function() {
            expect(range(1, 10, -2)).to.eql([]);
        });
        it('range(10, 1, -2)', function() {
            expect(range(10, 1, -2)).to.eql([10, 8, 6, 4, 2]);
        });
        it('range(5, -5, -2)', function() {
            expect(range(5, -5, -2)).to.eql([5, 3, 1, -1, -3]);
        });
        it('range(-5, 5, -2)', function() {
            expect(range(-5, 5, -2)).to.eql([]);
        });        
        it('range(-10, -5, -2)', function() {
            expect(range(-10, -5, -2)).to.eql([]);
        });        
        it('range(-5, -10, -2)', function() {
            expect(range(-5, -10, -2)).to.eql([-5, -7, -9]);
        });        
    });    
}());
