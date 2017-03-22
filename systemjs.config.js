/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            // paths serve as alias
            'npm:': '/node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'src/jscode',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',

            // angular material
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',

            //UIRouter
            'ui-router-ng2': '/node_modules/ui-router-ng2/_bundles/ui-router-ng2.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js',
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);