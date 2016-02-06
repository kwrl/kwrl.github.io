var app = angular.module('mathApp', []);

MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});

MathJax.Hub.Configured();

app
.controller('MathProblemController', function($scope, $location, $anchorScroll) {
    $scope.task = {
        name: "Demo, demo, demo",
        description: "Løs 2x + 4 = 4x + 3 for x.",
        comment: ""
    };

    $scope.steps = [{
        expression: "",
        description: "",
        comment: ""
    }];

    $scope.addStep = function(idx) {
        var newStep = {
            expression: "",
            description: "",
        };

        if(idx==undefined) {
            $scope.steps.push(newStep);
        } else {
            $scope.steps.splice(idx+1, 0, newStep);
        }
        $scope.selectStep(newStep);
    }

    $scope.$watch('selectedStep', function() {
        var index = $scope.steps.indexOf($scope.selectedStep);
        $scope.gotoAnchor(index);
    });

    $scope.removeStep = function(step) {
        var index = $scope.steps.indexOf(step);
        if(index>-1) {
            $scope.steps.splice(index, 1);
        }
    };

    $scope.selectStep = function(step) {
        $scope.selectedStep = step;
    }

    $scope.gotoAnchor = function(x) {
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
        } else {
            $anchorScroll();
        }
    };
})
.directive('stepEditor', function() {
    return { templateUrl: 'directives/step-editor.html' };
})
.directive('stepCommentEditor', function() {
    return { templateUrl: 'directives/step-comment-editor.html' };
})
.directive("mathjaxBind", function() {
    return {
        restrict: "A",
controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
    $scope.$watch($attrs.mathjaxBind, function(value) {
        var $script = angular.element("<script type='math/tex'>")
        .html(value == undefined ? "" : value);
    $element.html("");
    $element.append($script);
    MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
    });
}]
};
});


