(window.webpackJsonp=window.webpackJsonp||[]).push([[57,62],{I0qv:function(e,n,t){"use strict";t("e2Kn"),t("4aJ6"),t("M/4x"),t("t91x"),t("Z8gF"),t("d3/y"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,r=(a=t("rZ5Z"))&&a.__esModule?a:{default:a};var i={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}};var o={localeToNumber:function(e){var n=e.toString().replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return i.number[e]}));return Number(n)},numberToLocale:function(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))},ordinalNumber:function(e,n){var t=o.localeToNumber(e),a=o.numberToLocale(t);if("date"===n.unit)return function(e,n){if(e>18&&e<=31)return n+"শে";switch(e){case 1:return n+"লা";case 2:case 3:return n+"রা";case 4:return n+"ঠা";default:return n+"ই"}}(t,a);if(t>10||0===t)return a+"তম";switch(t%10){case 2:case 3:return a+"য়";case 4:return a+"র্থ";case 6:return a+"ষ্ঠ";case 1:case 5:case 7:case 8:case 9:case 0:return a+"ম"}},era:(0,r.default)({values:{narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultWidth:"wide",formattingValues:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultFormattingWidth:"wide"})},u=o;n.default=u,e.exports=n.default},rZ5Z:function(e,n,t){"use strict";t("W1QL"),t("K/PF"),t("t91x"),t("d3/y"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default}}]);
//# sourceMappingURL=57-91c49b638f82fd2fe019.js.map