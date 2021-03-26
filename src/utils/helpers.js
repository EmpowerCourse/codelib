import _ from 'lodash';

export default {
  booleanListEntry: function(b) {
      return b === true
      ? { label: 'Yes', value: true }
      : { label: 'No', value: false };
  },

  yesNoOptions: function() {
    return [
      { label: 'Yes', value: true },
      { label: 'No', value: false }
    ];
  },

  idNameToValueLabel: function(list) {
    return _.map(list, x => { return {label: x.name, value: x.id}; });
  },
 
  catchHandler: e => {
    console.error(e);
  },
}