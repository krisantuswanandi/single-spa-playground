import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@playground/navbar",
//   app: () => System.import("@playground/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
