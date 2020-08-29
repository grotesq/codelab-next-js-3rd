import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class SelfObserve extends React.Component {
    @observable selected = 'A';

    render() {
        return (
            <div>
                <div>
                    Select : { this.selected }
                </div>
                <button onClick={ () => this.selected = 'A' }>A</button>
                <button onClick={ () => this.selected = 'B' }>B</button>
            </div>
        )
    }
}

export default SelfObserve;