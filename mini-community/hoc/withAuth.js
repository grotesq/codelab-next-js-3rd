import axios from "axios";
import Cookies from 'universal-cookie';
import SignIn from "../components/SignIn";

export default function( Component ) {
    function WithAuth(props) {
        if( props.error ) {
            return <SignIn {...props}/>
        }
        return (
            <Component {...props}/>
        )
    }

    WithAuth.getInitialProps = async context => {
        let props = {};
        const cookies = context.req ? new Cookies(context.req.headers.cookie) : new Cookies();
        const token = cookies.get( 'mini-community-token' );
        if( !token ) {
            return {
                error: '토큰이 필요합니다.',
            }
        }
        try {
            const response = await axios.get( 'http://127.0.0.1:3333/api/me', {
                headers: {
                    token,
                }
            } );
            props.auth = response.data;
        }
        catch( error ) {
            return {
                error: '유효한 토큰이 필요합니다.',
            }
        }
        
        if( Component.getInitialProps ) {
            props = {
                ...props,
                ...(await Component.getInitialProps( context ))
            }
        }
        return props;
    }

    return WithAuth;
}