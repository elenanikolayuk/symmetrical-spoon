import { Layout} from 'antd';
import { Routes, Route } from 'react-router-dom';
import Structure from './Content/ Structure';
import Home from './Content/Home';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem',
  };




export default function AppContent (){
    return (
        <Layout.Content style={contentStyle}>

        <Routes>
            {items.map(item => (
                <Route key={item.key} path={`/${item.label}`} element={<YourComponent />} />
            ))}
        </Routes>
            
            </Layout.Content>
    )
}


