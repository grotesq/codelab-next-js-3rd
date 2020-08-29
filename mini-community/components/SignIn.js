import { Button, Form, Input } from 'antd';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Router, { useRouter } from 'next/router';

function SignIn(props) {
    const router = useRouter();
    return (
        <Form onFinish={ values => {
            axios.post( 'http://127.0.0.1:3333/api/sign-in', values )
                .then(response=>{
                    const user = response.data;
                    const token = user.token;
                    const cookies = new Cookies();
                    cookies.set( 'mini-community-token', token );
                    if( router.pathname === '/sign-in' ) {
                        Router.push( '/me' );
                    } else {
                        Router.reload();
                    }
                })
                .catch(error=>{
                    console.warn(error);
                    const message = error.response?.data?.message || error.message;
                    alert( message );
                });
        } }>
            <Form.Item label="이메일" name="email">
                <Input/>
            </Form.Item>
            <Form.Item label="비밀번호" name="password">
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">로그인</Button>
            </Form.Item>
        </Form> 
    )
}

export default SignIn;