const { default: MainLayout } = require("../components/MainLayout");

function PrivacyPolicy(props) {
    return (
        <MainLayout {...props}>
            <h1>개인 정보 처리 방침</h1>
        </MainLayout>
    )
}

export default PrivacyPolicy;