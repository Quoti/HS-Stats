"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var InfosService = (function () {
    function InfosService(http) {
        this.http = http;
        this.cardsUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/";
    }
    InfosService.prototype.getInfos = function () {
        var headers = new http_1.Headers({ "X-Mashape-Key": "HY0cJ4Jkl7mshqqWiolxzLFNuqQ4p1vXxc3jsnJLglrzEOvIyV" });
        return this.http.get(this.cardsUrl + "info", { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    InfosService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    InfosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InfosService);
    return InfosService;
}());
exports.InfosService = InfosService;
//# sourceMappingURL=infos.service.js.map