import store from '../observables/store';
import { observer } from 'mobx-react';

function Display(props) {
    return (
        <div>
            Count : { store.count }
        </div>
    )
}

Display = observer(Display);

export default Display;