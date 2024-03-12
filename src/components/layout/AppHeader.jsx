import { Layout} from 'antd';

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#001529',
    fontSize: 24,
  };


export default function AppHeader(){
    return(
        <Layout.Header style={headerStyle}>
            Основная теория по библиотеке React
            </Layout.Header>
    )
}