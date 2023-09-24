! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Waline = t() : e.Waline = t()
}(this, (function () {
  return (() => {
    var e = {
        948: function (e) {
          e.exports = function () {
            "use strict";
            var e = function (e, t) {
                return e(t = {
                  exports: {}
                }, t.exports), t.exports
              }((function (e) {
                var t = e.exports = function () {
                  return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm")
                };
                t.line = function () {
                  return /(?:^|\s)\/\/(.+?)$/gm
                }, t.block = function () {
                  return /\/\*([\S\s]*?)\*\//gm
                }
              })),
              t = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
            return function (n, r) {
              void 0 === r && (r = {});
              var o = r.colors;
              void 0 === o && (o = t);
              var i = 0,
                l = {},
                s = new RegExp("(" + /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source + "|" + /</.source + ")|(" + e().source + ")", "gmi");
              return n.replace(s, (function (e, t, n) {
                if (n) return function (e) {
                  return '<span style="color: slategray">' + e + "</span>"
                }(n);
                if ("<" === t) return "&lt;";
                var r;
                l[t] ? r = l[t] : (r = o[i], l[t] = r);
                var s = '<span style="color: #' + r + '">' + t + "</span>";
                return i = ++i % o.length, s
              }))
            }
          }()
        }, 917: function (e) {
          e.exports = function () {
            "use strict";

            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }

            function t(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r
            }

            function n(e, n) {
              var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (r) return (r = r.call(e)).next.bind(r);
              if (Array.isArray(e) || (r = function (e, n) {
                if (e) {
                  if ("string" == typeof e) return t(e, n);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
                }
              }(e)) || n && e && "number" == typeof e.length) {
                r && (e = r);
                var o = 0;
                return function () {
                  return o >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[o++]
                  }
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r = {
              exports: {}
            };

            function o() {
              return {
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
              }
            }
            r.exports = {
              defaults: {
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
              },
              getDefaults: o,
              changeDefaults: function (e) {
                r.exports.defaults = e
              }
            };
            var i = /[&<>"']/,
              l = /[&<>"']/g,
              s = /[<>"']|&(?!#?\w+;)/,
              u = /[<>"']|&(?!#?\w+;)/g,
              a = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
              },
              c = function (e) {
                return a[e]
              };
            var p = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

            function d(e) {
              return e.replace(p, (function (e, t) {
                return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
              }))
            }
            var h = /(^|[^\[])\^/g;
            var f = /[^\w:]/g,
              m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
            var g = {},
              v = /^[^:]+:\/*[^/]*$/,
              D = /^([^:]+:)[\s\S]*$/,
              y = /^([^:]+:\/*[^/]*)[\s\S]*$/;

            function b(e, t) {
              g[" " + e] || (v.test(e) ? g[" " + e] = e + "/" : g[" " + e] = w(e, "/", !0));
              var n = -1 === (e = g[" " + e]).indexOf(":");
              return "//" === t.substring(0, 2) ? n ? t : e.replace(D, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(y, "$1") + t : e + t
            }

            function w(e, t, n) {
              var r = e.length;
              if (0 === r) return "";
              for (var o = 0; o < r;) {
                var i = e.charAt(r - o - 1);
                if (i !== t || n) {
                  if (i === t || !n) break;
                  o++
                } else o++
              }
              return e.substr(0, r - o)
            }
            var C = function (e, t) {
                if (t) {
                  if (i.test(e)) return e.replace(l, c)
                } else if (s.test(e)) return e.replace(u, c);
                return e
              },
              k = d,
              x = function (e, t) {
                e = e.source || e, t = t || "";
                var n = {
                  replace: function (t, r) {
                    return r = (r = r.source || r).replace(h, "$1"), e = e.replace(t, r), n
                  }, getRegex: function () {
                    return new RegExp(e, t)
                  }
                };
                return n
              },
              E = function (e, t, n) {
                if (e) {
                  var r;
                  try {
                    r = decodeURIComponent(d(n)).replace(f, "").toLowerCase()
                  } catch (e) {
                    return null
                  }
                  if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                }
                t && !m.test(n) && (n = b(t, n));
                try {
                  n = encodeURI(n).replace(/%25/g, "%")
                } catch (e) {
                  return null
                }
                return n
              },
              A = {
                exec: function () {}
              },
              F = function (e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                  for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
              },
              _ = function (e, t) {
                var n = e.replace(/\|/g, (function (e, t, n) {
                    for (var r = !1, o = t; --o >= 0 && "\\" === n[o];) r = !r;
                    return r ? "|" : " |"
                  })).split(/ \|/),
                  r = 0;
                if (n[0].trim() || n.shift(), n[n.length - 1].trim() || n.pop(), n.length > t) n.splice(t);
                else
                  for (; n.length < t;) n.push("");
                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
              },
              B = w,
              S = function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, r = 0, o = 0; o < n; o++)
                  if ("\\" === e[o]) o++;
                  else if (e[o] === t[0]) r++;
                else if (e[o] === t[1] && --r < 0) return o;
                return -1
              },
              $ = function (e) {
                e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
              },
              z = function (e, t) {
                if (t < 1) return "";
                for (var n = ""; t > 1;) 1 & t && (n += e), t >>= 1, e += e;
                return n + e
              },
              L = r.exports.defaults,
              R = B,
              O = _,
              T = C,
              I = S;

            function j(e, t, n, r) {
              var o = t.href,
                i = t.title ? T(t.title) : null,
                l = e[1].replace(/\\([\[\]])/g, "$1");
              if ("!" !== e[0].charAt(0)) {
                r.state.inLink = !0;
                var s = {
                  type: "link",
                  raw: n,
                  href: o,
                  title: i,
                  text: l,
                  tokens: r.inlineTokens(l, [])
                };
                return r.state.inLink = !1, s
              }
              return {
                type: "image",
                raw: n,
                href: o,
                title: i,
                text: T(l)
              }
            }
            var M = function () {
                function e(e) {
                  this.options = e || L
                }
                var t = e.prototype;
                return t.space = function (e) {
                  var t = this.rules.block.newline.exec(e);
                  if (t) return t[0].length > 1 ? {
                    type: "space",
                    raw: t[0]
                  } : {
                    raw: "\n"
                  }
                }, t.code = function (e) {
                  var t = this.rules.block.code.exec(e);
                  if (t) {
                    var n = t[0].replace(/^ {1,4}/gm, "");
                    return {
                      type: "code",
                      raw: t[0],
                      codeBlockStyle: "indented",
                      text: this.options.pedantic ? n : R(n, "\n")
                    }
                  }
                }, t.fences = function (e) {
                  var t = this.rules.block.fences.exec(e);
                  if (t) {
                    var n = t[0],
                      r = function (e, t) {
                        var n = e.match(/^(\s+)(?:```)/);
                        if (null === n) return t;
                        var r = n[1];
                        return t.split("\n").map((function (e) {
                          var t = e.match(/^\s+/);
                          return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e
                        })).join("\n")
                      }(n, t[3] || "");
                    return {
                      type: "code",
                      raw: n,
                      lang: t[2] ? t[2].trim() : t[2],
                      text: r
                    }
                  }
                }, t.heading = function (e) {
                  var t = this.rules.block.heading.exec(e);
                  if (t) {
                    var n = t[2].trim();
                    if (/#$/.test(n)) {
                      var r = R(n, "#");
                      this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim())
                    }
                    var o = {
                      type: "heading",
                      raw: t[0],
                      depth: t[1].length,
                      text: n,
                      tokens: []
                    };
                    return this.lexer.inline(o.text, o.tokens), o
                  }
                }, t.hr = function (e) {
                  var t = this.rules.block.hr.exec(e);
                  if (t) return {
                    type: "hr",
                    raw: t[0]
                  }
                }, t.blockquote = function (e) {
                  var t = this.rules.block.blockquote.exec(e);
                  if (t) {
                    var n = t[0].replace(/^ *> ?/gm, "");
                    return {
                      type: "blockquote",
                      raw: t[0],
                      tokens: this.lexer.blockTokens(n, []),
                      text: n
                    }
                  }
                }, t.list = function (e) {
                  var t = this.rules.block.list.exec(e);
                  if (t) {
                    var n, r, o, i, l, s, u, a, c, p, d = t[1].trim(),
                      h = d.length > 1,
                      f = {
                        type: "list",
                        raw: "",
                        ordered: h,
                        start: h ? +d.slice(0, -1) : "",
                        loose: !1,
                        items: []
                      };
                    d = h ? "\\d{1,9}\\" + d.slice(-1) : "\\" + d, this.options.pedantic && (d = h ? d : "[*+-]");
                    for (var m = new RegExp("^( {0,3}" + d + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); e && !this.rules.block.hr.test(e) && (t = m.exec(e));) {
                      c = t[2].split("\n"), this.options.pedantic ? (i = 2, p = c[0].trimLeft()) : (i = t[2].search(/[^ ]/), i = t[1].length + (i > 4 ? 1 : i), p = c[0].slice(i - t[1].length)), s = !1, n = t[0], !c[0] && /^ *$/.test(c[1]) && (n = t[1] + c.slice(0, 2).join("\n") + "\n", f.loose = !0, c = []);
                      var g = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:[*+-]|\\d{1,9}[.)])");
                      for (l = 1; l < c.length; l++) {
                        if (a = c[l], this.options.pedantic && (a = a.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), g.test(a)) {
                          n = t[1] + c.slice(0, l).join("\n") + "\n";
                          break
                        }
                        if (s) {
                          if (!(a.search(/[^ ]/) >= i) && a.trim()) {
                            n = t[1] + c.slice(0, l).join("\n") + "\n";
                            break
                          }
                          p += "\n" + a.slice(i)
                        } else a.trim() || (s = !0), a.search(/[^ ]/) >= i ? p += "\n" + a.slice(i) : p += "\n" + a
                      }
                      f.loose || (u ? f.loose = !0 : /\n *\n *$/.test(n) && (u = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(p)) && (o = "[ ] " !== r[0], p = p.replace(/^\[[ xX]\] +/, "")), f.items.push({
                        type: "list_item",
                        raw: n,
                        task: !!r,
                        checked: o,
                        loose: !1,
                        text: p
                      }), f.raw += n, e = e.slice(n.length)
                    }
                    f.items[f.items.length - 1].raw = n.trimRight(), f.items[f.items.length - 1].text = p.trimRight(), f.raw = f.raw.trimRight();
                    var v = f.items.length;
                    for (l = 0; l < v; l++) this.lexer.state.top = !1, f.items[l].tokens = this.lexer.blockTokens(f.items[l].text, []), f.items[l].tokens.some((function (e) {
                      return "space" === e.type
                    })) && (f.loose = !0, f.items[l].loose = !0);
                    return f
                  }
                }, t.html = function (e) {
                  var t = this.rules.block.html.exec(e);
                  if (t) {
                    var n = {
                      type: "html",
                      raw: t[0],
                      pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                      text: t[0]
                    };
                    return this.options.sanitize && (n.type = "paragraph", n.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : T(t[0]), n.tokens = [], this.lexer.inline(n.text, n.tokens)), n
                  }
                }, t.def = function (e) {
                  var t = this.rules.block.def.exec(e);
                  if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), {
                    type: "def",
                    tag: t[1].toLowerCase().replace(/\s+/g, " "),
                    raw: t[0],
                    href: t[2],
                    title: t[3]
                  }
                }, t.table = function (e) {
                  var t = this.rules.block.table.exec(e);
                  if (t) {
                    var n = {
                      type: "table",
                      header: O(t[1]).map((function (e) {
                        return {
                          text: e
                        }
                      })),
                      align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      rows: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
                    };
                    if (n.header.length === n.align.length) {
                      n.raw = t[0];
                      var r, o, i, l, s = n.align.length;
                      for (r = 0; r < s; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                      for (s = n.rows.length, r = 0; r < s; r++) n.rows[r] = O(n.rows[r], n.header.length).map((function (e) {
                        return {
                          text: e
                        }
                      }));
                      for (s = n.header.length, o = 0; o < s; o++) n.header[o].tokens = [], this.lexer.inlineTokens(n.header[o].text, n.header[o].tokens);
                      for (s = n.rows.length, o = 0; o < s; o++)
                        for (l = n.rows[o], i = 0; i < l.length; i++) l[i].tokens = [], this.lexer.inlineTokens(l[i].text, l[i].tokens);
                      return n
                    }
                  }
                }, t.lheading = function (e) {
                  var t = this.rules.block.lheading.exec(e);
                  if (t) {
                    var n = {
                      type: "heading",
                      raw: t[0],
                      depth: "=" === t[2].charAt(0) ? 1 : 2,
                      text: t[1],
                      tokens: []
                    };
                    return this.lexer.inline(n.text, n.tokens), n
                  }
                }, t.paragraph = function (e) {
                  var t = this.rules.block.paragraph.exec(e);
                  if (t) {
                    var n = {
                      type: "paragraph",
                      raw: t[0],
                      text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
                      tokens: []
                    };
                    return this.lexer.inline(n.text, n.tokens), n
                  }
                }, t.text = function (e) {
                  var t = this.rules.block.text.exec(e);
                  if (t) {
                    var n = {
                      type: "text",
                      raw: t[0],
                      text: t[0],
                      tokens: []
                    };
                    return this.lexer.inline(n.text, n.tokens), n
                  }
                }, t.escape = function (e) {
                  var t = this.rules.inline.escape.exec(e);
                  if (t) return {
                    type: "escape",
                    raw: t[0],
                    text: T(t[1])
                  }
                }, t.tag = function (e) {
                  var t = this.rules.inline.tag.exec(e);
                  if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                    type: this.options.sanitize ? "text" : "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : T(t[0]) : t[0]
                  }
                }, t.link = function (e) {
                  var t = this.rules.inline.link.exec(e);
                  if (t) {
                    var n = t[2].trim();
                    if (!this.options.pedantic && /^</.test(n)) {
                      if (!/>$/.test(n)) return;
                      var r = R(n.slice(0, -1), "\\");
                      if ((n.length - r.length) % 2 == 0) return
                    } else {
                      var o = I(t[2], "()");
                      if (o > -1) {
                        var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + o;
                        t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, i).trim(), t[3] = ""
                      }
                    }
                    var l = t[2],
                      s = "";
                    if (this.options.pedantic) {
                      var u = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);
                      u && (l = u[1], s = u[3])
                    } else s = t[3] ? t[3].slice(1, -1) : "";
                    return l = l.trim(), /^</.test(l) && (l = this.options.pedantic && !/>$/.test(n) ? l.slice(1) : l.slice(1, -1)), j(t, {
                      href: l ? l.replace(this.rules.inline._escapes, "$1") : l,
                      title: s ? s.replace(this.rules.inline._escapes, "$1") : s
                    }, t[0], this.lexer)
                  }
                }, t.reflink = function (e, t) {
                  var n;
                  if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                    var r = (n[2] || n[1]).replace(/\s+/g, " ");
                    if (!(r = t[r.toLowerCase()]) || !r.href) {
                      var o = n[0].charAt(0);
                      return {
                        type: "text",
                        raw: o,
                        text: o
                      }
                    }
                    return j(n, r, n[0], this.lexer)
                  }
                }, t.emStrong = function (e, t, n) {
                  void 0 === n && (n = "");
                  var r = this.rules.inline.emStrong.lDelim.exec(e);
                  if (r && (!r[3] || !n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                    var o = r[1] || r[2] || "";
                    if (!o || o && ("" === n || this.rules.inline.punctuation.exec(n))) {
                      var i, l, s = r[0].length - 1,
                        u = s,
                        a = 0,
                        c = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); null != (r = c.exec(t));)
                        if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])
                          if (l = i.length, r[3] || r[4]) u += l;
                          else if (!((r[5] || r[6]) && s % 3) || (s + l) % 3) {
                        if (!((u -= l) > 0)) {
                          if (l = Math.min(l, l + u + a), Math.min(s, l) % 2) {
                            var p = e.slice(1, s + r.index + l);
                            return {
                              type: "em",
                              raw: e.slice(0, s + r.index + l + 1),
                              text: p,
                              tokens: this.lexer.inlineTokens(p, [])
                            }
                          }
                          var d = e.slice(2, s + r.index + l - 1);
                          return {
                            type: "strong",
                            raw: e.slice(0, s + r.index + l + 1),
                            text: d,
                            tokens: this.lexer.inlineTokens(d, [])
                          }
                        }
                      } else a += l
                    }
                  }
                }, t.codespan = function (e) {
                  var t = this.rules.inline.code.exec(e);
                  if (t) {
                    var n = t[2].replace(/\n/g, " "),
                      r = /[^ ]/.test(n),
                      o = /^ /.test(n) && / $/.test(n);
                    return r && o && (n = n.substring(1, n.length - 1)), n = T(n, !0), {
                      type: "codespan",
                      raw: t[0],
                      text: n
                    }
                  }
                }, t.br = function (e) {
                  var t = this.rules.inline.br.exec(e);
                  if (t) return {
                    type: "br",
                    raw: t[0]
                  }
                }, t.del = function (e) {
                  var t = this.rules.inline.del.exec(e);
                  if (t) return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2], [])
                  }
                }, t.autolink = function (e, t) {
                  var n, r, o = this.rules.inline.autolink.exec(e);
                  if (o) return r = "@" === o[2] ? "mailto:" + (n = T(this.options.mangle ? t(o[1]) : o[1])) : n = T(o[1]), {
                    type: "link",
                    raw: o[0],
                    text: n,
                    href: r,
                    tokens: [{
                      type: "text",
                      raw: n,
                      text: n
                    }]
                  }
                }, t.url = function (e, t) {
                  var n;
                  if (n = this.rules.inline.url.exec(e)) {
                    var r, o;
                    if ("@" === n[2]) o = "mailto:" + (r = T(this.options.mangle ? t(n[0]) : n[0]));
                    else {
                      var i;
                      do {
                        i = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0]
                      } while (i !== n[0]);
                      r = T(n[0]), o = "www." === n[1] ? "http://" + r : r
                    }
                    return {
                      type: "link",
                      raw: n[0],
                      text: r,
                      href: o,
                      tokens: [{
                        type: "text",
                        raw: r,
                        text: r
                      }]
                    }
                  }
                }, t.inlineText = function (e, t) {
                  var n, r = this.rules.inline.text.exec(e);
                  if (r) return n = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : T(r[0]) : r[0] : T(this.options.smartypants ? t(r[0]) : r[0]), {
                    type: "text",
                    raw: r[0],
                    text: n
                  }
                }, e
              }(),
              U = A,
              P = x,
              N = F,
              V = {
                newline: /^(?: *(?:\n|$))+/,
                code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
                html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                table: U,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
                text: /^[^\n]+/,
                _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
                _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
              };
            V.def = P(V.def).replace("label", V._label).replace("title", V._title).getRegex(), V.bullet = /(?:[*+-]|\d{1,9}[.)])/, V.listItemStart = P(/^( *)(bull) */).replace("bull", V.bullet).getRegex(), V.list = P(V.list).replace(/bull/g, V.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + V.def.source + ")").getRegex(), V._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", V._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, V.html = P(V.html, "i").replace("comment", V._comment).replace("tag", V._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), V.paragraph = P(V._paragraph).replace("hr", V.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", V._tag).getRegex(), V.blockquote = P(V.blockquote).replace("paragraph", V.paragraph).getRegex(), V.normal = N({}, V), V.gfm = N({}, V.normal, {
              table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }), V.gfm.table = P(V.gfm.table).replace("hr", V.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", V._tag).getRegex(), V.pedantic = N({}, V.normal, {
              html: P("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", V._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
              heading: /^(#{1,6})(.*)(?:\n+|$)/,
              fences: U,
              paragraph: P(V.normal._paragraph).replace("hr", V.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", V.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            });
            var q = {
              escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
              autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
              url: U,
              tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
              link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
              reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
              nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
              reflinkSearch: "reflink|nolink(?!\\()",
              emStrong: {
                lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
                rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
              },
              code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
              br: /^( {2,}|\\)\n(?!\s*$)/,
              del: U,
              text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
              punctuation: /^([\spunctuation])/,
              _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
            };
            q.punctuation = P(q.punctuation).replace(/punctuation/g, q._punctuation).getRegex(), q.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, q.escapedEmSt = /\\\*|\\_/g, q._comment = P(V._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), q.emStrong.lDelim = P(q.emStrong.lDelim).replace(/punct/g, q._punctuation).getRegex(), q.emStrong.rDelimAst = P(q.emStrong.rDelimAst, "g").replace(/punct/g, q._punctuation).getRegex(), q.emStrong.rDelimUnd = P(q.emStrong.rDelimUnd, "g").replace(/punct/g, q._punctuation).getRegex(), q._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, q._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, q._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, q.autolink = P(q.autolink).replace("scheme", q._scheme).replace("email", q._email).getRegex(), q._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, q.tag = P(q.tag).replace("comment", q._comment).replace("attribute", q._attribute).getRegex(), q._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, q._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, q._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, q.link = P(q.link).replace("label", q._label).replace("href", q._href).replace("title", q._title).getRegex(), q.reflink = P(q.reflink).replace("label", q._label).getRegex(), q.reflinkSearch = P(q.reflinkSearch, "g").replace("reflink", q.reflink).replace("nolink", q.nolink).getRegex(), q.normal = N({}, q), q.pedantic = N({}, q.normal, {
              strong: {
                start: /^__|\*\*/,
                middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                endAst: /\*\*(?!\*)/g,
                endUnd: /__(?!_)/g
              },
              em: {
                start: /^_|\*/,
                middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                endAst: /\*(?!\*)/g,
                endUnd: /_(?!_)/g
              },
              link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", q._label).getRegex(),
              reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q._label).getRegex()
            }), q.gfm = N({}, q.normal, {
              escape: P(q.escape).replace("])", "~|])").getRegex(),
              _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
              url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
              text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            }), q.gfm.url = P(q.gfm.url, "i").replace("email", q.gfm._extended_email).getRegex(), q.breaks = N({}, q.gfm, {
              br: P(q.br).replace("{2,}", "*").getRegex(),
              text: P(q.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            });
            var H = {
                block: V,
                inline: q
              },
              W = M,
              Z = r.exports.defaults,
              J = H.block,
              K = H.inline,
              Q = z;

            function Y(e) {
              return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
            }

            function X(e) {
              var t, n, r = "",
                o = e.length;
              for (t = 0; t < o; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
              return r
            }
            var G = function () {
                function t(e) {
                  this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Z, this.options.tokenizer = this.options.tokenizer || new W, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                    inLink: !1,
                    inRawBlock: !1,
                    top: !0
                  };
                  var t = {
                    block: J.normal,
                    inline: K.normal
                  };
                  this.options.pedantic ? (t.block = J.pedantic, t.inline = K.pedantic) : this.options.gfm && (t.block = J.gfm, this.options.breaks ? t.inline = K.breaks : t.inline = K.gfm), this.tokenizer.rules = t
                }
                t.lex = function (e, n) {
                  return new t(n).lex(e)
                }, t.lexInline = function (e, n) {
                  return new t(n).inlineTokens(e)
                };
                var n, r, o, i = t.prototype;
                return i.lex = function (e) {
                  var t;
                  for (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) this.inlineTokens(t.src, t.tokens);
                  return this.tokens
                }, i.blockTokens = function (e, t) {
                  var n, r, o, i, l = this;
                  for (void 0 === t && (t = []), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
                    if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((function (r) {
                      return !!(n = r.call({
                        lexer: l
                      }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)
                    }))))
                      if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.type && t.push(n);
                      else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), !(r = t[t.length - 1]) || "paragraph" !== r.type && "text" !== r.type ? t.push(n) : (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
                  else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), !(r = t[t.length - 1]) || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                    href: n.href,
                    title: n.title
                  }) : (r.raw += "\n" + n.raw, r.text += "\n" + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
                  else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (o = e, this.options.extensions && this.options.extensions.startBlock && function () {
                    var t = 1 / 0,
                      n = e.slice(1),
                      r = void 0;
                    l.options.extensions.startBlock.forEach((function (e) {
                      "number" == typeof (r = e.call({
                        lexer: this
                      }, n)) && r >= 0 && (t = Math.min(t, r))
                    })), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
                  }(), this.state.top && (n = this.tokenizer.paragraph(o))) r = t[t.length - 1], i && "paragraph" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), i = o.length !== e.length, e = e.substring(n.raw.length);
                  else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
                  else if (e) {
                    var s = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                      console.error(s);
                      break
                    }
                    throw new Error(s)
                  }
                  return this.state.top = !0, t
                }, i.inline = function (e, t) {
                  this.inlineQueue.push({
                    src: e,
                    tokens: t
                  })
                }, i.inlineTokens = function (e, t) {
                  var n, r, o, i = this;
                  void 0 === t && (t = []);
                  var l, s, u, a = e;
                  if (this.tokens.links) {
                    var c = Object.keys(this.tokens.links);
                    if (c.length > 0)
                      for (; null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(a));) c.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, l.index) + "[" + Q("a", l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                  }
                  for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(a));) a = a.slice(0, l.index) + "[" + Q("a", l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                  for (; null != (l = this.tokenizer.rules.inline.escapedEmSt.exec(a));) a = a.slice(0, l.index) + "++" + a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                  for (; e;)
                    if (s || (u = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((function (r) {
                      return !!(n = r.call({
                        lexer: i
                      }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)
                    }))))
                      if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
                      else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                  else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                  else if (n = this.tokenizer.emStrong(e, a, u)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
                  else if (n = this.tokenizer.autolink(e, X)) e = e.substring(n.raw.length), t.push(n);
                  else if (this.state.inLink || !(n = this.tokenizer.url(e, X))) {
                    if (o = e, this.options.extensions && this.options.extensions.startInline && function () {
                      var t = 1 / 0,
                        n = e.slice(1),
                        r = void 0;
                      i.options.extensions.startInline.forEach((function (e) {
                        "number" == typeof (r = e.call({
                          lexer: this
                        }, n)) && r >= 0 && (t = Math.min(t, r))
                      })), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
                    }(), n = this.tokenizer.inlineText(o, Y)) e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (u = n.raw.slice(-1)), s = !0, (r = t[t.length - 1]) && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                    else if (e) {
                      var p = "Infinite loop on byte: " + e.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(p);
                        break
                      }
                      throw new Error(p)
                    }
                  } else e = e.substring(n.raw.length), t.push(n);
                  return t
                }, n = t, o = [{
                  key: "rules",
                  get: function () {
                    return {
                      block: J,
                      inline: K
                    }
                  }
                }], (r = null) && e(n.prototype, r), o && e(n, o), t
              }(),
              ee = r.exports.defaults,
              te = E,
              ne = C,
              re = function () {
                function e(e) {
                  this.options = e || ee
                }
                var t = e.prototype;
                return t.code = function (e, t, n) {
                  var r = (t || "").match(/\S*/)[0];
                  if (this.options.highlight) {
                    var o = this.options.highlight(e, r);
                    null != o && o !== e && (n = !0, e = o)
                  }
                  return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + ne(r, !0) + '">' + (n ? e : ne(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : ne(e, !0)) + "</code></pre>\n"
                }, t.blockquote = function (e) {
                  return "<blockquote>\n" + e + "</blockquote>\n"
                }, t.html = function (e) {
                  return e
                }, t.heading = function (e, t, n, r) {
                  return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                }, t.hr = function () {
                  return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, t.list = function (e, t, n) {
                  var r = t ? "ol" : "ul";
                  return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }, t.listitem = function (e) {
                  return "<li>" + e + "</li>\n"
                }, t.checkbox = function (e) {
                  return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }, t.paragraph = function (e) {
                  return "<p>" + e + "</p>\n"
                }, t.table = function (e, t) {
                  return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                }, t.tablerow = function (e) {
                  return "<tr>\n" + e + "</tr>\n"
                }, t.tablecell = function (e, t) {
                  var n = t.header ? "th" : "td";
                  return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, t.strong = function (e) {
                  return "<strong>" + e + "</strong>"
                }, t.em = function (e) {
                  return "<em>" + e + "</em>"
                }, t.codespan = function (e) {
                  return "<code>" + e + "</code>"
                }, t.br = function () {
                  return this.options.xhtml ? "<br/>" : "<br>"
                }, t.del = function (e) {
                  return "<del>" + e + "</del>"
                }, t.link = function (e, t, n) {
                  if (null === (e = te(this.options.sanitize, this.options.baseUrl, e))) return n;
                  var r = '<a href="' + ne(e) + '"';
                  return t && (r += ' title="' + t + '"'), r + ">" + n + "</a>"
                }, t.image = function (e, t, n) {
                  if (null === (e = te(this.options.sanitize, this.options.baseUrl, e))) return n;
                  var r = '<img src="' + e + '" alt="' + n + '"';
                  return t && (r += ' title="' + t + '"'), r + (this.options.xhtml ? "/>" : ">")
                }, t.text = function (e) {
                  return e
                }, e
              }(),
              oe = function () {
                function e() {}
                var t = e.prototype;
                return t.strong = function (e) {
                  return e
                }, t.em = function (e) {
                  return e
                }, t.codespan = function (e) {
                  return e
                }, t.del = function (e) {
                  return e
                }, t.html = function (e) {
                  return e
                }, t.text = function (e) {
                  return e
                }, t.link = function (e, t, n) {
                  return "" + n
                }, t.image = function (e, t, n) {
                  return "" + n
                }, t.br = function () {
                  return ""
                }, e
              }(),
              ie = function () {
                function e() {
                  this.seen = {}
                }
                var t = e.prototype;
                return t.serialize = function (e) {
                  return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
                }, t.getNextSafeSlug = function (e, t) {
                  var n = e,
                    r = 0;
                  if (this.seen.hasOwnProperty(n)) {
                    r = this.seen[e];
                    do {
                      n = e + "-" + ++r
                    } while (this.seen.hasOwnProperty(n))
                  }
                  return t || (this.seen[e] = r, this.seen[n] = 0), n
                }, t.slug = function (e, t) {
                  void 0 === t && (t = {});
                  var n = this.serialize(e);
                  return this.getNextSafeSlug(n, t.dryrun)
                }, e
              }(),
              le = re,
              se = oe,
              ue = ie,
              ae = r.exports.defaults,
              ce = k,
              pe = function () {
                function e(e) {
                  this.options = e || ae, this.options.renderer = this.options.renderer || new le, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new se, this.slugger = new ue
                }
                e.parse = function (t, n) {
                  return new e(n).parse(t)
                }, e.parseInline = function (t, n) {
                  return new e(n).parseInline(t)
                };
                var t = e.prototype;
                return t.parse = function (e, t) {
                  void 0 === t && (t = !0);
                  var n, r, o, i, l, s, u, a, c, p, d, h, f, m, g, v, D, y, b, w = "",
                    C = e.length;
                  for (n = 0; n < C; n++)
                    if (p = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type]) || !1 === (b = this.options.extensions.renderers[p.type].call({
                      parser: this
                    }, p)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p.type)) switch (p.type) {
                    case "space":
                      continue;
                    case "hr":
                      w += this.renderer.hr();
                      continue;
                    case "heading":
                      w += this.renderer.heading(this.parseInline(p.tokens), p.depth, ce(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
                      continue;
                    case "code":
                      w += this.renderer.code(p.text, p.lang, p.escaped);
                      continue;
                    case "table":
                      for (a = "", u = "", i = p.header.length, r = 0; r < i; r++) u += this.renderer.tablecell(this.parseInline(p.header[r].tokens), {
                        header: !0,
                        align: p.align[r]
                      });
                      for (a += this.renderer.tablerow(u), c = "", i = p.rows.length, r = 0; r < i; r++) {
                        for (u = "", l = (s = p.rows[r]).length, o = 0; o < l; o++) u += this.renderer.tablecell(this.parseInline(s[o].tokens), {
                          header: !1,
                          align: p.align[o]
                        });
                        c += this.renderer.tablerow(u)
                      }
                      w += this.renderer.table(a, c);
                      continue;
                    case "blockquote":
                      c = this.parse(p.tokens), w += this.renderer.blockquote(c);
                      continue;
                    case "list":
                      for (d = p.ordered, h = p.start, f = p.loose, i = p.items.length, c = "", r = 0; r < i; r++) v = (g = p.items[r]).checked, D = g.task, m = "", g.task && (y = this.renderer.checkbox(v), f ? g.tokens.length > 0 && "paragraph" === g.tokens[0].type ? (g.tokens[0].text = y + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = y + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                        type: "text",
                        text: y
                      }) : m += y), m += this.parse(g.tokens, f), c += this.renderer.listitem(m, D, v);
                      w += this.renderer.list(c, d, h);
                      continue;
                    case "html":
                      w += this.renderer.html(p.text);
                      continue;
                    case "paragraph":
                      w += this.renderer.paragraph(this.parseInline(p.tokens));
                      continue;
                    case "text":
                      for (c = p.tokens ? this.parseInline(p.tokens) : p.text; n + 1 < C && "text" === e[n + 1].type;) c += "\n" + ((p = e[++n]).tokens ? this.parseInline(p.tokens) : p.text);
                      w += t ? this.renderer.paragraph(c) : c;
                      continue;
                    default:
                      var k = 'Token with "' + p.type + '" type was not found.';
                      if (this.options.silent) return void console.error(k);
                      throw new Error(k)
                    } else w += b || "";
                  return w
                }, t.parseInline = function (e, t) {
                  t = t || this.renderer;
                  var n, r, o, i = "",
                    l = e.length;
                  for (n = 0; n < l; n++)
                    if (r = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) || !1 === (o = this.options.extensions.renderers[r.type].call({
                      parser: this
                    }, r)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) switch (r.type) {
                    case "escape":
                      i += t.text(r.text);
                      break;
                    case "html":
                      i += t.html(r.text);
                      break;
                    case "link":
                      i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                      break;
                    case "image":
                      i += t.image(r.href, r.title, r.text);
                      break;
                    case "strong":
                      i += t.strong(this.parseInline(r.tokens, t));
                      break;
                    case "em":
                      i += t.em(this.parseInline(r.tokens, t));
                      break;
                    case "codespan":
                      i += t.codespan(r.text);
                      break;
                    case "br":
                      i += t.br();
                      break;
                    case "del":
                      i += t.del(this.parseInline(r.tokens, t));
                      break;
                    case "text":
                      i += t.text(r.text);
                      break;
                    default:
                      var s = 'Token with "' + r.type + '" type was not found.';
                      if (this.options.silent) return void console.error(s);
                      throw new Error(s)
                    } else i += o || "";
                  return i
                }, e
              }(),
              de = G,
              he = pe,
              fe = M,
              me = re,
              ge = oe,
              ve = ie,
              De = F,
              ye = $,
              be = C,
              we = r.exports.getDefaults,
              Ce = r.exports.changeDefaults,
              ke = r.exports.defaults;

            function xe(e, t, n) {
              if (null == e) throw new Error("marked(): input parameter is undefined or null");
              if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
              if ("function" == typeof t && (n = t, t = null), t = De({}, xe.defaults, t || {}), ye(t), n) {
                var r, o = t.highlight;
                try {
                  r = de.lex(e, t)
                } catch (e) {
                  return n(e)
                }
                var i = function (e) {
                  var i;
                  if (!e) try {
                    t.walkTokens && xe.walkTokens(r, t.walkTokens), i = he.parse(r, t)
                  } catch (t) {
                    e = t
                  }
                  return t.highlight = o, e ? n(e) : n(null, i)
                };
                if (!o || o.length < 3) return i();
                if (delete t.highlight, !r.length) return i();
                var l = 0;
                return xe.walkTokens(r, (function (e) {
                  "code" === e.type && (l++, setTimeout((function () {
                    o(e.text, e.lang, (function (t, n) {
                      if (t) return i(t);
                      null != n && n !== e.text && (e.text = n, e.escaped = !0), 0 == --l && i()
                    }))
                  }), 0))
                })), void(0 === l && i())
              }
              try {
                var s = de.lex(e, t);
                return t.walkTokens && xe.walkTokens(s, t.walkTokens), he.parse(s, t)
              } catch (e) {
                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + be(e.message + "", !0) + "</pre>";
                throw e
              }
            }
            return xe.options = xe.setOptions = function (e) {
              return De(xe.defaults, e), Ce(xe.defaults), xe
            }, xe.getDefaults = we, xe.defaults = ke, xe.use = function () {
              for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              var o, i = De.apply(void 0, [{}].concat(n)),
                l = xe.defaults.extensions || {
                  renderers: {},
                  childTokens: {}
                };
              n.forEach((function (t) {
                if (t.extensions && (o = !0, t.extensions.forEach((function (e) {
                  if (!e.name) throw new Error("extension name required");
                  if (e.renderer) {
                    var t = l.renderers ? l.renderers[e.name] : null;
                    l.renderers[e.name] = t ? function () {
                      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                      var i = e.renderer.apply(this, r);
                      return !1 === i && (i = t.apply(this, r)), i
                    } : e.renderer
                  }
                  if (e.tokenizer) {
                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                    l[e.level] ? l[e.level].unshift(e.tokenizer) : l[e.level] = [e.tokenizer], e.start && ("block" === e.level ? l.startBlock ? l.startBlock.push(e.start) : l.startBlock = [e.start] : "inline" === e.level && (l.startInline ? l.startInline.push(e.start) : l.startInline = [e.start]))
                  }
                  e.childTokens && (l.childTokens[e.name] = e.childTokens)
                }))), t.renderer && function () {
                  var e = xe.defaults.renderer || new me,
                    n = function (n) {
                      var r = e[n];
                      e[n] = function () {
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        var s = t.renderer[n].apply(e, i);
                        return !1 === s && (s = r.apply(e, i)), s
                      }
                    };
                  for (var r in t.renderer) n(r);
                  i.renderer = e
                }(), t.tokenizer && function () {
                  var e = xe.defaults.tokenizer || new fe,
                    n = function (n) {
                      var r = e[n];
                      e[n] = function () {
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        var s = t.tokenizer[n].apply(e, i);
                        return !1 === s && (s = r.apply(e, i)), s
                      }
                    };
                  for (var r in t.tokenizer) n(r);
                  i.tokenizer = e
                }(), t.walkTokens) {
                  var n = xe.defaults.walkTokens;
                  i.walkTokens = function (r) {
                    t.walkTokens.call(e, r), n && n(r)
                  }
                }
                o && (i.extensions = l), xe.setOptions(i)
              }))
            }, xe.walkTokens = function (e, t) {
              for (var r, o = function () {
                var e = r.value;
                switch (t(e), e.type) {
                case "table":
                  for (var o, i = n(e.header); !(o = i()).done;) {
                    var l = o.value;
                    xe.walkTokens(l.tokens, t)
                  }
                  for (var s, u = n(e.rows); !(s = u()).done;)
                    for (var a, c = n(s.value); !(a = c()).done;) {
                      var p = a.value;
                      xe.walkTokens(p.tokens, t)
                    }
                  break;
                case "list":
                  xe.walkTokens(e.items, t);
                  break;
                default:
                  xe.defaults.extensions && xe.defaults.extensions.childTokens && xe.defaults.extensions.childTokens[e.type] ? xe.defaults.extensions.childTokens[e.type].forEach((function (n) {
                    xe.walkTokens(e[n], t)
                  })) : e.tokens && xe.walkTokens(e.tokens, t)
                }
              }, i = n(e); !(r = i()).done;) o()
            }, xe.parseInline = function (e, t) {
              if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
              if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
              t = De({}, xe.defaults, t || {}), ye(t);
              try {
                var n = de.lexInline(e, t);
                return t.walkTokens && xe.walkTokens(n, t.walkTokens), he.parseInline(n, t)
              } catch (e) {
                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + be(e.message + "", !0) + "</pre>";
                throw e
              }
            }, xe.Parser = he, xe.parser = he.parse, xe.Renderer = me, xe.TextRenderer = ge, xe.Lexer = de, xe.lexer = de.lex, xe.Tokenizer = fe, xe.Slugger = ve, xe.parse = xe, xe
          }()
        }
      },
      t = {};

    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = t[r] = {
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, {
        a: t
      }), t
    }, n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }, n.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var r = {};
    return (() => {
      "use strict";

      function e(e, t) {
        const n = Object.create(null),
          r = e.split(",");
        for (let e = 0; e < r.length; e++) n[r[e]] = !0;
        return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
      }
      n.d(r, {
        default: () => bs
      });
      const t = () => {},
        o = Object.assign,
        i = Object.prototype.hasOwnProperty,
        l = (e, t) => i.call(e, t),
        s = Array.isArray,
        u = e => "[object Map]" === d(e),
        a = e => "symbol" == typeof e,
        c = e => null !== e && "object" == typeof e,
        p = Object.prototype.toString,
        d = e => p.call(e),
        h = e => "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
        f = e => {
          const t = Object.create(null);
          return n => t[n] || (t[n] = e(n))
        },
        m = /-(\w)/g,
        g = (f((e => e.replace(m, ((e, t) => t ? t.toUpperCase() : "")))), /\B([A-Z])/g),
        v = (f((e => e.replace(g, "-$1").toLowerCase())), f((e => e.charAt(0).toUpperCase() + e.slice(1)))),
        D = (f((e => e ? `on${v(e)}` : "")), (e, t) => !Object.is(e, t));
      let y;
      const b = [];
      class w {
        constructor(e = !1) {
          this.active = !0, this.effects = [], this.cleanups = [], !e && y && (this.parent = y, this.index = (y.scopes || (y.scopes = [])).push(this) - 1)
        }
        run(e) {
          if (this.active) try {
            return this.on(), e()
          } finally {
            this.off()
          }
        }
        on() {
          this.active && (b.push(this), y = this)
        }
        off() {
          this.active && (b.pop(), y = b[b.length - 1])
        }
        stop(e) {
          if (this.active) {
            if (this.effects.forEach((e => e.stop())), this.cleanups.forEach((e => e())), this.scopes && this.scopes.forEach((e => e.stop(!0))), this.parent && !e) {
              const e = this.parent.scopes.pop();
              e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
            }
            this.active = !1
          }
        }
      }
      const C = e => {
          const t = new Set(e);
          return t.w = 0, t.n = 0, t
        },
        k = e => (e.w & F) > 0,
        x = e => (e.n & F) > 0,
        E = new WeakMap;
      let A = 0,
        F = 1;
      const _ = [];
      let B;
      const S = Symbol(""),
        $ = Symbol("");
      class z {
        constructor(e, t = null, n) {
          this.fn = e, this.scheduler = t, this.active = !0, this.deps = [],
            function (e, t) {
              (t = t || y) && t.active && t.effects.push(e)
            }(this, n)
        }
        run() {
          if (!this.active) return this.fn();
          if (!_.includes(this)) try {
            return _.push(B = this), O.push(R), R = !0, F = 1 << ++A, A <= 30 ? (({
              deps: e
            }) => {
              if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= F
            })(this) : L(this), this.fn()
          } finally {
            A <= 30 && (e => {
              const {
                deps: t
              } = e;
              if (t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                  const o = t[r];
                  k(o) && !x(o) ? o.delete(e) : t[n++] = o, o.w &= ~F, o.n &= ~F
                }
                t.length = n
              }
            })(this), F = 1 << --A, I(), _.pop();
            const e = _.length;
            B = e > 0 ? _[e - 1] : void 0
          }
        }
        stop() {
          this.active && (L(this), this.onStop && this.onStop(), this.active = !1)
        }
      }

      function L(e) {
        const {
          deps: t
        } = e;
        if (t.length) {
          for (let n = 0; n < t.length; n++) t[n].delete(e);
          t.length = 0
        }
      }
      let R = !0;
      const O = [];

      function T() {
        O.push(R), R = !1
      }

      function I() {
        const e = O.pop();
        R = void 0 === e || e
      }

      function j(e, t, n) {
        if (!M()) return;
        let r = E.get(e);
        r || E.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = C()), U(o)
      }

      function M() {
        return R && void 0 !== B
      }

      function U(e, t) {
        let n = !1;
        A <= 30 ? x(e) || (e.n |= F, n = !k(e)) : n = !e.has(B), n && (e.add(B), B.deps.push(e))
      }

      function P(e, t, n, r, o, i) {
        const l = E.get(e);
        if (!l) return;
        let a = [];
        if ("clear" === t) a = [...l.values()];
        else if ("length" === n && s(e)) l.forEach(((e, t) => {
          ("length" === t || t >= r) && a.push(e)
        }));
        else switch (void 0 !== n && a.push(l.get(n)), t) {
        case "add":
          s(e) ? h(n) && a.push(l.get("length")) : (a.push(l.get(S)), u(e) && a.push(l.get($)));
          break;
        case "delete":
          s(e) || (a.push(l.get(S)), u(e) && a.push(l.get($)));
          break;
        case "set":
          u(e) && a.push(l.get(S))
        }
        if (1 === a.length) a[0] && N(a[0]);
        else {
          const e = [];
          for (const t of a) t && e.push(...t);
          N(C(e))
        }
      }

      function N(e, t) {
        for (const t of s(e) ? e : [...e])(t !== B || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
      }
      const V = e("__proto__,__v_isRef,__isVue"),
        q = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter(a)),
        H = Q(),
        W = Q(!1, !0),
        Z = Q(!0),
        J = K();

      function K() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
          e[t] = function (...e) {
            const n = ze(this);
            for (let e = 0, t = this.length; e < t; e++) j(n, 0, e + "");
            const r = n[t](...e);
            return -1 === r || !1 === r ? n[t](...e.map(ze)) : r
          }
        })), ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
          e[t] = function (...e) {
            T();
            const n = ze(this)[t].apply(this, e);
            return I(), n
          }
        })), e
      }

      function Q(e = !1, t = !1) {
        return function (n, r, o) {
          if ("__v_isReactive" === r) return !e;
          if ("__v_isReadonly" === r) return e;
          if ("__v_raw" === r && o === (e ? t ? Ee : xe : t ? ke : Ce).get(n)) return n;
          const i = s(n);
          if (!e && i && l(J, r)) return Reflect.get(J, r, o);
          const u = Reflect.get(n, r, o);
          return (a(r) ? q.has(r) : V(r)) ? u : (e || j(n, 0, r), t ? u : je(u) ? i && h(r) ? u : u.value : c(u) ? e ? Fe(u) : Ae(u) : u)
        }
      }

      function Y(e = !1) {
        return function (t, n, r, o) {
          let i = t[n];
          if (!e && (r = ze(r), i = ze(i), !s(t) && je(i) && !je(r))) return i.value = r, !0;
          const u = s(t) && h(n) ? Number(n) < t.length : l(t, n),
            a = Reflect.set(t, n, r, o);
          return t === ze(o) && (u ? D(r, i) && P(t, "set", n, r) : P(t, "add", n, r)), a
        }
      }
      const X = {
          get: H,
          set: Y(),
          deleteProperty: function (e, t) {
            const n = l(e, t),
              r = (e[t], Reflect.deleteProperty(e, t));
            return r && n && P(e, "delete", t, void 0), r
          }, has: function (e, t) {
            const n = Reflect.has(e, t);
            return a(t) && q.has(t) || j(e, 0, t), n
          }, ownKeys: function (e) {
            return j(e, 0, s(e) ? "length" : S), Reflect.ownKeys(e)
          }
        },
        G = {
          get: Z,
          set: (e, t) => !0,
          deleteProperty: (e, t) => !0
        },
        ee = o({}, X, {
          get: W,
          set: Y(!0)
        }),
        te = e => e,
        ne = e => Reflect.getPrototypeOf(e);

      function re(e, t, n = !1, r = !1) {
        const o = ze(e = e.__v_raw),
          i = ze(t);
        t !== i && !n && j(o, 0, t), !n && j(o, 0, i);
        const {
          has: l
        } = ne(o), s = r ? te : n ? Oe : Re;
        return l.call(o, t) ? s(e.get(t)) : l.call(o, i) ? s(e.get(i)) : void(e !== o && e.get(t))
      }

      function oe(e, t = !1) {
        const n = this.__v_raw,
          r = ze(n),
          o = ze(e);
        return e !== o && !t && j(r, 0, e), !t && j(r, 0, o), e === o ? n.has(e) : n.has(e) || n.has(o)
      }

      function ie(e, t = !1) {
        return e = e.__v_raw, !t && j(ze(e), 0, S), Reflect.get(e, "size", e)
      }

      function le(e) {
        e = ze(e);
        const t = ze(this);
        return ne(t).has.call(t, e) || (t.add(e), P(t, "add", e, e)), this
      }

      function se(e, t) {
        t = ze(t);
        const n = ze(this),
          {
            has: r,
            get: o
          } = ne(n);
        let i = r.call(n, e);
        i || (e = ze(e), i = r.call(n, e));
        const l = o.call(n, e);
        return n.set(e, t), i ? D(t, l) && P(n, "set", e, t) : P(n, "add", e, t), this
      }

      function ue(e) {
        const t = ze(this),
          {
            has: n,
            get: r
          } = ne(t);
        let o = n.call(t, e);
        o || (e = ze(e), o = n.call(t, e)), r && r.call(t, e);
        const i = t.delete(e);
        return o && P(t, "delete", e, void 0), i
      }

      function ae() {
        const e = ze(this),
          t = 0 !== e.size,
          n = e.clear();
        return t && P(e, "clear", void 0, void 0), n
      }

      function ce(e, t) {
        return function (n, r) {
          const o = this,
            i = o.__v_raw,
            l = ze(i),
            s = t ? te : e ? Oe : Re;
          return !e && j(l, 0, S), i.forEach(((e, t) => n.call(r, s(e), s(t), o)))
        }
      }

      function pe(e, t, n) {
        return function (...r) {
          const o = this.__v_raw,
            i = ze(o),
            l = u(i),
            s = "entries" === e || e === Symbol.iterator && l,
            a = "keys" === e && l,
            c = o[e](...r),
            p = n ? te : t ? Oe : Re;
          return !t && j(i, 0, a ? $ : S), {
            next() {
              const {
                value: e,
                done: t
              } = c.next();
              return t ? {
                value: e,
                done: t
              } : {
                value: s ? [p(e[0]), p(e[1])] : p(e),
                done: t
              }
            }, [Symbol.iterator]() {
              return this
            }
          }
        }
      }

      function de(e) {
        return function (...t) {
          return "delete" !== e && this
        }
      }

      function he() {
        const e = {
            get(e) {
              return re(this, e)
            }, get size() {
              return ie(this)
            }, has: oe, add: le, set: se, delete: ue, clear: ae, forEach: ce(!1, !1)
          },
          t = {
            get(e) {
              return re(this, e, !1, !0)
            }, get size() {
              return ie(this)
            }, has: oe, add: le, set: se, delete: ue, clear: ae, forEach: ce(!1, !0)
          },
          n = {
            get(e) {
              return re(this, e, !0)
            }, get size() {
              return ie(this, !0)
            }, has(e) {
              return oe.call(this, e, !0)
            }, add: de("add"), set: de("set"), delete: de("delete"), clear: de("clear"), forEach: ce(!0, !1)
          },
          r = {
            get(e) {
              return re(this, e, !0, !0)
            }, get size() {
              return ie(this, !0)
            }, has(e) {
              return oe.call(this, e, !0)
            }, add: de("add"), set: de("set"), delete: de("delete"), clear: de("clear"), forEach: ce(!0, !0)
          };
        return ["keys", "values", "entries", Symbol.iterator].forEach((o => {
          e[o] = pe(o, !1, !1), n[o] = pe(o, !0, !1), t[o] = pe(o, !1, !0), r[o] = pe(o, !0, !0)
        })), [e, n, t, r]
      }
      const [fe, me, ge, ve] = he();

      function De(e, t) {
        const n = t ? e ? ve : ge : e ? me : fe;
        return (t, r, o) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(l(n, r) && r in t ? n : t, r, o)
      }
      const ye = {
          get: De(!1, !1)
        },
        be = {
          get: De(!1, !0)
        },
        we = {
          get: De(!0, !1)
        },
        Ce = new WeakMap,
        ke = new WeakMap,
        xe = new WeakMap,
        Ee = new WeakMap;

      function Ae(e) {
        return e && e.__v_isReadonly ? e : _e(e, !1, X, ye, Ce)
      }

      function Fe(e) {
        return _e(e, !0, G, we, xe)
      }

      function _e(e, t, n, r, o) {
        if (!c(e)) return e;
        if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
        const i = o.get(e);
        if (i) return i;
        const l = (s = e).__v_skip || !Object.isExtensible(s) ? 0 : function (e) {
          switch (e) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0
          }
        }((e => d(e).slice(8, -1))(s));
        var s;
        if (0 === l) return e;
        const u = new Proxy(e, 2 === l ? r : n);
        return o.set(e, u), u
      }

      function Be(e) {
        return Se(e) ? Be(e.__v_raw) : !(!e || !e.__v_isReactive)
      }

      function Se(e) {
        return !(!e || !e.__v_isReadonly)
      }

      function $e(e) {
        return Be(e) || Se(e)
      }

      function ze(e) {
        const t = e && e.__v_raw;
        return t ? ze(t) : e
      }

      function Le(e) {
        return t = e, Object.defineProperty(t, "__v_skip", {
          configurable: !0,
          enumerable: !1,
          value: !0
        }), e;
        var t
      }
      const Re = e => c(e) ? Ae(e) : e,
        Oe = e => c(e) ? Fe(e) : e;

      function Te(e) {
        M() && ((e = ze(e)).dep || (e.dep = C()), U(e.dep))
      }

      function Ie(e, t) {
        (e = ze(e)).dep && N(e.dep)
      }

      function je(e) {
        return Boolean(e && !0 === e.__v_isRef)
      }

      function Me(e) {
        return n = !1, je(t = e) ? t : new Ue(t, n);
        var t, n
      }
      class Ue {
        constructor(e, t) {
          this._shallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : ze(e), this._value = t ? e : Re(e)
        }
        get value() {
          return Te(this), this._value
        }
        set value(e) {
          e = this._shallow ? e : ze(e), D(e, this._rawValue) && (this._rawValue = e, this._value = this._shallow ? e : Re(e), Ie(this))
        }
      }
      const Pe = {
        get: (e, t, n) => {
          return je(r = Reflect.get(e, t, n)) ? r.value : r;
          var r
        }, set: (e, t, n, r) => {
          const o = e[t];
          return je(o) && !je(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r)
        }
      };

      function Ne(e) {
        return Be(e) ? e : new Proxy(e, Pe)
      }
      class Ve {
        constructor(e, t, n) {
          this._setter = t, this.dep = void 0, this._dirty = !0, this.__v_isRef = !0, this.effect = new z(e, (() => {
            this._dirty || (this._dirty = !0, Ie(this))
          })), this.__v_isReadonly = n
        }
        get value() {
          const e = ze(this);
          return Te(e), e._dirty && (e._dirty = !1, e._value = e.effect.run()), e._value
        }
        set value(e) {
          this._setter(e)
        }
      }

      function qe(e, n) {
        let r, o;
        const i = "function" == typeof e;
        return i ? (r = e, o = t) : (r = e.get, o = e.set), new Ve(r, o, i || !o)
      }

      function He(e, t) {
        const n = Object.create(null),
          r = e.split(",");
        for (let e = 0; e < r.length; e++) n[r[e]] = !0;
        return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
      }

      function We(e) {
        if (at(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const r = e[n],
              o = ht(r) ? Ke(r) : We(r);
            if (o)
              for (const e in o) t[e] = o[e]
          }
          return t
        }
        return ht(e) || ft(e) ? e : void 0
      }
      Promise.resolve();
      const Ze = /;(?![^(]*\))/g,
        Je = /:(.+)/;

      function Ke(e) {
        const t = {};
        return e.split(Ze).forEach((e => {
          if (e) {
            const n = e.split(Je);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
          }
        })), t
      }

      function Qe(e) {
        let t = "";
        if (ht(e)) t = e;
        else if (at(e))
          for (let n = 0; n < e.length; n++) {
            const r = Qe(e[n]);
            r && (t += r + " ")
          } else if (ft(e))
            for (const n in e) e[n] && (t += n + " ");
        return t.trim()
      }
      const Ye = e => null == e ? "" : at(e) || ft(e) && (e.toString === gt || !dt(e.toString)) ? JSON.stringify(e, Xe, 2) : String(e),
        Xe = (e, t) => t && t.__v_isRef ? Xe(e, t.value) : ct(t) ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n]) => (e[`${t} =>`] = n, e)), {})
        } : pt(t) ? {
          [`Set(${t.size})`]: [...t.values()]
        } : !ft(t) || at(t) || Dt(t) ? t : String(t),
        Ge = {},
        et = [],
        tt = () => {},
        nt = () => !1,
        rt = /^on[^a-z]/,
        ot = e => rt.test(e),
        it = e => e.startsWith("onUpdate:"),
        lt = Object.assign,
        st = Object.prototype.hasOwnProperty,
        ut = (e, t) => st.call(e, t),
        at = Array.isArray,
        ct = e => "[object Map]" === vt(e),
        pt = e => "[object Set]" === vt(e),
        dt = e => "function" == typeof e,
        ht = e => "string" == typeof e,
        ft = e => null !== e && "object" == typeof e,
        mt = e => ft(e) && dt(e.then) && dt(e.catch),
        gt = Object.prototype.toString,
        vt = e => gt.call(e),
        Dt = e => "[object Object]" === vt(e),
        yt = He(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        bt = e => {
          const t = Object.create(null);
          return n => t[n] || (t[n] = e(n))
        },
        wt = /-(\w)/g,
        Ct = bt((e => e.replace(wt, ((e, t) => t ? t.toUpperCase() : "")))),
        kt = /\B([A-Z])/g,
        xt = bt((e => e.replace(kt, "-$1").toLowerCase())),
        Et = bt((e => e.charAt(0).toUpperCase() + e.slice(1))),
        At = bt((e => e ? `on${Et(e)}` : "")),
        Ft = (e, t) => !Object.is(e, t),
        _t = (e, t) => {
          for (let n = 0; n < e.length; n++) e[n](t)
        },
        Bt = (e, t, n) => {
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
          })
        },
        St = e => {
          const t = parseFloat(e);
          return isNaN(t) ? e : t
        };
      let $t;
      const zt = () => $t || ($t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {});
      new Set, new Map;
      let Lt, Rt = [];

      function Ot(e, ...t) {
        Lt ? Lt.emit(e, ...t) : Rt.push({
          event: e,
          args: t
        })
      }

      function Tt(e, t) {
        Lt = e, Lt ? (Lt.enabled = !0, Rt.forEach((({
          event: e,
          args: t
        }) => Lt.emit(e, ...t))), Rt = []) : (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e => {
          Tt(e, t)
        }))
      }
      const It = Ut("component:added"),
        jt = Ut("component:updated"),
        Mt = Ut("component:removed");

      function Ut(e) {
        return t => {
          Ot(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t)
        }
      }

      function Pt(e, t, ...n) {
        const r = e.vnode.props || Ge;
        let o = n;
        const i = t.startsWith("update:"),
          l = i && t.slice(7);
        if (l && l in r) {
          const e = `${"modelValue"===l?"model":l}Modifiers`,
            {
              number: t,
              trim: i
            } = r[e] || Ge;
          i ? o = n.map((e => e.trim())) : t && (o = n.map(St))
        }
        let s;
        __VUE_PROD_DEVTOOLS__ && function (e, t, n) {
          Ot("component:emit", e.appContext.app, e, t, n)
        }(e, t, o);
        let u = r[s = At(t)] || r[s = At(Ct(t))];
        !u && i && (u = r[s = At(xt(t))]), u && Fr(u, e, 6, o);
        const a = r[s + "Once"];
        if (a) {
          if (e.emitted) {
            if (e.emitted[s]) return
          } else e.emitted = {};
          e.emitted[s] = !0, Fr(a, e, 6, o)
        }
      }

      function Nt(e, t, n = !1) {
        const r = t.emitsCache,
          o = r.get(e);
        if (void 0 !== o) return o;
        const i = e.emits;
        let l = {};
        return i ? (at(i) ? i.forEach((e => l[e] = null)) : lt(l, i), r.set(e, l), l) : (r.set(e, null), null)
      }

      function Vt(e, t) {
        return !(!e || !ot(t)) && (t = t.slice(2).replace(/Once$/, ""), ut(e, t[0].toLowerCase() + t.slice(1)) || ut(e, xt(t)) || ut(e, t))
      }
      let qt = null,
        Ht = null;

      function Wt(e) {
        const t = qt;
        return qt = e, Ht = e && e.type.__scopeId || null, t
      }

      function Zt(e) {
        const {
          type: t,
          vnode: n,
          proxy: r,
          withProxy: o,
          props: i,
          propsOptions: [l],
          slots: s,
          attrs: u,
          emit: a,
          render: c,
          renderCache: p,
          data: d,
          setupState: h,
          ctx: f,
          inheritAttrs: m
        } = e;
        let g, v;
        const D = Wt(e);
        try {
          if (4 & n.shapeFlag) {
            const e = o || r;
            g = ur(c.call(e, e, p, i, h, d, f)), v = u
          } else {
            const e = t;
            g = ur(e.length > 1 ? e(i, {
              attrs: u,
              slots: s,
              emit: a
            }) : e(i, null)), v = t.props ? u : Jt(u)
          }
        } catch (t) {
          qn.length = 0, _r(t, e, 1), g = or(Nn)
        }
        let y = g;
        if (v && !1 !== m) {
          const e = Object.keys(v),
            {
              shapeFlag: t
            } = y;
          e.length && 7 & t && (l && e.some(it) && (v = Kt(v, l)), y = ir(y, v))
        }
        return n.dirs && (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), g = y, Wt(D), g
      }
      const Jt = e => {
          let t;
          for (const n in e)("class" === n || "style" === n || ot(n)) && ((t || (t = {}))[n] = e[n]);
          return t
        },
        Kt = (e, t) => {
          const n = {};
          for (const r in e) it(r) && r.slice(9) in t || (n[r] = e[r]);
          return n
        };

      function Qt(e, t, n) {
        const r = Object.keys(t);
        if (r.length !== Object.keys(e).length) return !0;
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          if (t[i] !== e[i] && !Vt(n, i)) return !0
        }
        return !1
      }

      function Yt(e, t, n = !1) {
        const r = vr || qt;
        if (r) {
          const o = null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
          if (o && e in o) return o[e];
          if (arguments.length > 1) return n && dt(t) ? t.call(r.proxy) : t
        }
      }
      const Xt = [Function, Array],
        Gt = {
          name: "BaseTransition",
          props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Xt,
            onEnter: Xt,
            onAfterEnter: Xt,
            onEnterCancelled: Xt,
            onBeforeLeave: Xt,
            onLeave: Xt,
            onAfterLeave: Xt,
            onLeaveCancelled: Xt,
            onBeforeAppear: Xt,
            onAppear: Xt,
            onAfterAppear: Xt,
            onAppearCancelled: Xt
          },
          setup(e, {
            slots: t
          }) {
            const n = Dr(),
              r = function () {
                const e = {
                  isMounted: !1,
                  isLeaving: !1,
                  isUnmounting: !1,
                  leavingVNodes: new Map
                };
                return pn((() => {
                  e.isMounted = !0
                })), dn((() => {
                  e.isUnmounting = !0
                })), e
              }();
            let o;
            return () => {
              const i = t.default && ln(t.default(), !0);
              if (!i || !i.length) return;
              const l = ze(e),
                {
                  mode: s
                } = l,
                u = i[0];
              if (r.isLeaving) return nn(u);
              const a = rn(u);
              if (!a) return nn(u);
              const c = tn(a, l, r, n);
              on(a, c);
              const p = n.subTree,
                d = p && rn(p);
              let h = !1;
              const {
                getTransitionKey: f
              } = a.type;
              if (f) {
                const e = f();
                void 0 === o ? o = e : e !== o && (o = e, h = !0)
              }
              if (d && d.type !== Nn && (!Gn(a, d) || h)) {
                const e = tn(d, l, r, n);
                if (on(d, e), "out-in" === s) return r.isLeaving = !0, e.afterLeave = () => {
                  r.isLeaving = !1, n.update()
                }, nn(u);
                "in-out" === s && a.type !== Nn && (e.delayLeave = (e, t, n) => {
                  en(r, d)[String(d.key)] = d, e._leaveCb = () => {
                    t(), e._leaveCb = void 0, delete c.delayedLeave
                  }, c.delayedLeave = n
                })
              }
              return u
            }
          }
        };

      function en(e, t) {
        const {
          leavingVNodes: n
        } = e;
        let r = n.get(t.type);
        return r || (r = Object.create(null), n.set(t.type, r)), r
      }

      function tn(e, t, n, r) {
        const {
          appear: o,
          mode: i,
          persisted: l = !1,
          onBeforeEnter: s,
          onEnter: u,
          onAfterEnter: a,
          onEnterCancelled: c,
          onBeforeLeave: p,
          onLeave: d,
          onAfterLeave: h,
          onLeaveCancelled: f,
          onBeforeAppear: m,
          onAppear: g,
          onAfterAppear: v,
          onAppearCancelled: D
        } = t, y = String(e.key), b = en(n, e), w = (e, t) => {
          e && Fr(e, r, 9, t)
        }, C = {
          mode: i,
          persisted: l,
          beforeEnter(t) {
            let r = s;
            if (!n.isMounted) {
              if (!o) return;
              r = m || s
            }
            t._leaveCb && t._leaveCb(!0);
            const i = b[y];
            i && Gn(e, i) && i.el._leaveCb && i.el._leaveCb(), w(r, [t])
          },
          enter(e) {
            let t = u,
              r = a,
              i = c;
            if (!n.isMounted) {
              if (!o) return;
              t = g || u, r = v || a, i = D || c
            }
            let l = !1;
            const s = e._enterCb = t => {
              l || (l = !0, w(t ? i : r, [e]), C.delayedLeave && C.delayedLeave(), e._enterCb = void 0)
            };
            t ? (t(e, s), t.length <= 1 && s()) : s()
          },
          leave(t, r) {
            const o = String(e.key);
            if (t._enterCb && t._enterCb(!0), n.isUnmounting) return r();
            w(p, [t]);
            let i = !1;
            const l = t._leaveCb = n => {
              i || (i = !0, r(), w(n ? f : h, [t]), t._leaveCb = void 0, b[o] === e && delete b[o])
            };
            b[o] = e, d ? (d(t, l), d.length <= 1 && l()) : l()
          },
          clone: e => tn(e, t, n, r)
        };
        return C
      }

      function nn(e) {
        if (an(e)) return (e = ir(e)).children = null, e
      }

      function rn(e) {
        return an(e) ? e.children ? e.children[0] : void 0 : e
      }

      function on(e, t) {
        6 & e.shapeFlag && e.component ? on(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
      }

      function ln(e, t = !1) {
        let n = [],
          r = 0;
        for (let o = 0; o < e.length; o++) {
          const i = e[o];
          i.type === Un ? (128 & i.patchFlag && r++, n = n.concat(ln(i.children, t))) : (t || i.type !== Nn) && n.push(i)
        }
        if (r > 1)
          for (let e = 0; e < n.length; e++) n[e].patchFlag = -2;
        return n
      }

      function sn(e) {
        return dt(e) ? {
          setup: e,
          name: e.name
        } : e
      }
      const un = e => !!e.type.__asyncLoader,
        an = e => e.type.__isKeepAlive;
      RegExp, RegExp;
      const cn = e => (t, n = vr) => (!Cr || "sp" === e) && function (e, t, n = vr, r = !1) {
          if (n) {
            const o = n[e] || (n[e] = []),
              i = t.__weh || (t.__weh = (...r) => {
                if (n.isUnmounted) return;
                T(), yr(n);
                const o = Fr(t, n, e, r);
                return br(), I(), o
              });
            return r ? o.unshift(i) : o.push(i), i
          }
        }(e, t, n),
        pn = (cn("bm"), cn("m")),
        dn = (cn("bu"), cn("u"), cn("bum")),
        hn = cn("um");

      function fn(e, t, n, r) {
        const [o, i] = e.propsOptions;
        let l, s = !1;
        if (t)
          for (let u in t) {
            if (yt(u)) continue;
            const a = t[u];
            let c;
            o && ut(o, c = Ct(u)) ? i && i.includes(c) ? (l || (l = {}))[c] = a : n[c] = a : Vt(e.emitsOptions, u) || a !== r[u] && (r[u] = a, s = !0)
          }
        if (i) {
          const t = ze(n),
            r = l || Ge;
          for (let l = 0; l < i.length; l++) {
            const s = i[l];
            n[s] = mn(o, t, s, r[s], e, !ut(r, s))
          }
        }
        return s
      }

      function mn(e, t, n, r, o, i) {
        const l = e[n];
        if (null != l) {
          const e = ut(l, "default");
          if (e && void 0 === r) {
            const e = l.default;
            if (l.type !== Function && dt(e)) {
              const {
                propsDefaults: i
              } = o;
              n in i ? r = i[n] : (yr(o), r = i[n] = e.call(null, t), br())
            } else r = e
          }
          l[0] && (i && !e ? r = !1 : !l[1] || "" !== r && r !== xt(n) || (r = !0))
        }
        return r
      }

      function gn(e, t, n = !1) {
        const r = t.propsCache,
          o = r.get(e);
        if (o) return o;
        const i = e.props,
          l = {},
          s = [];
        if (!i) return r.set(e, et), et;
        if (at(i))
          for (let e = 0; e < i.length; e++) {
            const t = Ct(i[e]);
            vn(t) && (l[t] = Ge)
          } else if (i)
            for (const e in i) {
              const t = Ct(e);
              if (vn(t)) {
                const n = i[e],
                  r = l[t] = at(n) || dt(n) ? {
                    type: n
                  } : n;
                if (r) {
                  const e = bn(Boolean, r.type),
                    n = bn(String, r.type);
                  r[0] = e > -1, r[1] = n < 0 || e < n, (e > -1 || ut(r, "default")) && s.push(t)
                }
              }
            }
        const u = [l, s];
        return r.set(e, u), u
      }

      function vn(e) {
        return "$" !== e[0]
      }

      function Dn(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : null === e ? "null" : ""
      }

      function yn(e, t) {
        return Dn(e) === Dn(t)
      }

      function bn(e, t) {
        return at(t) ? t.findIndex((t => yn(t, e))) : dt(t) && yn(t, e) ? 0 : -1
      }
      cn("sp"), cn("rtg"), cn("rtc");
      const wn = e => "_" === e[0] || "$stable" === e,
        Cn = e => at(e) ? e.map(ur) : [ur(e)],
        kn = (e, t, n) => {
          const r = function (e, t = qt, n) {
            if (!t) return e;
            if (e._n) return e;
            const r = (...n) => {
              r._d && Jn(-1);
              const o = Wt(t),
                i = e(...n);
              return Wt(o), r._d && Jn(1), __VUE_PROD_DEVTOOLS__ && jt(t), i
            };
            return r._n = !0, r._c = !0, r._d = !0, r
          }(((...e) => Cn(t(...e))), n);
          return r._c = !1, r
        },
        xn = (e, t, n) => {
          const r = e._ctx;
          for (const n in e) {
            if (wn(n)) continue;
            const o = e[n];
            if (dt(o)) t[n] = kn(0, o, r);
            else if (null != o) {
              const e = Cn(o);
              t[n] = () => e
            }
          }
        },
        En = (e, t) => {
          const n = Cn(t);
          e.slots.default = () => n
        };

      function An(e, t) {
        if (null === qt) return e;
        const n = qt.proxy,
          r = e.dirs || (e.dirs = []);
        for (let e = 0; e < t.length; e++) {
          let [o, i, l, s = Ge] = t[e];
          dt(o) && (o = {
            mounted: o,
            updated: o
          }), o.deep && Xr(i), r.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: s
          })
        }
        return e
      }

      function Fn(e, t, n, r) {
        const o = e.dirs,
          i = t && t.dirs;
        for (let l = 0; l < o.length; l++) {
          const s = o[l];
          i && (s.oldValue = i[l].value);
          let u = s.dir[r];
          u && (T(), Fr(u, n, 8, [e.el, s, e, t]), I())
        }
      }

      function _n() {
        return {
          app: null,
          config: {
            isNativeTag: nt,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap,
          propsCache: new WeakMap,
          emitsCache: new WeakMap
        }
      }
      let Bn = 0;

      function Sn(e, t) {
        return function (n, r = null) {
          null == r || ft(r) || (r = null);
          const o = _n(),
            i = new Set;
          let l = !1;
          const s = o.app = {
            _uid: Bn++,
            _component: n,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: eo,
            get config() {
              return o.config
            },
            set config(e) {},
            use: (e, ...t) => (i.has(e) || (e && dt(e.install) ? (i.add(e), e.install(s, ...t)) : dt(e) && (i.add(e), e(s, ...t))), s),
            mixin: e => s,
            component: (e, t) => t ? (o.components[e] = t, s) : o.components[e],
            directive: (e, t) => t ? (o.directives[e] = t, s) : o.directives[e],
            mount(i, u, a) {
              if (!l) {
                const c = or(n, r);
                return c.appContext = o, u && t ? t(c, i) : e(c, i, a), l = !0, s._container = i, i.__vue_app__ = s, __VUE_PROD_DEVTOOLS__ && (s._instance = c.component, function (e, t) {
                  Ot("app:init", e, t, {
                    Fragment: Un,
                    Text: Pn,
                    Comment: Nn,
                    Static: Vn
                  })
                }(s, eo)), Er(c.component) || c.component.proxy
              }
            },
            unmount() {
              l && (e(null, s._container), __VUE_PROD_DEVTOOLS__ && (s._instance = null, function (e) {
                Ot("app:unmount", e)
              }(s)), delete s._container.__vue_app__)
            },
            provide: (e, t) => (o.provides[e] = t, s)
          };
          return s
        }
      }
      const $n = function (e, t) {
        t && t.pendingBranch ? at(e) ? t.effects.push(...e) : t.effects.push(e) : Hr(e, Ir, Tr, jr)
      };

      function zn(e, t) {
        "boolean" != typeof __VUE_PROD_DEVTOOLS__ && (zt().__VUE_PROD_DEVTOOLS__ = !1);
        const n = zt();
        n.__VUE__ = !0, __VUE_PROD_DEVTOOLS__ && Tt(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
        const {
          insert: r,
          remove: o,
          patchProp: i,
          createElement: l,
          createText: s,
          createComment: u,
          setText: a,
          setElementText: c,
          parentNode: p,
          nextSibling: d,
          setScopeId: h = tt,
          cloneNode: f,
          insertStaticContent: m
        } = e, g = (e, t, n, r = null, o = null, i = null, l = !1, s = null, u = !!t.dynamicChildren) => {
          if (e === t) return;
          e && !Gn(e, t) && (r = J(e), V(e, o, i, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
          const {
            type: a,
            ref: c,
            shapeFlag: p
          } = t;
          switch (a) {
          case Pn:
            v(e, t, n, r);
            break;
          case Nn:
            D(e, t, n, r);
            break;
          case Vn:
            null == e && y(t, n, r, l);
            break;
          case Un:
            _(e, t, n, r, o, i, l, s, u);
            break;
          default:
            1 & p ? b(e, t, n, r, o, i, l, s, u) : 6 & p ? B(e, t, n, r, o, i, l, s, u) : (64 & p || 128 & p) && a.process(e, t, n, r, o, i, l, s, u, Q)
          }
          null != c && o && Ln(c, e && e.ref, i, t || e, !t)
        }, v = (e, t, n, o) => {
          if (null == e) r(t.el = s(t.children), n, o);
          else {
            const n = t.el = e.el;
            t.children !== e.children && a(n, t.children)
          }
        }, D = (e, t, n, o) => {
          null == e ? r(t.el = u(t.children || ""), n, o) : t.el = e.el
        }, y = (e, t, n, r) => {
          [e.el, e.anchor] = m(e.children, t, n, r)
        }, b = (e, t, n, r, o, i, l, s, u) => {
          l = l || "svg" === t.type, null == e ? C(t, n, r, o, i, l, s, u) : E(e, t, o, i, l, s, u)
        }, C = (e, t, n, o, s, u, a, p) => {
          let d, h;
          const {
            type: m,
            props: g,
            shapeFlag: v,
            transition: D,
            patchFlag: y,
            dirs: b
          } = e;
          if (e.el && void 0 !== f && -1 === y) d = e.el = f(e.el);
          else {
            if (d = e.el = l(e.type, u, g && g.is, g), 8 & v ? c(d, e.children) : 16 & v && x(e.children, d, null, o, s, u && "foreignObject" !== m, a, p), b && Fn(e, null, o, "created"), g) {
              for (const t in g) "value" === t || yt(t) || i(d, t, null, g[t], u, e.children, o, s, Z);
              "value" in g && i(d, "value", null, g.value), (h = g.onVnodeBeforeMount) && Rn(h, o, e)
            }
            k(d, e, e.scopeId, a, o)
          }
          __VUE_PROD_DEVTOOLS__ && (Object.defineProperty(d, "__vnode", {
            value: e,
            enumerable: !1
          }), Object.defineProperty(d, "__vueParentComponent", {
            value: o,
            enumerable: !1
          })), b && Fn(e, null, o, "beforeMount");
          const w = (!s || s && !s.pendingBranch) && D && !D.persisted;
          w && D.beforeEnter(d), r(d, t, n), ((h = g && g.onVnodeMounted) || w || b) && $n((() => {
            h && Rn(h, o, e), w && D.enter(d), b && Fn(e, null, o, "mounted")
          }), s)
        }, k = (e, t, n, r, o) => {
          if (n && h(e, n), r)
            for (let t = 0; t < r.length; t++) h(e, r[t]);
          if (o && t === o.subTree) {
            const t = o.vnode;
            k(e, t, t.scopeId, t.slotScopeIds, o.parent)
          }
        }, x = (e, t, n, r, o, i, l, s, u = 0) => {
          for (let a = u; a < e.length; a++) {
            const u = e[a] = s ? ar(e[a]) : ur(e[a]);
            g(null, u, t, n, r, o, i, l, s)
          }
        }, E = (e, t, n, r, o, l, s) => {
          const u = t.el = e.el;
          let {
            patchFlag: a,
            dynamicChildren: p,
            dirs: d
          } = t;
          a |= 16 & e.patchFlag;
          const h = e.props || Ge,
            f = t.props || Ge;
          let m;
          (m = f.onVnodeBeforeUpdate) && Rn(m, n, t, e), d && Fn(t, e, n, "beforeUpdate");
          const g = o && "foreignObject" !== t.type;
          if (p ? A(e.dynamicChildren, p, u, n, r, g, l) : s || O(e, t, u, null, n, r, g, l, !1), a > 0) {
            if (16 & a) F(u, t, h, f, n, r, o);
            else if (2 & a && h.class !== f.class && i(u, "class", null, f.class, o), 4 & a && i(u, "style", h.style, f.style, o), 8 & a) {
              const l = t.dynamicProps;
              for (let t = 0; t < l.length; t++) {
                const s = l[t],
                  a = h[s],
                  c = f[s];
                c === a && "value" !== s || i(u, s, a, c, o, e.children, n, r, Z)
              }
            }
            1 & a && e.children !== t.children && c(u, t.children)
          } else s || null != p || F(u, t, h, f, n, r, o);
          ((m = f.onVnodeUpdated) || d) && $n((() => {
            m && Rn(m, n, t, e), d && Fn(t, e, n, "updated")
          }), r)
        }, A = (e, t, n, r, o, i, l) => {
          for (let s = 0; s < t.length; s++) {
            const u = e[s],
              a = t[s],
              c = u.el && (u.type === Un || !Gn(u, a) || 70 & u.shapeFlag) ? p(u.el) : n;
            g(u, a, c, null, r, o, i, l, !0)
          }
        }, F = (e, t, n, r, o, l, s) => {
          if (n !== r) {
            for (const u in r) {
              if (yt(u)) continue;
              const a = r[u],
                c = n[u];
              a !== c && "value" !== u && i(e, u, c, a, s, t.children, o, l, Z)
            }
            if (n !== Ge)
              for (const u in n) yt(u) || u in r || i(e, u, n[u], null, s, t.children, o, l, Z);
            "value" in r && i(e, "value", n.value, r.value)
          }
        }, _ = (e, t, n, o, i, l, u, a, c) => {
          const p = t.el = e ? e.el : s(""),
            d = t.anchor = e ? e.anchor : s("");
          let {
            patchFlag: h,
            dynamicChildren: f,
            slotScopeIds: m
          } = t;
          m && (a = a ? a.concat(m) : m), null == e ? (r(p, n, o), r(d, n, o), x(t.children, n, d, i, l, u, a, c)) : h > 0 && 64 & h && f && e.dynamicChildren ? (A(e.dynamicChildren, f, n, i, l, u, a), (null != t.key || i && t === i.subTree) && On(e, t, !0)) : O(e, t, n, d, i, l, u, a, c)
        }, B = (e, t, n, r, o, i, l, s, u) => {
          t.slotScopeIds = s, null == e ? 512 & t.shapeFlag ? o.ctx.activate(t, n, r, l, u) : S(t, n, r, o, i, l, u) : $(e, t, u)
        }, S = (e, t, n, r, o, i, l) => {
          const s = e.component = function (e, t, n) {
            const r = e.type,
              o = (t ? t.appContext : e.appContext) || mr,
              i = {
                uid: gr++,
                vnode: e,
                type: r,
                parent: t,
                appContext: o,
                root: null,
                next: null,
                subTree: null,
                update: null,
                scope: new w(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: t ? t.provides : Object.create(o.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: gn(r, o),
                emitsOptions: Nt(r, o),
                emit: null,
                emitted: null,
                propsDefaults: Ge,
                inheritAttrs: r.inheritAttrs,
                ctx: Ge,
                data: Ge,
                props: Ge,
                attrs: Ge,
                slots: Ge,
                refs: Ge,
                setupState: Ge,
                setupContext: null,
                suspense: n,
                suspenseId: n ? n.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null
              };
            return i.ctx = {
              _: i
            }, i.root = t ? t.root : i, i.emit = Pt.bind(null, i), e.ce && e.ce(i), i
          }(e, r, o);
          if (an(e) && (s.ctx.renderer = Q), function (e, t = !1) {
            Cr = t;
            const {
              props: n,
              children: r
            } = e.vnode, o = wr(e);
            (function (e, t, n, r = !1) {
              const o = {},
                i = {};
              Bt(i, er, 1), e.propsDefaults = Object.create(null), fn(e, t, o, i);
              for (const t in e.propsOptions[0]) t in o || (o[t] = void 0);
              n ? e.props = r ? o : _e(o, !1, ee, be, ke) : e.type.props ? e.props = o : e.props = i, e.attrs = i
            })(e, n, o, t), ((e, t) => {
              if (32 & e.vnode.shapeFlag) {
                const n = t._;
                n ? (e.slots = ze(t), Bt(t, "_", n)) : xn(t, e.slots = {})
              } else e.slots = {}, t && En(e, t);
              Bt(e.slots, er, 1)
            })(e, r);
            const i = o ? function (e, t) {
              const n = e.type;
              e.accessCache = Object.create(null), e.proxy = Le(new Proxy(e.ctx, fr));
              const {
                setup: r
              } = n;
              if (r) {
                const n = e.setupContext = r.length > 1 ? function (e) {
                  const t = t => {
                    e.exposed = t || {}
                  };
                  let n;
                  return {
                    get attrs() {
                      return n || (n = function (e) {
                        return new Proxy(e.attrs, {
                          get: (t, n) => (j(e, 0, "$attrs"), t[n])
                        })
                      }(e))
                    }, slots: e.slots, emit: e.emit, expose: t
                  }
                }(e) : null;
                yr(e), T();
                const o = Ar(r, e, 0, [e.props, n]);
                if (I(), br(), mt(o)) {
                  if (o.then(br, br), t) return o.then((n => {
                    kr(e, n, t)
                  })).catch((t => {
                    _r(t, e, 0)
                  }));
                  e.asyncDep = o
                } else kr(e, o, t)
              } else xr(e, t)
            }(e, t) : void 0;
            Cr = !1
          }(s), s.asyncDep) {
            if (o && o.registerDep(s, L), !e.el) {
              const e = s.subTree = or(Nn);
              D(null, e, t, n)
            }
          } else L(s, e, t, n, o, i, l)
        }, $ = (e, t, n) => {
          const r = t.component = e.component;
          if (function (e, t, n) {
            const {
              props: r,
              children: o,
              component: i
            } = e, {
              props: l,
              children: s,
              patchFlag: u
            } = t, a = i.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && u >= 0)) return !(!o && !s || s && s.$stable) || r !== l && (r ? !l || Qt(r, l, a) : !!l);
            if (1024 & u) return !0;
            if (16 & u) return r ? Qt(r, l, a) : !!l;
            if (8 & u) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (l[n] !== r[n] && !Vt(a, n)) return !0
              }
            }
            return !1
          }(e, t, n)) {
            if (r.asyncDep && !r.asyncResolved) return void R(r, t, n);
            r.next = t,
              function (e) {
                const t = $r.indexOf(e);
                t > zr && $r.splice(t, 1)
              }(r.update), r.update()
          } else t.component = e.component, t.el = e.el, r.vnode = t
        }, L = (e, t, n, r, o, i, l) => {
          const s = new z((() => {
              if (e.isMounted) {
                let t, {
                    next: n,
                    bu: r,
                    u,
                    parent: a,
                    vnode: c
                  } = e,
                  d = n;
                s.allowRecurse = !1, n ? (n.el = c.el, R(e, n, l)) : n = c, r && _t(r), (t = n.props && n.props.onVnodeBeforeUpdate) && Rn(t, a, n, c), s.allowRecurse = !0;
                const h = Zt(e),
                  f = e.subTree;
                e.subTree = h, g(f, h, p(f.el), J(f), e, o, i), n.el = h.el, null === d && function ({
                  vnode: e,
                  parent: t
                }, n) {
                  for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
                }(e, h.el), u && $n(u, o), (t = n.props && n.props.onVnodeUpdated) && $n((() => Rn(t, a, n, c)), o), __VUE_PROD_DEVTOOLS__ && jt(e)
              } else {
                let l;
                const {
                  el: u,
                  props: a
                } = t, {
                  bm: c,
                  m: p,
                  parent: d
                } = e, h = un(t);
                if (s.allowRecurse = !1, c && _t(c), !h && (l = a && a.onVnodeBeforeMount) && Rn(l, d, t), s.allowRecurse = !0, u && X) {
                  const n = () => {
                    e.subTree = Zt(e), X(u, e.subTree, e, o, null)
                  };
                  h ? t.type.__asyncLoader().then((() => !e.isUnmounted && n())) : n()
                } else {
                  const l = e.subTree = Zt(e);
                  g(null, l, n, r, e, o, i), t.el = l.el
                } if (p && $n(p, o), !h && (l = a && a.onVnodeMounted)) {
                  const e = t;
                  $n((() => Rn(l, d, e)), o)
                }
                256 & t.shapeFlag && e.a && $n(e.a, o), e.isMounted = !0, __VUE_PROD_DEVTOOLS__ && It(e), t = n = r = null
              }
            }), (() => Vr(e.update)), e.scope),
            u = e.update = s.run.bind(s);
          u.id = e.uid, s.allowRecurse = u.allowRecurse = !0, u()
        }, R = (e, t, n) => {
          t.component = e;
          const r = e.vnode.props;
          e.vnode = t, e.next = null,
            function (e, t, n, r) {
              const {
                props: o,
                attrs: i,
                vnode: {
                  patchFlag: l
                }
              } = e, s = ze(o), [u] = e.propsOptions;
              let a = !1;
              if (!(r || l > 0) || 16 & l) {
                let r;
                fn(e, t, o, i) && (a = !0);
                for (const i in s) t && (ut(t, i) || (r = xt(i)) !== i && ut(t, r)) || (u ? !n || void 0 === n[i] && void 0 === n[r] || (o[i] = mn(u, s, i, void 0, e, !0)) : delete o[i]);
                if (i !== s)
                  for (const e in i) t && ut(t, e) || (delete i[e], a = !0)
              } else if (8 & l) {
                const n = e.vnode.dynamicProps;
                for (let r = 0; r < n.length; r++) {
                  let l = n[r];
                  const c = t[l];
                  if (u)
                    if (ut(i, l)) c !== i[l] && (i[l] = c, a = !0);
                    else {
                      const t = Ct(l);
                      o[t] = mn(u, s, t, c, e, !1)
                    } else c !== i[l] && (i[l] = c, a = !0)
                }
              }
              a && P(e, "set", "$attrs")
            }(e, t.props, r, n), ((e, t, n) => {
              const {
                vnode: r,
                slots: o
              } = e;
              let i = !0,
                l = Ge;
              if (32 & r.shapeFlag) {
                const e = t._;
                e ? n && 1 === e ? i = !1 : (lt(o, t), n || 1 !== e || delete o._) : (i = !t.$stable, xn(t, o)), l = t
              } else t && (En(e, t), l = {
                default: 1
              }); if (i)
                for (const e in o) wn(e) || e in l || delete o[e]
            })(e, t.children, n), T(), Wr(void 0, e.update), I()
        }, O = (e, t, n, r, o, i, l, s, u = !1) => {
          const a = e && e.children,
            p = e ? e.shapeFlag : 0,
            d = t.children,
            {
              patchFlag: h,
              shapeFlag: f
            } = t;
          if (h > 0) {
            if (128 & h) return void U(a, d, n, r, o, i, l, s, u);
            if (256 & h) return void M(a, d, n, r, o, i, l, s, u)
          }
          8 & f ? (16 & p && Z(a, o, i), d !== a && c(n, d)) : 16 & p ? 16 & f ? U(a, d, n, r, o, i, l, s, u) : Z(a, o, i, !0) : (8 & p && c(n, ""), 16 & f && x(d, n, r, o, i, l, s, u))
        }, M = (e, t, n, r, o, i, l, s, u) => {
          t = t || et;
          const a = (e = e || et).length,
            c = t.length,
            p = Math.min(a, c);
          let d;
          for (d = 0; d < p; d++) {
            const r = t[d] = u ? ar(t[d]) : ur(t[d]);
            g(e[d], r, n, null, o, i, l, s, u)
          }
          a > c ? Z(e, o, i, !0, !1, p) : x(t, n, r, o, i, l, s, u, p)
        }, U = (e, t, n, r, o, i, l, s, u) => {
          let a = 0;
          const c = t.length;
          let p = e.length - 1,
            d = c - 1;
          for (; a <= p && a <= d;) {
            const r = e[a],
              c = t[a] = u ? ar(t[a]) : ur(t[a]);
            if (!Gn(r, c)) break;
            g(r, c, n, null, o, i, l, s, u), a++
          }
          for (; a <= p && a <= d;) {
            const r = e[p],
              a = t[d] = u ? ar(t[d]) : ur(t[d]);
            if (!Gn(r, a)) break;
            g(r, a, n, null, o, i, l, s, u), p--, d--
          }
          if (a > p) {
            if (a <= d) {
              const e = d + 1,
                p = e < c ? t[e].el : r;
              for (; a <= d;) g(null, t[a] = u ? ar(t[a]) : ur(t[a]), n, p, o, i, l, s, u), a++
            }
          } else if (a > d)
            for (; a <= p;) V(e[a], o, i, !0), a++;
          else {
            const h = a,
              f = a,
              m = new Map;
            for (a = f; a <= d; a++) {
              const e = t[a] = u ? ar(t[a]) : ur(t[a]);
              null != e.key && m.set(e.key, a)
            }
            let v, D = 0;
            const y = d - f + 1;
            let b = !1,
              w = 0;
            const C = new Array(y);
            for (a = 0; a < y; a++) C[a] = 0;
            for (a = h; a <= p; a++) {
              const r = e[a];
              if (D >= y) {
                V(r, o, i, !0);
                continue
              }
              let c;
              if (null != r.key) c = m.get(r.key);
              else
                for (v = f; v <= d; v++)
                  if (0 === C[v - f] && Gn(r, t[v])) {
                    c = v;
                    break
                  }
              void 0 === c ? V(r, o, i, !0) : (C[c - f] = a + 1, c >= w ? w = c : b = !0, g(r, t[c], n, null, o, i, l, s, u), D++)
            }
            const k = b ? function (e) {
              const t = e.slice(),
                n = [0];
              let r, o, i, l, s;
              const u = e.length;
              for (r = 0; r < u; r++) {
                const u = e[r];
                if (0 !== u) {
                  if (o = n[n.length - 1], e[o] < u) {
                    t[r] = o, n.push(r);
                    continue
                  }
                  for (i = 0, l = n.length - 1; i < l;) s = i + l >> 1, e[n[s]] < u ? i = s + 1 : l = s;
                  u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
                }
              }
              for (i = n.length, l = n[i - 1]; i-- > 0;) n[i] = l, l = t[l];
              return n
            }(C) : et;
            for (v = k.length - 1, a = y - 1; a >= 0; a--) {
              const e = f + a,
                p = t[e],
                d = e + 1 < c ? t[e + 1].el : r;
              0 === C[a] ? g(null, p, n, d, o, i, l, s, u) : b && (v < 0 || a !== k[v] ? N(p, n, d, 2) : v--)
            }
          }
        }, N = (e, t, n, o, i = null) => {
          const {
            el: l,
            type: s,
            transition: u,
            children: a,
            shapeFlag: c
          } = e;
          if (6 & c) N(e.component.subTree, t, n, o);
          else if (128 & c) e.suspense.move(t, n, o);
          else if (64 & c) s.move(e, t, n, Q);
          else if (s !== Un)
            if (s !== Vn)
              if (2 !== o && 1 & c && u)
                if (0 === o) u.beforeEnter(l), r(l, t, n), $n((() => u.enter(l)), i);
                else {
                  const {
                    leave: e,
                    delayLeave: o,
                    afterLeave: i
                  } = u, s = () => r(l, t, n), a = () => {
                    e(l, (() => {
                      s(), i && i()
                    }))
                  };
                  o ? o(l, s, a) : a()
                } else r(l, t, n);
          else(({
            el: e,
            anchor: t
          }, n, o) => {
            let i;
            for (; e && e !== t;) i = d(e), r(e, n, o), e = i;
            r(t, n, o)
          })(e, t, n);
          else {
            r(l, t, n);
            for (let e = 0; e < a.length; e++) N(a[e], t, n, o);
            r(e.anchor, t, n)
          }
        }, V = (e, t, n, r = !1, o = !1) => {
          const {
            type: i,
            props: l,
            ref: s,
            children: u,
            dynamicChildren: a,
            shapeFlag: c,
            patchFlag: p,
            dirs: d
          } = e;
          if (null != s && Ln(s, null, n, e, !0), 256 & c) return void t.ctx.deactivate(e);
          const h = 1 & c && d,
            f = !un(e);
          let m;
          if (f && (m = l && l.onVnodeBeforeUnmount) && Rn(m, t, e), 6 & c) W(e.component, n, r);
          else {
            if (128 & c) return void e.suspense.unmount(n, r);
            h && Fn(e, null, t, "beforeUnmount"), 64 & c ? e.type.remove(e, t, n, o, Q, r) : a && (i !== Un || p > 0 && 64 & p) ? Z(a, t, n, !1, !0) : (i === Un && 384 & p || !o && 16 & c) && Z(u, t, n), r && q(e)
          }(f && (m = l && l.onVnodeUnmounted) || h) && $n((() => {
            m && Rn(m, t, e), h && Fn(e, null, t, "unmounted")
          }), n)
        }, q = e => {
          const {
            type: t,
            el: n,
            anchor: r,
            transition: i
          } = e;
          if (t === Un) return void H(n, r);
          if (t === Vn) return void(({
            el: e,
            anchor: t
          }) => {
            let n;
            for (; e && e !== t;) n = d(e), o(e), e = n;
            o(t)
          })(e);
          const l = () => {
            o(n), i && !i.persisted && i.afterLeave && i.afterLeave()
          };
          if (1 & e.shapeFlag && i && !i.persisted) {
            const {
              leave: t,
              delayLeave: r
            } = i, o = () => t(n, l);
            r ? r(e.el, l, o) : o()
          } else l()
        }, H = (e, t) => {
          let n;
          for (; e !== t;) n = d(e), o(e), e = n;
          o(t)
        }, W = (e, t, n) => {
          const {
            bum: r,
            scope: o,
            update: i,
            subTree: l,
            um: s
          } = e;
          r && _t(r), o.stop(), i && (i.active = !1, V(l, e, t, n)), s && $n(s, t), $n((() => {
            e.isUnmounted = !0
          }), t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve()), __VUE_PROD_DEVTOOLS__ && Mt(e)
        }, Z = (e, t, n, r = !1, o = !1, i = 0) => {
          for (let l = i; l < e.length; l++) V(e[l], t, n, r, o)
        }, J = e => 6 & e.shapeFlag ? J(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : d(e.anchor || e.el), K = (e, t, n) => {
          null == e ? t._vnode && V(t._vnode, null, null, !0) : g(t._vnode || null, e, t, null, null, null, n), Zr(), t._vnode = e
        }, Q = {
          p: g,
          um: V,
          m: N,
          r: q,
          mt: S,
          mc: x,
          pc: O,
          pbc: A,
          n: J,
          o: e
        };
        let Y, X;
        return t && ([Y, X] = t(Q)), {
          render: K,
          hydrate: Y,
          createApp: Sn(K, Y)
        }
      }

      function Ln(e, t, n, r, o = !1) {
        if (at(e)) return void e.forEach(((e, i) => Ln(e, t && (at(t) ? t[i] : t), n, r, o)));
        if (un(r) && !o) return;
        const i = 4 & r.shapeFlag ? Er(r.component) || r.component.proxy : r.el,
          l = o ? null : i,
          {
            i: s,
            r: u
          } = e,
          a = t && t.r,
          c = s.refs === Ge ? s.refs = {} : s.refs,
          p = s.setupState;
        if (null != a && a !== u && (ht(a) ? (c[a] = null, ut(p, a) && (p[a] = null)) : je(a) && (a.value = null)), ht(u)) {
          const e = () => {
            c[u] = l, ut(p, u) && (p[u] = l)
          };
          l ? (e.id = -1, $n(e, n)) : e()
        } else if (je(u)) {
          const e = () => {
            u.value = l
          };
          l ? (e.id = -1, $n(e, n)) : e()
        } else dt(u) && Ar(u, s, 12, [l, c])
      }

      function Rn(e, t, n, r = null) {
        Fr(e, t, 7, [n, r])
      }

      function On(e, t, n = !1) {
        const r = e.children,
          o = t.children;
        if (at(r) && at(o))
          for (let e = 0; e < r.length; e++) {
            const t = r[e];
            let i = o[e];
            1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || 32 === i.patchFlag) && (i = o[e] = ar(o[e]), i.el = t.el), n || On(t, i))
          }
      }
      const Tn = "components";

      function In(e, t) {
        return function (e, t, n = !0, r = !1) {
          const o = qt || vr;
          if (o) {
            const n = o.type;
            if (e === Tn) {
              const e = function (e) {
                return dt(e) && e.displayName || e.name
              }(n);
              if (e && (e === t || e === Ct(t) || e === Et(Ct(t)))) return n
            }
            const i = Mn(o[e] || n[e], t) || Mn(o.appContext[e], t);
            return !i && r ? n : i
          }
        }(Tn, e, !0, t) || e
      }
      const jn = Symbol();

      function Mn(e, t) {
        return e && (e[t] || e[Ct(t)] || e[Et(Ct(t))])
      }
      const Un = Symbol(void 0),
        Pn = Symbol(void 0),
        Nn = Symbol(void 0),
        Vn = Symbol(void 0),
        qn = [];
      let Hn = null;

      function Wn(e = !1) {
        qn.push(Hn = e ? null : [])
      }
      let Zn = 1;

      function Jn(e) {
        Zn += e
      }

      function Kn(e) {
        return e.dynamicChildren = Zn > 0 ? Hn || et : null, qn.pop(), Hn = qn[qn.length - 1] || null, Zn > 0 && Hn && Hn.push(e), e
      }

      function Qn(e, t, n, r, o, i) {
        return Kn(rr(e, t, n, r, o, i, !0))
      }

      function Yn(e, t, n, r, o) {
        return Kn(or(e, t, n, r, o, !0))
      }

      function Xn(e) {
        return !!e && !0 === e.__v_isVNode
      }

      function Gn(e, t) {
        return e.type === t.type && e.key === t.key
      }
      const er = "__vInternal",
        tr = ({
          key: e
        }) => null != e ? e : null,
        nr = ({
          ref: e
        }) => null != e ? ht(e) || je(e) || dt(e) ? {
          i: qt,
          r: e
        } : e : null;

      function rr(e, t = null, n = null, r = 0, o = null, i = (e === Un ? 0 : 1), l = !1, s = !1) {
        const u = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e,
          props: t,
          key: t && tr(t),
          ref: t && nr(t),
          scopeId: Ht,
          slotScopeIds: null,
          children: n,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: i,
          patchFlag: r,
          dynamicProps: o,
          dynamicChildren: null,
          appContext: null
        };
        return s ? (cr(u, n), 128 & i && e.normalize(u)) : n && (u.shapeFlag |= ht(n) ? 8 : 16), Zn > 0 && !l && Hn && (u.patchFlag > 0 || 6 & i) && 32 !== u.patchFlag && Hn.push(u), u
      }
      const or = function (e, t = null, n = null, r = 0, o = null, i = !1) {
        if (e && e !== jn || (e = Nn), Xn(e)) {
          const r = ir(e, t, !0);
          return n && cr(r, n), r
        }
        if (l = e, dt(l) && "__vccOpts" in l && (e = e.__vccOpts), t) {
          t = function (e) {
            return e ? $e(e) || er in e ? lt({}, e) : e : null
          }(t);
          let {
            class: e,
            style: n
          } = t;
          e && !ht(e) && (t.class = Qe(e)), ft(n) && ($e(n) && !at(n) && (n = lt({}, n)), t.style = We(n))
        }
        var l;
        return rr(e, t, n, r, o, ht(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : ft(e) ? 4 : dt(e) ? 2 : 0, i, !0)
      };

      function ir(e, t, n = !1) {
        const {
          props: r,
          ref: o,
          patchFlag: i,
          children: l
        } = e, s = t ? function (...e) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            for (const e in r)
              if ("class" === e) t.class !== r.class && (t.class = Qe([t.class, r.class]));
              else if ("style" === e) t.style = We([t.style, r.style]);
            else if (ot(e)) {
              const n = t[e],
                o = r[e];
              n !== o && (t[e] = n ? [].concat(n, o) : o)
            } else "" !== e && (t[e] = r[e])
          }
          return t
        }(r || {}, t) : r;
        return {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e.type,
          props: s,
          key: s && tr(s),
          ref: t && t.ref ? n && o ? at(o) ? o.concat(nr(t)) : [o, nr(t)] : nr(t) : o,
          scopeId: e.scopeId,
          slotScopeIds: e.slotScopeIds,
          children: l,
          target: e.target,
          targetAnchor: e.targetAnchor,
          staticCount: e.staticCount,
          shapeFlag: e.shapeFlag,
          patchFlag: t && e.type !== Un ? -1 === i ? 16 : 16 | i : i,
          dynamicProps: e.dynamicProps,
          dynamicChildren: e.dynamicChildren,
          appContext: e.appContext,
          dirs: e.dirs,
          transition: e.transition,
          component: e.component,
          suspense: e.suspense,
          ssContent: e.ssContent && ir(e.ssContent),
          ssFallback: e.ssFallback && ir(e.ssFallback),
          el: e.el,
          anchor: e.anchor
        }
      }

      function lr(e = " ", t = 0) {
        return or(Pn, null, e, t)
      }

      function sr(e = "", t = !1) {
        return t ? (Wn(), Yn(Nn, null, e)) : or(Nn, null, e)
      }

      function ur(e) {
        return null == e || "boolean" == typeof e ? or(Nn) : at(e) ? or(Un, null, e.slice()) : "object" == typeof e ? ar(e) : or(Pn, null, String(e))
      }

      function ar(e) {
        return null === e.el || e.memo ? e : ir(e)
      }

      function cr(e, t) {
        let n = 0;
        const {
          shapeFlag: r
        } = e;
        if (null == t) t = null;
        else if (at(t)) n = 16;
        else if ("object" == typeof t) {
          if (65 & r) {
            const n = t.default;
            return void(n && (n._c && (n._d = !1), cr(e, n()), n._c && (n._d = !0)))
          } {
            n = 32;
            const r = t._;
            r || er in t ? 3 === r && qt && (1 === qt.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = qt
          }
        } else dt(t) ? (t = {
          default: t,
          _ctx: qt
        }, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [lr(t)]) : n = 8);
        e.children = t, e.shapeFlag |= n
      }

      function pr(e, t, n, r) {
        let o;
        const i = n && n[r];
        if (at(e) || ht(e)) {
          o = new Array(e.length);
          for (let n = 0, r = e.length; n < r; n++) o[n] = t(e[n], n, void 0, i && i[n])
        } else if ("number" == typeof e) {
          o = new Array(e);
          for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, i && i[n])
        } else if (ft(e))
          if (e[Symbol.iterator]) o = Array.from(e, ((e, n) => t(e, n, void 0, i && i[n])));
          else {
            const n = Object.keys(e);
            o = new Array(n.length);
            for (let r = 0, l = n.length; r < l; r++) {
              const l = n[r];
              o[r] = t(e[l], l, r, i && i[r])
            }
          } else o = [];
        return n && (n[r] = o), o
      }
      const dr = e => e ? wr(e) ? Er(e) || e.proxy : dr(e.parent) : null,
        hr = lt(Object.create(null), {
          $: e => e,
          $el: e => e.vnode.el,
          $data: e => e.data,
          $props: e => e.props,
          $attrs: e => e.attrs,
          $slots: e => e.slots,
          $refs: e => e.refs,
          $parent: e => dr(e.parent),
          $root: e => dr(e.root),
          $emit: e => e.emit,
          $options: e => e.type,
          $forceUpdate: e => () => Vr(e.update),
          $nextTick: e => Nr.bind(e.proxy),
          $watch: e => tt
        }),
        fr = {
          get({
            _: e
          }, t) {
            const {
              ctx: n,
              setupState: r,
              data: o,
              props: i,
              accessCache: l,
              type: s,
              appContext: u
            } = e;
            let a;
            if ("$" !== t[0]) {
              const s = l[t];
              if (void 0 !== s) switch (s) {
              case 0:
                return r[t];
              case 1:
                return o[t];
              case 3:
                return n[t];
              case 2:
                return i[t]
              } else {
                if (r !== Ge && ut(r, t)) return l[t] = 0, r[t];
                if (o !== Ge && ut(o, t)) return l[t] = 1, o[t];
                if ((a = e.propsOptions[0]) && ut(a, t)) return l[t] = 2, i[t];
                if (n !== Ge && ut(n, t)) return l[t] = 3, n[t];
                l[t] = 4
              }
            }
            const c = hr[t];
            let p, d;
            return c ? ("$attrs" === t && j(e, 0, t), c(e)) : (p = s.__cssModules) && (p = p[t]) ? p : n !== Ge && ut(n, t) ? (l[t] = 3, n[t]) : (d = u.config.globalProperties, ut(d, t) ? d[t] : void 0)
          }, set({
            _: e
          }, t, n) {
            const {
              data: r,
              setupState: o,
              ctx: i
            } = e;
            if (o !== Ge && ut(o, t)) o[t] = n;
            else if (r !== Ge && ut(r, t)) r[t] = n;
            else if (ut(e.props, t)) return !1;
            return !("$" === t[0] && t.slice(1) in e || (i[t] = n, 0))
          }, has({
            _: {
              data: e,
              setupState: t,
              accessCache: n,
              ctx: r,
              appContext: o,
              propsOptions: i
            }
          }, l) {
            let s;
            return void 0 !== n[l] || e !== Ge && ut(e, l) || t !== Ge && ut(t, l) || (s = i[0]) && ut(s, l) || ut(r, l) || ut(hr, l) || ut(o.config.globalProperties, l)
          }
        },
        mr = _n();
      let gr = 0;
      let vr = null;
      const Dr = () => vr || qt,
        yr = e => {
          vr = e, e.scope.on()
        },
        br = () => {
          vr && vr.scope.off(), vr = null
        };

      function wr(e) {
        return 4 & e.vnode.shapeFlag
      }
      let Cr = !1;

      function kr(e, t, n) {
        dt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ft(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), e.setupState = Ne(t)), xr(e, n)
      }

      function xr(e, t, n) {
        const r = e.type;
        e.render || (e.render = r.render || tt)
      }

      function Er(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Ne(Le(e.exposed)), {
          get: (t, n) => n in t ? t[n] : n in hr ? hr[n](e) : void 0
        }))
      }

      function Ar(e, t, n, r) {
        let o;
        try {
          o = r ? e(...r) : e()
        } catch (e) {
          _r(e, t, n)
        }
        return o
      }

      function Fr(e, t, n, r) {
        if (dt(e)) {
          const o = Ar(e, t, n, r);
          return o && mt(o) && o.catch((e => {
            _r(e, t, n)
          })), o
        }
        const o = [];
        for (let i = 0; i < e.length; i++) o.push(Fr(e[i], t, n, r));
        return o
      }

      function _r(e, t, n, r = !0) {
        if (t && t.vnode, t) {
          let r = t.parent;
          const o = t.proxy,
            i = n;
          for (; r;) {
            const t = r.ec;
            if (t)
              for (let n = 0; n < t.length; n++)
                if (!1 === t[n](e, o, i)) return;
            r = r.parent
          }
          const l = t.appContext.config.errorHandler;
          if (l) return void Ar(l, null, 10, [e, o, i])
        }! function (e, t, n, r = !0) {
          console.error(e)
        }(e, 0, 0, r)
      }
      let Br = !1,
        Sr = !1;
      const $r = [];
      let zr = 0;
      const Lr = [];
      let Rr = null,
        Or = 0;
      const Tr = [];
      let Ir = null,
        jr = 0;
      const Mr = Promise.resolve();
      let Ur = null,
        Pr = null;

      function Nr(e) {
        const t = Ur || Mr;
        return e ? t.then(this ? e.bind(this) : e) : t
      }

      function Vr(e) {
        $r.length && $r.includes(e, Br && e.allowRecurse ? zr + 1 : zr) || e === Pr || (null == e.id ? $r.push(e) : $r.splice(function (e) {
          let t = zr + 1,
            n = $r.length;
          for (; t < n;) {
            const r = t + n >>> 1;
            Jr($r[r]) < e ? t = r + 1 : n = r
          }
          return t
        }(e.id), 0, e), qr())
      }

      function qr() {
        Br || Sr || (Sr = !0, Ur = Mr.then(Kr))
      }

      function Hr(e, t, n, r) {
        at(e) ? n.push(...e) : t && t.includes(e, e.allowRecurse ? r + 1 : r) || n.push(e), qr()
      }

      function Wr(e, t = null) {
        if (Lr.length) {
          for (Pr = t, Rr = [...new Set(Lr)], Lr.length = 0, Or = 0; Or < Rr.length; Or++) Rr[Or]();
          Rr = null, Or = 0, Pr = null, Wr(e, t)
        }
      }

      function Zr(e) {
        if (Tr.length) {
          const e = [...new Set(Tr)];
          if (Tr.length = 0, Ir) return void Ir.push(...e);
          for (Ir = e, Ir.sort(((e, t) => Jr(e) - Jr(t))), jr = 0; jr < Ir.length; jr++) Ir[jr]();
          Ir = null, jr = 0
        }
      }
      const Jr = e => null == e.id ? 1 / 0 : e.id;

      function Kr(e) {
        Sr = !1, Br = !0, Wr(e), $r.sort(((e, t) => Jr(e) - Jr(t)));
        try {
          for (zr = 0; zr < $r.length; zr++) {
            const e = $r[zr];
            e && !1 !== e.active && Ar(e, null, 14)
          }
        } finally {
          zr = 0, $r.length = 0, Zr(), Br = !1, Ur = null, ($r.length || Lr.length || Tr.length) && Kr(e)
        }
      }
      const Qr = {};

      function Yr(e, t, n) {
        return function (e, t, {
          immediate: n,
          deep: r,
          flush: o,
          onTrack: i,
          onTrigger: l
        } = Ge) {
          const s = vr;
          let u, a, c = !1,
            p = !1;
          if (je(e) ? (u = () => e.value, c = !!e._shallow) : Be(e) ? (u = () => e, r = !0) : at(e) ? (p = !0, c = e.some(Be), u = () => e.map((e => je(e) ? e.value : Be(e) ? Xr(e) : dt(e) ? Ar(e, s, 2) : void 0))) : u = dt(e) ? t ? () => Ar(e, s, 2) : () => {
            if (!s || !s.isUnmounted) return a && a(), Fr(e, s, 3, [d])
          } : tt, t && r) {
            const e = u;
            u = () => Xr(e())
          }
          let d = e => {
            a = g.onStop = () => {
              Ar(e, s, 4)
            }
          };
          if (Cr) return d = tt, t ? n && Fr(t, s, 3, [u(), p ? [] : void 0, d]) : u(), tt;
          let h = p ? [] : Qr;
          const f = () => {
            if (g.active)
              if (t) {
                const e = g.run();
                (r || c || (p ? e.some(((e, t) => Ft(e, h[t]))) : Ft(e, h))) && (a && a(), Fr(t, s, 3, [e, h === Qr ? void 0 : h, d]), h = e)
              } else g.run()
          };
          let m;
          f.allowRecurse = !!t, m = "sync" === o ? f : "post" === o ? () => $n(f, s && s.suspense) : () => {
            !s || s.isMounted ? function (e) {
              Hr(e, Rr, Lr, Or)
            }(f) : f()
          };
          const g = new z(u, m);
          return t ? n ? f() : h = g.run() : "post" === o ? $n(g.run.bind(g), s && s.suspense) : g.run(), () => {
            g.stop(), s && s.scope && ((e, t) => {
              const n = e.indexOf(t);
              n > -1 && e.splice(n, 1)
            })(s.scope.effects, g)
          }
        }(e, t, n)
      }

      function Xr(e, t) {
        if (!ft(e) || e.__v_skip) return e;
        if ((t = t || new Set).has(e)) return e;
        if (t.add(e), je(e)) Xr(e.value, t);
        else if (at(e))
          for (let n = 0; n < e.length; n++) Xr(e[n], t);
        else if (pt(e) || ct(e)) e.forEach((e => {
          Xr(e, t)
        }));
        else if (Dt(e))
          for (const n in e) Xr(e[n], t);
        return e
      }

      function Gr(e, t, n) {
        const r = arguments.length;
        return 2 === r ? ft(t) && !at(t) ? Xn(t) ? or(e, null, [t]) : or(e, t) : or(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === r && Xn(n) && (n = [n]), or(e, t, n))
      }
      Symbol("");
      const eo = "3.2.19";

      function to(e, t) {
        const n = Object.create(null),
          r = e.split(",");
        for (let e = 0; e < r.length; e++) n[r[e]] = !0;
        return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
      }
      const no = to("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

      function ro(e) {
        return !!e || "" === e
      }

      function oo(e, t) {
        if (e === t) return !0;
        let n = co(e),
          r = co(t);
        if (n || r) return !(!n || !r) && e.getTime() === t.getTime();
        if (n = uo(e), r = uo(t), n || r) return !(!n || !r) && function (e, t) {
          if (e.length !== t.length) return !1;
          let n = !0;
          for (let r = 0; n && r < e.length; r++) n = oo(e[r], t[r]);
          return n
        }(e, t);
        if (n = fo(e), r = fo(t), n || r) {
          if (!n || !r) return !1;
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (const n in e) {
            const r = e.hasOwnProperty(n),
              o = t.hasOwnProperty(n);
            if (r && !o || !r && o || !oo(e[n], t[n])) return !1
          }
        }
        return String(e) === String(t)
      }

      function io(e, t) {
        return e.findIndex((e => oo(e, t)))
      }
      const lo = /^on[^a-z]/,
        so = Object.assign,
        uo = (Object.prototype.hasOwnProperty, Array.isArray),
        ao = e => "[object Set]" === go(e),
        co = e => e instanceof Date,
        po = e => "function" == typeof e,
        ho = e => "string" == typeof e,
        fo = e => null !== e && "object" == typeof e,
        mo = Object.prototype.toString,
        go = e => mo.call(e),
        vo = e => {
          const t = Object.create(null);
          return n => t[n] || (t[n] = e(n))
        },
        Do = /-(\w)/g,
        yo = (vo((e => e.replace(Do, ((e, t) => t ? t.toUpperCase() : "")))), /\B([A-Z])/g),
        bo = vo((e => e.replace(yo, "-$1").toLowerCase())),
        wo = vo((e => e.charAt(0).toUpperCase() + e.slice(1))),
        Co = (vo((e => e ? `on${wo(e)}` : "")), e => {
          const t = parseFloat(e);
          return isNaN(t) ? e : t
        }),
        ko = "undefined" != typeof document ? document : null,
        xo = new Map,
        Eo = {
          insert: (e, t, n) => {
            t.insertBefore(e, n || null)
          }, remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
          }, createElement: (e, t, n, r) => {
            const o = t ? ko.createElementNS("http://www.w3.org/2000/svg", e) : ko.createElement(e, n ? {
              is: n
            } : void 0);
            return "select" === e && r && null != r.multiple && o.setAttribute("multiple", r.multiple), o
          }, createText: e => ko.createTextNode(e),
          createComment: e => ko.createComment(e),
          setText: (e, t) => {
            e.nodeValue = t
          }, setElementText: (e, t) => {
            e.textContent = t
          }, parentNode: e => e.parentNode,
          nextSibling: e => e.nextSibling,
          querySelector: e => ko.querySelector(e),
          setScopeId(e, t) {
            e.setAttribute(t, "")
          },
          cloneNode(e) {
            const t = e.cloneNode(!0);
            return "_value" in e && (t._value = e._value), t
          },
          insertStaticContent(e, t, n, r) {
            const o = n ? n.previousSibling : t.lastChild;
            let i = xo.get(e);
            if (!i) {
              const t = ko.createElement("template");
              if (t.innerHTML = r ? `<svg>${e}</svg>` : e, i = t.content, r) {
                const e = i.firstChild;
                for (; e.firstChild;) i.appendChild(e.firstChild);
                i.removeChild(e)
              }
              xo.set(e, i)
            }
            return t.insertBefore(i.cloneNode(!0), n), [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
          }
        },
        Ao = /\s*!important$/;

      function Fo(e, t, n) {
        if (uo(n)) n.forEach((n => Fo(e, t, n)));
        else if (t.startsWith("--")) e.setProperty(t, n);
        else {
          const r = function (e, t) {
            const n = Bo[t];
            if (n) return n;
            let r = Ct(t);
            if ("filter" !== r && r in e) return Bo[t] = r;
            r = wo(r);
            for (let n = 0; n < _o.length; n++) {
              const o = _o[n] + r;
              if (o in e) return Bo[t] = o
            }
            return t
          }(e, t);
          Ao.test(n) ? e.setProperty(bo(r), n.replace(Ao, ""), "important") : e[r] = n
        }
      }
      const _o = ["Webkit", "Moz", "ms"],
        Bo = {},
        So = "http://www.w3.org/1999/xlink";
      let $o = Date.now,
        zo = !1;
      if ("undefined" != typeof window) {
        $o() > document.createEvent("Event").timeStamp && ($o = () => performance.now());
        const e = navigator.userAgent.match(/firefox\/(\d+)/i);
        zo = !!(e && Number(e[1]) <= 53)
      }
      let Lo = 0;
      const Ro = Promise.resolve(),
        Oo = () => {
          Lo = 0
        };

      function To(e, t, n, r) {
        e.addEventListener(t, n, r)
      }
      const Io = /(?:Once|Passive|Capture)$/,
        jo = /^on[a-z]/;
      "undefined" != typeof HTMLElement && HTMLElement;
      const Mo = "transition",
        Uo = "animation",
        Po = (e, {
          slots: t
        }) => Gr(Gt, function (e) {
          const t = {};
          for (const n in e) n in No || (t[n] = e[n]);
          if (!1 === e.css) return t;
          const {
            name: n = "v",
            type: r,
            duration: o,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: l = `${n}-enter-active`,
            enterToClass: s = `${n}-enter-to`,
            appearFromClass: u = i,
            appearActiveClass: a = l,
            appearToClass: c = s,
            leaveFromClass: p = `${n}-leave-from`,
            leaveActiveClass: d = `${n}-leave-active`,
            leaveToClass: h = `${n}-leave-to`
          } = e, f = function (e) {
            if (null == e) return null;
            if (fo(e)) return [Ho(e.enter), Ho(e.leave)]; {
              const t = Ho(e);
              return [t, t]
            }
          }(o), m = f && f[0], g = f && f[1], {
            onBeforeEnter: v,
            onEnter: D,
            onEnterCancelled: y,
            onLeave: b,
            onLeaveCancelled: w,
            onBeforeAppear: C = v,
            onAppear: k = D,
            onAppearCancelled: x = y
          } = t, E = (e, t, n) => {
            Zo(e, t ? c : s), Zo(e, t ? a : l), n && n()
          }, A = (e, t) => {
            Zo(e, h), Zo(e, d), t && t()
          }, F = e => (t, n) => {
            const o = e ? k : D,
              l = () => E(t, e, n);
            Vo(o, [t, l]), Jo((() => {
              Zo(t, e ? u : i), Wo(t, e ? c : s), qo(o) || Qo(t, r, m, l)
            }))
          };
          return so(t, {
            onBeforeEnter(e) {
              Vo(v, [e]), Wo(e, i), Wo(e, l)
            }, onBeforeAppear(e) {
              Vo(C, [e]), Wo(e, u), Wo(e, a)
            }, onEnter: F(!1), onAppear: F(!0), onLeave(e, t) {
              const n = () => A(e, t);
              Wo(e, p), document.body.offsetHeight, Wo(e, d), Jo((() => {
                Zo(e, p), Wo(e, h), qo(b) || Qo(e, r, g, n)
              })), Vo(b, [e, n])
            }, onEnterCancelled(e) {
              E(e, !1), Vo(y, [e])
            }, onAppearCancelled(e) {
              E(e, !0), Vo(x, [e])
            }, onLeaveCancelled(e) {
              A(e), Vo(w, [e])
            }
          })
        }(e), t);
      Po.displayName = "Transition";
      const No = {
          name: String,
          type: String,
          css: {
            type: Boolean,
            default: !0
          },
          duration: [String, Number, Object],
          enterFromClass: String,
          enterActiveClass: String,
          enterToClass: String,
          appearFromClass: String,
          appearActiveClass: String,
          appearToClass: String,
          leaveFromClass: String,
          leaveActiveClass: String,
          leaveToClass: String
        },
        Vo = (Po.props = so({}, Gt.props, No), (e, t = []) => {
          uo(e) ? e.forEach((e => e(...t))) : e && e(...t)
        }),
        qo = e => !!e && (uo(e) ? e.some((e => e.length > 1)) : e.length > 1);

      function Ho(e) {
        return Co(e)
      }

      function Wo(e, t) {
        t.split(/\s+/).forEach((t => t && e.classList.add(t))), (e._vtc || (e._vtc = new Set)).add(t)
      }

      function Zo(e, t) {
        t.split(/\s+/).forEach((t => t && e.classList.remove(t)));
        const {
          _vtc: n
        } = e;
        n && (n.delete(t), n.size || (e._vtc = void 0))
      }

      function Jo(e) {
        requestAnimationFrame((() => {
          requestAnimationFrame(e)
        }))
      }
      let Ko = 0;

      function Qo(e, t, n, r) {
        const o = e._endId = ++Ko,
          i = () => {
            o === e._endId && r()
          };
        if (n) return setTimeout(i, n);
        const {
          type: l,
          timeout: s,
          propCount: u
        } = function (e, t) {
          const n = window.getComputedStyle(e),
            r = e => (n[e] || "").split(", "),
            o = r("transitionDelay"),
            i = r("transitionDuration"),
            l = Yo(o, i),
            s = r("animationDelay"),
            u = r("animationDuration"),
            a = Yo(s, u);
          let c = null,
            p = 0,
            d = 0;
          return t === Mo ? l > 0 && (c = Mo, p = l, d = i.length) : t === Uo ? a > 0 && (c = Uo, p = a, d = u.length) : (p = Math.max(l, a), c = p > 0 ? l > a ? Mo : Uo : null, d = c ? c === Mo ? i.length : u.length : 0), {
            type: c,
            timeout: p,
            propCount: d,
            hasTransform: c === Mo && /\b(transform|all)(,|$)/.test(n.transitionProperty)
          }
        }(e, t);
        if (!l) return r();
        const a = l + "end";
        let c = 0;
        const p = () => {
            e.removeEventListener(a, d), i()
          },
          d = t => {
            t.target === e && ++c >= u && p()
          };
        setTimeout((() => {
          c < u && p()
        }), s + 1), e.addEventListener(a, d)
      }

      function Yo(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map(((t, n) => Xo(t) + Xo(e[n]))))
      }

      function Xo(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
      }
      new WeakMap, new WeakMap;
      const Go = e => {
        const t = e.props["onUpdate:modelValue"];
        return uo(t) ? e => ((e, t) => {
          for (let n = 0; n < e.length; n++) e[n](t)
        })(t, e) : t
      };

      function ei(e) {
        e.target.composing = !0
      }

      function ti(e) {
        const t = e.target;
        t.composing && (t.composing = !1, function (e, t) {
          const n = document.createEvent("HTMLEvents");
          n.initEvent("input", !0, !0), e.dispatchEvent(n)
        }(t))
      }
      const ni = {
          created(e, {
            modifiers: {
              lazy: t,
              trim: n,
              number: r
            }
          }, o) {
            e._assign = Go(o);
            const i = r || o.props && "number" === o.props.type;
            To(e, t ? "change" : "input", (t => {
              if (t.target.composing) return;
              let r = e.value;
              n ? r = r.trim() : i && (r = Co(r)), e._assign(r)
            })), n && To(e, "change", (() => {
              e.value = e.value.trim()
            })), t || (To(e, "compositionstart", ei), To(e, "compositionend", ti), To(e, "change", ti))
          }, mounted(e, {
            value: t
          }) {
            e.value = null == t ? "" : t
          }, beforeUpdate(e, {
            value: t,
            modifiers: {
              lazy: n,
              trim: r,
              number: o
            }
          }, i) {
            if (e._assign = Go(i), e.composing) return;
            if (document.activeElement === e) {
              if (n) return;
              if (r && e.value.trim() === t) return;
              if ((o || "number" === e.type) && Co(e.value) === t) return
            }
            const l = null == t ? "" : t;
            e.value !== l && (e.value = l)
          }
        },
        ri = {
          deep: !0,
          created(e, t, n) {
            e._assign = Go(n), To(e, "change", (() => {
              const t = e._modelValue,
                n = ui(e),
                r = e.checked,
                o = e._assign;
              if (uo(t)) {
                const e = io(t, n),
                  i = -1 !== e;
                if (r && !i) o(t.concat(n));
                else if (!r && i) {
                  const n = [...t];
                  n.splice(e, 1), o(n)
                }
              } else if (ao(t)) {
                const e = new Set(t);
                r ? e.add(n) : e.delete(n), o(e)
              } else o(ai(e, r))
            }))
          },
          mounted: oi,
          beforeUpdate(e, t, n) {
            e._assign = Go(n), oi(e, t, n)
          }
        };

      function oi(e, {
        value: t,
        oldValue: n
      }, r) {
        e._modelValue = t, uo(t) ? e.checked = io(t, r.props.value) > -1 : ao(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = oo(t, ai(e, !0)))
      }
      const ii = {
          created(e, {
            value: t
          }, n) {
            e.checked = oo(t, n.props.value), e._assign = Go(n), To(e, "change", (() => {
              e._assign(ui(e))
            }))
          }, beforeUpdate(e, {
            value: t,
            oldValue: n
          }, r) {
            e._assign = Go(r), t !== n && (e.checked = oo(t, r.props.value))
          }
        },
        li = {
          deep: !0,
          created(e, {
            value: t,
            modifiers: {
              number: n
            }
          }, r) {
            const o = ao(t);
            To(e, "change", (() => {
              const t = Array.prototype.filter.call(e.options, (e => e.selected)).map((e => n ? Co(ui(e)) : ui(e)));
              e._assign(e.multiple ? o ? new Set(t) : t : t[0])
            })), e._assign = Go(r)
          },
          mounted(e, {
            value: t
          }) {
            si(e, t)
          },
          beforeUpdate(e, t, n) {
            e._assign = Go(n)
          },
          updated(e, {
            value: t
          }) {
            si(e, t)
          }
        };

      function si(e, t) {
        const n = e.multiple;
        if (!n || uo(t) || ao(t)) {
          for (let r = 0, o = e.options.length; r < o; r++) {
            const o = e.options[r],
              i = ui(o);
            if (n) uo(t) ? o.selected = io(t, i) > -1 : o.selected = t.has(i);
            else if (oo(ui(o), t)) return void(e.selectedIndex !== r && (e.selectedIndex = r))
          }
          n || -1 === e.selectedIndex || (e.selectedIndex = -1)
        }
      }

      function ui(e) {
        return "_value" in e ? e._value : e.value
      }

      function ai(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t
      }
      const ci = {
        created(e, t, n) {
          pi(e, t, n, null, "created")
        }, mounted(e, t, n) {
          pi(e, t, n, null, "mounted")
        }, beforeUpdate(e, t, n, r) {
          pi(e, t, n, r, "beforeUpdate")
        }, updated(e, t, n, r) {
          pi(e, t, n, r, "updated")
        }
      };

      function pi(e, t, n, r, o) {
        let i;
        switch (e.tagName) {
        case "SELECT":
          i = li;
          break;
        case "TEXTAREA":
          i = ni;
          break;
        default:
          switch (n.props && n.props.type) {
          case "checkbox":
            i = ri;
            break;
          case "radio":
            i = ii;
            break;
          default:
            i = ni
          }
        }
        const l = i[o];
        l && l(e, t, n, r)
      }
      const di = so({
        patchProp: (e, t, n, r, o = !1, i, l, s, u) => {
          "class" === t ? function (e, t, n) {
            const r = e._vtc;
            r && (t = (t ? [t, ...r] : [...r]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
          }(e, r, o) : "style" === t ? function (e, t, n) {
            const r = e.style,
              o = r.display;
            if (n)
              if (ho(n)) t !== n && (r.cssText = n);
              else {
                for (const e in n) Fo(r, e, n[e]);
                if (t && !ho(t))
                  for (const e in t) null == n[e] && Fo(r, e, "")
              } else e.removeAttribute("style");
            "_vod" in e && (r.display = o)
          }(e, n, r) : (e => lo.test(e))(t) ? (e => e.startsWith("onUpdate:"))(t) || function (e, t, n, r, o = null) {
            const i = e._vei || (e._vei = {}),
              l = i[t];
            if (r && l) l.value = r;
            else {
              const [n, s] = function (e) {
                let t;
                if (Io.test(e)) {
                  let n;
                  for (t = {}; n = e.match(Io);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
                }
                return [bo(e.slice(2)), t]
              }(t);
              if (r) {
                const l = i[t] = function (e, t) {
                  const n = e => {
                    const r = e.timeStamp || $o();
                    (zo || r >= n.attached - 1) && Fr(function (e, t) {
                      if (uo(t)) {
                        const n = e.stopImmediatePropagation;
                        return e.stopImmediatePropagation = () => {
                          n.call(e), e._stopped = !0
                        }, t.map((e => t => !t._stopped && e(t)))
                      }
                      return t
                    }(e, n.value), t, 5, [e])
                  };
                  return n.value = e, n.attached = Lo || (Ro.then(Oo), Lo = $o()), n
                }(r, o);
                To(e, n, l, s)
              } else l && (function (e, t, n, r) {
                e.removeEventListener(t, n, r)
              }(e, n, l, s), i[t] = void 0)
            }
          }(e, t, 0, r, l) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : function (e, t, n, r) {
            return r ? "innerHTML" === t || "textContent" === t || !!(t in e && jo.test(t) && po(n)) : "spellcheck" !== t && "draggable" !== t && ("form" !== t && (("list" !== t || "INPUT" !== e.tagName) && (("type" !== t || "TEXTAREA" !== e.tagName) && ((!jo.test(t) || !ho(n)) && t in e))))
          }(e, t, r, o)) ? function (e, t, n, r, o, i, l) {
            if ("innerHTML" === t || "textContent" === t) return r && l(r, o, i), void(e[t] = null == n ? "" : n);
            if ("value" === t && "PROGRESS" !== e.tagName) {
              e._value = n;
              const r = null == n ? "" : n;
              return e.value !== r && (e.value = r), void(null == n && e.removeAttribute(t))
            }
            if ("" === n || null == n) {
              const r = typeof e[t];
              if ("boolean" === r) return void(e[t] = ro(n));
              if (null == n && "string" === r) return e[t] = "", void e.removeAttribute(t);
              if ("number" === r) {
                try {
                  e[t] = 0
                } catch (e) {}
                return void e.removeAttribute(t)
              }
            }
            try {
              e[t] = n
            } catch (e) {}
          }(e, t, r, i, l, s, u) : ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), function (e, t, n, r, o) {
            if (r && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(So, t.slice(6, t.length)) : e.setAttributeNS(So, t, n);
            else {
              const r = no(t);
              null == n || r && !ro(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
            }
          }(e, t, r, o))
        }
      }, Eo);
      let hi;
      const fi = (e, t, n = "") => "object" == typeof e && e.errno ? (console.error(`Fetch ${n} failed with ${e.errno}: ${e.errmsg}`), t) : e,
        mi = e => {
          try {
            e = decodeURI(e)
          } catch (e) {}
          return e
        },
        gi = (e = "") => e.replace(/\/$/u, ""),
        vi = ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
        Di = ["nick", "mail", "link"],
        yi = e => e && vi.includes(e) ? e : "mp",
        bi = e => e.filter((e => Di.includes(e))),
        wi = e => {
          const t = new FormData;
          return t.append("image", e), fetch("https://pic.alexhchu.com/api/upload", {
            method: "POST",
            body: t
          }).then((e => e.json())).then((e => e.data.url))
        },
        Ci = {
          nick: "NickName",
          nickError: "NickName cannot be less than 3 bytes.",
          mail: "E-Mail",
          mailError: "Please confirm your email address.",
          link: "Website",
          placeholder: "Comment here...",
          sofa: "No comment yet.",
          submit: "Submit",
          reply: "Reply",
          cancelReply: "Cancel reply",
          comment: "Comments",
          more: "Load More...",
          preview: "Preview",
          emoji: "Emoji",
          uploadImage: "Upload Image",
          seconds: "seconds ago",
          minutes: "minutes ago",
          hours: "hours ago",
          days: "days ago",
          now: "just now",
          uploading: "Uploading",
          login: "Login",
          logout: "logout",
          admin: "Admin",
          sticky: "Sticky",
          word: "Words",
          wordHint: "Please input comments between $0 and $1 words!\n Current word number: $2"
        },
        ki = {
          nick: "ニックネーム",
          nickError: "3バイト以上のニックネームをご入力ください.",
          mail: "メールアドレス",
          mailError: "メールアドレスをご確認ください.",
          link: "サイト(http://)",
          placeholder: "ここにコメント",
          sofa: "コメントしましょう~",
          submit: "提出する",
          reply: "返信する",
          cancelReply: "キャンセル",
          comment: "コメント",
          more: "さらに読み込む...",
          preview: "プレビュー",
          uploadImage: "画像をアップロード",
          emoji: "絵文字",
          seconds: "秒前",
          minutes: "分前",
          hours: "時間前",
          days: "日前",
          now: "たっだ今",
          uploading: "アップロード",
          login: "ログインする",
          logout: "ログアウト",
          admin: "管理者",
          sticky: "トップに置く",
          word: "ワード",
          wordHint: "コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2"
        },
        xi = {
          nick: "昵称",
          nickError: "昵称不能少于3个字符",
          mail: "邮箱",
          mailError: "请填写正确的邮件地址",
          link: "网址",
          placeholder: "欢迎评论",
          sofa: "来发评论吧~",
          submit: "提交",
          reply: "回复",
          cancelReply: "取消回复",
          comment: "评论",
          more: "加载更多...",
          preview: "预览",
          emoji: "表情",
          uploadImage: "上传图片",
          seconds: "秒前",
          minutes: "分钟前",
          hours: "小时前",
          days: "天前",
          now: "刚刚",
          uploading: "正在上传",
          login: "登录",
          logout: "退出",
          admin: "博主",
          sticky: "置顶",
          word: "字",
          wordHint: "评论字数应在 $0 到 $1 字之间！\n当前字数：$2"
        },
        Ei = {
          zh: xi,
          "zh-cn": xi,
          "zh-CN": xi,
          "zh-TW": {
            nick: "暱稱",
            mail: "郵箱",
            link: "網址",
            nickError: "暱稱不能少於3個字元",
            mailError: "請填寫正確的郵件地址",
            placeholder: "歡迎評論",
            sofa: "來發評論吧~",
            submit: "提交",
            reply: "回覆",
            cancelReply: "取消回覆",
            comment: "評論",
            more: "載入更多...",
            preview: "預覽",
            uploadImage: "上傳圖片",
            emoji: "表情",
            seconds: "秒前",
            minutes: "分鐘前",
            hours: "小時前",
            days: "天前",
            now: "剛剛",
            uploading: "正在上傳",
            login: "登錄",
            logout: "退出",
            admin: "博主",
            sticky: "置頂",
            word: "字",
            wordHint: "評論字數應在 $0 到 $1 字之間！\n當前字數：$2"
          },
          en: Ci,
          "en-US": Ci,
          jp: ki,
          "jp-JP": ki,
          "pt-BR": {
            nick: "Apelido",
            nickError: "Apelido não pode ser menor que 3 bytes.",
            mail: "E-Mail",
            mailError: "Por favor, confirme seu endereço de e-mail.",
            link: "Website",
            placeholder: "Comente aqui...",
            sofa: "Nenhum comentário, ainda.",
            submit: "Enviar",
            reply: "Responder",
            cancelReply: "Cancelar resposta",
            comment: "Comentários",
            more: "Carregar Mais...",
            preview: "Visualizar",
            emoji: "Emoji",
            uploadImage: "Enviar Imagem",
            seconds: "segundos atrás",
            minutes: "minutos atrás",
            hours: "horas atrás",
            days: "dias atrás",
            now: "agora mesmo",
            uploading: "Enviando",
            login: "Entrar",
            logout: "Sair",
            admin: "Admin",
            sticky: "Sticky",
            word: "Palavras",
            wordHint: "Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2"
          }
        },
        Ai = e => {
          let t = {};
          const n = localStorage.getItem(e);
          if (n) try {
            t = JSON.parse(n)
          } catch (e) {}
          return {
            get: e => t[e] || null,
            set(n, r) {
              try {
                t[n] = JSON.parse(JSON.stringify(r)), localStorage.setItem(e, JSON.stringify(t))
              } catch (e) {}
            },
            update(n) {
              t = JSON.parse(JSON.stringify(n)), localStorage.setItem(e, JSON.stringify(t))
            }
          }
        };
      let Fi;
      const _i = (e, t, n = "", r = "") => `${t}/${n}${e}${r?`.$ {
        r
      }
      `:""}`, Bi = ({
        el: e = "#waline",
        serverURL: t,
        placeholder: n,
        langMode: r,
        emojiCDN: o,
        emojiMaps: i,
        requiredFields: l = [],
        anonymous: s,
        avatarCDN: u,
        avatar: a,
        avatarForce: c,
        path: p = location.pathname,
        lang: d = "zh-CN",
        locale: h = r,
        emoji: f = ["https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo"],
        meta: m = ["nick", "mail", "link"],
        requiredMeta: g = l,
        pageSize: v = 10,
        wordLimit: D,
        uploadImage: y,
        copyright: b = !0,
        login: w = (!0 === s ? "disable" : !1 === s ? "force" : "enable"),
        ...C
      }) => {
        const k = Ei[d] || Ei["zh-CN"];
        n && (k.placeholder = n);
        const x = o && "object" == typeof i ? Promise.resolve(((e, t = "") => {
          const n = {};
          for (const r in e) n[r] = /(?:https?:)?\/\//.test(e[r]) ? e[r] : `${t}${e[r]}`;
          return {
            tabs: [{
              name: "Emoji",
              icon: Object.values(n).pop() || "",
              items: Object.keys(n)
            }],
            map: n
          }
        })(i, o)) : (E = f, Promise.all(E.map((e => "string" == typeof e ? (e => {
          Fi || (Fi = Ai("WALINE_EMOJI"));
          const t = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));
          if (t) {
            const t = Fi.get(e);
            if (t) return Promise.resolve(t)
          }
          return fetch(`${e}/info.json`).then((e => e.json())).then((n => {
            const r = {
              folder: e,
              ...n
            };
            return t && Fi.set(e, r), r
          }))
        })(gi(e)) : Promise.resolve(e)))).then((e => {
          const t = {
            tabs: [],
            map: {}
          };
          return e.forEach((e => {
            const {
              name: n,
              folder: r,
              icon: o,
              prefix: i,
              type: l,
              items: s
            } = e;
            t.tabs.push({
              name: n,
              icon: _i(o, r, i, l),
              items: s.map((e => {
                const n = `${i||""}${e}`;
                return t.map[n] = _i(e, r, i, l), n
              }))
            })
          })), t
        })));
        var E;
        return {
          el: e,
          serverURL: gi(t),
          path: mi(p),
          lang: d,
          locale: {...k, ...
            "object" == typeof h ? h : {}
          },
          emoji: x,
          wordLimit: Array.isArray(D) ? D : !!D && [0, D],
          meta: bi(m),
          requiredMeta: bi(g),
          pageSize: v,
          avatar: {
            cdn: u || "https://seccdn.libravatar.org/avatar/",
            param: `?d=${yi(a)}${c?` & q = $ {
              Math.random().toString(32).substring(2)
            }
            `:""}`,
            default: !a && !u,
            hide: "hide" === a
          },
          uploadImage: "function" == typeof y ? y : !1 !== y && wi,
          copyright: b,
          login: w,
          ...C
        }
      }, Si = e => e.type.includes("image"), $i = e => {
        const t = Array.from(e).find(Si);
        return !!t && t.getAsFile()
      }, zi = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-text-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}", Li = (e, t) => {
        if (!document.body.hasAttribute(t)) {
          const n = document.createElement("style");
          n.appendChild(document.createTextNode(e)), document.head.appendChild(n), document.body.setAttribute(t, "")
        }
      }, Ri = () => {
        Li('\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* See https://github.com/fred-wang/mathml.css */\n\n@namespace "http://www.w3.org/1998/Math/MathML";\nbody[waline-math] .v math{display:inline;font-size:0;font-family:Cambria Math,Latin Modern Math;text-indent:0}body[waline-math] .v math>*{font-size:14px}body[waline-math] .v math[display=block]{display:block;font-size:0;text-align:center}body[waline-math] .v math[display=block]>*{font-size:16px}body[waline-math] .v mfrac{display:inline-block !important;vertical-align:-50%;border-collapse:collapse;text-align:center}body[waline-math] .v mfrac>*{display:block !important}body[waline-math] .v mfrac>*+*{display:inline-block !important;vertical-align:top}body[waline-math] .v mfrac:not([linethickness="0"])>*:first-child{border-bottom:solid thin}body[waline-math] .v msub>*:nth-child(2),body[waline-math] .v msubsup>*:nth-child(2),body[waline-math] .v mmultiscripts>*:nth-child(2n+2),body[waline-math] .v mmultiscripts>mprescripts~*:nth-child(2n+3){vertical-align:sub;font-size:.8em}body[waline-math] .v msup>*:nth-child(2),body[waline-math] .v msubsup>*:nth-child(3),body[waline-math] .v mmultiscripts>*:nth-child(2n+3),body[waline-math] .v mmultiscripts>mprescripts~*:nth-child(2n+2){vertical-align:super;font-size:.8em}body[waline-math] .v mprescripts::after{content:";"}body[waline-math] .v munder,body[waline-math] .v mover,body[waline-math] .v munderover{display:inline-flex !important;flex-direction:column}body[waline-math] .v munder>*:nth-child(2),body[waline-math] .v munderover>*:nth-child(2){order:1;font-size:.8em}body[waline-math] .v mover>*:nth-child(2),body[waline-math] .v munderover>*:nth-child(3){order:-1;font-size:.8em}body[waline-math] .v munder{vertical-align:text-top}body[waline-math] .v mover{vertical-align:text-bottom}body[waline-math] .v munderover{vertical-align:middle}body[waline-math] .v msqrt,body[waline-math] .v mroot{display:inline-flex !important;vertical-align:middle;margin-left:.5em;border-top:solid thin}body[waline-math] .v msqrt::before,body[waline-math] .v mroot::before{content:"√";margin-left:-0.5em}body[waline-math] .v mroot>*:nth-child(2){order:-1;margin-right:.25em;margin-left:-0.75em;font-size:.8em}body[waline-math] .v menclose{display:inline-table !important;border-spacing:.4ex 0;border-collapse:separate}body[waline-math] .v menclose[notation*=top],body[waline-math] .v menclose[notation*=actuarial]{border-top:solid thin}body[waline-math] .v menclose[notation*=bottom],body[waline-math] .v menclose[notation*=madruwb]{border-bottom:solid thin}body[waline-math] .v menclose[notation*=right],body[waline-math] .v menclose[notation*=actuarial],body[waline-math] .v menclose[notation*=madruwb]{border-right:solid thin}body[waline-math] .v menclose[notation*=left]{border-left:solid thin}body[waline-math] .v menclose[notation*=box],body[waline-math] .v menclose[notation*=roundedbox],body[waline-math] .v menclose[notation*=circle]{border:solid thin}body[waline-math] .v menclose[notation*=roundedbox]{border-radius:15%}body[waline-math] .v menclose[notation*=circle]{border-radius:50%}body[waline-math] .v menclose[notation*=horizontalstrike]{text-decoration:line-through}body[waline-math] .v mtable{display:inline-table !important;vertical-align:middle;text-align:center}body[waline-math] .v mtr{display:table-row !important}body[waline-math] .v mtd{display:table-cell !important;padding:0 .5ex}body[waline-math] .v mspace{margin:.2em}body[waline-math] .v mi{font-style:italic}body[waline-math] .v mo{margin-right:.2em;margin-left:.2em}body[waline-math] .v ms::before,body[waline-math] .v ms::after{content:\'"\'}body[waline-math] .v ms[lquote]::before{content:attr(lquote)}body[waline-math] .v ms[lquote]::after{content:attr(rquote)}body[waline-math] .v [mathvariant=bold],body[waline-math] .v [mathvariant=bold-italic],body[waline-math] .v [mathvariant=bold-sans-serif],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-weight:bold;font-style:normal}body[waline-math] .v [mathvariant=monospace]{font-style:normal;font-family:monospace}body[waline-math] .v [mathvariant=sans-serif],body[waline-math] .v [mathvariant=bold-sans-serif],body[waline-math] .v [mathvariant=sans-serif-italic],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-style:normal;font-family:sans-serif}body[waline-math] .v [mathvariant=italic],body[waline-math] .v [mathvariant=bold-italic],body[waline-math] .v [mathvariant=sans-serif-italic],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-style:italic}body[waline-math] .v [mathvariant=normal]{font-style:normal}body[waline-math] .v mphantom{visibility:hidden}body[waline-math] .v merror{outline:solid thin red}body[waline-math] .v merror::before{content:"Error: "}body[waline-math] .v semantics>*:first-child{display:inline}body[waline-math] .v annotation,body[waline-math] .v annotation-xml{display:none !important;font-family:monospace}body[waline-math] .v math:active>semantics>*:first-child{display:none !important}body[waline-math] .v math:active annotation:first-of-type{display:inline !important}', "waline-math-style"), document.body.insertAdjacentHTML("afterbegin", "<div style='border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;'><math xmlns='http://www.w3.org/1998/Math/MathML'><mspace height='23px' width='77px'></mspace></math></div>");
        const e = document.body.firstChild,
          t = e.firstChild.firstChild.getBoundingClientRect();
        document.body.removeChild(e), (Math.abs(t.height - 23) > 1 || Math.abs(t.width - 77) > 1) && document.body.setAttribute("waline-math", "")
      };
      var Oi = n(948),
        Ti = n.n(Oi),
        Ii = n(917),
        ji = n.n(Ii);
      const Mi = /\B\$([^\s$]|[^\s$][^\n$]*[^\s$])\$\B/g,
        Ui = /(^|\n)\$\$([\s\S]+?)\$\$(\n|$)/g,
        Pi = (e = "", t = {}) => e.replace(/:(.+?):/g, ((e, n) => t[n] ? `<img class="vemoji" src="${t[n]}" alt="${n}">` : e)),
        Ni = (e, t) => {
          let n = e.toString();
          for (; n.length < t;) n = "0" + n;
          return n
        },
        Vi = (e, t) => {
          if (e) try {
            "string" == typeof e && (e = new Date(-1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e));
            const n = e.getTime(),
              r = (new Date).getTime() - n,
              o = Math.floor(r / 864e5);
            if (0 === o) {
              const e = r % 864e5,
                n = Math.floor(e / 36e5);
              if (0 === n) {
                const n = e % 36e5,
                  r = Math.floor(n / 6e4);
                if (0 === r) {
                  const e = n % 6e4;
                  return `${Math.round(e/1e3)} ${t.seconds}`
                }
                return `${r} ${t.minutes}`
              }
              return `${n} ${t.hours}`
            }
            return o < 0 ? t.now : o < 8 ? `${o} ${t.days}` : (e => {
              const t = Ni(e.getDate(), 2),
                n = Ni(e.getMonth() + 1, 2);
              return `${Ni(e.getFullYear(),2)}-${n}-${t}`
            })(e)
          } catch (e) {
            console.log(e)
          }
          return ""
        },
        qi = (e, t) => {
          t.forEach(((t, n) => {
            (t.querySelector(".leancloud-visitors-count") || t).innerText = e[n].toString()
          }))
        };
      let Hi, Wi;
      const Zi = () => (Wi || (Hi = Ai("WALINE_USER_CACHE"), Wi = Ae({
          nick: Hi.get("nick") || "",
          mail: Hi.get("mail") || "",
          link: Hi.get("link") || "",
          editor: ""
        })), {
          inputs: Wi,
          store: Hi
        }),
        Ji = "WALINE_USER",
        Ki = Me(null),
        Qi = () => {
          if (!Ki.value) try {
            Ki.value = JSON.parse(localStorage.getItem(Ji) || "") || JSON.parse(sessionStorage.getItem(Ji) || "") || null
          } catch (e) {}
          return {
            userInfo: Fe(Ki),
            setUserInfo: e => {
              Ki.value = e
            }
          }
        },
        Yi = {
          class: "v",
          "data-class": "v"
        },
        Xi = {
          class: "vcount"
        },
        Gi = ["textContent"],
        el = {
          key: 1,
          class: "vloading"
        },
        tl = {
          class: "vcards"
        },
        nl = {
          key: 2,
          class: "vloading"
        },
        rl = ["textContent"],
        ol = {
          key: 4,
          class: "vmore"
        },
        il = ["textContent"],
        ll = {
          key: 5,
          class: "vpower"
        },
        sl = lr(" Powered by "),
        ul = rr("a", {
          href: "https://github.com/walinejs/waline",
          target: "_blank",
          rel: "noreferrer"
        }, " Waline ", -1),
        al = {
          class: "vcomment"
        },
        cl = {
          key: 0,
          class: "vlogin-info"
        },
        pl = {
          class: "vavatar"
        },
        dl = ["title"],
        hl = ["src"],
        fl = ["textContent"],
        ml = {
          class: "vpanel"
        },
        gl = ["for", "textContent"],
        vl = ["id", "name", "type", "onUpdate:modelValue"],
        Dl = ["placeholder"],
        yl = ["innerHTML"],
        bl = {
          class: "vfooter"
        },
        wl = {
          class: "vactions"
        },
        Cl = {
          href: "https://guides.github.com/features/mastering-markdown/",
          title: "Markdown Guide",
          "aria-label": "Markdown is supported",
          class: "vaction",
          target: "_blank",
          rel: "noreferrer"
        },
        kl = ["title"],
        xl = ["title"],
        El = ["title"],
        Al = {
          class: "vinfo"
        },
        Fl = {
          class: "vtext-number"
        },
        _l = {
          key: 0
        },
        Bl = lr("  /  "),
        Sl = ["textContent"],
        $l = ["textContent"],
        zl = ["disabled"],
        Ll = {
          key: 0,
          class: "vtab-wrapper"
        },
        Rl = ["title", "onClick"],
        Ol = ["src", "alt"],
        Tl = {
          key: 0,
          class: "vtabs"
        },
        Il = ["onClick"],
        jl = ["src", "alt", "title"],
        Ml = ["title"];
      var Ul, Pl, Nl = "function" == typeof Map ? new Map : (Ul = [], Pl = [], {
          has: function (e) {
            return Ul.indexOf(e) > -1
          }, get: function (e) {
            return Pl[Ul.indexOf(e)]
          }, set: function (e, t) {
            -1 === Ul.indexOf(e) && (Ul.push(e), Pl.push(t))
          }, delete: function (e) {
            var t = Ul.indexOf(e);
            t > -1 && (Ul.splice(t, 1), Pl.splice(t, 1))
          }
        }),
        Vl = function (e) {
          return new Event(e, {
            bubbles: !0
          })
        };
      try {
        new Event("test")
      } catch (Ul) {
        Vl = function (e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !1), t
        }
      }

      function ql(e) {
        var t = Nl.get(e);
        t && t.destroy()
      }

      function Hl(e) {
        var t = Nl.get(e);
        t && t.update()
      }
      var Wl = null;
      "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((Wl = function (e) {
        return e
      }).destroy = function (e) {
        return e
      }, Wl.update = function (e) {
        return e
      }) : ((Wl = function (e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], (function (e) {
          return function (e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !Nl.has(e)) {
              var t, n = null,
                r = null,
                o = null,
                i = function () {
                  e.clientWidth !== r && a()
                },
                l = function (t) {
                  window.removeEventListener("resize", i, !1), e.removeEventListener("input", a, !1), e.removeEventListener("keyup", a, !1), e.removeEventListener("autosize:destroy", l, !1), e.removeEventListener("autosize:update", a, !1), Object.keys(t).forEach((function (n) {
                    e.style[n] = t[n]
                  })), Nl.delete(e)
                }.bind(e, {
                  height: e.style.height,
                  resize: e.style.resize,
                  overflowY: e.style.overflowY,
                  overflowX: e.style.overflowX,
                  wordWrap: e.style.wordWrap
                });
              e.addEventListener("autosize:destroy", l, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", a, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", a, !1), e.addEventListener("autosize:update", a, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", Nl.set(e, {
                destroy: l,
                update: a
              }), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), a()
            }

            function s(t) {
              var n = e.style.width;
              e.style.width = "0px", e.style.width = n, e.style.overflowY = t
            }

            function u() {
              if (0 !== e.scrollHeight) {
                var t = function (e) {
                    for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                      node: e.parentNode,
                      scrollTop: e.parentNode.scrollTop
                    }), e = e.parentNode;
                    return t
                  }(e),
                  o = document.documentElement && document.documentElement.scrollTop;
                e.style.height = "", e.style.height = e.scrollHeight + n + "px", r = e.clientWidth, t.forEach((function (e) {
                  e.node.scrollTop = e.scrollTop
                })), o && (document.documentElement.scrollTop = o)
              }
            }

            function a() {
              u();
              var t = Math.round(parseFloat(e.style.height)),
                n = window.getComputedStyle(e, null),
                r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
              if (r < t ? "hidden" === n.overflowY && (s("scroll"), u(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (s("hidden"), u(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== r) {
                o = r;
                var i = Vl("autosize:resized");
                try {
                  e.dispatchEvent(i)
                } catch (e) {}
              }
            }
          }(e)
        })), e
      }).destroy = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], ql), e
      }, Wl.update = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], Hl), e
      });
      const Zl = Wl,
        Jl = ({
          size: e
        }) => Gr("svg", {
          width: e,
          height: e,
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid"
        }, Gr("circle", {
          cx: 50,
          cy: 50,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "4",
          r: "40",
          "stroke-dasharray": "85 30"
        }, Gr("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          repeatCount: "indefinite",
          dur: "1s",
          values: "0 50 50;360 50 50",
          keyTimes: "0;1"
        }))),
        Kl = sn({
          name: "CommentBox",
          components: {
            CloseIcon: ({
              size: e
            }) => Gr("svg", {
              class: "vclose-icon",
              viewBox: "0 0 1024 1024",
              width: e,
              height: e
            }, [Gr("path", {
              d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
              fill: "currentColor"
            }), Gr("path", {
              d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
              fill: "#888"
            })]),
            EmojiIcon: () => Gr("svg", {
              viewBox: "0 0 1024 1024",
              width: "24",
              height: "24"
            }, Gr("path", {
              d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
              fill: "currentColor"
            })),
            ImageIcon: () => Gr("svg", {
              viewBox: "0 0 1024 1024",
              width: "24",
              height: "24"
            }, [Gr("path", {
              d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
              fill: "currentColor"
            }), Gr("path", {
              d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
              fill: "currentColor"
            })]),
            MarkdownIcon: () => Gr("svg", {
              width: "16",
              height: "16",
              ariaHidden: "true"
            }, Gr("path", {
              d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
              fill: "currentColor"
            })),
            PreviewIcon: () => Gr("svg", {
              viewBox: "0 0 1024 1024",
              width: "24",
              height: "24"
            }, [Gr("path", {
              d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
              fill: "currentColor"
            }), Gr("path", {
              d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
              fill: "currentColor"
            })]),
            LoadingIcon: Jl
          },
          props: {
            rootId: {
              type: String,
              default: ""
            },
            replyId: {
              type: String,
              default: ""
            },
            replyUser: {
              type: String,
              default: ""
            }
          },
          emits: ["submit", "cancel-reply"],
          setup(e, {
            emit: t
          }) {
            const n = Yt("config"),
              {
                inputs: r,
                store: o
              } = Zi(),
              {
                userInfo: i,
                setUserInfo: l
              } = Qi(),
              s = Me({}),
              u = Me(null),
              a = Me(null),
              c = Me(null),
              p = Me(null),
              d = Me({
                tabs: [],
                map: {}
              }),
              h = Me(0),
              f = Me(!1),
              m = Me(!1),
              g = Me(""),
              v = Me(0),
              D = Me(0),
              y = Me(!1),
              b = Me(""),
              w = Me(!1),
              C = qe((() => n.value.locale)),
              k = qe((() => {
                var e;
                return Boolean(null === (e = i.value) || void 0 === e ? void 0 : e.token)
              })),
              x = qe((() => !1 !== n.value.uploadImage)),
              E = e => {
                const t = u.value,
                  n = t.selectionStart,
                  o = t.selectionEnd || 0,
                  i = t.scrollTop;
                r.editor = t.value.substring(0, n) + e + t.value.substring(o, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i
              },
              A = e => {
                const t = `![${n.value.locale.uploading} ${e.name}]()`;
                return E(t), Promise.resolve().then((() => n.value.uploadImage(e))).then((n => {
                  r.editor = r.editor.replace(t, `\r\n![${e.name}](${n})`)
                }))
              },
              F = () => {
                var l, a;
                const {
                  serverURL: c,
                  lang: p,
                  login: h,
                  wordLimit: f,
                  requiredMeta: m
                } = n.value, D = {
                  comment: b.value,
                  nick: r.nick,
                  mail: r.mail,
                  link: r.link,
                  ua: navigator.userAgent,
                  url: n.value.path
                };
                if (null !== (l = i.value) && void 0 !== l && l.token) D.nick = i.value.display_name, D.mail = i.value.email, D.link = i.value.url;
                else {
                  if ("force" === h) return;
                  var k, x, E;
                  if ((m.indexOf("nick") > -1 || D.nick) && D.nick.length < 3) return null === (k = s.value.nick) || void 0 === k || k.focus(), alert(C.value.nickError);
                  if ((m.indexOf("mail") > -1 || D.mail) && !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,}){1,3})$/.exec(D.mail)) return null === (x = s.value.mail) || void 0 === x || x.focus(), alert(C.value.mailError);
                  if (!D.comment) return void(null === (E = u.value) || void 0 === E || E.focus());
                  D.nick = D.nick || "Anonymous"
                } if (!y.value) return alert(C.value.wordHint.replace("$0", f[0].toString()).replace("$1", f[1].toString()).replace("$2", v.value.toString()));
                D.comment = Pi(D.comment, d.value.map), e.replyId && e.rootId && (D.pid = e.replyId, D.rid = e.rootId, D.at = e.replyUser), w.value = !0, (({
                  serverURL: e,
                  lang: t,
                  token: n,
                  comment: r
                }) => {
                  const o = {
                    "Content-Type": "application/json"
                  };
                  return n && (o.Authorization = `Bearer ${n}`), fetch(`${e}/comment?lang=${t}`, {
                    method: "POST",
                    headers: o,
                    body: JSON.stringify(r)
                  }).then((e => e.json()))
                })({
                  serverURL: c,
                  lang: p,
                  token: null === (a = i.value) || void 0 === a ? void 0 : a.token,
                  comment: D
                }).then((n => {
                  if (w.value = !1, o.update({
                    nick: D.nick,
                    link: D.link,
                    mail: D.mail
                  }), n.errmsg) return alert(n.errmsg);
                  t("submit", n.data), r.editor = "", g.value = "", e.replyId && t("cancel-reply")
                }), (() => {
                  w.value = !1
                }))
              };
            Yr((() => r.editor), (e => {
              const {
                highlight: t
              } = n.value;
              b.value = e, g.value = ((e, t = !0, n) => (ji().setOptions({
                highlight: t ? Ti() : void 0,
                breaks: !0,
                smartLists: !0,
                smartypants: !0
              }), ji()((e => e.replace(Ui, '<p class="vtex">Tex is not available in preview</p>').replace(Mi, '<span class="vtex">Tex is not available in preview</span>'))(Pi(e, n)))))(e, t, d.value.map), v.value = (e => (e => e.match(/[\w\d\s\u00C0-\u024F]+/giu) || [])(e).reduce(((e, t) => e + ("" === t.trim() ? 0 : t.trim().split(/\s+/u).length)), 0) + (e => e.match(/[\u4E00-\u9FA5]/gu) || [])(e).length)(e), u.value && (e ? Zl(u.value) : Zl.destroy(u.value))
            }), {
              immediate: !0
            }), Yr((() => n.value.emoji), (e => e.then((e => {
              d.value = e
            }))), {
              immediate: !0
            }), Yr([n, v], (([e, t]) => {
              const {
                wordLimit: n
              } = e;
              n ? t < n[0] && 0 !== n[0] ? (D.value = n[0], y.value = !1) : t > n[1] ? (D.value = n[1], y.value = !1) : (D.value = n[1], y.value = !0) : (D.value = 0, y.value = !0)
            }), {
              immediate: !0
            });
            const _ = e => {
              c.value.contains(e.target) || p.value.contains(e.target) || (f.value = !1)
            };
            return pn((() => {
              document.body.addEventListener("click", _)
            })), hn((() => {
              document.body.removeEventListener("click", _)
            })), {
              config: n,
              locale: C,
              insert: E,
              onChange: () => {
                const e = a.value;
                e.files && x.value && A(e.files[0]).then((() => {
                  e.value = ""
                }))
              }, onDrop: e => {
                var t;
                if (null !== (t = e.dataTransfer) && void 0 !== t && t.items) {
                  const t = $i(e.dataTransfer.items);
                  t && x.value && (A(t), e.preventDefault())
                }
              }, onKeyDown: e => {
                const t = e.key;
                (e.ctrlKey || e.metaKey) && "Enter" === t && F()
              }, onPaste: e => {
                if (e.clipboardData) {
                  const t = $i(e.clipboardData.items);
                  t && x.value && A(t)
                }
              }, onLogin: e => {
                e.preventDefault();
                const {
                  lang: t,
                  serverURL: r
                } = n.value, o = (window.innerWidth - 450) / 2, i = (window.innerHeight - 450) / 2, s = window.open(`${r}/ui/login?lng=${encodeURIComponent(t)}`, "_blank", `width=450,height=450,left=${o},top=${i},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
                null == s || s.postMessage({
                  type: "TOKEN",
                  data: null
                }, "*");
                const u = ({
                  data: e
                }) => {
                  e && "userInfo" === e.type && e.data.token && (null == s || s.close(), l(e.data), (e.data.remember ? localStorage : sessionStorage).setItem("WALINE_USER", JSON.stringify(e.data)), window.removeEventListener("message", u))
                };
                window.addEventListener("message", u)
              }, onLogout: () => {
                l(null), localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null")
              }, onProfile: e => {
                e.preventDefault();
                const {
                  lang: t,
                  serverURL: r
                } = n.value, o = (window.innerWidth - 800) / 2, s = (window.innerHeight - 800) / 2, u = window.open(`${r}/ui/profile?lng=${encodeURIComponent(t)}`, "_blank", `width=800,height=800,left=${o},top=${s},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
                null == u || u.postMessage({
                  type: "TOKEN",
                  data: i.value.token
                }, "*");
                const a = ({
                  data: e
                }) => {
                  e && "profile" === e.type && (l(Object.assign({}, i.value, e)), [localStorage, sessionStorage].filter((e => e.getItem("WALINE_USER"))).forEach((e => e.setItem("WALINE_USER", JSON.stringify(i)))), window.removeEventListener("message", a))
                };
                window.addEventListener("message", a)
              }, submitComment: F,
              isLogin: k,
              userInfo: i,
              isSubmitting: w,
              wordNumber: v,
              wordLimit: D,
              isWordNumberLegal: y,
              inputs: r,
              emoji: d,
              emojiTabIndex: h,
              showEmoji: f,
              canUploadImage: x,
              previewText: g,
              showPreview: m,
              inputRefs: s,
              editorRef: u,
              emojiButtonRef: c,
              emojiPopupRef: p,
              imageUploadRef: a
            }
          }
        });
      Kl.render = function (e, t, n, r, o, i) {
        const l = In("CloseIcon"),
          s = In("MarkdownIcon"),
          u = In("EmojiIcon"),
          a = In("ImageIcon"),
          c = In("PreviewIcon"),
          p = In("LoadingIcon");
        return Wn(), Qn("div", al, ["disable" !== e.config.login && e.isLogin ? (Wn(), Qn("div", cl, [rr("div", pl, [rr("button", {
          class: "vlogout-btn",
          title: e.locale.logout,
          onClick: t[0] || (t[0] = (...t) => e.onLogout && e.onLogout(...t))
        }, [or(l, {
          size: "14"
        })], 8, dl), rr("img", {
          src: e.userInfo.avatar || `${e.config.avatar.cdn}${e.userInfo.mailMd5}${e.config.avatar.param}`,
          alt: "avatar"
        }, null, 8, hl)]), rr("a", {
          href: "#",
          class: "vlogin-nick",
          "aria-label": "Profile",
          onClick: t[1] || (t[1] = (...t) => e.onProfile && e.onProfile(...t)),
          textContent: Ye(e.userInfo.display_name)
        }, null, 8, fl)])) : sr("v-if", !0), rr("div", ml, ["force" !== e.config.login && e.config.meta.length && !e.isLogin ? (Wn(), Qn("div", {
          key: 0,
          class: Qe(["vheader", `vheader-${e.config.meta.length}`])
        }, [(Wn(!0), Qn(Un, null, pr(e.config.meta, (t => (Wn(), Qn("div", {
          class: "vheader-item",
          key: t
        }, [rr("label", {
          for: t,
          textContent: Ye(e.locale[t])
        }, null, 8, gl), An(rr("input", {
          ref: n => {
            n && (e.inputRefs[t] = n)
          }, id: `waline-${t}`,
          class: Qe(["vinput", `v${t}`]),
          name: t,
          type: "mail" === t ? "email" : "text",
          "onUpdate:modelValue": n => e.inputs[t] = n
        }, null, 10, vl), [
          [ci, e.inputs[t]]
        ])])))), 128))], 2)) : sr("v-if", !0), An(rr("textarea", {
          class: "veditor",
          ref: "editorRef",
          id: "waline-edit",
          placeholder: e.replyUser ? `@${e.replyUser}` : e.locale.placeholder,
          "onUpdate:modelValue": t[2] || (t[2] = t => e.inputs.editor = t),
          onKeydown: t[3] || (t[3] = (...t) => e.onKeyDown && e.onKeyDown(...t)),
          onDrop: t[4] || (t[4] = (...t) => e.onDrop && e.onDrop(...t)),
          onPaste: t[5] || (t[5] = (...t) => e.onPaste && e.onPaste(...t))
        }, null, 40, Dl), [
          [ni, e.inputs.editor]
        ]), rr("div", {
          class: "vpreview",
          style: We({
            display: e.showPreview ? "block" : "none"
          })
        }, [rr("h4", null, Ye(e.locale.preview) + ":", 1), rr("div", {
          class: "vcontent",
          innerHTML: e.previewText
        }, null, 8, yl)], 4), rr("div", bl, [rr("div", wl, [rr("a", Cl, [or(s)]), rr("button", {
          ref: "emojiButtonRef",
          class: Qe(["vaction", {
            actived: e.showEmoji
          }]),
          title: e.locale.emoji,
          onClick: t[6] || (t[6] = t => e.showEmoji = !e.showEmoji)
        }, [or(u)], 10, kl), rr("input", {
          ref: "imageUploadRef",
          class: "upload",
          id: "waline-image-upload",
          type: "file",
          accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
          onChange: t[7] || (t[7] = (...t) => e.onChange && e.onChange(...t))
        }, null, 544), e.canUploadImage ? (Wn(), Qn("label", {
          key: 0,
          for: "waline-image-upload",
          class: "vaction",
          title: e.locale.uploadImage
        }, [or(a)], 8, xl)) : sr("v-if", !0), rr("button", {
          class: Qe(["vaction", {
            actived: e.showPreview
          }]),
          title: e.locale.preview,
          onClick: t[8] || (t[8] = t => e.showPreview = !e.showPreview)
        }, [or(c)], 10, El)]), rr("div", Al, [rr("div", Fl, [lr(Ye(e.wordNumber) + " ", 1), e.config.wordLimit ? (Wn(), Qn("span", _l, [Bl, rr("span", {
          class: Qe({
            illegal: !e.isWordNumberLegal
          }),
          textContent: Ye(e.wordLimit)
        }, null, 10, Sl)])) : sr("v-if", !0), lr("  " + Ye(e.locale.word), 1)]), "disable" === e.config.login || e.isLogin ? sr("v-if", !0) : (Wn(), Qn("button", {
          key: 0,
          class: "vbtn",
          onClick: t[9] || (t[9] = (...t) => e.onLogin && e.onLogin(...t)),
          textContent: Ye(e.locale.login)
        }, null, 8, $l)), rr("button", {
          class: "vbtn primary",
          title: "Cmd|Ctrl + Enter",
          disabled: e.isSubmitting,
          onClick: t[10] || (t[10] = (...t) => e.submitComment && e.submitComment(...t))
        }, [e.isSubmitting ? (Wn(), Yn(p, {
          key: 0,
          size: 16
        })) : (Wn(), Qn(Un, {
          key: 1
        }, [lr(Ye(e.locale.submit), 1)], 2112))], 8, zl)]), rr("div", {
          ref: "emojiPopupRef",
          class: Qe(["vemoji-popup", {
            display: e.showEmoji
          }])
        }, [(Wn(!0), Qn(Un, null, pr(e.emoji.tabs, ((t, n) => (Wn(), Qn(Un, {
          key: t.name
        }, [n === e.emojiTabIndex ? (Wn(), Qn("div", Ll, [(Wn(!0), Qn(Un, null, pr(t.items, (t => (Wn(), Qn("button", {
          key: t,
          title: t,
          onClick: n => e.insert(`:${t}:`)
        }, [rr("img", {
          class: "vemoji",
          src: e.emoji.map[t],
          alt: t,
          loading: "lazy",
          referrerPolicy: "no-referrer"
        }, null, 8, Ol)], 8, Rl)))), 128))])) : sr("v-if", !0)], 64)))), 128)), e.emoji.tabs.length > 1 ? (Wn(), Qn("div", Tl, [(Wn(!0), Qn(Un, null, pr(e.emoji.tabs, ((t, n) => (Wn(), Qn("button", {
          key: t.name,
          class: Qe(["vtab", {
            active: e.emojiTabIndex === n
          }]),
          onClick: t => e.emojiTabIndex = n
        }, [rr("img", {
          class: "vemoji",
          src: t.icon,
          alt: t.name,
          title: t.name,
          loading: "lazy",
          referrerPolicy: "no-referrer"
        }, null, 8, jl)], 10, Il)))), 128))])) : sr("v-if", !0)], 2)])]), e.replyId ? (Wn(), Qn("button", {
          key: 1,
          class: "vclose",
          title: e.locale.cancelReply,
          onClick: t[11] || (t[11] = t => e.$emit("cancel-reply"))
        }, [or(l, {
          size: "24"
        })], 8, Ml)) : sr("v-if", !0)])
      };
      const Ql = Kl,
        Yl = ["id"],
        Xl = ["src"],
        Gl = {
          class: "vcard"
        },
        es = {
          class: "vhead"
        },
        ts = ["href", "textContent"],
        ns = ["textContent"],
        rs = ["textContent"],
        os = ["textContent"],
        is = ["textContent"],
        ls = ["title"],
        ss = {
          class: "vmeta",
          "aria-hidden": "true"
        },
        us = ["textContent"],
        as = ["textContent"],
        cs = ["innerHTML"],
        ps = {
          key: 0,
          class: "vreply-wrapper"
        },
        ds = {
          key: 1,
          class: "vquote"
        },
        hs = sn({
          props: {
            comment: {
              type: Object,
              required: !0
            },
            rootId: {
              type: String,
              required: !0
            },
            reply: {
              type: Object
            }
          },
          components: {
            CommentBox: Ql,
            ReplyIcon: () => Gr("svg", {
              viewBox: "0 0 1024 1024",
              width: "18",
              height: "18"
            }, Gr("path", {
              d: "M1019.2 720C1001.6 625.6 968 566.4 904 497.6c-89.6-89.6-214.4-150.4-347.2-176v-120c0-25.6-8-51.2-25.6-64-33.6-30.4-81.6-30.4-112-4.8L33.6 441.6C12.8 459.2 0 484.8 0 510.4c0 25.6 12.8 51.2 30.4 68.8l385.6 312c17.6 12.8 33.6 17.6 51.2 17.6 12.8 0 25.6-4.8 38.4-8C536 888 552 857.6 552 824v-99.2c124.8 20.8 248 86.4 339.2 140.8 25.6 17.6 59.2 17.6 89.6 0 25.6-17.6 43.2-46.4 43.2-76.8 0-33.6 0-56-4.8-68.8zm-500.8-89.6-46.4-4.8v193.6L86.4 510.4 472 201.6V400l38.4 4.8c128 12.8 248 68.8 334.4 153.6 51.2 56 76.8 102.4 94.4 179.2 0 4.8 4.8 20.8 4.8 51.2C835.2 720 672 640 518.4 630.4z",
              fill: "currentColor"
            }))
          },
          emits: ["submit", "reply"],
          setup(e) {
            const t = Yt("config"),
              n = qe((() => t.value.locale)),
              r = qe((() => {
                let {
                  link: t
                } = e.comment;
                return t ? (e => /^(https?:)?\/\//.test(e))(t) ? t : `https://${t}` : ""
              })),
              o = qe((() => {
                const n = e.comment,
                  r = t.value.avatar;
                return !(!n || r.hide) && (e.comment.avatar && ("type" in e.comment || r.default) ? e.comment.avatar : `${r.cdn}${e.comment.mail}${r.param}`)
              })),
              i = qe((() => {
                var t;
                return e.comment.objectId === (null === (t = e.reply) || void 0 === t ? void 0 : t.objectId)
              }));
            return {
              config: t,
              locale: n,
              avatar: o,
              isReplyingCurrent: i,
              link: r,
              timeAgo: Vi
            }
          }
        });
      hs.render = function (e, t, n, r, o, i) {
        const l = In("ReplyIcon"),
          s = In("CommentBox"),
          u = In("CommentCard", !0);
        return Wn(), Qn("div", {
          class: "vitem",
          id: e.comment.objectId
        }, [e.avatar ? (Wn(), Qn("img", {
          key: 0,
          class: "vuser",
          "aria-hidden": "true",
          src: e.avatar
        }, null, 8, Xl)) : sr("v-if", !0), rr("div", Gl, [rr("div", es, [e.link ? (Wn(), Qn("a", {
          key: 0,
          class: "vnick",
          href: e.link,
          target: "_blank",
          rel: "nofollow noreferrer",
          textContent: Ye(e.comment.nick)
        }, null, 8, ts)) : (Wn(), Qn("span", {
          key: 1,
          class: "vnick",
          textContent: Ye(e.comment.nick)
        }, null, 8, ns)), "administrator" === e.comment.type ? (Wn(), Qn("span", {
          key: 2,
          class: "vbadge",
          textContent: Ye(e.locale.admin)
        }, null, 8, rs)) : sr("v-if", !0), e.comment.sticky ? (Wn(), Qn("span", {
          key: 3,
          class: "vbadge",
          textContent: Ye(e.locale.sticky)
        }, null, 8, os)) : sr("v-if", !0), rr("span", {
          class: "vtime",
          textContent: Ye(e.timeAgo(e.comment.insertedAt, e.locale))
        }, null, 8, is), rr("button", {
          class: Qe(["vreply", {
            active: e.isReplyingCurrent
          }]),
          title: e.isReplyingCurrent ? e.locale.cancelReply : e.locale.reply,
          onClick: t[0] || (t[0] = t => e.$emit("reply", e.isReplyingCurrent ? null : e.comment))
        }, [or(l)], 10, ls)]), rr("div", ss, [rr("span", {
          textContent: Ye(e.comment.browser)
        }, null, 8, us), rr("span", {
          textContent: Ye(e.comment.os)
        }, null, 8, as)]), rr("div", {
          class: "vcontent",
          innerHTML: e.comment.comment
        }, null, 8, cs), e.isReplyingCurrent ? (Wn(), Qn("div", ps, [or(s, {
          replyId: e.comment.objectId,
          replyUser: e.comment.nick,
          rootId: e.rootId,
          onSubmit: t[1] || (t[1] = t => e.$emit("submit", t)),
          onCancelReply: t[2] || (t[2] = t => e.$emit("reply", null))
        }, null, 8, ["replyId", "replyUser", "rootId"])])) : sr("v-if", !0), e.comment.children ? (Wn(), Qn("div", ds, [(Wn(!0), Qn(Un, null, pr(e.comment.children, (n => (Wn(), Yn(u, {
          key: n.objectId,
          comment: n,
          reply: e.reply,
          rootId: e.rootId,
          onReply: t[3] || (t[3] = t => e.$emit("reply", t)),
          onSubmit: t[4] || (t[4] = t => e.$emit("submit", t))
        }, null, 8, ["comment", "reply", "rootId"])))), 128))])) : sr("v-if", !0)])], 8, Yl)
      };
      const fs = sn({
        name: "Waline",
        components: {
          CommentBox: Ql,
          CommentCard: hs,
          LoadingIcon: Jl
        },
        props: {
          signal: {
            type: Object,
            required: !0
          }
        },
        setup(e) {
          const t = Yt("config"),
            n = Yt("event"),
            r = Me(0),
            o = Me(1),
            i = Me(0),
            l = Me(!0),
            s = Me([]),
            u = Me(null);
          let a = e.signal;
          const c = qe((() => t.value.locale)),
            p = e => {
              l.value = !0, (({
                serverURL: e,
                path: t,
                page: n,
                pageSize: r,
                signal: o
              }) => fetch(`${e}/comment?path=${encodeURIComponent(t)}&pageSize=${r}&page=${n}`, {
                signal: o
              }).then((e => e.json())).then((e => fi(e, {
                count: 0,
                data: [],
                totalPages: 0
              }, "comment list"))))(Object.assign({}, t.value, {
                page: e,
                signal: a
              })).then((t => {
                l.value = !1, r.value = t.count, s.value.push(...t.data), o.value = e, i.value = t.totalPages
              })).catch((e => {
                "AbortError" !== e.name && (l.value = !1)
              }))
            };
          return n.on("render", (e => {
            a = e, r.value = 0, s.value = [], p(1)
          })), pn((() => p(1))), {
            config: t,
            locale: c,
            count: r,
            data: s,
            loading: l,
            page: o,
            totalPages: i,
            reply: u,
            loadMore: () => p(o.value + 1),
            onReply: e => {
              u.value = e
            }, onSubmit: e => {
              if (e.rid) {
                const t = s.value.find((({
                  objectId: t
                }) => t === e.rid));
                if (!t) return;
                Array.isArray(t.children) || (t.children = []), t.children.push(e)
              } else s.value.unshift(e)
            }, version: "1.3.8"
          }
        }
      });
      fs.render = function (e, t, n, r, o, i) {
        const l = In("CommentBox"),
          s = In("LoadingIcon"),
          u = In("CommentCard");
        return Wn(), Qn("div", Yi, [e.reply ? sr("v-if", !0) : (Wn(), Yn(l, {
          key: 0,
          onSubmit: e.onSubmit
        }, null, 8, ["onSubmit"])), rr("div", Xi, [e.count ? (Wn(), Qn("span", {
          key: 0,
          class: "vnum",
          textContent: Ye(e.count)
        }, null, 8, Gi)) : sr("v-if", !0), lr(" " + Ye(e.locale.comment), 1)]), e.loading && !e.data.length ? (Wn(), Qn("div", el, [or(s, {
          size: 30
        })])) : sr("v-if", !0), rr("div", tl, [(Wn(!0), Qn(Un, null, pr(e.data, (t => (Wn(), Yn(u, {
          key: t.objectId,
          "root-id": t.objectId,
          comment: t,
          reply: e.reply,
          onReply: e.onReply,
          onSubmit: e.onSubmit
        }, null, 8, ["root-id", "comment", "reply", "onReply", "onSubmit"])))), 128))]), e.loading && e.data.length ? (Wn(), Qn("div", nl, [or(s, {
          size: 30
        })])) : sr("v-if", !0), e.data.length || e.loading ? sr("v-if", !0) : (Wn(), Qn("div", {
          key: 3,
          class: "vempty",
          textContent: Ye(e.locale.sofa)
        }, null, 8, rl)), e.page < e.totalPages && !e.loading ? (Wn(), Qn("div", ol, [rr("button", {
          type: "button",
          class: "vbtn",
          onClick: t[0] || (t[0] = (...t) => e.loadMore && e.loadMore(...t)),
          textContent: Ye(e.locale.more)
        }, null, 8, il)])) : sr("v-if", !0), e.config.copyright ? (Wn(), Qn("div", ll, [sl, ul, lr(" v" + Ye(e.version), 1)])) : sr("v-if", !0)])
      };
      const ms = fs;
      class gs {
        constructor() {
          var e, t;
          t = void 0, (e = "controller") in this ? Object.defineProperty(this, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : this[e] = t, this.controller = new AbortController
        }
        get signal() {
          return this.controller.signal
        }
        abort() {
          this.controller.abort()
        }
        new() {
          this.abort(), this.controller = new AbortController
        }
      }
      const vs = (e, t) => {
          const {
            path: n,
            serverURL: r,
            visitor: o
          } = e;
          o && (({
            serverURL: e,
            path: t,
            signal: n
          }) => {
            const r = (({
                serverURL: e,
                path: t
              }) => fetch(`${e}/article`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  path: t
                })
              }).then((e => e.json())).then((e => fi(e, 0, "visit count"))))({
                serverURL: e,
                path: t
              }),
              o = Array.from(document.querySelectorAll(".waline-visitor-count,.leancloud_visitors,.leancloud-visitors")).filter((e => e.getAttribute("id"))),
              i = o.map((e => mi(e.getAttribute("id") || ""))),
              l = i.filter((e => e !== t));
            l.length ? (l.length === i.length ? Promise.resolve() : r).then((() => (({
              serverURL: e,
              paths: t,
              signal: n
            }) => fetch(`${e}/article?path=${encodeURIComponent(t.join(","))}`, {
              signal: n
            }).then((e => e.json())).then((e => fi(e, new Array(t.length).fill(0), "visit count"))).then((e => Array.isArray(e) ? e : [e])))({
              serverURL: e,
              paths: i,
              signal: n
            }))).then((e => qi(e, o))) : r.then((e => qi(new Array(o.length).fill(e), o)))
          })({
            serverURL: r,
            path: n,
            signal: t
          }), ((e, t) => {
            const n = Array.from(document.querySelectorAll(".waline-comment-count")).filter((e => e.getAttribute("data-xid") || e.getAttribute("id")));
            n.length && (({
              serverURL: e,
              paths: t,
              signal: n
            }) => fetch(`${e}/comment?type=count&url=${encodeURIComponent(t.join(","))}`, {
              signal: n
            }).then((e => e.json())).then((e => fi(e, new Array(t.length).fill(0), "comment count"))).then((e => Array.isArray(e) ? e : [e])))({
              serverURL: e,
              paths: n.map((e => mi(e.getAttribute("data-xid") || e.getAttribute("id")))),
              signal: t
            }).then((e => {
              n.forEach(((t, n) => {
                t.innerText = e[n].toString()
              }))
            }))
          })(r, t)
        },
        Ds = e => (console.warn(e), {
          errMsg: e
        });

      function ys(e) {
        const {
          el: t,
          serverURL: n
        } = e;
        if (!n) return Ds("Option 'serverURL' is missing!");
        var r;
        e.dark && "string" == typeof (r = e.dark) && Li("auto" === r ? `@media(prefers-color-scheme:dark){body${zi}}` : `${r}${zi}`, "waline-dark"), e.mathTagSupport && window.addEventListener("load", Ri);
        const o = new gs,
          i = new gs,
          l = function (e) {
            return {
              all: e = e || new Map,
              on: function (t, n) {
                var r = e.get(t);
                r ? r.push(n) : e.set(t, [n])
              }, off: function (t, n) {
                var r = e.get(t);
                r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
              }, emit: function (t, n) {
                var r = e.get(t);
                r && r.slice().map((function (e) {
                  e(n)
                })), (r = e.get("*")) && r.slice().map((function (e) {
                  e(t, n)
                }))
              }
            }
          }(),
          {
            config: s,
            update: u
          } = (e => {
            let t = e;
            const n = Me(Bi(e));
            return {
              config: Fe(n),
              update: (e = {}) => {
                t = {...t, ...e
                }, n.value = Bi(t)
              }
            }
          })(e);
        vs(s.value, i.signal);
        const a = (e => e ? e instanceof HTMLElement ? e : document.querySelector(e) || null : null)(t);
        if (t && !a) return Ds("Option 'el' do not match any domElement!");
        let c;
        a && (c = ((...e) => {
          const t = (hi || (hi = zn(di))).createApp(...e),
            {
              mount: n
            } = t;
          return t.mount = e => {
            const r = function (e) {
              return ho(e) ? document.querySelector(e) : e
            }(e);
            if (!r) return;
            const o = t._component;
            po(o) || o.render || o.template || (o.template = r.innerHTML), r.innerHTML = "";
            const i = n(r, !1, r instanceof SVGElement);
            return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
          }, t
        })(ms, {
          signal: o.signal
        }).provide("config", s).provide("event", l).provide("version", "1.3.8"), c.mount(a));
        const p = {
          options: e,
          path: s.value.path
        };
        return {
          el: a,
          update: e => {
            u(e);
            const {
              path: t
            } = s.value;
            p.path !== t && (o.new(), p.path = t, l.emit("render", o.signal)), i.new(), vs(s.value, i.signal)
          }, destroy: () => {
            t && c.unmount()
          }
        }
      }
      ys.Widget = {
        RecentComments: ({
          el: e,
          serverURL: t,
          count: n
        }) => {
          const r = e instanceof HTMLElement ? e : e ? document.querySelector(e) : null,
            o = new AbortController;
          return (({
            serverURL: e,
            count: t,
            signal: n
          }) => fetch(`${e}/comment?type=recent&count=${t}`, {
            signal: n
          }).then((e => e.json())).then((e => fi(e, [], "recent comment"))))({
            serverURL: t,
            count: n,
            signal: o.signal
          }).then((e => r && e.length ? (r.innerHTML = `<ul class="waline-widget-list">${e.map((e=>` < li class = "waline-widget-item" > < a href = "${e.url}" > $ {
            e.nick
          } < /a>：${e.comment}</li > `)).join("")}</ul>`, {
            comments: e,
            destroy: () => {
              o.abort(), r.innerHTML = ""
            }
          }) : {
            comments: e,
            destroy: () => o.abort()
          }))
        }
      }, ys.version = "1.3.8";
      const bs = ys
    })(), r.default
  })()
}));
//# sourceMappingURL=Waline.noStyle.js.map