import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-sand-box-test-author-l');
  this.route('new-platform-sand-box-test-author-e',
  { path: 'new-platform-sand-box-test-author-e/:id' });
  this.route('new-platform-sand-box-test-author-e.new',
  { path: 'new-platform-sand-box-test-author-e/new' });
  this.route('new-platform-sand-box-test-book-l');
  this.route('new-platform-sand-box-test-book-e',
  { path: 'new-platform-sand-box-test-book-e/:id' });
  this.route('new-platform-sand-box-test-book-e.new',
  { path: 'new-platform-sand-box-test-book-e/new' });
  this.route('new-platform-sand-box-test-country-l');
  this.route('new-platform-sand-box-test-country-e',
  { path: 'new-platform-sand-box-test-country-e/:id' });
  this.route('new-platform-sand-box-test-country-e.new',
  { path: 'new-platform-sand-box-test-country-e/new' });
  this.route('new-platform-sand-box-test-language-l');
  this.route('new-platform-sand-box-test-language-e',
  { path: 'new-platform-sand-box-test-language-e/:id' });
  this.route('new-platform-sand-box-test-language-e.new',
  { path: 'new-platform-sand-box-test-language-e/new' });
});

export default Router;
