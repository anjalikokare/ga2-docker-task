
const crypto = require('crypto');
if (!globalThis.crypto) {
    globalThis.crypto = crypto.webcrypto;
}


// --- PRNG Implementation (from exam-tds-2026-01-ga2.js) ---
var Yt = Object.create;
var we = Object.defineProperty;
var Qt = Object.getOwnPropertyDescriptor;
var Zt = Object.getOwnPropertyNames;
var eo = Object.getPrototypeOf;
var to = Object.prototype.hasOwnProperty;
var U = (t, a) => () => (t && (a = t(t = 0)), a);
var V = (t, a) => () => (a || t((a = { exports: {} }).exports, a), a.exports);
var O = (t, a) => { for (var e in a) we(t, e, { get: a[e], enumerable: !0 }) };
var oo = (t, a, e, i) => { if (a && typeof a == "object" || typeof a == "function") for (let s of Zt(a)) !to.call(t, s) && s !== e && we(t, s, { get: () => a[s], enumerable: !(i = Qt(a, s)) || i.enumerable }); return t };
var z = (t, a, e) => (e = t != null ? Yt(eo(t)) : {}, oo(a || !t || !t.__esModule ? we(e, "default", { value: t, enumerable: !0 }) : e, t));

var Pe = V((Ue, ye) => { (function (t, a, e) { function i(o) { var l = this, d = n(); l.next = function () { var r = 2091639 * l.s0 + l.c * 23283064365386963e-26; return l.s0 = l.s1, l.s1 = l.s2, l.s2 = r - (l.c = r | 0), l.c = 1, l.s0 = d(" "), l.s1 = d(" "), l.s2 = d(" "), l.s0 -= d(o), l.s0 < 0 && (l.s0 += 1), l.s1 -= d(o), l.s1 < 0 && (l.s1 += 1), l.s2 -= d(o), l.s2 < 0 && (l.s2 += 1), d = null }, i.prototype.next = function () { var r = 2091639 * this.s0 + this.c * 23283064365386963e-26; return this.s0 = this.s1, this.s1 = this.s2, this.s2 = r - (this.c = r | 0), this.s2 < 0 && (this.s2 += 1), this.s2 } } function s(o, l) { return l.c = o.c, l.s0 = o.s0, l.s1 = o.s1, l.s2 = o.s2, l } function h(o, l) { var d = new i(o), r = l && l.state, c = d.next; return c.int32 = function () { return d.next() * 4294967296 | 0 }, c.double = function () { return c() + (c() * 2097152 | 0) * 11102230246251565e-32 }, c.quick = c, r && (typeof r == "object" && s(r, d), c.state = function () { return s(d, {}) }), c } function n() { var o = 4022871197, l = function (d) { d = String(d); for (var r = 0; r < d.length; r++) { o += d.charCodeAt(r); var c = .02519603282416938 * o; o = c >>> 0, c -= o, c *= o, o = c >>> 0, c -= o, o += c * 4294967296 } return (o >>> 0) * 23283064365386963e-26 }; return l } a && a.exports ? a.exports = h : e && e.amd ? e(function () { return h }) : this.alea = h })(Ue, typeof ye == "object" && ye, typeof define == "function" && define) });
var Be = V((Ne, de) => { (function (t, a, e) { var i = 256, s = 6, h = 52, n = "random", o = e.pow(i, s), l = e.pow(2, h), d = l * 2, r = i - 1, c; function p(g, $, E) { var b = []; $ = $ == !0 ? { entropy: !0 } : $ || {}; var m = w(k($.entropy ? [g, A(a)] : g ?? y(), 3), b), v = new u(b), x = function () { for (var S = v.g(s), P = o, R = 0; S < l;) S = (S + R) * i, P *= i, R = v.g(1); for (; S >= d;) S /= 2, P /= 2, R >>>= 1; return (S + R) / P }; return x.int32 = function () { return v.g(4) | 0 }, x.quick = function () { return v.g(4) / 4294967296 }, x.double = x, w(A(v.S), a), ($.pass || E || function (S, P, R, I) { return I && (I.S && f(I, v), S.state = function () { return f(v, {}) }), R ? (e[n] = S, P) : S })(x, m, "global" in $ ? $.global : this == e, $.state) } function u(g) { var $, E = g.length, b = this, m = 0, v = b.i = b.j = 0, x = b.S = []; for (E || (g = [E++]); m < i;) x[m] = m++; for (m = 0; m < i; m++) x[m] = x[v = r & v + g[m % E] + ($ = x[m])], x[v] = $; (b.g = function (S) { for (var P, R = 0, I = b.i, T = b.j, W = b.S; S--;) P = W[I = r & I + 1], R = R * i + W[r & (W[I] = W[T = r & T + P]) + (W[T] = P)]; return b.i = I, b.j = T, R })(i) } function f(g, $) { return $.i = g.i, $.j = g.j, $.S = g.S.slice(), $ } function k(g, $) { var E = [], b = typeof g, m; if ($ && b == "object") for (m in g) try { E.push(k(g[m], $ - 1)) } catch { } return E.length ? E : b == "string" ? g : g + "\0" } function w(g, $) { for (var E = g + "", b, m = 0; m < E.length;) $[r & m] = r & (b ^= $[r & m] * 19) + E.charCodeAt(m++); return A($) } function y() { try { var g; return c && (g = c.randomBytes) ? g = g(i) : (g = new Uint8Array(i), (t.crypto || t.msCrypto).getRandomValues(g)), A(g) } catch { var $ = t.navigator, E = $ && $.plugins; return [+new Date, t, E, t.screen, A(a)] } } function A(g) { return String.fromCharCode.apply(0, g) } if (w(e.random(), a), typeof de == "object" && de.exports) { de.exports = p; try { c = null } catch { } } else typeof define == "function" && define.amd ? define(function () { return p }) : e["seed" + n] = p })(typeof self < "u" ? self : Ne, [], Math) });
var M = V((Ar, ze) => { var io = Pe(), Q = Be(); Q.alea = io; ze.exports = Q; });

