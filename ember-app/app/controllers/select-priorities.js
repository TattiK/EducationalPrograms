import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
export default Ember.Controller.extend({
  showSemestrs: false,
  contractNumber: '',
  contractMask: /^[1-9]{2}[a-zA-Z]{3}[1-9]{2}$/,
  inputContract: null,
  semPr: {},
  store: Ember.inject.service(),
  semestrs: null,


  checkMask(contractNumber, mask) {
    return (contractNumber.match(mask)) ? true : false;
  },

  actions: {


    checkContractNumber() {
      var self = this;
      if (this.checkMask(this.contractNumber, this.contractMask)) {
        let contractPredicate = new Query.SimplePredicate('number', Query.FilterOperator.Eq, this.contractNumber);
        let contractBuilder = new Query.Builder(self.get('store'))
          .from('i-i-s-educational-program-contract')
          .selectByProjection('ContractE')
          .where(contractPredicate);
        return this.store.query('i-i-s-educational-program-contract', contractBuilder.build()).then(function (data) {
          if (data.toArray().length > 1) {
            alert('Несколько договоров с таким номером!');
            Ember.set(self, 'showSemestrs', false);
          }
          else if (data.toArray().length === 0) {
            alert('Такого номера не существует');
            Ember.set(self, 'showSemestrs', false);
          }
          else {
            var contract = data.get('firstObject');
            console.log(contract);
            let builder = new Query.Builder(self.get('store'))
              .from('i-i-s-educational-program-semestr')
              .selectByProjection('SemestrE');
            return self.get('store').query('i-i-s-educational-program-semestr', builder.build())
              .then(function (data) {
                var e = data.toArray().sort(function (a, b) {
                  if (a.get('dateStart') < b.get('dateStart')) {
                    return 1;
                  }
                  if (a.get('dateStart') > b.get('dateStart')) {
                    return -1;
                  }
                  return 0;
                });
                console.log(e);
                Ember.set(self, 'semestrs', e);
                Ember.set(self, 'inputContract', contract);
                Ember.set(self, 'showSemestrs', true);
              });
          }

        });
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
