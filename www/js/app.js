// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','timer','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  
  });
})
.constant('topicMap', {
    1 : 'data/urinary.js',  //  done started with 1-10 ***
    2 : 'data/biochemistry.js',  //answers not provided ==============
    3 : 'data/diabetes.js',  //  done started with 1-10 ***
    4 : 'data/neuroanatomy.js', //  started with 11-20
    5 : 'data/circulation.js', //  done started with 11-20
    6 : 'data/pathology.js', //  done started with 11-20
    7 : 'data/syndromes.js', //  done started with 11-20
    8 : 'data/respiration.js', //  done started with 11-20
    9 : 'data/pharmacology1.js', //  done started with 1-10 ***
    10 : 'data/pharmacology2.js', //  done started with 11-20
    11 : 'data/physiology.js', //  done started with 11-20
    12 : 'data/nervoussystem.js', //  done started with 11-20
    13 : 'data/lymphaticsystem.js', //  done started with 11-20
    14 : 'data/gastro.js', //  done started with 11-20
    15 : 'data/integumentary.js', //  done started with 11-20
    16 : 'data/behavior.js',  //  done started with 11-20
    17 : 'data/adult.js',	// all 5 from website. 5 from sample, 3 remaining from sample
    18 : 'data/pediatric.js', // all 5 from website. frist 5 from sample, 3 remaining from sample
    19 : 'data/neonatal.js',  // all 5 from website. frist 5 from sample, 3 remaining from sample
    
    100 : 'data/practice1.js',
    200 : 'data/practice2.js',
    300 : 'data/exam.js'
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.ebook', {
      url: '/ebook',
      views: {
        'menuContent': {
          templateUrl: 'templates/ebook.html'
        }
      }
    })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
    .state('app.share', {
      url: '/share',
      views: {
        'menuContent': {
          templateUrl: 'templates/share.html'
        }
      }
    })
    .state('app.topics', {
      url: '/topics',
      views: {
        'menuContent': {
          templateUrl: 'templates/topics.html'
        }
      }
    })

  .state('app.single', {
    url: '/topics/:topicId',
    views: {
      'menuContent': {
        templateUrl: 'templates/topic.html',
        controller: 'AppCtrl'
       }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/topics');
});
