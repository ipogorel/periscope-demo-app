import 'fetch';
import 'font-awesome'
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .feature('periscope-framework')
    //.plugin("grofit/aurelia-chart");
  aurelia.start().then(a => a.setRoot());
}
