angular.module('LearningApp.controllers', []);

const modules = [
    'ui.bootstrap',
    'ngAnimate'
];

try {
    angular.module('templates');
    modules.unshift('templates');
} catch (e) {
}

const app = angular.module('LearningApp', modules);

app.run(() => {});