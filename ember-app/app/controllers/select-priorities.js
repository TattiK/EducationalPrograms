import Ember from 'ember';

export default Ember.Controller.extend({
  showSemestrs: false,
  contractNumber: '',
  contractMask: /^[1-9]{2}[a-zA-Z]{3}[1-9]{2}$/,
  checkMask(contractNumber, mask){
    return (contractNumber.match(mask)) ? true : false;
  },
  inputContract: null,
  actions: {
    checkContractNumber() {
      var self = this;
      if (this.checkMask(this.contractNumber,this.contractMask)) {
        this.model.contracts.forEach(function (ct) {
          if (ct.get('number') === self.contractNumber) {
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
        Ember.set(this, 'showSemestrs', false);
      }
    },
    savePriority(){

    }
  }
});
