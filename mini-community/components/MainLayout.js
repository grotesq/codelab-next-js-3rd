import Link from 'next/link';
import { Layout, Menu } from 'antd';
import Cookies from 'universal-cookie';
import Router from 'next/router';
import React from 'react';
import AuthContext from '../contexts/AuthContext';

const { Content, Header, Footer } = Layout;

function MainLayout(props) {
    const context = React.useContext( AuthContext );
    return (
        <Layout>
            <Header>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>
                        <Link href="/me">
                            <a>내 정보</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/membership">
                            <a>멤버십 안내</a>
                        </Link>
                    </Menu.Item>
                    {!context.auth && (
                        <Menu.Item>
                            <Link href="/sign-in">
                                <a>로그인</a>
                            </Link>
                        </Menu.Item>
                    )}
                    {!context.auth && (
                        <Menu.Item>
                            <Link href="/sign-up">
                                <a>회원가입</a>
                            </Link>
                        </Menu.Item>
                    )}
                    {context.auth && (
                        <Menu.Item>
                            <a onClick={()=>{
                                const cookies = new Cookies();
                                cookies.remove( 'mini-community-token' );
                                Router.reload();
                            }}>로그아웃</a>
                        </Menu.Item>
                    )}
                </Menu>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>
                        {context.auth && (
                            <>
                                {context.auth.name}님으로 로그인 하셨습니다.
                            </>
                        )}
                    </Menu.Item>
                </Menu>
                </div>
            </Header>
            <Content>
                { props.children }
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}

export default MainLayout;