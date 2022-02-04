export function action(type: string, payload = {}) {
  return { type, ...payload };
}

export function dynamicSort(property: string) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export const removeEmptyAttributes = (obj: any) => {
  Object.entries(obj).forEach(
    ([key, val]) =>
      (val && typeof val === 'object' && removeEmptyAttributes(val)) ||
      ((typeof val === 'undefined' || val === null || val === '') &&
        delete obj[key])
  );
  return obj;
};
