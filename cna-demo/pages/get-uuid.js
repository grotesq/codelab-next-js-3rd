import Link from 'next/link';
import React from 'react';
import axios from 'axios';

function GetUuid(props) {
    console.log( 'GetUuid.render' );
    /*
    const [uuid, setUuid] = React.useState( '' );
    React.useEffect(()=>{
        // "화면"에 마운트가 된 이후 동작
        fetch( '/api/uuid' )
            .then( response => response.json() )
            .then( json => setUuid( json.uuid ) );
    }, []);
    */
    return (
        <div className="h-screen v-full flex flex-col justify-center items-center">
            <h1 className="mb-4">{ props.label }</h1>

            { props.uuid }

            <div className="mt-4">
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </div>
        </div>
    )
}

// getInitialProps
GetUuid.getInitialProps = async function() {
    console.log( 'GetUuid.getInitialProps' );
    // 반드시 async function 으로 작성
    const response = await axios.get( 'http://localhost:1234' + '/api/uuid' );
    return {
        label: 'UUID',
        uuid : response.data.uuid,
        debug: 'debug message',
    }
}

export default GetUuid;