/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.3.1.js
   ECMA Section:       15.9.3.1 new Date (year, month, date, hours, minutes, seconds, ms)
   Description:        The [[Prototype]] property of the newly constructed
   object is set to the original Date prototype object,
   the one that is the initial value of Date.prototype.

   The [[Class]] property of the newly constructed object
   is set as follows:
   1. Call ToNumber(year)
   2. Call ToNumber(month)
   3. Call ToNumber(date)
   4. Call ToNumber(hours)
   5. Call ToNumber(minutes)
   6. Call ToNumber(seconds)
   7. Call ToNumber(ms)
   8.  If Result(1)is NaN and 0 <= ToInteger(Result(1)) <=
   99, Result(8) is 1900+ToInteger(Result(1)); otherwise,
   Result(8) is Result(1)
   9.  Compute MakeDay(Result(8), Result(2), Result(3)
   10. Compute MakeTime(Result(4), Result(5), Result(6),
   Result(7)
   11. Compute MakeDate(Result(9), Result(10))
   12. Set the [[Value]] property of the newly constructed
   object to TimeClip(UTC(Result(11))).


   This tests the returned value of a newly constructed
   Date object.

   Author:             christine@netscape.com
   Date:               7 july 1997
*/

var TIME        = 0;
var UTC_YEAR    = 1;
var UTC_MONTH   = 2;
var UTC_DATE    = 3;
var UTC_DAY     = 4;
var UTC_HOURS   = 5;
var UTC_MINUTES = 6;
var UTC_SECONDS = 7;
var UTC_MS      = 8;

var YEAR        = 9;
var MONTH       = 10;
var DATE        = 11;
var DAY         = 12;
var HOURS       = 13;
var MINUTES     = 14;
var SECONDS     = 15;
var MS          = 16;

var SECTION = "15.9.3.1";
var TITLE =   "Date( year, month, date, hours, minutes, seconds )";

writeHeaderToLog( SECTION+" " +TITLE );

// Dates around 1900

addNewTestCase( new Date(1899,11,31,16,0,0),
		"new Date(1899,11,31,16,0,0)",
		[-2208988800000,1900,0,1,1,0,0,0,0,1899,11,31,0,16,0,0,0] );

addNewTestCase( new Date(1899,11,31,15,59,59),
		"new Date(1899,11,31,15,59,59)",
		[-2208988801000,1899,11,31,0,23,59,59,0,1899,11,31,0,15,59,59,0] );

addNewTestCase( new Date(1900,0,1,0,0,0),
		"new Date(1900,0,1,0,0,0)",
		[-2208960000000,1900,0,1,1,8,0,0,0,1900,0,1,1,0,0,0,0] );

addNewTestCase( new Date(1900,0,1,0,0,1),
		"new Date(1900,0,1,0,0,1)",
		[-2208959999000,1900,0,1,1,8,0,1,0,1900,0,1,1,0,0,1,0] );

test();

function addNewTestCase( DateCase, DateString, ResultArray ) {
  //adjust hard-coded ResultArray for tester's timezone instead of PST
  adjustResultArray(ResultArray);

  new TestCase( DateString+".getTime()", ResultArray[TIME],       DateCase.getTime() );
  new TestCase( DateString+".valueOf()", ResultArray[TIME],       DateCase.valueOf() );

  new TestCase( DateString+".getUTCFullYear()",      ResultArray[UTC_YEAR],   DateCase.getUTCFullYear() );
  new TestCase( DateString+".getUTCMonth()",         ResultArray[UTC_MONTH],  DateCase.getUTCMonth() );
  new TestCase( DateString+".getUTCDate()",          ResultArray[UTC_DATE],   DateCase.getUTCDate() );
  new TestCase( DateString+".getUTCDay()",           ResultArray[UTC_DAY],    DateCase.getUTCDay() );
  new TestCase( DateString+".getUTCHours()",         ResultArray[UTC_HOURS],  DateCase.getUTCHours() );
  new TestCase( DateString+".getUTCMinutes()",       ResultArray[UTC_MINUTES],DateCase.getUTCMinutes() );
  new TestCase( DateString+".getUTCSeconds()",       ResultArray[UTC_SECONDS],DateCase.getUTCSeconds() );
  new TestCase( DateString+".getUTCMilliseconds()",  ResultArray[UTC_MS],     DateCase.getUTCMilliseconds() );

  new TestCase( DateString+".getFullYear()",         ResultArray[YEAR],       DateCase.getFullYear() );
  new TestCase( DateString+".getMonth()",            ResultArray[MONTH],      DateCase.getMonth() );
  new TestCase( DateString+".getDate()",             ResultArray[DATE],       DateCase.getDate() );
  new TestCase( DateString+".getDay()",              ResultArray[DAY],        DateCase.getDay() );
  new TestCase( DateString+".getHours()",            ResultArray[HOURS],      DateCase.getHours() );
  new TestCase( DateString+".getMinutes()",          ResultArray[MINUTES],    DateCase.getMinutes() );
  new TestCase( DateString+".getSeconds()",          ResultArray[SECONDS],    DateCase.getSeconds() );
  new TestCase( DateString+".getMilliseconds()",     ResultArray[MS],         DateCase.getMilliseconds() );

}