webpackJsonp([1,4],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(406);
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
    PostsService.prototype.updateClaimDetails = function (newClaim) {
        console.log("Called from Client" + newClaim.incidentCity + "brand is " + newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc " + newClaim.damageDescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("loc: " + PostsService.url);
        return this.http.put('https://f81381d2.ngrok.io/SpringMVC/rest/radetails/', newClaim, options)
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
    PostsService.url = 'https://f81381d2.ngrok.io/';
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/posts.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(247);
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
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
        };
        console.log("Service :" + postsService);
        console.log("before " + this.readOnlyMode);
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
        }
        /*
        this.header_title = "This is an about page!"
        this.renterName = "Mandar Kulkarni"
        this.raNumber = "U123456789"
        this.mvaNumber = "12345678"
        this.claimNumber = "179123456"
        this.claimStatus = "Open"
        this.paymentDue  = "150.00"
        this.paymentReceived = "0.00"
        this.incidentCity = "Boston"
        this.incidentState = "MA"
        this.incidentZipCode = "07054"
        this.incidentPoliceRpt = "A12345"
        this.insuranceName = "GEICO INSURANCE"
        this.insuranceAddress = "6 SYLVAN WAY"
        this.damageDescription = "Accidently hit left side curb on I-95"
        this.policyNumber = "L1233H78900"
        this.damageSeverity = "Light"
        */
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
            template: __webpack_require__(713),
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(171);
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
            template: __webpack_require__(714),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], ClaimAckComponent);
    return ClaimAckComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/claimAck.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(243);
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
            console.log("First request" + this.rentalAgreementNumber);
        }
        if (this.coDate == null) {
            this.makeModelDesc = "HONDA CIVIC 4DR";
            this.coDate = "2017-07-01";
            this.ciDate = "2017-07-08";
            this.firstName = "JOHN";
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
        }
        this.whatTime = new Date().toString();
        /*
        this.header_title = "This is an about page!"
        this.renterName = "Mandar Kulkarni"
        this.raNumber = "U123456789"
        this.mvaNumber = "12345678"
        this.claimNumber = "179123456"
        this.claimStatus = "Open"
        this.paymentDue  = "150.00"
        this.paymentReceived = "0.00"
        this.incidentCity = "Boston"
        this.incidentState = "MA"
        this.incidentZipCode = "07054"
        this.incidentPoliceRpt = "A12345"
        this.insuranceName = "GEICO INSURANCE"
        this.insuranceAddress = "6 SYLVAN WAY"
        this.damageDescription = "Accidently hit left side curb on I-95"
        this.policyNumber = "L1233H78900"
        this.damageSeverity = "Light"
        */
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
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
            //  Webcam.off("off");
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
    UserComponent.prototype.createClaim = function () {
        var _this = this;
        this.successClaim = true;
        /*        this.claimReceipt = true;
                this.claimCreation = false;*/
        console.log(this.incidentCity + " " + this.incidentState);
        this._newClaim = new Claim();
        if (this.rentalAgreementNumber == null) {
            this.rentalAgreementNumber = "U123456789";
            this.firstName = "John";
            this.lastName = "Smith";
            console.log("RA was null");
        }
        else {
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
            console.log("RA was not null");
        }
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
            template: __webpack_require__(715),
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

/***/ 434:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 434;


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(554);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/main.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(243);
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
        this.postsService = postsService;
        this.router = router;
        console.log("router value in app " + this.router);
        this.openScanner = false;
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
            template: __webpack_require__(712),
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

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_claimAck_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(555);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__["ImgMapComponent"],
                __WEBPACK_IMPORTED_MODULE_10__components_claimAck_component__["a" /* ClaimAckComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/kulkaman/eclipse-workspace-1/AccidentReport/src/app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_claimAck_component__ = __webpack_require__(365);
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

/***/ 556:
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

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<!-- <link rel=\"stylesheet\" href=\"/path/to/css/material-icons.min.css\">\\ -->\n\n <div class=\"container starter-template \" style=\"background-color: #E9E9E9 \">\n<nav class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" >\n\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" style=\"color:white;\" href = \"https://invulnerable-moliere-46227.herokuapp.com/\">AVIS</a>\n\t<!-- <a href=\"tel:18628034850\"><img src=\"./../app/Phone.png\" style=\"text-align: right; height: 35px; width: 30px; padding-top: 10px; position: absolute; right: 30px;\" ></a> -->\n\t<!-- <a href=\"tel:18628034850\"><img src=\"./../app/icon_contact.svg\" class=\"navbar-phone\" ></a> -->\n                <!-- class=\"img-responsive navbar-brand\"  -->\n            </div>\n    </nav>\n\t    </div>\n\t\n        <div class=\"container starter-template\" style=\"background-color: #E9E9E9 \">\n\t\t<!-- <a href=\"tel:1-862-803-4850\">Call me</a>\n\t\t <div id=\"box28\"> <a href=\"tel:1-862-803-4850\">Please call</a> </div>  -->\n            <p class=\"lead\" align=\"center\">Report Car Incident<br> </p>\n\n            <form class=\"form-horizontal\">\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">RA Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"U123456789\" [(ngModel)]=\"raNumber\" name=\"raNumber\">\n                    </div>\n                </div>\n                <!-- <div class=\"form-group cust-form-label\">\n                    <label class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label\">MVA Number</label>\n                    <div class=\"col-xs-9 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"23456789\" [(ngModel)]=\"mvaNumber\" name=\"mvaNumber\">\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-3 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n                </div> -->\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Smith\" [(ngModel)]=\"lastName\" name=\"lastName\">\n                    </div>\n                </div>\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Claim Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Claim Number\" [(ngModel)]=\"claimNumber\" name=\"claimNumber\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\" style=\"margin-bottom: 10px;\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block \" (click)=\"checkClaim('new')\">Report Car Incident</button>\n\t\t\t\t\t </div>\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 \">\n                        <button type=\"submit\" class=\"btn btn-default btn-block\" (click)=\"checkClaim('about')\">View / Edit Claim</button>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n\n\n\n<!--\n<div class=\"jumbotron\">\n \n\n\t<div class=\"container\">\n\t\t<div class=\"imgwrapper\">\n\t\t\t<img src=\"Avis.png\" class=\"img-responsive\">\n\t\t</div>\n\n\t\t<h3 class=\"text-center\">Report Car Accident</h3>\n\t\t<div *ngIf=\"blankFields\" class=\"alert alert-danger box-msg\"\n\t\t\trole=\"alert\">\n\t\t\t<strong>Please provide valid RA Number, Last Name or Claim\n\t\t\t\tNumber</strong>\n\t\t</div>\n\n\n\t\t<table class=\"table\">\n\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div *ngIf=\"openScanner\"> <qr-scanner [debug]='true' [canvasWidth]='640' [canvasHeight]='480' [mirror]='false' [stopAfterScan]='true' [updateTime]='500' (onRead)='decodedOutput(string)'></qr-scanner></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">RA Number</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter RA Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"raNumber\" value=\"U12345567\">\n\t\t\t\t\t </div></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">MVA Number</font></td>\n\t\t\t\t\t<td width=\"50%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter MVA Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"mvaNumber\" value=\"23456789\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t\t\t<td width=\"20%\">\n\t\t\t\t\t\t\t<button id='scannerButton' class=\"btn btn-default\"  (click)=\"openScanner= true;\">Scan MVA</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">Last\n\t\t\t\t\t\t\tName</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Last Name\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\tname=\"lastName\" value=\"Smith\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"red\" width=\"30%\"><font color=\"white\">Claim\n\t\t\t\t\t\t\tNumber</font></td>\n\t\t\t\t\t<td width=\"70%\"><div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Claim Number\" aria-describedby=\"basic-addon1\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"claimNumber\" name=\"claimNumber\">\n\t\t\t\t\t\t</div></td>\n\t\t\t\t</tr>\n\n\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<ul>\n\t\t\t<div>\n\t\t\t\t<button id=\"newEventbutton\" name=\"newEventbutton\"\n\t\t\t\t\tclass=\"btn btn-default\" (click)=\"checkClaim('new')\">New\n\t\t\t\t\tIncident</button>\n\t\t\t\t<button id=\"retreiveClaimButton\" name=\"retreiveClaimButton\"\n\t\t\t\t\t(click)=\"checkClaim('about')\" class=\"btn btn-default\" color=#ffffff>Existing\n\t\t\t\t\tClaim Details</button>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>\n-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"readOnlyMode\">\r\n\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading1\">\r\n\t\t\t\t<h4 class=\"panel-title1\">\r\n\t\t\t\t\t<a>&nbsp;&nbsp;&nbsp;Incident Details&nbsp;&nbsp;&nbsp;<span><i\r\n\t\t\t\t\t\t\t(click)=\"editClaim()\" class=\"material-icons\">&#xe254;</i></span></a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentDate\" name=\"incidentDate\"\r\n\t\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentCity\" name=\"incidentCity\"\r\n\t\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentState\" name=\"incidentState\"\r\n\t\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentZipCode\" name=\"incidentZipCode\"\r\n\t\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\"\r\n\t\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t </div>\r\n\t\t\t</form>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading1\">\r\n\t\t\t\t<h4 class=\"panel-title1\">\r\n\t\t\t\t\t<a>&nbsp;&nbsp;&nbsp;Insurance Details&nbsp;&nbsp;&nbsp;<span><i\r\n\t\t\t\t\t\t\t(click)=\"editClaim()\" class=\"material-icons\">&#xe254;</i></span></a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"insuranceName\" name=\"insuranceName\"\r\n\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"insuranceAddress\" name=\"insuranceAddress\"\r\n\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\tNumber</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"policyNumber\" name=\"policyNumber\" disabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading1\">\r\n\t\t\t\t<h4 class=\"panel-title1\">\r\n\t\t\t\t\t<a>&nbsp;&nbsp;&nbsp;Car Damage Details&nbsp;&nbsp;&nbsp;<span><i\r\n\t\t\t\t\t\t\t(click)=\"editClaim()\" class=\"material-icons\">&#xe254;</i></span></a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\tDescription</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t[(ngModel)]=\"damageDescription\" name=\"damageDescription\"\r\n\t\t\t\t\t\tdisabled=\"disabled\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\tSeverity</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\"\r\n\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading1\">\r\n\t\t\t\t<h4 class=\"panel-title1\">\r\n\t\t\t\t\t<a>&nbsp;&nbsp;&nbsp;Property Damage details&nbsp;&nbsp;&nbsp;<span><i\r\n\t\t\t\t\t\t\t(click)=\"editClaim()\" class=\"material-icons\">&#xe254;</i></span></a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"partyName\" name=\"partyName\" disabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"partyAddress\" name=\"partyAddress\" disabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"partyContact\" name=\"partyContact\" disabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\tDescription</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\" name=\"partyDamageDescription\"\r\n\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\tPlate</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\"\r\n\t\t\t\t\t\tdisabled=\"disabled\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n\r\n\r\n<!-- <div *ngIf=\"editMode\"> -->\r\n<div class=\"container starter-template\" style=\"background-color: #E9E9E9 \">\r\n<div class=\"panel-group\" id=\"accordion\">\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\"\r\n\t\t\t\t\tclass=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident Details</a>\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<!-- <div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\tname=\"incidentCity\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\tname=\"incidentState\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\tname=\"incidentZipCode\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\"\r\n\t\t\t\t\tclass=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance Details</a>\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\tname=\"insuranceName\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\tname=\"insuranceAddress\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\tname=\"policyNumber\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\"\r\n\t\t\t\t\tclass=\"collapsed\">&nbsp;&nbsp;&nbsp;Car Damage Details</a>\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\tplaceholder=\"Damage Description\" [(ngModel)]=\"damageDescription\"\r\n\t\t\t\t\t\t\tname=\"damageDescription\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\tSeverity</label><br />\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"col-sm-6 col-md-6 col-lg-6 form-group btn dropdown-toggle\">\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\">\r\n\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\"\r\n\t\t\t\t\tclass=\"collapsed\">&nbsp;&nbsp;&nbsp;Property Damage details</a>\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\tname=\"partyName\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\tname=\"partyAddress\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\tname=\"partyContact\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\tname=\"partyDamageDescription\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Add\r\n\t\t\t\t\t\tDamage Photos</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<!-- <form class=\"form-horizontal\"> -->\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\"\r\n\t\t\t\t\t\t(click)=\"addPhotos()\">Add Photo</button>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera5\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera5')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\"\r\n\t\t\t\t\t\t(click)=\"addPhotos2()\">Add Photo</button>\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos2\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera6\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera6')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<br />\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\tdata-toggle=\"modal\" (click)=\"updateClaim()\">Update Claim\r\n\t\t\t\t\tDetails</button>\r\n\t\t\t</div>\r\n\t\t\t<br />\r\n\r\n\t\t\t<div *ngIf=\"updateClaimSuccess\" class=\"alert alert-success box-msg\"\r\n\t\t\t\trole=\"alert\">Claim details updated successfully</div>\r\n\t\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Claim Number # {{claimNumber}}</h3>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Your claim is reported with AVIS.</h5>\r\n\t\t<h5 class=\"text-center\">We will get back to you shortly.</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Please make a note of your claim ID for\r\n\t\t\tfurther communication</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">\r\n\t\t\tIf you have any queries, you can mail us at <span style=\"color: red\">help@avis.com</span>\r\n\t\t</h5>\r\n\t\t<br />\r\n\t\t<h3 class=\"text-center\">Thank You!</h3>\r\n\t\t<br />\r\n\t\t<div>\r\n\t\t\t<img src=\"../app/images/Avis.png\" class=\"img-responsive center-block\"\r\n\t\t\t\twidth=\"50%\" height=\"50%\">\r\n\t\t</div>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container starter-template\" style=\"background-color: #E9E9E9 \">\r\n\t<div *ngIf=\"claimCreation\">\r\n\t\t<form class=\"form-horizontal bg-primarya\">\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label text-white\">Renter\r\n\t\t\t\t\tName</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">John Smith</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Vehicle\r\n\t\t\t\t\tMake/Model</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">HONDA CIVIC 4DR</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tOut Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2017-07-01</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tIn Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2017-07-08</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t\t<br />\r\n\r\n\t\t<p align=\"justify\">To report new incident/accident, you need to\r\n\t\t\tsubmit maximum number of information given in the fields below.</p>\r\n\t\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentCity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentState\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentZipCode\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceName\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceAddress\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\t\tname=\"policyNumber\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\" [(ngModel)]=\"damageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"damageDescription\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"damageSeverity\"\r\n\t\t\t\t\t\t\t\tname=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; background-color: yellow;\">No\r\n\t\t\t\t\t\t\t\t\tdamage</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; background-color: orange;\">Light</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; background-color: green;\">\r\n\t\t\t\t\t\t\t\t\tModerate</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; background-color: red;\">Heavy</div>\r\n\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Drivable Car Indicator</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<label class=\"custom-control custom-checkbox\"> <input\r\n\t\t\t\t\t\t\ttype=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"drivableCarInd\"\r\n\t\t\t\t\t\t\t\tname=\"drivableCarInd\">  \r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\"\r\n\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;Property Damage details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\tname=\"partyName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\tname=\"partyAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\tname=\"partyContact\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"partyDamageDescription\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse5\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Select\r\n\t\t\t\t\t\t\tDamage Area</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse5\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div *ngIf=\"initialImageDS\">\r\n\t\t\t\t\t\t<p>Please click on front, back or side of the vehicle image to view enlarged image of the vehicle to mark the damage area</p>\r\n\t\t\t\t\t\t\t<div ng-app=\"app\">\r\n\t\t\t\t\t\t\t\t<div ng-controller=\"imgMapCtrl\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"rwdimgmap\" src=\"../app/images/damage_car.svg\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"Responsive image\" border=\"0\"\r\n\t\t\t\t\t\t\t\t\t\tusemap=\"#auto\" />\r\n\t\t\t\t\t\t\t\t\t<map name=\"auto\" id=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,0,342,50\" (click)=\"rearCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Rear End\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,51,342, 230\" (click)=\"sideCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Side Damage\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,320,342, 100\" (click)=\"frontCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Front End\" />\r\n\t\t\t\t\t\t\t\t\t</map>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"frontCar\">\r\n\t\t\t\t\t\t<p>Select the damage area by clicking the location of the damaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarFront.jpg\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"rearCar\">\r\n\t\t\t\t\t\t<p>Select the damage area by clicking the location of the damaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarRear.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"sideCar\">\r\n\t\t\t\t\t\t<p>Select the damage area by clicking the location of the damaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../app/images/CarSide.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\"\r\n\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;Damage Photos</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera1\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera3\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera3')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera4\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera4')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\"\r\n\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;Upload Your Signature</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\"\r\n\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t(click)=\"createClaim()\">Create Claim</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div *ngIf=\"claimReceipt\">\r\n\t\t<h3 class=\"text-center\">Claim Number # 3269215</h3>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Your claim is reported with AVIS.</h5>\r\n\t\t<h5 class=\"text-center\">We will get back to you shortly.</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Please make a note of your claim ID for\r\n\t\t\tfurther communication</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">\r\n\t\t\tIf you have any queries, you can mail us at <span style=\"color: red\">help@avis.com</span>\r\n\t\t</h5>\r\n\t\t<br />\r\n\t\t<h3 class=\"text-center\">Thank You!</h3>\r\n\t\t<br />\r\n\t\t<div>\r\n\t\t\t<img src=\"../app/images/Avis.png\" class=\"img-responsive center-block\"\r\n\t\t\t\twidth=\"50%\" height=\"50%\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(435);


/***/ })

},[985]);
//# sourceMappingURL=main.bundle.map