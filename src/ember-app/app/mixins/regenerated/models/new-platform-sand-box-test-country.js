import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.new-platform-sand-box-test-country.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CountryE', 'new-platform-sand-box-test-country', {
    name: attr('Name', { index: 0 })
  });

  modelClass.defineProjection('CountryL', 'new-platform-sand-box-test-country', {
    name: attr('Name', { index: 0 })
  });
};
