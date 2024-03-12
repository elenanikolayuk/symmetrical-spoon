import React from 'react';
import { Layout} from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Layout >
      <AppHeader />
  <Layout>
     <AppSider />
     <AppContent />
  </Layout>
</Layout>
</BrowserRouter>
);  
};

export default App;