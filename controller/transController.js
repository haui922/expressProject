export const bus = (req, res) => res.render("bus", { pageTitle: "Bus" });
export const metro = (req, res) => res.render("metro", { pageTitle: "Metro" });
export const taxi = (req, res) => res.render("taxi", { pageTitle: "Taxi" });
export const moretrans = (req, res) =>
  res.render("moretrans", { pageTitle: "More Trans" });
