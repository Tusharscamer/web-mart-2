(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const m of a.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && i(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = o(r);
    fetch(r.href, a);
  }
})();
const p = [
    {
      favicon: "games/tic-tac-toe-2/favicon.png",
      name: "Tic Tac Toe",
      tagLine: "best game forever",
      rating: "4.0 ⭐️⭐️⭐️⭐︎✩",
      url: "games/tic-tac-toe-2/index.html",
    },
    {
      favicon: "games/rock-paper-scissor/rock-paper-scissors.png",
      name: "Rock Paper Scissor",
      tagLine: "best game forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "games/rock-paper-scissor/index.html",
    },
    {
      favicon: "games/colour-picker/icons8-color-wheel-96.png",
      name: "Color Picker",
      tagLine: "best game forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "games/colour-picker/index.html",
    },
    {
      favicon: "games/tic-tac-toe-1/favicon.png",
      name: "Tic Tac Toe 2",
      tagLine: "best game forever",
      rating: "4.0 ⭐️⭐️⭐️⭐︎✩",
      url: "games/tic-tac-toe-1/index.html",
    },
  ],
  f = [
    {
      favicon: "applications/clock/images/clock.png",
      name: "Clock",
      tagLine: "best app forever",
      rating: "4.0 ⭐️⭐️⭐️⭐︎✩",
      url: "applications/clock/index.html",
    },
    {
      favicon: "applications/currency-converter/android-chrome-192x192.png",
      name: "Currency Converter",
      tagLine: "best app forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "applications/currency-converter/index.html",
    },
    {
      favicon: "applications/weather-app/images/temperature.png",
      name: "Weather App",
      tagLine: "best app forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "applications/weather-app/index.html",
    },
  ],
  u = [
    {
      favicon: "games/tic-tac-toe-2/favicon.png",
      name: "Tic Tac Toe",
      tagLine: "best game forever",
      rating: "4.0 ⭐️⭐️⭐️⭐︎✩",
      url: "games/tic-tac-toe-2/index.html",
    },
    {
      favicon: "applications/clock/images/clock.png",
      name: "Clock",
      tagLine: "best app forever",
      rating: "4.0 ⭐️⭐️⭐️⭐︎✩",
      url: "applications/clock/index.html",
    },
    {
      favicon: "games/colour-picker/icons8-color-wheel-96.png",
      name: "Color Picker",
      tagLine: "best game forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "games/colour-picker/index.html",
    },
    {
      favicon: "applications/currency-converter/android-chrome-192x192.png",
      name: "Currency Converter",
      tagLine: "best app forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "applications/currency-converter/index.html",
    },
    {
      favicon: "games/rock-paper-scissor/rock-paper-scissors.png",
      name: "Rock Paper Scissor",
      tagLine: "best game forever",
      rating: "3.0 ⭐️⭐️⭐️✩✩",
      url: "games/rock-paper-scissor/index.html",
    },
  ],
  v = document.querySelector(".ite");
document.querySelector(".item");
const s = document.querySelector(".game"),
  c = document.querySelector(".app"),
  l = document.querySelector(".book"),
  d = document.querySelector(".home"),
  y = document.querySelector(".signin"),
  e = document.querySelector(".items"),
  x = document.querySelector(".inpSea");
