import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({


  shouldSerializeHasMany() {
    console.log('should be called, but does not happen because no ember-data FEATURES are set (see logic in -private.isEnabled)');
  }
});
