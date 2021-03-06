import React, {Component} from 'react';
import './note.scss';

class note extends Component{
    static defaultProps = {
        title : '',
        text : '',
        date: new Date()
    };

    state = {
        showEditModal: false,
        showDeleteModal: false
    }

    changeEditToogle = () => {
        this.setState({
            showChangeModal: !this.state.showChangeModal
        });
    };

    changeDeleteToogle = () => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal
        });
    };


    render = () => (
        <div id="note">
            <div id="note-menu">
                <span>
                    <span id="showChangeModal" onClick={this.changeEditToogle}>
                        편집
                    </span>
                    <span id="showDeleteModal" onClick={this.changeDeleteToogle}>
                        삭제
                    </span>      
                </span>
            </div>
            <div id="date">
                <span>
                    {this.props.date.toISOString()}
                    {this.props.edited && '(edited)'}
                </span>
            </div>
            <div>{this.props.text}</div>
        </div>
    )
    
}

export default note;