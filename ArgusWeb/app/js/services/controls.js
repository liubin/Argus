/**
 * Created by pfu on 8/31/16.
 */
angular.module('argus.services')
    .service('Controls', ['$routeParams', '$location', function ($routeParams, $location) {
        this.updateControlValue = function(controlName, controlValue) {
            // check $routeParams to override controlValue,
            for (var prop in $routeParams) {
                if (prop == controlName) {
                    return $routeParams[prop];
                } else {
                    // return original value if no match is found.
                    // prevents null values in url
                    return controlValue;
                }
            }
        };

        this.getUrl = function(controls) {
            var urlStr = '';
            // setup url str from all controls values
            for (var i = 0; i < controls.length; i++) {
                urlStr += controls[i].name + '=' + controls[i].value;
                if (i < controls.length - 1) {
                    urlStr += '&';
                }
            }
            return urlStr;
        };
    }]);