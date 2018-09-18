/**
 * es6
 */
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';
var _a = require('rxjs'), Observable = _a.Observable, Subject = _a.Subject, ReplaySubject = _a.ReplaySubject, from = _a.from, of = _a.of, range = _a.range;
var _b = require('rxjs/operators'), map = _b.map, filter = _b.filter, switchMap = _b.switchMap;
range(1, 200)
    .pipe(filter(function (x) { return x % 2 === 1; }), map(function (x) { return x + x; }))
    .subscribe(function (x) { return console.log(x); });
