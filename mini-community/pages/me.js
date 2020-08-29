import { Descriptions } from "antd";
import SignIn from "../components/SignIn";
import withAuth from "../hoc/withAuth";

function Me(props) {
    if( props.error ) {
        return <SignIn {...props}/>
    }
    return (
        <div>
            <Descriptions title="Profile" borderd>
                <Descriptions.Item label="email">{ props.auth.email }</Descriptions.Item>
                <Descriptions.Item label="name">{ props.auth.name }</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

Me = withAuth( Me );

export default Me;