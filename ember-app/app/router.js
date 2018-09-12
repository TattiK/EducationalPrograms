import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-educational-program-contract-l');
  this.route('i-i-s-educational-program-contract-e',
  { path: 'i-i-s-educational-program-contract-e/:id' });
  this.route('i-i-s-educational-program-contract-e.new',
  { path: 'i-i-s-educational-program-contract-e/new' });
  this.route('i-i-s-educational-program-semestr-l');
  this.route('i-i-s-educational-program-semestr-e',
  { path: 'i-i-s-educational-program-semestr-e/:id' });
  this.route('i-i-s-educational-program-semestr-e.new',
  { path: 'i-i-s-educational-program-semestr-e/new' });
  this.route('SelectPriorities');
});

export default Router;
