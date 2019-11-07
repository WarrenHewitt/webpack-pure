const path = require('path');
const Config = require('webpack-chain');

const config = new Config();



config
    .entry('hew')
        .add('./src/pages/index.js')
        .add('./src/pages/i.js')
        .end()
    .output
        .path('dist')
        .filename('[name].bundle.js');

config
    .mode('production');