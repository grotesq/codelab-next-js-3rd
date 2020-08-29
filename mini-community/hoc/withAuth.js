import axios from "axios";
import Cookies from 'universal-cookie';
import SignIn from "../components/SignIn";
import MainLayout from "../components/MainLayout";

export default function( Component ) {
    function WithAuth(props) {
        if( props.error ) {
            return <MainLayout {...props}>
                <SignIn {...props}/>
            </MainLayout>
        }
        return (
            <Component {...props}/>
        )
    }

    WithAuth.getInitialProps = async context => {
        if( !context.auth ) {
            return {
                error: '인증이 필요합니다.',
            }
        }
        let props = {
            auth: context.auth,
        };
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