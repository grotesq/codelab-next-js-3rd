import withAuth from "../hoc/withAuth";

function Membership(props) {
    return (
        <div>
            <h1>유료 멤버십 소개</h1>

            <p>{props.auth.name}님을 위한 유료 멤버십을 안내해 드립니다.</p>
        </div>
    )
}

Membership = withAuth( Membership );

export default Membership;