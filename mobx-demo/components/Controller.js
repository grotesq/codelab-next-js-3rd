import store from '../observables/store';
import { observer } from 'mobx-react';

function Controller(props) {
    return (
        <div>
            <button onClick={ () => store.count++ }>카운트 증가</button>
        </div>
    )
}

Controller = ( Controller );

export default Controller;