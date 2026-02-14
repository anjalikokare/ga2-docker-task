
const crypto = require('crypto');
if (!globalThis.crypto) { globalThis.crypto = crypto.webcrypto; }

// --- Minified Helpers ---
var V = (t, a) => () => (a || t((a = { exports: {} }).exports, a), a.exports);

// --- Alea (Pe) ---
var Pe = V((Ue, ye) => {
    (function (t, a, e) {
        function i(o) {
            var l = this, d = n();
            l.next = function () {
                var r = 2091639 * l.s0 + l.c * 23283064365386963e-26;
                return l.s0 = l.s1, l.s1 = l.s2, l.s2 = r - (l.c = r | 0), l.c = 1, l.s0 = d(" "), l.s1 = d(" "), l.s2 = d(" "), l.s0 -= d(o), l.s0 < 0 && (l.s0 += 1), l.s1 -= d(o), l.s1 < 0 && (l.s1 += 1), l.s2 -= d(o), l.s2 < 0 && (l.s2 += 1), d = null
            }, i.prototype.next = function () {
                var r = 2091639 * this.s0 + this.c * 23283064365386963e-26;
                return this.s0 = this.s1, this.s1 = this.s2, this.s2 = r - (this.c = r | 0), this.s2 < 0 && (this.s2 += 1), this.s2
            }
        }
        function s(o, l) { return l.c = o.c, l.s0 = o.s0, l.s1 = o.s1, l.s2 = o.s2, l }
        function h(o, l) {
            var d = new i(o), r = l && l.state, c = d.next;
            return c.int32 = function () { return d.next() * 4294967296 | 0 }, c.double = function () { return c() + (c() * 2097152 | 0) * 11102230246251565e-32 }, c.quick = c, r && (typeof r == "object" && s(r, d), c.state = function () { return s(d, {}) }), c
        }
        function n() {
            var o = 4022871197, l = function (d) {
                d = String(d);
                for (var r = 0; r < d.length; r++) {
                    o += d.charCodeAt(r);
                    var c = .02519603282416938 * o;
                    o = c >>> 0, c -= o, c *= o, o = c >>> 0, c -= o, o += c * 4294967296
                }
                return (o >>> 0) * 23283064365386963e-26
            };
            return l
        }
        a && a.exports ? a.exports = h : e && e.amd ? e(function () { return h }) : this.alea = h
    })(Ue, typeof ye == "object" && ye, typeof define == "function" && define)
});

// --- Wrapper (Be) ---
var Be = V((Ne, de) => {
    (function (t, a, e) {
        var i = 256, s = 6, h = 52, n = "random", o = Math.pow(i, s), l = Math.pow(2, h), d = l * 2, r = i - 1, c;
        function p(g, $, E) {
            var b = [];
            $ = $ == !0 ? { entropy: !0 } : $ || {};
            var m = w(k($.entropy ? [g, A(a)] : g ?? y(), 3), b), v = new u(b), x = function () {
                for (var S = v.g(s), P = o, R = 0; S < l;) S = (S + R) * i, P *= i, R = v.g(1);
                for (; S >= d;) S /= 2, P /= 2, R >>>= 1;
                return (S + R) / P
            };
            return x.int32 = function () { return v.g(4) | 0 }, x.quick = function () { return v.g(4) / 4294967296 }, x.double = x, w(A(v.S), a), ($.pass || E || function (S, P, R, I) {
                return I && (I.S && f(I, v), S.state = function () { return f(v, {}) }), R ? (e[n] = S, P) : S
            })(x, m, "global" in $ ? $.global : this == e, $.state)
        }
        function u(g) {
            var $, E = g.length, b = this, m = 0, v = b.i = b.j = 0, x = b.S = [];
            for (E || (g = [E++]); m < i;) x[m] = m++;
            for (m = 0; m < i; m++) x[m] = x[v = r & v + g[m % E] + ($ = x[m])], x[v] = $;
            (b.g = function (S) {
                for (var P, R = 0, I = b.i, T = b.j, W = b.S; S--;) P = W[I = r & I + 1], R = R * i + W[r & (W[I] = W[T = r & T + P]) + (W[T] = P)];
                return b.i = I, b.j = T, R
            })(i)
        }
        function f(g, $) { return $.i = g.i, $.j = g.j, $.S = g.S.slice(), $ }
        function k(g, $) {
            var E = [], b = typeof g, m;
            if ($ && b == "object")
                for (m in g) try { E.push(k(g[m], $ - 1)) } catch { }
            return E.length ? E : b == "string" ? g : g + "\0"
        }
        function w(g, $) {
            for (var E = g + "", b, m = 0; m < E.length;) $[r & m] = r & (b ^= $[r & m] * 19) + E.charCodeAt(m++);
            return A($)
        }
        function y() {
            try {
                var g;
                return c && (g = c.randomBytes) ? g = g(i) : (g = new Uint8Array(i), (t.crypto || t.msCrypto).getRandomValues(g)), A(g)
            } catch {
                var $ = t.navigator, E = $ && $.plugins;
                return [+new Date, t, E, t.screen, A(a)]
            }
        }
        function A(g) { return String.fromCharCode.apply(0, g) }
        // Removed `w(e.random(), a)` to avoid global Math.random mutation/dependency issue in node

        if (typeof de == "object" && de.exports) {
            de.exports = p;
            try { c = require('crypto') } catch { }
        } else typeof define == "function" && define.amd ? define(function () { return p }) : e["seed" + n] = p
    })(typeof self < "u" ? self : Ne, [], Math)
});

