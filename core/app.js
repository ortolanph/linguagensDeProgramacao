const modules = [
    'ui.bootstrap',
    'ngAnimate',
    'LearningApp.main',
    'LearningApp.simplecondition',
    'LearningApp.elsecondition'
];

const app = angular.module('LearningApp', modules);

angular.module('LearningApp.main', []);
angular.module('LearningApp.simplecondition', []);
angular.module('LearningApp.elsecondition', []);
