import { Layout, Menu  } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Структура проекта', '1'),
    getItem('Введение в VirtualDOM', '2'),
    getItem('Components', '3'),
    getItem('Props', '4'),
    getItem('State (useState)', '5'),
    getItem('LifeCycle (useEffect)', '6'),
    getItem('Events и как работать с ним', '7'),
    getItem('Refs Fragment, key, React.memo, useMemo, ...', '8'),
    getItem('Context (useContext)', '9'),
    getItem('React Router V6', '10'),
    getItem('react-hook-form VS formik', '11'),
    getItem('Про STORAGEs (Local Storage, Session Storage, Local Forage ...)', '12'),
    getItem('НОС', '13'),
  ]

const siderStyle = {
    textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001529',
  };

export default function AppSider (){
    const [collapsed, setCollapsed] = useState(false);
    
   
    return (
        <Layout.Sider width="25%" style={siderStyle}>

            <div
      style={{
        width: '100%',
      }}
    > 
    ТЕМЫ:
    <Menu.Item key={item.key}>
      <Link to={/${item.label}}>{item.label}</Link>
    </Menu.Item>

    </div>
            
      </Layout.Sider>
    )
}