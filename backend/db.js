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

  query: ({ userId }) => {
    const dataWithId = data
      .filter(Boolean)
      .map((data, i) => ({ ...data, orderId: i }));
    return userId
      ? dataWithId.filter(({ userId: userIdData }) => userId === userIdData)
      : dataWithId;
  },
};