function g() {
  (s.style.color = ""),
    (s.style.borderBottom = ""),
    (c.style.color = ""),
    (c.style.borderBottom = ""),
    (l.style.color = ""),
    (l.style.borderBottom = ""),
    (d.style.color = ""),
    (d.style.borderBottom = ""),
    (y.style.color = ""),
    (y.style.borderBottom = "");
}
u.forEach((n, t) => {
  const o = document.createElement("div");
  v.append(o),
    (o.style.width = "100vw"),
    (o.style.height = "100vh"),
    (o.style.minHeight = "600px"),
    t % 2 == 0
      ? (o.style.backgroundColor = "#111827")
      : (o.style.backgroundColor = "#000"),
    (o.innerHTML = `
    <div class="item item-${t} h-full flex justify-around items-center">
        <img class="item-img ml-52 w-96" src="${n.favicon}" alt="">
        <div class="item-delails mr-52">
            <h2 class="name text-5xl my-4 font-medium">${n.name}</h2>
            <div class="tagline text-gray-400 text-xl">${n.tagLine}</div>
            <div class="rating text-gray-400 text-xl mb-2">${n.rating}</div>
            <button class="play-btn bg-amber-400 my-2 px-12 py-1 text-lg font-bold text-gray-100 rounded-md" type="button"><a href="${u[t].url}">Play</a></button>
        </div>
    </div>
  `);
});
d.style.color = "#FBBE24";
d.style.borderBottom = "solid #FBBE24 2px";
s.addEventListener("click", (n) => {
  (e.innerHTML = ""),
    (e.style.paddingInline = "90px"),
    (e.style.paddingBlock = "40px"),
    (e.style.display = "flex"),
    (e.style.flexWrap = "wrap"),
    (e.style.justifyContent = "space-evenly"),
    g(),
    (s.style.color = "#FBBE24"),
    (s.style.borderBottom = "solid #FBBE24 2px"),
    p.forEach((t, o) => {
      const i = document.createElement("div");
      e.append(i),
        (i.style.width = "40vw"),
        (i.innerHTML = `
            <div class="item hover:-translate-y-1 transition-all ease-in-out duration-500 bg-gray-900 flex justify-around items-center gap-8 rounded-xl m-4 p-8 item-${o}">
                <img class="item-img w-48" src="${t.favicon}" alt="">
                <div class="item-delails">
                    <h2 class="name text-2xl my-3 font-medium">${t.name}</h2>
                    <div class="tagline text-gray-400">${t.tagLine}</div>
                    <div class="rating text-gray-400">${t.rating}</div>
                    <button class="play-btn bg-amber-400 my-4 px-12 py-1 text-lg font-bold text-gray-100 rounded-md" type="button"><a href="${p[o].url}">Play</a></button>
                </div>
            </div>
        `);
    }),
    (document.querySelector(".footer").style.backgroundColor = "#111827"),
    n.preventDefault();
});
c.addEventListener("click", (n) => {
  (e.innerHTML = ""),
    (e.style.paddingInline = "90px"),
    (e.style.paddingBlock = "40px"),
    (e.style.display = "flex"),
    (e.style.flexWrap = "wrap"),
    (e.style.justifyContent = "space-evenly"),
    g(),
    (c.style.color = "#FBBE24"),
    (c.style.borderBottom = "solid #FBBE24 2px"),
    f.forEach((t, o) => {
      const i = document.createElement("div");
      e.append(i),
        (i.style.width = "40vw"),
        (i.innerHTML = `
            <div class="item hover:-translate-y-1 transition-all ease-in-out duration-500 bg-gray-900 flex justify-around items-center gap-8 rounded-xl m-4 p-8 item-${o}">
                <img class="item-img w-48" src="${t.favicon}" alt="">
                <div class="item-delails">
                    <h2 class="name text-2xl my-3 font-medium">${t.name}</h2>
                    <div class="tagline text-gray-400">${t.tagLine}</div>
                    <div class="rating text-gray-400">${t.rating}</div>
                    <button class="play-btn bg-amber-400 my-4 px-12 py-1 text-lg font-bold text-gray-100 rounded-md" type="button"><a href="${p[o].url}">Play</a></button>
                </div>
            </div>
        `);
    }),
    (document.querySelector(".footer").style.backgroundColor = "#111827"),
    n.preventDefault();
});
l.addEventListener("click", (n) => {
  (e.innerHTML = `
    <h2 style="height: calc(100vh - 220px)" class="h-full">Comming Soon</h2>
  `),
    (e.style.paddingInline = "90px"),
    (e.style.paddingBlock = "40px"),
    (e.style.display = "flex"),
    (e.style.flexWrap = "wrap"),
    (e.style.justifyContent = "space-evenly"),
    g(),
    (l.style.color = "#FBBE24"),
    (l.style.borderBottom = "solid #FBBE24 2px"),
    (document.querySelector(".footer").style.backgroundColor = "#111827"),
    n.preventDefault();
});
x.addEventListener("click", () => {});
