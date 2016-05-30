import 'fetch';
import 'font-awesome'
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('periscope-framework')
    .plugin('periscope-ui')
    .plugin('periscope-widgets-datatables')
    .plugin('periscope-widgets-chartjs')
    .plugin('periscope-elastic-search')
  aurelia.start().then(a => a.setRoot());
}
