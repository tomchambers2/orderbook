const data = [];

module.exports = {
  addData: (_data) => {
    return data.push(_data) - 1;
  },

  getData: (id) => {
    return data[id];
  },

  removeData: (id) => {
    return (data[id] = null);
  },
};
