let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
        ]
    }
});*/

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.browserSync({
    open : 'local',
    proxy: 'api.theminda.test:8000',
    files: [
        'app/*.php',
        'app/Http/Controllers/*.php',
        'routes/*.php',
        'resources/**/*.php',
        'resources/**/**/*.php',
        'resources/**/**/**/*.vue'
    ]
});