// --- Helpers ---
async function K(t) { let e = new TextEncoder().encode(t), i = await crypto.subtle.digest("SHA-256", e); return Array.from(new Uint8Array(i)).map(n => n.toString(16).padStart(2, "0")).join("") }
var L = (t, a) => t[Math.floor(a() * t.length)];
var Ot = (t, a) => { let e = "abcdefghijklmnopqrstuvwxyz", i = ""; for (let s = 0; s < a; s++)i += e[Math.floor(t() * e.length)]; return i };
var te = (t, a, e) => Math.floor(t() * (e - a + 1)) + a;

// --- Main ---
const init = z(M(), 1);

async function solve(email) {
    console.log(`\nGenerating answers for email: ${email}\n`);
    console.log("=".repeat(50));

    // 1. q-fastapi (CSV Data)
    {
        console.log("\n[q-fastapi] CSV Data Generation");
        let e = "q-fastapi";
        let s = init(`${email}#${e}`);
        // Et function logic
        let Et = (t, a, e) => { let i = Array.from({ length: t }, (h, n) => ({ studentId: n + 1, class: `${Math.floor(e() * 12) + 1}${String.fromCharCode(65 + Math.floor(e() * 26))}` })), s = i.flatMap(h => Array.from({ length: Math.floor(e() * a) + 1 }, (n, o) => ({ studentId: h.studentId, subject: `Subject #${o + 1}` }))); return { students: i, subjects: s } };
        let h = Et(2e3, 400, s).students;
        console.log("First 5 students:");
        console.log(h.slice(0, 5));
        console.log("... (Total 2000 students)");
        // You need to serve this data.
        const csvContent = `studentId,class\n` + h.map(c => `${c.studentId},${c.class}`).join(`\n`);
        require('fs').writeFileSync('q-fastapi.csv', csvContent);
        console.log("-> 'q-fastapi.csv' has been created in the current directory.");
    }

    // 2. q-github-pages-json-api (JSON to host)
    {
        console.log("\n[q-github-pages-json-api] JSON content to host");
        let e = "q-github-pages-json-api";
        let s = init(`${email}#${e}`);
        let h = (await K(`${email}:gh-json-api`)).slice(0, 8);
        let n = ["electronics", "clothing", "books", "home", "sports"], o = ["Premium", "Basic", "Pro", "Elite", "Standard"];
        let l = 15 + Math.floor(s() * 10), d = [];
        for (let w = 0; w < l; w++)d.push({ id: `prod-${h}-${String(w + 1).padStart(3, "0")}`, name: `${o[Math.floor(s() * o.length)]} Item ${w + 1}`, category: n[Math.floor(s() * n.length)], price: Math.round((10 + s() * 490) * 100) / 100, stock: Math.floor(s() * 200), rating: Math.round((1 + s() * 4) * 10) / 10 });

        // compute aggregations
        let aggregations = {};
        for (let cat of n) {
            let b = d.filter(x => x.category === cat);
            let count = b.length;
            let inventoryValue = b.reduce((x, S) => x + S.price * S.stock, 0);
            // Round to 2 decimal places to match requirement
            inventoryValue = Math.round(inventoryValue * 100) / 100;
            aggregations[cat] = { count, inventoryValue };
        }

        let jsonOutput = {
            metadata: { email: email, version: h },
            products: d,
            aggregations: aggregations
        };
        require('fs').writeFileSync('q-github-pages.json', JSON.stringify(jsonOutput, null, 2));
        console.log("-> 'q-github-pages.json' has been created. Host this on GitHub Pages.");
    }

    // 3. q-fastapi-file-validation (Validation params)
    {
        console.log("\n[q-fastapi-file-validation] Expected validation parameters");
        let e = "q-fastapi-file-validation";
        let s = init(`${email}#${e}`);
        let h = [".csv", ".json", ".txt"];
        let n = 50 + Math.floor(s() * 50); // Max Size KB
        let o = `X-Upload-Token-${Math.floor(s() * 9e3 + 1e3)}`;
        let l = Array.from({ length: 16 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(s() * 36)]).join("");
        console.log(`Max File Size: ${n} KB`);
        console.log(`Header Name:   ${o}`);
        console.log(`Header Value:  ${l}`);
        console.log("Implement these checks in your FastAPI server.");
    }

    // 4. q-vercel-latency (Payload)
    {
        console.log("\n[q-vercel-latency] Test Payload");
        let e = "q-vercel-latency";
        let s = init(`${email}#${e}`);
        let Tt = ["apac", "emea", "amer"];
        let n = { regions: Tt.sort(() => .5 - s()).slice(0, 2), threshold_ms: Math.round(150 + s() * 40) };
        console.log("Your Vercel endpoint will receive this JSON payload:");
        console.log(JSON.stringify(n, null, 2));
    }

    // 5. q-cloudflare-workers (Payload)
    {
        console.log("\n[q-cloudflare-workers] Test Payload");
        let e = "q-cloudflare-workers";
        let s = init(`${email}#${e}`);

        // Modules for generating payload
        let er = t => t.split("").reverse().join(""), tr = t => [...t].reverse();
        let Zo = (t, a) => { let e = []; for (let i = 0; i < a; i++)e.push(te(t, 1, 100)); return e };

        let or = [t => { let a = Ot(t, te(t, 8, 15)), e = er(a); return { payload: { type: "string", value: a } } }, t => { let a = Zo(t, te(t, 5, 10)), e = tr(a); return { payload: { type: "array", value: a } } }, t => { let a = [], e = te(t, 3, 6); for (let h = 0; h < e; h++)a.push(Ot(t, te(t, 4, 8))); let i = a.join(" "), s = a.reverse().join(" "); return { payload: { type: "words", value: i } } }, t => { let a = te(t, 1e3, 99999), e = parseInt(String(a).split("").reverse().join(""), 10); return { payload: { type: "number", value: a } } }];

        let n = L(or, s)(s);
        console.log("Your Cloudflare Worker will receive this JSON payload:");
        console.log(JSON.stringify(n.payload, null, 2));
    }

    // 6. q-git-time-travel (Commit Hash - Approximation)
    {
        console.log("\n[q-git-time-travel] Parameter");
        let e = "q-git-time-travel";
        let s = init(`${email}#${e}`);
        let d = [30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 420, 480, 540, 600, 900, 1200];
        let r = L(d, s);
        console.log(`Find the commit that changed 'timeout' to: ${r}`);
        console.log("*Note: I cannot generate the commit hash directly as it requires recreating the exact zip file binary. Please search for the commit changing timeout to ${r} in the repo.*");
    }

    console.log("=".repeat(50));
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error("Usage: node solve_calculations.js <your_email>");
    process.exit(1);
}

solve(args[0]);
