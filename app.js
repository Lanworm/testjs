/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, browser: true */
/*global $, jQuery, alert*/
$(function () {
    var Controller = Backbone.Router.extend({
        routes: {
            "": "start",
            "!/": "start",
            "!/success": "success",
            "!/error": "error"
        },

        start: function () {
            $(".block").hide();
            $("#start").show();
        },

        success: function () {
            $(".block").hide();
            $("#success").show();
            document.location.href = "https://www.google.ru";
        },

        error: function () {
            $(".block").hide();
            $("#error").show();
        }
    });

    var controller = new Controller();

    Backbone.history.start();

    var Start = Backbone.View.extend({
        el: $("#start"),
        events: {
            'click input:button': 'check'
        },
        check: function () {
            get('http://www.mocky.io/v2/5808c848100000c8034c62f1').then(function (response) {
                controller.navigate("!/success", true);
                console.log("Success!", response);
            }, function (error) {
                controller.navigate("!/error", true);
                console.error("Failed!", error);
            })
        }
    });

    var start = new Start();

    function get(url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status == 200) {
                    resolve(req.response);
                }
                else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }
});