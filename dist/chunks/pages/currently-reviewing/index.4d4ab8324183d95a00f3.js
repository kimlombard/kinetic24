(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,e,n){"use strict";n.r(e),function(t){t(document).ready((function(){t.getJSON("src/data/exchange/exchange-data.json",(function(e){let n=[],a=[],r=[],o=[],i=[],d=[],s=[],h=[],p=[],c=[];e.daily.forEach(t=>{n.push(t.productName),a.push(t.purchaseDate),r.push(t.expiryDate),o.push(t.investAmount),i.push(t.linkedPrice),d.push(t.term),s.push(t.yield),h.push(t.dailyYield),p.push(t.settledPrice),c.push(t.settledAmount)});let u="";for(let t=0;t<n.length;t++)u+="<tr><td>"+n[t]+"</td><td>"+a[t]+"</td><td>"+r[t]+"</td><td>"+o[t]+"</td><td>"+i[t]+"</td><td>"+d[t]+"</td><td>"+s[t]+"</td><td>"+h[t]+"</td><td>"+p[t]+"</td><td>"+c[t]+"</td></tr>";t("#exchange-results").html("\n            <table>\n                <caption>Exchange Trading Results</caption>\n                <thead>\n                    <tr>\n                        <th>Product Name</th>\n                        <th>Purchase Date</th>\n                        <th>Expiry Date</th>\n                        <th>Invest Amount</th>\n                        <th>Linked Price</th>\n                        <th>Term</th>\n                        <th>Yield</th>\n                        <th>Daily Yield</th>\n                        <th>Settled Price</th>\n                        <th>Settled Amount</th>\n                    </tr>\n                </thead>\n                <tbody>"+u+"\n                </tbody>\n            </table>")}))})),e.default={css:null,exports:null,template:function(t,e,n,a){return t('<h1>Interesting Companies</h1><p>Two companies have recently caught my attention. Mystery Company 1 is a crypto trading platform and Mystey Company 2 is a cloud mining company,  . Both offer good returns and I\'m performing a trial investment in both and will report my findings once I have sufficient data.</p><p>Mystery Company 1 is a crypto trading exchange that offers enticing returns around 1-200% per month based on your risk appetite. They offer currencies to be bought and sold on the exchange, options, ETFs, and dual currency trades.</p><p>Mystery Company 2 mines Bitcoin (BTC) and Bitcoin Vault (BTCV) and has various plans which earn a monthly commission based on the hash rate of transactions performed for the currency of your choice. Returns are estimated around 20% per month but may vary based on the demand of the chosen currency.</p><hr/><h2>Update</h2><h3>Crypto Exchange</h3><p>Trading directly on the exchange offers additional opportunities to achieve rewarding growth potential, typically between 20-40% per month.</p><p><strong>Note:</strong> After 17 days this trading experiment has concluded with mixed results.</p><p><strong>Lessons Learned:</strong> Attractive yields of around 1% per day should mean around 30% per month. In reality, it appeared to be less than that. This could be due to a combination of a realatively small trading amount of around $500 and the commission fees. I would deem this an attractive opportunity if trading with a larger amount of, say, $10,000.</p><p>Here are the trading results for posterity:</p><div id="exchange-results"></div>',[])},name:"currently-reviewing"}}.call(this,n(152))}}]);
//# sourceMappingURL=index.4d4ab8324183d95a00f3.js.map