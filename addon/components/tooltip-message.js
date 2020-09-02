import Ember from 'ember';

const {
  Component,
  computed,
  A
} = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: ['c-tooltip'],
  classNameBindings: ['processedPosition', 'processedSize', 'processedTheme', 'always:c-tooltip--always', 'animate:c-tooltip--animate'],
  attributeBindings: ['message:data-tooled'],
  animate: true,

  processedPosition: computed('position', function() {
    if (this.get('position') && A(['right', 'bottom', 'left']).contains(this.get('position'))) {
      return 'c-tooltip--' + this.get('position');
    }
    return 'c-tooltip--top';
  }),

  processedSize: computed('size', function() {
    if (this.get('size') && A(['small', 'large']).contains(this.get('size'))) {
      switch (this.get('size')) {
        case 'medium':
          return 'c-tooltip--md';
        case 'large':
          return 'c-tooltip--lg';
        case 'small':
          return 'c-tooltip--sm';
      }
    }
  }),

  processedTheme: computed('theme', function() {
    if (this.get('theme') && A(['light']).contains(this.get('theme'))) {
      return 'c-tooltip--' + this.get('theme');
    }
  })
});
