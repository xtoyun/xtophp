"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function PolygonFactory(t) {
    this.width = 200, this.height = 113, this.rowCount = t.rowCount || 5, this.colCount = t.colCount || 4, this.gutterX = 100, this.gutterY = 120, this.startX = random(-100, 0), this.leftX = -200, this.objects = [], this.container = t.container
}
function random(t, e) {
    return t + (e - t) * Math.random()
}
function slideScene() {
    var t = $(".line-boxes"),
        e = $("#iphone6 .scene-viewes"),
        i = $(".hero-scene-text"),
        n = $(".scene-slider-wrap .iphone-hand-bg"),
        r = $("#iphone6"),
        o = $("#iphone6 .topbar"),
        s = $("#iphone6 .camera"),
        a = $("#iphone6 .speaker"),
        l = $("#iphone6 .speaker-before"),
        u = $("#iphone6 .home"),
        c = new TimelineMax({
            yoyo: !1,
            repeat: -1
        });
    c.add([TweenLite.to(t, 1, {
        x: "-614",
        ease: Power3.easeInOut
    }), TweenLite.to(e, 1, {
        x: "-166",
        ease: Power3.easeInOut
    }), TweenLite.to(i, 1, {
        y: "-148",
        ease: Power3.easeInOut
    })]
    , "+=2"), c.add([TweenLite.to(t, 1, {
        x: "-952",
        ease: Power3.easeInOut
    }), TweenLite.to(e, 1, {
        x: "-332",
        ease: Power3.easeInOut
    }), TweenLite.to(i, 1, {
        y: "-293",
        ease: Power3.easeInOut
    }), TweenLite.to(r, 1, {
        width: "423",
        height: "327",
        top: "18",
        left: "-106",
        padding: "34px 0 20px 0",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        ease: Power3.easeInOut
    }), TweenLite.to(o, 1, {
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px"
    }), TweenLite.to(l, 1, {
        top: "13",
        left: "5%",
        width: "12px",
        height: "12px",
        backgroundColor: "rgba(216,216,216,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(a, 1, {
        top: "13",
        left: "9%",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "rgba(216,216,216,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(s, 1, {
        top: "13",
        left: "13%",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "rgba(216,216,216,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(n, .8, {
        scale: .9,
        opacity: 0
    }), TweenLite.to(u, .8, {
        scale: .5,
        opacity: 0
    })]
    , "+=2"), c.add([TweenLite.to(t, 1, {
        x: "-1230",
        ease: Power3.easeInOut
    }), TweenLite.to(e, 1, {
        x: "-756",
        ease: Power3.easeInOut
    }), TweenLite.to(i, 1, {
        y: "-433",
        ease: Power3.easeInOut
    }), TweenLite.to(i, 1, {
        y: "-573",
        ease: Power3.easeInOut
    }), TweenLite.to(r, 1, {
        width: "182",
        height: "380",
        left: "44",
        top: "8",
        borderRadius: "25px",
        padding: "44px 8px 40px 8px",
        backgroundColor: "#fcfcfc",
        ease: Power3.easeInOut
    }), TweenLite.to(o, 1, {
        backgroundColor: "#fcfcfc",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px"
    }), TweenLite.to(l, 1, {
        top: "18",
        left: "33%",
        width: "6px",
        height: "6px",
        backgroundColor: "rgba(39,38,38,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(a, 1, {
        top: "20",
        left: "50%",
        width: "28px",
        height: "3px",
        borderRadius: "4px",
        backgroundColor: "rgba(29,28,28,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(s, 1, {
        top: "8",
        left: "50%",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        backgroundColor: "rgba(29,28,28,1)",
        ease: Power3.easeInOut
    }), TweenLite.to(u, 1.7, {
        scale: 1,
        opacity: 1
    })]
    , "+=2"), c.add([TweenLite.to(t, 1, {
        x: "-1420",
        ease: Power3.easeInOut
    }), TweenLite.to(e, 1, {
        x: "-922",
        ease: Power3.easeInOut
    })]
    , "+=2"), c.to(n, .5, {
        scale: 1,
        opacity: 1
    }
    , "-=1.2"), c.timeScale(1)
}
function resizeFrame() {
    var t = $(".line-box-wrap").width(),
        e = $(".line-boxes"),
        i = 295,
        n = 246,
        r = Math.ceil(t / 2),
        o = i - r,
        s = -(n + o);
    TweenLite.to(e, .1, {
        x: s,
        ease: Power3.easeInOut
    }), console.log("currentLeftOfLineBox:", s)
}
function slideViewbox() {
    var t = $("#pingerOverview .views"),
        e = new TimelineMax({
            yoyo: !1,
            repeat: -1
        });
    e.to(t, 1, {
        x: "-25%",
        ease: Power3.easeInOut
    }, 3).to(t, 1, {
        x: "-50%",
        ease: Power3.easeInOut
    }, 8).to(t, 1, {
        x: "-75%",
        ease: Power3.easeInOut
    }, 13)
}
function stickyPricePlan() {
    if ($(window).width() > 760) {
        var t = new ScrollMagic.Controller;
        new ScrollMagic.Scene({
            triggerElement: "#pinned-trigger-pricePlan",
            triggerHook: 0,
            duration: 0
        }).setClassToggle("body", "price-plan-stacky").setPin("#pinned-element-pricePlan").addTo(t)
    }
}
function DataSelector(t) {
    this.data = products, this.selectedData = this.data
}!
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !! t && "length" in t && t.length,
                i = ot.type(t);
            return "function" !== i && !ot.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        function n(t, e, i) {
            if (ot.isFunction(e)) return ot.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (mt.test(e)) return ot.filter(e, t, i);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function(t) {
                return J.call(e, t) > -1 !== i
            })
        }
        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        function o(t) {
            var e = {};
            return ot.each(t.match(wt) || [], function(t, i) {
                e[i] = !0
            }), e
        }
        function s() {
            Q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
        }
        function a() {
            this.expando = ot.expando + a.uid++
        }
        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace($t, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Pt.test(i) ? ot.parseJSON(i) : i)
                } catch (r) {}
                St.set(t, e, i)
            } else i = void 0;
            return i
        }
        function u(t, e, i, n) {
            var r, o = 1,
                s = 20,
                a = n ?
                    function() {
                        return n.cur()
                    } : function() {
                    return ot.css(t, e, "")
                }, l = a(), u = i && i[3] || (ot.cssNumber[e] ? "" : "px"), c = (ot.cssNumber[e] || "px" !== u && +l) && At.exec(ot.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], i = i || [], c = +l || 1;
                do o = o || ".5", c /= o, ot.style(t, e, c + u);
                while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
        }
        function c(t, e) {
            var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], i) : i
        }
        function h(t, e) {
            for (var i = 0, n = t.length; i < n; i++) kt.set(t[i], "globalEval", !e || kt.get(e[i], "globalEval"))
        }
        function d(t, e, i, n, r) {
            for (var o, s, a, l, u, d, f = e.createDocumentFragment(), p = [], m = 0, g = t.length; m < g; m++) if (o = t[m], o || 0 === o) if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [o] : o);
            else if (Mt.test(o)) {
                for (s = s || f.appendChild(e.createElement("div")), a = (Rt.exec(o) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) s = s.lastChild;
                ot.merge(p, s.childNodes), s = f.firstChild, s.textContent = ""
            } else p.push(e.createTextNode(o));
            for (f.textContent = "", m = 0; o = p[m++];) if (n && ot.inArray(o, n) > -1) r && r.push(o);
            else if (u = ot.contains(o.ownerDocument, o), s = c(f.appendChild(o), "script"), u && h(s), i) for (d = 0; o = s[d++];) Dt.test(o.type || "") && i.push(o);
            return f
        }
        function f() {
            return !0
        }
        function p() {
            return !1
        }
        function m() {
            try {
                return Q.activeElement
            } catch (t) {}
        }
        function g(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) g(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = p;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) {
                return ot().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function() {
                ot.event.add(this, e, r, n, i)
            })
        }
        function v(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }
        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }
        function _(t) {
            var e = Wt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }
        function b(t, e) {
            var i, n, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if (kt.hasData(t) && (o = kt.access(t), s = kt.set(e, o), u = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in u) for (i = 0, n = u[r].length; i < n; i++) ot.event.add(e, r, u[r][i])
                }
                St.hasData(t) && (a = St.access(t), l = ot.extend({}, a), St.set(e, l))
            }
        }
        function w(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && zt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
        function x(t, e, i, n) {
            e = Z.apply([], e);
            var r, o, s, a, l, u, h = 0,
                f = t.length,
                p = f - 1,
                m = e[0],
                g = ot.isFunction(m);
            if (g || f > 1 && "string" == typeof m && !nt.checkClone && Bt.test(m)) return t.each(function(r) {
                var o = t.eq(r);
                g && (e[0] = m.call(this, r, o.html())), x(o, e, i, n)
            });
            if (f && (r = d(e, t[0].ownerDocument, !1, t, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
                for (s = ot.map(c(r, "script"), y), a = s.length; h < f; h++) l = r, h !== p && (l = ot.clone(l, !0, !0), a && ot.merge(s, c(l, "script"))), i.call(t[h], l, h);
                if (a) for (u = s[s.length - 1].ownerDocument, ot.map(s, _), h = 0; h < a; h++) l = s[h], Dt.test(l.type || "") && !kt.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Vt, "")))
            }
            return t
        }
        function T(t, e, i) {
            for (var n, r = e ? ot.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || ot.cleanData(c(n)), n.parentNode && (i && ot.contains(n.ownerDocument, n) && h(c(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        function C(t, e) {
            var i = ot(e.createElement(t)).appendTo(e.body),
                n = ot.css(i[0], "display");
            return i.detach(), n
        }
        function k(t) {
            var e = Q,
                i = Xt[t];
            return i || (i = C(t, e), "none" !== i && i || (Yt = (Yt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Yt[0].contentDocument, e.write(), e.close(), i = C(t, e), Yt.detach()), Xt[t] = i), i
        }
        function S(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || Gt(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), i && !nt.pixelMarginRight() && Qt.test(s) && Ut.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }
        function P(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function $(t) {
            if (t in ne) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;) if (t = ie[i] + e, t in ne) return t
        }
        function O(t, e, i) {
            var n = At.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }
        function A(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)"margin" === i && (s += ot.css(t, i + Ft[o], !0, r)), n ? ("content" === i && (s -= ot.css(t, "padding" + Ft[o], !0, r)), "margin" !== i && (s -= ot.css(t, "border" + Ft[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Ft[o], !0, r), "padding" !== i && (s += ot.css(t, "border" + Ft[o] + "Width", !0, r)));
            return s
        }
        function F(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Gt(t),
                s = "border-box" === ot.css(t, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = S(t, e, o), (r < 0 || null == r) && (r = t.style[e]), Qt.test(r)) return r;
                n = s && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + A(t, e, i || (s ? "border" : "content"), n, o) + "px"
        }
        function E(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; s < a; s++) n = t[s], n.style && (o[s] = kt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (o[s] = kt.access(n, "olddisplay", k(n.nodeName)))) : (r = Et(n), "none" === i && r || kt.set(n, "olddisplay", r ? i : ot.css(n, "display"))));
            for (s = 0; s < a; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }
        function z(t, e, i, n, r) {
            return new z.prototype.init(t, e, i, n, r)
        }
        function R() {
            return t.setTimeout(function() {
                re = void 0
            }), re = ot.now()
        }
        function D(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Ft[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }
        function L(t, e, i) {
            for (var n, r = (j.tweeners[e] || []).concat(j.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (n = r[o].call(i, e, t)) return n
        }
        function M(t, e, i) {
            var n, r, o, s, a, l, u, c, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && Et(t),
                m = kt.get(t, "fxshow");
            i.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = ot.css(t, "display"), c = "none" === u ? kt.get(t, "olddisplay") || k(t.nodeName) : u, "inline" === c && "none" === ot.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            }));
            for (n in e) if (r = e[n], se.exec(r)) {
                if (delete e[n], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    p = !0
                }
                d[n] = m && m[n] || ot.style(t, n)
            } else u = void 0;
            if (ot.isEmptyObject(d))"inline" === ("none" === u ? k(t.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = kt.access(t, "fxshow", {}), o && (m.hidden = !p), p ? ot(t).show() : h.done(function() {
                    ot(t).hide()
                }), h.done(function() {
                    var e;
                    kt.remove(t, "fxshow");
                    for (e in d) ot.style(t, e, d[e])
                });
                for (n in d) s = L(p ? m[n] : 0, n, h), n in m || (m[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }
        function I(t, e) {
            var i, n, r, o, s;
            for (i in t) if (n = ot.camelCase(i), r = e[n], o = t[i], ot.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = ot.cssHooks[n], s && "expand" in s) {
                o = s.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = r)
            } else e[n] = r
        }
        function j(t, e, i) {
            var n, r, o = 0,
                s = j.prefilters.length,
                a = ot.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = re || R(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, i]), o < 1 && l ? i : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {},
                        easing: ot.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: re || R(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = ot.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i < n; i++) u.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (I(c, u.opts.specialEasing); o < s; o++) if (n = j.prefilters[o].call(u, t, c, u.opts)) return ot.isFunction(n.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(n.stop, n)), n;
            return ot.map(c, L, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function N(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function q(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(wt) || [];
                if (ot.isFunction(i)) for (; n = o[r++];)"+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }
        function H(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, ot.each(t[a] || [], function(t, a) {
                    var u = a(e, i, n);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = t === Se;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }
        function B(t, e) {
            var i, n, r = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }
        function W(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n) for (r in a) if (a[r] && a[r].test(n)) {
                l.unshift(r);
                break
            }
            if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), i[o]
        }
        function V(t, e, i, n) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s) for (r in u) if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0) if (s && t["throws"]) e = s(e);
                else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        function Y(t, e, i, n) {
            var r;
            if (ot.isArray(e)) ot.each(e, function(e, r) {
                i || Ae.test(t) ? n(t, r) : Y(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== ot.type(e)) n(t, e);
            else for (r in e) Y(t + "[" + r + "]", e[r], i, n)
        }
        function X(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var U = [],
            Q = t.document,
            G = U.slice,
            Z = U.concat,
            K = U.push,
            J = U.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            rt = "2.2.4",
            ot = function(t, e) {
                return new ot.fn.init(t, e)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ut = function(t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: rt,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return ot.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: U.sort,
            splice: U.splice
        }, ot.extend = ot.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = s[e], n = t[e], s !== n && (u && n && (ot.isPlainObject(n) || (r = ot.isArray(n))) ? (r ? (r = !1, o = i && ot.isArray(i) ? i : []) : o = i && ot.isPlainObject(i) ? i : {}, s[e] = ot.extend(u, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, ot.extend({
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || it.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(at, "ms-").replace(lt, ut)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, r = 0;
                if (i(t)) for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++);
                else for (r in t) if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ot.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : J.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n, r = [], o = 0, s = t.length, a = !i; o < s; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, n) {
                var r, o, s = 0,
                    a = [];
                if (i(t)) for (r = t.length; s < r; s++) o = e(t[s], s, n), null != o && a.push(o);
                else for (s in t) o = e(t[s], s, n), null != o && a.push(o);
                return Z.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                if ("string" == typeof e && (i = t[e], e = t, t = i), ot.isFunction(t)) return n = G.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, r.guid = t.guid = t.guid || ot.guid++, r
            },
            now: Date.now,
            support: nt
        }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = U[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, u, h, f, p = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
                if (!n && ((e ? e.ownerDocument || e : N) !== E && F(e), e = e || E, R)) {
                    if (11 !== m && (u = vt.exec(t))) if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r))) return i;
                            if (s.id === r) return i.push(s), i
                        } else if (p && (s = p.getElementById(r)) && I(e, s) && s.id === r) return i.push(s), i
                    } else {
                        if (u[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(r)), i
                    }
                    if (w.qsa && !V[t + " "] && (!D || !D.test(t))) {
                        if (1 !== m) p = e, f = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(_t, "\\$&") : e.setAttribute("id", a = j), h = k(t), o = h.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + d(h[o]);
                            f = h.join(","), p = yt.test(t) && c(e.parentNode) || e
                        }
                        if (f) try {
                            return K.apply(i, p.querySelectorAll(f)), i
                        } catch (g) {} finally {
                            a === j && e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(at, "$1"), e, i, n)
            }
            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }
            function n(t) {
                return t[j] = !0, t
            }
            function r(t) {
                var e = E.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }
            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
            }
            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (n) return n;
                if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function u(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }
            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }
            function h() {}
            function d(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }
            function f(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = H++;
                return e.first ?
                    function(e, i, o) {
                        for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o)
                    } : function(e, i, s) {
                    var a, l, u, c = [q, o];
                    if (s) {
                        for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else for (; e = e[n];) if (1 === e.nodeType || r) {
                        if (u = e[j] || (e[j] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === o) return c[2] = a[2];
                        if (l[n] = c, c[2] = t(e, i, s)) return !0
                    }
                }
            }
            function p(t) {
                return t.length > 1 ?
                    function(e, i, n) {
                        for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
            }
            function m(t, i, n) {
                for (var r = 0, o = i.length; r < o; r++) e(t, i[r], n);
                return n
            }
            function g(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), u && e.push(a)));
                return s
            }
            function v(t, e, i, r, o, s) {
                return r && !r[j] && (r = v(r)), o && !o[j] && (o = v(o, s)), n(function(n, s, a, l) {
                    var u, c, h, d = [],
                        f = [],
                        p = s.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, d, t, a, l),
                        _ = i ? o || (n ? t : p || r) ? [] : s : y;
                    if (i && i(y, _, a, l), r) for (u = g(_, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[f[c]] = !(y[f[c]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
                                o(null, _ = [], u, l)
                            }
                            for (c = _.length; c--;)(h = _[c]) && (u = o ? tt(n, h) : d[c]) > -1 && (n[u] = !(s[u] = h))
                        }
                    } else _ = g(_ === s ? _.splice(p, _.length) : _), o ? o(null, s, _, l) : K.apply(s, _)
                })
            }
            function y(t) {
                for (var e, i, n, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), u = f(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, i, n) {
                    var r = !o && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r
                }]; a < r; a++) if (i = x.relative[t[a].type]) c = [f(p(c), i)];
                else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                        for (n = ++a; n < r && !x.relative[t[n].type]; n++);
                        return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), i, a < n && y(t.slice(a, n)), n < r && y(t = t.slice(n)), n < r && d(t))
                    }
                    c.push(i)
                }
                return p(c)
            }
            function _(t, i) {
                var r = i.length > 0,
                    o = t.length > 0,
                    s = function(n, s, a, l, u) {
                        var c, h, d, f = 0,
                            p = "0",
                            m = n && [],
                            v = [],
                            y = $,
                            _ = n || o && x.find.TAG("*", u),
                            b = q += null == y ? 1 : Math.random() || .1,
                            w = _.length;
                        for (u && ($ = s === E || s || u); p !== w && null != (c = _[p]); p++) {
                            if (o && c) {
                                for (h = 0, s || c.ownerDocument === E || (F(c), a = !R); d = t[h++];) if (d(c, s || E, a)) {
                                    l.push(c);
                                    break
                                }
                                u && (q = b)
                            }
                            r && ((c = !d && c) && f--, n && m.push(c))
                        }
                        if (f += p, r && p !== f) {
                            for (h = 0; d = i[h++];) d(m, v, s, a);
                            if (n) {
                                if (f > 0) for (; p--;) m[p] || v[p] || (v[p] = G.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), u && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                        }
                        return u && (q = b, $ = y), m
                    };
                return r ? n(s) : s
            }
            var b, w, x, T, C, k, S, P, $, O, A, F, E, z, R, D, L, M, I, j = "sizzle" + 1 * new Date,
                N = t.document,
                q = 0,
                H = 0,
                B = i(),
                W = i(),
                V = i(),
                Y = function(t, e) {
                    return t === e && (A = !0), 0
                },
                X = 1 << 31,
                U = {}.hasOwnProperty,
                Q = [],
                G = Q.pop,
                Z = Q.push,
                K = Q.push,
                J = Q.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ht = new RegExp(ot),
                dt = new RegExp("^" + nt + "$"),
                ft = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                _t = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                wt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                xt = function() {
                    F()
                };
            try {
                K.apply(Q = J.call(N.childNodes), N.childNodes), Q[N.childNodes.length].nodeType
            } catch (Tt) {
                K = {
                    apply: Q.length ?
                        function(t, e) {
                            Z.apply(t, J.call(e))
                        } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, F = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : N;
                return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, z = E.documentElement, R = !C(E), (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = gt.test(E.getElementsByClassName), w.getById = r(function(t) {
                    return z.appendChild(t).id = j, !E.getElementsByName || !E.getElementsByName(j).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ?
                    function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName &&
                    function(t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && R) return e.getElementsByClassName(t)
                    }, L = [], D = [], (w.qsa = gt.test(E.querySelectorAll)) && (r(function(t) {
                    z.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || D.push(".#.+[+~]")
                }), r(function(t) {
                    var e = E.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                })), (w.matchesSelector = gt.test(M = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), L.push("!=", ot)
                }), D = D.length && new RegExp(D.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(z.compareDocumentPosition), I = e || gt.test(z.contains) ?
                    function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, Y = e ?
                    function(t, e) {
                        if (t === e) return A = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === E || t.ownerDocument === N && I(N, t) ? -1 : e === E || e.ownerDocument === N && I(N, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !o) return t === E ? -1 : e === E ? 1 : r ? -1 : o ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                    if (r === o) return s(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? s(a[n], l[n]) : a[n] === N ? -1 : l[n] === N ? 1 : 0
                }, E) : E
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== E && F(t), i = i.replace(ct, "='$1']"), w.matchesSelector && R && !V[i + " "] && (!L || !L.test(i)) && (!D || !D.test(i))) try {
                    var n = M.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
                } catch (r) {}
                return e(i, E, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && F(t), I(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== E && F(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && U.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : w.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (A = !w.detectDuplicates, O = !w.sortStable && t.slice(0), t.sort(Y), A) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return O = null, t
            }, T = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else for (; e = t[n++];) i += T(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, wt).toLowerCase();
                        return "*" === t ?
                            function() {
                                return !0
                            } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ?
                            function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                            var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (d = g, h = d[j] || (d[j] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], _ = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (_ = f = 0) || p.pop();) if (1 === d.nodeType && ++_ && d === e) {
                                        c[t] = [q, f, _];
                                        break
                                    }
                                } else if (y && (d = e, h = d[j] || (d[j] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], _ = f), _ === !1) for (;
                                    (d = ++f && d && d[m] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && (h = d[j] || (d[j] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [q, _]), d !== e)););
                                return _ -= r, _ === n || _ % n === 0 && _ / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[j] ? o(i) : o.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = o(t, i), s = r.length; s--;) n = tt(t, r[s]), t[n] = !(e[n] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = S(t.replace(at, "$1"));
                        return r[j] ? n(function(t, e, i, n) {
                            for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(bt, wt), function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: n(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(), function(e) {
                            var i;
                            do
                                if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === z
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !! t.checked || "option" === e && !! t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: u(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: u(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: u(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = a(b);
            for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = l(b);
            return h.prototype = x.filters = x.pseudos, x.setFilters = new h, k = e.tokenize = function(t, i) {
                var n, r, o, s, a, l, u, c = W[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], u = x.preFilter; a;) {
                    n && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ut.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (s in x.filter)!(r = ft[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = k(t)), i = e.length; i--;) o = y(e[i]), o[j] ? n.push(o) : r.push(o);
                    o = V(t, _(r, n)), o.selector = t
                }
                return o
            }, P = e.select = function(t, e, i, n) {
                var r, o, s, a, l, u = "function" == typeof t && t,
                    h = !n && k(t = u.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && R && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e) return i;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);) if ((l = x.find[a]) && (n = l(s.matches[0].replace(bt, wt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = n.length && d(o), !t) return K.apply(i, n), i;
                        break
                    }
                }
                return (u || S(t, h))(n, e, !R, i, !e || yt.test(t) && c(e.parentNode) || e), i
            }, w.sortStable = j.split("").sort(Y).join("") === j, w.detectDuplicates = !! A, F(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, i) {
                var n;
                if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ht = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                     (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                    if (r && ot(t).is(i)) break;
                    n.push(t)
                }
                return n
            },
            dt = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            ft = ot.expr.match.needsContext,
            pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [n] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; e < i; e++) if (ot.contains(r[e], this)) return !0
                }));
                for (e = 0; e < i; e++) ot.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ft.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = ot.fn.init = function(t, e, i) {
                var n, r;
                if (!t) return this;
                if (i = i || gt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), pt.test(n[1]) && ot.isPlainObject(e)) for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        yt.prototype = ot.fn, gt = ot(Q);
        var _t = /^(?:parents|prev(?:Until|All))/,
            bt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            has: function(t) {
                var e = ot(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++) if (ot.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], s = ft.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                    o.push(i);
                    break
                }
                return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ht(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return ht(t, "parentNode", i)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return ht(t, "nextSibling")
            },
            prevAll: function(t) {
                return ht(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return ht(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return ht(t, "previousSibling", i)
            },
            siblings: function(t) {
                return dt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return dt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || ot.merge([], t.childNodes)
            }
        }, function(t, e) {
            ot.fn[t] = function(i, n) {
                var r = ot.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = ot.filter(n, r)), this.length > 1 && (bt[t] || ot.uniqueSort(r), _t.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var wt = /\S+/g;
        ot.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : ot.extend({}, t);
            var e, i, n, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (i && !e && (l = s.length - 1, a.push(i)), function n(e) {
                            ot.each(e, function(e, i) {
                                ot.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ot.type(i) && n(i)
                            })
                        }(arguments), i && !e && u()), this
                    },
                    remove: function() {
                        return ot.each(arguments, function(t, e) {
                            for (var i;
                                 (i = ot.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? ot.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], i || (s = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, ot.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ot.Deferred(function(i) {
                                ot.each(e, function(e, o) {
                                    var s = ot.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ot.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, ot.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    n[o[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    o = G.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    u = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); r < s; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, i, e)).done(u(r, n, o)).fail(l.reject) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var xt;
        ot.fn.ready = function(t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(Q, [ot]), ot.fn.triggerHandler && (ot(Q).triggerHandler("ready"), ot(Q).off("ready"))))
            }
        }), ot.ready.promise = function(e) {
            return xt || (xt = ot.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(ot.ready) : (Q.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), xt.promise(e)
        }, ot.ready.promise();
        var Tt = function(t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == i;
                if ("object" === ot.type(i)) {
                    r = !0;
                    for (a in i) Tt(t, e, a, i[a], !0, o, s)
                } else if (void 0 !== n && (r = !0, ot.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                        return u.call(ot(t), i)
                    })), e)) for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : u ? e.call(t) : l ? e(t[0], i) : o
            },
            Ct = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!Ct(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Ct(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, ot.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        ot.isArray(e) ? n = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? n = [e, r] : (n = r, n = n in o ? [n] : n.match(wt) || [])), i = n.length;
                        for (; i--;) delete o[n[i]]
                    }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ot.isEmptyObject(e)
            }
        };
        var kt = new a,
            St = new a,
            Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $t = /[A-Z]/g;
        ot.extend({
            hasData: function(t) {
                return St.hasData(t) || kt.hasData(t)
            },
            data: function(t, e, i) {
                return St.access(t, e, i)
            },
            removeData: function(t, e) {
                St.remove(t, e)
            },
            _data: function(t, e, i) {
                return kt.access(t, e, i)
            },
            _removeData: function(t, e) {
                kt.remove(t, e)
            }
        }), ot.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = St.get(o), 1 === o.nodeType && !kt.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = ot.camelCase(n.slice(5)), l(o, n, r[n])));
                        kt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    St.set(this, t)
                }) : Tt(this, function(e) {
                    var i, n;
                    if (o && void 0 === e) {
                        if (i = St.get(o, t) || St.get(o, t.replace($t, "-$&").toLowerCase()), void 0 !== i) return i;
                        if (n = ot.camelCase(t), i = St.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
                    } else n = ot.camelCase(t), this.each(function() {
                        var i = St.get(this, n);
                        St.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && St.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    St.remove(this, t)
                })
            }
        }), ot.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = kt.get(t, e), i && (!n || ot.isArray(i) ? n = kt.access(t, e, ot.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = ot.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = ot._queueHooks(t, e),
                    s = function() {
                        ot.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return kt.get(t, i) || kt.access(t, i, {
                        empty: ot.Callbacks("once memory").add(function() {
                            kt.remove(t, [e + "queue", i])
                        })
                    })
            }
        }), ot.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = ot.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = kt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            At = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"),
            Ft = ["Top", "Right", "Bottom", "Left"],
            Et = function(t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            zt = /^(?:checkbox|radio)$/i,
            Rt = /<([\w:-]+)/,
            Dt = /^$|\/(?:java|ecma)script/i,
            Lt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td;
        var Mt = /<|&#?\w+;/;
        !
            function() {
                var t = Q.createDocumentFragment(),
                    e = t.appendChild(Q.createElement("div")),
                    i = Q.createElement("input");
                i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
            }();
        var It = /^key/,
            jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Nt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, u, c, h, d, f, p, m, g = kt.get(t);
                if (g) for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = ot.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                    return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(wt) || [""], u = e.length; u--;) a = Nt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (h = ot.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = ot.event.special[f] || {}, c = ot.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && ot.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, p, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), ot.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, u, c, h, d, f, p, m, g = kt.hasData(t) && kt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(wt) || [""], u = e.length; u--;) if (a = Nt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = ot.event.special[f] || {}, f = (n ? h.delegateType : h.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ot.removeEvent(t, f, g.handle), delete l[f])
                    } else for (f in l) ot.event.remove(t, f + e[u], i, n, !0);
                    ot.isEmptyObject(l) && kt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = ot.event.fix(t);
                var e, i, n, r, o, s = [],
                    a = G.call(arguments),
                    l = (kt.get(this, "events") || {})[t.type] || [],
                    u = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0;
                         (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, i = 0;
                                                                          (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (n = [], i = 0; i < a; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), n[r] && n.push(o);
                    n.length && s.push({
                        elem: l,
                        handlers: n
                    })
                }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[ot.expando]) return t;
                var e, i, n, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = jt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== m() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === m() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && ot.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ot.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, ot.Event = function(t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            constructor: ot.Event,
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === n || ot.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), ot.fn.extend({
            on: function(t, e, i, n) {
                return g(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return g(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ot(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    ot.event.remove(this, t, i, e)
                })
            }
        });
        var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Ht = /<script|<style|<link/i,
            Bt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Wt = /^true\/(.*)/,
            Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
            htmlPrefilter: function(t) {
                return t.replace(qt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = ot.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (s = c(a), o = c(t), n = 0, r = o.length; n < r; n++) w(o[n], s[n]);
                if (e) if (i) for (o = o || c(t), s = s || c(a), n = 0, r = o.length; n < r; n++) b(o[n], s[n]);
                else b(t, a);
                return s = c(a, "script"), s.length > 0 && h(s, !l && c(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = ot.event.special, o = 0; void 0 !== (i = t[o]); o++) if (Ct(i)) {
                    if (e = i[kt.expando]) {
                        if (e.events) for (n in e.events) r[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, e.handle);
                        i[kt.expando] = void 0
                    }
                    i[St.expando] && (i[St.expando] = void 0)
                }
            }
        }), ot.fn.extend({
            domManip: x,
            detach: function(t) {
                return T(this, t, !0)
            },
            remove: function(t) {
                return T(this, t)
            },
            text: function(t) {
                return Tt(this, function(t) {
                    return void 0 === t ? ot.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return x(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return x(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return x(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return x(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ot.clone(this, t, e)
                })
            },
            html: function(t) {
                return Tt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ht.test(t) && !Lt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ot.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return x(this, arguments, function(e) {
                    var i = this.parentNode;
                    ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ot.fn[t] = function(t) {
                for (var i, n = [], r = ot(t), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), ot(r[s])[e](i), K.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Yt, Xt = {
                HTML: "block",
                BODY: "block"
            },
            Ut = /^margin/,
            Qt = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"),
            Gt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Zt = function(t, e, i, n) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = i.apply(t, n || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            Kt = Q.documentElement;
        !
            function() {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
                    var e = t.getComputedStyle(a);
                    i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(s)
                }
                var i, n, r, o, s = Q.createElement("div"),
                    a = Q.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(nt, {
                    pixelPosition: function() {
                        return e(), i
                    },
                    boxSizingReliable: function() {
                        return null == n && e(), n
                    },
                    pixelMarginRight: function() {
                        return null == n && e(), r
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(), o
                    },
                    reliableMarginRight: function() {
                        var e, i = a.appendChild(Q.createElement("div"));
                        return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(s), a.removeChild(i), e
                    }
                }))
            }();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ie = ["Webkit", "O", "Moz", "ms"],
            ne = Q.createElement("div").style;
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = S(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = ot.camelCase(e),
                        l = t.style;
                    return e = ot.cssProps[a] || (ot.cssProps[a] = $(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = At.exec(i)) && r[1] && (i = u(t, e, r), o = "number"), null != i && i === i && ("number" === o && (i += r && r[3] || (ot.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = $(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = S(t, e, n)), "normal" === r && e in ee && (r = ee[e]), "" === i || i ? (o = parseFloat(r), i === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function(t, e) {
            ot.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                        return F(t, e, n)
                    }) : F(t, e, n)
                },
                set: function(t, i, n) {
                    var r, o = n && Gt(t),
                        s = n && A(t, e, n, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                    return s && (r = At.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = ot.css(t, e)), O(t, i, s)
                }
            }
        }), ot.cssHooks.marginLeft = P(nt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(S(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }), ot.cssHooks.marginRight = P(nt.reliableMarginRight, function(t, e) {
            if (e) return Zt(t, {
                display: "inline-block"
            }, S, [t, "marginRight"])
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ot.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + Ft[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, Ut.test(t) || (ot.cssHooks[t + e].set = O)
        }), ot.fn.extend({
            css: function(t, e) {
                return Tt(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (ot.isArray(e)) {
                        for (n = Gt(t), r = e.length; s < r; s++) o[e[s]] = ot.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Et(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = z, z.prototype = {
            constructor: z,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ot.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = z.propHooks[this.prop];
                return t && t.get ? t.get(this) : z.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = z.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
            }
        }, z.prototype.init.prototype = z.prototype, z.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ot.fx = z.prototype.init, ot.fx.step = {};
        var re, oe, se = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        ot.Animation = ot.extend(j, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return u(i.elem, t, At.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], j.tweeners[i] = j.tweeners[i] || [], j.tweeners[i].unshift(e)
            },
            prefilters: [M],
            prefilter: function(t, e) {
                e ? j.prefilters.unshift(t) : j.prefilters.push(t)
            }
        }), ot.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: i || !i && e || ot.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !ot.isFunction(e) && e
            };
            return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ot.isFunction(n.old) && n.old.call(this), n.queue && ot.dequeue(this, n.queue)
            }, n
        }, ot.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Et).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = ot.isEmptyObject(t),
                    o = ot.speed(e, i, n),
                    s = function() {
                        var e = j(this, ot.extend({}, t), o);
                        (r || kt.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = ot.timers,
                        s = kt.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]);
                    else for (r in s) s[r] && s[r].stop && ae.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    !e && i || ot.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = kt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        o = ot.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(t, e) {
            var i = ot.fn[e];
            ot.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, r)
            }
        }), ot.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ot.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var t, e = 0,
                i = ot.timers;
            for (re = ot.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || ot.fx.stop(), re = void 0
        }, ot.fx.timer = function(t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            t.clearInterval(oe), oe = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, i) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var r = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(r)
                }
            })
        }, function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                i = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
        }();
        var le, ue = ot.expr.attrHandle;
        ot.fn.extend({
            attr: function(t, e) {
                return Tt(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : (n = ot.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(wt);
                if (o && 1 === t.nodeType) for (; i = o[r++];) n = ot.propFix[i] || i, ot.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), le = {
            set: function(t, e, i) {
                return e === !1 ? ot.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ue[e] || ot.find.attr;
            ue[e] = function(t, e, n) {
                var r, o;
                return n || (o = ue[e], ue[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, ue[e] = o), r
            }
        });
        var ce = /^(?:input|select|textarea|button)$/i,
            he = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(t, e) {
                return Tt(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ot.propFix[t] || t]
                })
            }
        }), ot.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        });
        var de = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, N(this)))
                });
                if ("string" == typeof t && t) for (e = t.match(wt) || []; i = this[l++];) if (r = N(i), n = 1 === i.nodeType && (" " + r + " ").replace(de, " ")) {
                    for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    a = ot.trim(n), r !== a && i.setAttribute("class", a)
                }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, N(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t) for (e = t.match(wt) || []; i = this[l++];) if (r = N(i), n = 1 === i.nodeType && (" " + r + " ").replace(de, " ")) {
                    for (s = 0; o = e[s++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                    a = ot.trim(n), r !== a && i.setAttribute("class", a)
                }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(i) {
                    ot(this).toggleClass(t.call(this, i, N(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i) for (n = 0, r = ot(this), o = t.match(wt) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = N(this), e && kt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : kt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + N(i) + " ").replace(de, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var fe = /\r/g,
            pe = /[\x20\t\r\n\f]+/g;
        ot.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0]; {
                    if (arguments.length) return n = ot.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? t.call(this, i, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(fe, "") : null == i ? "" : i)
                }
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : n.length, l = r < 0 ? a : o ? r : 0; l < a; l++) if (i = n[l], (i.selected || l === r) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ot.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ot(i).val(), o) return e;
                            s.push(e)
                        }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = ot.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = ot.inArray(ot.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(t, e) {
                    if (ot.isArray(e)) return t.checked = ot.inArray(ot(t).val(), e) > -1
                }
            }, nt.checkOn || (ot.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var me = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
            trigger: function(e, i, n, r) {
                var o, s, a, l, u, c, h, d = [n || Q],
                    f = it.call(e, "type") ? e.type : e,
                    p = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !me.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ot.makeArray(i, [e]), h = ot.event.special[f] || {}, r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!r && !h.noBubble && !ot.isWindow(n)) {
                        for (l = h.delegateType || f, me.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                        a === (n.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                         (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || f, c = (kt.get(s, "events") || {})[e.type] && kt.get(s, "handle"), c && c.apply(s, i), c = u && s[u], c && c.apply && Ct(s) && (e.result = c.apply(s, i), e.result === !1 && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !Ct(n) || u && ot.isFunction(n[f]) && !ot.isWindow(n) && (a = n[u], a && (n[u] = null), ot.event.triggered = f, n[f](), ot.event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = ot.extend(new ot.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                ot.event.trigger(n, null, e)
            }
        }), ot.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return ot.event.trigger(t, e, i, !0)
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ot.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), nt.focusin = "onfocusin" in t, nt.focusin || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                ot.event.simulate(e, t.target, ot.event.fix(t))
            };
            ot.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = kt.access(n, e);
                    r || n.addEventListener(t, i, !0), kt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = kt.access(n, e) - 1;
                    r ? kt.access(n, e, r) : (n.removeEventListener(t, i, !0), kt.remove(n, e))
                }
            }
        });
        var ge = t.location,
            ve = ot.now(),
            ye = /\?/;
        ot.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, ot.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (n) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), i
        };
        var _e = /#.*$/,
            be = /([?&])_=[^&]*/,
            we = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Te = /^(?:GET|HEAD)$/,
            Ce = /^\/\//,
            ke = {},
            Se = {},
            Pe = "*/".concat("*"),
            $e = Q.createElement("a");
        $e.href = ge.href, ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ge.href,
                type: "GET",
                isLocal: xe.test(ge.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Pe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? B(B(t, ot.ajaxSettings), e) : B(ot.ajaxSettings, t)
            },
            ajaxPrefilter: q(ke),
            ajaxTransport: q(Se),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var u, h, y, _, w, T = i;
                    2 !== b && (b = 2, l && t.clearTimeout(l), r = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (_ = W(d, x, n)), _ = V(d, _, x, u), u ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, h = _.data, y = _.error, u = !y)) : (y = T, !e && T || (T = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (i || T) + "", u ? m.resolveWith(f, [h, T, x]) : m.rejectWith(f, [x, T, y]), x.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, d, u ? h : y]), g.fireWith(f, [x, T]), c && (p.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var r, o, s, a, l, u, c, h, d = ot.ajaxSetup({}, i),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                    m = ot.Deferred(),
                    g = ot.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    _ = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!a) for (a = {}; e = we.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = _[i] = _[i] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t) if (b < 2) for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return r && r.abort(e), n(0, e), this
                        }
                    };
                if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ge.href) + "").replace(_e, "").replace(Ce, ge.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(wt) || [""], null == d.crossDomain) {
                    u = Q.createElement("a");
                    try {
                        u.href = d.url, u.href = u.href, d.crossDomain = $e.protocol + "//" + $e.host != u.protocol + "//" + u.host
                    } catch (T) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), H(ke, d, i, x), 2 === b) return x;
                c = ot.event && d.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Te.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ye.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = be.test(o) ? o.replace(be, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), d.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : d.accepts["*"]);
                for (h in d.headers) x.setRequestHeader(h, d.headers[h]);
                if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[h](d[h]);
                if (r = H(Se, d, i, x)) {
                    if (x.readyState = 1, c && p.trigger("ajaxSend", [x, d]), 2 === b) return x;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, r.send(y, n)
                    } catch (T) {
                        if (!(b < 2)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, i) {
                return ot.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function(t, e) {
            ot[e] = function(t, i, n, r) {
                return ot.isFunction(i) && (r = r || n, n = i, i = void 0), ot.ajax(ot.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, ot.isPlainObject(t) && t))
            }
        }), ot._evalUrl = function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(t) {
                var e;
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ot(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ot.isFunction(t);
                return this.each(function(i) {
                    ot(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(t) {
            return !ot.expr.filters.visible(t)
        }, ot.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Oe = /%20/g,
            Ae = /\[\]$/,
            Fe = /\r?\n/g,
            Ee = /^(?:submit|button|image|reset|file)$/i,
            ze = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                r(this.name, this.value)
            });
            else for (i in t) Y(i, t[i], e, r);
            return n.join("&").replace(Oe, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && ze.test(this.nodeName) && !Ee.test(t) && (this.checked || !zt.test(t))
                }).map(function(t, e) {
                    var i = ot(this).val();
                    return null == i ? null : ot.isArray(i) ? ot.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Fe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Fe, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Re = {
                0: 200,
                1223: 204
            },
            De = ot.ajaxSettings.xhr();
        nt.cors = !! De && "withCredentials" in De, nt.ajax = De = !! De, ot.ajaxTransport(function(e) {
            var i, n;
            if (nt.cors || De && !e.crossDomain) return {
                send: function(r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (i) throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ot.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = ot("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), Q.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Le = [],
            Me = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Le.pop() || ot.expando + "_" + ve++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = e.jsonp !== !1 && (Me.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Me, "$1" + r) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || ot.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Le.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
        }), ot.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Q;
            var n = pt.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = d([t], e, r), r && r.length && ot(r).remove(), ot.merge([], n.childNodes))
        };
        var Ie = ot.fn.load;
        ot.fn.load = function(t, e, i) {
            if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t)
            }).always(i &&
                function(t, e) {
                    s.each(function() {
                        i.apply(this, o || [t.responseText, e, t])
                    })
                }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ot.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function(t) {
            return ot.grep(ot.timers, function(e) {
                return t === e.elem
            }).length
        }, ot.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, u, c = ot.css(t, "position"),
                    h = ot(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, ot.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                if (o) return e = o.documentElement, ot.contains(e, n) ? (r = n.getBoundingClientRect(), i = X(o), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || Kt
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            ot.fn[t] = function(n) {
                return Tt(this, function(t, n, r) {
                    var o = X(t);
                    return void 0 === r ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }), ot.each(["top", "left"], function(t, e) {
            ot.cssHooks[e] = P(nt.pixelPosition, function(t, i) {
                if (i) return i = S(t, e), Qt.test(i) ? ot(t).position()[e] + "px" : i
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                ot.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || r === !0 ? "margin" : "border");
                    return Tt(this, function(e, i, n) {
                        var r;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? ot.css(e, i, s) : ot.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), ot.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var je = t.jQuery,
            Ne = t.$;
        return ot.noConflict = function(e) {
            return t.$ === ot && (t.$ = Ne), e && t.jQuery === ot && (t.jQuery = je), ot
        }, e || (t.jQuery = t.$ = ot), ot
    }), window.whatInput = function() {
    function t() {
        n(), r(event), m = !0, w = window.setTimeout(function() {
            m = !1
        }, 650)
    }
    function e(t) {
        m || r(t)
    }
    function i(t) {
        n(), r(t)
    }
    function n() {
        window.clearTimeout(w)
    }
    function r(t) {
        var e = s(t),
            i = b[t.type];
        if ("pointer" === i && (i = l(t)), g !== i) {
            var n = a(t),
                r = n.nodeName.toLowerCase(),
                c = "input" === r ? n.getAttribute("type") : null;
            !f.hasAttribute("data-whatinput-formtyping") && g && "keyboard" === i && "tab" !== T[e] && ("textarea" === r || "select" === r || "input" === r && v.indexOf(c) < 0) || _.indexOf(e) > -1 || o(i)
        }
        "keyboard" === i && u(e)
    }
    function o(t) {
        g = t, f.setAttribute("data-whatinput", g), x.indexOf(g) === -1 && x.push(g)
    }
    function s(t) {
        return t.keyCode ? t.keyCode : t.which
    }
    function a(t) {
        return t.target || t.srcElement
    }
    function l(t) {
        return "number" == typeof t.pointerType ? C[t.pointerType] : "pen" === t.pointerType ? "touch" : t.pointerType
    }
    function u(t) {
        p.indexOf(T[t]) === -1 && T[t] && p.push(T[t])
    }
    function c(t) {
        var e = s(t),
            i = p.indexOf(T[e]);
        i !== -1 && p.splice(i, 1)
    }
    function h() {
        f = document.body, window.PointerEvent ? (f.addEventListener("pointerdown", e), f.addEventListener("pointermove", e)) : window.MSPointerEvent ? (f.addEventListener("MSPointerDown", e), f.addEventListener("MSPointerMove", e)) : (f.addEventListener("mousedown", e), f.addEventListener("mousemove", e), "ontouchstart" in window && f.addEventListener("touchstart", t)), f.addEventListener(y, e), f.addEventListener("keydown", i), f.addEventListener("keyup", i), document.addEventListener("keyup", c)
    }
    function d() {
        return y = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
    }
    var f, p = [],
        m = !1,
        g = null,
        v = ["button", "checkbox", "file", "image", "radio", "reset", "submit"],
        y = d(),
        _ = [16, 17, 18, 91, 93],
        b = {
            keydown: "keyboard",
            keyup: "keyboard",
            mousedown: "mouse",
            mousemove: "mouse",
            MSPointerDown: "pointer",
            MSPointerMove: "pointer",
            pointerdown: "pointer",
            pointermove: "pointer",
            touchstart: "touch"
        };
    b[d()] = "mouse";
    var w, x = [],
        T = {
            9: "tab",
            13: "enter",
            16: "shift",
            27: "esc",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        },
        C = {
            2: "touch",
            3: "touch",
            4: "mouse"
        };
    return "addEventListener" in window && Array.prototype.indexOf && (document.body ? h() : document.addEventListener("DOMContentLoaded", h)), {
        ask: function() {
            return g
        },
        keys: function() {
            return p
        },
        types: function() {
            return x
        },
        set: o
    }
}(), !
    function(t) {
        function e(t) {
            if (void 0 === Function.prototype.name) {
                var e = /function\s([^(]{1,})\(/,
                    i = e.exec(t.toString());
                return i && i.length > 1 ? i[1].trim() : ""
            }
            return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
        }
        function i(t) {
            return !!/true/.test(t) || !/false/.test(t) && (isNaN(1 * t) ? t : parseFloat(t))
        }
        function n(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        var r = "6.2.4",
            o = {
                version: r,
                _plugins: {},
                _uuids: [],
                rtl: function() {
                    return "rtl" === t("html").attr("dir")
                },
                plugin: function(t, i) {
                    var r = i || e(t),
                        o = n(r);
                    this._plugins[o] = this[r] = t
                },
                registerPlugin: function(t, i) {
                    var r = i ? n(i) : e(t.constructor).toLowerCase();
                    t.uuid = this.GetYoDigits(6, r), t.$element.attr("data-" + r) || t.$element.attr("data-" + r, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + r), this._uuids.push(t.uuid)
                },
                unregisterPlugin: function(t) {
                    var i = n(e(t.$element.data("zfPlugin").constructor));
                    this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
                    for (var r in t) t[r] = null
                },
                reInit: function(e) {
                    var i = e instanceof t;
                    try {
                        if (i) e.each(function() {
                            t(this).data("zfPlugin")._init()
                        });
                        else {
                            var r = typeof e,
                                o = this,
                                s = {
                                    object: function(e) {
                                        e.forEach(function(e) {
                                            e = n(e), t("[data-" + e + "]").foundation("_init")
                                        })
                                    },
                                    string: function() {
                                        e = n(e), t("[data-" + e + "]").foundation("_init")
                                    },
                                    undefined: function() {
                                        this.object(Object.keys(o._plugins))
                                    }
                                };
                            s[r](e)
                        }
                    } catch (a) {
                        console.error(a)
                    } finally {
                        return e
                    }
                },
                GetYoDigits: function(t, e) {
                    return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
                },
                reflow: function(e, n) {
                    "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
                    var r = this;
                    t.each(n, function(n, o) {
                        var s = r._plugins[o],
                            a = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                        a.each(function() {
                            var e = t(this),
                                n = {};
                            if (e.data("zfPlugin")) return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                            if (e.attr("data-options")) {
                                e.attr("data-options").split(";").forEach(function(t, e) {
                                    var r = t.split(":").map(function(t) {
                                        return t.trim()
                                    });
                                    r[0] && (n[r[0]] = i(r[1]))
                                })
                            }
                            try {
                                e.data("zfPlugin", new s(t(this), n))
                            } catch (r) {
                                console.error(r)
                            } finally {
                                return
                            }
                        })
                    })
                },
                getFnName: e,
                transitionend: function(t) {
                    var e, i = {
                            transition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend"
                        },
                        n = document.createElement("div");
                    for (var r in i)"undefined" != typeof n.style[r] && (e = i[r]);
                    return e ? e : (e = setTimeout(function() {
                        t.triggerHandler("transitionend", [t])
                    }, 1), "transitionend")
                }
            };
        o.util = {
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var n = this,
                        r = arguments;
                    null === i && (i = setTimeout(function() {
                        t.apply(n, r), i = null
                    }, e))
                }
            }
        };
        var s = function(i) {
            var n = typeof i,
                r = t("meta.foundation-mq"),
                s = t(".no-js");
            if (r.length || t('<meta class="foundation-mq">').appendTo(document.head), s.length && s.removeClass("no-js"), "undefined" === n) o.MediaQuery._init(), o.reflow(this);
            else {
                if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                var a = Array.prototype.slice.call(arguments, 1),
                    l = this.data("zfPlugin");
                if (void 0 === l || void 0 === l[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? e(l) : "this element") + ".");
                1 === this.length ? l[i].apply(l, a) : this.each(function(e, n) {
                    l[i].apply(t(n).data("zfPlugin"), a)
                })
            }
            return this
        };
        window.Foundation = o, t.fn.foundation = s, function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() {
                        t(n = i)
                    }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                r = function() {
                    return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (n.prototype = this.prototype), r.prototype = new n, r
        })
    }(jQuery), !
    function(t) {
        function e(t, e, n, r) {
            var o, s, a, l, u = i(t);
            if (e) {
                var c = i(e);
                s = u.offset.top + u.height <= c.height + c.offset.top, o = u.offset.top >= c.offset.top, a = u.offset.left >= c.offset.left, l = u.offset.left + u.width <= c.width + c.offset.left
            } else s = u.offset.top + u.height <= u.windowDims.height + u.windowDims.offset.top, o = u.offset.top >= u.windowDims.offset.top, a = u.offset.left >= u.windowDims.offset.left, l = u.offset.left + u.width <= u.windowDims.width;
            var h = [s, o, a, l];
            return n ? a === l == !0 : r ? o === s == !0 : h.indexOf(!1) === -1
        }
        function i(t, e) {
            if (t = t.length ? t[0] : t, t === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
            var i = t.getBoundingClientRect(),
                n = t.parentNode.getBoundingClientRect(),
                r = document.body.getBoundingClientRect(),
                o = window.pageYOffset,
                s = window.pageXOffset;
            return {
                width: i.width,
                height: i.height,
                offset: {
                    top: i.top + o,
                    left: i.left + s
                },
                parentDims: {
                    width: n.width,
                    height: n.height,
                    offset: {
                        top: n.top + o,
                        left: n.left + s
                    }
                },
                windowDims: {
                    width: r.width,
                    height: r.height,
                    offset: {
                        top: o,
                        left: s
                    }
                }
            }
        }
        function n(t, e, n, r, o, s) {
            var a = i(t),
                l = e ? i(e) : null;
            switch (n) {
                case "top":
                    return {
                        left: Foundation.rtl() ? l.offset.left - a.width + l.width : l.offset.left,
                        top: l.offset.top - (a.height + r)
                    };
                case "left":
                    return {
                        left: l.offset.left - (a.width + o),
                        top: l.offset.top
                    };
                case "right":
                    return {
                        left: l.offset.left + l.width + o,
                        top: l.offset.top
                    };
                case "center top":
                    return {
                        left: l.offset.left + l.width / 2 - a.width / 2,
                        top: l.offset.top - (a.height + r)
                    };
                case "center bottom":
                    return {
                        left: s ? o : l.offset.left + l.width / 2 - a.width / 2,
                        top: l.offset.top + l.height + r
                    };
                case "center left":
                    return {
                        left: l.offset.left - (a.width + o),
                        top: l.offset.top + l.height / 2 - a.height / 2
                    };
                case "center right":
                    return {
                        left: l.offset.left + l.width + o + 1,
                        top: l.offset.top + l.height / 2 - a.height / 2
                    };
                case "center":
                    return {
                        left: a.windowDims.offset.left + a.windowDims.width / 2 - a.width / 2,
                        top: a.windowDims.offset.top + a.windowDims.height / 2 - a.height / 2
                    };
                case "reveal":
                    return {
                        left: (a.windowDims.width - a.width) / 2,
                        top: a.windowDims.offset.top + r
                    };
                case "reveal full":
                    return {
                        left: a.windowDims.offset.left,
                        top: a.windowDims.offset.top
                    };
                case "left bottom":
                    return {
                        left: l.offset.left,
                        top: l.offset.top + l.height
                    };
                case "right bottom":
                    return {
                        left: l.offset.left + l.width + o - a.width,
                        top: l.offset.top + l.height
                    };
                default:
                    return {
                        left: Foundation.rtl() ? l.offset.left - a.width + l.width : l.offset.left + o,
                        top: l.offset.top + l.height + r
                    }
            }
        }
        Foundation.Box = {
            ImNotTouchingYou: e,
            GetDimensions: i,
            GetOffsets: n
        }
    }(jQuery), !
    function(t) {
        function e(t) {
            var e = {};
            for (var i in t) e[t[i]] = t[i];
            return e
        }
        var i = {
                9: "TAB",
                13: "ENTER",
                27: "ESCAPE",
                32: "SPACE",
                37: "ARROW_LEFT",
                38: "ARROW_UP",
                39: "ARROW_RIGHT",
                40: "ARROW_DOWN"
            },
            n = {},
            r = {
                keys: e(i),
                parseKey: function(t) {
                    var e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
                    return t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e
                },
                handleKey: function(e, i, r) {
                    var o, s, a, l = n[i],
                        u = this.parseKey(e);
                    if (!l) return console.warn("Component not defined!");
                    if (o = "undefined" == typeof l.ltr ? l : Foundation.rtl() ? t.extend({}, l.ltr, l.rtl) : t.extend({}, l.rtl, l.ltr), s = o[u], a = r[s], a && "function" == typeof a) {
                        var c = a.apply();
                        (r.handled || "function" == typeof r.handled) && r.handled(c)
                    } else(r.unhandled || "function" == typeof r.unhandled) && r.unhandled()
                },
                findFocusable: function(e) {
                    return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                        return !(!t(this).is(":visible") || t(this).attr("tabindex") < 0)
                    })
                },
                register: function(t, e) {
                    n[t] = e
                }
            };
        Foundation.Keyboard = r
    }(jQuery), !
    function(t) {
        function e(t) {
            var e = {};
            return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function(t, e) {
                var i = e.replace(/\+/g, " ").split("="),
                    n = i[0],
                    r = i[1];
                return n = decodeURIComponent(n), r = void 0 === r ? null : decodeURIComponent(r), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(r) : t[n] = [t[n], r] : t[n] = r, t
            }, {}) : e
        }
        var i = {
            queries: [],
            current: "",
            _init: function() {
                var i, n = this,
                    r = t(".foundation-mq").css("font-family");
                i = e(r);
                for (var o in i) i.hasOwnProperty(o) && n.queries.push({
                    name: o,
                    value: "only screen and (min-width: " + i[o] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(t) {
                var e = this.get(t);
                return !!e && window.matchMedia(e).matches
            },
            get: function(t) {
                for (var e in this.queries) if (this.queries.hasOwnProperty(e)) {
                    var i = this.queries[e];
                    if (t === i.name) return i.value
                }
                return null
            },
            _getCurrentSize: function() {
                for (var t, e = 0; e < this.queries.length; e++) {
                    var i = this.queries[e];
                    window.matchMedia(i.value).matches && (t = i)
                }
                return "object" == typeof t ? t.name : t
            },
            _watcher: function() {
                var e = this;
                t(window).on("resize.zf.mediaquery", function() {
                    var i = e._getCurrentSize(),
                        n = e.current;
                    i !== n && (e.current = i, t(window).trigger("changed.zf.mediaquery", [i, n]))
                })
            }
        };
        Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function() {
            var t = window.styleMedia || window.media;
            if (!t) {
                var e = document.createElement("style"),
                    i = document.getElementsByTagName("script")[0],
                    n = null;
                e.type = "text/css", e.id = "matchmediajs-test", i && i.parentNode && i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                    matchMedium: function(t) {
                        var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                        return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                    }
                }
            }
            return function(e) {
                return {
                    matches: t.matchMedium(e || "all"),
                    media: e || "all"
                }
            }
        }()), Foundation.MediaQuery = i
    }(jQuery), !
    function(t) {
        function e(t, e, i) {
            function n(a) {
                s || (s = window.performance.now()), o = a - s, i.apply(e), o < t ? r = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(r), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
            }
            var r, o, s = null;
            r = window.requestAnimationFrame(n)
        }
        function i(e, i, o, s) {
            function a() {
                e || i.hide(), l(), s && s.apply(i)
            }
            function l() {
                i[0].style.transitionDuration = 0, i.removeClass(u + " " + c + " " + o)
            }
            if (i = t(i).eq(0), i.length) {
                var u = e ? n[0] : n[1],
                    c = e ? r[0] : r[1];
                l(), i.addClass(o).css("transition", "none"), requestAnimationFrame(function() {
                    i.addClass(u), e && i.show()
                }), requestAnimationFrame(function() {
                    i[0].offsetWidth, i.css("transition", "").addClass(c)
                }), i.one(Foundation.transitionend(i), a)
            }
        }
        var n = ["mui-enter", "mui-leave"],
            r = ["mui-enter-active", "mui-leave-active"],
            o = {
                animateIn: function(t, e, n) {
                    i(!0, t, e, n)
                },
                animateOut: function(t, e, n) {
                    i(!1, t, e, n)
                }
            };
        Foundation.Move = e, Foundation.Motion = o
    }(jQuery), !
    function(t) {
        var e = {
            Feather: function(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
                e.attr("role", "menubar");
                var n = e.find("li").attr({
                        role: "menuitem"
                    }),
                    r = "is-" + i + "-submenu",
                    o = r + "-item",
                    s = "is-" + i + "-submenu-parent";
                e.find("a:first").attr("tabindex", 0), n.each(function() {
                    var e = t(this),
                        i = e.children("ul");
                    i.length && (e.addClass(s).attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1,
                        "aria-label": e.children("a:first").text()
                    }), i.addClass("submenu " + r).attr({
                        "data-submenu": "",
                        "aria-hidden": !0,
                        role: "menu"
                    })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + o)
                })
            },
            Burn: function(t, e) {
                var i = (t.find("li").removeAttr("tabindex"), "is-" + e + "-submenu"),
                    n = i + "-item",
                    r = "is-" + e + "-submenu-parent";
                t.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + r + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
            }
        };
        Foundation.Nest = e
    }(jQuery), !
    function(t) {
        function e(t, e, i) {
            var n, r, o = this,
                s = e.duration,
                a = Object.keys(t.data())[0] || "timer",
                l = -1;
            this.isPaused = !1, this.restart = function() {
                l = -1, clearTimeout(r), this.start()
            }, this.start = function() {
                this.isPaused = !1, clearTimeout(r), l = l <= 0 ? s : l, t.data("paused", !1), n = Date.now(), r = setTimeout(function() {
                    e.infinite && o.restart(), i && "function" == typeof i && i()
                }, l), t.trigger("timerstart.zf." + a)
            }, this.pause = function() {
                this.isPaused = !0, clearTimeout(r), t.data("paused", !0);
                var e = Date.now();
                l -= e - n, t.trigger("timerpaused.zf." + a)
            }
        }
        function i(e, i) {
            function n() {
                r--, 0 === r && i()
            }
            var r = e.length;
            0 === r && i(), e.each(function() {
                this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : t(this).one("load", function() {
                    n()
                })
            })
        }
        Foundation.Timer = e, Foundation.onImagesLoaded = i
    }(jQuery), function(t) {
    function e() {
        this.removeEventListener("touchmove", i), this.removeEventListener("touchend", e), u = !1
    }
    function i(i) {
        if (t.spotSwipe.preventDefault && i.preventDefault(), u) {
            var n, r = i.touches[0].pageX,
                s = (i.touches[0].pageY, o - r);
            l = (new Date).getTime() - a, Math.abs(s) >= t.spotSwipe.moveThreshold && l <= t.spotSwipe.timeThreshold && (n = s > 0 ? "left" : "right"), n && (i.preventDefault(), e.call(this), t(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }
    function n(t) {
        1 == t.touches.length && (o = t.touches[0].pageX, s = t.touches[0].pageY, u = !0, a = (new Date).getTime(), this.addEventListener("touchmove", i, !1), this.addEventListener("touchend", e, !1))
    }
    function r() {
        this.addEventListener && this.addEventListener("touchstart", n, !1)
    }
    t.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var o, s, a, l, u = !1;
    t.event.special.swipe = {
        setup: r
    }, t.each(["left", "up", "down", "right"], function() {
        t.event.special["swipe" + this] = {
            setup: function() {
                t(this).on("swipe", t.noop)
            }
        }
    })
}(jQuery), !
    function(t) {
        t.fn.addTouch = function() {
            this.each(function(i, n) {
                t(n).bind("touchstart touchmove touchend touchcancel", function() {
                    e(event)
                })
            });
            var e = function(t) {
                var e, i = t.changedTouches,
                    n = i[0],
                    r = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    },
                    o = r[t.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(o, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: n.screenX,
                    screenY: n.screenY,
                    clientX: n.clientX,
                    clientY: n.clientY
                }) : (e = document.createEvent("MouseEvent"), e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(e)
            }
        }
    }(jQuery), !
    function(t) {
        function e() {
            o(), n(), r(), i()
        }
        function i(e) {
            var i = t("[data-yeti-box]"),
                n = ["dropdown", "tooltip", "reveal"];
            if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] ? n.concat(e) : console.error("Plugin names must be strings")), i.length) {
                var r = n.map(function(t) {
                    return "closeme.zf." + t
                }).join(" ");
                t(window).off(r).on(r, function(e, i) {
                    var n = e.namespace.split(".")[0],
                        r = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
                    r.each(function() {
                        var e = t(this);
                        e.triggerHandler("close.zf.trigger", [e])
                    })
                })
            }
        }
        function n(e) {
            var i = void 0,
                n = t("[data-resize]");
            n.length && t(window).off("resize.zf.trigger").on("resize.zf.trigger", function(r) {
                i && clearTimeout(i), i = setTimeout(function() {
                    s || n.each(function() {
                        t(this).triggerHandler("resizeme.zf.trigger")
                    }), n.attr("data-events", "resize")
                }, e || 10)
            })
        }
        function r(e) {
            var i = void 0,
                n = t("[data-scroll]");
            n.length && t(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(r) {
                i && clearTimeout(i), i = setTimeout(function() {
                    s || n.each(function() {
                        t(this).triggerHandler("scrollme.zf.trigger")
                    }), n.attr("data-events", "scroll")
                }, e || 10)
            })
        }
        function o() {
            if (!s) return !1;
            var e = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
                i = function(e) {
                    var i = t(e[0].target);
                    switch (i.attr("data-events")) {
                        case "resize":
                            i.triggerHandler("resizeme.zf.trigger", [i]);
                            break;
                        case "scroll":
                            i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]);
                            break;
                        default:
                            return !1
                    }
                };
            if (e.length) for (var n = 0; n <= e.length - 1; n++) {
                var r = new s(i);
                r.observe(e[n], {
                    attributes: !0,
                    childList: !1,
                    characterData: !1,
                    subtree: !1,
                    attributeFilter: ["data-events"]
                })
            }
        }
        var s = function() {
                for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++) if (t[e] + "MutationObserver" in window) return window[t[e] + "MutationObserver"];
                return !1
            }(),
            a = function(e, i) {
                e.data(i).split(" ").forEach(function(n) {
                    t("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [e])
                })
            };
        t(document).on("click.zf.trigger", "[data-open]", function() {
            a(t(this), "open")
        }), t(document).on("click.zf.trigger", "[data-close]", function() {
            var e = t(this).data("close");
            e ? a(t(this), "close") : t(this).trigger("close.zf.trigger")
        }), t(document).on("click.zf.trigger", "[data-toggle]", function() {
            a(t(this), "toggle")
        }), t(document).on("close.zf.trigger", "[data-closable]", function(e) {
            e.stopPropagation();
            var i = t(this).data("closable");
            "" !== i ? Foundation.Motion.animateOut(t(this), i, function() {
                t(this).trigger("http://www.we7shop.com/Public/static/index/js/closed.zf")
            }) : t(this).fadeOut().trigger("http://www.we7shop.com/Public/static/index/js/closed.zf")
        }), t(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
            var e = t(this).data("toggle-focus");
            t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)])
        }), t(window).on("load", function() {
            e()
        }), Foundation.IHearYou = e
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Abide")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.$inputs = this.$element.find("input, textarea, select"), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    this.$element.off(".abide").on("reset.zf.abide", function() {
                        e.resetForm()
                    }).on("submit.zf.abide", function() {
                        return e.validateForm()
                    }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(i) {
                        e.validateInput(t(i.target))
                    }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(i) {
                        e.validateInput(t(i.target))
                    })
                }
            }, {
                key: "_reflow",
                value: function() {
                    this._init()
                }
            }, {
                key: "requiredCheck",
                value: function(t) {
                    if (!t.attr("required")) return !0;
                    var e = !0;
                    switch (t[0].type) {
                        case "checkbox":
                            e = t[0].checked;
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            var i = t.find("option:selected");
                            i.length && i.val() || (e = !1);
                            break;
                        default:
                            t.val() && t.val().length || (e = !1)
                    }
                    return e
                }
            }, {
                key: "findFormError",
                value: function(t) {
                    var e = t.siblings(this.options.formErrorSelector);
                    return e.length || (e = t.parent().find(this.options.formErrorSelector)), e
                }
            }, {
                key: "findLabel",
                value: function(t) {
                    var e = t[0].id,
                        i = this.$element.find('label[for="' + e + '"]');
                    return i.length ? i : t.closest("label")
                }
            }, {
                key: "findRadioLabels",
                value: function(e) {
                    var i = this,
                        n = e.map(function(e, n) {
                            var r = n.id,
                                o = i.$element.find('label[for="' + r + '"]');
                            return o.length || (o = t(n).closest("label")), o[0]
                        });
                    return t(n)
                }
            }, {
                key: "addErrorClasses",
                value: function(t) {
                    var e = this.findLabel(t),
                        i = this.findFormError(t);
                    e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
                }
            }, {
                key: "removeRadioErrorClasses",
                value: function(t) {
                    var e = this.$element.find(':radio[name="' + t + '"]'),
                        i = this.findRadioLabels(e),
                        n = this.findFormError(e);
                    i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
                }
            }, {
                key: "removeErrorClasses",
                value: function(t) {
                    if ("radio" == t[0].type) return this.removeRadioErrorClasses(t.attr("name"));
                    var e = this.findLabel(t),
                        i = this.findFormError(t);
                    e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
                }
            }, {
                key: "validateInput",
                value: function(t) {
                    var e = this.requiredCheck(t),
                        i = !1,
                        n = !0,
                        r = t.attr("data-validator"),
                        o = !0;
                    if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]')) return !0;
                    switch (t[0].type) {
                        case "radio":
                            i = this.validateRadio(t.attr("name"));
                            break;
                        case "checkbox":
                            i = e;
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            i = e;
                            break;
                        default:
                            i = this.validateText(t)
                    }
                    r && (n = this.matchValidation(t, r, t.attr("required"))), t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                    var s = [e, i, n, o].indexOf(!1) === -1,
                        a = (s ? "valid" : "invalid") + ".zf.abide";
                    return this[s ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(a, [t]), s
                }
            }, {
                key: "validateForm",
                value: function() {
                    var e = [],
                        i = this;
                    this.$inputs.each(function() {
                        e.push(i.validateInput(t(this)))
                    });
                    var n = e.indexOf(!1) === -1;
                    return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
                }
            }, {
                key: "validateText",
                value: function(t, e) {
                    e = e || t.attr("pattern") || t.attr("type");
                    var i = t.val(),
                        n = !1;
                    return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e === t.attr("type") || new RegExp(e).test(i) : t.prop("required") || (n = !0), n
                }
            }, {
                key: "validateRadio",
                value: function(e) {
                    var i = this.$element.find(':radio[name="' + e + '"]'),
                        n = !1,
                        r = !1;
                    return i.each(function(e, i) {
                        t(i).attr("required") && (r = !0)
                    }), r || (n = !0), n || i.each(function(e, i) {
                        t(i).prop("checked") && (n = !0)
                    }), n
                }
            }, {
                key: "matchValidation",
                value: function(t, e, i) {
                    var n = this;
                    i = !! i;
                    var r = e.split(" ").map(function(e) {
                        return n.options.validators[e](t, i, t.parent())
                    });
                    return r.indexOf(!1) === -1
                }
            }, {
                key: "resetForm",
                value: function() {
                    var e = this.$element,
                        i = this.options;
                    t("." + i.labelErrorClass, e).not("small").removeClass(i.labelErrorClass), t("." + i.inputErrorClass, e).not("small").removeClass(i.inputErrorClass), t(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass), e.find("[data-abide-error]").css("display", "none"), t(":input", e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), t(":input:radio", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), t(":input:checkbox", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), e.trigger("formreset.zf.abide", [e])
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                        e.removeErrorClasses(t(this))
                    }), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            validateOn: "fieldChange",
            labelErrorClass: "is-invalid-label",
            inputErrorClass: "is-invalid-input",
            formErrorSelector: ".form-error",
            formErrorClass: "is-visible",
            liveValidate: !1,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(e, i, n) {
                    return t("#" + e.attr("data-equalto")).val() === e.val()
                }
            }
        }, Foundation.plugin(e, "Abide")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_DOWN: "next",
                    ARROW_UP: "previous"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li, [data-accordion-item]"), this.$tabs.each(function(e, i) {
                        var n = t(i),
                            r = n.children("[data-tab-content]"),
                            o = r[0].id || Foundation.GetYoDigits(6, "accordion"),
                            s = i.id || o + "-label";
                        n.find("a:first").attr({
                            "aria-controls": o,
                            role: "tab",
                            id: s,
                            "aria-expanded": !1,
                            "aria-selected": !1
                        }), r.attr({
                            role: "tabpanel",
                            "aria-labelledby": s,
                            "aria-hidden": !0,
                            id: o
                        })
                    });
                    var e = this.$element.find(".is-active").children("[data-tab-content]");
                    e.length && this.down(e, !0), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    this.$tabs.each(function() {
                        var i = t(this),
                            n = i.children("[data-tab-content]");
                        n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) {
                            t.preventDefault(), e.toggle(n)
                        }).on("keydown.zf.accordion", function(t) {
                            Foundation.Keyboard.handleKey(t, "Accordion", {
                                toggle: function() {
                                    e.toggle(n)
                                },
                                next: function() {
                                    var t = i.next().find("a").focus();
                                    e.options.multiExpand || t.trigger("click.zf.accordion")
                                },
                                previous: function() {
                                    var t = i.prev().find("a").focus();
                                    e.options.multiExpand || t.trigger("click.zf.accordion")
                                },
                                handled: function() {
                                    t.preventDefault(), t.stopPropagation()
                                }
                            })
                        })
                    })
                }
            }, {
                key: "toggle",
                value: function(t) {
                    t.parent().hasClass("is-active") ? this.up(t) : this.down(t)
                }
            }, {
                key: "down",
                value: function(e, i) {
                    var n = this;
                    if (e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !i) {
                        var r = this.$element.children(".is-active").children("[data-tab-content]");
                        r.length && this.up(r.not(e))
                    }
                    e.slideDown(this.options.slideSpeed, function() {
                        n.$element.trigger("down.zf.accordion", [e])
                    }), t("#" + e.attr("aria-labelledby")).attr({
                        "aria-expanded": !0,
                        "aria-selected": !0
                    })
                }
            }, {
                key: "up",
                value: function(e) {
                    var i = e.parent().siblings(),
                        n = this;
                    (this.options.allowAllClosed || i.hasClass("is-active")) && e.parent().hasClass("is-active") && (e.slideUp(n.options.slideSpeed, function() {
                        n.$element.trigger("up.zf.accordion", [e])
                    }), e.attr("aria-hidden", !0).parent().removeClass("is-active"), t("#" + e.attr("aria-labelledby")).attr({
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            slideSpeed: 250,
            multiExpand: !1,
            allowAllClosed: !1
        }, Foundation.plugin(e, "Accordion")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_RIGHT: "open",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "close",
                    ESCAPE: "closeAll"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                        role: "menu",
                        "aria-multiselectable": this.options.multiOpen
                    }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                        var e = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                            i = t(this),
                            n = i.children("[data-submenu]"),
                            r = n[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                            o = n.hasClass("is-active");
                        i.attr({
                            "aria-controls": r,
                            "aria-expanded": o,
                            role: "menuitem",
                            id: e
                        }), n.attr({
                            "aria-labelledby": e,
                            "aria-hidden": !o,
                            role: "menu",
                            id: r
                        })
                    });
                    var e = this.$element.find(".is-active");
                    if (e.length) {
                        var i = this;
                        e.each(function() {
                            i.down(t(this))
                        })
                    }
                    this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    this.$element.find("li").each(function() {
                        var i = t(this).children("[data-submenu]");
                        i.length && t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) {
                            t.preventDefault(), e.toggle(i)
                        })
                    }).on("keydown.zf.accordionmenu", function(i) {
                        var n, r, o = t(this),
                            s = o.parent("ul").children("li"),
                            a = o.children("[data-submenu]");
                        s.each(function(e) {
                            if (t(this).is(o)) return n = s.eq(Math.max(0, e - 1)).find("a").first(), r = s.eq(Math.min(e + 1, s.length - 1)).find("a").first(), t(this).children("[data-submenu]:visible").length && (r = o.find("li:first-child").find("a").first()), t(this).is(":first-child") ? n = o.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()), void(t(this).is(":last-child") && (r = o.parents("li").first().next("li").find("a").first()))
                        }), Foundation.Keyboard.handleKey(i, "AccordionMenu", {
                            open: function() {
                                a.is(":hidden") && (e.down(a), a.find("li").first().find("a").first().focus())
                            },
                            close: function() {
                                a.length && !a.is(":hidden") ? e.up(a) : o.parent("[data-submenu]").length && (e.up(o.parent("[data-submenu]")), o.parents("li").first().find("a").first().focus())
                            },
                            up: function() {
                                return n.focus(), !0
                            },
                            down: function() {
                                return r.focus(), !0
                            },
                            toggle: function() {
                                o.children("[data-submenu]").length && e.toggle(o.children("[data-submenu]"))
                            },
                            closeAll: function() {
                                e.hideAll()
                            },
                            handled: function(t) {
                                t && i.preventDefault(), i.stopImmediatePropagation()
                            }
                        })
                    })
                }
            }, {
                key: "hideAll",
                value: function() {
                    this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
                }
            }, {
                key: "toggle",
                value: function(t) {
                    t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
                }
            }, {
                key: "down",
                value: function(t) {
                    var e = this;
                    this.options.multiOpen || this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))), t.addClass("is-active").attr({
                        "aria-hidden": !1
                    }).parent(".is-accordion-submenu-parent").attr({
                        "aria-expanded": !0
                    }), t.slideDown(e.options.slideSpeed, function() {
                        e.$element.trigger("down.zf.accordionMenu", [t])
                    })
                }
            }, {
                key: "up",
                value: function(t) {
                    var e = this;
                    t.slideUp(e.options.slideSpeed, function() {
                        e.$element.trigger("up.zf.accordionMenu", [t])
                    });
                    var i = t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                    i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            slideSpeed: 250,
            multiOpen: !0
        }, Foundation.plugin(e, "AccordionMenu")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), Foundation.Keyboard.register("Drilldown", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close",
                    TAB: "down",
                    SHIFT_TAB: "up"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a"), this._prepareMenu(), this._keyboardEvents()
                }
            }, {
                key: "_prepareMenu",
                value: function() {
                    var e = this;
                    this.$submenuAnchors.each(function() {
                        var i = t(this),
                            n = i.parent();
                        e.options.parentLink && i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), i.data("savedHref", i.attr("href")).removeAttr("href").attr("tabindex", 0), i.children("[data-submenu]").attr({
                            "aria-hidden": !0,
                            tabindex: 0,
                            role: "menu"
                        }), e._events(i)
                    }), this.$submenus.each(function() {
                        var i = t(this),
                            n = i.find(".js-drilldown-back");
                        n.length || i.prepend(e.options.backButton), e._back(i)
                    }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = t(this.options.wrapper).addClass("is-drilldown"), this.$wrapper = this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))
                }
            }, {
                key: "_events",
                value: function(e) {
                    var i = this;
                    e.off("click.zf.drilldown").on("click.zf.drilldown", function(n) {
                        if (t(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (n.stopImmediatePropagation(), n.preventDefault()), i._show(e.parent("li")), i.options.closeOnClick) {
                            var r = t("body");
                            r.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                                e.target === i.$element[0] || t.contains(i.$element[0], e.target) || (e.preventDefault(), i._hideAll(), r.off(".zf.drilldown"))
                            })
                        }
                    })
                }
            }, {
                key: "_keyboardEvents",
                value: function() {
                    var e = this;
                    this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown", function(i) {
                        var n, r, o = t(this),
                            s = o.parent("li").parent("ul").children("li").children("a");
                        s.each(function(e) {
                            if (t(this).is(o)) return n = s.eq(Math.max(0, e - 1)), void(r = s.eq(Math.min(e + 1, s.length - 1)))
                        }), Foundation.Keyboard.handleKey(i, "Drilldown", {
                            next: function() {
                                if (o.is(e.$submenuAnchors)) return e._show(o.parent("li")), o.parent("li").one(Foundation.transitionend(o), function() {
                                    o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                                }), !0
                            },
                            previous: function() {
                                return e._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Foundation.transitionend(o), function() {
                                    setTimeout(function() {
                                        o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                    }, 1)
                                }), !0
                            },
                            up: function() {
                                return n.focus(), !0
                            },
                            down: function() {
                                return r.focus(), !0
                            },
                            close: function() {
                                e._back()
                            },
                            open: function() {
                                return o.is(e.$menuItems) ? o.is(e.$submenuAnchors) ? (e._show(o.parent("li")), o.parent("li").one(Foundation.transitionend(o), function() {
                                    o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                                }), !0) : void 0 : (e._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Foundation.transitionend(o), function() {
                                    setTimeout(function() {
                                        o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                    }, 1)
                                }), !0)
                            },
                            handled: function(t) {
                                t && i.preventDefault(), i.stopImmediatePropagation()
                            }
                        })
                    })
                }
            }, {
                key: "_hideAll",
                value: function() {
                    var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                    t.one(Foundation.transitionend(t), function(e) {
                        t.removeClass("is-active is-closing")
                    }), this.$element.trigger("closed.zf.drilldown")
                }
            }, {
                key: "_back",
                value: function(t) {
                    var e = this;
                    t.off("click.zf.drilldown"), t.children(".js-drilldown-back").on("click.zf.drilldown", function(i) {
                        i.stopImmediatePropagation(), e._hide(t);
                        var n = t.parent("li").parent("ul").parent("li");
                        n.length && e._show(n)
                    })
                }
            }, {
                key: "_menuLinkEvents",
                value: function() {
                    var t = this;
                    this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                        setTimeout(function() {
                            t._hideAll()
                        }, 0)
                    })
                }
            }, {
                key: "_show",
                value: function(t) {
                    t.attr("aria-expanded", !0), t.children("[data-submenu]").addClass("is-active").attr("aria-hidden", !1), this.$element.trigger("open.zf.drilldown", [t])
                }
            }, {
                key: "_hide",
                value: function(t) {
                    t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0).addClass("is-closing").one(Foundation.transitionend(t), function() {
                        t.removeClass("is-active is-closing"), t.blur()
                    }), t.trigger("hide.zf.drilldown", [t])
                }
            }, {
                key: "_getMaxDims",
                value: function() {
                    var t = 0,
                        e = {};
                    return this.$submenus.add(this.$element).each(function(e, i) {
                        var n = i.getBoundingClientRect().height;
                        n > t && (t = n)
                    }), e["min-height"] = t + "px", e["max-width"] = this.$element[0].getBoundingClientRect().width + "px", e
                }
            }, {
                key: "destroy",
                value: function() {
                    this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                        t(this).off(".zf.drilldown")
                    }), this.$element.find("a").each(function() {
                        var e = t(this);
                        e.removeAttr("tabindex"), e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref")
                    }), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
            wrapper: "<div></div>",
            parentLink: !1,
            closeOnClick: !1
        }, Foundation.plugin(e, "Drilldown")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                    ENTER: "open",
                    SPACE: "open",
                    ESCAPE: "close",
                    TAB: "tab_forward",
                    SHIFT_TAB: "tab_backward"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this.$element.attr("id");
                    this.$anchor = t(t('[data-toggle="' + e + '"]').length ? '[data-toggle="' + e + '"]' : '[data-open="' + e + '"]'), this.$anchor.attr({
                        "aria-controls": e,
                        "data-is-focus": !1,
                        "data-yeti-box": e,
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({
                        "aria-hidden": "true",
                        "data-yeti-box": e,
                        "data-resize": e,
                        "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                    }), this._events()
                }
            }, {
                key: "getPositionClass",
                value: function() {
                    var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                    t = t ? t[0] : "";
                    var e = /float-(\S+)/.exec(this.$anchor[0].className);
                    e = e ? e[1] : "";
                    var i = e ? e + " " + t : t;
                    return i
                }
            }, {
                key: "_reposition",
                value: function(t) {
                    this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : this.$element.removeClass(t), this.classChanged = !0, this.counter--
                }
            }, {
                key: "_setPosition",
                value: function() {
                    if ("false" === this.$anchor.attr("aria-expanded")) return !1;
                    var t = this.getPositionClass(),
                        e = Foundation.Box.GetDimensions(this.$element),
                        i = (Foundation.Box.GetDimensions(this.$anchor), "left" === t ? "left" : "right" === t ? "left" : "top"),
                        n = "top" === i ? "height" : "width";
                    "height" === n ? this.options.vOffset : this.options.hOffset;
                    if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                        width: e.windowDims.width - 2 * this.options.hOffset,
                        height: "auto"
                    }), this.classChanged = !0, !1;
                    for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, t, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, !1, !0) && this.counter;) this._reposition(t), this._setPosition()
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "close.zf.trigger": this.close.bind(this),
                        "toggle.zf.trigger": this.toggle.bind(this),
                        "resizeme.zf.trigger": this._setPosition.bind(this)
                    }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                        t('body[data-whatinput="mouse"]').is("*") && (clearTimeout(e.timeout), e.timeout = setTimeout(function() {
                            e.open(), e.$anchor.data("hover", !0)
                        }, e.options.hoverDelay))
                    }).on("mouseleave.zf.dropdown", function() {
                        clearTimeout(e.timeout), e.timeout = setTimeout(function() {
                            e.close(), e.$anchor.data("hover", !1)
                        }, e.options.hoverDelay)
                    }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                        clearTimeout(e.timeout)
                    }).on("mouseleave.zf.dropdown", function() {
                        clearTimeout(e.timeout), e.timeout = setTimeout(function() {
                            e.close(), e.$anchor.data("hover", !1)
                        }, e.options.hoverDelay)
                    })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(i) {
                        var n = t(this),
                            r = Foundation.Keyboard.findFocusable(e.$element);
                        Foundation.Keyboard.handleKey(i, "Dropdown", {
                            tab_forward: function() {
                                e.$element.find(":focus").is(r.eq(-1)) && (e.options.trapFocus ? (r.eq(0).focus(), i.preventDefault()) : e.close())
                            },
                            tab_backward: function() {
                                (e.$element.find(":focus").is(r.eq(0)) || e.$element.is(":focus")) && (e.options.trapFocus ? (r.eq(-1).focus(), i.preventDefault()) : e.close())
                            },
                            open: function() {
                                n.is(e.$anchor) && (e.open(), e.$element.attr("tabindex", -1).focus(), i.preventDefault())
                            },
                            close: function() {
                                e.close(), e.$anchor.focus()
                            }
                        })
                    })
                }
            }, {
                key: "_addBodyHandler",
                value: function() {
                    var e = t(document.body).not(this.$element),
                        i = this;
                    e.off("click.zf.dropdown").on("click.zf.dropdown", function(t) {
                        i.$anchor.is(t.target) || i.$anchor.find(t.target).length || i.$element.find(t.target).length || (i.close(), e.off("click.zf.dropdown"))
                    })
                }
            }, {
                key: "open",
                value: function() {
                    if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({
                            "aria-expanded": !0
                        }), this._setPosition(), this.$element.addClass("is-open").attr({
                            "aria-hidden": !1
                        }), this.options.autoFocus) {
                        var t = Foundation.Keyboard.findFocusable(this.$element);
                        t.length && t.eq(0).focus()
                    }
                    this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [this.$element])
                }
            }, {
                key: "close",
                value: function() {
                    if (!this.$element.hasClass("is-open")) return !1;
                    if (this.$element.removeClass("is-open").attr({
                            "aria-hidden": !0
                        }), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                        var t = this.getPositionClass();
                        t && this.$element.removeClass(t), this.$element.addClass(this.options.positionClass).css({
                            height: "",
                            width: ""
                        }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                    }
                    this.$element.trigger("hide.zf.dropdown", [this.$element])
                }
            }, {
                key: "toggle",
                value: function() {
                    if (this.$element.hasClass("is-open")) {
                        if (this.$anchor.data("hover")) return;
                        this.close()
                    } else this.open()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            hoverDelay: 250,
            hover: !1,
            hoverPane: !1,
            vOffset: 1,
            hOffset: 1,
            positionClass: "",
            trapFocus: !1,
            autoFocus: !1,
            closeOnClick: !1
        }, Foundation.plugin(e, "Dropdown")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var t = this.$element.find("li.is-dropdown-submenu-parent");
                    this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : t.addClass("opens-right"), this.changed = !1, this._events()
                }
            }, {
                key: "_isVertical",
                value: function() {
                    return "block" === this.$tabs.css("display")
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this,
                        i = "ontouchstart" in window || "undefined" != typeof window.ontouchstart,
                        n = "is-dropdown-submenu-parent",
                        r = function(r) {
                            var o = t(r.target).parentsUntil("ul", "." + n),
                                s = o.hasClass(n),
                                a = "true" === o.attr("data-is-click"),
                                l = o.children(".is-dropdown-submenu");
                            if (!s) return void(e.options.closeOnClickInside && e._hide(o));
                            if (a) {
                                if (!e.options.closeOnClick || !e.options.clickOpen && !i || e.options.forceFollow && i) return;
                                r.stopImmediatePropagation(), r.preventDefault(), e._hide(o)
                            } else r.preventDefault(), r.stopImmediatePropagation(), e._show(l), o.add(o.parentsUntil(e.$element, "." + n)).attr("data-is-click", !0)
                        };
                    (this.options.clickOpen || i) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", r), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(i) {
                        var r = t(this),
                            o = r.hasClass(n);
                        o && (clearTimeout(e.delay), e.delay = setTimeout(function() {
                            e._show(r.children(".is-dropdown-submenu"))
                        }, e.options.hoverDelay))
                    }).on("mouseleave.zf.dropdownmenu", function(i) {
                        var r = t(this),
                            o = r.hasClass(n);
                        if (o && e.options.autoclose) {
                            if ("true" === r.attr("data-is-click") && e.options.clickOpen) return !1;
                            clearTimeout(e.delay), e.delay = setTimeout(function() {
                                e._hide(r)
                            }, e.options.closingTime)
                        }
                    }), this.$menuItems.on("keydown.zf.dropdownmenu", function(i) {
                        var n, r, o = t(i.target).parentsUntil("ul", '[role="menuitem"]'),
                            s = e.$tabs.index(o) > -1,
                            a = s ? e.$tabs : o.siblings("li").add(o);
                        a.each(function(e) {
                            if (t(this).is(o)) return n = a.eq(e - 1), void(r = a.eq(e + 1))
                        });
                        var l = function() {
                                o.is(":last-child") || (r.children("a:first").focus(), i.preventDefault())
                            },
                            u = function() {
                                n.children("a:first").focus(), i.preventDefault()
                            },
                            c = function() {
                                var t = o.children("ul.is-dropdown-submenu");
                                t.length && (e._show(t), o.find("li > a:first").focus(), i.preventDefault())
                            },
                            h = function() {
                                var t = o.parent("ul").parent("li");
                                t.children("a:first").focus(), e._hide(t), i.preventDefault()
                            },
                            d = {
                                open: c,
                                close: function() {
                                    e._hide(e.$element), e.$menuItems.find("a:first").focus(), i.preventDefault()
                                },
                                handled: function() {
                                    i.stopImmediatePropagation()
                                }
                            };
                        s ? e._isVertical() ? Foundation.rtl() ? t.extend(d, {
                            down: l,
                            up: u,
                            next: h,
                            previous: c
                        }) : t.extend(d, {
                            down: l,
                            up: u,
                            next: c,
                            previous: h
                        }) : Foundation.rtl() ? t.extend(d, {
                            next: u,
                            previous: l,
                            down: c,
                            up: h
                        }) : t.extend(d, {
                            next: l,
                            previous: u,
                            down: c,
                            up: h
                        }) : Foundation.rtl() ? t.extend(d, {
                            next: h,
                            previous: c,
                            down: l,
                            up: u
                        }) : t.extend(d, {
                            next: c,
                            previous: h,
                            down: l,
                            up: u
                        }), Foundation.Keyboard.handleKey(i, "DropdownMenu", d)
                    })
                }
            }, {
                key: "_addBodyHandler",
                value: function() {
                    var e = t(document.body),
                        i = this;
                    e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(t) {
                        var n = i.$element.find(t.target);
                        n.length || (i._hide(), e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                    })
                }
            }, {
                key: "_show",
                value: function(e) {
                    var i = this.$tabs.index(this.$tabs.filter(function(i, n) {
                            return t(n).find(e).length > 0
                        })),
                        n = e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                    this._hide(n, i), e.css("visibility", "hidden").addClass("js-dropdown-active").attr({
                        "aria-hidden": !1
                    }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({
                        "aria-expanded": !0
                    });
                    var r = Foundation.Box.ImNotTouchingYou(e, null, !0);
                    if (!r) {
                        var o = "left" === this.options.alignment ? "-right" : "-left",
                            s = e.parent(".is-dropdown-submenu-parent");
                        s.removeClass("opens" + o).addClass("opens-" + this.options.alignment), r = Foundation.Box.ImNotTouchingYou(e, null, !0), r || s.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                    }
                    e.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [e])
                }
            }, {
                key: "_hide",
                value: function(t, e) {
                    var i;
                    i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t, i) {
                        return t === e
                    }) : this.$element;
                    var n = i.hasClass("is-active") || i.find(".is-active").length > 0;
                    if (n) {
                        if (i.find("li.is-active").add(i).attr({
                                "aria-expanded": !1,
                                "data-is-click": !1
                            }).removeClass("is-active"), i.find("ul.js-dropdown-active").attr({
                                "aria-hidden": !0
                            }).removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                            var r = "left" === this.options.alignment ? "right" : "left";
                            i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + r), this.changed = !1
                        }
                        this.$element.trigger("hide.zf.dropdownmenu", [i])
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), t(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            disableHover: !1,
            autoclose: !0,
            hoverDelay: 50,
            clickOpen: !1,
            closingTime: 500,
            alignment: "left",
            closeOnClick: !0,
            closeOnClickInside: !0,
            verticalClass: "vertical",
            rightClass: "align-right",
            forceFollow: !0
        }, Foundation.plugin(e, "DropdownMenu")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Equalizer")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this.$element.attr("data-equalizer") || "",
                        i = this.$element.find('[data-equalizer-watch="' + e + '"]');
                    this.$watched = i.length ? i : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", e || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                        onResizeMeBound: this._onResizeMe.bind(this),
                        onPostEqualizedBound: this._onPostEqualized.bind(this)
                    };
                    var n, r = this.$element.find("img");
                    this.options.equalizeOn ? (n = this._checkMQ(), t(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && n === !1 || void 0 === n) && (r.length ? Foundation.onImagesLoaded(r, this._reflow.bind(this)) : this._reflow())
                }
            }, {
                key: "_pauseEvents",
                value: function() {
                    this.isOn = !1, this.$element.off({
                        ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                        "resizeme.zf.trigger": this._bindHandler.onResizeMeBound
                    })
                }
            }, {
                key: "_onResizeMe",
                value: function(t) {
                    this._reflow()
                }
            }, {
                key: "_onPostEqualized",
                value: function(t) {
                    t.target !== this.$element[0] && this._reflow()
                }
            }, {
                key: "_events",
                value: function() {
                    this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.isOn = !0
                }
            }, {
                key: "_checkMQ",
                value: function() {
                    var t = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                    return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t
                }
            }, {
                key: "_killswitch",
                value: function() {}
            }, {
                key: "_reflow",
                value: function() {
                    return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
                }
            }, {
                key: "_isStacked",
                value: function() {
                    return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
                }
            }, {
                key: "getHeights",
                value: function(t) {
                    for (var e = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
                    t(e)
                }
            }, {
                key: "getHeightsByRow",
                value: function(e) {
                    var i = this.$watched.length ? this.$watched.first().offset().top : 0,
                        n = [],
                        r = 0;
                    n[r] = [];
                    for (var o = 0, s = this.$watched.length; o < s; o++) {
                        this.$watched[o].style.height = "auto";
                        var a = t(this.$watched[o]).offset().top;
                        a != i && (r++, n[r] = [], i = a), n[r].push([this.$watched[o], this.$watched[o].offsetHeight])
                    }
                    for (var l = 0, u = n.length; l < u; l++) {
                        var c = t(n[l]).map(function() {
                                return this[1]
                            }).get(),
                            h = Math.max.apply(null, c);
                        n[l].push(h)
                    }
                    e(n)
                }
            }, {
                key: "applyHeight",
                value: function(t) {
                    var e = Math.max.apply(null, t);
                    this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
                }
            }, {
                key: "applyHeightByRow",
                value: function(e) {
                    this.$element.trigger("preequalized.zf.equalizer");
                    for (var i = 0, n = e.length; i < n; i++) {
                        var r = e[i].length,
                            o = e[i][r - 1];
                        if (r <= 2) t(e[i][0][0]).css({
                            height: "auto"
                        });
                        else {
                            this.$element.trigger("preequalizedrow.zf.equalizer");
                            for (var s = 0, a = r - 1; s < a; s++) t(e[i][s][0]).css({
                                height: o
                            });
                            this.$element.trigger("postequalizedrow.zf.equalizer")
                        }
                    }
                    this.$element.trigger("postequalized.zf.equalizer")
                }
            }, {
                key: "destroy",
                value: function() {
                    this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            equalizeOnStack: !1,
            equalizeByRow: !1,
            equalizeOn: ""
        }, Foundation.plugin(e, "Equalizer")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this._addBreakpoints(), this._generateRules(), this._reflow()
                }
            }, {
                key: "_events",
                value: function() {
                    t(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
                }
            }, {
                key: "_reflow",
                value: function() {
                    var t;
                    for (var e in this.rules) if (this.rules.hasOwnProperty(e)) {
                        var i = this.rules[e];
                        window.matchMedia(i.query).matches && (t = i)
                    }
                    t && this.replace(t.path)
                }
            }, {
                key: "_addBreakpoints",
                value: function() {
                    for (var t in Foundation.MediaQuery.queries) if (Foundation.MediaQuery.queries.hasOwnProperty(t)) {
                        var i = Foundation.MediaQuery.queries[t];
                        e.SPECIAL_QUERIES[i.name] = i.value
                    }
                }
            }, {
                key: "_generateRules",
                value: function(t) {
                    var i, n = [];
                    i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                    for (var r in i) if (i.hasOwnProperty(r)) {
                        var o = i[r].slice(1, -1).split(", "),
                            s = o.slice(0, -1).join(""),
                            a = o[o.length - 1];
                        e.SPECIAL_QUERIES[a] && (a = e.SPECIAL_QUERIES[a]), n.push({
                            path: s,
                            query: a
                        })
                    }
                    this.rules = n
                }
            }, {
                key: "replace",
                value: function(e) {
                    if (this.currentPath !== e) {
                        var i = this,
                            n = "replaced.zf.interchange";
                        "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).on("load", function() {
                            i.currentPath = e
                        }).trigger(n) : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                            "background-image": "url(" + e + ")"
                        }).trigger(n) : t.get(e, function(r) {
                            i.$element.html(r).trigger(n), t(r).foundation(), i.currentPath = e
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }();
        e.defaults = {
            rules: null
        }, e.SPECIAL_QUERIES = {
            landscape: "screen and (orientation: landscape)",
            portrait: "screen and (orientation: portrait)",
            retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
        }, Foundation.plugin(e, "Interchange")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Magellan")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                    this.$targets = t("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                        "data-resize": e,
                        "data-scroll": e,
                        id: e
                    }), this.$active = t(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
                }
            }, {
                key: "calcPoints",
                value: function() {
                    var e = this,
                        i = document.body,
                        n = document.documentElement;
                    this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)), this.docHeight = Math.round(Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), this.$targets.each(function() {
                        var i = t(this),
                            n = Math.round(i.offset().top - e.options.threshold);
                        i.targetPoint = n, e.points.push(n)
                    })
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    t("html, body"), {
                        duration: e.options.animationDuration,
                        easing: e.options.animationEasing
                    };
                    t(window).one("load", function() {
                        e.options.deepLinking && location.hash && e.scrollToLoc(location.hash), e.calcPoints(), e._updateActive()
                    }), this.$element.on({
                        "resizeme.zf.trigger": this.reflow.bind(this),
                        "scrollme.zf.trigger": this._updateActive.bind(this)
                    }).on("click.zf.magellan", 'a[href^="#"]', function(t) {
                        t.preventDefault();
                        var i = this.getAttribute("href");
                        e.scrollToLoc(i)
                    })
                }
            }, {
                key: "scrollToLoc",
                value: function(e) {
                    if (!t(e).length) return !1;
                    var i = Math.round(t(e).offset().top - this.options.threshold / 2 - this.options.barOffset);
                    t("html, body").stop(!0).animate({
                        scrollTop: i
                    }, this.options.animationDuration, this.options.animationEasing)
                }
            }, {
                key: "reflow",
                value: function() {
                    this.calcPoints(), this._updateActive()
                }
            }, {
                key: "_updateActive",
                value: function() {
                    var t, e = parseInt(window.pageYOffset, 10);
                    if (e + this.winHeight === this.docHeight) t = this.points.length - 1;
                    else if (e < this.points[0]) t = 0;
                    else {
                        var i = this.scrollPos < e,
                            n = this,
                            r = this.points.filter(function(t, r) {
                                return i ? t - n.options.barOffset <= e : t - n.options.barOffset - n.options.threshold <= e
                            });
                        t = r.length ? r.length - 1 : 0
                    }
                    if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(t).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
                        var o = this.$active[0].getAttribute("href");
                        window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o
                    }
                    this.scrollPos = e, this.$element.trigger("update.zf.magellan", [this.$active])
                }
            }, {
                key: "destroy",
                value: function() {
                    if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                        var t = this.$active[0].getAttribute("href");
                        window.location.hash.replace(t, "")
                    }
                    Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            animationDuration: 500,
            animationEasing: "linear",
            threshold: 50,
            activeClass: "active",
            deepLinking: !1,
            barOffset: 0
        }, Foundation.plugin(e, "Magellan")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", {
                    ltr: {
                        ARROW_RIGHT: "next",
                        ARROW_LEFT: "previous"
                    },
                    rtl: {
                        ARROW_LEFT: "next",
                        ARROW_RIGHT: "previous"
                    }
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                    var t = this.$element.find("img"),
                        e = this.$slides.filter(".is-active");
                    e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? Foundation.onImagesLoaded(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
                }
            }, {
                key: "_loadBullets",
                value: function() {
                    this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
                }
            }, {
                key: "geoSync",
                value: function() {
                    var t = this;
                    this.timer = new Foundation.Timer(this.$element, {
                        duration: this.options.timerDelay,
                        infinite: !1
                    }, function() {
                        t.changeSlide(!0)
                    }), this.timer.start()
                }
            }, {
                key: "_prepareForOrbit",
                value: function() {
                    var t = this;
                    this._setWrapperHeight(function(e) {
                        t._setSlideHeight(e)
                    })
                }
            }, {
                key: "_setWrapperHeight",
                value: function(e) {
                    var i, n = 0,
                        r = 0;
                    this.$slides.each(function() {
                        i = this.getBoundingClientRect().height, t(this).attr("data-slide", r), r && t(this).css({
                            position: "relative",
                            display: "none"
                        }), n = i > n ? i : n, r++
                    }), r === this.$slides.length && (this.$wrapper.css({
                        height: n
                    }), e(n))
                }
            }, {
                key: "_setSlideHeight",
                value: function(e) {
                    this.$slides.each(function() {
                        t(this).css("max-height", e)
                    })
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    if (this.$slides.length > 1) {
                        if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(t) {
                                t.preventDefault(), e.changeSlide(!0)
                            }).on("swiperight.zf.orbit", function(t) {
                                t.preventDefault(), e.changeSlide(!1)
                            }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                                e.$element.data("clickedOn", !e.$element.data("clickedOn")), e.timer[e.$element.data("clickedOn") ? "pause" : "start"]()
                            }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                                e.timer.pause()
                            }).on("mouseleave.zf.orbit", function() {
                                e.$element.data("clickedOn") || e.timer.start()
                            })), this.options.navButtons) {
                            var i = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                            i.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(i) {
                                i.preventDefault(), e.changeSlide(t(this).hasClass(e.options.nextClass))
                            })
                        }
                        this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                            if (/is-active/g.test(this.className)) return !1;
                            var i = t(this).data("slide"),
                                n = i > e.$slides.filter(".is-active").data("slide"),
                                r = e.$slides.eq(i);
                            e.changeSlide(n, r, i)
                        }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(i) {
                            Foundation.Keyboard.handleKey(i, "Orbit", {
                                next: function() {
                                    e.changeSlide(!0)
                                },
                                previous: function() {
                                    e.changeSlide(!1)
                                },
                                handled: function() {
                                    t(i.target).is(e.$bullets) && e.$bullets.filter(".is-active").focus()
                                }
                            })
                        })
                    }
                }
            }, {
                key: "changeSlide",
                value: function(t, e, i) {
                    var n = this.$slides.filter(".is-active").eq(0);
                    if (/mui/g.test(n[0].className)) return !1;
                    var r, o = this.$slides.first(),
                        s = this.$slides.last(),
                        a = t ? "Right" : "Left",
                        l = t ? "Left" : "Right",
                        u = this;
                    r = e ? e : t ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : s : n.prev("." + this.options.slideClass), r.length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, r]), this.options.bullets && (i = i || this.$slides.index(r), this._updateBullets(i)), this.options.useMUI ? (Foundation.Motion.animateIn(r.addClass("is-active").css({
                        position: "absolute",
                        top: 0
                    }), this.options["animInFrom" + a], function() {
                        r.css({
                            position: "relative",
                            display: "block"
                        }).attr("aria-live", "polite")
                    }), Foundation.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function() {
                        n.removeAttr("aria-live"), u.options.autoPlay && !u.timer.isPaused && u.timer.restart()
                    })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), r.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [r]))
                }
            }, {
                key: "_updateBullets",
                value: function(t) {
                    var e = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),
                        i = e.find("span:last").detach();
                    this.$bullets.eq(t).addClass("is-active").append(i)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            bullets: !0,
            navButtons: !0,
            animInFromRight: "slide-in-right",
            animOutToRight: "slide-out-right",
            animInFromLeft: "slide-in-left",
            animOutToLeft: "slide-out-left",
            autoPlay: !0,
            timerDelay: 5e3,
            infiniteWrap: !0,
            swipe: !0,
            pauseOnHover: !0,
            accessible: !0,
            containerClass: "orbit-container",
            slideClass: "orbit-slide",
            boxOfBullets: "orbit-bullets",
            nextClass: "orbit-next",
            prevClass: "orbit-previous",
            useMUI: !0
        }, Foundation.plugin(e, "Orbit")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = t(i), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    if ("string" == typeof this.rules) {
                        for (var e = {}, n = this.rules.split(" "), r = 0; r < n.length; r++) {
                            var o = n[r].split("-"),
                                s = o.length > 1 ? o[0] : "small",
                                a = o.length > 1 ? o[1] : o[0];
                            null !== i[a] && (e[s] = i[a])
                        }
                        this.rules = e
                    }
                    t.isEmptyObject(this.rules) || this._checkMediaQueries()
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this;
                    t(window).on("changed.zf.mediaquery", function() {
                        e._checkMediaQueries()
                    })
                }
            }, {
                key: "_checkMediaQueries",
                value: function() {
                    var e, n = this;
                    t.each(this.rules, function(t) {
                        Foundation.MediaQuery.atLeast(t) && (e = t)
                    }), e && (this.currentPlugin instanceof this.rules[e].plugin || (t.each(i, function(t, e) {
                        n.$element.removeClass(e.cssClass)
                    }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[e].plugin(this.$element, {})))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.currentPlugin.destroy(), t(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {};
        var i = {
            dropdown: {
                cssClass: "dropdown",
                plugin: Foundation._plugins["dropdown-menu"] || null
            },
            drilldown: {
                cssClass: "drilldown",
                plugin: Foundation._plugins.drilldown || null
            },
            accordion: {
                cssClass: "accordion-menu",
                plugin: Foundation._plugins["accordion-menu"] || null
            }
        };
        Foundation.plugin(e, "ResponsiveMenu")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = t(i), this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this.$element.data("responsive-toggle");
                    e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = t("#" + e), this.$toggler = this.$element.find("[data-toggle]"), this._update()
                }
            }, {
                key: "_events",
                value: function() {
                    this._updateMqHandler = this._update.bind(this), t(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
                }
            }, {
                key: "_update",
                value: function() {
                    Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
                }
            }, {
                key: "toggleMenu",
                value: function() {
                    Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), t(window).off("changed.zf.mediaquery", this._updateMqHandler), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            hideFor: "medium"
        }, Foundation.plugin(e, "ResponsiveToggle")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        function e() {
            return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
        }
        function i() {
            return /Android/.test(window.navigator.userAgent)
        }
        function n() {
            return e() || i()
        }
        var r = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                    ENTER: "open",
                    SPACE: "open",
                    ESCAPE: "close",
                    TAB: "tab_forward",
                    SHIFT_TAB: "tab_backward"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                        mq: Foundation.MediaQuery.current
                    }, this.isMobile = n(), this.$anchor = t(t('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                        "aria-controls": this.id,
                        "aria-haspopup": !0,
                        tabindex: 0
                    }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                        role: "dialog",
                        "aria-hidden": !0,
                        "data-yeti-box": this.id,
                        "data-resize": this.id
                    }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(t("body")), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && t(window).one("load.zf.reveal", this.open.bind(this))
                }
            }, {
                key: "_makeOverlay",
                value: function(e) {
                    var i = t("<div></div>").addClass("reveal-overlay").appendTo("body");
                    return i
                }
            }, {
                key: "_updatePosition",
                value: function() {
                    var e, i, n = this.$element.outerWidth(),
                        r = t(window).width(),
                        o = this.$element.outerHeight(),
                        s = t(window).height();
                    e = "auto" === this.options.hOffset ? parseInt((r - n) / 2, 10) : parseInt(this.options.hOffset, 10), i = "auto" === this.options.vOffset ? o > s ? parseInt(Math.min(100, s / 10), 10) : parseInt((s - o) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                        top: i + "px"
                    }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                        left: e + "px"
                    }), this.$element.css({
                        margin: "0px"
                    }))
                }
            }, {
                key: "_events",
                value: function() {
                    var e = this,
                        i = this;
                    this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "close.zf.trigger": function(n, r) {
                            if (n.target === i.$element[0] || t(n.target).parents("[data-closable]")[0] === r) return e.close.apply(e)
                        },
                        "toggle.zf.trigger": this.toggle.bind(this),
                        "resizeme.zf.trigger": function() {
                            i._updatePosition()
                        }
                    }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(t) {
                        13 !== t.which && 32 !== t.which || (t.stopPropagation(), t.preventDefault(), i.open())
                    }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                        e.target !== i.$element[0] && !t.contains(i.$element[0], e.target) && t.contains(document, e.target) && i.close()
                    }), this.options.deepLink && t(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
                }
            }, {
                key: "_handleState",
                value: function(t) {
                    window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
                }
            }, {
                key: "open",
                value: function() {
                    var e = this;
                    if (this.options.deepLink) {
                        var i = "#" + this.id;
                        window.history.pushState ? window.history.pushState(null, null, i) : window.location.hash = i
                    }
                    if (this.isActive = !0, this.$element.css({
                            visibility: "hidden"
                        }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                            visibility: "hidden"
                        }).show(), this._updatePosition(), this.$element.hide().css({
                            visibility: ""
                        }), this.$overlay && (this.$overlay.css({
                            visibility: ""
                        }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this.options.animationIn) {
                        var n;
                        !
                            function() {
                                var t = function() {
                                    n.$element.attr({
                                        "aria-hidden": !1,
                                        tabindex: -1
                                    }).focus()
                                };
                                n = e, e.options.overlay && Foundation.Motion.animateIn(e.$overlay, "fade-in"), Foundation.Motion.animateIn(e.$element, e.options.animationIn, function() {
                                    e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), t()
                                })
                            }()
                    } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                    this.$element.attr({
                        "aria-hidden": !1,
                        tabindex: -1
                    }).focus(), this.$element.trigger("open.zf.reveal"), this.isMobile ? (this.originalScrollPos = window.pageYOffset, t("html, body").addClass("is-reveal-open")) : t("body").addClass("is-reveal-open"), setTimeout(function() {
                        e._extraHandlers()
                    }, 0)
                }
            }, {
                key: "_extraHandlers",
                value: function() {
                    var e = this;
                    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || t("body").on("click.zf.reveal", function(i) {
                        i.target !== e.$element[0] && !t.contains(e.$element[0], i.target) && t.contains(document, i.target) && e.close()
                    }), this.options.closeOnEsc && t(window).on("keydown.zf.reveal", function(t) {
                        Foundation.Keyboard.handleKey(t, "Reveal", {
                            close: function() {
                                e.options.closeOnEsc && (e.close(), e.$anchor.focus())
                            }
                        })
                    }), this.$element.on("keydown.zf.reveal", function(i) {
                        var n = t(this);
                        Foundation.Keyboard.handleKey(i, "Reveal", {
                            tab_forward: function() {
                                return e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), e.$element.find(":focus").is(e.focusableElements.eq(-1)) ? (e.focusableElements.eq(0).focus(), !0) : 0 === e.focusableElements.length || void 0
                            },
                            tab_backward: function() {
                                return e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), e.$element.find(":focus").is(e.focusableElements.eq(0)) || e.$element.is(":focus") ? (e.focusableElements.eq(-1).focus(), !0) : 0 === e.focusableElements.length || void 0
                            },
                            open: function() {
                                e.$element.find(":focus").is(e.$element.find("[data-close]")) ? setTimeout(function() {
                                    e.$anchor.focus()
                                }, 1) : n.is(e.focusableElements) && e.open()
                            },
                            close: function() {
                                e.options.closeOnEsc && (e.close(), e.$anchor.focus())
                            },
                            handled: function(t) {
                                t && i.preventDefault()
                            }
                        })
                    })
                }
            }, {
                key: "close",
                value: function() {
                    function e() {
                        i.isMobile ? (t("html, body").removeClass("is-reveal-open"), i.originalScrollPos && (t("body").scrollTop(i.originalScrollPos), i.originalScrollPos = null)) : t("body").removeClass("is-reveal-open"), i.$element.attr("aria-hidden", !0), i.$element.trigger("closed.zf.reveal")
                    }
                    if (!this.isActive || !this.$element.is(":visible")) return !1;
                    var i = this;
                    this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", e) : e(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, e) : e(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && t(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && t("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, i.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
                }
            }, {
                key: "toggle",
                value: function() {
                    this.isActive ? this.close() : this.open()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.options.overlay && (this.$element.appendTo(t("body")), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), t(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        r.defaults = {
            animationIn: "",
            animationOut: "",
            showDelay: 0,
            hideDelay: 0,
            closeOnClick: !0,
            closeOnEsc: !0,
            multipleOpened: !1,
            vOffset: "auto",
            hOffset: "auto",
            fullScreen: !1,
            btmOffsetPct: 10,
            overlay: !0,
            resetOnClose: !1,
            deepLink: !1
        }, Foundation.plugin(r, "Reveal")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        function e(t, e) {
            return t / e
        }
        function i(t, e, i, n) {
            return Math.abs(t.position()[e] + t[n]() / 2 - i)
        }
        var n = function() {
            function n(e, i) {
                _classCallCheck(this, n), this.$element = e, this.options = t.extend({}, n.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", {
                    ltr: {
                        ARROW_RIGHT: "increase",
                        ARROW_UP: "increase",
                        ARROW_DOWN: "decrease",
                        ARROW_LEFT: "decrease",
                        SHIFT_ARROW_RIGHT: "increase_fast",
                        SHIFT_ARROW_UP: "increase_fast",
                        SHIFT_ARROW_DOWN: "decrease_fast",
                        SHIFT_ARROW_LEFT: "decrease_fast"
                    },
                    rtl: {
                        ARROW_LEFT: "increase",
                        ARROW_RIGHT: "decrease",
                        SHIFT_ARROW_LEFT: "increase_fast",
                        SHIFT_ARROW_RIGHT: "decrease_fast"
                    }
                })
            }
            return _createClass(n, [{
                key: "_init",
                value: function() {
                    this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : t("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                    var e = !1,
                        i = this;
                    (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = t().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : t("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), e = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function() {
                        i._setHandlePos(i.$handle2, i.options.initialEnd, !0)
                    }), this._setInitAttr(1), this._events(this.$handle2)), e || this._setHandlePos(this.$handle, this.options.initialStart, !0)
                }
            }, {
                key: "_setHandlePos",
                value: function(t, i, n, r) {
                    if (!this.$element.hasClass(this.options.disabledClass)) {
                        i = parseFloat(i), i < this.options.start ? i = this.options.start : i > this.options.end && (i = this.options.end);
                        var o = this.options.doubleSided;
                        if (o) if (0 === this.handles.index(t)) {
                            var s = parseFloat(this.$handle2.attr("aria-valuenow"));
                            i = i >= s ? s - this.options.step : i
                        } else {
                            var a = parseFloat(this.$handle.attr("aria-valuenow"));
                            i = i <= a ? a + this.options.step : i
                        }
                        this.options.vertical && !n && (i = this.options.end - i);
                        var l = this,
                            u = this.options.vertical,
                            c = u ? "height" : "width",
                            h = u ? "top" : "left",
                            d = t[0].getBoundingClientRect()[c],
                            f = this.$element[0].getBoundingClientRect()[c],
                            p = e(i - this.options.start, this.options.end - this.options.start).toFixed(2),
                            m = (f - d) * p,
                            g = (100 * e(m, f)).toFixed(this.options.decimal);
                        i = parseFloat(i.toFixed(this.options.decimal));
                        var v = {};
                        if (this._setValues(t, i), o) {
                            var y, _ = 0 === this.handles.index(t),
                                b = ~~ (100 * e(d, f));
                            if (_) v[h] = g + "%", y = parseFloat(this.$handle2[0].style[h]) - g + b, r && "function" == typeof r && r();
                            else {
                                var w = parseFloat(this.$handle[0].style[h]);
                                y = g - (isNaN(w) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : w) + b
                            }
                            v["min-" + c] = y + "%"
                        }
                        this.$element.one("finished.zf.animate", function() {
                            l.$element.trigger("moved.zf.slider", [t])
                        });
                        var x = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                        Foundation.Move(x, t, function() {
                            t.css(h, g + "%"), l.options.doubleSided ? l.$fill.css(v) : l.$fill.css(c, 100 * p + "%")
                        }), clearTimeout(l.timeout), l.timeout = setTimeout(function() {
                            l.$element.trigger("changed.zf.slider", [t])
                        }, l.options.changedDelay)
                    }
                }
            }, {
                key: "_setInitAttr",
                value: function(t) {
                    var e = this.inputs.eq(t).attr("id") || Foundation.GetYoDigits(6, "slider");
                    this.inputs.eq(t).attr({
                        id: e,
                        max: this.options.end,
                        min: this.options.start,
                        step: this.options.step
                    }), this.handles.eq(t).attr({
                        role: "slider",
                        "aria-controls": e,
                        "aria-valuemax": this.options.end,
                        "aria-valuemin": this.options.start,
                        "aria-valuenow": 0 === t ? this.options.initialStart : this.options.initialEnd,
                        "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                        tabindex: 0
                    })
                }
            }, {
                key: "_setValues",
                value: function(t, e) {
                    var i = this.options.doubleSided ? this.handles.index(t) : 0;
                    this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
                }
            }, {
                key: "_handleEvent",
                value: function(n, r, o) {
                    var s, a;
                    if (o) s = this._adjustValue(null, o), a = !0;
                    else {
                        n.preventDefault();
                        var l = this,
                            u = this.options.vertical,
                            c = u ? "height" : "width",
                            h = u ? "top" : "left",
                            d = u ? n.pageY : n.pageX,
                            f = (this.$handle[0].getBoundingClientRect()[c] / 2, this.$element[0].getBoundingClientRect()[c]),
                            p = u ? t(window).scrollTop() : t(window).scrollLeft(),
                            m = this.$element.offset()[h];
                        n.clientY === n.pageY && (d += p);
                        var g, v = d - m;
                        g = v < 0 ? 0 : v > f ? f : v;
                        var y = e(g, f);
                        if (s = (this.options.end - this.options.start) * y + this.options.start, Foundation.rtl() && !this.options.vertical && (s = this.options.end - s), s = l._adjustValue(null, s), a = !1, !r) {
                            var _ = i(this.$handle, h, g, c),
                                b = i(this.$handle2, h, g, c);
                            r = _ <= b ? this.$handle : this.$handle2
                        }
                    }
                    this._setHandlePos(r, s, a)
                }
            }, {
                key: "_adjustValue",
                value: function(t, e) {
                    var i, n, r, o, s = this.options.step,
                        a = parseFloat(s / 2);
                    return i = t ? parseFloat(t.attr("aria-valuenow")) : e, n = i % s, r = i - n, o = r + s, 0 === n ? i : i = i >= r + a ? o : r
                }
            }, {
                key: "_events",
                value: function(e) {
                    var i, n = this;
                    if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
                            var i = n.inputs.index(t(this));
                            n._handleEvent(e, n.handles.eq(i), t(this).val())
                        }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                            return !n.$element.data("dragging") && void(t(e.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(e) : n._handleEvent(e, n.$handle)))
                        }), this.options.draggable) {
                        this.handles.addTouch();
                        var r = t("body");
                        e.off("mousedown.zf.slider").on("mousedown.zf.slider", function(o) {
                            e.addClass("is-dragging"), n.$fill.addClass("is-dragging"), n.$element.data("dragging", !0), i = t(o.currentTarget), r.on("mousemove.zf.slider", function(t) {
                                t.preventDefault(), n._handleEvent(t, i)
                            }).on("mouseup.zf.slider", function(t) {
                                n._handleEvent(t, i), e.removeClass("is-dragging"), n.$fill.removeClass("is-dragging"), n.$element.data("dragging", !1), r.off("mousemove.zf.slider mouseup.zf.slider")
                            })
                        }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                            t.preventDefault()
                        })
                    }
                    e.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                        var i, r = t(this),
                            o = n.options.doubleSided ? n.handles.index(r) : 0,
                            s = parseFloat(n.inputs.eq(o).val());
                        Foundation.Keyboard.handleKey(e, "Slider", {
                            decrease: function() {
                                i = s - n.options.step
                            },
                            increase: function() {
                                i = s + n.options.step
                            },
                            decrease_fast: function() {
                                i = s - 10 * n.options.step
                            },
                            increase_fast: function() {
                                i = s + 10 * n.options.step
                            },
                            handled: function() {
                                e.preventDefault(), n._setHandlePos(r, i, !0)
                            }
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), Foundation.unregisterPlugin(this)
                }
            }]), n
        }();
        n.defaults = {
            start: 0,
            end: 100,
            step: 1,
            initialStart: 0,
            initialEnd: 100,
            binding: !1,
            clickSelect: !0,
            vertical: !1,
            draggable: !0,
            disabled: !1,
            doubleSided: !1,
            decimal: 2,
            moveTime: 200,
            disabledClass: "disabled",
            invertVertical: !1,
            changedDelay: 500
        }, Foundation.plugin(n, "Slider")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        function e(t) {
            return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
        }
        var i = function() {
            function i(e, n) {
                _classCallCheck(this, i), this.$element = e, this.options = t.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Sticky")
            }
            return _createClass(i, [{
                key: "_init",
                value: function() {
                    var e = this.$element.parent("[data-sticky-container]"),
                        i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
                        n = this;
                    e.length || (this.wasWrapped = !0), this.$container = e.length ? e : t(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                        "data-resize": i
                    }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, t(window).one("load.zf.sticky", function() {
                        n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = t("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function() {
                            n._calc(!1)
                        }), n._events(i.split("-").reverse().join("-"))
                    })
                }
            }, {
                key: "_parsePoints",
                value: function() {
                    for (var e = "" == this.options.topAnchor ? 1 : this.options.topAnchor, i = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, n = [e, i], r = {}, o = 0, s = n.length; o < s && n[o]; o++) {
                        var a;
                        if ("number" == typeof n[o]) a = n[o];
                        else {
                            var l = n[o].split(":"),
                                u = t("#" + l[0]);
                            a = u.offset().top, l[1] && "bottom" === l[1].toLowerCase() && (a += u[0].getBoundingClientRect().height)
                        }
                        r[o] = a
                    }
                    this.points = r
                }
            }, {
                key: "_events",
                value: function(e) {
                    var i = this,
                        n = this.scrollListener = "scroll.zf." + e;
                    this.isOn || (this.canStick && (this.isOn = !0, t(window).off(n).on(n, function(t) {
                        0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery, i._setSizes(function() {
                            i._calc(!1, window.pageYOffset)
                        })) : (i.scrollCount--, i._calc(!1, window.pageYOffset))
                    })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(t, r) {
                        i._setSizes(function() {
                            i._calc(!1), i.canStick ? i.isOn || i._events(e) : i.isOn && i._pauseListeners(n)
                        })
                    }))
                }
            }, {
                key: "_pauseListeners",
                value: function(e) {
                    this.isOn = !1, t(window).off(e), this.$element.trigger("pause.zf.sticky")
                }
            }, {
                key: "_calc",
                value: function(t, e) {
                    return t && this._setSizes(), this.canStick ? (e || (e = window.pageYOffset), void(e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1)
                }
            }, {
                key: "_setSticky",
                value: function() {
                    var t = this,
                        e = this.options.stickTo,
                        i = "top" === e ? "marginTop" : "marginBottom",
                        n = "top" === e ? "bottom" : "top",
                        r = {};
                    r[i] = this.options[i] + "em", r[e] = 0, r[n] = "auto", r.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + e).css(r).trigger("sticky.zf.stuckto:" + e), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        t._setSizes()
                    })
                }
            }, {
                key: "_removeSticky",
                value: function(t) {
                    var e = this.options.stickTo,
                        i = "top" === e,
                        n = {},
                        r = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                        o = i ? "marginTop" : "marginBottom",
                        s = t ? "top" : "bottom";
                    n[o] = 0, n.bottom = "auto", t ? n.top = 0 : n.top = r, n.left = "", this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + e).addClass("is-anchored is-at-" + s).css(n).trigger("sticky.zf.unstuckfrom:" + s)
                }
            }, {
                key: "_setSizes",
                value: function(t) {
                    this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
                    var e = this.$container[0].getBoundingClientRect().width,
                        i = window.getComputedStyle(this.$container[0]),
                        n = parseInt(i["padding-right"], 10);
                    this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                        "max-width": e - n + "px"
                    });
                    var r = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                    if ("none" == this.$element.css("display") && (r = 0), this.containerHeight = r, this.$container.css({
                            height: r
                        }), this.elemHeight = r, this.isStuck) this.$element.css({
                        left: this.$container.offset().left + parseInt(i["padding-left"], 10)
                    });
                    else if (this.$element.hasClass("is-at-bottom")) {
                        var o = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                        this.$element.css("top", o)
                    }
                    this._setBreakPoints(r, function() {
                        t && "function" == typeof t && t()
                    })
                }
            }, {
                key: "_setBreakPoints",
                value: function(t, i) {
                    if (!this.canStick) {
                        if (!i || "function" != typeof i) return !1;
                        i()
                    }
                    var n = e(this.options.marginTop),
                        r = e(this.options.marginBottom),
                        o = this.points ? this.points[0] : this.$anchor.offset().top,
                        s = this.points ? this.points[1] : o + this.anchorHeight,
                        a = window.innerHeight;
                    "top" === this.options.stickTo ? (o -= n, s -= t + n) : "bottom" === this.options.stickTo && (o -= a - (t + r), s -= a - r), this.topPoint = o, this.bottomPoint = s, i && "function" == typeof i && i()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                        height: "",
                        top: "",
                        bottom: "",
                        "max-width": ""
                    }).off("resizeme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), t(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                        height: ""
                    }), Foundation.unregisterPlugin(this)
                }
            }]), i
        }();
        i.defaults = {
            container: "<div data-sticky-container></div>",
            stickTo: "top",
            anchor: "",
            topAnchor: "",
            btmAnchor: "",
            marginTop: 1,
            marginBottom: 1,
            stickyOn: "medium",
            stickyClass: "sticky",
            containerClass: "sticky-container",
            checkEvery: -1
        }, Foundation.plugin(i, "Sticky")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "previous",
                    ARROW_DOWN: "next",
                    ARROW_LEFT: "previous"
                })
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this;
                    if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                            var i = t(this),
                                n = i.find("a"),
                                r = i.hasClass("is-active"),
                                o = n[0].hash.slice(1),
                                s = n[0].id ? n[0].id : o + "-label",
                                a = t("#" + o);
                            i.attr({
                                role: "presentation"
                            }), n.attr({
                                role: "tab",
                                "aria-controls": o,
                                "aria-selected": r,
                                id: s
                            }), a.attr({
                                role: "tabpanel",
                                "aria-hidden": !r,
                                "aria-labelledby": s
                            }), r && e.options.autoFocus && n.focus()
                        }), this.options.matchHeight) {
                        var i = this.$tabContent.find("img");
                        i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                    }
                    this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), t(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
                }
            }, {
                key: "_addClickHandler",
                value: function() {
                    var e = this;
                    this.$element.off("http://www.we7shop.com/Public/static/index/js/click.zf.tabs").on("http://www.we7shop.com/Public/static/index/js/click.zf.tabs", "." + this.options.linkClass, function(i) {
                        i.preventDefault(), i.stopPropagation(), t(this).hasClass("is-active") || e._handleTabChange(t(this))
                    })
                }
            }, {
                key: "_addKeyHandler",
                value: function() {
                    var e = this;
                    e.$element.find("li:first-of-type"), e.$element.find("li:last-of-type");
                    this.$tabTitles.off("http://www.we7shop.com/Public/static/index/js/keydown.zf.tabs").on("http://www.we7shop.com/Public/static/index/js/keydown.zf.tabs", function(i) {
                        if (9 !== i.which) {
                            var n, r, o = t(this),
                                s = o.parent("ul").children("li");
                            s.each(function(i) {
                                if (t(this).is(o)) return void(e.options.wrapOnKeys ? (n = 0 === i ? s.last() : s.eq(i - 1), r = i === s.length - 1 ? s.first() : s.eq(i + 1)) : (n = s.eq(Math.max(0, i - 1)), r = s.eq(Math.min(i + 1, s.length - 1))))
                            }), Foundation.Keyboard.handleKey(i, "Tabs", {
                                open: function() {
                                    o.find('[role="tab"]').focus(), e._handleTabChange(o)
                                },
                                previous: function() {
                                    n.find('[role="tab"]').focus(), e._handleTabChange(n)
                                },
                                next: function() {
                                    r.find('[role="tab"]').focus(), e._handleTabChange(r)
                                },
                                handled: function() {
                                    i.stopPropagation(), i.preventDefault()
                                }
                            })
                        }
                    })
                }
            }, {
                key: "_handleTabChange",
                value: function(e) {
                    var i = e.find('[role="tab"]'),
                        n = i[0].hash,
                        r = this.$tabContent.find(n),
                        o = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                            "aria-selected": "false"
                        });
                    t("#" + o.attr("aria-controls")).removeClass("is-active").attr({
                        "aria-hidden": "true"
                    }), e.addClass("is-active"), i.attr({
                        "aria-selected": "true"
                    }), r.addClass("is-active").attr({
                        "aria-hidden": "false"
                    }), this.$element.trigger("http://www.we7shop.com/Public/static/index/js/change.zf.tabs", [e])
                }
            }, {
                key: "selectTab",
                value: function(t) {
                    var e;
                    e = "object" == typeof t ? t[0].id : t, e.indexOf("#") < 0 && (e = "#" + e);
                    var i = this.$tabTitles.find('[href="' + e + '"]').parent("." + this.options.linkClass);
                    this._handleTabChange(i)
                }
            }, {
                key: "_setHeight",
                value: function() {
                    var e = 0;
                    this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                        var i = t(this),
                            n = i.hasClass("is-active");
                        n || i.css({
                            visibility: "hidden",
                            display: "block"
                        });
                        var r = this.getBoundingClientRect().height;
                        n || i.css({
                            visibility: "",
                            display: ""
                        }), e = r > e ? r : e
                    }).css("height", e + "px")
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.find("." + this.options.linkClass).off("http://www.we7shop.com/Public/static/index/js/.zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && t(window).off("changed.zf.mediaquery", this._setHeightMqHandler), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            autoFocus: !1,
            wrapOnKeys: !0,
            matchHeight: !1,
            linkClass: "tabs-title",
            panelClass: "tabs-panel"
        }, Foundation.plugin(e, "Tabs")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, i.data(), n), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e;
                    this.options.animate ? (e = this.options.animate.split(" "), this.animationIn = e[0], this.animationOut = e[1] || null) : (e = this.$element.data("toggler"), this.className = "." === e[0] ? e.slice(1) : e);
                    var i = this.$element[0].id;
                    t('[data-open="' + i + '"], [data-close="' + i + '"], [data-toggle="' + i + '"]').attr("aria-controls", i), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
                }
            }, {
                key: "_events",
                value: function() {
                    this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
                }
            }, {
                key: "toggle",
                value: function() {
                    this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
                }
            }, {
                key: "_toggleClass",
                value: function() {
                    this.$element.toggleClass(this.className);
                    var t = this.$element.hasClass(this.className);
                    t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t)
                }
            }, {
                key: "_toggleAnimate",
                value: function() {
                    var t = this;
                    this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                        t._updateARIA(!0), this.trigger("on.zf.toggler")
                    }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                        t._updateARIA(!1), this.trigger("off.zf.toggler")
                    })
                }
            }, {
                key: "_updateARIA",
                value: function(t) {
                    this.$element.attr("aria-expanded", !! t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            animate: !1
        }, Foundation.plugin(e, "Toggler")
    }(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!
    function(t) {
        var e = function() {
            function e(i, n) {
                _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
            }
            return _createClass(e, [{
                key: "_init",
                value: function() {
                    var e = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                    this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? t(this.options.template) : this._buildTemplate(e), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                        title: "",
                        "aria-describedby": e,
                        "data-yeti-box": e,
                        "data-toggle": e,
                        "data-resize": e
                    }).addClass(this.options.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
                }
            }, {
                key: "_getPositionClass",
                value: function(t) {
                    if (!t) return "";
                    var e = t[0].className.match(/\b(top|left|right)\b/g);
                    return e = e ? e[0] : ""
                }
            }, {
                key: "_buildTemplate",
                value: function(e) {
                    var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(),
                        n = t("<div></div>").addClass(i).attr({
                            role: "tooltip",
                            "aria-hidden": !0,
                            "data-is-active": !1,
                            "data-is-focus": !1,
                            id: e
                        });
                    return n
                }
            }, {
                key: "_reposition",
                value: function(t) {
                    this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : this.template.removeClass(t), this.classChanged = !0, this.counter--
                }
            }, {
                key: "_setPosition",
                value: function() {
                    var t = this._getPositionClass(this.template),
                        e = Foundation.Box.GetDimensions(this.template),
                        i = Foundation.Box.GetDimensions(this.$element),
                        n = "left" === t ? "left" : "right" === t ? "left" : "top",
                        r = "top" === n ? "height" : "width";
                    "height" === r ? this.options.vOffset : this.options.hOffset;
                    if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                        width: i.windowDims.width - 2 * this.options.hOffset,
                        height: "auto"
                    }), !1;
                    for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (t || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(t), this._setPosition()
                }
            }, {
                key: "show",
                value: function() {
                    if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                    var t = this;
                    this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                        "data-is-active": !0,
                        "aria-hidden": !1
                    }), t.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    this.template.stop().attr({
                        "aria-hidden": !0,
                        "data-is-active": !1
                    }).fadeOut(this.options.fadeOutDuration, function() {
                        t.isActive = !1, t.isClick = !1, t.classChanged && (t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass), t.usedPositions = [], t.counter = 4, t.classChanged = !1)
                    }), this.$element.trigger("hide.zf.tooltip")
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this,
                        e = (this.template, !1);
                    this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                        t.isActive || (t.timeout = setTimeout(function() {
                            t.show()
                        }, t.options.hoverDelay))
                    }).on("mouseleave.zf.tooltip", function(i) {
                        clearTimeout(t.timeout), (!e || t.isClick && !t.options.clickOpen) && t.hide()
                    }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                        e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                    }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                        e.stopImmediatePropagation(), t.isClick = !0
                    }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                        t.isActive ? t.hide() : t.show()
                    }), this.$element.on({
                        "close.zf.trigger": this.hide.bind(this)
                    }), this.$element.on("focus.zf.tooltip", function(i) {
                        return e = !0, t.isClick ? (t.options.clickOpen || (e = !1), !1) : void t.show()
                    }).on("focusout.zf.tooltip", function(i) {
                        e = !1, t.isClick = !1, t.hide()
                    }).on("resizeme.zf.trigger", function() {
                        t.isActive && t._setPosition()
                    })
                }
            }, {
                key: "toggle",
                value: function() {
                    this.isActive ? this.hide() : this.show()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this)
                }
            }]), e
        }();
        e.defaults = {
            disableForTouch: !1,
            hoverDelay: 200,
            fadeInDuration: 150,
            fadeOutDuration: 150,
            disableHover: !1,
            templateClasses: "",
            tooltipClass: "tooltip",
            triggerClass: "has-tip",
            showOn: "small",
            template: "",
            tipText: "",
            touchCloseText: "Tap to close.",
            clickOpen: !0,
            positionClass: "",
            vOffset: 10,
            hOffset: 12
        }, Foundation.plugin(e, "Tooltip")
    }(jQuery), function() {
    function t(t) {
        function e(e, i, n, r, o, s) {
            for (; o >= 0 && s > o; o += t) {
                var a = r ? r[o] : o;
                n = i(n, e[a], a, e)
            }
            return n
        }
        return function(i, n, r, o) {
            n = _(n, o, 4);
            var s = !S(i) && y.keys(i),
                a = (s || i).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = i[s ? s[l] : l], l += t), e(i, n, r, s, l, a)
        }
    }
    function e(t) {
        return function(e, i, n) {
            i = b(i, n);
            for (var r = k(e), o = t > 0 ? 0 : r - 1; o >= 0 && r > o; o += t) if (i(e[o], o, e)) return o;
            return -1
        }
    }
    function i(t, e, i) {
        return function(n, r, o) {
            var s = 0,
                a = k(n);
            if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (i && o && a) return o = i(n, r), n[o] === r ? o : -1;
            if (r !== r) return o = e(c.call(n, s, a), y.isNaN), o >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && a > o; o += t) if (n[o] === r) return o;
            return -1
        }
    }
    function n(t, e) {
        var i = F.length,
            n = t.constructor,
            r = y.isFunction(n) && n.prototype || a,
            o = "constructor";
        for (y.has(t, o) && !y.contains(e, o) && e.push(o); i--;) o = F[i], o in t && t[o] !== r[o] && !y.contains(e, o) && e.push(o)
    }
    var r = this,
        o = r._,
        s = Array.prototype,
        a = Object.prototype,
        l = Function.prototype,
        u = s.push,
        c = s.slice,
        h = a.toString,
        d = a.hasOwnProperty,
        f = Array.isArray,
        p = Object.keys,
        m = l.bind,
        g = Object.create,
        v = function() {},
        y = function(t) {
            return t instanceof y ? t : this instanceof y ? void(this._wrapped = t) : new y(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var _ = function(t, e, i) {
            if (void 0 === e) return t;
            switch (null == i ? 3 : i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function(i, n, r) {
                        return t.call(e, i, n, r)
                    };
                case 4:
                    return function(i, n, r, o) {
                        return t.call(e, i, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        b = function(t, e, i) {
            return null == t ? y.identity : y.isFunction(t) ? _(t, e, i) : y.isObject(t) ? y.matcher(t) : y.property(t)
        };
    y.iteratee = function(t, e) {
        return b(t, e, 1 / 0)
    };
    var w = function(t, e) {
            return function(i) {
                var n = arguments.length;
                if (2 > n || null == i) return i;
                for (var r = 1; n > r; r++) for (var o = arguments[r], s = t(o), a = s.length, l = 0; a > l; l++) {
                    var u = s[l];
                    e && void 0 !== i[u] || (i[u] = o[u])
                }
                return i
            }
        },
        x = function(t) {
            if (!y.isObject(t)) return {};
            if (g) return g(t);
            v.prototype = t;
            var e = new v;
            return v.prototype = null, e
        },
        T = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        C = Math.pow(2, 53) - 1,
        k = T("length"),
        S = function(t) {
            var e = k(t);
            return "number" == typeof e && e >= 0 && C >= e
        };
    y.each = y.forEach = function(t, e, i) {
        e = _(e, i);
        var n, r;
        if (S(t)) for (n = 0, r = t.length; r > n; n++) e(t[n], n, t);
        else {
            var o = y.keys(t);
            for (n = 0, r = o.length; r > n; n++) e(t[o[n]], o[n], t)
        }
        return t
    }, y.map = y.collect = function(t, e, i) {
        e = b(e, i);
        for (var n = !S(t) && y.keys(t), r = (n || t).length, o = Array(r), s = 0; r > s; s++) {
            var a = n ? n[s] : s;
            o[s] = e(t[a], a, t)
        }
        return o
    }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function(t, e, i) {
        var n;
        return n = S(t) ? y.findIndex(t, e, i) : y.findKey(t, e, i), void 0 !== n && n !== -1 ? t[n] : void 0
    }, y.filter = y.select = function(t, e, i) {
        var n = [];
        return e = b(e, i), y.each(t, function(t, i, r) {
            e(t, i, r) && n.push(t)
        }), n
    }, y.reject = function(t, e, i) {
        return y.filter(t, y.negate(b(e)), i)
    }, y.every = y.all = function(t, e, i) {
        e = b(e, i);
        for (var n = !S(t) && y.keys(t), r = (n || t).length, o = 0; r > o; o++) {
            var s = n ? n[o] : o;
            if (!e(t[s], s, t)) return !1
        }
        return !0
    }, y.some = y.any = function(t, e, i) {
        e = b(e, i);
        for (var n = !S(t) && y.keys(t), r = (n || t).length, o = 0; r > o; o++) {
            var s = n ? n[o] : o;
            if (e(t[s], s, t)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(t, e, i, n) {
        return S(t) || (t = y.values(t)), ("number" != typeof i || n) && (i = 0), y.indexOf(t, e, i) >= 0
    }, y.invoke = function(t, e) {
        var i = c.call(arguments, 2),
            n = y.isFunction(e);
        return y.map(t, function(t) {
            var r = n ? e : t[e];
            return null == r ? r : r.apply(t, i)
        })
    }, y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }, y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }, y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }, y.max = function(t, e, i) {
        var n, r, o = -1 / 0,
            s = -1 / 0;
        if (null == e && null != t) {
            t = S(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], n > o && (o = n)
        } else e = b(e, i), y.each(t, function(t, i, n) {
            r = e(t, i, n), (r > s || r === -1 / 0 && o === -1 / 0) && (o = t, s = r)
        });
        return o
    }, y.min = function(t, e, i) {
        var n, r, o = 1 / 0,
            s = 1 / 0;
        if (null == e && null != t) {
            t = S(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], o > n && (o = n)
        } else e = b(e, i), y.each(t, function(t, i, n) {
            r = e(t, i, n), (s > r || 1 / 0 === r && 1 / 0 === o) && (o = t, s = r)
        });
        return o
    }, y.shuffle = function(t) {
        for (var e, i = S(t) ? t : y.values(t), n = i.length, r = Array(n), o = 0; n > o; o++) e = y.random(0, o), e !== o && (r[o] = r[e]), r[e] = i[o];
        return r
    }, y.sample = function(t, e, i) {
        return null == e || i ? (S(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }, y.sortBy = function(t, e, i) {
        return e = b(e, i), y.pluck(y.map(t, function(t, i, n) {
            return {
                value: t,
                index: i,
                criteria: e(t, i, n)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var P = function(t) {
        return function(e, i, n) {
            var r = {};
            return i = b(i, n), y.each(e, function(n, o) {
                var s = i(n, o, e);
                t(r, n, s)
            }), r
        }
    };
    y.groupBy = P(function(t, e, i) {
        y.has(t, i) ? t[i].push(e) : t[i] = [e]
    }), y.indexBy = P(function(t, e, i) {
        t[i] = e
    }), y.countBy = P(function(t, e, i) {
        y.has(t, i) ? t[i]++ : t[i] = 1
    }), y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : S(t) ? y.map(t, y.identity) : y.values(t) : []
    }, y.size = function(t) {
        return null == t ? 0 : S(t) ? t.length : y.keys(t).length
    }, y.partition = function(t, e, i) {
        e = b(e, i);
        var n = [],
            r = [];
        return y.each(t, function(t, i, o) {
            (e(t, i, o) ? n : r).push(t)
        }), [n, r]
    }, y.first = y.head = y.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : y.initial(t, t.length - e)
    }, y.initial = function(t, e, i) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
    }, y.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
    }, y.rest = y.tail = y.drop = function(t, e, i) {
        return c.call(t, null == e || i ? 1 : e)
    }, y.compact = function(t) {
        return y.filter(t, y.identity)
    };
    var $ = function(t, e, i, n) {
        for (var r = [], o = 0, s = n || 0, a = k(t); a > s; s++) {
            var l = t[s];
            if (S(l) && (y.isArray(l) || y.isArguments(l))) {
                e || (l = $(l, e, i));
                var u = 0,
                    c = l.length;
                for (r.length += c; c > u;) r[o++] = l[u++]
            } else i || (r[o++] = l)
        }
        return r
    };
    y.flatten = function(t, e) {
        return $(t, e, !1)
    }, y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    }, y.uniq = y.unique = function(t, e, i, n) {
        y.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = b(i, n));
        for (var r = [], o = [], s = 0, a = k(t); a > s; s++) {
            var l = t[s],
                u = i ? i(l, s, t) : l;
            e ? (s && o === u || r.push(l), o = u) : i ? y.contains(o, u) || (o.push(u), r.push(l)) : y.contains(r, l) || r.push(l)
        }
        return r
    }, y.union = function() {
        return y.uniq($(arguments, !0, !0))
    }, y.intersection = function(t) {
        for (var e = [], i = arguments.length, n = 0, r = k(t); r > n; n++) {
            var o = t[n];
            if (!y.contains(e, o)) {
                for (var s = 1; i > s && y.contains(arguments[s], o); s++);
                s === i && e.push(o)
            }
        }
        return e
    }, y.difference = function(t) {
        var e = $(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(t) {
        for (var e = t && y.max(t, k).length || 0, i = Array(e), n = 0; e > n; n++) i[n] = y.pluck(t, n);
        return i
    }, y.object = function(t, e) {
        for (var i = {}, n = 0, r = k(t); r > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function(t, e, i, n) {
        i = b(i, n, 1);
        for (var r = i(e), o = 0, s = k(t); s > o;) {
            var a = Math.floor((o + s) / 2);
            i(t[a]) < r ? o = a + 1 : s = a
        }
        return o
    }, y.indexOf = i(1, y.findIndex, y.sortedIndex), y.lastIndexOf = i(-1, y.findLastIndex), y.range = function(t, e, i) {
        null == e && (e = t || 0, t = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), r = Array(n), o = 0; n > o; o++, t += i) r[o] = t;
        return r
    };
    var O = function(t, e, i, n, r) {
        if (!(n instanceof e)) return t.apply(i, r);
        var o = x(t.prototype),
            s = t.apply(o, r);
        return y.isObject(s) ? s : o
    };
    y.bind = function(t, e) {
        if (m && t.bind === m) return m.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var i = c.call(arguments, 2),
            n = function() {
                return O(t, n, e, this, i.concat(c.call(arguments)))
            };
        return n
    }, y.partial = function(t) {
        var e = c.call(arguments, 1),
            i = function() {
                for (var n = 0, r = e.length, o = Array(r), s = 0; r > s; s++) o[s] = e[s] === y ? arguments[n++] : e[s];
                for (; n < arguments.length;) o.push(arguments[n++]);
                return O(t, i, this, this, o)
            };
        return i
    }, y.bindAll = function(t) {
        var e, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (e = 1; n > e; e++) i = arguments[e], t[i] = y.bind(t[i], t);
        return t
    }, y.memoize = function(t, e) {
        var i = function(n) {
            var r = i.cache,
                o = "" + (e ? e.apply(this, arguments) : n);
            return y.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
        };
        return i.cache = {}, i
    }, y.delay = function(t, e) {
        var i = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(t, e, i) {
        var n, r, o, s = null,
            a = 0;
        i || (i = {});
        var l = function() {
            a = i.leading === !1 ? 0 : y.now(), s = null, o = t.apply(n, r), s || (n = r = null)
        };
        return function() {
            var u = y.now();
            a || i.leading !== !1 || (a = u);
            var c = e - (u - a);
            return n = this, r = arguments, 0 >= c || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(n, r), s || (n = r = null)) : s || i.trailing === !1 || (s = setTimeout(l, c)), o
        }
    }, y.debounce = function(t, e, i) {
        var n, r, o, s, a, l = function() {
            var u = y.now() - s;
            e > u && u >= 0 ? n = setTimeout(l, e - u) : (n = null, i || (a = t.apply(o, r), n || (o = r = null)))
        };
        return function() {
            o = this, r = arguments, s = y.now();
            var u = i && !n;
            return n || (n = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
        }
    }, y.wrap = function(t, e) {
        return y.partial(e, t)
    }, y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, y.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
            return n
        }
    }, y.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, y.before = function(t, e) {
        var i;
        return function() {
            return --t > 0 && (i = e.apply(this, arguments)), 1 >= t && (e = null), i
        }
    }, y.once = y.partial(y.before, 2);
    var A = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (p) return p(t);
        var e = [];
        for (var i in t) y.has(t, i) && e.push(i);
        return A && n(t, e), e
    }, y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var i in t) e.push(i);
        return A && n(t, e), e
    }, y.values = function(t) {
        for (var e = y.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = t[e[r]];
        return n
    }, y.mapObject = function(t, e, i) {
        e = b(e, i);
        for (var n, r = y.keys(t), o = r.length, s = {}, a = 0; o > a; a++) n = r[a], s[n] = e(t[n], n, t);
        return s
    }, y.pairs = function(t) {
        for (var e = y.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = [e[r], t[e[r]]];
        return n
    }, y.invert = function(t) {
        for (var e = {}, i = y.keys(t), n = 0, r = i.length; r > n; n++) e[t[i[n]]] = i[n];
        return e
    }, y.functions = y.methods = function(t) {
        var e = [];
        for (var i in t) y.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(t, e, i) {
        e = b(e, i);
        for (var n, r = y.keys(t), o = 0, s = r.length; s > o; o++) if (n = r[o], e(t[n], n, t)) return n
    }, y.pick = function(t, e, i) {
        var n, r, o = {},
            s = t;
        if (null == s) return o;
        y.isFunction(e) ? (r = y.allKeys(s), n = _(e, i)) : (r = $(arguments, !1, !1, 1), n = function(t, e, i) {
            return e in i
        }, s = Object(s));
        for (var a = 0, l = r.length; l > a; a++) {
            var u = r[a],
                c = s[u];
            n(c, u, s) && (o[u] = c)
        }
        return o
    }, y.omit = function(t, e, i) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
            var n = y.map($(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(n, e)
            }
        }
        return y.pick(t, e, i)
    }, y.defaults = w(y.allKeys, !0), y.create = function(t, e) {
        var i = x(t);
        return e && y.extendOwn(i, e), i
    }, y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }, y.tap = function(t, e) {
        return e(t), t
    }, y.isMatch = function(t, e) {
        var i = y.keys(e),
            n = i.length;
        if (null == t) return !n;
        for (var r = Object(t), o = 0; n > o; o++) {
            var s = i[o];
            if (e[s] !== r[s] || !(s in r)) return !1
        }
        return !0
    };
    var E = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
        var r = h.call(t);
        if (r !== h.call(e)) return !1;
        switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var s = t.constructor,
                a = e.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
        }
        i = i || [], n = n || [];
        for (var l = i.length; l--;) if (i[l] === t) return n[l] === e;
        if (i.push(t), n.push(e), o) {
            if (l = t.length, l !== e.length) return !1;
            for (; l--;) if (!E(t[l], e[l], i, n)) return !1
        } else {
            var u, c = y.keys(t);
            if (l = c.length, y.keys(e).length !== l) return !1;
            for (; l--;) if (u = c[l], !y.has(e, u) || !E(t[u], e[u], i, n)) return !1
        }
        return i.pop(), n.pop(), !0
    };
    y.isEqual = function(t, e) {
        return E(t, e)
    }, y.isEmpty = function(t) {
        return null == t || (S(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length)
    }, y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, y.isArray = f ||
        function(t) {
            return "[object Array]" === h.call(t)
        }, y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !! t
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }), "function" != typeof / . / && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }), y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }, y.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === h.call(t)
    }, y.isNull = function(t) {
        return null === t
    }, y.isUndefined = function(t) {
        return void 0 === t
    }, y.has = function(t, e) {
        return null != t && d.call(t, e)
    }, y.noConflict = function() {
        return r._ = o, this
    }, y.identity = function(t) {
        return t
    }, y.constant = function(t) {
        return function() {
            return t
        }
    }, y.noop = function() {}, y.property = T, y.propertyOf = function(t) {
        return null == t ?
            function() {} : function(e) {
            return t[e]
        }
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t), function(e) {
            return y.isMatch(e, t)
        }
    }, y.times = function(t, e, i) {
        var n = Array(Math.max(0, t));
        e = _(e, i, 1);
        for (var r = 0; t > r; r++) n[r] = e(r);
        return n
    }, y.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, y.now = Date.now ||
        function() {
            return (new Date).getTime()
        };
    var z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        R = y.invert(z),
        D = function(t) {
            var e = function(e) {
                    return t[e]
                },
                i = "(?:" + y.keys(t).join("|") + ")",
                n = RegExp(i),
                r = RegExp(i, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, n.test(t) ? t.replace(r, e) : t
            }
        };
    y.escape = D(z), y.unescape = D(R), y.result = function(t, e, i) {
        var n = null == t ? void 0 : t[e];
        return void 0 === n && (n = i), y.isFunction(n) ? n.call(t) : n
    };
    var L = 0;
    y.uniqueId = function(t) {
        var e = ++L + "";
        return t ? t + e : e
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\u2028|\u2029/g,
        N = function(t) {
            return "\\" + I[t]
        };
    y.template = function(t, e, i) {
        !e && i && (e = i), e = y.defaults({}, e, y.templateSettings);
        var n = RegExp([(e.escape || M).source, (e.interpolate || M).source, (e.evaluate || M).source].join("|") + "|$", "g"),
            r = 0,
            o = "__p+='";
        t.replace(n, function(e, i, n, s, a) {
            return o += t.slice(r, a).replace(j, N), r = a + e.length, i ? o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        var l = function(t) {
                return s.call(this, t, y)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + o + "}", l
    }, y.chain = function(t) {
        var e = y(t);
        return e._chain = !0, e
    };
    var q = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var i = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return u.apply(t, arguments), q(this, i.apply(y, t))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], q(this, i)
        }
    }), y.each(["concat", "join", "slice"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return q(this, e.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this), !
    function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function(t) {
                return null != t && t == t.window
            }, i.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[s.call(t)] || "object" : typeof t
            }, i.isArray = Array.isArray ||
                function(t) {
                    return "array" === i.type(t)
                }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (e in t);
                return void 0 === e || o.call(t, e)
            }, i.each = function(t, i, n) {
                var r, o = 0,
                    s = t.length,
                    a = e(t);
                if (n) {
                    if (a) for (; s > o && (r = i.apply(t[o], n), r !== !1); o++);
                    else for (o in t) if (r = i.apply(t[o], n), r === !1) break
                } else if (a) for (; s > o && (r = i.call(t[o], o, t[o]), r !== !1); o++);
                else for (o in t) if (r = i.call(t[o], o, t[o]), r === !1) break;
                return t
            }, i.data = function(t, e, r) {
                if (void 0 === r) {
                    var o = t[i.expando],
                        s = o && n[o];
                    if (void 0 === e) return s;
                    if (s && e in s) return s[e]
                } else if (void 0 !== e) {
                    var o = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[o] = n[o] || {}, n[o][e] = r, r
                }
            }, i.removeData = function(t, e) {
                var r = t[i.expando],
                    o = r && n[r];
                o && i.each(e, function(t, e) {
                    delete o[e]
                })
            }, i.extend = function() {
                var t, e, n, r, o, s, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === u && (a = this, l--); u > l; l++) if (null != (o = arguments[l])) for (r in o) t = a[r], n = o[r], a !== n && (c && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, a[r] = i.extend(c, s, n)) : void 0 !== n && (a[r] = n));
                return a
            }, i.queue = function(t, n, r) {
                function o(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? !
                        function(t, e) {
                            for (var i = +e.length, n = 0, r = t.length; i > n;) t[r++] = e[n++];
                            if (i !== i) for (; void 0 !== e[n];) t[r++] = e[n++];
                            return t.length = r, t
                        }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                }
                if (t) {
                    n = (n || "fx") + "queue";
                    var s = i.data(t, n);
                    return r ? (!s || i.isArray(r) ? s = i.data(t, n, o(r)) : s.push(r), s) : s || []
                }
            }, i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var r = i.queue(n, e),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === e && r.unshift("inprogress"), o.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        r = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) r["[object " + a[l] + "]"] = a[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window), function(t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    return function(t, e, i, n) {
        function r(t) {
            for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                var r = t[e];
                r && n.push(r)
            }
            return n
        }
        function o(t) {
            return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t
        }
        function s(t) {
            var e = d.data(t, "velocity");
            return null === e ? n : e
        }
        function a(t) {
            return function(e) {
                return Math.round(e * t) * (1 / t)
            }
        }
        function l(t, i, n, r) {
            function o(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function s(t, e) {
                return 3 * e - 6 * t
            }
            function a(t) {
                return 3 * t
            }
            function l(t, e, i) {
                return ((o(e, i) * t + s(e, i)) * t + a(e)) * t
            }
            function u(t, e, i) {
                return 3 * o(e, i) * t * t + 2 * s(e, i) * t + a(e)
            }
            function c(e, i) {
                for (var r = 0; m > r; ++r) {
                    var o = u(i, t, n);
                    if (0 === o) return i;
                    var s = l(i, t, n) - e;
                    i -= s / o
                }
                return i
            }
            function h() {
                for (var e = 0; _ > e; ++e) T[e] = l(e * b, t, n)
            }
            function d(e, i, r) {
                var o, s, a = 0;
                do s = i + (r - i) / 2, o = l(s, t, n) - e, o > 0 ? r = s : i = s;
                while (Math.abs(o) > v && ++a < y);
                return s
            }
            function f(e) {
                for (var i = 0, r = 1, o = _ - 1; r != o && T[r] <= e; ++r) i += b;
                --r;
                var s = (e - T[r]) / (T[r + 1] - T[r]),
                    a = i + s * b,
                    l = u(a, t, n);
                return l >= g ? c(e, a) : 0 == l ? a : d(e, i, i + b)
            }
            function p() {
                C = !0, (t != i || n != r) && h()
            }
            var m = 4,
                g = .001,
                v = 1e-7,
                y = 10,
                _ = 11,
                b = 1 / (_ - 1),
                w = "Float32Array" in e;
            if (4 !== arguments.length) return !1;
            for (var x = 0; 4 > x; ++x) if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
            var T = w ? new Float32Array(_) : new Array(_),
                C = !1,
                k = function(e) {
                    return C || p(), t === i && n === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, r)
                };
            k.getControlPoints = function() {
                return [{
                    x: t,
                    y: i
                }, {
                    x: n,
                    y: r
                }]
            };
            var S = "generateBezier(" + [t, i, n, r] + ")";
            return k.toString = function() {
                return S
            }, k
        }
        function u(t, e) {
            var i = t;
            return m.isString(t) ? _.Easings[t] || (i = !1) : i = m.isArray(t) && 1 === t.length ? a.apply(null, t) : m.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t), i === !1 && (i = _.Easings[_.defaults.easing] ? _.defaults.easing : y), i
        }
        function c(t) {
            if (t) {
                var e = (new Date).getTime(),
                    i = _.State.calls.length;
                i > 1e4 && (_.State.calls = r(_.State.calls));
                for (var o = 0; i > o; o++) if (_.State.calls[o]) {
                    var a = _.State.calls[o],
                        l = a[0],
                        u = a[2],
                        f = a[3],
                        p = !! f,
                        g = null;
                    f || (f = _.State.calls[o][3] = e - 16);
                    for (var v = Math.min((e - f) / u.duration, 1), y = 0, b = l.length; b > y; y++) {
                        var x = l[y],
                            C = x.element;
                        if (s(C)) {
                            var k = !1;
                            if (u.display !== n && null !== u.display && "none" !== u.display) {
                                if ("flex" === u.display) {
                                    var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    d.each(S, function(t, e) {
                                        w.setPropertyValue(C, "display", e)
                                    })
                                }
                                w.setPropertyValue(C, "display", u.display)
                            }
                            u.visibility !== n && "hidden" !== u.visibility && w.setPropertyValue(C, "visibility", u.visibility);
                            for (var P in x) if ("element" !== P) {
                                var $, O = x[P],
                                    A = m.isString(O.easing) ? _.Easings[O.easing] : O.easing;
                                if (1 === v) $ = O.endValue;
                                else {
                                    var F = O.endValue - O.startValue;
                                    if ($ = O.startValue + F * A(v, u, F), !p && $ === O.currentValue) continue
                                }
                                if (O.currentValue = $, "tween" === P) g = $;
                                else {
                                    if (w.Hooks.registered[P]) {
                                        var E = w.Hooks.getRoot(P),
                                            z = s(C).rootPropertyValueCache[E];
                                        z && (O.rootPropertyValue = z)
                                    }
                                    var R = w.setPropertyValue(C, P, O.currentValue + (0 === parseFloat($) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                    w.Hooks.registered[P] && (s(C).rootPropertyValueCache[E] = w.Normalizations.registered[E] ? w.Normalizations.registered[E]("extract", null, R[1]) : R[1]), "transform" === R[0] && (k = !0)
                                }
                            }
                            u.mobileHA && s(C).transformCache.translate3d === n && (s(C).transformCache.translate3d = "(0px, 0px, 0px)", k = !0), k && w.flushTransformCache(C)
                        }
                    }
                    u.display !== n && "none" !== u.display && (_.State.calls[o][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (_.State.calls[o][2].visibility = !1), u.progress && u.progress.call(a[1], a[1], v, Math.max(0, f + u.duration - e), f, g), 1 === v && h(o)
                }
            }
            _.State.isTicking && T(c)
        }
        function h(t, e) {
            if (!_.State.calls[t]) return !1;
            for (var i = _.State.calls[t][0], r = _.State.calls[t][1], o = _.State.calls[t][2], a = _.State.calls[t][4], l = !1, u = 0, c = i.length; c > u; u++) {
                var h = i[u].element;
                if (e || o.loop || ("none" === o.display && w.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(h, "visibility", o.visibility)), o.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && s(h)) {
                    s(h).isAnimating = !1, s(h).rootPropertyValueCache = {};
                    var f = !1;
                    d.each(w.Lists.transforms3D, function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0,
                            r = s(h).transformCache[e];
                        s(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (f = !0, delete s(h).transformCache[e])
                    }), o.mobileHA && (f = !0, delete s(h).transformCache.translate3d), f && w.flushTransformCache(h), w.Values.removeClass(h, "velocity-animating")
                }
                if (!e && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(r, r)
                } catch (p) {
                    setTimeout(function() {
                        throw p
                    }, 1)
                }
                a && o.loop !== !0 && a(r), s(h) && o.loop === !0 && !e && (d.each(s(h).tweensContainer, function(t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), _(h, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && d.dequeue(h, o.queue)
            }
            _.State.calls[t] = !1;
            for (var m = 0, g = _.State.calls.length; g > m; m++) if (_.State.calls[m] !== !1) {
                l = !0;
                break
            }
            l === !1 && (_.State.isTicking = !1, delete _.State.calls, _.State.calls = [])
        }
        var d, f = function() {
                if (i.documentMode) return i.documentMode;
                for (var t = 7; t > 4; t--) {
                    var e = i.createElement("div");
                    if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                }
                return n
            }(),
            p = function() {
                var t = 0;
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame ||
                    function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                            e(n + i)
                        }, i)
                    }
            }(),
            m = {
                isString: function(t) {
                    return "string" == typeof t
                },
                isArray: Array.isArray ||
                function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                },
                isNode: function(t) {
                    return t && t.nodeType
                },
                isNodeList: function(t) {
                    return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                },
                isWrapped: function(t) {
                    return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                },
                isSVG: function(t) {
                    return e.SVGElement && t instanceof e.SVGElement
                },
                isEmptyObject: function(t) {
                    for (var e in t) return !1;
                    return !0
                }
            },
            g = !1;
        if (t.fn && t.fn.jquery ? (d = t, g = !0) : d = e.Velocity.Utilities, 8 >= f && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400,
            y = "swing",
            _ = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: d,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: v,
                    easing: y,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(t) {
                    d.data(t, "velocity", {
                        isSVG: m.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        e.pageYOffset !== n ? (_.State.scrollAnchor = e, _.State.scrollPropertyLeft = "pageXOffset", _.State.scrollPropertyTop = "pageYOffset") : (_.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, _.State.scrollPropertyLeft = "scrollLeft", _.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }
            function e(e, i, n) {
                var r = {
                    x: e.x + n.dx * i,
                    v: e.v + n.dv * i,
                    tension: e.tension,
                    friction: e.friction
                };
                return {
                    dx: r.v,
                    dv: t(r)
                }
            }
            function i(i, n) {
                var r = {
                        dx: i.v,
                        dv: t(i)
                    },
                    o = e(i, .5 * n, r),
                    s = e(i, .5 * n, o),
                    a = e(i, n, s),
                    l = 1 / 6 * (r.dx + 2 * (o.dx + s.dx) + a.dx),
                    u = 1 / 6 * (r.dv + 2 * (o.dv + s.dv) + a.dv);
                return i.x = i.x + l * n, i.v = i.v + u * n, i
            }
            return function n(t, e, r) {
                var o, s, a, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    u = [0],
                    c = 0,
                    h = 1e-4,
                    d = .016;
                for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, r = r || null, l.tension = t, l.friction = e, o = null !== r, o ? (c = n(t, e), s = c / r * d) : s = d; a = i(a || l, s), u.push(1 + a.x), c += 16, Math.abs(a.x) > h && Math.abs(a.v) > h;);
                return o ?
                    function(t) {
                        return u[t * (u.length - 1) | 0]
                    } : c
            }
        }();
        _.Easings = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            spring: function(t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, d.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(t, e) {
            _.Easings[e[0]] = l.apply(null, e[1])
        });
        var w = _.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var t = 0; t < w.Lists.colors.length; t++) {
                        var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var i, n, r;
                    if (f) for (i in w.Hooks.templates) {
                        n = w.Hooks.templates[i], r = n[0].split(" ");
                        var o = n[1].match(w.RegEx.valueSplit);
                        "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), w.Hooks.templates[i] = [r.join(" "), o.join(" ")])
                    }
                    for (i in w.Hooks.templates) {
                        n = w.Hooks.templates[i], r = n[0].split(" ");
                        for (var t in r) {
                            var s = i + r[t],
                                a = t;
                            w.Hooks.registered[s] = [i, a]
                        }
                    }
                },
                getRoot: function(t) {
                    var e = w.Hooks.registered[t];
                    return e ? e[0] : t
                },
                cleanRootPropertyValue: function(t, e) {
                    return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                },
                extractValue: function(t, e) {
                    var i = w.Hooks.registered[t];
                    if (i) {
                        var n = i[0],
                            r = i[1];
                        return e = w.Hooks.cleanRootPropertyValue(n, e), e.toString().match(w.RegEx.valueSplit)[r]
                    }
                    return e
                },
                injectValue: function(t, e, i) {
                    var n = w.Hooks.registered[t];
                    if (n) {
                        var r, o, s = n[0],
                            a = n[1];
                        return i = w.Hooks.cleanRootPropertyValue(s, i), r = i.toString().match(w.RegEx.valueSplit), r[a] = e, o = r.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")"
                        }
                    },
                    blur: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return _.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = r ? r[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(t, e, i) {
                        if (8 >= f) switch (t) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (t) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i
                        }
                    }
                },
                register: function() {
                    9 >= f || _.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                    for (var t = 0; t < w.Lists.transformsBase.length; t++)!
                        function() {
                            var e = w.Lists.transformsBase[t];
                            w.Normalizations.registered[e] = function(t, i, r) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return s(i) === n || s(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : s(i).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                _.State.isAndroid && s(i).transformCache[e] === n && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(r)
                                        }
                                        return o || (s(i).transformCache[e] = "(" + r + ")"), s(i).transformCache[e]
                                }
                            }
                        }();
                    for (var t = 0; t < w.Lists.colors.length; t++)!
                        function() {
                            var e = w.Lists.colors[t];
                            w.Normalizations.registered[e] = function(t, i, r) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var o;
                                        if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                        else {
                                            var s, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? s = a[r] !== n ? a[r] : a.black : w.RegEx.isHex.test(r) ? s = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (s = a.black), o = (s || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case "inject":
                                        return 8 >= f ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(t) {
                    return t.replace(/-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    })
                },
                SVGAttribute: function(t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || _.State.isAndroid && !_.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                },
                prefixCheck: function(t) {
                    if (_.State.prefixMatches[t]) return [_.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                        var r;
                        if (r = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }), m.isString(_.State.prefixElement.style[r])) return _.State.prefixMatches[t] = r, [r, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function(t) {
                    var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return t = t.replace(i, function(t, e, i, n) {
                        return e + e + i + i + n + n
                    }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(t) {
                    return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                },
                getUnitType: function(t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                },
                getDisplayType: function(t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                },
                addClass: function(t, e) {
                    t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                },
                removeClass: function(t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(t, i, r, o) {
                function a(t, i) {
                    function r() {
                        u && w.setPropertyValue(t, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = d.css(t, i);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (u = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !o) {
                            if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var c = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                return r(), c
                            }
                            if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var h = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                return r(), h
                            }
                        }
                        var p;
                        p = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? p.getPropertyValue(i) : p[i], ("" === l || null === l) && (l = t.style[i]), r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var m = a(t, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                    }
                    return l
                }
                var l;
                if (w.Hooks.registered[i]) {
                    var u = i,
                        c = w.Hooks.getRoot(u);
                    r === n && (r = w.getPropertyValue(t, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (r = w.Normalizations.registered[c]("extract", t, r)), l = w.Hooks.extractValue(u, r)
                } else if (w.Normalizations.registered[i]) {
                    var h, p;
                    h = w.Normalizations.registered[i]("name", t), "transform" !== h && (p = a(t, w.Names.prefixCheck(h)[0]), w.Values.isCSSNullValue(p) && w.Hooks.templates[i] && (p = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", t, p)
                }
                if (!/^[\d-]/.test(l)) if (s(t) && s(t).isSVG && w.Names.SVGAttribute(i)) if (/^(height|width)$/i.test(i)) try {
                    l = t.getBBox()[i]
                } catch (m) {
                    l = 0
                } else l = t.getAttribute(i);
                else l = a(t, w.Names.prefixCheck(i)[0]);
                return w.Values.isCSSNullValue(l) && (l = 0), _.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function(t, i, n, r, o) {
                var a = i;
                if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);
                else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), a = "transform", n = s(t).transformCache[i];
                else {
                    if (w.Hooks.registered[i]) {
                        var l = i,
                            u = w.Hooks.getRoot(i);
                        r = r || w.getPropertyValue(t, u), n = w.Hooks.injectValue(l, n, r), i = u
                    }
                    if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), a = w.Names.prefixCheck(i)[0], 8 >= f) try {
                        t.style[a] = n
                    } catch (c) {
                        _.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                    } else s(t) && s(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n;
                    _.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                }
                return [a, n]
            },
            flushTransformCache: function(t) {
                function e(e) {
                    return parseFloat(w.getPropertyValue(t, e))
                }
                var i = "";
                if ((f || _.State.isAndroid && !_.State.isChrome) && s(t).isSVG) {
                    var n = {
                        translate: [e("translateX"), e("translateY")],
                        skewX: [e("skewX")],
                        skewY: [e("skewY")],
                        scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                        rotate: [e("rotateZ"), 0, 0]
                    };
                    d.each(s(t).transformCache, function(t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                    })
                } else {
                    var r, o;
                    d.each(s(t).transformCache, function(e) {
                        return r = s(t).transformCache[e], "transformPerspective" === e ? (o = r, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(i += e + r + " "))
                    }), o && (i = "perspective" + o + " " + i)
                }
                w.setPropertyValue(t, "transform", i)
            }
        };
        w.Hooks.register(), w.Normalizations.register(), _.hook = function(t, e, i) {
            var r = n;
            return t = o(t), d.each(t, function(t, o) {
                if (s(o) === n && _.init(o), i === n) r === n && (r = _.CSS.getPropertyValue(o, e));
                else {
                    var a = _.CSS.setPropertyValue(o, e, i);
                    "transform" === a[0] && _.CSS.flushTransformCache(o), r = a
                }
            }), r
        };
        var x = function() {
            function t() {
                return a ? P.promise || null : l
            }
            function r() {
                function t() {
                    function t(t, e) {
                        var i = n,
                            r = n,
                            s = n;
                        return m.isArray(t) ? (i = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? s = t[1] : (m.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (r = e ? t[1] : u(t[1], a.duration), t[2] !== n && (s = t[2]))) : i = t, e || (r = r || a.easing), m.isFunction(i) && (i = i.call(o, C, T)), m.isFunction(s) && (s = s.call(o, C, T)), [i || 0, r, s]
                    }
                    function h(t, e) {
                        var i, n;
                        return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                            return i = t, ""
                        }), i || (i = w.Values.getUnitType(t)), [n, i]
                    }
                    function f() {
                        var t = {
                                myParent: o.parentNode || i.body,
                                position: w.getPropertyValue(o, "position"),
                                fontSize: w.getPropertyValue(o, "fontSize")
                            },
                            n = t.position === R.lastPosition && t.myParent === R.lastParent,
                            r = t.fontSize === R.lastFontSize;
                        R.lastParent = t.myParent, R.lastPosition = t.position, R.lastFontSize = t.fontSize;
                        var a = 100,
                            l = {};
                        if (r && n) l.emToPx = R.lastEmToPx, l.percentToPxWidth = R.lastPercentToPxWidth, l.percentToPxHeight = R.lastPercentToPxHeight;
                        else {
                            var u = s(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            _.init(u), t.myParent.appendChild(u), d.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                _.CSS.setPropertyValue(u, e, "hidden")
                            }), _.CSS.setPropertyValue(u, "position", t.position), _.CSS.setPropertyValue(u, "fontSize", t.fontSize), _.CSS.setPropertyValue(u, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                _.CSS.setPropertyValue(u, e, a + "%")
                            }), _.CSS.setPropertyValue(u, "paddingLeft", a + "em"), l.percentToPxWidth = R.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / a, l.percentToPxHeight = R.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / a, l.emToPx = R.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / a, t.myParent.removeChild(u)
                        }
                        return null === R.remToPx && (R.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === R.vwToPx && (R.vwToPx = parseFloat(e.innerWidth) / 100, R.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = R.remToPx, l.vwToPx = R.vwToPx, l.vhToPx = R.vhToPx, _.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (a.begin && 0 === C) try {
                        a.begin.call(p, p)
                    } catch (v) {
                        setTimeout(function() {
                            throw v
                        }, 1)
                    }
                    if ("scroll" === $) {
                        var b, x, k, S = /^x$/i.test(a.axis) ? "Left" : "Top",
                            O = parseFloat(a.offset) || 0;
                        a.container ? m.isWrapped(a.container) || m.isNode(a.container) ? (a.container = a.container[0] || a.container, b = a.container["scroll" + S], k = b + d(o).position()[S.toLowerCase()] + O) : a.container = null : (b = _.State.scrollAnchor[_.State["scrollProperty" + S]], x = _.State.scrollAnchor[_.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], k = d(o).offset()[S.toLowerCase()] + O), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: b,
                                currentValue: b,
                                endValue: k,
                                unitType: "",
                                easing: a.easing,
                                scrollData: {
                                    container: a.container,
                                    direction: S,
                                    alternateValue: x
                                }
                            },
                            element: o
                        }, _.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === $) {
                        if (!s(o).tweensContainer) return void d.dequeue(o, a.queue);
                        "none" === s(o).opts.display && (s(o).opts.display = "auto"), "hidden" === s(o).opts.visibility && (s(o).opts.visibility = "visible"), s(o).opts.loop = !1, s(o).opts.begin = null, s(o).opts.complete = null, y.easing || delete a.easing, y.duration || delete a.duration, a = d.extend({}, s(o).opts, a);
                        var A = d.extend(!0, {}, s(o).tweensContainer);
                        for (var F in A) if ("element" !== F) {
                            var E = A[F].startValue;
                            A[F].startValue = A[F].currentValue = A[F].endValue, A[F].endValue = E, m.isEmptyObject(y) || (A[F].easing = a.easing), _.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(A[F]), o)
                        }
                        l = A
                    } else if ("start" === $) {
                        var A;
                        s(o).tweensContainer && s(o).isAnimating === !0 && (A = s(o).tweensContainer), d.each(g, function(e, i) {
                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = t(i, !0),
                                    o = r[0],
                                    s = r[1],
                                    a = r[2];
                                if (w.RegEx.isHex.test(o)) {
                                    for (var l = ["Red", "Green", "Blue"], u = w.Values.hexToRgb(o), c = a ? w.Values.hexToRgb(a) : n, h = 0; h < l.length; h++) {
                                        var d = [u[h]];
                                        s && d.push(s), c !== n && d.push(c[h]), g[e + l[h]] = d
                                    }
                                    delete g[e]
                                }
                            }
                        });
                        for (var z in g) {
                            var L = t(g[z]),
                                M = L[0],
                                I = L[1],
                                j = L[2];
                            z = w.Names.camelCase(z);
                            var N = w.Hooks.getRoot(z),
                                q = !1;
                            if (s(o).isSVG || "tween" === N || w.Names.prefixCheck(N)[1] !== !1 || w.Normalizations.registered[N] !== n) {
                                (a.display !== n && null !== a.display && "none" !== a.display || a.visibility !== n && "hidden" !== a.visibility) && /opacity|filter/.test(z) && !j && 0 !== M && (j = 0), a._cacheValues && A && A[z] ? (j === n && (j = A[z].endValue + A[z].unitType), q = s(o).rootPropertyValueCache[N]) : w.Hooks.registered[z] ? j === n ? (q = w.getPropertyValue(o, N), j = w.getPropertyValue(o, z, q)) : q = w.Hooks.templates[N][1] : j === n && (j = w.getPropertyValue(o, z));
                                var H, B, W, V = !1;
                                if (H = h(z, j), j = H[0], W = H[1], H = h(z, M), M = H[0].replace(/^([+-\/*])=/, function(t, e) {
                                        return V = e, ""
                                    }), B = H[1], j = parseFloat(j) || 0, M = parseFloat(M) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(z) ? (M /= 100, B = "em") : /^scale/.test(z) ? (M /= 100, B = "") : /(Red|Green|Blue)$/i.test(z) && (M = M / 100 * 255, B = "")), /[\/*]/.test(V)) B = W;
                                else if (W !== B && 0 !== j) if (0 === M) B = W;
                                else {
                                    r = r || f();
                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                    switch (W) {
                                        case "%":
                                            j *= "x" === Y ? r.percentToPxWidth : r.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            j *= r[W + "ToPx"]
                                    }
                                    switch (B) {
                                        case "%":
                                            j *= 1 / ("x" === Y ? r.percentToPxWidth : r.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            j *= 1 / r[B + "ToPx"]
                                    }
                                }
                                switch (V) {
                                    case "+":
                                        M = j + M;
                                        break;
                                    case "-":
                                        M = j - M;
                                        break;
                                    case "*":
                                        M = j * M;
                                        break;
                                    case "/":
                                        M = j / M
                                }
                                l[z] = {
                                    rootPropertyValue: q,
                                    startValue: j,
                                    currentValue: j,
                                    endValue: M,
                                    unitType: B,
                                    easing: I
                                }, _.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o)
                            } else _.debug && console.log("Skipping [" + N + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (w.Values.addClass(o, "velocity-animating"), D.push(l), "" === a.queue && (s(o).tweensContainer = l, s(o).opts = a), s(o).isAnimating = !0, C === T - 1 ? (_.State.calls.push([D, p, a, null, P.resolver]), _.State.isTicking === !1 && (_.State.isTicking = !0, c())) : C++)
                }
                var r, o = this,
                    a = d.extend({}, _.defaults, y),
                    l = {};
                switch (s(o) === n && _.init(o), parseFloat(a.delay) && a.queue !== !1 && d.queue(o, a.queue, function(t) {
                    _.velocityQueueEntryFlag = !0, s(o).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(a.delay)),
                        next: t
                    }
                }), a.duration.toString().toLowerCase()) {
                    case "fast":
                        a.duration = 200;
                        break;
                    case "normal":
                        a.duration = v;
                        break;
                    case "slow":
                        a.duration = 600;
                        break;
                    default:
                        a.duration = parseFloat(a.duration) || 1
                }
                _.mock !== !1 && (_.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(_.mock) || 1, a.delay *= parseFloat(_.mock) || 1)), a.easing = u(a.easing, a.duration), a.begin && !m.isFunction(a.begin) && (a.begin = null), a.progress && !m.isFunction(a.progress) && (a.progress = null), a.complete && !m.isFunction(a.complete) && (a.complete = null), a.display !== n && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = _.CSS.Values.getDisplayType(o))), a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && _.State.isMobile && !_.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(t, a.delay) : t() : d.queue(o, a.queue, function(e, i) {
                    return i === !0 ? (P.promise && P.resolver(p), !0) : (_.velocityQueueEntryFlag = !0, void t(e))
                }), "" !== a.queue && "fx" !== a.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
            }
            var a, l, f, p, g, y, b = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (a = !1, f = 0, p = this, l = this) : (a = !0, f = 1, p = b ? arguments[0].elements || arguments[0].e : arguments[0]), p = o(p)) {
                b ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[f], y = arguments[f + 1]);
                var T = p.length,
                    C = 0;
                if (!/^(stop|finish|finishAll)$/i.test(g) && !d.isPlainObject(y)) {
                    var k = f + 1;
                    y = {};
                    for (var S = k; S < arguments.length; S++) m.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? m.isString(arguments[S]) || m.isArray(arguments[S]) ? y.easing = arguments[S] : m.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
                }
                var P = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                a && _.Promise && (P.promise = new _.Promise(function(t, e) {
                    P.resolver = t, P.rejecter = e
                }));
                var $;
                switch (g) {
                    case "scroll":
                        $ = "scroll";
                        break;
                    case "reverse":
                        $ = "reverse";
                        break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        d.each(p, function(t, e) {
                            s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer), "finishAll" !== g || y !== !0 && !m.isString(y) || (d.each(d.queue(e, m.isString(y) ? y : ""), function(t, e) {
                                m.isFunction(e) && e()
                            }), d.queue(e, m.isString(y) ? y : "", []))
                        });
                        var O = [];
                        return d.each(_.State.calls, function(t, e) {
                            e && d.each(e[1], function(i, r) {
                                var o = y === n ? "" : y;
                                return o !== !0 && e[2].queue !== o && (y !== n || e[2].queue !== !1) || void d.each(p, function(i, n) {
                                        n === r && ((y === !0 || m.isString(y)) && (d.each(d.queue(n, m.isString(y) ? y : ""), function(t, e) {
                                            m.isFunction(e) && e(null, !0)
                                        }), d.queue(n, m.isString(y) ? y : "", [])), "stop" === g ? (s(n) && s(n).tweensContainer && o !== !1 && d.each(s(n).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), O.push(t)) : ("finish" === g || "finishAll" === g) && (e[2].duration = 1))
                                    })
                            })
                        }), "stop" === g && (d.each(O, function(t, e) {
                            h(e, !0)
                        }), P.promise && P.resolver(p)), t();
                    default:
                        if (!d.isPlainObject(g) || m.isEmptyObject(g)) {
                            if (m.isString(g) && _.Redirects[g]) {
                                var A = d.extend({}, y),
                                    F = A.duration,
                                    E = A.delay || 0;
                                return A.backwards === !0 && (p = d.extend(!0, [], p).reverse()), d.each(p, function(t, e) {
                                    parseFloat(A.stagger) ? A.delay = E + parseFloat(A.stagger) * t : m.isFunction(A.stagger) && (A.delay = E + A.stagger.call(e, t, T)), A.drag && (A.duration = parseFloat(F) || (/^(callout|transition)/.test(g) ? 1e3 : v), A.duration = Math.max(A.duration * (A.backwards ? 1 - t / T : (t + 1) / T), .75 * A.duration, 200)), _.Redirects[g].call(e, e, A || {}, t, T, p, P.promise ? P : n)
                                }), t()
                            }
                            var z = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return P.promise ? P.rejecter(new Error(z)) : console.log(z), t()
                        }
                        $ = "start"
                }
                var R = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    D = [];
                d.each(p, function(t, e) {
                    m.isNode(e) && r.call(e)
                });
                var L, A = d.extend({}, _.defaults, y);
                if (A.loop = parseInt(A.loop), L = 2 * A.loop - 1, A.loop) for (var M = 0; L > M; M++) {
                    var I = {
                        delay: A.delay,
                        progress: A.progress
                    };
                    M === L - 1 && (I.display = A.display, I.visibility = A.visibility, I.complete = A.complete), x(p, "reverse", I)
                }
                return t()
            }
        };
        _ = d.extend(x, _), _.animate = x;
        var T = e.requestAnimationFrame || p;
        return _.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
            i.hidden ? (T = function(t) {
                return setTimeout(function() {
                    t(!0)
                }, 16)
            }, c()) : T = e.requestAnimationFrame || p
        }), t.Velocity = _, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = _.defaults), d.each(["Down", "Up"], function(t, e) {
            _.Redirects["slide" + e] = function(t, i, r, o, s, a) {
                var l = d.extend({}, i),
                    u = l.begin,
                    c = l.complete,
                    h = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === n && (l.display = "Down" === e ? "inline" === _.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(s, s);
                    for (var i in h) {
                        f[i] = t.style[i];
                        var n = _.CSS.getPropertyValue(t, i);
                        h[i] = "Down" === e ? [n, 0] : [0, n]
                    }
                    f.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var e in f) t.style[e] = f[e];
                    c && c.call(s, s), a && a.resolver(s)
                }, _(t, h, l)
            }
        }), d.each(["In", "Out"], function(t, e) {
            _.Redirects["fade" + e] = function(t, i, r, o, s, a) {
                var l = d.extend({}, i),
                    u = {
                        opacity: "In" === e ? 1 : 0
                    },
                    c = l.complete;
                l.complete = r !== o - 1 ? l.begin = null : function() {
                    c && c.call(s, s), a && a.resolver(s)
                }, l.display === n && (l.display = "In" === e ? "auto" : "none"), _(this, u, l)
            }
        }), _
    }(window.jQuery || window.Zepto || window, window, document)
}), !
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            if (t instanceof Date) return t;
            if (String(t).match(s)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
            throw new Error("Couldn't cast `" + t + "` to a date object.")
        }
        function i(t) {
            var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(e)
        }
        function n(t) {
            return function(e) {
                var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (n) for (var o = 0, s = n.length; s > o; ++o) {
                    var a = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        u = i(a[0]),
                        c = a[1] || "",
                        h = a[3] || "",
                        d = null;
                    a = a[2], l.hasOwnProperty(a) && (d = l[a], d = Number(t[d])), null !== d && ("!" === c && (d = r(h, d)), "" === c && 10 > d && (d = "0" + d.toString()), e = e.replace(u, d.toString()))
                }
                return e = e.replace(/%%/, "%")
            }
        }
        function r(t, e) {
            var i = "s",
                n = "";
            return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? i = t[0] : (n = t[0], i = t[1])), 1 === Math.abs(e) ? n : i
        }
        var o = [],
            s = [],
            a = {
                precision: 100,
                elapse: !1
            };
        s.push(/^[0-9]*$/.source), s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s = new RegExp(s.join("|"));
        var l = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                w: "weeks",
                d: "daysToWeek",
                D: "totalDays",
                H: "hours",
                M: "minutes",
                S: "seconds"
            },
            u = function(e, i, n) {
                this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, a), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = t.extend({}, a, n)), this.setFinalDate(i), this.start()
            };
        t.extend(u.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() {
                    t.update.call(t)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(t) {
                this.finalDate = e(t)
            },
            update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var e, i = void 0 !== t._data(this.el, "events"),
                    n = new Date;
                e = this.finalDate.getTime() - n.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && 0 > e ? 0 : Math.abs(e), this.totalSecsLeft !== e && i && (this.totalSecsLeft = e, this.elapsed = n >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - n.getFullYear())
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            },
            dispatchEvent: function(e) {
                var i = t.Event(e + ".countdown");
                i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = n(this.offset), this.$el.trigger(i)
            }
        }), t.fn.countdown = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var i = t(this).data("countdown-instance");
                if (void 0 !== i) {
                    var n = o[i],
                        r = e[0];
                    u.prototype.hasOwnProperty(r) ? n[r].apply(n, e.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, r), n.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
                } else new u(this, e[0], e[1])
            })
        }
    }), !
    function(t) {
        function e() {}
        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }
            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var u = this[a],
                                c = t.data(u, e);
                            if (c) if (t.isFunction(c[r]) && "_" !== r.charAt(0)) {
                                var h = c[r].apply(c, s);
                                if (void 0 !== h) return h
                            } else o("no such method '" + r + "' for " + e + " instance");
                            else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window), function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ?
            function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var r = function() {};
    i.removeEventListener ? r = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (r = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var o = {
        bind: n,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
}(window), function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        r = this,
        o = r.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, r = this.getListenersAsObject(t),
            o = "object" == typeof i;
        for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, r, o = this.getListenersAsObject(t);
        for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, r, o = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) o.call(this, e, i[n]);
        else for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, r, o, s = this.getListenersAsObject(t);
        for (r in s) if (s.hasOwnProperty(r)) for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return r.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
}.call(this), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, r = 0, o = i.length; o > r; r++) if (e = i[r] + t, "string" == typeof n[e]) return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
        n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t, e) {
    function i(t) {
        var e = parseFloat(t),
            i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function n() {}
    function r() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }
    function o(e) {
        function n() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (u = function() {
                        var t = n ?
                            function(t) {
                                return n(t, null)
                            } : function(t) {
                            return t.currentStyle
                        };
                        return function(e) {
                            var i = t(e);
                            return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                        }
                    }(), c = e("boxSizing")) {
                    var r = document.createElement("div");
                    r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[c] = "border-box";
                    var o = document.body || document.documentElement;
                    o.appendChild(r);
                    var a = u(r);
                    h = 200 === i(a.width), o.removeChild(r)
                }
            }
        }
        function o(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = u(t);
                if ("none" === e.display) return r();
                var o = {};
                o.width = t.offsetWidth, o.height = t.offsetHeight;
                for (var s = o.isBorderBox = !(!c || !e[c] || "border-box" !== e[c]), d = 0, f = a.length; f > d; d++) {
                    var p = a[d],
                        m = e[p];
                    m = l(t, m);
                    var g = parseFloat(m);
                    o[p] = isNaN(g) ? 0 : g
                }
                var v = o.paddingLeft + o.paddingRight,
                    y = o.paddingTop + o.paddingBottom,
                    _ = o.marginLeft + o.marginRight,
                    b = o.marginTop + o.marginBottom,
                    w = o.borderLeftWidth + o.borderRightWidth,
                    x = o.borderTopWidth + o.borderBottomWidth,
                    T = s && h,
                    C = i(e.width);
                C !== !1 && (o.width = C + (T ? 0 : v + w));
                var k = i(e.height);
                return k !== !1 && (o.height = k + (T ? 0 : y + x)), o.innerWidth = o.width - (v + w), o.innerHeight = o.height - (y + x), o.outerWidth = o.width + _, o.outerHeight = o.height + b, o
            }
        }
        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style,
                r = n.left,
                o = e.runtimeStyle,
                s = o && o.left;
            return s && (o.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, s && (o.left = s), i
        }
        var u, c, h, d = !1;
        return o
    }
    var s = "undefined" == typeof console ? n : function(t) {
            console.error(t)
        },
        a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== o.readyState;
        e.isReady || i || n()
    }
    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }
    function r(r) {
        return "complete" === o.readyState ? n() : (r.bind(o, "DOMContentLoaded", i), r.bind(o, "readystatechange", i), r.bind(t, "load", i)), e
    }
    var o = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
}(window), function(t) {
    function e(t, e) {
        return t[s](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), r = 0, o = n.length; o > r; r++) if (n[r] === t) return !0;
        return !1
    }
    function r(t, n) {
        return i(t), e(t, n)
    }
    var o, s = function() {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var r = e[i],
                o = r + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    if (s) {
        var a = document.createElement("div"),
            l = e(a, "div");
        o = l ? e : r
    } else o = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return o
    }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
}(Element.prototype), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var r = Object.prototype.toString;
    n.isArray = function(t) {
        return "[object Array]" == r.call(t)
    }, n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t)) e = t;
        else if (t && "number" == typeof t.length) for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ?
        function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1
    }, n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ?
        function(t) {
            return t instanceof HTMLElement
        } : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }
        var e;
        return t
    }(), n.getParent = function(t, e) {
        for (; t != document.body;) if (t = t.parentNode, i(t, e)) return t
    }, n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var r = [], o = 0, s = t.length; s > o; o++) {
            var a = t[o];
            if (n.isElement(a)) if (e) {
                i(a, e) && r.push(a);
                for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) r.push(l[u])
            } else r.push(a)
        }
        return r
    }, n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            r = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[r];
            t && clearTimeout(t);
            var e = arguments,
                o = this;
            this[r] = setTimeout(function() {
                n.apply(o, e), delete o[r]
            }, i || 100)
        }
    }, n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return n.htmlInit = function(i, r) {
        e(function() {
            for (var e = n.toDashed(r), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var c, h = s[l],
                    d = h.getAttribute(a);
                try {
                    c = d && JSON.parse(d)
                } catch (f) {
                    o && o.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + f);
                    continue
                }
                var p = new i(h, c),
                    m = t.jQuery;
                m && m.data(h, r, p)
            }
        })
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, r, o) {
        return e(t, i, n, r, o)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function(t, e, i, n, r) {
    function o(t) {
        for (var e in t) return !1;
        return e = null, !0
    }
    function s(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    function a(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var l = t.getComputedStyle,
        u = l ?
            function(t) {
                return l(t, null)
            } : function(t) {
            return t.currentStyle
        }, c = n("transition"), h = n("transform"), d = c && h, f = !! n("perspective"), p = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[c], m = ["transform", "transition", "transitionDuration", "transitionProperty"], g = function() {
            for (var t = {}, e = 0, i = m.length; i > e; e++) {
                var r = m[e],
                    o = n(r);
                o && o !== r && (t[r] = o)
            }
            return t
        }();
    r.extend(s.prototype, e.prototype), s.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.getSize = function() {
        this.size = i(this.element)
    }, s.prototype.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = g[i] || i;
            e[n] = t[i]
        }
    }, s.prototype.getPosition = function() {
        var t = u(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            r = t[i ? "left" : "right"],
            o = t[n ? "top" : "bottom"],
            s = this.layout.size,
            a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.width : parseInt(r, 10),
            l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? s.paddingLeft : s.paddingRight, l -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = l
    }, s.prototype.layoutPosition = function() {
        var t = this.layout.size,
            e = this.layout.options,
            i = {},
            n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
            r = e.isOriginLeft ? "left" : "right",
            o = e.isOriginLeft ? "right" : "left",
            s = this.position.x + t[n];
        i[r] = this.getXValue(s), i[o] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
            l = e.isOriginTop ? "top" : "bottom",
            u = e.isOriginTop ? "bottom" : "top",
            c = this.position.y + t[a];
        i[l] = this.getYValue(c), i[u] = "", this.css(i), this.emitEvent("layout", [this])
    }, s.prototype.getXValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, s.prototype.getYValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, s.prototype._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            r = parseInt(t, 10),
            o = parseInt(e, 10),
            s = r === this.position.x && o === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            l = e - n,
            u = {};
        u.transform = this.getTranslate(a, l), this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, s.prototype.getTranslate = function(t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, f ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, s.prototype.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, s.prototype.moveTo = d ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, s.prototype._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, s.prototype._transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var v = "opacity," + a(g.transform || "transform");
    s.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: v,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(p, this, !1))
    }, s.prototype.transition = s.prototype[c ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, s.prototype.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var y = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    s.prototype.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = y[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], o(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, s.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
    }, s.prototype._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var _ = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return s.prototype.removeTransitionStyles = function() {
        this.css(_)
    }, s.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, s.prototype.remove = function() {
        if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function() {
            t.removeElem()
        }), this.hide()
    }, s.prototype.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, s.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, s.prototype.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, s.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, s.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, s
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, o, s) {
        return e(t, i, n, r, o, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, r, o) {
    function s(t, e) {
        var i = r.getQueryElement(t);
        if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
        var n = ++c;
        this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var a = t.console,
        l = t.jQuery,
        u = function() {},
        c = 0,
        h = {};
    return s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "http://www.we7shop.com/Public/static/index/js/0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    }, r.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
        r.extend(this.options, t)
    }, s.prototype._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, s.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, s.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, o = e.length; o > r; r++) {
            var s = e[r],
                a = new i(s, this);
            n.push(a)
        }
        return n
    }, s.prototype._filterFindItemElements = function(t) {
        return r.filterFindElements(t, this.options.itemSelector)
    }, s.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
        return t
    }, s.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
        this.getSize()
    }, s.prototype.getSize = function() {
        this.size = n(this.element)
    }, s.prototype._getMeasurement = function(t, e) {
        var i, o = this.options[t];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : r.isElement(o) && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
    }, s.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, s.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i];
            r.isIgnored || e.push(r)
        }
        return e
    }, s.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, r = t.length; r > n; n++) {
                var o = t[n],
                    s = this._getItemLayoutPosition(o);
                s.item = o, s.isInstant = e || o.isLayoutInstant, i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }, s.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, s.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, s.prototype._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, s.prototype._postLayout = function() {
        this.resizeContainer()
    }, s.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, s.prototype._emitCompleteOnItems = function(t, e) {
        function i() {
            r.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            s++, s === o && i()
        }
        var r = this,
            o = e.length;
        if (!e || !o) return void i();
        for (var s = 0, a = 0, l = e.length; l > a; a++) {
            var u = e[a];
            u.once(t, n)
        }
    }, s.prototype.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) {
            var r = l.Event(e);
            r.type = t, this.$element.trigger(r, i)
        } else this.$element.trigger(t, i)
    }, s.prototype.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, s.prototype.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, s.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, s.prototype.unstamp = function(t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            r.removeFrom(this.stamps, n), this.unignore(n)
        }
    }, s.prototype._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
    }, s.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, s.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            r = n(t),
            o = {
                left: e.left - i.left - r.marginLeft,
                top: e.top - i.top - r.marginTop,
                right: i.right - e.right - r.marginRight,
                bottom: i.bottom - e.bottom - r.marginBottom
            };
        return o
    }, s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, s.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, s.prototype.onresize = function() {
        function t() {
            e.resize(), delete e.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, s.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, s.prototype.needsResizeLayout = function() {
        var t = n(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, s.prototype.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, s.prototype.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, s.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, s.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }, s.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }, s.prototype.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, s.prototype.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, s.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n
        }
    }, s.prototype.getItems = function(t) {
        t = r.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i],
                s = this.getItem(o);
            s && e.push(s)
        }
        return e
    }, s.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, n = e.length; n > i; i++) {
            var o = e[i];
            o.remove(), r.removeFrom(this.items, o)
        }
    }, s.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var r = this.element.outlayerGUID;
        delete h[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = r.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && h[e]
    }, s.create = function(t, e) {
        function i() {
            s.apply(this, arguments)
        }
        return Object.create ? i.prototype = Object.create(s.prototype) : r.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
            o.apply(this, arguments)
        }, i.Item.prototype = new o, r.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, s.Item = o, s
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    function e() {
        t.Item.apply(this, arguments)
    }
    e.prototype = new t.Item, e.prototype._create = function() {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function() {
        i.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    return function() {
        function t(t) {
            return function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }
        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], r = 0, o = n.length; o > r; r++) {
            var s = n[r];
            i.prototype[s] = t(s)
        }
    }(), i.prototype.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var r = this.getFirstItemSize();
            this[i] = r && r[n] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            r = this.containerWidth + this.gutter,
            o = r / n,
            s = n - r % n,
            a = s && 1 > s ? "round" : "floor";
        o = Math[a](o), this.cols = Math.max(o, 1)
    }, n.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element,
            i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            n = e && 1 > e ? "round" : "ceil",
            r = Math[n](t.size.outerWidth / this.columnWidth);
        r = Math.min(r, this.cols);
        for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = i.indexOf(o, s), l = {
            x: this.columnWidth * a,
            y: s
        }, u = s + t.size.outerHeight, c = this.cols + 1 - o.length, h = 0; c > h; h++) this.colYs[a + h] = u;
        return l
    }, n.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var r = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, r)
        }
        return e
    }, n.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            r = this.options.isOriginLeft ? n.left : n.right,
            o = r + i.outerWidth,
            s = Math.floor(r / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(o / this.columnWidth);
        a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
    }, n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }
    var n = t.create("masonry"),
        r = n.prototype._getElementOffset,
        o = n.prototype.layout,
        s = n.prototype._getMeasurement;
    i(n.prototype, e.prototype), n.prototype._getElementOffset = r, n.prototype.layout = o, n.prototype._getMeasurement = s;
    var a = n.prototype.measureColumns;
    n.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var l = n.prototype._manageStamp;
    return n.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, e.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("vertical", {
        horizontalAlignment: 0
    });
    return e.prototype._resetLayout = function() {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, e.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, r, o, s, a) {
        return e(t, i, n, r, o, s, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, r, o, s) {
    function a(t, e) {
        return function(i, n) {
            for (var r = 0, o = t.length; o > r; r++) {
                var s = t[r],
                    a = i.sortData[s],
                    l = n.sortData[s];
                if (a > l || l > a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        c = u ? 1 : -1;
                    return (a > l ? 1 : -1) * c
                }
            }
            return 0
        }
    }
    var l = t.jQuery,
        u = String.prototype.trim ?
            function(t) {
                return t.trim()
            } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }, c = document.documentElement, h = c.textContent ?
            function(t) {
                return t.textContent
            } : function(t) {
            return t.innerText
        }, d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = o, d.LayoutMode = s, d.prototype._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, d.prototype.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, d.prototype._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
            var r = t[i];
            r.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, d.prototype._initLayoutMode = function(t) {
        var e = s.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, d.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, d.prototype._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, d.prototype.arrange = function(t) {
        function e() {
            n.reveal(i.needReveal), n.hide(i.needHide)
        }
        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d.prototype._bindArrangeComplete = function() {
        function t() {
            e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
        }
        var e, i, n, r = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, d.prototype._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
            var l = t[s];
            if (!l.isIgnored) {
                var u = o(l);
                u && i.push(l), u && l.isHidden ? n.push(l) : u || l.isHidden || r.push(l)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: r
        }
    }, d.prototype._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ?
            function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ?
            function(e) {
                return t(e.element)
            } : function(e) {
            return n(e.element, t)
        }
    }, d.prototype.updateSortData = function(t) {
        var e;
        t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, d.prototype._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, d.prototype._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = u(t).split(" "),
                n = i[0],
                r = n.match(/^\[(.+)\]$/),
                o = r && r[1],
                s = e(o, n),
                a = d.sortDataParsers[i[1]];
            return t = a ?
                function(t) {
                    return t && a(s(t))
                } : function(t) {
                return t && s(t)
            }
        }
        function e(t, e) {
            var i;
            return i = t ?
                function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                var i = t.querySelector(e);
                return i && h(i)
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, d.prototype._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, d.prototype._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, d.prototype._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d.prototype._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, d.prototype._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, d.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, d.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, d.prototype.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, d.prototype._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, d.prototype.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, r = e.length;
            for (i = 0; r > i; i++) n = e[i], this.element.appendChild(n.element);
            var o = this._filter(e).matches;
            for (i = 0; r > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; r > i; i++) delete e[i].isLayoutInstant;
            this.reveal(o)
        }
    };
    var p = d.prototype.remove;
    return d.prototype.remove = function(t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        var i = e && e.length;
        if (i) for (var n = 0; i > n; n++) {
            var o = e[n];
            r.removeFrom(this.filteredItems, o)
        }
    }, d.prototype.shuffle = function() {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d.prototype._noTransition = function(t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, d.prototype.getFilteredItemElements = function() {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
        return t
    }, d
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            r = function(t, e, i) {
                var n, r, o = t.cycle;
                for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            },
            o = function(t, e, n) {
                i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
            },
            s = 1e-10,
            a = i._internals,
            l = a.isSelector,
            u = a.isArray,
            c = o.prototype = i.to({}, .1, {}),
            h = [];
        o.version = "1.19.0", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, c.updateTo = function(t, e) {
            var n, r = this.ratio,
                o = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || o) if (e) this._initted = !1, o && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || o) for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
            return this
        }, c.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, o, l, u, c, h, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._totalTime,
                g = this._cycle,
                v = this._duration,
                y = this._rawPrevTime;
            if (t >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > y || 0 >= t && t >= -1e-7 || y === s && "isPause" !== this.data) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = d = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), p === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === s && d !== s && (this._rawPrevTime = 0))
        }, o.to = function(t, e, i) {
            return new o(t, e, i)
        }, o.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
        }, o.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
        }, o.staggerTo = o.allTo = function(t, e, s, a, c, d, f) {
            a = a || 0;
            var p, m, g, v, y = 0,
                _ = [],
                b = function() {
                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), c.apply(f || s.callbackScope || this, d || h)
                },
                w = s.cycle,
                x = s.startAt && s.startAt.cycle;
            for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                m = {};
                for (v in s) m[v] = s[v];
                if (w && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), x) {
                    x = m.startAt = {};
                    for (v in s.startAt) x[v] = s.startAt[v];
                    r(m.startAt, t, g)
                }
                m.delay = y + (m.delay || 0), g === p && c && (m.onComplete = b), _[g] = new o(t[g], e, m), y += a
            }
            return _
        }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
        }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
        }, o.delayedCall = function(t, e, i, n, r) {
            return new o(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, o.set = function(t, e) {
            return new o(t, 0, e)
        }, o.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var d = function(t, e) {
                for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(d(o, e)), r = n.length), o = o._next;
                return n
            },
            f = o.getAllTweens = function(e) {
                return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
            };
        o.killAll = function(t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var o, s, a, l = f(0 != r),
                u = l.length,
                c = i && n && r;
            for (a = 0; u > a; a++) s = l[a], (c || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, o.killChildTweensOf = function(t, e) {
            if (null != t) {
                var r, s, c, h, d, f = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t)) for (h = t.length; --h > -1;) o.killChildTweensOf(t[h], e);
                else {
                    r = [];
                    for (c in f) for (s = f[c].target.parentNode; s;) s === t && (r = r.concat(f[c].tweens)), s = s.parentNode;
                    for (d = r.length, h = 0; d > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                }
            }
        };
        var p = function(t, i, n, r) {
            i = i !== !1, n = n !== !1, r = r !== !1;
            for (var o, s, a = f(r), l = i && n && r, u = a.length; --u > -1;) s = a[u], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
        };
        return o.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        }, o.resumeAll = function(t, e, i) {
            p(!1, t, e, i)
        }, o.globalTimeScale = function(e) {
            var n = t._rootTimeline,
                r = i.ticker.time;
            return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, c.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, o
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, n, r = this.vars;
                for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            },
            r = 1e-10,
            o = i._internals,
            s = n._internals = {},
            a = o.isSelector,
            l = o.isArray,
            u = o.lazyTweens,
            c = o.lazyRender,
            h = _gsScope._gsDefine.globals,
            d = function(t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            },
            f = function(t, e, i) {
                var n, r, o = t.cycle;
                for (n in o) r = o[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                delete t.cycle
            },
            p = s.pauseCallback = function() {},
            m = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            g = n.prototype = new e;
        return n.version = "1.19.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
            var o = n.repeat && h.TweenMax || i;
            return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
        }, g.from = function(t, e, n, r) {
            return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
        }, g.fromTo = function(t, e, n, r, o) {
            var s = r.repeat && h.TweenMax || i;
            return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
        }, g.staggerTo = function(t, e, r, o, s, l, u, c) {
            var h, p, g = new n({
                    onComplete: l,
                    onCompleteParams: u,
                    callbackScope: c,
                    smoothChildTiming: this.smoothChildTiming
                }),
                v = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, 0 > o && (t = m(t), t.reverse(), o *= -1), p = 0; p < t.length; p++) h = d(r), h.startAt && (h.startAt = d(h.startAt), h.startAt.cycle && f(h.startAt, t, p)), v && (f(h, t, p), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[p], e, h, p * o);
            return this.add(g, s)
        }, g.staggerFrom = function(t, e, i, n, r, o, s, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
        }, g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
        }, g.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, g.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function(t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, o, s = new n(t),
                a = s._timeline;
            for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
            return a.add(s, 0), s
        }, g.add = function(r, o, s, a) {
            var u, c, h, d, f, p;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (s = s || "normal", a = a || 0, u = o, c = r.length, h = 0; c > h; h++) l(d = r[h]) && (d = new n({
                        tweens: d
                    })), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === s ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === s && (d._startTime -= d.delay())), u += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, o);
                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            return this
        }, g.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1;) this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, g._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, g.insert = g.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, g.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, g.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, g.addPause = function(t, e, n, r) {
            var o = i.delayedCall(0, p, n, r || this);
            return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
        }, g.removeLabel = function(t) {
            return delete this._labels[t], this
        }, g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, g._parseTimeOrLabel = function(e, i, n, r) {
            var o;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && l(r))) for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
            else {
                if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, g.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, g.stop = function() {
            return this.paused(!0)
        }, g.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, g.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, s, a, l, h, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._startTime,
                g = this._timeScale,
                v = this._paused;
            if (t >= f - 1e-7) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !! this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
            else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o) for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                t = 0, this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p) for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                    else for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                    h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), d = this._time, d >= p) for (n = this._first; n && (s = n._next, d === this._time && (!this._paused || v));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                else for (n = this._last; n && (s = n._prev, d === this._time && (!this._paused || v));) {
                    if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                        if (h === n) {
                            for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                            h = null, this.pause()
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                    }
                    n = s
                }
                this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        }, g._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, g.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
            return o
        }, g.getTweensOf = function(t, e) {
            var n, r, o = this._gc,
                s = [],
                a = 0;
            for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
            return o && this._enabled(!1, !0), s
        }, g.recent = function() {
            return this._recent
        }, g._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (n in o) o[n] >= i && (o[n] += t);
            return this._uncache(!0)
        }, g._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
            return r
        }, g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, g._enabled = function(t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, g.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, g.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, g.paused = function(e) {
            if (!e) for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, g.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "http://www.we7shop.com/Public/static/index/js/easing.Ease"], function(t, e, i) {
        var n = function(e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            },
            r = 1e-10,
            o = e._internals,
            s = o.lazyTweens,
            a = o.lazyRender,
            l = _gsScope._gsDefine.globals,
            u = new i(null, null, 1, 0),
            c = n.prototype = new t;
        return c.constructor = n, c.kill()._gc = !1, n.version = "1.19.0", c.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, c.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, c.removeCallback = function(t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, c.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, c.tweenTo = function(t, i) {
            i = i || {};
            var n, r, o, s = {
                    ease: u,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                },
                a = i.repeat && l.TweenMax || e;
            for (r in i) s[r] = i[r];
            return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function() {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart")
            }, o
        }, c.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, l, u, c, h, d, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                g = this._time,
                v = this._totalTime,
                y = this._startTime,
                _ = this._timeScale,
                b = this._rawPrevTime,
                w = this._paused,
                x = this._cycle;
            if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, u = "onComplete", c = !! this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === r) && b !== t && this._first && (c = !0, b > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
            else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && b !== r && (b > 0 || 0 > t && b >= 0) && !this._locked) && (u = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, u = "onReverseComplete") : b >= 0 && this._first && (c = !0), this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o) for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                t = 0, this._initted || (c = !0)
            } else if (0 === m && 0 > b && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= g) for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                else for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== x && !this._locked) {
                var T = this._yoyo && 0 !== (1 & x),
                    C = T === (this._yoyo && 0 !== (1 & this._cycle)),
                    k = this._totalTime,
                    S = this._cycle,
                    P = this._rawPrevTime,
                    $ = this._time;
                if (this._totalTime = x * m, this._cycle < x ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? b - 1e-4 : b, this._cycle = x, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
                if (C && (g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !w) return;
                this._time = $, this._totalTime = k, this._cycle = S, this._rawPrevTime = P
            }
            if (!(this._time !== g && this._first || i || c || d)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), f = this._time, f >= g) for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
            else for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || w));) {
                if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                    if (d === n) {
                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                        d = null, this.pause()
                    }
                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                }
                n = l
            }
            this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (y === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
        }, c.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, o = [],
                s = this.getChildren(t, e, i),
                a = 0,
                l = s.length;
            for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
            return o
        }, c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null
        }, c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        }, c.getLabelsArray = function() {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function() {
        var t = 180 / Math.PI,
            e = [],
            i = [],
            n = [],
            r = {},
            o = _gsScope._gsDefine.globals,
            s = function(t, e, i, n) {
                i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            },
            a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            l = function(t, e, i, n) {
                var r = {
                        a: t
                    },
                    o = {},
                    s = {},
                    a = {
                        c: n
                    },
                    l = (t + e) / 2,
                    u = (e + i) / 2,
                    c = (i + n) / 2,
                    h = (l + u) / 2,
                    d = (u + c) / 2,
                    f = (d - h) / 8;
                return r.b = l + (t - l) / 4, o.b = h + f, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + d) / 2, s.b = d - f, a.b = c + (n - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
            },
            u = function(t, r, o, s, a) {
                var u, c, h, d, f, p, m, g, v, y, _, b, w, x = t.length - 1,
                    T = 0,
                    C = t[0].a;
                for (u = 0; x > u; u++) f = t[T], c = f.a, h = f.d, d = t[T + 1].d, a ? (_ = e[u], b = i[u], w = (b + _) * r * .25 / (s ? .5 : n[u] || .5), p = h - (h - c) * (s ? .5 * r : 0 !== _ ? w / _ : 0), m = h + (d - h) * (s ? .5 * r : 0 !== b ? w / b : 0), g = h - (p + ((m - p) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (p = h - (h - c) * r * .5, m = h + (d - h) * r * .5, g = h - (p + m) / 2), p += g, m += g, f.c = v = p, 0 !== u ? f.b = C : f.b = C = f.a + .6 * (f.c - f.a), f.da = h - c, f.ca = v - c, f.ba = C - c, o ? (y = l(c, C, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, C = m;
                f = t[T], f.b = C, f.c = C + .4 * (f.d - C), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = C - f.a, o && (y = l(f.a, C, f.c, f.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
            },
            c = function(t, n, r, o) {
                var a, l, u, c, h, d, f = [];
                if (o) for (t = [o].concat(t), l = t.length; --l > -1;)"string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
                if (a = t.length - 2, 0 > a) return f[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], f[l] = new s(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                return f[l] = new s(t[l][n], 0, 0, t[l + 1][n]), f
            },
            h = function(t, o, s, l, h, d) {
                var f, p, m, g, v, y, _, b, w = {},
                    x = [],
                    T = d || t[0];
                h = "string" == typeof h ? "," + h + "," : a, null == o && (o = 1);
                for (p in t[0]) x.push(p);
                if (t.length > 1) {
                    for (b = t[t.length - 1], _ = !0, f = x.length; --f > -1;) if (p = x[f], Math.abs(T[p] - b[p]) > .05) {
                        _ = !1;
                        break
                    }
                    _ && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, f = x.length; --f > -1;) p = x[f], r[p] = -1 !== h.indexOf("," + p + ","), w[p] = c(t, p, r[p], d);
                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                if (!l) {
                    for (f = x.length; --f > -1;) if (r[p]) for (m = w[x[f]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[g] || 0) + v * v;
                    for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                }
                for (f = x.length, g = s ? 4 : 1; --f > -1;) p = x[f], m = w[p], u(m, o, s, l, r[p]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                return w
            },
            d = function(t, e, i) {
                e = e || "soft";
                var n, r, o, a, l, u, c, h, d, f, p, m = {},
                    g = "cubic" === e ? 3 : 2,
                    v = "soft" === e,
                    y = [];
                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                for (d in t[0]) y.push(d);
                for (u = y.length; --u > -1;) {
                    for (d = y[u], m[d] = l = [], f = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][d] : "string" == typeof(p = t[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && c > 1 && h - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                    for (h = f - g + 1, f = 0, c = 0; h > c; c += g) n = l[c], r = l[c + 1], o = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[f++] = p = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                    l.length = f
                }
                return m
            },
            f = function(t, e, i) {
                for (var n, r, o, s, a, l, u, c, h, d, f, p = 1 / i, m = t.length; --m > -1;) for (d = t[m], o = d.a, s = d.d - o, a = d.c - o, l = d.b - o, n = r = 0, c = 1; i >= c; c++) u = p * c, h = 1 - u, n = r - (r = (u * u * s + 3 * h * (u * a + h * l)) * u), f = m * i + c - 1, e[f] = (e[f] || 0) + n * n
            },
            p = function(t, e) {
                e = e >> 0 || 6;
                var i, n, r, o, s = [],
                    a = [],
                    l = 0,
                    u = 0,
                    c = e - 1,
                    h = [],
                    d = [];
                for (i in t) f(t[i], s, e);
                for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, d[o] = l, o === c && (u += l, o = n / e >> 0, h[o] = d, a[o] = u, l = 0, d = []);
                return {
                    length: u,
                    lengths: a,
                    segments: h
                }
            },
            m = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, r, o, s, a, l = e.values || [],
                        u = {},
                        c = l[0],
                        f = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = f ? f instanceof Array ? f : [
                        ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                    ] : null;
                    for (n in c) this._props.push(n);
                    for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                        var m = p(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
                        for (s = 0; 3 > s; s++) n = f[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = f[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, n, r, o, s, a, l, u, c, h, d = this._segCount,
                        f = this._func,
                        p = this._target,
                        m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                            for (u = d - 1; u > r && (this._l2 = c[++r]) <= e;);
                            this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = c[--r]) >= e;);
                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                            for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
                            this._s1 = h[r - 1], this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = h[--r]) >= e;);
                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                    for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, p)), f[o] ? p[o](l) : p[o] = l;
                    if (this._autoRotate) {
                        var g, v, y, _, b, w, x, T = this._autoRotate;
                        for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, y += (b - y) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - v) * x + w : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, p)), f[o] ? p[o](l) : p[o] = l)
                    }
                }
            }),
            g = m.prototype;
        m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = o.CSSPlugin;
            if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    n = e._setPluginRatio,
                    r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, o, s, a, l) {
                        e instanceof Array && (e = {
                            values: e
                        }), l = new m;
                        var u, c, h, d = e.values,
                            f = d.length - 1,
                            p = [],
                            g = {};
                        if (0 > f) return a;
                        for (u = 0; f >= u; u++) h = i(t, d[u], s, a, l, f !== u), p[u] = h.end;
                        for (c in e) g[c] = e[c];
                        return g.values = p, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                            ["left", "top", "rotation", u, !1]
                        ] : null != h.end.x && [
                            ["x", "y", "rotation", u, !1]
                        ]), g.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, s._tween), a
                    }
                })
            }
        }, g._mod = function(t) {
            for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
        }, g._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate) for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, r, o, s = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
            },
            a = _gsScope._gsDefine.globals,
            l = {},
            u = s.prototype = new t("css");
        u.constructor = s, s.version = "1.19.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
        };
        var c, h, d, f, p, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            x = /(?:\d|\-|\+|=|#|\.)*/g,
            T = /opacity *= *([^)]*)/i,
            C = /opacity:([^;]*)/i,
            k = /alpha\(opacity *=.+?\)/i,
            S = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            $ = /-([a-z])/gi,
            O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            A = function(t, e) {
                return e.toUpperCase()
            },
            F = /(?:Left|Right|Width)/i,
            E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            R = /,(?=[^\)]*(?:\(|$))/gi,
            D = /[\s,\(]/i,
            L = Math.PI / 180,
            M = 180 / Math.PI,
            I = {},
            j = document,
            N = function(t) {
                return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
            },
            q = N("div"),
            H = N("img"),
            B = s._internals = {
                _specialProps: l
            },
            W = navigator.userAgent,
            V = function() {
                var t = W.indexOf("Android"),
                    e = N("a");
                return d = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || Number(W.substr(t + 8, 1)) > 3), p = d && Number(W.substr(W.indexOf("Version/") + 8, 1)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), !! e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(),
            Y = function(t) {
                return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            X = function(t) {
                window.console && console.log(t)
            },
            U = "",
            Q = "",
            G = function(t, e) {
                e = e || q;
                var i, n, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                return n >= 0 ? (Q = 3 === n ? "ms" : i[n], U = "-" + Q.toLowerCase() + "-", Q + t) : null
            },
            Z = j.defaultView ? j.defaultView.getComputedStyle : function() {},
            K = s.getStyle = function(t, e, i, n, r) {
                var o;
                return V || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Z(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Y(t)
            },
            J = B.convertToPixels = function(t, i, n, r, o) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var a, l, u, c = F.test(i),
                    h = t,
                    d = q.style,
                    f = 0 > n,
                    p = 1 === n;
                if (f && (n = -n), p && (n *= 100), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                else {
                    if (d.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                    else {
                        if (h = t.parentNode || j.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                        d[c ? "width" : "height"] = n + r
                    }
                    h.appendChild(q), a = parseFloat(q[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(q), c && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || o || (a = J(t, i, n, r, !0))
                }
                return p && (a /= 100), f ? -a : a
            },
            tt = B.calculateOffset = function(t, e, i) {
                if ("absolute" !== K(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top",
                    r = K(t, "margin" + n, i);
                return t["offset" + n] - (J(t, e, parseFloat(r), r.replace(x, "")) || 0)
            },
            et = function(t, e) {
                var i, n, r, o = {};
                if (e = e || Z(t, null)) if (i = e.length) for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || $t === r) && (o[r.replace($, A)] = e.getPropertyValue(r));
                else for (i in e)(-1 === i.indexOf("Transform") || Pt === i) && (o[i] = e[i]);
                else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === o[i] && (o[i.replace($, A)] = e[i]);
                return V || (o.opacity = Y(t)), n = qt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, At && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
            },
            it = function(t, e, i, n, r) {
                var o, s, a, l = {},
                    u = t.style;
                for (s in i)"cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(w, "") ? o : 0 : tt(t, s), void 0 !== u[s] && (a = new vt(u, s, u[s], a)));
                if (n) for (s in n)"className" !== s && (l[s] = n[s]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            nt = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ot = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                if (t.getBBox && It(t)) return t.getBBox()[e] || 0;
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = nt[e],
                    o = r.length;
                for (i = i || Z(t, null); --o > -1;) n -= parseFloat(K(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            },
            st = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, n = t.split(" "),
                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !e) {
                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(st(n[i]));
                    return t.join(",")
                }
                return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(o.replace(w, "")), e.v = t), e || t
            },
            at = function(t, e) {
                return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            },
            lt = function(t, e) {
                return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            },
            ut = function(t, e, i, n) {
                var r, o, s, a, l, u = 1e-6;
                return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : M) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), u > a && a > -u && (a = 0), a
            },
            ct = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ht = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            dt = s.parseColor = function(t, e) {
                var i, n, r, o, s, a, l, u, c, h, d;
                if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                    else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3)) if (i = d = t.match(y), e) {
                        if (-1 !== t.indexOf("=")) return t.match(_)
                    } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ht(s + 1 / 3, n, r), i[1] = ht(s, n, r), i[2] = ht(s - 1 / 3, n, r);
                    else i = t.match(y) || ct.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                } else i = ct.black;
                return e && !d && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, u = Math.max(n, r, o), c = Math.min(n, r, o), l = (u + c) / 2, u === c ? s = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), s = u === n ? (r - o) / h + (o > r ? 6 : 0) : u === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            ft = function(t, e) {
                var i, n, r, o = t.match(pt) || [],
                    s = 0,
                    a = o.length ? "" : t;
                for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + t.substr(s)
            },
            pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (u in ct) pt += "|" + u + "\\b";
        pt = new RegExp(pt + ")", "gi"), s.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), pt.lastIndex = 0
        }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
        var mt = function(t, e, i, n) {
                if (null == t) return function(t) {
                    return t
                };
                var r, o = e ? (t.match(pt) || [""])[0] : "",
                    s = t.split(o).join("").match(b) || [],
                    a = t.substr(0, t.indexOf(s[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    u = -1 !== t.indexOf(" ") ? " " : ",",
                    c = s.length,
                    h = c > 0 ? s[0].replace(y, "") : "";
                return c ? r = e ?
                    function(t) {
                        var e, d, f, p;
                        if ("number" == typeof t) t += h;
                        else if (n && R.test(t)) {
                            for (p = t.replace(R, "|").split("|"), f = 0; f < p.length; f++) p[f] = r(p[f]);
                            return p.join(",")
                        }
                        if (e = (t.match(pt) || [o])[0], d = t.split(e).join("").match(b) || [], f = d.length, c > f--) for (; ++f < c;) d[f] = i ? d[(f - 1) / 2 | 0] : s[f];
                        return a + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                    var e, o, d;
                    if ("number" == typeof t) t += h;
                    else if (n && R.test(t)) {
                        for (o = t.replace(R, "|").split("|"), d = 0; d < o.length; d++) o[d] = r(o[d]);
                        return o.join(",")
                    }
                    if (e = t.match(b) || [], d = e.length, c > d--) for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : s[d];
                    return a + e.join(u) + l
                } : function(t) {
                    return t
                }
            },
            gt = function(t) {
                return t = t.split(","), function(e, i, n, r, o, s, a) {
                    var l, u = (i + "").split(" ");
                    for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                    return r.parse(e, a, o, s)
                }
            },
            vt = (B._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                    if (i = l.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                            i[o] = r
                        }
                    } else i[o] = i.s + i.xs0;
                    l = l._next
                }
            }, function(t, e, i, n, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
            }),
            yt = (B._parseToProxy = function(t, e, i, n, r, o) {
                var s, a, l, u, c, h = n,
                    d = {},
                    f = {},
                    p = i._transform,
                    m = I;
                for (i._transform = null, I = e, n = c = i.parse(t, e, n, r), I = m, o && (i._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                    if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, d[a] = n.s, o || (u = new vt(n, "s", a, u, n.r), n.c = 0), 1 === n.type)) for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, f[a] = n.data[l], d[a] = n[l], o || (u = new vt(n, l, a, u, n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: d,
                    end: f,
                    firstMPT: u,
                    pt: c
                }
            }, B.CSSPropTween = function(t, e, n, r, s, a, l, u, c, h, d) {
                this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof yt || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === d ? n + r : d, s && (this._next = s, s._prev = this)
            }),
            _t = function(t, e, i, n, r, o) {
                var s = new yt(t, e, i, n - i, r, (-1), o);
                return s.b = i, s.e = s.xs0 = n, s
            },
            bt = s.parseComplex = function(t, e, i, n, r, o, a, l, u, h) {
                i = i || o || "", "function" == typeof n && (n = n(v, g)), a = new yt(t, e, 0, 0, a, h ? 2 : 1, null, (!1), l, i, n), n += "", r && pt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                var d, f, p, m, b, w, x, T, C, k, S, P, $, O = i.split(", ").join(",").split(" "),
                    A = n.split(", ").join(",").split(" "),
                    F = O.length,
                    E = c !== !1;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(R, ", ").split(" "), A = A.join(" ").replace(R, ", ").split(" "), F = O.length), F !== A.length && (O = (o || "").split(" "), F = O.length), a.plugin = u, a.setRatio = h, pt.lastIndex = 0, d = 0; F > d; d++) if (m = O[d], b = A[d], T = parseFloat(m), T || 0 === T) a.appendXtra("", T, at(b, T), b.replace(_, ""), E && -1 !== b.indexOf("px"), !0);
                else if (r && pt.test(m)) P = b.indexOf(")") + 1, P = ")" + (P ? b.substr(P) : ""), $ = -1 !== b.indexOf("hsl") && V, m = dt(m, $), b = dt(b, $), C = m.length + b.length > 6, C && !V && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[d]).join("transparent")) : (V || (C = !1), $ ? a.appendXtra(C ? "hsla(" : "hsl(", m[0], at(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(b[1], m[1]), "%,", !1).appendXtra("", m[2], at(b[2], m[2]), C ? "%," : "%" + P, !1) : a.appendXtra(C ? "rgba(" : "rgb(", m[0], b[0] - m[0], ",", !0, !0).appendXtra("", m[1], b[1] - m[1], ",", !0).appendXtra("", m[2], b[2] - m[2], C ? "," : P, !0), C && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, P, !1))), pt.lastIndex = 0;
                else if (w = m.match(y)) {
                    if (x = b.match(_), !x || x.length !== w.length) return a;
                    for (p = 0, f = 0; f < w.length; f++) S = w[f], k = m.indexOf(S, p), a.appendXtra(m.substr(p, k - p), Number(S), at(x[f], S), "", E && "px" === m.substr(k + S.length, 2), 0 === f), p = k + S.length;
                    a["xs" + a.l] += m.substr(p)
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                if (-1 !== n.indexOf("=") && a.data) {
                    for (P = a.xs0 + a.data.s, d = 1; d < a.l; d++) P += a["xs" + d] + a.data["xn" + d];
                    a.e = P + a["xs" + d]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            },
            wt = 9;
        for (u = yt.prototype, u.l = u.pr = 0; --wt > 0;) u["xn" + wt] = 0, u["xs" + wt] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, o) {
            var s = this,
                a = s.l;
            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new yt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                s: e + i
            }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
        };
        var xt = function(t, e) {
                e = e || {}, this.p = e.prefix ? G(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            Tt = B._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var n, r, o = t.split(","),
                    s = e.defaultValue;
                for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new xt(o[n], e)
            },
            Ct = B._registerPluginProp = function(t) {
                if (!l[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Tt(t, {
                        parser: function(t, i, n, r, o, s, u) {
                            var c = a.com.greensock.plugins[e];
                            return c ? (c._cssRegister(), l[n].parse(t, i, n, r, o, s, u)) : (X("Error: " + e + " js file not loaded."), o)
                        }
                    })
                }
            };
        u = xt.prototype, u.parseComplex = function(t, e, i, n, r, o) {
            var s, a, l, u, c, h, d = this.keyword;
            if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && (c = e.indexOf(d), h = i.indexOf(d), c !== h && (-1 === h ? a[s] = a[s].split(d).join("") : -1 === c && (a[s] += " " + d)));
                e = a.join(", "), i = l.join(", ")
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
        }, u.parse = function(t, e, i, n, o, s, a) {
            return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
        }, s.registerSpecialProp = function(t, e, i) {
            Tt(t, {
                parser: function(t, n, r, o, s, a, l) {
                    var u = new yt(t, r, 0, 0, s, 2, r, (!1), i);
                    return u.plugin = a, u.setRatio = e(t, n, o._tween, r), u
                },
                priority: i
            })
        }, s.useSVGTransformAttr = d || f;
        var kt, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Pt = G("transform"),
            $t = U + "transform",
            Ot = G("transformOrigin"),
            At = null !== G("perspective"),
            Ft = B.Transform = function() {
                this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !At) && (s.defaultForce3D || "auto")
            },
            Et = window.SVGElement,
            zt = function(t, e, i) {
                var n, r = j.createElementNS("http://www.w3.org/2000/svg", t),
                    o = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            },
            Rt = j.documentElement,
            Dt = function() {
                var t, e, i, n = m || /Android/i.test(W) && !window.chrome;
                return j.createElementNS && !n && (t = zt("svg", Rt), e = zt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[Pt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && At), Rt.removeChild(t)), n
            }(),
            Lt = function(t, e, i, n, r, o) {
                var a, l, u, c, h, d, f, p, m, g, v, y, _, b, w = t._gsTransform,
                    x = Nt(t, !0);
                w && (_ = w.xOrigin, b = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(), e = st(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = h = parseFloat(a[1]), n && x !== jt && (d = x[0], f = x[1], p = x[2], m = x[3], g = x[4], v = x[5], y = d * m - f * p, l = c * (m / y) + h * (-p / y) + (p * v - m * g) / y, u = c * (-f / y) + h * (d / y) - (d * v - f * g) / y, c = i.xOrigin = a[0] = l, h = i.yOrigin = a[1] = u), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = c - _, u = h - b, w.xOffset += l * x[0] + u * x[2] - l, w.yOffset += l * x[1] + u * x[3] - u) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
            },
            Mt = function(t) {
                try {
                    return t.getBBox()
                } catch (t) {}
            },
            It = function(t) {
                return !!(Et && t.getBBox && t.getCTM && Mt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
            },
            jt = [1, 0, 0, 1, 0, 0],
            Nt = function(t, e) {
                var i, n, r, o, s, a, l = t._gsTransform || new Ft,
                    u = 1e5,
                    c = t.style;
                if (Pt ? n = K(t, $t, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(E), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && Pt && ((a = "none" === Z(t).display) || !t.parentNode) && (a && (o = c.display, c.display = "block"), t.parentNode || (s = 1, Rt.appendChild(t)), n = K(t, $t, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Vt(c, "display"), s && Rt.removeChild(t)), (l.svg || t.getBBox && It(t)) && (i && -1 !== (c[Pt] + "").indexOf("matrix") && (n = c[Pt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return jt;
                for (r = (n || "").match(y) || [], wt = r.length; --wt > -1;) o = Number(r[wt]), r[wt] = (s = o - (o |= 0)) ? (s * u + (0 > s ? -.5 : .5) | 0) / u + o : o;
                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            },
            qt = B.getTransform = function(t, i, n, r) {
                if (t._gsTransform && n && !r) return t._gsTransform;
                var o, a, l, u, c, h, d = n ? t._gsTransform || new Ft : new Ft,
                    f = d.scaleX < 0,
                    p = 2e-5,
                    m = 1e5,
                    g = At ? parseFloat(K(t, Ot, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                    v = parseFloat(s.defaultTransformPerspective) || 0;
                if (d.svg = !(!t.getBBox || !It(t)), d.svg && (Lt(t, K(t, Ot, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), kt = s.useSVGTransformAttr || Dt), o = Nt(t), o !== jt) {
                    if (16 === o.length) {
                        var y, _, b, w, x, T = o[0],
                            C = o[1],
                            k = o[2],
                            S = o[3],
                            P = o[4],
                            $ = o[5],
                            O = o[6],
                            A = o[7],
                            F = o[8],
                            E = o[9],
                            z = o[10],
                            R = o[12],
                            D = o[13],
                            L = o[14],
                            I = o[11],
                            j = Math.atan2(O, z);
                        d.zOrigin && (L = -d.zOrigin, R = F * L - o[12], D = E * L - o[13], L = z * L + d.zOrigin - o[14]), d.rotationX = j * M, j && (w = Math.cos(-j), x = Math.sin(-j), y = P * w + F * x, _ = $ * w + E * x, b = O * w + z * x, F = P * -x + F * w, E = $ * -x + E * w, z = O * -x + z * w, I = A * -x + I * w, P = y, $ = _, O = b), j = Math.atan2(-k, z), d.rotationY = j * M, j && (w = Math.cos(-j), x = Math.sin(-j), y = T * w - F * x, _ = C * w - E * x, b = k * w - z * x, E = C * x + E * w, z = k * x + z * w, I = S * x + I * w, T = y, C = _, k = b), j = Math.atan2(C, T), d.rotation = j * M, j && (w = Math.cos(-j), x = Math.sin(-j), T = T * w + P * x, _ = C * w + $ * x, $ = C * -x + $ * w, O = k * -x + O * w, C = _), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(T * T + C * C) * m + .5 | 0) / m, d.scaleY = (Math.sqrt($ * $ + E * E) * m + .5 | 0) / m, d.scaleZ = (Math.sqrt(O * O + z * z) * m + .5 | 0) / m, d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = P || $ ? Math.atan2(P, $) * M + d.rotation : d.skewX || 0, Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180))), d.perspective = I ? 1 / (0 > I ? -I : I) : 0, d.x = R, d.y = D, d.z = L, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * C - d.xOrigin * $))
                    } else if (!At || r || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                        var N = o.length >= 6,
                            q = N ? o[0] : 1,
                            H = o[1] || 0,
                            B = o[2] || 0,
                            W = N ? o[3] : 1;
                        d.x = o[4] || 0, d.y = o[5] || 0, l = Math.sqrt(q * q + H * H), u = Math.sqrt(W * W + B * B), c = q || H ? Math.atan2(H, q) * M : d.rotation || 0, h = B || W ? Math.atan2(B, W) * M + c : d.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (f ? (l *= -1, h += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, h += 0 >= h ? 180 : -180)), d.scaleX = l, d.scaleY = u, d.rotation = c, d.skewX = h, At && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * q + d.yOrigin * B), d.y -= d.yOrigin - (d.xOrigin * H + d.yOrigin * W))
                    }
                    d.zOrigin = g;
                    for (a in d) d[a] < p && d[a] > -p && (d[a] = 0)
                }
                return n && (t._gsTransform = d, d.svg && (kt && t.style[Pt] ? e.delayedCall(.001, function() {
                    Vt(t.style, Pt)
                }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                    t.removeAttribute("transform")
                }))), d
            },
            Ht = function(t) {
                var e, i, n = this.data,
                    r = -n.rotation * L,
                    o = r + n.skewX * L,
                    s = 1e5,
                    a = (Math.cos(r) * n.scaleX * s | 0) / s,
                    l = (Math.sin(r) * n.scaleX * s | 0) / s,
                    u = (Math.sin(o) * -n.scaleY * s | 0) / s,
                    c = (Math.cos(o) * n.scaleY * s | 0) / s,
                    h = this.t.style,
                    d = this.t.currentStyle;
                if (d) {
                    i = l, l = -u, u = -i, e = d.filter, h.filter = "";
                    var f, p, g = this.t.offsetWidth,
                        v = this.t.offsetHeight,
                        y = "absolute" !== d.position,
                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                        b = n.x + g * n.xPercent / 100,
                        w = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (f = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, p = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, b += f - (f * a + p * l), w += p - (f * u + p * c)), y ? (f = g / 2, p = v / 2, _ += ", Dx=" + (f - (f * a + p * l) + b) + ", Dy=" + (p - (f * u + p * c) + w) + ")") : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(z, _) : h.filter = _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                        var C, k, S, P = 8 > m ? 1 : -1;
                        for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + w), wt = 0; 4 > wt; wt++) k = rt[wt], C = d[k], i = -1 !== C.indexOf("px") ? parseFloat(C) : J(this.t, k, parseFloat(C), C.replace(x, "")) || 0, S = i !== n[k] ? 2 > wt ? -n.ieOffsetX : -n.ieOffsetY : 2 > wt ? f - n.ieOffsetX : p - n.ieOffsetY, h[k] = (n[k] = Math.round(i - S * (0 === wt || 2 === wt ? 1 : P))) + "px"
                    }
                }
            },
            Bt = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                var e, i, n, r, o, s, a, l, u, c, h, d, p, m, g, v, y, _, b, w, x, T, C, k = this.data,
                    S = this.t.style,
                    P = k.rotation,
                    $ = k.rotationX,
                    O = k.rotationY,
                    A = k.scaleX,
                    F = k.scaleY,
                    E = k.scaleZ,
                    z = k.x,
                    R = k.y,
                    D = k.z,
                    M = k.svg,
                    I = k.perspective,
                    j = k.force3D;
                if (((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !D && !I && !O && !$ && 1 === E || kt && M || !At) return void(P || k.skewX || M ? (P *= L, T = k.skewX * L, C = 1e5, e = Math.cos(P) * A, r = Math.sin(P) * A, i = Math.sin(P - T) * -F, o = Math.cos(P - T) * F, T && "simple" === k.skewType && (y = Math.tan(T - k.skewY * L), y = Math.sqrt(1 + y * y), i *= y, o *= y, k.skewY && (y = Math.tan(k.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y)), M && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset, kt && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), z += .01 * k.xPercent * m.width, R += .01 * k.yPercent * m.height), m = 1e-6, m > z && z > -m && (z = 0), m > R && R > -m && (R = 0)), b = (e * C | 0) / C + "," + (r * C | 0) / C + "," + (i * C | 0) / C + "," + (o * C | 0) / C + "," + z + "," + R + ")", M && kt ? this.t.setAttribute("transform", "matrix(" + b) : S[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : S[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + F + "," + z + "," + R + ")");
                if (f && (m = 1e-4, m > A && A > -m && (A = E = 2e-5), m > F && F > -m && (F = E = 2e-5), !I || k.z || k.rotationX || k.rotationY || (I = 0)), P || k.skewX) P *= L, g = e = Math.cos(P), v = r = Math.sin(P), k.skewX && (P -= k.skewX * L, g = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (y = Math.tan((k.skewX - k.skewY) * L), y = Math.sqrt(1 + y * y), g *= y, v *= y, k.skewY && (y = Math.tan(k.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y))), i = -v, o = g;
                else {
                    if (!(O || $ || 1 !== E || I || M)) return void(S[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + R + "px," + D + "px)" + (1 !== A || 1 !== F ? " scale(" + A + "," + F + ")" : ""));
                    e = o = 1, i = r = 0
                }
                u = 1, n = s = a = l = c = h = 0, d = I ? -1 / I : 0, p = k.zOrigin, m = 1e-6, w = ",", x = "0", P = O * L, P && (g = Math.cos(P), v = Math.sin(P), a = -v, c = d * -v, n = e * v, s = r * v, u = g, d *= g, e *= g, r *= g), P = $ * L, P && (g = Math.cos(P), v = Math.sin(P), y = i * g + n * v, _ = o * g + s * v, l = u * v, h = d * v, n = i * -v + n * g, s = o * -v + s * g, u *= g, d *= g, i = y, o = _), 1 !== E && (n *= E, s *= E, u *= E, d *= E), 1 !== F && (i *= F, o *= F, l *= F, h *= F), 1 !== A && (e *= A, r *= A, a *= A, c *= A), (p || M) && (p && (z += n * -p, R += s * -p, D += u * -p + p), M && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset), m > z && z > -m && (z = x), m > R && R > -m && (R = x), m > D && D > -m && (D = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > a && a > -m ? x : a), b += w + (m > c && c > -m ? x : c) + w + (m > i && i > -m ? x : i) + w + (m > o && o > -m ? x : o), $ || O || 1 !== E ? (b += w + (m > l && l > -m ? x : l) + w + (m > h && h > -m ? x : h) + w + (m > n && n > -m ? x : n), b += w + (m > s && s > -m ? x : s) + w + (m > u && u > -m ? x : u) + w + (m > d && d > -m ? x : d) + w) : b += ",0,0,0,0,1,0,", b += z + w + R + w + D + w + (I ? 1 + -D / I : 1) + ")", S[Pt] = b
            };
        u = Ft.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, o, a, l) {
                if (n._lastParsedTransform === l) return o;
                n._lastParsedTransform = l;
                var u;
                "function" == typeof l[i] && (u = l[i], l[i] = e);
                var c, h, d, f, p, m, y, _, b, w = t._gsTransform,
                    x = t.style,
                    T = 1e-6,
                    C = St.length,
                    k = l,
                    S = {},
                    P = "transformOrigin",
                    $ = qt(t, r, !0, k.parseTransform),
                    O = k.transform && ("function" == typeof k.transform ? k.transform(v, g) : k.transform);
                if (n._transform = $, O && "string" == typeof O && Pt) h = q.style, h[Pt] = O, h.display = "block", h.position = "absolute", j.body.appendChild(q), c = qt(q, null, !1), $.svg && (m = $.xOrigin, y = $.yOrigin, c.x -= $.xOffset, c.y -= $.yOffset, (k.transformOrigin || k.svgOrigin) && (O = {}, Lt(t, st(k.transformOrigin), O, k.svgOrigin, k.smoothOrigin, !0), m = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset - $.xOffset, c.y -= O.yOffset - $.yOffset), (m || y) && (_ = Nt(q, !0), c.x -= m - (m * _[0] + y * _[2]), c.y -= y - (m * _[1] + y * _[3]))), j.body.removeChild(q), c.perspective || (c.perspective = $.perspective), null != k.xPercent && (c.xPercent = lt(k.xPercent, $.xPercent)), null != k.yPercent && (c.yPercent = lt(k.yPercent, $.yPercent));
                else if ("object" == typeof k) {
                    if (c = {
                            scaleX: lt(null != k.scaleX ? k.scaleX : k.scale, $.scaleX),
                            scaleY: lt(null != k.scaleY ? k.scaleY : k.scale, $.scaleY),
                            scaleZ: lt(k.scaleZ, $.scaleZ),
                            x: lt(k.x, $.x),
                            y: lt(k.y, $.y),
                            z: lt(k.z, $.z),
                            xPercent: lt(k.xPercent, $.xPercent),
                            yPercent: lt(k.yPercent, $.yPercent),
                            perspective: lt(k.transformPerspective, $.perspective)
                        }, p = k.directionalRotation, null != p) if ("object" == typeof p) for (h in p) k[h] = p[h];
                    else k.rotation = p;
                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && (c.x = 0, c.xPercent = lt(k.x, $.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (c.y = 0, c.yPercent = lt(k.y, $.yPercent)), c.rotation = ut("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : $.rotation - $.skewY, $.rotation - $.skewY, "rotation", S), At && (c.rotationX = ut("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : $.rotationX || 0, $.rotationX, "rotationX", S), c.rotationY = ut("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : $.rotationY || 0, $.rotationY, "rotationY", S)), c.skewX = ut(k.skewX, $.skewX - $.skewY), (c.skewY = ut(k.skewY, $.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                }
                for (At && null != k.force3D && ($.force3D = k.force3D, f = !0), $.skewType = k.skewType || $.skewType || s.defaultSkewType, d = $.force3D || $.z || $.rotationX || $.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == k.scale || (c.scaleZ = 1); --C > -1;) b = St[C], O = c[b] - $[b], (O > T || -T > O || null != k[b] || null != I[b]) && (f = !0, o = new yt($, b, $[b], O, o), b in S && (o.e = S[b]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                return O = k.transformOrigin, $.svg && (O || k.svgOrigin) && (m = $.xOffset, y = $.yOffset, Lt(t, st(O), c, k.svgOrigin, k.smoothOrigin), o = _t($, "xOrigin", (w ? $ : c).xOrigin, c.xOrigin, o, P), o = _t($, "yOrigin", (w ? $ : c).yOrigin, c.yOrigin, o, P), (m !== $.xOffset || y !== $.yOffset) && (o = _t($, "xOffset", w ? m : $.xOffset, $.xOffset, o, P), o = _t($, "yOffset", w ? y : $.yOffset, $.yOffset, o, P)), O = kt ? null : "0px 0px"), (O || At && d && $.zOrigin) && (Pt ? (f = !0, b = Ot, O = (O || K(t, b, r, !1, "50% 50%")) + "", o = new yt(x, b, 0, 0, o, (-1), P), o.b = x[b], o.plugin = a, At ? (h = $.zOrigin, O = O.split(" "), $.zOrigin = (O.length > 2 && (0 === h || "0px" !== O[2]) ? parseFloat(O[2]) : h) || 0, o.xs0 = o.e = O[0] + " " + (O[1] || "50%") + " 0px", o = new yt($, "zOrigin", 0, 0, o, (-1), o.n), o.b = h, o.xs0 = o.e = $.zOrigin) : o.xs0 = o.e = O) : st(O + "", $)), f && (n._transformType = $.svg && kt || !d && 3 !== this._transformType ? 2 : 3), u && (l[i] = u), o
            },
            prefix: !0
        }), Tt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Tt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, o, s, a) {
                e = this.format(e);
                var l, u, c, h, d, f, p, m, g, v, y, _, b, w, x, T, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    k = t.style;
                for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < C.length; u++) this.p.indexOf("border") && (C[u] = G(C[u])), d = h = K(t, C[u], r, !1, "0px"), -1 !== d.indexOf(" ") && (h = d.split(" "), d = h[0], h = h[1]), f = c = l[u], p = parseFloat(d), _ = d.substr((p + "").length), b = "=" === f.charAt(1), b ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (w = J(t, "borderLeft", p, _), x = J(t, "borderTop", p, _), "%" === y ? (d = w / g * 100 + "%", h = x / v * 100 + "%") : "em" === y ? (T = J(t, "borderLeft", 1, "em"), d = w / T + "em", h = x / T + "em") : (d = w + "px", h = x + "px"), b && (f = parseFloat(d) + m + y, c = parseFloat(h) + m + y)), s = bt(k, C[u], d + " " + h, f + " " + c, !1, "0px", s);
                return s
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0)
        }), Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, o, s) {
                return bt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
            },
            prefix: !0,
            formatter: mt("0px 0px", !1, !0)
        }), Tt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, o, s) {
                var a, l, u, c, h, d, f = "background-position",
                    p = r || Z(t, null),
                    g = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = K(t, "backgroundImage").replace(O, ""), d && "none" !== d)) {
                    for (a = g.split(" "), l = v.split(" "), H.setAttribute("src", d), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, v, o, s)
            },
            formatter: st
        }), Tt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return t += "", st(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }), Tt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Tt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Tt("transformStyle", {
            prefix: !0
        }), Tt("backfaceVisibility", {
            prefix: !0
        }), Tt("userSelect", {
            prefix: !0
        }), Tt("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
        }), Tt("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Tt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, o, s) {
                var a, l, u;
                return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
            }
        }), Tt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Tt("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
                return r
            }
        }), Tt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, o, s) {
                var a = K(t, "borderTopWidth", r, !1, "0px"),
                    l = this.format(e).split(" "),
                    u = l[0].replace(x, "");
                return "px" !== u && (a = parseFloat(a) / J(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0]
            }
        }), Tt("borderWidth", {
            parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Tt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r, o) {
                var s = t.style,
                    a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new yt(s, a, 0, 0, r, (-1), i, (!1), 0, s[a], e)
            }
        });
        var Wt = function(t) {
            var e, i = this.t,
                n = i.filter || K(this.data, "filter") || "",
                r = this.s + this.c * t | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
        };
        Tt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, o, s) {
                var a = parseFloat(K(t, "opacity", r, !1, "1")),
                    l = t.style,
                    u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), V ? o = new yt(l, "opacity", a, e - a, o) : (o = new yt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Wt), u && (o = new yt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
            }
        });
        var Vt = function(t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
            },
            Yt = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        Tt("className", {
            parser: function(t, e, n, o, s, a, l) {
                var u, c, h, d, f, p = t.getAttribute("class") || "",
                    m = t.style.cssText;
                if (s = o._classNamePT = new yt(t, n, 0, 0, s, 2), s.setRatio = Yt, s.pr = -11, i = !0, s.b = p, c = et(t, r), h = t._gsClassPT) {
                    for (d = {}, f = h.data; f;) d[f.p] = 1, f = f._next;
                    h.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = it(t, c, et(t), l, d), t.setAttribute("class", p), s.data = u.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, u.difs, s, a)
            }
        });
        var Xt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, o, s = this.t.style,
                    a = l.transform.parse;
                if ("all" === this.e) s.cssText = "", r = !0;
                else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p), Vt(s, i);
                r && (Vt(s, Pt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Tt("clearProps", {
            parser: function(t, e, n, r, o) {
                return o = new yt(t, n, 0, 0, o, 2), o.setRatio = Xt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
            }
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), wt = u.length; wt--;) Ct(u[wt]);
        u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, u) {
            if (!t.nodeType) return !1;
            this._target = g = t, this._tween = a, this._vars = e, v = u, c = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = Z(t, ""), o = this._overwriteProps;
            var f, m, y, _, b, w, x, T, k, S = t.style;
            if (h && "" === S.zIndex && (f = K(t, "zIndex", r), ("auto" === f || "" === f) && this._addLazySet(S, "zIndex", 0)), "string" == typeof e && (_ = S.cssText, f = et(t, r), S.cssText = _ + ";" + e, f = it(t, f, et(t)).difs, !V && C.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, S.cssText = _), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                for (k = 3 === this._transformType, Pt ? d && (h = !0, "" === S.zIndex && (x = K(t, "zIndex", r), ("auto" === x || "" === x) && this._addLazySet(S, "zIndex", 0)), p && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : S.zoom = 1, y = m; y && y._next;) y = y._next;
                T = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Pt ? Bt : Ht, T.data = this._transform || qt(t, r, !0), T.tween = a, T.pr = -1, o.pop()
            }
            if (i) {
                for (; m;) {
                    for (w = m._next, y = _; y && y.pr > m.pr;) y = y._next;
                    (m._prev = y ? y._prev : b) ? m._prev._next = m : _ = m, (m._next = y) ? y._prev = m : b = m, m = w
                }
                this._firstPT = _
            }
            return !0
        }, u.parse = function(t, e, i, o) {
            var s, a, u, h, d, f, p, m, y, _, b = t.style;
            for (s in e) f = e[s], "function" == typeof f && (f = f(v, g)), a = l[s], a ? i = a.parse(t, f, s, this, i, o, e) : (d = K(t, s, r) + "", y = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && S.test(f) ? (y || (f = dt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = bt(b, s, d, f, !0, "transparent", i, 0, o)) : y && D.test(f) ? i = bt(b, s, d, f, !0, null, i, 0, o) : (u = parseFloat(d), p = u || 0 === u ? d.substr((u + "").length) : "", ("" === d || "auto" === d) && ("width" === s || "height" === s ? (u = ot(t, s, r), p = "px") : "left" === s || "top" === s ? (u = tt(t, s, r), p = "px") : (u = "opacity" !== s ? 0 : 1, p = "")), _ = y && "=" === f.charAt(1), _ ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), m = f.replace(x, "")) : (h = parseFloat(f), m = y ? f.replace(x, "") : ""), "" === m && (m = s in n ? n[s] : p), f = h || 0 === h ? (_ ? h + u : h) + m : e[s], p !== m && "" !== m && (h || 0 === h) && u && (u = J(t, s, u, p), "%" === m ? (u /= J(t, s, 100, "%") / 100, e.strictUnits !== !0 && (d = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= J(t, s, 1, m) : "px" !== m && (h = J(t, s, h, m), m = "px"), _ && (h || 0 === h) && (f = h + u + m)), _ && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== b[s] && (f || f + "" != "NaN" && null != f) ? (i = new yt(b, s, h || u || 0, 0, i, (-1), s, (!1), 0, d, f), i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : d) : X("invalid " + s + " tween value: " + e[s]) : (i = new yt(b, s, u, h - u, i, 0, s, c !== !1 && ("px" === m || "zIndex" === s), 0, d, f), i.xs0 = m))), o && i && !i.plugin && (i.plugin = o);
            return i
        }, u.setRatio = function(t) {
            var e, i, n, r = this._firstPT,
                o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type) if (1 === r.type) if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else for (; r;) {
                if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) {
                    if (1 === r.type) {
                        for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i
                    }
                } else r.t[r.p] = e + r.xs0;
                else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next
            }
        }, u._enableTransforms = function(t) {
            this._transform = this._transform || qt(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Ut = function(t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function(t, e, i) {
            var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Ut, n.data = this
        }, u._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, u._mod = function(t) {
            for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
        }, u._kill = function(e) {
            var i, n, r, o = e;
            if (e.autoAlpha || e.alpha) {
                o = {};
                for (n in e) o[n] = e[n];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
            return t.prototype._kill.call(this, o)
        };
        var Qt = function(t, e, i) {
            var n, r, o, s;
            if (t.slice) for (r = t.length; --r > -1;) Qt(t[r], e, i);
            else for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(et(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Qt(o, e, i)
        };
        return s.cascadeTo = function(t, i, n) {
            var r, o, s, a, l = e.to(t, i, n),
                u = [l],
                c = [],
                h = [],
                d = [],
                f = e._internals.reservedProps;
            for (t = l._targets || l.target, Qt(t, c, d), l.render(i, !0, !0), Qt(t, h), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;) if (o = it(d[r], c[r], h[r]), o.firstMPT) {
                o = o.difs;
                for (s in n) f[s] && (o[s] = n[s]);
                a = {};
                for (s in o) a[s] = c[r][s];
                u.push(e.fromTo(d[r], i, a, o))
            }
            return u
        }, t.activate([s]), s
    }, !0), function() {
        var t = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function(t, e, i) {
                    return this._tween = i, !0
                }
            }),
            e = function(t) {
                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
            },
            i = t.prototype;
        i._onInitAllProps = function() {
            for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
            for (s = o.length; --s > -1;) for (t = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
            return !1
        }, i._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
        }
    }(), function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.0",
            init: function(t, e, i, n) {
                var r, o;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) o = e[r], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }), this.finals = {};
            var r, o, s, a, l, u, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                h = 1e-6;
            for (r in e)"useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), u = (a + "").split("_"), o = u[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = a - s, u.length && (o = u.join("_"), -1 !== o.indexOf("short") && (l %= c, l !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > h || -h > l) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("http://www.we7shop.com/Public/static/index/js/easing.Back", ["http://www.we7shop.com/Public/static/index/js/easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
            o = r.com.greensock,
            s = 2 * Math.PI,
            a = Math.PI / 2,
            l = o._class,
            u = function(e, i) {
                var n = l("easing." + e, function() {}, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            },
            c = t.register ||
                function() {}, h = function(t, e, i, n, r) {
                var o = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return c(o, t), o
            }, d = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, f = function(e, i) {
                var n = l("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t) {
                    return new n(t)
                }, n
            }, p = h("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), m = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0), g = m.prototype = new t;
        return g.constructor = m, g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = l("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, g.config = e.config = function(t) {
            return new e(t)
        }, i = l("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, n, r, o, s, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), f = h, p = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / h * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = o * o * .5 * v) : (o = 2 * (1 - i), r = o * o * .5 * v), p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                x: i,
                y: n
            };
            for (u.sort(function(t, e) {
                return t.x - e.x
            }), a = new d(1, 1, null), f = h; --f > -1;) s = u[f], a = new d(s.x, s.y, a);
            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
        }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function(t) {
            return new i(t)
        }, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", u("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                }, !0),
                o = r.prototype = new t;
            return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                return new r(t, e)
            }, r
        }, h("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), n("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), h("Expo", u("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", u("SineOut", function(t) {
            return Math.sin(t * a)
        }), u("SineIn", function(t) {
            return -Math.cos(t * a) + 1
        }), u("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t, e) {
    var i = {},
        n = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!n.TweenLite) {
        var r, o, s, a, l, u = function(t) {
                var e, i = t.split("."),
                    r = n;
                for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                return r
            },
            c = u("com.greensock"),
            h = 1e-10,
            d = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            f = function() {},
            p = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !! i.push && t.call(i) === e)
                }
            }(),
            m = {},
            g = function(r, o, s, a) {
                this.sc = m[r] ? m[r].sc : [], m[r] = this, this.gsClass = null, this.func = s;
                var l = [];
                this.check = function(c) {
                    for (var h, d, f, p, v, y = o.length, _ = y; --y > -1;)(h = m[o[y]] || new g(o[y], [])).gsClass ? (l[y] = h.gsClass, _--) : c && h.sc.push(this);
                    if (0 === _ && s) {
                        if (d = ("com.greensock." + r).split("."), f = d.pop(), p = u(d.join("."))[f] = this.gsClass = s.apply(s, l), a) if (n[f] = i[f] = p, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                            return p
                        });
                        else if (v) if (r === e) {
                            module.exports = i[e] = p;
                            for (y in i) p[y] = i[y]
                        } else i[e] && (i[e][f] = p);
                        for (y = 0; y < this.sc.length; y++) this.sc[y].check()
                    }
                }, this.check(!0)
            },
            v = t._gsDefine = function(t, e, i, n) {
                return new g(t, e, i, n)
            },
            y = c._class = function(t, e, i) {
                return e = e ||
                    function() {}, v(t, [], function() {
                    return e
                }, i), e
            };
        v.globals = n;
        var _ = [0, 0, 1, 1],
            b = y("http://www.we7shop.com/Public/static/index/js/easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
            }, !0),
            w = b.map = {},
            x = b.register = function(t, e, i, n) {
                for (var r, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;) for (o = l[u], r = n ? y("easing." + o, null, !0) : c.easing[o] || {}, s = h.length; --s > -1;) a = h[s], w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
            };
        for (s = b.prototype, s._calcEnd = !1, s.getRatio = function(t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                i = this._power,
                n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = r.length; --o > -1;) s = r[o] + ",Power" + o, x(new b(null, null, 1, o), s, "easeOut", !0), x(new b(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), x(new b(null, null, 3, o), s, "easeInOut");
        w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
        var T = y("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var o, s, u = this._listeners[t],
                c = 0;
            for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = []), s = u.length; --s > -1;) o = u[s], o.c === e && o.s === i ? u.splice(s, 1) : 0 === c && o.pr < r && (c = s + 1);
            u.splice(c, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            })
        }, s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r) for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var C = t.requestAnimationFrame,
            k = t.cancelAnimationFrame,
            S = Date.now ||
                function() {
                    return (new Date).getTime()
                }, P = S();
        for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !C;) C = t[r[o] + "RequestAnimationFrame"], k = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
        y("Ticker", function(t, e) {
            var i, n, r, o, s, u = this,
                c = S(),
                d = !(e === !1 || !C) && "auto",
                p = 500,
                m = 33,
                g = "tick",
                v = function(t) {
                    var e, a, l = S() - P;
                    l > p && (c += l - m), P += l, u.time = (P - c) / 1e3, e = u.time - s, (!i || e > 0 || t === !0) && (u.frame++, s += e + (e >= o ? .004 : o - e), a = !0), t !== !0 && (r = n(v)), a && u.dispatchEvent(g)
                };
            T.call(u), u.time = u.frame = 0, u.tick = function() {
                v(!0)
            }, u.lagSmoothing = function(t, e) {
                p = t || 1 / h, m = Math.min(e, p, 0)
            }, u.sleep = function() {
                null != r && (d && k ? k(r) : clearTimeout(r), n = f, r = null, u === a && (l = !1))
            }, u.wake = function(t) {
                null !== r ? u.sleep() : t ? c += -P + (P = S()) : u.frame > 10 && (P = S() - p + 5), n = 0 === i ? f : d && C ? C : function(t) {
                    return setTimeout(t, 1e3 * (s - u.time) + 1 | 0)
                }, u === a && (l = !0), v(2)
            }, u.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), s = this.time + o, void u.wake()) : i
            }, u.useRAF = function(t) {
                return arguments.length ? (u.sleep(), d = t, void u.fps(i)) : d
            }, u.fps(t), setTimeout(function() {
                "auto" === d && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
            }, 1500)
        }), s = c.Ticker.prototype = new c.events.EventDispatcher, s.constructor = c.Ticker;
        var $ = y("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, X) {
                l || a.wake();
                var i = this.vars.useFrames ? Y : X;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = $.ticker = new c.Ticker, s = $.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var O = function() {
            l && S() - P > 2e3 && a.wake(), setTimeout(O, 2e3)
        };
        O(), s.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function(t, e, i) {}, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, s._enabled = function(t, e) {
            return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, s._callback = function(t) {
            var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this,
                o = n ? n.length : 0;
            switch (o) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, n[0]);
                    break;
                case 2:
                    i.call(r, n[0], n[1]);
                    break;
                default:
                    i.apply(r, n)
            }
        }, s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (l || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (R.length && Q(), this.render(t, e, !1), R.length && Q())
            }
            return this
        }, s.progress = s.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var A = y("core.SimpleTimeline", function(t) {
            $.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = A.prototype = new $, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) {
            var r, o;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (o = t._startTime; r && r._startTime > o;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function() {
            return l || a.wake(), this._totalTime
        };
        var F = y("TweenLite", function(e, i, n) {
                if ($.call(this, i, n), this.render = F.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : F.selector(e) || e;
                var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? V[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = s = d(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(d(o))) : (this._siblings[r] = G(o, this, !1), 1 === l && this._siblings[r].length > 1 && K(o, this, null, 1, this._siblings[r])) : (o = s[r--] = F.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
            }, !0),
            E = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            z = function(t, e) {
                var i, n = {};
                for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        s = F.prototype = new $, s.constructor = F, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, F.version = "1.19.0", F.defaultEase = s._ease = new b(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = a, F.autoSleep = 120, F.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }, F.selector = t.$ || t.jQuery ||
            function(e) {
                var i = t.$ || t.jQuery;
                return i ? (F.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
        var R = [],
            D = {},
            L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            M = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            I = function(t, e, i, n) {
                var r, o, s, a, l, u, c, h = [t, e],
                    d = 0,
                    f = "",
                    p = 0;
                for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(L) || [], o = e.match(L) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; l > a; a++) c = o[a], u = e.substr(d, e.indexOf(c, d) - d), f += u || !a ? u : ",", d += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === r[a] || r.length <= a ? f += c : (f && (h.push(f), f = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                    _next: h._firstPT,
                    t: h,
                    p: h.length - 1,
                    s: s,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : 0
                }), d += c.length;
                return f += e.substr(d), f && h.push(f), h.setRatio = M, h
            },
            j = function(t, e, i, n, r, o, s, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var u, c, h = "get" === i ? t[e] : i,
                    d = typeof t[e],
                    f = "string" == typeof n && "=" === n.charAt(1),
                    p = {
                        t: t,
                        p: e,
                        s: h,
                        f: "function" === d,
                        pg: 0,
                        n: r || e,
                        m: o ? "function" == typeof o ? o : Math.round : 0,
                        pr: 0,
                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                    };
                return "number" !== d && ("function" === d && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = s ? t[c](s) : t[c]()), "string" == typeof h && (s || isNaN(h)) ? (p.fp = s, u = I(h, n, a || F.defaultStringFilter, p), p = {
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : f || (p.s = parseFloat(h), p.c = parseFloat(n) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
            },
            N = F._internals = {
                isArray: p,
                isSelector: E,
                lazyTweens: R,
                blobDif: I
            },
            q = F._plugins = {},
            H = N.tweenLookup = {},
            B = 0,
            W = N.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1
            },
            V = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Y = $._rootFramesTimeline = new A,
            X = $._rootTimeline = new A,
            U = 30,
            Q = N.lazyRender = function() {
                var t, e = R.length;
                for (D = {}; --e > -1;) t = R[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                R.length = 0
            };
        X._startTime = a.time, Y._startTime = a.frame, X._active = Y._active = !0, setTimeout(Q, 1), $._updateRoot = F.render = function() {
            var t, e, i;
            if (R.length && Q(), X.render((a.time - X._startTime) * X._timeScale, !1, !1), Y.render((a.frame - Y._startTime) * Y._timeScale, !1, !1), R.length && Q(), a.frame >= U) {
                U = a.frame + (parseInt(F.autoSleep, 10) || 120);
                for (i in H) {
                    for (e = H[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i]
                }
                if (i = X._first, (!i || i._paused) && F.autoSleep && !Y._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", $._updateRoot);
        var G = function(t, e, i) {
                var n, r, o = t._gsTweenID;
                if (H[o || (t._gsTweenID = o = "t" + B++)] || (H[o] = {
                        target: t,
                        tweens: []
                    }), e && (n = H[o].tweens, n[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return H[o].tweens
            },
            Z = function(t, e, i, n) {
                var r, o, s = t.vars.onOverwrite;
                return s && (r = s(t, e, i, n)), s = F.onOverwrite, s && (o = s(t, e, i, n)), r !== !1 && o !== !1
            },
            K = function(t, e, i, n, r) {
                var o, s, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, o = 0; l > o; o++) if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                    else if (5 === n) break;
                    return s
                }
                var u, c = e._startTime + h,
                    d = [],
                    f = 0,
                    p = 0 === e._duration;
                for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || J(e, 0, p), 0 === J(a, u, p) && (d[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((p || !a._initted) && c - a._startTime <= 2e-10 || (d[f++] = a)));
                for (o = f; --o > -1;) if (a = d[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !Z(a, e)) continue;
                    a._enabled(!1, !1) && (s = !0)
                }
                return s
            },
            J = function(t, e, i) {
                for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                    if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * h > o - e ? h : (o += t.totalDuration() / t._timeScale / r) > e + h ? 0 : o - e - h
            };
        s._init = function() {
            var t, e, i, n, r, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !! s.immediateRender,
                c = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = F.to(this.target, 0, r), u) if (this._time > 0) this._startAt = null;
                else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
            else {
                0 !== this._time && (u = !1), i = {};
                for (n in s) W[n] && "autoCSS" !== n || (i[n] = s[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && s.lazy !== !1, i.immediateRender = u, this._startAt = F.to(this.target, 0, i), u) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, s.easeParams) : w[c] || F.defaultEase : F.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (o = this._targets.length, t = 0; o > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, n, r, o) {
            var s, a, l, u, c, h;
            if (null == e) return !1;
            D[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && q.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (s in this.vars) if (h = this.vars[s], W[s]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
            else if (q[s] && (u = new q[s])._onInitTween(e, this.vars[s], this, o)) {
                for (this._firstPT = c = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: s,
                    pg: 1,
                    pr: u._priority,
                    m: 0
                }, a = u._overwriteProps.length; --a > -1;) i[u._overwriteProps[a]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
            } else i[s] = j.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter, o);
            return r && this._kill(r, e) ? this._initProps(e, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), l)
        }, s.render = function(t, e, i) {
            var n, r, o, s, a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
            if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === h && "isPause" !== this.data) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : h);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : h)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                    d = this._easeType,
                    f = this._easePower;
                (1 === d || 3 === d && c >= .5) && (c = 1 - c), 3 === d && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), 1 === d ? this.ratio = 1 - c : 2 === d ? this.ratio = c : .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && s !== h && (this._rawPrevTime = 0))
            }
        }, s._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
            var n, r, o, s, a, l, u, c, h, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || E(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (o in u) a[o] && (h || (h = []), h.push(o));
                        if ((h || !t) && !Z(this, i, e, h)) return !1
                    }
                    for (o in u)(s = a[o]) && (d && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], $.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
        }, s._enabled = function(t, e) {
            if (l || a.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; --i > -1;) this._siblings[i] = G(n[i], this, !0);
                else this._siblings = G(this.target, this, !0)
            }
            return $.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, F.to = function(t, e, i) {
            return new F(t, e, i)
        }, F.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i)
        }, F.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new F(t, e, n)
        }, F.delayedCall = function(t, e, i, n, r) {
            return new F(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, F.set = function(t, e) {
            return new F(t, 0, e)
        }, F.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : F.selector(t) || t;
            var i, n, r, o;
            if ((p(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(F.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;) for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
            } else for (n = G(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, F.killTweensOf = F.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = F.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var tt = y("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
        }, !0);
        if (s = tt.prototype, tt.version = "1.19.0", tt.API = 2, s._firstPT = null, s._addTween = j, s.setRatio = M, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._mod = s._roundProps = function(t) {
                for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, F._onPluginEvent = function(t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : o = a, a = s
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, tt.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === tt.API && (q[(new t[e])._propName] = t[e]);
                return !0
            }, v.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    o = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    s = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        tt.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0),
                    a = s.prototype = new tt(i);
                a.constructor = s, s.API = t.API;
                for (e in o)"function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, tt.activate([s]), s
            }, r = t._gsQueue) {
            for (o = 0; o < r.length; o++) r[o]();
            for (s in m) m[s].func || t.console.log("GSAP encountered missing dependency: " + s)
        }
        l = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), !
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function() {
        var t = function() {};
        t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(n) {
            var o, s, a = "ScrollMagic.Controller",
                l = "FORWARD",
                u = "REVERSE",
                c = "PAUSED",
                h = i.defaults,
                d = this,
                f = r.extend({}, h, n),
                p = [],
                m = !1,
                g = 0,
                v = c,
                y = !0,
                _ = 0,
                b = !0,
                w = function() {
                    for (var t in f) h.hasOwnProperty(t) || delete f[t];
                    if (f.container = r.get.elements(f.container)[0], !f.container) throw a + " init failed.";
                    y = f.container === window || f.container === document.body || !document.body.contains(f.container), y && (f.container = window), _ = C(), f.container.addEventListener("resize", $), f.container.addEventListener("scroll", $), f.refreshInterval = parseInt(f.refreshInterval) || h.refreshInterval, x()
                },
                x = function() {
                    f.refreshInterval > 0 && (s = window.setTimeout(O, f.refreshInterval))
                },
                T = function() {
                    return f.vertical ? r.get.scrollTop(f.container) : r.get.scrollLeft(f.container)
                },
                C = function() {
                    return f.vertical ? r.get.height(f.container) : r.get.width(f.container)
                },
                k = this._setScrollPos = function(t) {
                    f.vertical ? y ? window.scrollTo(r.get.scrollLeft(), t) : f.container.scrollTop = t : y ? window.scrollTo(t, r.get.scrollTop()) : f.container.scrollLeft = t
                },
                S = function() {
                    if (b && m) {
                        var t = r.type.Array(m) ? m : p.slice(0);
                        m = !1;
                        var e = g;
                        g = d.scrollPos();
                        var i = g - e;
                        0 !== i && (v = i > 0 ? l : u), v === u && t.reverse(), t.forEach(function(t) {
                            t.update(!0)
                        })
                    }
                },
                P = function() {
                    o = r.rAF(S)
                },
                $ = function(t) {
                    "resize" == t.type && (_ = C(), v = c), m !== !0 && (m = !0, P())
                },
                O = function() {
                    if (!y && _ != C()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        f.container.dispatchEvent(t)
                    }
                    p.forEach(function(t) {
                        t.refresh()
                    }), x()
                };
            this._options = f;
            var A = function(t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function(e) {
                if (r.type.Array(e)) e.forEach(function(t) {
                    d.addScene(t)
                });
                else if (e instanceof t.Scene) if (e.controller() !== d) e.addTo(d);
                else if (p.indexOf(e) < 0) {
                    p.push(e), p = A(p), e.on("shift.controller_sort", function() {
                        p = A(p)
                    });
                    for (var i in f.globalSceneOptions) e[i] && e[i].call(e, f.globalSceneOptions[i])
                }
                return d
            }, this.removeScene = function(t) {
                if (r.type.Array(t)) t.forEach(function(t) {
                    d.removeScene(t)
                });
                else {
                    var e = p.indexOf(t);
                    e > -1 && (t.off("shift.controller_sort"), p.splice(e, 1), t.remove())
                }
                return d
            }, this.updateScene = function(e, i) {
                return r.type.Array(e) ? e.forEach(function(t) {
                    d.updateScene(t, i)
                }) : i ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = A(m), P()), d
            }, this.update = function(t) {
                return $({
                    type: "resize"
                }), t && S(), d
            }, this.scrollTo = function(i, n) {
                if (r.type.Number(i)) k.call(f.container, i, n);
                else if (i instanceof t.Scene) i.controller() === d && d.scrollTo(i.scrollOffset(), n);
                else if (r.type.Function(i)) k = i;
                else {
                    var o = r.get.elements(i)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(e);) o = o.parentNode;
                        var s = f.vertical ? "top" : "left",
                            a = r.get.offset(f.container),
                            l = r.get.offset(o);
                        y || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], n)
                    }
                }
                return d
            }, this.scrollPos = function(t) {
                return arguments.length ? (r.type.Function(t) && (T = t), d) : T.call(d)
            }, this.info = function(t) {
                var e = {
                    size: _,
                    vertical: f.vertical,
                    scrollPos: g,
                    scrollDirection: v,
                    container: f.container,
                    isDocument: y
                };
                return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
            }, this.loglevel = function() {
                return d
            }, this.enabled = function(t) {
                return arguments.length ? (b != t && (b = !! t, d.updateScene(p, !0)), d) : b
            }, this.destroy = function(t) {
                window.clearTimeout(s);
                for (var e = p.length; e--;) p[e].destroy(t);
                return f.container.removeEventListener("resize", $), f.container.removeEventListener("scroll", $), r.cAF(o), null
            }, w(), d
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, e) {
            i.defaults[t] = e
        }, t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
                return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(i) {
            var o, s, a = "BEFORE",
                l = "DURING",
                u = "AFTER",
                c = n.defaults,
                h = this,
                d = r.extend({}, c, i),
                f = a,
                p = 0,
                m = {
                    start: 0,
                    end: 0
                },
                g = 0,
                v = !0,
                y = function() {
                    for (var t in d) c.hasOwnProperty(t) || delete d[t];
                    for (var e in c) P(e);
                    k()
                },
                _ = {};
            this.on = function(t, e) {
                return r.type.Function(e) && (t = t.trim().split(" "), t.forEach(function(t) {
                    var i = t.split("."),
                        n = i[0],
                        r = i[1];
                    "*" != n && (_[n] || (_[n] = []), _[n].push({
                        namespace: r || "",
                        callback: e
                    }))
                })), h
            }, this.off = function(t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function(t) {
                    var i = t.split("."),
                        n = i[0],
                        r = i[1] || "",
                        o = "*" === n ? Object.keys(_) : [n];
                    o.forEach(function(t) {
                        for (var i = _[t] || [], n = i.length; n--;) {
                            var o = i[n];
                            !o || r !== o.namespace && "*" !== r || e && e != o.callback || i.splice(n, 1)
                        }
                        i.length || delete _[t]
                    })
                }), h) : h
            }, this.trigger = function(e, i) {
                if (e) {
                    var n = e.trim().split("."),
                        r = n[0],
                        o = n[1],
                        s = _[r];
                    s && s.forEach(function(e) {
                        o && o !== e.namespace || e.callback.call(h, new t.Event(r, e.namespace, h, i))
                    })
                }
                return h
            }, h.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? x() : "reverse" === t.what && h.update())
            }).on("shift.internal", function() {
                b(), h.update()
            }), this.addTo = function(e) {
                return e instanceof t.Controller && s != e && (s && s.removeScene(h), s = e, k(), w(!0), x(!0), b(), s.info("container").addEventListener("resize", T), e.addScene(h), h.trigger("add", {
                    controller: s
                }), h.update()), h
            }, this.enabled = function(t) {
                return arguments.length ? (v != t && (v = !! t, h.update(!0)), h) : v
            }, this.remove = function() {
                if (s) {
                    s.info("container").removeEventListener("resize", T);
                    var t = s;
                    s = void 0, t.removeScene(h), h.trigger("remove")
                }
                return h
            }, this.destroy = function(t) {
                return h.trigger("destroy", {
                    reset: t
                }), h.remove(), h.off("*.*"), null
            }, this.update = function(t) {
                if (s) if (t) if (s.enabled() && v) {
                    var e, i = s.info("scrollPos");
                    e = d.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, h.trigger("update", {
                        startPos: m.start,
                        endPos: m.end,
                        scrollPos: i
                    }), h.progress(e)
                } else $ && f === l && A(!0);
                else s.updateScene(h, !1);
                return h
            }, this.refresh = function() {
                return w(), x(), h
            }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        i = f,
                        n = s ? s.info("scrollDirection") : "PAUSED",
                        r = d.reverse || t >= p;
                    if (0 === d.duration ? (e = p != t, p = 1 > t && r ? 0 : 1, f = 0 === p ? a : l) : 0 > t && f !== a && r ? (p = 0, f = a, e = !0) : t >= 0 && 1 > t && r ? (p = t, f = l, e = !0) : t >= 1 && f !== u ? (p = 1, f = u, e = !0) : f !== l || r || A(), e) {
                        var o = {
                                progress: p,
                                state: f,
                                scrollDirection: n
                            },
                            c = f != i,
                            m = function(t) {
                                h.trigger(t, o)
                            };
                        c && i !== l && (m("enter"), m(i === a ? "start" : "end")), m("progress"), c && f !== l && (m(f === a ? "start" : "end"), m("leave"))
                    }
                    return h
                }
                return p
            };
            var b = function() {
                    m = {
                        start: g + d.offset
                    }, s && d.triggerElement && (m.start -= s.info("size") * d.triggerHook), m.end = m.start + d.duration
                },
                w = function(t) {
                    if (o) {
                        var e = "duration";
                        S(e, o.call(h)) && !t && (h.trigger("change", {
                            what: e,
                            newval: d[e]
                        }), h.trigger("shift", {
                            reason: e
                        }))
                    }
                },
                x = function(t) {
                    var i = 0,
                        n = d.triggerElement;
                    if (s && n) {
                        for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                        var u = r.get.offset(n);
                        o.isDocument || (a[l] -= s.scrollPos()), i = u[l] - a[l]
                    }
                    var c = i != g;
                    g = i, c && !t && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                T = function() {
                    d.triggerHook > 0 && h.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                C = r.extend(n.validate, {
                    duration: function(t) {
                        if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return s ? s.info("size") * e : 0
                            }
                        }
                        if (r.type.Function(t)) {
                            o = t;
                            try {
                                t = parseFloat(o())
                            } catch (i) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw o ? (o = void 0, 0) : 0;
                        return t
                    }
                }),
                k = function(t) {
                    t = arguments.length ? [t] : Object.keys(C), t.forEach(function(t) {
                        var e;
                        if (C[t]) try {
                            e = C[t](d[t])
                        } catch (i) {
                            e = c[t]
                        } finally {
                            d[t] = e
                        }
                    })
                },
                S = function(t, e) {
                    var i = !1,
                        n = d[t];
                    return d[t] != e && (d[t] = e, k(t), i = n != d[t]), i
                },
                P = function(t) {
                    h[t] || (h[t] = function(e) {
                        return arguments.length ? ("duration" === t && (o = void 0), S(t, e) && (h.trigger("change", {
                            what: t,
                            newval: d[t]
                        }), n.shifts.indexOf(t) > -1 && h.trigger("shift", {
                            reason: t
                        })), h) : d[t]
                    })
                };
            this.controller = function() {
                return s
            }, this.state = function() {
                return f
            }, this.scrollOffset = function() {
                return m.start
            }, this.triggerPosition = function() {
                var t = d.offset;
                return s && (t += d.triggerElement ? g : s.info("size") * h.triggerHook()), t
            };
            var $, O;
            h.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (f === u && e || f === l && 0 === d.duration) && A(), e && F()
            }).on("progress.internal", function() {
                A()
            }).on("add.internal", function() {
                F()
            }).on("destroy.internal", function(t) {
                h.removePin(t.reset)
            });
            var A = function(t) {
                    if ($ && s) {
                        var e = s.info(),
                            i = O.spacer.firstChild;
                        if (t || f !== l) {
                            var n = {
                                    position: O.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                o = r.css(i, "position") != n.position;
                            O.pushFollowers ? d.duration > 0 && (f === u && 0 === parseFloat(r.css(O.spacer, "padding-top")) ? o = !0 : f === a && 0 === parseFloat(r.css(O.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = d.duration * p, r.css(i, n), o && F()
                        } else {
                            "fixed" != r.css(i, "position") && (r.css(i, {
                                position: "fixed"
                            }), F());
                            var c = r.get.offset(O.spacer, !0),
                                h = d.reverse || 0 === d.duration ? e.scrollPos - m.start : Math.round(p * d.duration * 10) / 10;
                            c[e.vertical ? "top" : "left"] += h, r.css(O.spacer.firstChild, {
                                top: c.top,
                                left: c.left
                            })
                        }
                    }
                },
                F = function() {
                    if ($ && s && O.inFlow) {
                        var t = f === l,
                            e = s.info("vertical"),
                            i = O.spacer.firstChild,
                            n = r.isMarginCollapseType(r.css(O.spacer, "display")),
                            o = {};
                        O.relSize.width || O.relSize.autoFullWidth ? t ? r.css($, {
                            width: r.get.width(O.spacer)
                        }) : r.css($, {
                            width: "100%"
                        }) : (o["min-width"] = r.get.width(e ? $ : i, !0, !0), o.width = t ? o["min-width"] : "auto"), O.relSize.height ? t ? r.css($, {
                            height: r.get.height(O.spacer) - (O.pushFollowers ? d.duration : 0)
                        }) : r.css($, {
                            height: "100%"
                        }) : (o["min-height"] = r.get.height(e ? i : $, !0, !n), o.height = t ? o["min-height"] : "auto"), O.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = d.duration * p, o["padding" + (e ? "Bottom" : "Right")] = d.duration * (1 - p)), r.css(O.spacer, o)
                    }
                },
                E = function() {
                    s && $ && f === l && !s.info("isDocument") && A()
                },
                z = function() {
                    s && $ && f === l && ((O.relSize.width || O.relSize.autoFullWidth) && r.get.width(window) != r.get.width(O.spacer.parentNode) || O.relSize.height && r.get.height(window) != r.get.height(O.spacer.parentNode)) && F()
                },
                R = function(t) {
                    s && $ && f === l && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
            this.setPin = function(t, i) {
                var n = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = r.extend({}, n, i), t = r.get.elements(t)[0], !t) return h;
                if ("fixed" === r.css(t, "position")) return h;
                if ($) {
                    if ($ === t) return h;
                    h.removePin()
                }
                $ = t;
                var o = $.parentNode.style.display,
                    s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                $.parentNode.style.display = "none";
                var a = "absolute" != r.css($, "position"),
                    l = r.css($, s.concat(["display"])),
                    u = r.css($, ["width", "height"]);
                $.parentNode.style.display = o, !a && i.pushFollowers && (i.pushFollowers = !1);
                var c = $.parentNode.insertBefore(document.createElement("div"), $),
                    d = r.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || r.extend(d, r.css($, ["width", "height"])), r.css(c, d), c.setAttribute(e, ""), r.addClass(c, i.spacerClass), O = {
                        spacer: c,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !$.___origStyle) {
                    $.___origStyle = {};
                    var f = $.style,
                        p = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    p.forEach(function(t) {
                        $.___origStyle[t] = f[t] || ""
                    })
                }
                return O.relSize.width && r.css(c, {
                    width: u.width
                }), O.relSize.height && r.css(c, {
                    height: u.height
                }), c.appendChild($), r.css($, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (O.relSize.width || O.relSize.autoFullWidth) && r.css($, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", E), window.addEventListener("resize", E), window.addEventListener("resize", z), $.addEventListener("mousewheel", R), $.addEventListener("DOMMouseScroll", R), A(), h
            }, this.removePin = function(t) {
                if ($) {
                    if (f === l && A(!0), t || !s) {
                        var i = O.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var n = O.spacer.style,
                                o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, o.forEach(function(t) {
                                margins[t] = n[t] || ""
                            }), r.css(i, margins)
                        }
                        O.spacer.parentNode.insertBefore(i, O.spacer), O.spacer.parentNode.removeChild(O.spacer), $.parentNode.hasAttribute(e) || (r.css($, $.___origStyle), delete $.___origStyle)
                    }
                    window.removeEventListener("scroll", E), window.removeEventListener("resize", E), window.removeEventListener("resize", z), $.removeEventListener("mousewheel", R), $.removeEventListener("DOMMouseScroll", R), $ = void 0
                }
                return h
            };
            var D, L = [];
            return h.on("destroy.internal", function(t) {
                h.removeClassToggle(t.reset)
            }), this.setClassToggle = function(t, e) {
                var i = r.get.elements(t);
                return 0 !== i.length && r.type.String(e) ? (L.length > 0 && h.removeClassToggle(), D = e, L = i, h.on("enter.internal_class leave.internal_class", function(t) {
                    var e = "enter" === t.type ? r.addClass : r.removeClass;
                    L.forEach(function(t) {
                        e(t, D)
                    })
                }), h) : h
            }, this.removeClassToggle = function(t) {
                return t && L.forEach(function(t) {
                    r.removeClass(t, D)
                }), h.off("start.internal_class end.internal_class"), D = void 0, L = [], h
            }, y(), h
        };
        var n = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !r.type.Number(t)) throw 0;
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = r.get.elements(t)[0];
                        if (!e) throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, i, r) {
            t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, r && n.shifts.push(t))
        }, t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
                return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, i, n) {
            n = n || {};
            for (var r in n) this[r] = n[r];
            return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = t._util = function(t) {
            var e, i = {},
                n = function(t) {
                    return parseFloat(t) || 0
                },
                r = function(e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                o = function(e, i, o, s) {
                    if (i = i === document ? t : i, i === t) s = !1;
                    else if (!h.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (o && s) {
                        var l = r(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                },
                s = function(t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                };
            i.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function(t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                u = t.requestAnimationFrame,
                c = t.cancelAnimationFrame;
            for (e = 0; !u && e < l.length; ++e) u = t[l[e] + "RequestAnimationFrame"], c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            u || (u = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    r = t.setTimeout(function() {
                        e(i + n)
                    }, n);
                return a = i + n, r
            }), c || (c = function(e) {
                t.clearTimeout(e)
            }), i.rAF = u.bind(t), i.cAF = c.bind(t);
            var h = i.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            h.String = function(t) {
                return "string" === h(t)
            }, h.Function = function(t) {
                return "function" === h(t)
            }, h.Array = function(t) {
                return Array.isArray(t)
            }, h.Number = function(t) {
                return !h.Array(t) && t - parseFloat(t) + 1 >= 0
            }, h.DomElement = function(t) {
                return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var d = i.get = {};
            return d.elements = function(e) {
                var i = [];
                if (h.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (n) {
                    return i
                }
                if ("nodelist" === h(e) || h.Array(e)) for (var r = 0, o = i.length = e.length; o > r; r++) {
                    var s = e[r];
                    i[r] = h.DomElement(s) ? s : d.elements(s)
                } else(h.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, d.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, d.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, d.width = function(t, e, i) {
                return o("width", t, e, i)
            }, d.height = function(t, e, i) {
                return o("height", t, e, i)
            }, d.offset = function(t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var n = t.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, e || (i.top += d.scrollTop(), i.left += d.scrollLeft())
                }
                return i
            }, i.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, i.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(t, e) {
                if (h.String(e)) return r(t)[s(e)];
                if (h.Array(e)) {
                    var i = {},
                        n = r(t);
                    return e.forEach(function(t) {
                        i[t] = n[s(t)]
                    }), i
                }
                for (var o in e) {
                    var a = e[o];
                    a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
                }
            }, i
        }(window || {});
        return t
    }), !
    function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function(t, e, i) {
        t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }), t.Scene.extend(function() {
            var t, n = this;
            n.on("progress.plugin_gsap", function() {
                r()
            }), n.on("destroy.plugin_gsap", function(t) {
                n.removeTween(t.reset)
            });
            var r = function() {
                if (t) {
                    var e = n.progress(),
                        i = n.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            n.setTween = function(o, s, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = e.to(o, s, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(o) : o, l.pause()
                } catch (u) {
                    return n
                }
                return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n
            }, n.removeTween = function(e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
            }
        })
    }), PolygonFactory.prototype.init = function() {
    for (var t = 0; t < this.rowCount; t++) for (var e = 0; e < this.colCount; e++) {
        var i = this.width * t,
            n = this.height * e;
        e % 2 === 0 && (i += 130), e > 0 && (n += this.gutterY * e), t > 0 && (i += this.gutterX * t);
        var r = random(-30, 30),
            o = random(-30, 30),
            s = $('<div class="polygon"></div>');
        this.objects.push({
            top: n + o,
            left: i + r + this.startX + this.leftX,
            polygon: s[0]
        })
    }
    return this
}, PolygonFactory.prototype.update = function() {}, PolygonFactory.prototype.renderPolygon = function() {
    var t = this;
    return t.objects.forEach(function(e) {
        $(e.polygon).css({
            top: e.top,
            left: e.left
        }), t.container.append($(e.polygon))
    }), t
};
var getRandomNumber = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    },
    setDeviceWallScrollPosition = function(t, e) {
        var i = t.position().left,
            n = $(".device-wall").position().left,
            r = $(".device-wall-wrap").width(),
            o = r / 2 - t.width() / 2,
            s = i - n - o;
        e ? $(".device-wall").velocity("scroll", {
            axis: "x",
            offset: s,
            duration: 500,
            container: $(".device-wall-wrap")
        }) : $(".device-wall-wrap").scrollLeft(s)
    },
    animateHero = function() {
        $(".device-wall").addClass("is-animated"), $(".hero-copy").addClass("is-animated").delay(200).queue(function() {
            $(".device-wall li").each(function(t) {
                var e = $(this);
                setTimeout(function() {
                    e.addClass("is-animated")
                }, 150 * t)
            })
        })
    },
    replayAnimation = function() {
        $(".hero-copy").removeClass("is-animated"), $(".device-wall").removeClass("is-animated"), $(".device-wall li").each(function(t) {
            $(this).removeClass("is-animated")
        }), setTimeout(function() {
            animateHero()
        }, 1e3)
    },
    coinId = 0,
    heroCoinDropAnimation = function() {
        var t = $("<div class='hero-coin hero-coin-" + coinId + "'></div>");
        t.css({
            left: getRandomNumber(100, 1e3),
            backgroundColor: "HSL(" + getRandomNumber(170, 210) + ", 73%, " + getRandomNumber(50, 80) + "%)"
        }), $(".hero-bg--coin").append(t), $(".hero-coin-" + coinId).velocity({
            properties: {
                top: 400,
                left: "50%",
                opacity: 0,
                scale: .2,
                rotateX: getRandomNumber(-45, 90),
                rotateY: getRandomNumber(-90, 35),
                rotateZ: getRandomNumber(-10, 10)
            },
            options: {
                duration: 5e3,
                complete: function() {
                    t.remove()
                }
            }
        }), coinId += 1
    },
    uberTitleAnimation = function() {
        var t = $("#carousel-first").find(".hero-title-carousel-reveal");
        if (0 === t.length) {
            var e = $("#carousel-first li");
            e.removeClass("cubic-easeinout--fast"), e.addClass("hero-title-carousel-reveal").removeClass("hero-title-carousel-hide"), $(e[0]).removeClass("hero-title-carousel-reveal"), setTimeout(function() {
                e.addClass("cubic-easeinout--fast"), $(e[0]).addClass("hero-title-carousel-hide"), $(e[0]).next().removeClass("hero-title-carousel-reveal")
            }, 100)
        }
        var t = $(t[0]);
        t.prev().addClass("hero-title-carousel-hide"), t.removeClass("hero-title-carousel-reveal")
    },
    cubeAnimation = function() {
        $(".hero-bg--cube").find(".cube").removeClass("start")
    },
    countdownDropAnimation = function() {
        var t = $(".countdown-bg"),
            e = $("<div class='countdown-bg__piece countdown-bg__piece-" + coinId + "'></div>"),
            i = getRandomNumber(170, 210),
            n = getRandomNumber(65, 85),
            r = "hsl(" + i + ", 75%, " + n + "%)",
            o = "hsla(" + i + ", 73%, " + n + "%, 0.25)";
        e.css({
            left: getRandomNumber(100, t.width() - 100),
            backgroundColor: r,
            boxShadow: "0px 20px 50px " + o
        }), t.append(e), $(".countdown-bg__piece-" + coinId).velocity({
            properties: {
                top: t.height() - 150,
                left: "50%",
                opacity: [0, "easeInQuint"],
                scale: .6,
                rotateX: getRandomNumber(-5, 5),
                rotateY: getRandomNumber(-45, 45),
                rotateZ: getRandomNumber(-20, 20),
                boxShadowY: 20,
                boxShadowBlur: 20
            },
            options: {
                duration: 8e3,
                complete: function() {
                    e.remove()
                }
            }
        }), coinId += 1
    },
    screenSlide = function(t) {
        var e, i, n = t.element,
            r = t.slideWidth,
            o = t.currentIndex,
            s = r * o;
        i = "translate3d(-" + s + "px,0,0)", e = "all 0.35s ease-in", n.css({
            "-webkit-transform": i,
            transform: i,
            "-webkit-transition": e,
            transition: e
        })
    };
$("#balance-scene-menu").on("click", "a", function(t) {
    t.preventDefault();
    var e = $(this).attr("data-target"),
        i = $(".balance-scene-container .swiper-wrapper");
    $("#balance-scene-menu a").removeClass("active"), $(this).addClass("active"), $(".balance-scene-canvas .product-bg").removeClass("active"), $(".balance-scene-container .content").removeClass("active"), $(".balance-scene-canvas .product-bg").eq(e).addClass("active"), $(".balance-scene-container .content").eq(e).addClass("active");
    var n = $(".balance-scene-container .content").eq(e).height();
    $(".balance-scene-container .text-wrapper").css({
        height: n
    }), screenSlide({
        element: i,
        slideWidth: 280,
        currentIndex: e
    })
});
var humanReadableLangs = {
        php: "PHP",
        javascript: "Node.js"/*tpa=http://www.we7shop.com/Public/static/index/js/Node.js*/,
        go: "Go",
        json: "JSON",
        python: "Python",
        cs: "C#",
        objectivec: "Objective-C",
        ruby: "Ruby",
        java: "Java"
    },
    ignoredLangs = ["json", "xml", "html"],
    populateLanguageChannelSelector = function() {
        var t = [],
            e = [];
        $("code[class^='language-']").each(function() {
            t.push($(this).attr("class").toString().toLowerCase().slice(9))
        }), $(".code-filter").each(function() {
            var t = $(this).attr("class").toString().toLowerCase().split(" ")[1];
            e.push(t)
        }), t = _.difference(_.uniq(t), ignoredLangs), e = _.uniq(e), t.length > 1 ? (_.each(t, function(t) {
            $("#language-select").append($("<li><a onclick=\"filterByLanguage('" + t + "')\">" + humanReadableLangs[t] + "</a></li>"))
        }), $(".language-select-item > a").text(t[0]), $(".language-select-item").addClass("on"), filterByLanguage(t[0])) : $(".language-select-item").remove(), e.length > 1 ? (_.each(e, function(t) {
            $("#channel-select").append($("<li><a onclick=\"filterByChannel('" + t + "')\">" + t + "</a></li>"))
        }), $(".channel-select-item > a").text(e[0]), $(".channel-select-item").addClass("on"), filterByChannel(e[0])) : $(".channel-select-item").remove()
    },
    filterByLanguage = function(t) {
        var e = ignoredLangs.slice(0);
        e.push(t), $("code[class^='language-']").each(function() {
            var t = $(this).attr("class").split(" ")[0].toString().toLowerCase().slice(9);
            _.contains(e, t) ? $(this).removeClass("hide") : $(this).addClass("hide")
        }), $(".filter-by-language").each(function() {
            var t = $(this).attr("data-language");
            _.contains(e, t) ? $(this).removeClass("hide") : $(this).addClass("hide")
        }), $(".language-select-item > a").text(humanReadableLangs[t])
    },
    filterByChannel = function(t) {
        $(".code-filter").each(function() {
            var e = $(this).attr("class").toString().toLowerCase().split(" ")[1];
            e !== t ? $(this).addClass("hide") : $(this).removeClass("hide")
        }), $(".channel-select-item > a").text(t)
    },
    homepageTween = function() {
        var t = new ScrollMagic.Controller,
            e = TweenMax.to("#phone-1", 1, {
                className: "+=end"
            }),
            i = TweenMax.to("#phone-2", 1, {
                className: "+=end"
            }),
            n = TweenMax.to("#phone-shadow", 1, {
                className: "+=end"
            }),
            r = TweenMax.to("#phone-shadow .inner", 1, {
                className: "+=end"
            }),
            o = TweenMax.staggerFromTo(".iconwall-item", 2, {
                yPercent: -20,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                ease: Back.easeOut
            }, .15),
            s = TweenMax.staggerFromTo(".stick-label", 2, {
                yPercent: -20,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                ease: Back.easeOut
            }, 1),
            a = TweenMax.fromTo(".home-feature__bg.dashboard", 2, {
                xPercent: 20,
                opacity: 0
            }, {
                xPercent: 0,
                opacity: 1,
                ease: Power3.easeOut
            });
        new ScrollMagic.Scene({
            triggerElement: "#providers",
            duration: 800,
            offset: -100
        }).setTween(e).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#providers",
            duration: 800,
            offset: -100
        }).setTween(i).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#providers",
            duration: 500,
            offset: 150
        }).setTween(n).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#providers",
            duration: 500,
            offset: 150
        }).setTween(r).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#iconwall",
            duration: 700,
            offset: -200
        }).setTween(o).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#providers",
            duration: 500,
            offset: -50
        }).setTween(s).addTo(t), new ScrollMagic.Scene({
            triggerElement: "#dashboard",
            duration: 700,
            offset: -500
        }).setTween(a).addTo(t)
    },
    cmbIntroAnimate = function() {
        var t = new ScrollMagic.Controller;
        new ScrollMagic.Scene({
            triggerElement: "#advantage"
        }).setClassToggle("#device", "animated").addTo(t);
        var e = $("#cmbWalletPayReset"),
            i = $("#step1");
        e.click(function() {
            console.log("click"), $("#device").removeClass("animated")
        }), i.click(function() {
            console.log("start"), $("#device").addClass("animated")
        })
    },
    testimonialParallax = function() {
        var t = new ScrollMagic.Controller;
        $(".testimonial-card").each(function() {
            var e = this,
                i = $(this).find(".testimonial__fullbleed")[0],
                n = TweenMax.fromTo(i, 2, {
                    "background-position-y": "30%"
                }, {
                    "background-position-y": "70%"
                });
            new ScrollMagic.Scene({
                triggerElement: e,
                duration: 1.5 * $(window).height(),
                offset: .5 * -$(window).height()
            }).setTween(n).addTo(t)
        })
    },
    setStickyNavBar = function() {
        if ($(".top-bar-wrapper").hasClass("is-fixed")) {
            var t = new ScrollMagic.Controller,
                e = TweenMax.to(".top-bar-wrapper", 1, {
                    className: "+=fixed"
                });
            new ScrollMagic.Scene({
                triggerHook: .7,
                duration: 200,
                offset: 200
            }).setTween(e).addTo(t)
        }
    },
    setStickyforPositon = function() {
        function t(t) {
            s = e.scrollTop() + 42, s <= a ? ($("ul.team-nav li a").removeClass("active"), $("ul.team-nav li:eq(0) a").addClass("active")) : s > a && s <= l ? ($("ul.team-nav li a").removeClass("active"), $("ul.team-nav li:eq(1) a").addClass("active")) : s > l && s <= u ? ($("ul.team-nav li a").removeClass("active"), $("ul.team-nav li:eq(2) a").addClass("active")) : s > u && s <= c ? ($("ul.team-nav li a").removeClass("active"), $("ul.team-nav li:eq(3) a").addClass("active")) : s > c && ($("ul.team-nav li a").removeClass("active"), $("ul.team-nav li:eq(4) a").addClass("active"))
        }
        var e = $("#membersContainer"),
            i = $("#product").height(),
            n = $("#engineer").height(),
            r = $("#misc").height(),
            o = $("#operations").height(),
            s = ($("#marketing").height(), $("#team-members .team-nav"), 0),
            a = i,
            l = a + n,
            u = l + r,
            c = u + o;
        e.on("scroll", t)
    },
    setMobileNav = function() {
        $(".title-bar__toggle").click(function() {
            $("body").toggleClass("no-scrolling"), $(".mobile-nav").toggleClass("show"), $(".title-bar").toggleClass("title-bar--active")
        }), $(window).on("resize", function() {
            var t = $(window).width();
            t > 640 && ($(".mobile-nav").removeClass("show"), $(".ui-mask").removeClass("show"))
        })
    };
!
    function(t) {
        var e = "";
        t(".pricing-compare").hover(function() {
            e = "." + t(this).attr("class").split(" ").join("."), t(e).addClass("on")
        }, function() {
            t(e).removeClass("on"), e = ""
        }), t("span[data-description]").each(function(e, i) {
            0 == t(i).attr("data-description").length && t(i).removeAttr("data-description")
        })
    }(jQuery);
var products = [{
    id: "alipay001",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "App æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­è°ƒç”¨æ”¯ä»˜å®ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "ç‰¹æ®Šè¡Œä¸šé™¤å¤–",
    payment_cycle: "å®žæ—¶åˆ°è´¦",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šç‰¹æ®Šè¡Œä¸šé™¤å¤–"]
}, {
    id: "wechatpay001",
    provider_key: "wechat",
    provider: "å¾®ä¿¡",
    product: "App æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­è°ƒç”¨å¾®ä¿¡æ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€å¤‡æ¡ˆç½‘ç«™",
    price: "300",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "å®žæ—¶åˆ°å¾®ä¿¡å•†æˆ·å¹³å°ï¼Œæ»¡ 500 å…ƒæ—¶ï¼Œä»¥ T+1ï¼ˆè™šæ‹Ÿç±» T+3 / T+7 ï¼‰è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ã€‚",
    notes: ["è´¹çŽ‡ï¼šå®žç‰©ç±» 0.6%ï¼Œè™šæ‹Ÿç±» 1%"]
}, {
    id: "applepay",
    provider_key: "apple",
    provider: "Apple Pay",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­è°ƒç”¨ Apple Pay ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "2000+",
    price_note: "åŒæ—¶ç”³è¯·é“¶è”æ‰‹æœºæ”¯ä»˜æ¸ é“å¯å…è´¹ï¼Œå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†",
    application_days: "17",
    rates: "0.8",
    rates_note: "å…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šåŒæ—¶ç”³è¯·é“¶è”æ‰‹æœºæ”¯ä»˜æ¸ é“å¯å…è´¹ï¼Œå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†", "è´¹çŽ‡å¤‡æ³¨ï¼šå…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†"]
}, {
    id: "unionpay001",
    provider_key: "unionpay",
    provider: "é“¶è”",
    product: "æ‰‹æœºæ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­ä½¿ç”¨é“¶è”å¡ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "2000+",
    price_note: "åŒæ—¶ç”³è¯· Apple Pay å¯å…è´¹ï¼Œå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†",
    application_days: "17",
    rates: "0.8",
    rates_note: "å…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šåŒæ—¶ç”³è¯· Apple Pay å¯å…è´¹ï¼Œå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†", "è´¹çŽ‡å¤‡æ³¨ï¼šå…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†"]
}, {
    id: "cmbwallet001",
    provider_key: "cmb",
    provider: "ä¸€ç½‘é€š",
    product: "é“¶è¡Œå¡æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­ä½¿ç”¨ä¸€ç½‘é€šä»˜æ¬¾å¯å®žçŽ°è·¨è¡Œæ”¯ä»˜",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·"
}, {
    id: "qqpay001",
    provider_key: "qq",
    provider: "QQ é’±åŒ…",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­è°ƒç”¨ QQ é’±åŒ…ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "T+1 æˆ– T+7 è‡ªåŠ¨æ¸…ç®—è‡³ä½ çš„å¯¹å…¬è´¦æˆ·ã€‚",
    notes: ["è´¹çŽ‡ï¼šå®žç‰©ç±» 0.6%ï¼Œè™šæ‹Ÿç±» 2%"]
}, {
    id: "yeepay001",
    provider_key: "yeepay",
    provider: "æ˜“å®æ”¯ä»˜",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­æ— éœ€è·³å‡ºåº”ç”¨ï¼Œé€‰æ‹©æ˜“å®æ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "æŒ‰å•æ—¥é™é¢æ”¶å–ä¿è¯é‡‘",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼è¿›è¡Œæ¸…ç®—ï¼Œä»¥åˆåŒä¸ºå‡†",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šæŒ‰å•æ—¥å•å¡äº¤æ˜“é™é¢æ”¶å–ä¿è¯é‡‘ï¼Œä¸è¶³1ä¸‡æŒ‰1ä¸‡æ”¶å–"]
}, {
    id: "bfbpay002",
    provider_key: "baidu",
    provider: "ç™¾åº¦é’±åŒ…",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­æ— éœ€è·³å‡ºåº”ç”¨ï¼Œé€‰æ‹©ç™¾åº¦é’±åŒ…ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€å¤‡æ¡ˆç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "7",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ï¼Œç”³è¯·æ—¶å¯é€‰æ‹©æ‰‹åŠ¨æ¸…ç®—æˆ–è‡ªåŠ¨æ¸…ç®—"
}, {
    id: "jdpay001",
    provider_key: "jdpay",
    provider: "äº¬ä¸œæ”¯ä»˜",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­æ— éœ€è·³å‡ºåº”ç”¨ï¼Œé€‰æ‹©äº¬ä¸œæ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€å¤‡æ¡ˆç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.7",
    rates_note: "è‡ªè¡Œç”³è¯·ä»¥åè®®ä¸ºå‡†",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ï¼Œæˆ–æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼æ¸…ç®—",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šè‡ªè¡Œç”³è¯·,ä»¥åè®®ä¸ºå‡†"]
}, {
    id: "jdpay002",
    provider_key: "jdpay",
    provider: "äº¬ä¸œç™½æ¡",
    product: "",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­é€‰æ‹©äº¬ä¸œæ”¯ä»˜ä»˜æ¬¾æ—¶èƒ½ä½¿ç”¨ç™½æ¡ï¼Œä»˜æ¬¾å®Œæˆä½ å°†æ”¶åˆ°å…¨é¢è´§æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€è¿˜éœ€æä¾›å¹´äº¤æ˜“é‡è§„æ¨¡åŠæ³¨å†Œèµ„é‡‘",
    price: "0",
    price_note: "éœ€ç¼´çº³ä¸€å®šä¿è¯é‡‘å’Œé£Žé™©å¤‡ä»˜é‡‘",
    application_days: "15",
    rates: "1.5",
    rates_note: "",
    payment_cycle: "å…·ä½“ä»¥åè®®ä¸ºå‡†",
    notes: ['ä»·æ ¼å¤‡æ³¨ï¼š"éœ€ç¼´çº³ä¸€å®šä¿è¯é‡‘å’Œé£Žé™©å¤‡ä»˜é‡‘', "è´¹çŽ‡å¤‡æ³¨ï¼šè‡ªè¡Œç”³è¯·ä»¥åè®®ä¸ºå‡†"]
}, {
    id: "fqlpay001",
    provider_key: "fqlpay",
    provider: "åˆ†æœŸä¹",
    product: "App æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­é€‰æ‹©åˆ†æœŸä¹ä»˜æ¬¾ï¼ŒæŽˆä¿¡å®Œæˆä½ å°†æ”¶åˆ°å…¨é¢è´§æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0",
    rates_note: "",
    payment_cycle: "T+3 å…·ä½“ä»¥åè®®ä¸ºå‡†",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šå•†æˆ·æ— æ‰‹ç»­è´¹"]
}, {
    id: "mmdpay",
    provider_key: "mmdpay",
    provider: "ä¹ˆä¹ˆè´·åˆ†æœŸ",
    product: "App æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­é€‰æ‹©ä¹ˆä¹ˆè´·ä»˜æ¬¾ï¼ŒæŽˆä¿¡å®Œæˆä½ å°†æ”¶åˆ°å…¨é¢è´§æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0",
    rates_note: "",
    payment_cycle: "T+3 å…·ä½“ä»¥åè®®ä¸ºå‡†",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šå•†æˆ·æ— æ‰‹ç»­è´¹"]
}, {
    id: "qgbc",
    provider_key: "qgbc",
    provider: "é‡åŒ–æ´¾",
    product: "App æ”¯ä»˜",
    platform: "app",
    desc: "å®¢æˆ·åœ¨ä½ çš„ App ä¸­é€‰æ‹©é‡åŒ–æ´¾ä»˜æ¬¾ï¼ŒæŽˆä¿¡å®Œæˆä½ å°†æ”¶åˆ°å…¨é¢è´§æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0",
    rates_note: "",
    payment_cycle: "T+3 å…·ä½“ä»¥åè®®ä¸ºå‡†",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šå•†æˆ·æ— æ‰‹ç»­è´¹"]
}, {
    id: "alipay002",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "æ‰‹æœºç½‘ç«™æ”¯ä»˜",
    platform: "mobile-web",
    desc: "å®¢æˆ·åœ¨æ‰‹æœºæµè§ˆå™¨ä¸­æ‰“å¼€æ‰‹æœºç½‘é¡µï¼Œè°ƒç”¨æ”¯ä»˜å®æˆ–ç™»å½•æ”¯ä»˜å®å¸å·å®Œæˆä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "ç‰¹æ®Šè¡Œä¸šé™¤å¤–",
    payment_cycle: "å®žæ—¶åˆ°è´¦"
}, {
    id: "unionpay002",
    provider_key: "unionpay",
    provider: "é“¶è”",
    product: "æ‰‹æœºæ”¯ä»˜",
    platform: "mobile-web",
    desc: "å®¢æˆ·åœ¨æ‰‹æœºç½‘é¡µè°ƒç”¨é“¶è”æ”¯ä»˜æŽ§ä»¶ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "2000+",
    price_note: "å…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†",
    application_days: "17",
    rates: "0.8",
    rates_note: "å…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†", "è´¹çŽ‡å¤‡æ³¨ï¼šå…·ä½“è´¹çŽ‡ä»¥æ¸ é“åè®®ä¸ºå‡†"]
}, {
    id: "yeepay002",
    provider_key: "yeepay",
    provider: "æ˜“å®æ”¯ä»˜",
    product: "",
    platform: "mobile-web",
    desc: "å®¢æˆ·åœ¨æ‰‹æœºç½‘é¡µé€‰æ‹©æ˜“å®æ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼è¿›è¡Œæ¸…ç®—ï¼Œä»¥åˆåŒä¸ºå‡†ã€‚",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šæŒ‰å•æ—¥å•å¡äº¤æ˜“é™é¢æ”¶å–ä¿è¯é‡‘ï¼Œä¸è¶³1ä¸‡æŒ‰1ä¸‡æ”¶å–"]
}, {
    id: "bfbpay003",
    provider_key: "baidu",
    provider: "ç™¾åº¦é’±åŒ…",
    product: "",
    platform: "mobile-web",
    desc: "å®¢æˆ·åœ¨æ‰‹æœºç½‘é¡µé€‰æ‹©ç™¾åº¦é’±åŒ…ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "7",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ï¼Œç”³è¯·æ—¶å¯é€‰æ‹©æ‰‹åŠ¨æ¸…ç®—æˆ–è‡ªåŠ¨æ¸…ç®—"
}, {
    id: "jdpay003",
    provider_key: "jdpay",
    provider: "äº¬ä¸œæ”¯ä»˜",
    product: "",
    platform: "mobile-web",
    desc: "å®¢æˆ·åœ¨æ‰‹æœºç½‘é¡µé€‰æ‹©äº¬ä¸œæ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.7",
    rates_note: "",
    payment_cycle: "æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼è¿›è¡Œæ¸…ç®—ï¼Œä»¥åˆåŒä¸ºå‡†ã€‚"
}, {
    id: "alipay003",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "æ‰‹æœºç½‘ç«™æ”¯ä»˜",
    platform: "wechat",
    desc: "å¾®ä¿¡å…¬ä¼—å·ä¸­çš„å†…åµŒæµè§ˆå™¨å±è”½äº†æ”¯ä»˜å®ï¼Œéœ€å¼•å¯¼å®¢æˆ·é€‰æ‹©å…¶å®ƒæµè§ˆå™¨æ‰“å¼€æ‰‹æœºç½‘é¡µå®Œæˆä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "å®žæ—¶åˆ°è´¦",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šç‰¹æ®Šè¡Œä¸šé™¤å¤–"]
}, {
    id: "wechatpay003",
    provider_key: "wechat",
    provider: "å¾®ä¿¡",
    product: "å…¬ä¼—å·æ”¯ä»˜",
    platform: "wechat",
    desc: "å®¢æˆ·åœ¨å¾®ä¿¡å…¬ä¼—å·ä¸­æ‰“å¼€ç§»åŠ¨ç½‘é¡µï¼Œè°ƒç”¨å¾®ä¿¡æ”¯ä»˜ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€å¤‡æ¡ˆç½‘ç«™",
    price: "300",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "å®žæ—¶åˆ°å¾®ä¿¡å•†æˆ·å¹³å°ï¼Œæ»¡ 500 å…ƒæ—¶ï¼Œä»¥ T+1ï¼ˆè™šæ‹Ÿç±» T+3 / T+7 ï¼‰è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ã€‚",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šå®žç‰©ç±» 0.6%ï¼Œè™šæ‹Ÿç±» 1%"]
}, {
    id: "unionpay003",
    provider_key: "unionpay",
    provider: "é“¶è”",
    product: "æ‰‹æœºæ”¯ä»˜",
    platform: "wechat",
    desc: "å®¢æˆ·åœ¨å¾®ä¿¡å†…åµŒæµè§ˆå™¨ä¸­æ‰“å¼€ç§»åŠ¨ç½‘é¡µï¼Œè°ƒç”¨é“¶è”æ”¯ä»˜æŽ§ä»¶ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "2000+",
    price_note: "å…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†",
    application_days: "17",
    rates: "0.8",
    rates_note: "å…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†", "è´¹çŽ‡å¤‡æ³¨ï¼šå…·ä½“è´¹çŽ‡ä»¥æ¸ é“åè®®ä¸ºå‡†"]
}, {
    id: "yeepay003",
    provider_key: "yeepay",
    provider: "æ˜“å®æ”¯ä»˜",
    product: "",
    platform: "wechat",
    desc: "å®¢æˆ·åœ¨å¾®ä¿¡å†…åµŒæµè§ˆå™¨ä½¿ç”¨æ˜“å®æ”¯ä»˜å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "15",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼è¿›è¡Œæ¸…ç®—ï¼Œä»¥åˆåŒä¸ºå‡†ã€‚",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šæŒ‰å•æ—¥å•å¡äº¤æ˜“é™é¢æ”¶å–ä¿è¯é‡‘ï¼Œä¸è¶³1ä¸‡æŒ‰1ä¸‡æ”¶å–"]
}, {
    id: "bfbpay001",
    provider_key: "baidu",
    provider: "ç™¾åº¦é’±åŒ…",
    product: "",
    platform: "wechat",
    desc: "å®¢æˆ·åœ¨å¾®ä¿¡å†…åµŒæµè§ˆå™¨ä½¿ç”¨ç™¾åº¦é’±åŒ…å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "7",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ï¼Œç”³è¯·æ—¶å¯é€‰æ‹©æ‰‹åŠ¨æ¸…ç®—æˆ–è‡ªåŠ¨æ¸…ç®—"
}, {
    id: "jdpay004",
    provider_key: "jdpay",
    provider: "äº¬ä¸œæ”¯ä»˜",
    product: "",
    platform: "wechat",
    desc: "å®¢æˆ·åœ¨å¾®ä¿¡å†…åµŒæµè§ˆå™¨ä½¿ç”¨äº¬ä¸œæ”¯ä»˜å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.7",
    rates_note: "è‡ªè¡Œç”³è¯·ä»¥åè®®ä¸ºå‡†",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šè‡ªè¡Œç”³è¯·ï¼Œä»¥åè®®ä¸ºå‡†"]
}, {
    id: "alipay004",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "å½“é¢ä»˜",
    platform: "pc-web",
    desc: "å®¢æˆ·ä½¿ç”¨æ”¯ä»˜å®æ‰«æä½ çš„å•†å“äºŒç»´ç ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "ç‰¹æ®Šè¡Œä¸šé™¤å¤–",
    payment_cycle: "å®žæ—¶åˆ°è´¦",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šç‰¹æ®Šè¡Œä¸šé™¤å¤–"]
}, {
    id: "alipay005",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "ç”µè„‘ç½‘ç«™æ”¯ä»˜",
    platform: "pc-web",
    desc: "å®¢æˆ·åœ¨ PC ç½‘é¡µå¯ç™»å½•æ”¯ä»˜å®å¸å·å®Œæˆä»˜æ¬¾ï¼Œä¹Ÿå¯æ‰«ç ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "ç‰¹æ®Šè¡Œä¸šé™¤å¤–",
    payment_cycle: "å®žæ—¶åˆ°è´¦",
    notes: ["ä»Žç­¾çº¦æ—¥è‡³ 2017.6.30 æ—¥ä¼˜æƒ è´¹çŽ‡ä¸º 0.55%(ä¸åŒ…å«ç‰¹æ®Šè¡Œä¸š)"]
}, {
    id: "wechatpay004",
    provider_key: "wechat",
    provider: "å¾®ä¿¡",
    product: "å…¬ä¼—å·æ”¯ä»˜",
    platform: "pc-web",
    desc: "å®¢æˆ·ä½¿ç”¨å¾®ä¿¡æ‰«æä½ çš„å•†å“äºŒç»´ç ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "300",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "å®žæ—¶åˆ°å¾®ä¿¡å•†æˆ·å¹³å°ï¼Œæ»¡ 500 å…ƒæ—¶ï¼Œä»¥ T+1ï¼ˆè™šæ‹Ÿç±» T+3 / T+7 ï¼‰è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["è´¹çŽ‡ï¼šå®žç‰©ç±» 0.6%ï¼Œè™šæ‹Ÿç±» 1%"]
}, {
    id: "unionpay004",
    provider_key: "unionpay",
    provider: "é“¶è”",
    product: "ç½‘å…³æ”¯ä»˜",
    platform: "pc-web",
    desc: "ä¸ªäººå®¢æˆ·åœ¨ PC ç½‘é¡µä½¿ç”¨é“¶è”å¡å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "2000+",
    price_note: "",
    application_days: "17",
    rates: "0.8",
    rates_note: "å…·ä½“è´¹çŽ‡ä»¥ç­¾çº¦æ”¶å•è¡Œæ‰‹ç»­è´¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å•†æˆ·å¯¹å…¬è´¦æˆ·",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šå…·ä½“ä»¥æ”¶å•è¡Œä¸ºå‡†", "è´¹çŽ‡å¤‡æ³¨ï¼šå…·ä½“è´¹çŽ‡ä»¥æ¸ é“åè®®ä¸ºå‡†"]
}, {
    id: "unionpay005",
    provider_key: "unionpay",
    provider: "é“¶è”",
    product: "ä¼ä¸šç½‘é“¶æ”¯ä»˜",
    platform: "pc-web",
    desc: "ä¼ä¸šå®¢æˆ·åœ¨ PC ç½‘é¡µä½¿ç”¨é“¶è”å¡å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å·²å¤‡æ¡ˆä¸”å»ºè®¾å®Œæˆçš„æ— çº¿ç½‘ç«™",
    price: "20000",
    price_note: "",
    application_days: "17",
    rates: "-",
    rates_note: "å…·ä½“ä»¥æ¸ é“å®¡æ‰¹ä¸ºå‡†",
    payment_cycle: "T+1 è‡ªåŠ¨æ¸…ç®—è‡³å•†æˆ·å¯¹å…¬è´¦æˆ·",
    notes: ["è´¹çŽ‡ï¼šæ¯ç¬”æ”¶å–æ‰‹ç»­è´¹ 15-18 å…ƒä¸ç­‰", "è´¹çŽ‡å¤‡æ³¨:å…·ä½“ä»¥æ¸ é“å®¡æ‰¹ä¸ºå‡†"]
}, {
    id: "jdpay005",
    provider_key: "jdpay",
    provider: "äº¬ä¸œæ”¯ä»˜",
    product: "",
    platform: "pc-web",
    desc: "å®¢æˆ·åœ¨ PC ç½‘é¡µä½¿ç”¨äº¬ä¸œæ”¯ä»˜å‘ä½ ä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€å¤‡æ¡ˆç½‘ç«™",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.7",
    rates_note: "è‡ªè¡Œç”³è¯·ä»¥åè®®ä¸ºå‡†",
    payment_cycle: "T+1 æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·ï¼Œæˆ–æŒ‰ç”³è¯·æ—¶æ‰€é€‰æ–¹å¼æ¸…ç®—"
}, {
    id: "jdpay006",
    provider_key: "jdpay",
    provider: "äº¬ä¸œç™½æ¡",
    product: "",
    platform: "pc-web",
    desc: "å®¢æˆ·åœ¨ PC ç½‘é¡µä½¿ç”¨äº¬ä¸œæ”¯ä»˜å‘ä½ ä»˜æ¬¾æ—¶èƒ½ä½¿ç”¨ç™½æ¡ï¼Œä»˜æ¬¾å®Œæˆä½ å°†æ”¶åˆ°å…¨é¢è´§æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€App ä¿¡æ¯ã€è¿˜éœ€æä¾›å¹´äº¤æ˜“é‡è§„æ¨¡åŠæ³¨å†Œèµ„é‡‘",
    price: "-",
    price_note: "éœ€ç¼´çº³ä¸€å®šä¿è¯é‡‘å’Œé£Žé™©å¤‡ä»˜é‡‘",
    application_days: "15",
    rates: "1.5",
    rates_note: "",
    payment_cycle: "å…·ä½“ä»¥åè®®ä¸ºå‡†",
    notes: ["ä»·æ ¼å¤‡æ³¨ï¼šéœ€ç¼´çº³ä¸€å®šä¿è¯é‡‘å’Œé£Žé™©å¤‡ä»˜é‡‘"]
}, {
    id: "alipay006",
    provider_key: "alipay",
    provider: "æ”¯ä»˜å®",
    product: "å½“é¢ä»˜",
    platform: "qr",
    desc: "ä½ å¯ä»¥å‘å®¢æˆ·å±•ç¤ºæ¸ é“æ ¹æ®è®¢å•ç”Ÿæˆçš„äºŒç»´ç ï¼Œå®¢æˆ·ä½¿ç”¨æ”¯ä»˜å®æ‰«æè®¢å•äºŒç»´ç å®Œæˆä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯ã€å…¬å¸å®žæ™¯ç…§ç‰‡",
    price: "0",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "ç‰¹æ®Šè¡Œä¸šé™¤å¤–",
    payment_cycle: "å®žæ—¶åˆ°è´¦",
    notes: ["è´¹çŽ‡å¤‡æ³¨ï¼šç‰¹æ®Šè¡Œä¸šé™¤å¤–"]
}, {
    id: "wechatpay005",
    provider_key: "wechat",
    provider: "å¾®ä¿¡",
    product: "å…¬ä¼—å·æ”¯ä»˜",
    platform: "qr",
    desc: "ä½ å¯ä»¥å‘å®¢æˆ·å±•ç¤ºæ¸ é“æ ¹æ®è®¢å•ç”Ÿæˆçš„äºŒç»´ç ï¼Œå®¢æˆ·ä½¿ç”¨å¾®ä¿¡æ‰«æè®¢å•äºŒç»´ç å®Œæˆä»˜æ¬¾",
    application: "ä¼ä¸šäº”è¯",
    price: "300",
    price_note: "",
    application_days: "10",
    rates: "0.6",
    rates_note: "",
    payment_cycle: "å®žæ—¶åˆ°å¾®ä¿¡å•†æˆ·å¹³å°ï¼Œæ»¡ 500 å…ƒæ—¶ï¼Œä»¥ T+1ï¼ˆè™šæ‹Ÿç±» T+3 / T+7 ï¼‰è‡ªåŠ¨æ¸…ç®—è‡³å¯¹å…¬è´¦æˆ·",
    notes: ["è´¹çŽ‡ï¼šå®žç‰©ç±» 0.6%ï¼Œè™šæ‹Ÿç±» 1%"]
}];
DataSelector.prototype.filterData = function(t) {
    return "all" === t ? this.selectedData = this.data : this.selectedData = this.data.filter(function(e) {
        return e.platform.toLowerCase() === t
    }), this
}, DataSelector.prototype.render = function(t, e) {
    var i = "";
    return this.selectedData.length > 0 ? "overview" === e ? this.selectedData.forEach(function(t, e) {
        i += '<div class="products-grid-item ' + t.id + " " + t.platform + '" data-target="' + t.id + '"> <div class="products-card"><div class="row align-middle"> <div class="column shrink"> <div class="product-card__logo ' + t.provider_key + '"><span class="icon icon-' + t.provider_key + '"></span></div></div><div class="column"><div class="product-card__info"><h6>' + t.provider + "</h6><p>" + t.product + "</p></div></div></div></div></div>"
    }) : "detail" === e && this.selectedData.forEach(function(t, e) {
        i += '<div class="products-detail-grid-item" id="' + t.id + '"><h4>' + t.provider + " " + t.product + "</h4><h5>" + t.desc + '</h5><div class="row collapse">  <div class="column"><span class="large-digit">' + t.rates + '</span><span class="large-unit">%</span><span class="content">æ¸ é“è´¹çŽ‡</span></div><div class="column"><span class="large-unit">Â¥</span><span class="large-digit">' + t.price + '</span><span class="content">æ¸ é“ä»·æ ¼</span></div></div>  <ul class="accordion" data-accordion data-allow-all-closed="true" data-multi-expand="false"><li class="accordion-item" data-accordion-item><a href="#" class="accordion-title">ç”³è¯·èµ„è´¨å’Œèµ„æ–™</a><div class="accordion-content" data-tab-content><p>' + t.application + '</p></div></li><li class="accordion-item" data-accordion-item><a href="#" class="accordion-title">ç»“ç®—å‘¨æœŸ</a><div class="accordion-content" data-tab-content><p>' + t.payment_cycle + "</p></div></li>", "undefined" != typeof t.notes ? (i += '<li class="accordion-item" data-accordion-item><a href="#" class="accordion-title">å¤‡æ³¨</a><div class="accordion-content" data-tab-content><ul>', t.notes.forEach(function(t, e) {
            i += "<li>" + t + "</li>"
        }), i += "</ul></div></li></ul></div>") : i += "</ul></div>"
    }) : i = "<p>æ•°æ®ä¸å­˜åœ¨</p>", $(t).empty(), $(t).html(i), this
}, $(document).foundation();
var openProductsModal = function(t, e) {
        "undefined" == typeof t && (t = "all"), $("body").css({
            "overflow-y": "hidden"
        }), $(".gallery-modal").addClass("gallery-modal-open"), $("#channelFilters a." + t).trigger("click"), "undefined" != typeof e && $(".products-grid").find("." + e).click()
    },
    closeProductsModal = function() {
        $("body").css({
            "overflow-y": "auto"
        }), $(".gallery-modal").removeClass("gallery-modal-open")
    };
$(document).ready(function() {
    navigator.userAgent.match(/MicroMessenger/i) && $("body").prepend('<div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;"><img src="../../../../assets/img/wxshare.png"/*tpa=http://www.we7shop.com/assets/img/wxshare.png*/></div>'), setMobileNav(), $(window).width() > 760 && (homepageTween(), setStickyNavBar()), cmbIntroAnimate(), cubeAnimation(), slideScene(), setInterval(heroCoinDropAnimation, 500), setInterval(countdownDropAnimation, 1500), setInterval(uberTitleAnimation, 3e3), $(".countdown-timer").countdown("2016/04/20 18:00:00", function(t) {
        var e = 24 * t.offset.totalDays + t.offset.hours;
        $(this).find(".hours").text(e), $(this).find(".minutes").text(t.strftime("%M")), $(this).find(".seconds").text(t.strftime("%S"))
    });
    var t = document.location.pathname.split("/"),
        e = t[t.length - 1];
    if (e.indexOf("html") > 0 && (e = e.slice(0, -5)), "customers" === e) {
        testimonialParallax();
        var i = $(".testimonial-content--new");
        i.isotope({
            itemSelector: ".testimonial-card",
            layoutMode: "vertical",
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        }), $("#industryFilters").on("click", "a", function() {
            var t = $(this).attr("data-filter");
            $("#industryFilters a").removeClass("active"), $(this).addClass("active"), i.isotope({
                filter: t
            })
        }), $("#productFilters").on("click", "a", function() {
            var t = $(this).attr("data-filter");
            $("#productFilters a").removeClass("active"), $(this).addClass("active"), i.isotope({
                filter: t
            })
        }), $("#panel1-label").click(function() {
            $("#industryFilters a.all").trigger("click")
        }), $("#panel2-label").click(function() {
            $("#productFilters a.all").trigger("click")
        });
        var n = document.location.hash.slice(1).split("&"),
            r = n[0],
            o = n[1];
        "category" == r ? ($("#panel1-label").trigger("click"), $("#industryFilters a." + o).trigger("click")) : "product" == r && ($("#panel2-label").trigger("click"), $("#productFilters a." + o).trigger("click"))
    } else if ("about" == e) $(window).width() > 770 && setStickyforPositon();
    else if ("career" == e) {
        var s, a, l, u, c, h, d, f, p, m;
        !
            function() {
                var t = function(t) {
                    var e = t.pageX,
                        i = t.pageY,
                        n = e - c,
                        r = i - h;
                    n > p && (n = p), n > p && (r = p);
                    var o = -(.2 * n),
                        s = -(.2 * r),
                        a = o - d,
                        l = s - f;
                    d = o, f = s, a > 60 || l > 60 || window.requestAnimationFrame(function() {
                        $("#polygonContainer").css({
                            transform: "translate(" + o + "px," + s + "px)"
                        })
                    })
                };
                slideViewbox(), s = $(window).width(), a = Math.ceil(s / 300) + 2, l = {
                    container: $("#polygonContainer"),
                    rowCount: a
                }, u = new PolygonFactory(l), u.init().renderPolygon(), d = 0, f = 0, p = 1200, m = 2e3, $("#polygonContainer").on("mouseenter", function(t) {
                    c = t.pageX, h = t.pageY
                }), $("#polygonContainer").on("mousemove", function(e) {
                    t(e)
                }), $("#hero .hero-copy").on("mousemove", function(e) {
                    t(e)
                })
            }()
    } else if ("product" === e || "products" === e) {
        var g = new DataSelector;
        $("#channelFilters").on("click", "a", function() {
            var t = "translate3d(0,0,0)",
                e = "all 0.35s ease-in";
            $(".gallery-modal").scrollTop(0), $(".fixed-content-grid").removeClass("opened"), $(".gallery-content-pannel .products-grid").css({
                "-webkit-transform": t,
                transform: t,
                "-webkit-transition": e,
                transition: e
            });
            var i = $(this).attr("data-filter");
            $("#channelFilters a").removeClass("active"), $(this).addClass("active"), g.filterData(i).render(".gallery-content-pannel .products-grid", "overview").render(".gallery-content-pannel .fixed-content-grid", "detail")
        }), $(".gallery-modal .modal-icon--close").click(function() {
            closeProductsModal()
        }), $(".gallery-modal .modal-icon--back").click(function() {
            $(".gallery-modal .modal-icon--back").css({
                opacity: "0",
                zIndex: "-1"
            }), $(".gallery-modal .modal-icon--close").css({
                opacity: "1"
            });
            var t = "translate3d(0,0,0)",
                e = "all 0.35s ease-in";
            $(".fixed-content-grid").removeClass("opened"), $(".gallery-content-pannel .products-grid").css({
                "-webkit-transform": t,
                transform: t,
                "-webkit-transition": e,
                transition: e
            })
        }), $(".gallery-content-pannel .products-grid").on("click", ".products-grid-item", function() {
            var t = $(window).width(),
                e = 0;
            t < 768 ? (e = -t, $(".gallery-modal .modal-icon--close").css({
                opacity: "0"
            }), $(".gallery-modal .modal-icon--back").css({
                opacity: "1",
                zIndex: "99"
            })) : t >= 768 && t < 1024 ? e = -200 : t >= 1024 && t < 1200 ? e = -220 : t >= 1200 && (e = -250), $(this).siblings().removeClass("active"), $(this).addClass("active");
            var i = $(this).attr("data-target"),
                n = "translate3d(" + e + "px,0,0)",
                r = "all 0.5s ease-in-out";
            $(".gallery-content-pannel .products-grid").css({
                "-webkit-transform": n,
                transform: n,
                "-webkit-transition": r,
                transition: r
            }), $(".fixed-content-grid").foundation(), $(".fixed-content-grid").addClass("opened"), $(".products-detail-grid-item").removeClass("active"), $("#" + i).addClass("active")
        })
    } else if ("contact" === e) {
        var n = document.location.hash.slice(1);
        "sales" == n ? document.getElementById("to").getElementsByTagName("option")[1].selected = "selected" : "customized" == n && (document.getElementById("to").getElementsByTagName("option")[2].selected = "selected")
    }
    $(".targetLink").on("click", function(t) {
        t.preventDefault(), t.stopPropagation();
        var e = $(this).attr("href");
        $(e).velocity("scroll", {
            duration: 300,
            offset: -40,
            easing: "linear"
        })
    }), $(".docs-article-select-toggle").on("click", function(t) {
        $(".docs-article-select").toggleClass("on")
    }), populateLanguageChannelSelector(), $("#consult").on("click", function() {
        var t = window.innerWidth - document.body.scrollWidth;
        $("body").css("padding-right", t), $("body").css("overflow", "hidden"), $("#consultSlide").removeClass("down").addClass("on")
    }), $(".pro-close").on("click", function() {
        $("body").css("overflow", "visible"), $("body").css("padding-right", "0px"), $("#consultSlide").removeClass("on").addClass("down")
    }), Foundation.Abide.defaults.patterns.phone = /^[0-9]{11}$/, $(document).on("formvalid.zf.abide", function(t, e) {
        var i = e.serialize();
        $("#submit").hasClass("disabled") || ($("#submit").hide(), $("#submiting").fadeIn(), $.ajax({
            method: "POST",
            url: "https://dashboard.pingxx.com/auto/user/ajax_contact",
            data: i,
            dataType: "json"
        }).success(function() {
            $("#submit").removeClass("disabled"), $("#proCon").fadeOut(), $("#proSuccess").fadeIn()
        }).error(function() {
            $("#submiting").hide(), $("#submit").fadeIn().text("å‘é€å¤±è´¥")
        }))
    }).on("submit", function(t) {
        t.preventDefault()
    })
});