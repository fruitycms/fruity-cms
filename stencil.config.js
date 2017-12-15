exports.config = {
  bundles: [
    { components: ['fruity-cms', 'fruity-header', 'fruity-home'] },
    //{ components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
