function p() {
    let[e,t] = (0,
    o.useState)(!1)
      , n = (0,
    m.CG)(e => e.mainLoading.isFinshLoading);
    return (0,
    o.useEffect)( () => {
        let e = window.scrollY
          , n = () => {
            e - window.scrollY >= 0 ? t(!1) : t(!0),
            e = window.scrollY
        }
        ;
        return window.addEventListener("scroll", n),
        () => {
            window.removeEventListener("scroll", n)
        }
    }
    , []),
    (0,
    i.jsx)("header", {
        className: "bg-['rgba(10, 25, 47, 0.85)'] fixed z-30  w-screen backdrop-blur-lg transition-all ".concat(e ? "-translate-y-full" : "translate-y-0"),
        children: (0,
        i.jsxs)("nav", {
            className: "flex items-center justify-between px-10 py-4 max-md:py-4",
            children: [(0,
            i.jsx)(l.default, {
                href: "/",
                className: "relative block h-[60px] w-[60px] max-md:h-[40px] max-md:w-[40px]",
                children: (0,
                i.jsx)(a.default, {
                    fill: !0,
                    src: "/assets/main-logo.jpg",
                    alt: "로고 이미지",
                    sizes: "60px, (max-width: 768px) 40px"
                })
            }), (0,
            i.jsxs)(r.E.ol, {
                className: "flex items-center gap-6 text-base max-md:hidden [&>a>li>span]:text-green [&>a>li]:flex [&>a>li]:gap-1",
                initial: "init",
                animate: n ? "on" : "init",
                variants: {
                    init: {
                        opacity: 0
                    },
                    on: {
                        opacity: 1
                    }
                },
                transition: {
                    delayChildren: s.Bu,
                    staggerChildren: .1
                },
                children: [(0,
                i.jsx)(l.default, {
                    href: "/#".concat(c.A.aboutMe),
                    children: (0,
                    i.jsxs)(r.E.li, {
                        variants: s.If,
                        custom: 0,
                        children: [(0,
                        i.jsx)("span", {
                            children: "01."
                        }), (0,
                        i.jsx)("p", {
                            children: "About"
                        })]
                    })
                }), (0,
                i.jsx)(l.default, {
                    href: "/#".concat(c.A.skills),
                    children: (0,
                    i.jsxs)(r.E.li, {
                        variants: s.If,
                        custom: 1,
                        children: [(0,
                        i.jsx)("span", {
                            children: "02."
                        }), (0,
                        i.jsx)("p", {
                            children: "Skills"
                        })]
                    })
                }), (0,
                i.jsx)(l.default, {
                    href: "/#".concat(c.A.mainProjects),
                    children: (0,
                    i.jsxs)(r.E.li, {
                        variants: s.If,
                        custom: 2,
                        children: [(0,
                        i.jsx)("span", {
                            children: "03."
                        }), (0,
                        i.jsx)("p", {
                            children: "Projects"
                        })]
                    })
                }), (0,
                i.jsx)(l.default, {
                    href: "/#".concat(c.A.contact),
                    children: (0,
                    i.jsxs)(r.E.li, {
                        variants: s.If,
                        custom: 3,
                        children: [(0,
                        i.jsx)("span", {
                            children: "04."
                        }), (0,
                        i.jsx)("p", {
                            children: "Contact"
                        })]
                    })
                })]
            }), (0,
            i.jsx)(u, {})]
        })
    })
}
