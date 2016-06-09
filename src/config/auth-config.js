var configForDevelopment = {
  loginRedirect: '#/profile-complete',
  baseUrl:'http://localhost:5000',
  loginUrl:'/auth/login',
  signupUrl: '/auth/signup',
  loginRoute: '/',
  signupRoute: '/signup',
  providers: {
    github:{
      clientId:'02a9ea70fa4093aebaeb',
      //redirectUri:window.location.origin || window.location.protocol + '//' + window.location.host + '/sign-up',
    },
    facebook:{
      clientId:'482058595322377'
    }
  }
};

var configForProduction = {
  providers: {
    google: {
      clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
    }
    ,
    linkedin:{
      clientId:'7561959vdub4x1'
    },
    facebook:{
      clientId:'482058595322377'
    }

  }
};
var config ;
if (window.location.hostname==='localhost') {
  config = configForDevelopment;
}
else{
  config = configForProduction;
}


export default config;
