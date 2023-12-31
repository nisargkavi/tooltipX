document.addEventListener("DOMContentLoaded", function () {
    TooltipX.init(document.querySelectorAll("[tooltipX]"));
}),
    (window.onload = function () {
        document.head.insertAdjacentHTML(
            "beforeend",
            '<style>\n    .tooltipX {\n      position: absolute;\n      background-color: #000;\n      color: #fff;\n      padding: 0.5rem 0rem;\n      border-radius: 5px;\n      font-size: 14px;\n      transform: scale(0.6);\n      text-align: center;\n      z-index: 9999;\n      width: 120px;\n    }\n    \n    .tooltipX-small {\n      width: 80px;\n    }\n    \n    .tooltipX-medium {\n      width: 180px;\n    }\n    \n    .tooltipX-large {\n      width: 260px;\n    }\n    \n    .tooltipX-always-visible {\n      opacity: 1 !important;\n      transform: scale(1) !important;\n    }\n    \n    .tooltipX-opening:not(.tooltipX-clean) {\n      animation: tooltipX-opening 0.3s ease-in-out;\n    }\n    \n    @keyframes tooltipX-opening {\n      0% {\n        opacity: 0;\n        transform: scale(0.6);\n      }\n    \n      100% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n    \n    .tooltipX-close {\n      animation: tooltipX-close 0.3s ease-in-out;\n    }\n    \n    @keyframes tooltipX-close {\n      0% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    \n      100% {\n        opacity: 0;\n        transform: scale(0.4);\n      }\n    }\n    \n    .tooltipX-clean {\n      opacity: 1;\n      transform: scale(1);\n    }\n    \n    .tooltipX-top,\n    .tooltipX-top-left,\n    .tooltipX-top-right {\n      transform-origin: bottom;\n    }\n    \n    .tooltipX-bottom,\n    .tooltipX-bottom-left,\n    .tooltipX-bottom-right {\n      transform-origin: top;\n    }\n    \n    .tooltipX-left {\n      transform-origin: right;\n    }\n    \n    .tooltipX-right {\n      transform-origin: left;\n    }\n    \n    .tooltipX::after {\n      content: "";\n      position: absolute;\n      border: 5px solid transparent;\n    }\n    \n    .tooltipX-top::after {\n      top: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-top-color: inherit;\n    }\n    \n    .tooltipX-bottom::after {\n      bottom: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-bottom-color: inherit;\n    }\n    \n    .tooltipX-left::after {\n      top: 50%;\n      right: 0;\n      transform: translate(100%, -50%);\n      border-left-color: inherit;\n    }\n    \n    .tooltipX-right::after {\n      top: 50%;\n      left: 0;\n      transform: translate(-100%, -50%);\n      border-right-color: inherit;\n    }\n    \n    .tooltipX-top-left::after {\n      top: 100%;\n      left: 25%;\n      transform: translateX(-50%);\n      border-top-color: inherit;\n    }\n    \n    .tooltipX-top-right::after {\n      top: 100%;\n      left: 75%;\n      transform: translateX(-50%);\n      border-top-color: inherit;\n    }\n    \n    .tooltipX-bottom-right::after {\n      bottom: 100%;\n      left: 75%;\n      transform: translateX(-50%);\n      border-bottom-color: inherit;\n    }\n    \n    .tooltipX-bottom-left::after {\n      bottom: 100%;\n      left: 25%;\n      transform: translateX(-50%);\n      border-bottom-color: inherit;\n    }\n  </style>'
        );
    });
