const PageView = v =>
async () => {
  const view = await import(`./pages/${v}.vue`);
  return view;
};

const routes = [
  { path: "/", name: "home", component: PageView("Home") },
];

export default routes;
