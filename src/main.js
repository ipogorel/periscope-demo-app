import 'fetch';
import 'font-awesome';
import config from './config/auth-config';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-validatejs')
    .plugin('periscope-framework')
    .plugin('periscope-ui')
    .plugin('periscope-widgets-datatables')
    .plugin('periscope-widgets-chartjs')
    .plugin('periscope-elastic-search')
    .plugin('aurelia-auth', (baseConfig)=>{
      baseConfig.configure(config);
    })
  aurelia.start().then(a => a.setRoot());
}
