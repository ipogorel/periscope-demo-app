import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from 'aurelia-validatejs';
import {ValidationEngine, Validator} from 'aurelia-validatejs';
@inject(AuthService)
export class Signup{

  errors = [];
  model;
  subscriber;

  constructor(authService){
    this.auth = authService;
    this.model = new SignUpModel();
    this.validator = new Validator(this.model)
      .ensure('email')
      .email()
      .required()
      .ensure('displayName')
      .required()
      .ensure('password')
      .required();
    this.reporter = ValidationEngine.getValidationReporter(this.model);
    this.subscriber = this.reporter.subscribe(result => {
      this.renderErrors(result);
    });
  }
  signup(){
    this.validator.validate();
    if (!this.hasErrors()) {
      let self = this;
      return this.auth.signup(this.model.displayName, this.model.email, this.model.password)
        .then((response)=> {
          console.log("signed up");
        })
        .catch(err=>{
          err.json().then(function(e){
            self.renderErrors(["login failure : " + e.message]);
          });
        });
    }
  }

  hasErrors() {
    return !!this.errors.length;
  }

  renderErrors(result) {
    this.errors.splice(0, this.errors.length);
    result.forEach(error => {
      this.errors.push(error)
    });
  }

}

class SignUpModel {
  email='';
  password='';
  displayName='';
}

