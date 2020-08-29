import withAuth from "../hoc/withAuth";
import MainLayout from "../components/MainLayout";

function Membership(props) {
    return (
        <MainLayout>
            <h1>유료 멤버십 소개</h1>

            <p>{props.auth.name}님을 위한 유료 멤버십을 안내해 드립니다.</p>
        </MainLayout>
    )
}

Membership = withAuth( Membership );

export default Membership;