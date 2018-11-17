module.exports = class CategoryDetector {

  constructor(){
    /* 
    * Use a DB to store this kind of data, now we use a map because the data are very simple 
    * the best way to do this is using a DB with index 
    */
    this.products = [{
      name: 'book',
      category: 'book',
    }, {
      name: 'chocolate bar',
      category: 'food',
    },{
      name: 'box of chocolates',
      category: 'food',
    }, {
      name: 'packet of headache pills',
      category: 'medical',
    }];

    this.categoryExemptList = ['food', 'medical', 'book'];
  }

  detectCategory(name) {
    let category = false;
    this.products.some((el) => {
      if(el.name === name){
        category = el.category;
      }
      return;
    })
    return category;
  }

  isExemptCategory(category) {
    return (this.categoryExemptList.indexOf(category) !== -1) ? true : false;
  }

}