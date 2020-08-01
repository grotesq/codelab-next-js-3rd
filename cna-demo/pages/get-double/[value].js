import { Button } from 'antd';
import axios from 'axios';
import Router from 'next/router';

function GetDouble(props) {
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="text-6xl">
                { props.value }
            </div>

            <div className="mt-4">
                <Button onClick={() => Router.back()}>돌아가기</Button>
            </div>
        </div>
    )
}

GetDouble.getInitialProps = async function( context ) {
    const value = context.query.value;
    const response = await axios.get( 'http://localhost:1234' + '/api/double?value=' + value );
    return {
        value: response.data.value,
    }
}

export default GetDouble;