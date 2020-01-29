module.exports = {
  name: 'app03',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app03',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
