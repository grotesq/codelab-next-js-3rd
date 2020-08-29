import { Button, Form, Input } from 'antd';
import axios from 'axios';

function SignUp(props){
    return (
        <Form onFinish={values => {
            axios.post( 'http://127.0.0.1:3333/api/sign-up', values )
                .then( response=>{
                    console.log( response );
                } )
                .catch( error => {
                    console.warn( error );
                } )
        }}>
            <Form.Item label="이메일" name="email">
                <Input/>
            </Form.Item>
            <Form.Item label="비밀번호" name="password">
                <Input/>
            </Form.Item>
            <Form.Item label="이름" name="name">
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">회원 가입</Button>
            </Form.Item>
        </Form>
    )
}

export default SignUp;