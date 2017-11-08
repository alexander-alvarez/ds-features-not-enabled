import Ember from 'ember';


export default Ember.Controller.extend({
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);

    const serializer = this.get('store').serializerFor('my-model');
    console.log('I am called');
    serializer.serializeHasMany(null, {}, {});
  }
});
