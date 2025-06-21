import Layout from '@pages/Layout/Layout';
import Home from '@pages/Home/Home';

const appRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default appRoutes;
