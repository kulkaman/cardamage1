webpackJsonp([1,4],{

/***/ 1025:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(455);


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        console.log('PostsService Initialized...');
    }
    Object.defineProperty(PostsService.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    PostsService.prototype.getPosts = function (raNumber, lastName, claimNumber) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        if (claimNumber == null) {
            claimNumber = "NA";
        }
        console.log("claim number value " + claimNumber);
        var abc = PostsService.url + '/SpringMVC/rest/radetails/' + raNumber + '/' + lastName + '/' + claimNumber + '/';
        console.log("Final URL" + abc);
        return this.http.get(abc)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getClaimNumberPosts = function (newClaim) {
        console.log("Called from Client" + newClaim.incidentCity + "brand is " + newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc " + newClaim.damageDescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(PostsService.url + '/SpringMVC/rest/radetails/', newClaim, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleErrorObservable);
        // .subscribe();
    };
    PostsService.prototype.retreivePhotosDetails = function (claimNumber) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        return this.http.get(PostsService.url + '/SpringMVC/rest/radetails/update/')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.updateClaimDetails = function (newClaim) {
        console.log("Called from Client from update" + newClaim.incidentCity + "brand is " + newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc " + newClaim.damageDescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("loc: " + PostsService.url);
        return this.http.post(PostsService.url + '/SpringMVC/rest/radetails/update', newClaim, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleErrorObservable);
        // .subscribe();
    };
    PostsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Response :" + body);
        return body;
    };
    PostsService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    //public static url='http://localhost:8080';
    PostsService.url = 'https://ae001f28.ngrok.io';
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/posts.service.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* unused harmony export Claim */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(postsService) {
        this.readOnlyMode = true;
        this.pdfSrc = 'http://localhost:8080/SpringMVC/pdf/12345_file.pdf';
        this.page = 1;
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
        };
        console.log("Service :" + postsService);
        this.posts = postsService.posts;
        this.postsService = postsService;
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        if (this.posts) {
            this.renterName = this.posts[0].firstName + " " + this.posts[0].lastName;
            this.raNumber = this.posts[0].rentalAgreementNumber;
            this.mvaNumber = this.posts[0].mvaNumber;
            this.claimNumber = this.posts[0].claimNumber;
            this.incidentCity = this.posts[0].incidentCity;
            this.incidentState = this.posts[0].incidentState;
            this.incidentZipCode = this.posts[0].zipCode;
            this.incidentPoliceRpt = this.posts[0].policeRptNumber;
            this.insuranceName = this.posts[0].insuranceName;
            this.insuranceAddress = this.posts[0].insuranceAddress;
            this.damageDescription = this.posts[0].damageDescription;
            this.policyNumber = this.posts[0].policyNumber;
            this.damageSeverity = this.posts[0].damageSeverity;
            this.claimStatus = this.posts[0].claimStatus;
            this.partyName = this.posts[0].propertyName;
            this.partyAddress = this.posts[0].propertyAddress;
            this.partyContact = this.posts[0].propertyPhone;
            this.partyDamageDescription = this.posts[0].propertyDamageDescription;
            this.partyLicensePlate = this.posts[0].propertyLicensePlate;
            if (this.posts[0].dateOfIncident != null)
                this.incidentDate = this.posts[0].dateOfIncident.substring(0, 19);
            //this.camera1 = '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';
            this.camera1 = this.posts[0].camera1;
            this.camera2 = this.posts[0].camera2;
            this.camera3 = this.posts[0].camera3;
            this.camera4 = this.posts[0].camera4;
        }
    }
    Object.defineProperty(AboutComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent.prototype.ngAfterViewInit = function () {
        console.log("Child :" + this.posts);
    };
    AboutComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    AboutComponent.prototype.toggleRenter = function () {
        this.operatorNotRenter = !this.operatorNotRenter;
    };
    AboutComponent.prototype.addPhotos = function () {
        this.additonalPhotos = true;
        Webcam.attach('#camera5');
    };
    AboutComponent.prototype.addPhotos2 = function () {
        this.additonalPhotos2 = true;
        Webcam.attach('#camera6');
    };
    AboutComponent.prototype.retreivePhotos = function () {
        this.cameraImages = true;
        /*this.postsService.retreivePhotosDetails(this.claimNumber).subscribe(
                function(response) {
                    
                    console.log("retrieved photo " + response);
                    response => response.json();
                    this.successClaim = true;
                   // this.claimNumber = response;
                    console.log("regular response with Claim: " + response);
                    },
                function(error) { this.failureClaim = true;console.log("Error happened" + error)},
                function() { console.log("the subscription is completed")}
                
                  
            
            );*/
    };
    AboutComponent.prototype.take_snapshot = function (camerID) {
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
            //  Webcam.off("off");
        });
    };
    AboutComponent.prototype.editClaim = function () {
        console.log("Edit Claim called");
        this.readOnlyMode = false;
        this.editMode = true;
        console.log("Edit mode value " + this.readOnlyMode);
    };
    AboutComponent.prototype.addSignature = function () {
        this.addSignatureInd = true;
    };
    AboutComponent.prototype.updateClaim = function () {
        this.updateClaimSuccess = true;
        this._newClaim = new Claim();
        this._newClaim.claimNumber = this.postsService.claimNumberInput;
        console.log("Claim Number to be updated " + this._newClaim.claimNumber);
        this._newClaim.incidentCity = this.incidentCity;
        this._newClaim.incidentState = this.incidentState;
        this._newClaim.zipCode = this.incidentZipCode;
        this._newClaim.policeRpt = this.incidentPoliceRpt;
        this._newClaim.insuranceName = this.insuranceName;
        this._newClaim.insuranceAddress = this.insuranceAddress;
        this._newClaim.operatorName = this.operatorName;
        this._newClaim.operatorContact = this.operatorContact;
        this._newClaim.operatorEmail = this.operatorEmail;
        this._newClaim.operatorAddress = this.operatorAddress;
        this._newClaim.operatorZipCode = this.operatorZipCode;
        this._newClaim.operatorLicenseNumber = this.operatorLicenseNumber;
        this._newClaim.damageDescription = this.damageDescription;
        this._newClaim.damageSeverity = this.damageSeverity;
        this._newClaim.propertyName = this.partyName;
        this._newClaim.propertyAddress = this.partyAddress;
        this._newClaim.propertyPhone = this.partyContact;
        this._newClaim.propertyDamageDescription = this.partyDamageDescription;
        this._newClaim.drivableCarInd = this.drivableCarInd;
        this._newClaim.propertyLicensePlate = this.partyLicensePlate;
        this._newClaim.policyNumber = this.policyNumber;
        //this._newClaim.claimNumber  = "1770338417" ;
        console.log("Claim to be updated :" + this._newClaim.claimNumber + " with city: " + this._newClaim.incidentCity);
        this.postsService.updateClaimDetails(this._newClaim).subscribe(function (response) {
            console.log("regular response" + response);
            (function (response) { return response.json(); });
            this.successClaim = true;
            // this.claimNumber = response;
            console.log("regular response with Claim: " + response);
        }, function (error) { this.failureClaim = true; console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]) === 'function' && _a) || Object)
    ], AboutComponent.prototype, "signaturePad", void 0);
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__(747),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
var Claim = (function () {
    function Claim() {
    }
    return Claim;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/about.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimAckComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClaimAckComponent = (function () {
    function ClaimAckComponent(postsService) {
        console.log("claim value in claimAck" + this.claimNumber);
        this.claimNumber = postsService.claimNumberOutput;
        console.log("claim value after claimAck" + postsService.claimNumberOutput);
    }
    ClaimAckComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__(748),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], ClaimAckComponent);
    return ClaimAckComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/claimAck.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* unused harmony export Claim */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { Flashlight } from '@ionic-native/flashlight';*/
var UserComponent = (function () {
    function UserComponent(postsService, router) {
        this.claimCreation = true;
        this.initialImageDS = true;
        this.markers = [];
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
        };
        this.posts = postsService.posts;
        this._newClaim = new Claim();
        this.router = router;
        console.log("router value in claim " + this.router);
        /*    this.flashlight.switchOn();*/
        this.postsService = postsService;
        if (this.posts) {
            console.log("Inside post service");
            this.firstName = this.posts[0].firstName;
            this.lastName = this.posts[0].lastName;
            this.makeModelDesc = this.posts[0].makeModelDesc;
            this.coDate = this.posts[0].coDate;
            this.ciDate = this.posts[0].ciDate;
            //this.renterFirstName = this.posts[0].firstName;
            //this.renterLastName = this.posts[0].lastName;
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
            //this.pdfSrc = "http://localhost:8080/SpringMVC/pdf/"+this.rentalAgreementNumber+"_file.pdf";
            if (this.rentalAgreementNumber == null || this.rentalAgreementNumber == "undefined")
                this.rentalAgreementNumber = "367326223";
            this.pdfSrc = "https://ae001f28.ngrok.io/SpringMVC/pdf/" + this.rentalAgreementNumber + "_file.pdf";
        }
        if (this.coDate == null) {
            this.makeModelDesc = "HONDA CIVIC 4DR";
            this.coDate = "2017-08-01";
            this.ciDate = "2017-08-08";
            this.firstName = "JOHN";
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
        }
        this.whatTime = new Date().toString();
    }
    Object.defineProperty(UserComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.onChange = function (marker) {
        console.log('onChange - Marker', marker);
    };
    UserComponent.prototype.onMark = function (marker) {
        console.log('onMark - Marker', marker);
        console.log('onMark - Markers', this.markers);
    };
    UserComponent.prototype.selectMarker = function (index) {
        this.imgMap.markerActive = index;
        this.imgMap.draw();
    };
    UserComponent.prototype.removeMarker = function (index) {
        this.markers.splice(index, 1);
        if (index === this.imgMap.markerActive) {
            this.imgMap.markerActive = null;
        }
        else if (index < this.imgMap.markerActive) {
            this.imgMap.markerActive--;
        }
        this.imgMap.draw();
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#camera1');
        Webcam.attach('#camera2');
        Webcam.attach('#camera3');
        Webcam.attach('#camera4');
        console.log("Above post service" + this.posts);
    };
    /*constructor(public http:Http){}*/
    UserComponent.prototype.take_snapshot = function (camerID) {
        var that = this;
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            var cam1Id1 = "Hey";
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
            if (!that._newClaim) {
                console.log("Inside take_snapshot - setting claim");
            }
            //that._newClaim[camerID] = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
            this.cam1Id = cam1Id1;
        });
    };
    UserComponent.prototype.toggleRenter = function () {
        this.operatorNotRenter = !this.operatorNotRenter;
    };
    UserComponent.prototype.toggleIncidentDetails = function () {
        this.incidentDetails = !this.incidentDetails;
    };
    UserComponent.prototype.toggleInsuranceDetails = function () {
        this.insuranceDetails = !this.insuranceDetails;
    };
    UserComponent.prototype.getRoverPhoto = function () {
        this.roverImage = true;
    };
    UserComponent.prototype.createClaim = function () {
        var _this = this;
        this.successClaim = true;
        console.log(this.incidentCity + " " + this.incidentState);
        //this._newClaim = new Claim();
        if (this.rentalAgreementNumber == null) {
            this.rentalAgreementNumber = "367326223";
            this.firstName = "John";
            this.lastName = "Smith";
            console.log("RA was null");
        }
        else {
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
            console.log("RA was not null");
        }
        console.log("Incident " + this.incidentCity + "cam1Id " + this.cam1Id);
        this._newClaim.incidentCity = this.incidentCity;
        this._newClaim.incidentState = this.incidentState;
        this._newClaim.zipCode = this.incidentZipCode;
        this._newClaim.policeRpt = this.incidentPoliceRpt;
        this._newClaim.damageDescription = this.damageDescription;
        this._newClaim.rentalAgreementNumber = this.rentalAgreementNumber;
        this._newClaim.insuranceName = this.insuranceName;
        this._newClaim.insuranceAddress = this.insuranceAddress;
        this._newClaim.operatorName = this.operatorName;
        this._newClaim.operatorContact = this.operatorContact;
        this._newClaim.operatorEmail = this.operatorEmail;
        this._newClaim.operatorAddress = this.operatorAddress;
        this._newClaim.operatorZipCode = this.operatorZipCode;
        this._newClaim.operatorLicenseNumber = this.operatorLicenseNumber;
        this._newClaim.propertyName = this.partyName;
        this._newClaim.propertyAddress = this.partyAddress;
        this._newClaim.propertyPhone = this.partyContact;
        this._newClaim.propertyDamageDescription = this.partyDamageDescription;
        this._newClaim.drivableCarInd = this.drivableCarInd;
        this._newClaim.propertyLicensePlate = this.partyLicensePlate;
        this._newClaim.policyNumber = this.policyNumber;
        this._newClaim.lastName = this.lastName;
        this._newClaim.firstName = this.firstName;
        this._newClaim.damageSeverity = this.damageSeverity;
        this._newClaim.camera1 = this.cam1Id;
        console.log("RA : " + this._newClaim.rentalAgreementNumber + " and LN: " + this._newClaim.lastName);
        /*this.postsService.getClaimNumberPosts(this._newClaim).subscribe(
            function(response) {
                console.log(" Router inside getClaimNumberPosts " + this.router);
                console.log("regular response" + response);
                response => response.json();
                this.successClaim = true;
                this.claimNumber = response;
                console.log("regular response with Claim: " + response + "successStatus "+this.successClaim);
                this.router.navigate(['claimAck']);
                },
            function(error) { this.failureClaim = true;console.log("Error happened" + error)},
            function() { console.log("the subscription is completed")}
            
              
        
        );*/
        this.postsService.getClaimNumberPosts(this._newClaim).subscribe(function (posts) {
            _this.posts = posts;
            _this.postsService.posts = _this.posts;
            _this.claimNumber = posts;
            _this.postsService.claimNumberOutput = _this.claimNumber;
            console.log("IN check claim" + _this.posts);
            _this.router.navigate(['claimAck']);
        });
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.frontCarClicked = function () {
        console.log("I was called");
        this.initialImageDS = false;
        this.frontCar = true;
    };
    UserComponent.prototype.rearCarClicked = function () {
        console.log("I was called too");
        this.initialImageDS = false;
        this.rearCar = true;
    };
    UserComponent.prototype.sideCarClicked = function () {
        console.log("I was called too");
        this.initialImageDS = false;
        this.sideCar = true;
    };
    UserComponent.prototype.reselectDamageArea = function () {
        console.log("I was called too");
        this.initialImageDS = true;
        this.frontCar = false;
        this.sideCar = false;
        this.rearCar = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgMap'), 
        __metadata('design:type', String)
    ], UserComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]) === 'function' && _a) || Object)
    ], UserComponent.prototype, "signaturePad", void 0);
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__(749),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c;
}());
var Claim = (function () {
    function Claim() {
    }
    return Claim;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/user.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 454;


/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(574);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/main.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(postsService, router) {
        this.title = 'app works!';
        this.validRaNoClaim = false;
        this.mobileSource = true;
        this.postsService = postsService;
        this.router = router;
        console.log("router value in app " + this.router);
        this.openScanner = false;
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            this.mobileSource = true;
            this.desktopSource = false;
        }
        else {
            this.desktopSource = true;
            this.mobileSource = false;
        }
    }
    Object.defineProperty(AppComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.decodedOutput = function (result) {
        console.log("Scanner output :" + result);
        this.openScanner = false;
        this.raNumber = "1233444";
        this.lastName = "Mandar";
        this.claimNumber = "xxx";
    };
    AppComponent.prototype.checkClaim = function (path) {
        var _this = this;
        this.postsService.raNumberInput = this.raNumber;
        this.postsService.lastNameInput = this.lastName;
        this.postsService.claimNumberInput = this.claimNumber;
        this.blankFields = false;
        var raNumber = this.raNumber;
        this.postsService.getPosts(this.raNumber, this.lastName, this.claimNumber).subscribe(function (posts) {
            _this.posts = posts;
            _this.postsService.posts = _this.posts;
            console.log("IN check claim" + _this.posts[0].rentalAgreementNumber);
            if (path == 'new' || _this.posts[0].claimNumber != null) {
                _this.router.navigate([path]);
            }
            else {
                _this.validRaNoClaim = true;
                _this.posts[0].firstName = "JOHN";
                _this.posts[0].lastName = "LEWIS";
                _this.router.navigate([path]);
            }
        }, function (err) {
            _this.lookupFailed = true;
            _this.router.navigate([path]);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "raNumber", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "lastName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "claimNumber", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(746),
            /*      styleUrls: ['./css/bootstrap.min.css',
                              './css/jumbotron.css',
                              './css/bootstrap.css',
                              './css/bootstrap-theme.css',
                              './css/bootstrap-theme.min.css',
                              './css/damage.css']
             ,*/
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_claimAck_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(575);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*import { Flashlight } from '@ionic-native/flashlight';*/
/*import { QrScannerComponent,QrScannerModule } from 'angular2-qrscanner';*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__["ImgMapComponent"],
                __WEBPACK_IMPORTED_MODULE_11__components_claimAck_component__["a" /* ClaimAckComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__["PdfViewerComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_claimAck_component__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var appRoutes = [
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_1__components_user_component__["a" /* UserComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__components_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'claimAck',
        component: __WEBPACK_IMPORTED_MODULE_3__components_claimAck_component__["a" /* ClaimAckComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/app.routing.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/environment.js.map

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<!-- <link rel=\"stylesheet\" href=\"/path/to/css/material-icons.min.css\">\\ -->\n\n <div class=\"container starter-template \" style=\"background-color: #E9E9E9 \">\n<nav class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" >\n\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" style=\"color:white;\" href = \"https://invulnerable-moliere-46227.herokuapp.com/\">AVIS</a>\n\t<!-- <a href=\"tel:18628034850\"><img src=\"./../app/Phone.png\" style=\"text-align: right; height: 35px; width: 30px; padding-top: 10px; position: absolute; right: 30px;\" ></a> -->\n\t<!-- <a href=\"tel:18628034850\"><img src=\"./../app/icon_contact.svg\" class=\"navbar-phone\" ></a> -->\n                <!-- class=\"img-responsive navbar-brand\"  -->\n            </div>\n    </nav>\n\t    </div>\n\t\n        <div class=\"container starter-template\" style=\"background-color: #E9E9E9 \">\n\t\t<!-- <a href=\"tel:1-862-803-4850\">Call me</a>\n\t\t <div id=\"box28\"> <a href=\"tel:1-862-803-4850\">Please call</a> </div>  -->\n            <p class=\"lead\" align=\"center\">Report Car Incident<br> </p>\n\n            <form class=\"form-horizontal\">\n            \n            <div *ngIf=\"mobileSource\">\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">RA Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"367326223\" [(ngModel)]=\"raNumber\" name=\"raNumber\" maxlength=\"10\">\n                    </div>\n                </div>\n                <!-- <div class=\"form-group cust-form-label\">\n                    <label class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label\">MVA Number</label>\n                    <div class=\"col-xs-9 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"23456789\" [(ngModel)]=\"mvaNumber\" name=\"mvaNumber\">\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-3 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n                </div> -->\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Smith\" [(ngModel)]=\"lastName\" name=\"lastName\" maxlength=\"30\">\n                    </div>\n                </div>\n                </div>\n                \n                 <div *ngIf=\"desktopSource\">\n                 <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">RA Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter RA Number\" [(ngModel)]=\"raNumber\" name=\"raNumber\" maxlength=\"10\">\n                    </div>\n                </div>\n                <!-- <div class=\"form-group cust-form-label\">\n                    <label class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label\">MVA Number</label>\n                    <div class=\"col-xs-9 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"23456789\" [(ngModel)]=\"mvaNumber\" name=\"mvaNumber\">\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-3 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n                </div> -->\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Last Name\" [(ngModel)]=\"lastName\" name=\"lastName\" maxlength=\"30\">\n                    </div>\n                </div>\n                </div>\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Claim Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Claim Number\" [(ngModel)]=\"claimNumber\" name=\"claimNumber\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\" style=\"margin-bottom: 10px;\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block \" (click)=\"checkClaim('new')\">Report Car Incident</button>\n\t\t\t\t\t </div>\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 \">\n                        <button type=\"submit\" class=\"btn btn-default btn-block\" (click)=\"checkClaim('about')\">View / Edit Claim</button>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n\n\n\n<!--\n<div class=\"jumbotron\">\n \n\n\t<div class=\"container\">\n\t\t<div class=\"imgwrapper\">\n\t\t\t<img src=\"Avis.png\" class=\"img-responsive\">\n\t\t</div>\n\n\t\t<h3 class=\"text-center\">Report Car Accident</h3>\n\t\t<div *ngIf=\"blankFields\" class=\"alert alert-danger box-msg\"\n\t\t\trole=\"alert\">\n\t\t\t<strong>Please provide valid RA Number, Last Name or Claim\n\t\t\t\tNumber</strong>\n\t\t</div>\n\n\n\t\t<table class=\"table\">\n\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div *ngIf=\"openScanner\"> <qr-scanner [debug]='true' [canvasWidth]='640' [canvasHeight]='480' [mirror]='false' [stopAfterScan]='true' [updateTime]='500' (onRead)='decodedOutput(string)'></qr-scanner></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">RA Number</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter RA Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"raNumber\" value=\"U12345567\">\n\t\t\t\t\t </div></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">MVA Number</font></td>\n\t\t\t\t\t<td width=\"50%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter MVA Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"mvaNumber\" value=\"23456789\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t\t\t<td width=\"20%\">\n\t\t\t\t\t\t\t<button id='scannerButton' class=\"btn btn-default\"  (click)=\"openScanner= true;\">Scan MVA</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">Last\n\t\t\t\t\t\t\tName</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Last Name\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"lastName\" value=\"Smith\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">Claim\n\t\t\t\t\t\t\tNumber</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Claim Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"claimNumber\" name=\"claimNumber\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t</tr>\n\n\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<ul>\n\t\t\t<div>\n\t\t\t\t<button id=\"newEventbutton\" name=\"newEventbutton\"\n\t\t\t\t\tclass=\"btn btn-default\" (click)=\"checkClaim('new')\">New\n\t\t\t\t\tIncident</button>\n\t\t\t\t<button id=\"retreiveClaimButton\" name=\"retreiveClaimButton\"\n\t\t\t\t\t(click)=\"checkClaim('about')\" class=\"btn btn-default\" color=#ffffff>Existing\n\t\t\t\t\tClaim Details</button>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>\n-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\r\n\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<!-- <div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\tname=\"incidentCity\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\tname=\"incidentState\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\tname=\"incidentZipCode\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\tname=\"policyNumber\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\" [(ngModel)]=\"damageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"damageDescription\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\tname=\"partyName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\tname=\"partyAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\tname=\"partyContact\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"partyDamageDescription\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Add\r\n\t\t\t\t\t\tDamage Photos</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<!-- <form class=\"form-horizontal\"> -->\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos()\">Add Photo</button>\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera5\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera5')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos2()\">Add Photo</button>\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos2\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera6\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera6')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n<!-- </div> -->\r\n\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"retreivePhotos()\">View\r\n\t\t\t\t\t\t\tExisting Photos</button>\r\n\r\n\r\n\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5xDAxRlCChGQeuay7+QRySHAPsMc+1XNKuPt+mxzuqRs5b5E6LyRgGsjULJluWO/KtyMmvlkrM95lC71WcKNluqf77j+QrIn1XUWkAUQqCwGRkt+WP61rT6fknOR6GqbadhsHOfbvW8WuxDXmZ7ahdPICZYvTiI//ABVOxcSgD7XOq552BFyfwXP61fm04SgMMbx94evvVmC0CIgAzycnvmtLroRyp7kej6dFaXAnLzvLg/62dmB/AnFXb+5zgK3amGI5BAPIqKdDsJIxzWbd3dlxSjojk9SklXW90U0lvKkQYSxNhhgnpVFrJWwDNKykjjdxWlfw7tcAOVBhAJGOPmPrVfRLddTm2T3AtAZQm90OApYDd74GT26D8OqC0IldGbaWsMoG/e7IMMSxwTkg/qKuizhltJFit/MkOAAAWPUVo6BololndSXF4IXlbPlSI2V78EZGOe+OhqC7tba0dD9pWWFiPMCAqR+eKrmTdrkcrtdozTHHCSqqqr1AAFFQm5C4VnQkDBOaKqyepSm1pY9b8Hz+ZYzQ4wUbIX0B/wDrg1qaiAQPXnmuX0e/itNTR0R4Y7mMLhzwWzxjHXv+f1ro76UPBnJzXnyg4OzNY1FU95FR0BUgkYNZtwMZB9cCrH2jLdBVeUecSo6ngUkBDbx5YuCQQePer8NvwHGcMTkehqKG3dFCkhipPQYzmtC3wCMDI6lc1XkAwQARhj0Has3VZlgRdoG/gj8q0b5mSMjt2P41zd+7SMzdR+nWmkBhXMV3rGttHbxl5PJzhByACcn8qpa5p97oOpTWF6HhuYcb42yCMgEZH0NdP4NvYdP8YedNMIYvspVjz/eBxxn0ql8U75tf8canqcEayWU5TbIXEbHaiqSVJ4yRnr3rtio21MXz30vY5BpC3VifxpbiUG12erAfrU16IzodlbpNapdRzySSPvHKsqYBI64Kt9M+5qC91DT/ALDb28bBnjkZ2lOCTkAAAjsMH861suhk73/zIhKsZKkgYNFVZZfPctGSV9uaKXK2UpJI9a1Nhc6dZXWxUlEm4OPTGQP1rSvbvMbKMs/TavNS+Hvg/wCLVtY4tSiklhT7sAkj2n1z83Nd7YfCXUWgGYYbc44V36fkDXLU5ZaJ3Jp3he55YZJEQsYJjx1GP8aZBqSht/lkgEAKW5/H0r1y4/Z+8T6lH5iyW0FjkiSZEd+n8P3QO/rXMaR8NYrufUXhkOq6XaGWA6nbyqkZuI1jZo0XDNIcSYAAG4qcNgZpRpOWyNXVjFXkzmU1jICrarn3f/61WEvJN26MRg+hQkfzFe/y/ArwRcy6TNp8+uXUV8YxLDYW3mtb5yWyGGSdqynGOPKbNdv4d+CXg8X2i/2ZBf8AnyfvZ5LmFZWVRG4bMb/Iw3p3HGSCp6jZYWbehk8XRVmfJYhu7oSITGqsONqc5yPUntn9Kry+CtTuoCsFyMN2dAP1Ar6t8UfD7wloF3NbjTnuxCRbnUWtJjBau+8QNceTtG2SVCgb7xyQAcKG7r4L+EPDHiDw1qlpe6dpM3iTRL+S2vYbWIFHQuBC6GT5iGJZRk5O3Na/VakXZkLGUmrpHwMfg/rV1I26dQHTBccgYOfb3qhcfAG+gRs3O5Sc58rH9a/XnSfBVlawLbLbJDGo+VEUYX8BW7a+D9NmtGs7qytL6z4zbXMStExByCUYY49cf0rWNOS0uRKvGT1ifivc/Ci6skC+axA6/LisSfwV9kYh8jHTIr9ZvjJ+x3p2t6NPr3gux8i7iDSXOkxP5iOvcw553Dk7OhB4AICt8W+JfhYSjgR4PbjGKxm6kHqdMFTqK6PmdvDOCdkjKvooor06/wDAl9bXLIke9R0OcUVj7aR0ezR9O+FPEOla54sk0eST7NaTQFLG/l4ikuiRsDZx8uM9x2yRV3XvE+mWXgXTLu3hW71GRmtNQ8iY7bWQAkH7hKMxQqY3AZTuBwvzH5Mj1W51bW7fTbicWWkG6WLNyXSIgtjDsoJCgdcAn0BNeh+C/hjPpng9/E1tffbpLCZ5p7CIPIqAyrhd2PmbDhgcYZVkztKqJeuNGPK01qeRKrLmTufUnjSx8UjwNBoKW9rbWkukpchJJf3lw7YxtIfBwS5baM89cEY+Y/hrB4o1XUUXS9CgvY7e7EE+g7wsMTb1VJkVZFfeGkPzAHgZOQDj3X4TftFWHizQ7zQ7vVYvD0tvAfsPm3CiMvggo2/oGGc54B257msPwR8OtYvPHvh/xF4b0O4uCkrJfS212jRHcp2EOoKgAFSdxzjjHIrpv7qutUclvefZkXwM8da3afEi2tLS222tpPe3X9mxymREDWVxJiPsRlWAxgA54O4mtPw/rviLT9ftmhil8PXukuZRqMEXmQQHbki7ViQEYSkl2bZtVsKMfN3/AIn8EWPw6+Iuk+M4ItP0DU7uAxxabPduyyTsczbnVQqDYzx7QNoJb7275fnL9vrxhZ3uoeH9Ct9Ihs9bvw+oXmokbpZrZm2wYYKBtO2TjlsIvzcnN80U9BKEp6XNbxX+3JZ3tzJLpPh2zm1C6hhW7luGPkLMlws7NGik713xRFC7EphgB8xLeufsd+O/hnq+p/areS/s/GFtYJbS22pzxyi7VCmDb7VUyOpjRgpG4dV3bcj89/DkcdhcKEQOVPVhnP1r7M+GfwY0P4kfDXV57eyFj4isrcXljqEDFAJUBKxvj+FsYyOR1Ga5JYu8uXoewsvSp899T9A7Syt7mFbq3YT2smSssfzKemfx56dani8OXDTpfWsxMKKyNFGcrICevXO4Y479fWvBv2QPHuoeJvChuZBFc3y6dPbXenIxIku4WEsMm3cdrSozKSMAskmAAK9t8R+NrPwZqmg6nBKyaDrkAaVZv9VkgFGyAdjZbBP5jit723PPaO18LyT23ku7bi2VPI2nDFe5/HrXmHx+/ZxtPFqXXiTw3ahdTIMl5YRLj7R3MkY/v+oH3uSPm+96VDqsdp4cvNYltrg2tsvnsYnzkKQcpn72VPt09+G/Dz4p6V4tu5rKOG+sbmEt8t/D5Zf7vIOTkcn8qbSkrMcJuD5on54X/gKP7S26M5/3aK/Q/wAUfAXwn4v1mbVbiCe3uZ+ZfsjqqO3diCp5PfHXr1JJK4nhnc9FYpWPkuf9lnwPeawLyZLkSxyLLsRkVAR6jbyTjpXT237PPw9hk+Twjpqs0hlaSWASSu5JJJJyepPH4AAV00eqWwl+WXnqGCkk/pWlbX8MWSZG3MeSVPf0NVH3djieu5FY+CdC0homtNGsLPyzkNDborA/UDrXV2flGMMcRL1d+/0Fc3ca3bRxBi7BMgYx6nrXJeKPjHpGhwTRbmkULtBU4Dfj/nqKOZLcLNnsV5eWttaiFkUbIyAp/gDYPPqa/Ib9ugTXP7T+uuCz28Fjam3UnO1fJQH6ZkLt/wACr6r+Iv7VV/fLLDpKFDnmaTgn8q+F/inq974m8f395eztPdz2ibpH54DEY/KoVZO6RvTpPmVzjdJ1OSK5w4jH+71r6F+Avx28YeAfGL+HI72y06wMc5uLXU4wA5RGfy8no5K7VA5JIHevne10uO2uxNK4UKRlm4HXFfbPgF/h58WfGnh7xM9sV8VxqIb15MxQXM0aonzAfKxKOPm6n5gynGW55SgpXPWjCpKHKeqfsX+IYPDPxa8e6feTpZWmoz2WpWTMrBHjkWaT5cjkLuYFv+mZB5r6wls9K8Z+AIPDWpNGIbmB4IZflKrNyVZSONwbkY/rXxz4g1hdN+Mj3Ok2aW8I0i3tBuAUIA8wKgAY7/hx616foGv3wsjEbwqnmK/lq2ADXXTqc0Vc8jEUnCo7H0r8I2kg+D+l6Xqexr+KNrW5jlIbJBIGfUFQPrWCbay8Oa/arGRZhFESRR8A56EAcccjj0riNH8RRnR1eKYMQT5kbNlgf8+1Gr+NoY7JryWKQm2Kn5RzkEnHb0rpTOSx7t4I8TvrukSTweddqk7xNIAF+ZcZGDzn+tFeQ+BPG134e8OQ26lIpJXe5mWTORJIxc/luxj2orRPyJt5nzbb/FFY73fO8xijy5VWIBHQLx+H5Utx8YLeGIo3mGQE79xwCT1/oPoK8auvFcUSEeSTwF69T3rAvtf+0NkJtySevXvXhubPSUFc9Q1v4ySvI32UvFk5+8ec/wCFec614kvdYkZ5pSV7DNYP20uSxPX361G96E+U8ge/SsW2zdWWwtyhcEg4yOleTePbE2uuQXBUgSRFMkehz/jXpd7qvlofmGMZzXnfxD1CK60kP5g86KQMo/n/ADNaU07iUkpJs4LUjJJdRxgFVJyT/wDX7V9U/BTxJqWhaHoelSz6XquhyzPIXtpS02ny5IG8MqkBsYypZcHkg4r5RW+S4X5mwcd69W+Guq6DpujhYJZ49Yc4kVpB5bjPBA6jHHX0rSafJax305Rc7n1R4q1xbi/tmQK0sal2kzyMdvpyDUtt4ukhCrJK2VXoOmMV5LZ+ONPWQRS3LSTG3ZWJ6FjtJI/DH6VoxeNtOnut6sWBQpt+qkD9adKLjFI4sVNTqNo9k0f4xXeiOUt7GzvYp1JCXPmgkdx8rj+VTXPxf1bWry1srTTtP0uWZgGEfmSbvRfnc4+o55ryK212FJI3jyWtrcqCehPA/wAau6Traf2rp8jo3mGeOUZPO1QePx/pXXFvZs8+y7Hqz/ETV2lkxMCwYh2WcgFu5+YZorzSN/twMyNtLH5uep9aK1THoeeTOVx369fpVWb72c+1FFeSdciiZGTBHUms++unjgdweQeKKKaM3ued694hvUJCyYHPSvP9Vv59QmljmlYooDYHckgf1oorvopGM/8AIyoZ3HG4kehrZ0rUZLWfzAiPjPysDj8cHn+VFFdaSuZNvlep7r8Ntdk8X6ao1O2tZ/szlIj5WCo4GPyA/IV2Nz4a0yG0NzDZrbzKdytEzLg/TOKKK7oJSWpw3ak7GTotzLHOtvvLph+W6nHT+ddYrtHqUKgnCIoGfpRRXmySTZ3XOnt3yhyozk8880UUUjdbH//Z\" id=\"photo-id\"/> -->\r\n\t\t\t\t\t\t<div *ngIf=\"cameraImages\">\r\n\t\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" /> -->\r\n<br/>\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera2}}\" id=\"photo-id\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera3}}\" id=\"photo-id\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera4}}\" id=\"photo-id\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\r\n\t\t<br />\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\tdata-toggle=\"modal\" (click)=\"updateClaim()\">Update Claim\r\n\t\t\t\tDetails</button>\r\n\t\t</div>\r\n\t\t<br />\r\n\r\n\t\t<div *ngIf=\"updateClaimSuccess\" class=\"alert alert-success box-msg\"\r\n\t\t\trole=\"alert\">Claim details updated successfully</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Claim Number # {{claimNumber}}</h3>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Your claim is reported with AVIS.</h5>\r\n\t\t<h5 class=\"text-center\">We will get back to you shortly.</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Please make a note of your claim ID for\r\n\t\t\tfurther communication</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">\r\n\t\t\tIf you have any queries, you can mail us at <span style=\"color: red\">help@avis.com</span>\r\n\t\t</h5>\r\n\t\t<br />\r\n\t\t<h3 class=\"text-center\">Thank You!</h3>\r\n\t\t<br />\r\n\t\t<div>\r\n\t\t\t<img src=\"../app/images/Avis.png\" class=\"img-responsive center-block\"\r\n\t\t\t\twidth=\"50%\" height=\"50%\">\r\n\t\t</div>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\t<div *ngIf=\"claimCreation\">\r\n\t\t<form class=\"form-horizontal bg-primarya\">\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label text-white\">Renter\r\n\t\t\t\t\tName</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">John Smith</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Vehicle\r\n\t\t\t\t\tMake/Model</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">HONDA CIVIC 4DR</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tOut Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2017-07-01</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tIn Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2017-07-08</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t\t<br />\r\n\r\n\t\t<p align=\"justify\">To report new incident/accident, you need to\r\n\t\t\tsubmit maximum number of information given in the fields below.</p>\r\n\t\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentCity\" maxlength=\"30\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentState\" maxlength=\"2\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentZipCode\" maxlength=\"12\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"15\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceAddress\" maxlength=\"60\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\t\tname=\"policyNumber\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageDescription\" name=\"damageDescription\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"100\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Drivable\r\n\t\t\t\t\t\t\t\tCar Indicator</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"drivableCarInd\"\r\n\t\t\t\t\t\t\t\t\tname=\"drivableCarInd\">\r\n\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyAddress\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyContact\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyDamageDescription\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse5\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Select\r\n\t\t\t\t\t\t\tDamage Area</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse5\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div *ngIf=\"initialImageDS\">\r\n\t\t\t\t\t\t\t<p>Please click on front, back or side of the vehicle image\r\n\t\t\t\t\t\t\t\tto view enlarged image of the vehicle to mark the damage area</p>\r\n\t\t\t\t\t\t\t<div ng-app=\"app\">\r\n\t\t\t\t\t\t\t\t<div ng-controller=\"imgMapCtrl\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"rwdimgmap\" src=\"../app/images/damage_car.svg\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"Responsive image\" border=\"0\" usemap=\"#auto\" />\r\n\t\t\t\t\t\t\t\t\t<map name=\"auto\" id=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,0,342,50\" (click)=\"rearCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Rear End\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,51,342, 230\" (click)=\"sideCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Side Damage\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,320,342, 100\" (click)=\"frontCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Front End\" />\r\n\t\t\t\t\t\t\t\t\t</map>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"frontCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarFront.jpg\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"rearCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarRear.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"sideCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarSide.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Damage\r\n\t\t\t\t\t\t\tPhotos</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t(click)=\"getRoverPhoto()\">Retrieve Damage Report</button>\r\n\t\t\t\t\t <div *ngIf=\"roverImage\">\r\n\t\t\t\t\t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\" [zoom]=\"0.44\"> </pdf-viewer>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera1\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera3\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera3')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera4\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera4')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\"\r\n\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t(click)=\"createClaim()\">Create Claim</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ })

},[1026]);
//# sourceMappingURL=main.bundle.map