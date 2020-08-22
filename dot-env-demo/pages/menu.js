import React from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: '메뉴',
      dataIndex: '메뉴',
      key: '메뉴',
    },
    {
      title: '가격',
      dataIndex: '가격',
      key: '가격',
    },
  ];

function Menu(props) {
    return (
        <>
            <Table dataSource={ props.menu } columns={ columns }
                rowKey={'메뉴'}/>
        </>
    )
}

Menu.getInitialProps = async () => {
    const response = await fetch( 'http://127.0.0.1:4001/api/menu');
    const menu = await response.json();
    return {
        menu,
    }
}

export default Menu;