import React from 'react';
import Head from 'next/Head';
import Link from 'next/Link';
import {
  Layout,
  Form,
  Select,
  Input,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd';
import MarkDown from 'react-markdown';

import 'antd/dist/antd.css';

const {
  Header,
  Content,
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;
const {TextArea} = Input;

const Home = () => {
  const [content, setContent] = React.useState('');
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-ant-design)</title>
      </Head>
  
      <Header>
        <Link href="/next">
          <a>Go to next page</a>
        </Link>
      </Header>
  
      <Content style={{ padding: 48, display: 'flex' }}>
        <TextArea style={{ flex: 1 }}
          value={ content }
          onChange={ event => setContent( event.target.value )}
        />
        <div style={{ flex: 1, border: '1px solid #e5e5e5', padding: 12 }}>
          <MarkDown source={ content }/>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Home;
