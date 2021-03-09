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

  query: ({ userId, orderId } = {}) => {
    const dataWithId = data
      .filter(Boolean)
      .map((data, i) => ({ ...data, orderId: i }));
    if (userId) {
      return dataWithId.filter(
        ({ userId: userIdData }) => userId === userIdData
      );
    }
    if (orderId) {
      return dataWithId.filter(
        ({ orderId: orderIdData }) => orderId === orderIdData
      );
    }
    return data;
  },
};
