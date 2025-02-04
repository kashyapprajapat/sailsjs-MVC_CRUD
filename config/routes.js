module.exports.routes = {

  '/': 'PageController.homepage',

  'GET /employee/list': 'EmployeeController.list',
  'GET /employee/add': { view: 'pages/addemployee' },
  'POST /employee/add': 'EmployeeController.add',
  'POST /employee/update/:id': 'EmployeeController.update',
  'POST /employee/delete/:id': 'EmployeeController.delete',

  /***************************************************************************
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes). If it does   *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

};
