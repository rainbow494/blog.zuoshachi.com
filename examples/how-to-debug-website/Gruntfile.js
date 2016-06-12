module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean : {
            main : {
                files : [{
                        dot : true,
                        src : [
                            'build/{,*/}*'
                        ]
                    }
                ]
            },
            tmp : {
                files : [{
                        dot : true,
                        src : [
                            '.tmp',
                            'Global'
                        ]
                    }
                ]
            }
        },

        less : {
            create : {
                files : [{
                        expand : true,
                        cwd : 'RoutefinderWeb/Global/Css',
                        src : ['**/*.less'],
                        dest : 'RoutefinderWeb/Global/Css',
                        ext : '.css',
                        extDot : 'last'
                    }
                ]
            },
            main : {
                files : 'files will be created in same folder'
            },
            build : {
                files : 'files will be copyed to build folder'
            }
        },

        lineending : {
            less : {
                options : {
                    eol : 'crlf'
                },
                files : [{
                        expand : true,
                        cwd : 'RoutefinderWeb/Global/Css',
                        src : ['**/*.css'],
                        dest : 'RoutefinderWeb/Global/Css',
                    }
                ]
            }
        },

        sync : {
            js : {
                files : [{
                        cwd : 'RoutefinderWeb/Global',
                        src : [
                            '**/*.js',
                        ],
                        dest : 'build/Global',
                        expand : true,
                        filter : 'isFile'
                    }
                ]
            },
            css : {
                files : [{
                        cwd : 'RoutefinderWeb/Global',
                        src : [
                            '**/*.css',
                        ],
                        dest : 'build/Global',
                        expand : true,
                        filter : 'isFile'
                    }
                ]
            },
            resource : {
                files : [{
                        cwd : 'RoutefinderWeb/Global',
                        src : [
                            '**/*.jpg',
                            '**/*.png',
                            '**/*.gif',
                            '**/*.eot',
                            '**/*.svg',
                            '**/*.ttf',
                            '**/*.woff',
                            '**/*.woff2'
                        ],
                        dest : 'build/Global',
                        expand : true,
                        filter : 'isFile'
                    }
                ]
            },
            individual : {
                files : [{
                        cwd : 'RoutefinderWeb',
                        src : ['index.html',
                            'Web.config',
                            'local_settings.js',
                            'Global/ThirdParty/ol/OpenLayers.debug.js',
                            'Global/ThirdParty/ol/theme/default/style.css',
                            'Global/ThirdParty/bootstrap/css/bootstrap.min.css',
                        ],
                        dest : 'build',
                        expand : true,
                        filter : 'isFile'
                    }
                ]
            },
            localization : {
                files : [{
                        expand : true,
                        cwd : 'RoutefinderWeb.Resources/',
                        src : ['**/*.json'],
                        dest : 'build/localization',
                        filter : 'isFile'
                    }
                ]
            }
        },

        concat : {
            options : {
                process : function (src, filepath) {
                    if (filepath.indexOf('.js') > 0) {
                        return src + ';\n';
                    }
                    return src;
                }
            }
        },
        jshint : {
            all : [
                'RoutefinderWeb/Global/JavaScript/**/*.js'
            ],
            options : {
                //browser: true,
                //camelcase: true,
                //eqeqeq: true,
                //eqnull: true,
                //es5: true,
                //laxbreak: true, // Allow line breaking before && or ||
                //loopfunc: true,
                //newcap: true,
                //noarg: true,
                //onevar: true,
                //sub: true,
                //undef: true,
                //white: true,
                "globals": {
                    "jQuery":false,
                    "$": false,
                    "ko": false,
                    "moment":false,
                    "Enumerable":false,
                    "PubSub":false,
                    "kendo":false,
                    "google":false,
                    "OpenLayers":false,
                    "toastr":false,
                    "i18n":false,
                    "TF": false,
                    "tf": false,
                    "createNamespace": false,
                    "isMobileDevice": false,
                    "fullScreen": false,
                    "pathCombine": false,
                    "toISOStringWithoutTimeZone":false,
                    "topicCombine":false,
                }
            }
        },

        watch : {
            options : {
                interval : 500
            },
            configFiles : {
                files : ['Gruntfile.js'],
                options : {
                    reload : true
                }
            },
            js : {
                files : ['RoutefinderWeb/Global/**/*.js'],
                tasks : ['sync:js'],
                options : {
                    livereload : 35729
                }
            },
            less : {
                files : ['RoutefinderWeb/Global/Css/*.less'],
                tasks : ['less:main'],
                options : {
                    nospawn : true,
                    livereload : 35729
                }
            },
            lessbuild : {
                files : ['RoutefinderWeb/Global/Css/*.less'],
                tasks : ['less:build'],
                options : {
                    nospawn : true,
                    livereload : 35729
                }
            },
            css : {
                files : ['RoutefinderWeb/Global/**/*.css'],
                tasks : ['sync:css'],
                options : {
                    livereload : 35729
                }
            },
            html : {
                files : ['RoutefinderWeb/Local/**/*.cshtml', 'RoutefinderWeb.Resources/**.json'],
                tasks : ['tf_localization_processor', 'sync:localization'],
                options : {
                    livereload : 35729
                }
            }
        },

        tf_localization_processor : {
            options : {
                partials : 'RoutefinderWeb/Local/',
                data : 'RoutefinderWeb.Resources/',
                output : 'build'
            },
            globbing : {
                expand : true,
                cwd : "RoutefinderWeb/Local/",
                src : ["**/*.cshtml"],
                dest : "",
                ext : '.html'
            }
        },
        useminPrepare : {
            html : 'RoutefinderWeb/Local/Html/Index.cshtml',
            options : {
                dest : 'build/Global/JavaScript',
                flow : {
                    html : {
                        steps : {
                            js : ['concat'],
                            jsUglify : ['concat', 'uglifyjs'],
                            css : ['cssmin'],
                            cssconcat : ['concat']
                        },
                        post : {}
                    }
                }
            }
        },
        usemin : {
            html : ['build/**/Html/Index.html'],
            options : {
                assetsDirs : [
                    'build'
                ],
                blockReplacements : {
                    jsUglify : function (block) {
                        return '<script src="' + block.dest + '"></script>';
                    },
                    cssconcat : function (block) {
                        return '<link rel="stylesheet" href="' + block.dest + '">';
                    }
                }
            }
        }

    });

    grunt.loadTasks("./grunt-tasks");

    grunt.registerTask('default', 'debug');
    grunt.registerTask('debug', [
            'clean:main',
            'tf_localization_processor',

            'less:create',
            'lineending:less',
            'sync:resource',
            'sync:js',
            'sync:css',
            'sync:individual',
            'sync:localization'
        ]);

    grunt.registerTask('build', [
            'clean:main',
            'tf_localization_processor',
            'sync:resource',
            'sync:individual',
            'sync:localization',
            'useminPrepare',
            'concat',
            'uglify',
            'cssmin',
            'usemin',
            'clean:tmp'
        ]);

    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function () {
            grunt.config(['less', 'main', 'files'], [{
                        expand : true,
                        src : Object.keys(changedFiles),
                        ext : '.css',
                    }
                ]);
            changedFiles = Object.create(null);
        }, 200);

    var changedBuildFiles = Object.create(null);
    var onBuildChange = grunt.util._.debounce(function () {
            grunt.config(['less', 'build', 'files'], [changedBuildFiles]);
            changedBuildFiles = Object.create(null);
        }, 200);

    grunt.event.on('watch', function (action, filepath) {
        // Handling .less imports so that when the watch task
        // detects change in an imported file the main .less file
        // that imports is compiled instead of the imported file.
        // Naming convention for imported files:
        // title of main file that imports + "-" + name describing the imported file
        var splittedPath = filepath.split('/');
        var filename = splittedPath[splittedPath.length - 1];
        delete splittedPath[splittedPath.length - 1];
        var fileDirectoryPath = splittedPath.join('/');
        var splittedFilename = filename.split('-');
        if (splittedFilename.length > 1) {
            filepath = fileDirectoryPath + splittedFilename[0] + '.less';
        }

        changedFiles[filepath] = action;

        var buildFilePath = 'build' + filepath.substr('RoutefinderWeb'.length, filepath.length - 'RoutefinderWeb'.length - '.less'.length) + '.css';
        changedBuildFiles[buildFilePath] = filepath;

        onChange();
        onBuildChange();
    });
};
