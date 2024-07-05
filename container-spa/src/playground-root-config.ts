import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@playground/component",
  app: () => System.import<LifeCycles>("//localhost:8080/js/app.js"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
