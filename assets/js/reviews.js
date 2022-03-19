
      (function() {
        window.fera = window.fera || [];
        window.fera.push("configure", {
          store_pk: "pk_3d40d27e6d43b22755261326c27de9b009319a85283d94b4335e8d808ec6df4d"
        });
        // window.fera.push("setProduct", { id: 321, name: "Product 312" });
        // window.fera.push("setShopper", { customer_id: "customer-123", name: "John Doe", email: "john.doe@example.com",  }); */
        // window.fera.push("setCart", { total: 100.0, currency: 'USD',  items: [{price: 50.0, total: 100.0, product_id: "product-123", name: "Product 123", quantity: 2 }] }); */
        var FeraCachedAsset = function(r) {
          var n = this;
          this.version = "0.2.3";
          var a = r.name || r.url.split("?")[0].split("#")[0];
          var o = "Fera.AssetCache." + a;
          var s = (new Date).getTime() / 1e3;
          var c = r.type || (r.url.indexOf(".html") !== -1 ? "text/template" : r.url.indexOf(".css") !== -1 ? "text/css" : "text/javascript");
          n.load = function(t) {
            t = t || function() {};
            if (n.content) {
              return t(n.content)
            }
            if (!e()) {
              u(r.url, function(e) {
                n.content = e;
                i(e);
                n.save(e);
                t(e)
              })
            } else {
              t(n.content)
            }
            return true
          };
          n.save = function(e) {
            var t = s + (r.expiresIn || 900);
            if (!l() || !e) {
              return false
            }
            var n = {
              name: a,
              url: r.url,
              expires: t,
              content: e
            };
            window.localStorage.setItem(o, JSON.stringify(n));
            return true
          };
          n.clear = function() {
            window.localStorage.removeItem(o);
            return false
          };
          var e = function() {
            if (!l()) return false;
            var e = window.localStorage.getItem(o);
            if (!e || typeof e !== "string") {
              return null
            }
            var t = JSON.parse(e);
            if (t.expires < s || t.url !== r.url) {
              return n.clear()
            }
            n.content = t.content;
            i(n.content);
            return true
          };
          var i = function(e) {
            if (document.getElementById(o)) return;
            var t = document.createElement(c === "text/css" ? "style" : "script");
            t.type = c;
            t.id = o;
            t.async = !0;
            t.innerHTML = e;
            document.body.appendChild(t)
          };
          var u = function(e, t) {
            var n = new XMLHttpRequest;
            n.async = true;
            n.onreadystatechange = function() {
              if (n.readyState == 4 && n.status < 300) {
                t(n.responseText)
              }
            };
            n.open("GET", e, true);
            n.send()
          };
          var l = function() {
            var e = "test";
            try {
              window.localStorage.setItem(e, "t");
              window.localStorage.removeItem(e);
              return 1
            } catch (e) {
              return 0
            }
          }
        };
        new FeraCachedAsset({
          name: 'bananastand',
          expiresIn: 900,
          url: window.feraJsUrl || "https://cdn.fera.ai/js/fera.js"
        }).load();
      })();
