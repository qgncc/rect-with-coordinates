var B = Object.defineProperty;
var d = (e, n, t) => n in e ? B(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var r = (e, n, t) => (d(e, typeof n != "symbol" ? n + "" : n, t), t);
const f = (e) => parseInt(e), w = (e) => {
  const n = getComputedStyle(e);
  return {
    top: f(n.borderTopWidth),
    right: f(n.borderRightWidth),
    bottom: f(n.borderBottomWidth),
    left: f(n.borderLeftWidth)
  };
}, g = (e, n) => e !== void 0 ? e : n, c = (e) => g(e, 0), Y = (e) => g(e, null), H = (e) => g(e, ""), v = (e) => g(e, []), C = (e) => g(e, {}), y = (e) => g(e, !0);
class V {
  constructor(n) {
    /**
     * bounds of a rectangle in viewport coordinates
     * @type {RectBounds}
     * @protected
     */
    r(this, "bounds");
    r(this, "fullWidth");
    r(this, "fullHeight");
    r(this, "innerWidth");
    r(this, "innerHeight");
    r(this, "origin");
    const {
      borderWidth: t,
      height: i,
      width: s,
      viewportPositionX: o,
      viewportPositionY: l,
      origin: u
    } = n;
    this.bounds = {
      top: l + c(t == null ? void 0 : t.top),
      right: o + (s - c(t == null ? void 0 : t.right)),
      bottom: l + (i - c(t == null ? void 0 : t.bottom)),
      left: o + c(t == null ? void 0 : t.left)
    }, this.fullWidth = s, this.fullHeight = i, this.innerWidth = s - c(t == null ? void 0 : t.left) - c(t == null ? void 0 : t.right), this.innerHeight = i - c(t == null ? void 0 : t.top) - c(t == null ? void 0 : t.bottom), this.origin = u || [0, 0];
  }
  cropByBounds(n, t) {
    const [i, s] = n, [o, l] = t || this.origin, u = 0 - o, m = this.innerWidth - o, a = 0 - l, h = this.innerHeight - l, O = i < u ? u : i > m ? m : i, p = s < a ? a : s > h ? h : s;
    return [O, p];
  }
  transformViewportCoordinates(n, t) {
    const i = y(t == null ? void 0 : t.noOutOfBounds), [s, o] = t != null && t.customOrigin ? t.customOrigin : this.origin, [l, u] = n, m = l - this.bounds.left - s, a = u - this.bounds.top - o, h = [m, a];
    return i ? this.cropByBounds(h, t == null ? void 0 : t.customOrigin) : h;
  }
}
class E extends V {
  constructor(t, i) {
    const s = w(t), o = t.getBoundingClientRect();
    super({
      borderWidth: s,
      height: o.height,
      width: o.width,
      viewportPositionX: o.left,
      viewportPositionY: o.top,
      ...i
    });
    r(this, "htmlElement");
    this.htmlElement = t;
  }
}
export {
  E as HTMLElementWithCoordinates,
  V as RectWithCoordinates,
  w as getHTMLElementBorders,
  g as getValueOrDefault,
  v as getValueOrEmptyArray,
  C as getValueOrEmptyObject,
  H as getValueOrEmptyString,
  Y as getValueOrNull,
  y as getValueOrTrue,
  c as getValueOrZero
};
