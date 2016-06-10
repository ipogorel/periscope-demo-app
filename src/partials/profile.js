import {AuthService,BaseConfig} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {HttpClient,json} from 'aurelia-fetch-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ValidationEngine, Validator} from 'aurelia-validatejs';

@inject(AuthService, HttpClient, BaseConfig, EventAggregator)
export class Profile{

  roles = ["member","admin"];
  heading = 'Profile';
  errors = [];

  constructor(auth, http, config, eventAggregator){
    this.auth = auth;
    this.http = http;
    this.config = config.current;
    this.profile = {};
    this.profileUrl = this.getProfileUrl();
    this.eventAggregator = eventAggregator;

    this.validator = new Validator(this.profile)
      .ensure('email')
      .required()
      .ensure('displayName')
      .required();
    this.reporter = ValidationEngine.getValidationReporter(this.profile);
    this.subscriber = this.reporter.subscribe(result => {
      this.renderErrors(result);
    });
  };

  hasErrors() {
    return !!this.errors.length;
  }

  bind(){
    return this.getMe().then(data=>{
      this.profile = data;
    });
  }

  updateProfile(){
    //this.validator.validate();
    //if (!this.hasErrors()) {
      return this.http
        .fetch(this.profileUrl, {
          method: 'put',
          body: json(this.profile)
        })
        .then(response=> {
          this.eventAggregator.publish("user-profile-channel", {success: true});

        })
        .catch(err=> {
          err.json().then(function (e) {
            self.renderErrors([{message: ("profile update error: " + e.message)}]);
          });
        });
    //}
  }

  link(provider){
    return this.auth.authenticate(provider, true, null)
      .then(()=> this.getMe())
      .then(data=>{
        this.profile = data;
      })
      .catch(err=>{
        console.log("profile failure");
      });
  }
  unlink(provider){
    return this.auth.unlink(provider)
      .then(()=> this.getMe())
      .then(data=>{
        this.profile = data;
      });
  }

  getProfileUrl() {
    return this.config.baseUrl ?
      this.joinUrl(this.config.baseUrl, this.config.profileUrl) : this.config.profileUrl;
  }

  renderErrors(result) {
    this.errors.splice(0, this.errors.length);
    result.forEach(error => {
      this.errors.push(error)
    });
  }

  joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
      return url;
    }
    let joined = [baseUrl, url].join('/');
    let normalize = function(str) {
      return str
        .replace(/[\/]+/g, '/')
        .replace(/\/\?/g, '?')
        .replace(/\/\#/g, '#')
        .replace(/\:\//g, '://');
    };
    return normalize(joined);
  }

  getMe(){
    return this.http.fetch(this.profileUrl)
      .then(response => {return response.json(); })
      .then(data=>{
        return data;
      });
  }


}

