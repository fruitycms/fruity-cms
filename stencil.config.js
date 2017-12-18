exports.config = {
  bundles: [
    { components: ['fruity-cms', 'fruity-header', 'fruity-home', 'fruity-edit'] }
    //{ components: ['app-profile'] }
  ],
  collections: [{ name: '@stencil/router' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
