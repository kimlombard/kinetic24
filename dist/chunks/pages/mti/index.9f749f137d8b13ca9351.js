(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(a,e,s){var t={"./af":19,"./af.js":19,"./ar":20,"./ar-dz":21,"./ar-dz.js":21,"./ar-kw":22,"./ar-kw.js":22,"./ar-ly":23,"./ar-ly.js":23,"./ar-ma":24,"./ar-ma.js":24,"./ar-sa":25,"./ar-sa.js":25,"./ar-tn":26,"./ar-tn.js":26,"./ar.js":20,"./az":27,"./az.js":27,"./be":28,"./be.js":28,"./bg":29,"./bg.js":29,"./bm":30,"./bm.js":30,"./bn":31,"./bn.js":31,"./bo":32,"./bo.js":32,"./br":33,"./br.js":33,"./bs":34,"./bs.js":34,"./ca":35,"./ca.js":35,"./cs":36,"./cs.js":36,"./cv":37,"./cv.js":37,"./cy":38,"./cy.js":38,"./da":39,"./da.js":39,"./de":40,"./de-at":41,"./de-at.js":41,"./de-ch":42,"./de-ch.js":42,"./de.js":40,"./dv":43,"./dv.js":43,"./el":44,"./el.js":44,"./en-au":45,"./en-au.js":45,"./en-ca":46,"./en-ca.js":46,"./en-gb":47,"./en-gb.js":47,"./en-ie":48,"./en-ie.js":48,"./en-il":49,"./en-il.js":49,"./en-in":50,"./en-in.js":50,"./en-nz":51,"./en-nz.js":51,"./en-sg":52,"./en-sg.js":52,"./eo":53,"./eo.js":53,"./es":54,"./es-do":55,"./es-do.js":55,"./es-us":56,"./es-us.js":56,"./es.js":54,"./et":57,"./et.js":57,"./eu":58,"./eu.js":58,"./fa":59,"./fa.js":59,"./fi":60,"./fi.js":60,"./fil":61,"./fil.js":61,"./fo":62,"./fo.js":62,"./fr":63,"./fr-ca":64,"./fr-ca.js":64,"./fr-ch":65,"./fr-ch.js":65,"./fr.js":63,"./fy":66,"./fy.js":66,"./ga":67,"./ga.js":67,"./gd":68,"./gd.js":68,"./gl":69,"./gl.js":69,"./gom-deva":70,"./gom-deva.js":70,"./gom-latn":71,"./gom-latn.js":71,"./gu":72,"./gu.js":72,"./he":73,"./he.js":73,"./hi":74,"./hi.js":74,"./hr":75,"./hr.js":75,"./hu":76,"./hu.js":76,"./hy-am":77,"./hy-am.js":77,"./id":78,"./id.js":78,"./is":79,"./is.js":79,"./it":80,"./it-ch":81,"./it-ch.js":81,"./it.js":80,"./ja":82,"./ja.js":82,"./jv":83,"./jv.js":83,"./ka":84,"./ka.js":84,"./kk":85,"./kk.js":85,"./km":86,"./km.js":86,"./kn":87,"./kn.js":87,"./ko":88,"./ko.js":88,"./ku":89,"./ku.js":89,"./ky":90,"./ky.js":90,"./lb":91,"./lb.js":91,"./lo":92,"./lo.js":92,"./lt":93,"./lt.js":93,"./lv":94,"./lv.js":94,"./me":95,"./me.js":95,"./mi":96,"./mi.js":96,"./mk":97,"./mk.js":97,"./ml":98,"./ml.js":98,"./mn":99,"./mn.js":99,"./mr":100,"./mr.js":100,"./ms":101,"./ms-my":102,"./ms-my.js":102,"./ms.js":101,"./mt":103,"./mt.js":103,"./my":104,"./my.js":104,"./nb":105,"./nb.js":105,"./ne":106,"./ne.js":106,"./nl":107,"./nl-be":108,"./nl-be.js":108,"./nl.js":107,"./nn":109,"./nn.js":109,"./oc-lnc":110,"./oc-lnc.js":110,"./pa-in":111,"./pa-in.js":111,"./pl":112,"./pl.js":112,"./pt":113,"./pt-br":114,"./pt-br.js":114,"./pt.js":113,"./ro":115,"./ro.js":115,"./ru":116,"./ru.js":116,"./sd":117,"./sd.js":117,"./se":118,"./se.js":118,"./si":119,"./si.js":119,"./sk":120,"./sk.js":120,"./sl":121,"./sl.js":121,"./sq":122,"./sq.js":122,"./sr":123,"./sr-cyrl":124,"./sr-cyrl.js":124,"./sr.js":123,"./ss":125,"./ss.js":125,"./sv":126,"./sv.js":126,"./sw":127,"./sw.js":127,"./ta":128,"./ta.js":128,"./te":129,"./te.js":129,"./tet":130,"./tet.js":130,"./tg":131,"./tg.js":131,"./th":132,"./th.js":132,"./tk":133,"./tk.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":138,"./tzm-latn":139,"./tzm-latn.js":139,"./tzm.js":138,"./ug-cn":140,"./ug-cn.js":140,"./uk":141,"./uk.js":141,"./ur":142,"./ur.js":142,"./uz":143,"./uz-latn":144,"./uz-latn.js":144,"./uz.js":143,"./vi":145,"./vi.js":145,"./x-pseudo":146,"./x-pseudo.js":146,"./yo":147,"./yo.js":147,"./zh-cn":148,"./zh-cn.js":148,"./zh-hk":149,"./zh-hk.js":149,"./zh-mo":150,"./zh-mo.js":150,"./zh-tw":151,"./zh-tw.js":151};function n(a){var e=i(a);return s(e)}function i(a){if(!s.o(t,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return t[a]}n.keys=function(){return Object.keys(t)},n.resolve=i,a.exports=n,n.id=153},158:function(a,e,s){"use strict";s.r(e),function(a){s(18);var t=s(154),n=s(155),i=s.n(n);function r(a){let e=[];return a.forEach(a=>e.push(a.value)),{min:t.min(e),max:t.max(e),mean:t.mean(e),variance:t.variance(e),standardDeviation:t.standardDeviation(e)}}function o(a,e){let s=0,t=0,n=[];for(let i=0;i<a.length;i++)s+=a[i].value,(i+1)%e==0&&(t=s/e,n.push({date:a[i].date,value:t}),s=0);return n}function d(e,s,t,n){let r,o,d=[],l=[],m=[],v=[],c=[];const j="rgb(255, 99, 132)",h="rgb(54, 162, 235)";r=s.mean+s.standardDeviation,o=s.mean-s.standardDeviation,e.forEach(a=>{d.push(a.date),l.push(a.value.toFixed(4))}),l.forEach(()=>{m.push(s.mean.toFixed(4)),v.push(r.toFixed(4)),c.push(o.toFixed(4))});let u=a(t);const g={type:"line",data:{labels:d,datasets:[{label:n,backgroundColor:j,borderColor:j,fill:!1,data:l},{label:"Mean",backgroundColor:h,borderColor:h,borderWidth:3,fill:!1,data:m},{label:"Standard Deviation (Upper)",backgroundColor:h,borderColor:h,borderWidth:3,fill:!1,data:v},{label:"Standard Deviation (Lower)",backgroundColor:h,borderColor:h,borderWidth:3,fill:!1,data:c}]},options:{responsive:!0}};new i.a(u,g)}a(document).ready((function(){a.getJSON("src/data/daily-data.json",(function(e){let s=r(e),t="#daily-results";a("#daily-results-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(e,s,t,"Daily Results");let n=o(e,3);s=r(n),t="#3-day-moving-average",a("#3-day-moving-average-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(n,s,t,"3-Day Moving Average")})),a.getJSON("src/data/weekly-data.json",(function(e){let s=r(e),t="#weekly-results";a("#weekly-results-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(e,s,t,"Weekly Results");let n=o(e,2);s=r(n),t="#2-week-moving-average",a("#2-week-moving-average-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(n,s,t,"2-Week Moving Average"),n=o(e,3),s=r(n),t="#3-week-moving-average",a("#3-week-moving-average-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(n,s,t,"3-Week Moving Average")})),a.getJSON("src/data/monthly-data.json",(function(e){let s=r(e),t="#monthly-results";a("#monthly-results-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(e,s,t,"Monthly Results");let n=o(e,2);s=r(n),t="#2-month-moving-average",a("#2-month-moving-average-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(n,s,t,"2-Month Moving Average"),n=o(e,3),s=r(n),t="#3-month-moving-average",a("#3-month-moving-average-stats").html("<b>Stats for Nerds</b><br>min: "+s.min.toFixed(4)+"<br>mean: "+s.mean.toFixed(4)+"<br>max: "+s.max.toFixed(4)+"<br>variance: "+s.variance.toFixed(4)+"<br>standard deviation: "+s.standardDeviation.toFixed(4)),d(n,s,t,"3-Month Moving Average")}))})),a("#daily-results-reset-zoom").click((function(){console.log("reset zoom clicked"),window.myChart.resetZoom()})),e.default={css:'mti .stats,[is="mti"] .stats{ font-size: small; } mti .chart,[is="mti"] .chart{ padding-top: 50px; }',exports:null,template:function(a,e,s,t){return a('<h1><a href="https://mirrortradinginternational.com/overview/">Mirror Trading International</a></h1><p>Mirror Trading Internastional (MTI) is a trading company incorporated in South Africa that has been trading since April 2019.</p><p>The company\'s objective is to grow your Bitcoin. You deposit BTC into your private wallet on MTI\'s side and they grow your balance by trading in both crypto and forex markets every working day of the week. Daily profits are automatically added to your balance and therefore you earn compound interest daily. As long as the daily trades end in a profit, you continue to grow your investment.</p><p>The minimum deposit requirement is 100 USD, where 200 USD is suggested if you are interested in the referral program, since that automatically qualifies you for various weekly bonuses.</p><p>Below are some charts that indicate the performance potential using actual trading results.</p><p>Note that while the company has been trading since around April 2019, results are only available from 7 November 2019, as per their daily trading announcements on Telegram. Also, you will notice that there is a dip in results during December, which is due to fewer trading days during holiday season. Of particular interest is how the company has performed during the COVID-19 pandemic, posting only one day of negative trading.</p><div class="chart"><h3>Daily Results</h3><p class="stats" id="daily-results-stats"></p><canvas id="daily-results"></canvas></div><div class="chart"><h3>3-Day Moving Average</h3><p class="stats" id="3-day-moving-average-stats"></p><canvas id="3-day-moving-average"></canvas></div><div class="chart"><h3>Weekly Results</h3><p class="stats" id="weekly-results-stats"></p><canvas id="weekly-results"></canvas></div><div class="chart"><h3>2-Week Moving Average</h3><p class="stats" id="2-week-moving-average-stats"></p><canvas id="2-week-moving-average"></canvas></div><div class="chart"><h3>3-Week Moving Average</h3><p class="stats" id="3-week-moving-average-stats"></p><canvas id="3-week-moving-average"></canvas></div><div class="chart"><h3>Monthly Results</h3><p class="stats" id="monthly-results-stats"></p><canvas id="monthly-results"></canvas></div><div class="chart"><h3>2-Month Moving Average</h3><p class="stats" id="2-month-moving-average-stats"></p><canvas id="2-month-moving-average"></canvas></div><div class="chart"><h3>3-Month Moving Average</h3><p class="stats" id="3-month-moving-average-stats"></p><canvas id="3-month-moving-average"></canvas></div>',[])},name:"mti"}}.call(this,s(152))}}]);
//# sourceMappingURL=index.9f749f137d8b13ca9351.js.map