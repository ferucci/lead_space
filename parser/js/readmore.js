/*!
 *
 * Readmore.js jQuery plugin
 * Author: Pavel Kostritcyn
 * Author link: http://p0zitiv.ru/
 * License GNU GPL Version 3
 *
 */
!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
})(function (t) {
    "use strict";
    function e(t, e, i) {
        var o;
        return function () {
            var n = this,
                a = arguments,
                s = function () {
                    (o = null), i || t.apply(n, a);
                },
                r = i && !o;
            clearTimeout(o), (o = setTimeout(s, e)), r && t.apply(n, a);
        };
    }
    function i(t) {
        var e = ++h;
        return String(null == t ? "rmjs-" : t) + e;
    }
    function o(t) {
        var e = t.clone().css({ height: "auto", width: t.width(), maxHeight: "none", overflow: "hidden" }).insertAfter(t),
            i = e.outerHeight(),
            o = parseInt(
                e
                    .css({ maxHeight: "" })
                    .css("max-height")
                    .replace(/[^-\d\.]/g, ""),
                10
            ),
            n = t.data("defaultHeight");
        e.remove();
        var a = o || t.data("collapsedHeight") || n;
        t.data({ expandedHeight: i, maxHeight: o, collapsedHeight: a }).css({ maxHeight: "none" });
    }
    function n(t) {
        if (!d[t.selector]) {
            var e = " ";
            t.embedCSS && "" !== t.blockCSS && (e += t.selector + " + [data-readmore-toggle], " + t.selector + "[data-readmore]{" + t.blockCSS + "}"),
                (e += t.selector + "[data-readmore]{transition: height " + t.speed + "ms;overflow: hidden;}"),
                (function (t, e) {
                    var i = t.createElement("style");
                    (i.type = "text/css"), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(t.createTextNode(e)), t.getElementsByTagName("head")[0].appendChild(i);
                })(document, e),
                (d[t.selector] = !0);
        }
    }
    function a(e, i) {
        (this.element = e),
            (this.options = t.extend({}, r, i)),
            t(e).attr("collapsedHeight") ? (this.options.collapsedHeight = parseFloat(t(e).attr("collapsedHeight"))) : "",
            t(e).attr("moreLink") ? (this.options.moreLink = '<a href="#">' + t(e).attr("moreLink") + "</a>") : "",
            t(e).attr("lessLink") ? (this.options.lessLink = '<a href="#">' + t(e).attr("lessLink") + "</a>") : "",
            n(this.options),
            (this._defaults = r),
            (this._name = s),
            this.init(),
            window.addEventListener ? (window.addEventListener("load", c), window.addEventListener("resize", c)) : (window.attachEvent("load", c), window.attachEvent("resize", c));
    }
    var s = "readmore",
        r = {
            speed: 100,
            collapsedHeight: 200,
            heightMargin: 16,
            moreLink: '<a href="#">Показать полностью <i class="fa fa-angle-down" aria-hidden="true"></i></a>',
            lessLink: '<a href="#">Скрыть <i class="fa fa-angle-up" aria-hidden="true"></i></a>',
            embedCSS: !0,
            blockCSS: "display: block; width: 100%;",
            startOpen: !1,
            blockProcessed: function () {},
            beforeToggle: function () {},
            afterToggle: function () {},
        },
        d = {},
        h = 0,
        c = e(function () {
            t("[data-readmore]").each(function () {
                var e = t(this),
                    i = "true" === e.attr("aria-expanded");
                o(e), e.css({ height: e.data(i ? "expandedHeight" : "collapsedHeight") });
            });
        }, 100);
    (a.prototype = {
        init: function () {
            var e = t(this.element);
            e.data({ defaultHeight: this.options.collapsedHeight, heightMargin: this.options.heightMargin }), o(e);
            var n = e.data("collapsedHeight"),
                a = e.data("heightMargin");
            if (e.outerHeight(!0) <= n + a) return this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(e, !1), !0;
            var s = e.attr("id") || i(),
                r = this.options.startOpen ? this.options.lessLink : this.options.moreLink;
            e.attr({ "data-readmore": "", "aria-expanded": this.options.startOpen, id: s }),
                e.after(
                    t(r)
                        .on(
                            "click",
                            (function (t) {
                                return function (i) {
                                    t.toggle(this, e[0], i);
                                };
                            })(this)
                        )
                        .attr({ "data-readmore-toggle": s, "aria-controls": s })
                ),
            this.options.startOpen || e.css({ height: n }),
            this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(e, !0);
        },
        toggle: function (e, i, o) {
            o && o.preventDefault(), e || (e = t('[aria-controls="' + this.element.id + '"]')[0]), i || (i = this.element);
            var n = t(i),
                a = "",
                s = "",
                r = !1,
                d = n.data("collapsedHeight");
            n.height() <= d ? ((a = n.data("expandedHeight") + "px"), (s = "lessLink"), (r = !0)) : ((a = d), (s = "moreLink")),
            this.options.beforeToggle && "function" == typeof this.options.beforeToggle && this.options.beforeToggle(e, n, !r),
                n.css({ height: a }),
                n.on(
                    "transitionend",
                    (function (i) {
                        return function () {
                            i.options.afterToggle && "function" == typeof i.options.afterToggle && i.options.afterToggle(e, n, r), t(this).attr({ "aria-expanded": r }).off("transitionend");
                        };
                    })(this)
                ),
                t(e).replaceWith(
                    t(this.options[s])
                        .on(
                            "click",
                            (function (t) {
                                return function (e) {
                                    t.toggle(this, i, e);
                                };
                            })(this)
                        )
                        .attr({ "data-readmore-toggle": n.attr("id"), "aria-controls": n.attr("id") })
                );
        },
        destroy: function () {
            t(this.element).each(function () {
                var e = t(this);
                e.attr({ "data-readmore": null, "aria-expanded": null }).css({ maxHeight: "", height: "" }).next("[data-readmore-toggle]").remove(), e.removeData();
            });
        },
    }),
        (t.fn.readmore = function (e) {
            var i = arguments,
                o = this.selector;
            return (
                (e = e || {}),
                    "object" == typeof e
                        ? this.each(function (l) {
                            if (t.data(this, "plugin_" + s)) {
                                var i = t.data(this, "plugin_" + s);
                                i.destroy.apply(i);
                            }
                            (e.selector = o), t.data(this, "plugin_" + s, new a(this, e));
                        })
                        : "string" == typeof e && "_" !== e[0] && "init" !== e
                            ? this.each(function (l) {
                                var o = t.data(this, "plugin_" + s);
                                o instanceof a && "function" == typeof o[e] && o[e].apply(o, Array.prototype.slice.call(i, 1));
                            })
                            : void 0
            );
        });
});
