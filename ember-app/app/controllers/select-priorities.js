import Ember from 'ember';

export default Ember.Controller.extend({
  showSemestrs: false,
  contractNumber: '',
  contractMask: /^[1-9]{2}[a-zA-Z]{3}[1-9]{2}$/,
  inputContract: null,
  semPr: {},


  checkMask(contractNumber, mask) {
    return (contractNumber.match(mask)) ? true : false;
  },

  actions: {


    checkContractNumber() {
      var self = this;
      if (this.checkMask(this.contractNumber, this.contractMask)) {
        this.model.contracts.forEach(function (ct) {
          if (ct.get('number') === self.contractNumber) {
            var e = self.model.semestrs.toArray().sort(function (a, b) {
              if (a.get('dateStart') < b.get('dateStart')) {
                return 1;
              }
              if (a.get('dateStart') > b.get('dateStart')) {
                return -1;
              }
              return 0;
            });
            console.log(e);
            Ember.set(self.model, 'semestrs', e);
            Ember.set(self, 'showSemestrs', true);
            Ember.set(self, 'inputContract', ct);
          }
        });
        if (!self.showSemestrs) {
          alert('Такого номера не существует');
        }
      }
      else {
        alert('Некорректный номер договора');
        Ember.set(self, 'showSemestrs', false);
      }
    },

    savePriority() {
      var self = this;
      Ember.set(this.inputContract, 'priorities', JSON.stringify(this.semPr));
      this.inputContract.save().then(function (data) {
        console.log(data);
      })


    }
  }
});
