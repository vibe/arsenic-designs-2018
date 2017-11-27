const PageView = v =>
async () => {
  const view = await import(`./pages/${v}.vue`);
  return view;
};

const routes = [
  { path: "/", name: "designs", component: PageView("Home") },
  { path: "/user_interface", name: "ui", component: PageView("UI") },
  { path: "/logo_design", name: "logos", component: PageView("Logos") },
  { path: "/projects", name: "projects", component: PageView("Projects") },
];

export default routes;