const TooltipX = (function () {
    const t = function (t, o) {
            if (null !== document.querySelector(`.tooltipX-${o}`)) return;
            const n = {
                    pos: t.getAttribute("tooltipX-position") || "top",
                    content: t.getAttribute("tooltipX-text"),
                    size: t.getAttribute("tooltipX-size"),
                    visible: t.hasAttribute("tooltipX-visible"),
                    blunt: t.hasAttribute("tooltipX-clean"),
                    color: t.getAttribute("tooltipX-color") || "#fff",
                    bgColor: t.getAttribute("tooltipX-bgcolor") || "#000",
                },
                e = document.createElement("div");
            e.classList.add("hide", "tooltipX", `tooltipX-${o}`),
                "small" == n.size || "medium" == n.size || "large" == n.size ? e.classList.add(`tooltipX-${n.size}`) : console.warn("TooltipX: use given options only or else may cause unexpected behaviour! ⚠️"),
                (e.innerHTML = n.content),
                document.body.appendChild(e);
            const { offsetTop: i, offsetLeft: l, offsetWidth: r, offsetHeight: s } = t,
                { offsetWidth: a, offsetHeight: p } = e,
                c = {
                    top: { top: i - p - 10, left: l + r / 2 - a / 2 },
                    bottom: { top: i + s + 10, left: l + r / 2 - a / 2 },
                    left: { top: i + s / 2 - p / 2, left: l - a - 10 },
                    right: { top: i + s / 2 - p / 2, left: l + r + 10 },
                    "top-left": { top: i - p - 10, left: l },
                    "top-right": { top: i - p - 10, left: l + r - a },
                    "bottom-right": { top: i + s + 10, left: l + r - a },
                    "bottom-left": { top: i + s + 10, left: l },
                }[n.pos];
            (e.style = `top: ${c.top}px; left: ${c.left}px;`),
                (e.style.color = n.color.includes("#") ? `${n.color}` : `#${n.color}`),
                (e.style.background = n.bgColor.includes("#") ? `${n.bgColor}` : `#${n.bgColor}`),
                "top" === n.pos || "top-left" === n.pos || "top-right" === n.pos
                    ? (e.style.borderTopColor = n.bgColor.includes("#") ? `${n.bgColor}` : `#${n.bgColor}`)
                    : "right" === n.pos
                    ? (e.style.borderRightColor = n.bgColor.includes("#") ? `${n.bgColor}` : `#${n.bgColor}`)
                    : "left" === n.pos
                    ? (e.style.borderLeftColor = n.bgColor.includes("#") ? `${n.bgColor}` : `#${n.bgColor}`)
                    : (e.style.borderBottomColor = n.bgColor.includes("#") ? `${n.bgColor}` : `#${n.bgColor}`),
                e.classList.add("tooltipX-opening", `tooltipX-${n.pos}`),
                n.blunt && e.classList.add("tooltipX-clean"),
                n.visible && e.classList.add("tooltipX-always-visible"),
                t.hasAttribute("tooltipX-action") && n.visible && console.warn("TooltipX: Don't use tooltipX-action & tooltipX-visible together at same element may cause unexpected behaviour! ⚠️"),
                setTimeout(() => {
                    (e.style.transform = "scale(1)"), e.classList.remove("hide", "tooltipX-opening");
                }, 300);
        },
        o = function (t) {
            document.querySelector(`.tooltipX-${t}`)?.classList.contains("tooltipX-clean")
                ? document.querySelector(`.tooltipX-${t}`)?.remove()
                : (document.querySelector(`.tooltipX-${t}`)?.classList.add("tooltipX-close"),
                  setTimeout(() => {
                      document.querySelector(`.tooltipX-${t}`)?.remove();
                  }, 300));
        },
        n = function (n) {
            0 !== n.length &&
                n.forEach((n, e) => {
                    if (!n.classList.contains("tooltipX-inited"))
                        if ((n.classList.add("tooltipX-inited"), n.hasAttribute("tooltipX-visible"))) t(n, e);
                        else {
                            const i = n.getAttribute("tooltipX-action");
                            i
                                ? "click" == i
                                    ? n.addEventListener(i, function () {
                                          document.querySelector(`.tooltipX-${e}`) ? o(e) : t(n, e);
                                      })
                                    : (console.error("TooltipX: Invalid trigger attribute ⚠️"), console.warn("TooltipX: Read the documentation carefully 📖"))
                                : (n.addEventListener("mouseenter", function () {
                                      t(n, e);
                                  }),
                                  n.addEventListener("mouseleave", function () {
                                      o(e);
                                  }));
                        }
                });
        };
    return {
        init: function (t) {
            "interactive" == document.readyState ? n(t) : console.warn("TooltipX: You can't use this TooltipX init after Document Loaded ⚠️, Read the documentation carefully!");
        },
        refresh: function () {
            "complete" == document.readyState ? n(document.querySelectorAll("[tooltipX]")) : console.warn("TooltipX: You can't use this TooltipX refresh before Document Loaded ⚠️, Read the documentation carefully!");
        },
    };
})();
