export default class Item {
  constructor(data) {
    const fields = ['brand', 'title', 'description', 'descriptionFull', 'price', 'currency'];

    fields.forEach((field) => {
      if (!data.hasOwnProperty(field)) throw Error(`Объект переданный в Item должен содержать поле: ${field}`);
      this[field] = data[field];
    })
  }
}
