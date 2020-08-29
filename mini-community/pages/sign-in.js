import SignInComponent from '../components/SignIn';
import MainLayout from '../components/MainLayout';

function SignIn(props) {
    return (
        <MainLayout {...props}>
            <SignInComponent {...props}/>
        </MainLayout>
    )
}

export default SignIn;