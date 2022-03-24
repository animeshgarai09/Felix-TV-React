const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@global': 'src/global',
        '@pages': 'src/pages',
    })(config);

    return config;
};