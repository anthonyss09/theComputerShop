const getIds = (obArray) => {
  const ids = [];
  obArray.map((ob) => {
    ids.push(ob._id);
  });
  return ids;
};

const normalizeArray = (obArray) => {
  const normOb = {};
  obArray.map((ob) => {
    normOb[ob._id] = ob;
  });
  return normOb;
};

const getCartTotal = (obArray) => {
  return obArray.reduce((a, b) => {
    return a + b.count * b.price;
  }, 0);
};

const getCartCount = (obArray) => {
  if (obArray.length > 0) {
    const newArr = obArray.reduce((a, b) => {
      return a + b.count;
    }, 0);
    return newArr;
  } else {
    return 0;
  }
};

const calcTax = (subTotal) => {
  return (subTotal * 0.0865).toFixed(2);
};

export { getIds, normalizeArray, getCartTotal, getCartCount, calcTax };
