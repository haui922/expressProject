export const food = (req, res) => {
  res.render("food", { pageTitle: "Food" });
};

export const market = (req, res) => {
  res.render("market", { pageTitle: "Market" });
};

export const nightscape = (req, res) => {
  res.render("nightscape", { pageTitle: "Nightscape" });
};
export const street = (req, res) => {
  res.render("street", { pageTitle: "Street" });
};

export const spot = (req, res) => {
  res.render("spot", { pageTitle: "Spot" });
};
