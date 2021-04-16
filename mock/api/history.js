const data = {
  status: "success",
  msg: "",
  data: {
    list: [1, 2, 3],
  },
};

module.exports = {
  type: "get",
  url: "/api/history",
  response: () => data,
};