// --- Init Logic ---
var io = Pe();
var Q = Be();
Q.alea = io;
var init = Q; // init is basically the exports of Be, but with alea attached? 
// No, looking at M: var Q=Be(); Q.alea=io; ze.exports=Q;
// And st=z(M(),1); 
// init corresponds to st.default.
// So init is Q

async function K(t) { let e = new TextEncoder().encode(t), i = await crypto.subtle.digest("SHA-256", e); return Array.from(new Uint8Array(i)).map(n => n.toString(16).padStart(2, "0")).join("") }

async function solve() {
    const email = "24f2002015@ds.study.iitm.ac.in";
    let e = "q-github-pages-json-api";

    // Seed PRNG
    // in code: s=(0,st.default)(`${t.email}#${e}`)
    // init is st.default
    // The library uses alea if available?
    // Be uses `$.entropy`.

    // Wait, `Be` uses `alea` if we pass it? 
    // The library logic in `Be` seems to detect available PRNGs or use defaults.
    // Actually, `M` function attaches `alea` to `Q`. 
    // Does `Q` (returned by `Be`) use `alea` automatically?
    // `Be` code: `function p(g, $, E) { ... }`
    // It doesn't seem to explicitly reference `alea` unless passed in options or global.
    // However, `Q.alea = io` sets it on the function object `p`.

    // Let's assume the exam uses the default behavior.
    // But `alea` is attached. 
    // Let's trying running it.

    let s = init(`${email}#${e}`, { entropy: false }); // try default

    // Actually, let's look at `Be` again.
    // `var m = w(k($.entropy ? [g, A(a)] : g ?? y(), 3), b)`
    // It mixes the seed `g` into `b`.
    // Then `v = new u(b)` (ARC4-like generator).
    // The PRNG is NOT Alea by default?
    // Wait, `M` attaches `alea`.

    // Let's check `st` usage in `To`: `s=(0,st.default)(...)`
    // It just calls the function.

    let h = (await K(`${email}:gh-json-api`)).slice(0, 8);
    let n = ["electronics", "clothing", "books", "home", "sports"], o = ["Premium", "Basic", "Pro", "Elite", "Standard"];
    let l = 15 + Math.floor(s() * 10), d = [];
    for (let w = 0; w < l; w++)d.push({ id: `prod-${h}-${String(w + 1).padStart(3, "0")}`, name: `${o[Math.floor(s() * o.length)]} Item ${w + 1}`, category: n[Math.floor(s() * n.length)], price: Math.round((10 + s() * 490) * 100) / 100, stock: Math.floor(s() * 200), rating: Math.round((1 + s() * 4) * 10) / 10 });

    let aggregations = {};
    for (let cat of n) {
        let b = d.filter(x => x.category === cat);
        let count = b.length;
        let inventoryValue = b.reduce((x, S) => x + S.price * S.stock, 0);
        inventoryValue = Math.round(inventoryValue * 100) / 100;
        aggregations[cat] = { count, inventoryValue };
    }

    let jsonOutput = {
        metadata: { email: email, version: h },
        products: d,
        aggregations: aggregations
    };

    console.log(JSON.stringify(jsonOutput, null, 2));
}

solve();
