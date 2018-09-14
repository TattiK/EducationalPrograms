import Ember from 'ember';

export default Ember.Component.extend({
  semPr : {},
  epsArr : [],

  semestrSetPriority() {
    var eps = this.semestr.get('eps');
    var self=this;
    this.semPr[this.semestr.get('id')] = [];
    var priorities=this.contract.get('priorities');
    priorities=(priorities) ? JSON.parse(priorities) : null;

    if (priorities && priorities[this.semestr.get('id')]) {
      var semPrts = priorities[this.semestr.get('id')];
      var e = this.semestr.get('eps').toArray().sort(function(a,b){
        if(semPrts.indexOf(a.get('id'))>semPrts.indexOf(b.get('id'))){
          return 1;
        }
        if(semPrts.indexOf(a.get('id'))<semPrts.indexOf(b.get('id'))){
          return -1;
        }
        return 0;
      });
      console.log(e);
      Ember.set(this.semestr,'eps',e);

    }
    else {
      this.semPr[this.semestr.get('id')]=[];
      eps.forEach(function (ep) {
        self.semPr[self.semestr.get('id')].push(ep.id);
      });

    }
  },
  actions:{
    sortEndAction(){
      var self=this;
      this.semPr[this.semestr.get('id')]=[];
      this.semestr.get('eps').forEach(function(ep){
        self.semPr[self.semestr.get('id')].push(ep.get('id'));
      });
      console.log(this.semPr);

    }
  },


  didReceiveAttrs(){
    this._super(...arguments);
    this.semestrSetPriority();
    console.log(this.contractPr);
  }
});
