import React from 'react';
import { Button } from 'antd';

function Second(props) {
    return <div>
        <h1>데이터 조회</h1>

        <div>
            {/* 화면에 표시하는 데이터는 state로 관리 */}
            {/* 다시 읽기 버튼은 ajax 통신을 해서 state 업데이트 */}
            <Button type="primary">최신 데이터로 다시 읽기</Button>

            {/* 삭제 요청을 ajax 로 요청 */}
            {/* 요청이 성공하면 스크립트를 통해 페이지 이동 */}
            {/* Route.goBack(), Route.push() */}
            <Button type="danger">이 데이터 삭제</Button>
        </div>
    </div>
}

export default Second;