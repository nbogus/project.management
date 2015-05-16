/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var EmployeeService = (function () {
        /* @ngInject */
        function EmployeeService($q, _) {
            this.$q = $q;
            this._ = _;
        }
        return EmployeeService;
    })();
    projectManagement.EmployeeService = EmployeeService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=employee.service.js.map