(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,s,a){var t={"./af":19,"./af.js":19,"./ar":20,"./ar-dz":21,"./ar-dz.js":21,"./ar-kw":22,"./ar-kw.js":22,"./ar-ly":23,"./ar-ly.js":23,"./ar-ma":24,"./ar-ma.js":24,"./ar-sa":25,"./ar-sa.js":25,"./ar-tn":26,"./ar-tn.js":26,"./ar.js":20,"./az":27,"./az.js":27,"./be":28,"./be.js":28,"./bg":29,"./bg.js":29,"./bm":30,"./bm.js":30,"./bn":31,"./bn.js":31,"./bo":32,"./bo.js":32,"./br":33,"./br.js":33,"./bs":34,"./bs.js":34,"./ca":35,"./ca.js":35,"./cs":36,"./cs.js":36,"./cv":37,"./cv.js":37,"./cy":38,"./cy.js":38,"./da":39,"./da.js":39,"./de":40,"./de-at":41,"./de-at.js":41,"./de-ch":42,"./de-ch.js":42,"./de.js":40,"./dv":43,"./dv.js":43,"./el":44,"./el.js":44,"./en-au":45,"./en-au.js":45,"./en-ca":46,"./en-ca.js":46,"./en-gb":47,"./en-gb.js":47,"./en-ie":48,"./en-ie.js":48,"./en-il":49,"./en-il.js":49,"./en-in":50,"./en-in.js":50,"./en-nz":51,"./en-nz.js":51,"./en-sg":52,"./en-sg.js":52,"./eo":53,"./eo.js":53,"./es":54,"./es-do":55,"./es-do.js":55,"./es-us":56,"./es-us.js":56,"./es.js":54,"./et":57,"./et.js":57,"./eu":58,"./eu.js":58,"./fa":59,"./fa.js":59,"./fi":60,"./fi.js":60,"./fil":61,"./fil.js":61,"./fo":62,"./fo.js":62,"./fr":63,"./fr-ca":64,"./fr-ca.js":64,"./fr-ch":65,"./fr-ch.js":65,"./fr.js":63,"./fy":66,"./fy.js":66,"./ga":67,"./ga.js":67,"./gd":68,"./gd.js":68,"./gl":69,"./gl.js":69,"./gom-deva":70,"./gom-deva.js":70,"./gom-latn":71,"./gom-latn.js":71,"./gu":72,"./gu.js":72,"./he":73,"./he.js":73,"./hi":74,"./hi.js":74,"./hr":75,"./hr.js":75,"./hu":76,"./hu.js":76,"./hy-am":77,"./hy-am.js":77,"./id":78,"./id.js":78,"./is":79,"./is.js":79,"./it":80,"./it-ch":81,"./it-ch.js":81,"./it.js":80,"./ja":82,"./ja.js":82,"./jv":83,"./jv.js":83,"./ka":84,"./ka.js":84,"./kk":85,"./kk.js":85,"./km":86,"./km.js":86,"./kn":87,"./kn.js":87,"./ko":88,"./ko.js":88,"./ku":89,"./ku.js":89,"./ky":90,"./ky.js":90,"./lb":91,"./lb.js":91,"./lo":92,"./lo.js":92,"./lt":93,"./lt.js":93,"./lv":94,"./lv.js":94,"./me":95,"./me.js":95,"./mi":96,"./mi.js":96,"./mk":97,"./mk.js":97,"./ml":98,"./ml.js":98,"./mn":99,"./mn.js":99,"./mr":100,"./mr.js":100,"./ms":101,"./ms-my":102,"./ms-my.js":102,"./ms.js":101,"./mt":103,"./mt.js":103,"./my":104,"./my.js":104,"./nb":105,"./nb.js":105,"./ne":106,"./ne.js":106,"./nl":107,"./nl-be":108,"./nl-be.js":108,"./nl.js":107,"./nn":109,"./nn.js":109,"./oc-lnc":110,"./oc-lnc.js":110,"./pa-in":111,"./pa-in.js":111,"./pl":112,"./pl.js":112,"./pt":113,"./pt-br":114,"./pt-br.js":114,"./pt.js":113,"./ro":115,"./ro.js":115,"./ru":116,"./ru.js":116,"./sd":117,"./sd.js":117,"./se":118,"./se.js":118,"./si":119,"./si.js":119,"./sk":120,"./sk.js":120,"./sl":121,"./sl.js":121,"./sq":122,"./sq.js":122,"./sr":123,"./sr-cyrl":124,"./sr-cyrl.js":124,"./sr.js":123,"./ss":125,"./ss.js":125,"./sv":126,"./sv.js":126,"./sw":127,"./sw.js":127,"./ta":128,"./ta.js":128,"./te":129,"./te.js":129,"./tet":130,"./tet.js":130,"./tg":131,"./tg.js":131,"./th":132,"./th.js":132,"./tk":133,"./tk.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":138,"./tzm-latn":139,"./tzm-latn.js":139,"./tzm.js":138,"./ug-cn":140,"./ug-cn.js":140,"./uk":141,"./uk.js":141,"./ur":142,"./ur.js":142,"./uz":143,"./uz-latn":144,"./uz-latn.js":144,"./uz.js":143,"./vi":145,"./vi.js":145,"./x-pseudo":146,"./x-pseudo.js":146,"./yo":147,"./yo.js":147,"./zh-cn":148,"./zh-cn.js":148,"./zh-hk":149,"./zh-hk.js":149,"./zh-mo":150,"./zh-mo.js":150,"./zh-tw":151,"./zh-tw.js":151};function n(e){var s=r(e);return a(s)}function r(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=r,e.exports=n,n.id=153},158:function(e,s,a){"use strict";a.r(s),function(e){a(18);var t=a(154),n=a(155),r=a.n(n);function o(e){let s=[];e.forEach(e=>s.push(e.value));t.min(s),t.max(s);let a=t.mean(s);t.variance(s);return{mean:a,standardDeviation:t.standardDeviation(s)}}function i(e,s){let a=0,t=0,n=[];for(let r=0;r<e.length;r++)a+=e[r].value,(r+1)%s==0&&(t=a/s,n.push({date:e[r].date,value:t}),a=0);return n}function l(s,a,t,n){let o,i,l=[],d=[],j=[],h=[],u=[];const c="rgb(255, 99, 132)",m="rgb(54, 162, 235)";o=a.mean+a.standardDeviation,i=a.mean-a.standardDeviation,s.forEach(e=>{l.push(e.date),d.push(e.value)}),d.forEach(()=>{j.push(a.mean.toFixed(4)),h.push(o.toFixed(2)),u.push(i.toFixed(2))});let v=e(t);new r.a(v,{type:"line",data:{labels:l,datasets:[{label:n,backgroundColor:c,borderColor:c,data:d},{label:"Mean",backgroundColor:m,borderColor:m,borderWidth:3,fill:!1,data:j},{label:"Standard Deviation (Upper)",backgroundColor:m,borderColor:m,borderWidth:3,fill:!1,data:h},{label:"Standard Deviation (Lower)",backgroundColor:m,borderColor:m,borderWidth:3,fill:!1,data:u}]}})}e(document).ready((function(){console.log("jquery ready"),e.getJSON("src/data/daily-data.json",(function(e){let s=o(e),a="#daily-results";l(e,s,a,"Daily Results");let t=i(e,3);s=o(t),a="#3-day-moving-average",l(t,s,a,"3-Day Moving Average")})),e.getJSON("src/data/weekly-data.json",(function(e){let s=o(e),a="#weekly-results";l(e,s,a,"Weekly Results");let t=i(e,3);s=o(t),a="#3-week-moving-average",l(t,s,a,"3-Week Moving Average")})),e.getJSON("src/data/monthly-data.json",(function(e){let s=o(e),a="#monthly-results";l(e,s,a,"Monthly Results");let t=i(e,3);s=o(t),a="#3-month-moving-average",l(t,s,a,"3-Month Moving Average")}))})),s.default={css:'mti .chart,[is="mti"] .chart{ padding-top: 50px; }',exports:null,template:function(e,s,a,t){return e('<h1>Mirror Trading International</h1><p>Mirror Trading Internastional (MTI) is a trading company incorporated in South Africa that has been trading since April 2019 and is available to investors, which also has an optional referral program that allows you to share the opportunity with your friends. The referral program offers various types of commissions to be earned. Importantly, all commissions are paid from the company\'s profits rather than, say, a product\'s sticker price from an MLM, which is disadvantageous to the buyer.</p><p>This opportunity offers is hands-free investment. As long as you have funds in your account, MTI will continue to invest on your behalf.</p><p>The company grows your Bitcoin. You deposit BTC into your private wallet on MTI\'s side and they trade on both the crypto and forex markets every working day of the week. Daily profits are automatically added to your balance and therefore you earn compound interest daily. As long as the daily trades end in a profit, you continue to grow your investment.</p><p>The minimum deposit requirement is 100 USD, where 200 USD is suggested if your are interested in the referral program, since that automatically qualifies you for various weekly bonuses. As an example, my team leader and her husband started with an initial combined deposit of around 5,000 ZAR in November 2019, and currently have over 150,000 ZAR today, 21 August 2020, through the referral program.</p><p>Bonuses are earned depending on the size of your team as well as the total amount in USD you have in your portfolio.</p><p>Below are charts that indicate the performance potential using actual trading results.</p><p>Note that while the company has been trading since around April 2019, results are only available from 7 November 2019. Also, you will notice that the dip in result during December is due to the fewer trading days as a result of the Christmas season. Of particular interest is how the company has performed during the COVID-19 pandemic, with only one day of negative trading.</p><div class="chart"><h3>Daily Results</h3><canvas id="daily-results"></canvas></div><div class="chart"><h3>3-Day Moving Average</h3><canvas id="3-day-moving-average"></canvas></div><div class="chart"><h3>Weekly Results</h3><canvas id="weekly-results"></canvas></div><div class="chart"><h3>3-Week Moving Average</h3><canvas id="3-week-moving-average"></canvas></div><div class="chart"><h3>Monthly Results</h3><canvas id="monthly-results"></canvas></div><div class="chart"><h3>3-Month Moving Average</h3><canvas id="3-month-moving-average"></canvas></div>',[])},name:"mti"}}.call(this,a(152))}}]);
//# sourceMappingURL=index.4b4c34697506f281d5a3.js.map