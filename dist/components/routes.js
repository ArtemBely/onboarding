import Create from './Create';
import Main from './Main';
import Personal from './Personal';
import Financial from './Financial';
import Documents from './Documents';
import AccountVerification from './AccountVerification';
import Finish from './Finish';
import Company from './CompanyComponents/Company';
import CompanyPersonal from './CompanyComponents/CompanyPersonal';
import Parties from './CompanyComponents/Parties';
import Profile from './ProfileComponents/Profile';
import Admin from './AdminComponents/Admin';
const routes = [
    {
        path: '/registration',
        exact: true,
        component: Main
    },
    {
        path: '/create_account',
        exact: true,
        component: Create
    },
    {
        path: '/personal_details',
        exact: true,
        component: Personal
    },
    {
        path: '/financial_situation',
        exact: true,
        component: Financial
    },
    {
        path: ['/documents', '/company_documents'],
        exact: true,
        component: Documents
    },
    {
        path: ['/verification', '/company_verification'],
        exact: true,
        component: AccountVerification
    },
    {
        path: ['/finish', '/company_finish'],
        exact: true,
        component: Finish
    },
    {
        path: '/company_details',
        exact: true,
        component: Company
    },
    {
        path: '/company_personal',
        exact: true,
        component: CompanyPersonal
    },
    {
        path: '/parties',
        exact: true,
        component: Parties
    },
    {
        path: '/admin',
        exact: true,
        component: Admin
    },
    {
        path: ['/profile', '/account_details', '/account_finances',
            '/account_documents', '/connected_parties', '/account_company_details'],
        exact: true,
        component: Profile
    }
];
export default routes;
