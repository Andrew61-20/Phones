import React, {Component} from "react";
import * as API from "../services/api.js";
import FormChangeModal from "./FormChangeModal";
import FormAddModal from "./FormAddModal";
export default class RemChanAdd extends Component {

state = {
    isModalOpen1: false,
   isModalOpen2: false,
   isSignAdd: false
}

openModal1 = () => this.setState({ isModalOpen1: true, isModalOpen2: false});
openModal2 = () => this.setState({ isModalOpen2: true, isModalOpen1: false});
closeModal = () => this.setState({ isModalOpen1: false,  isModalOpen2: false });

rem = (active) => {
    const {data, update} = this.props
    const ind = data.find(item => item.id === active.id)
    if (ind) {
        API.deleteUserItem(active.id).then(isOk => {
            if (!isOk) return;
            update ({
                data: data.filter(user => user.id !== active.id),
                active: 0
            });
        });
    };
};

render() {
    const { isModalOpen1,  isModalOpen2 } = this.state;
    const { update, data, active, load } = this.props;
    return (
        <div className="toolbar">
            <button className="btn btn-default" onClick={() => this.rem(data[active])}>
                Удалить
            </button>
            <button className="btn btn-default" onClick={() => this.openModal1()}>
                Изменить
            </button>
            <button className="btn btn-default" onClick={() => this.openModal2()}>
                Добавить
            </button>
                {isModalOpen1 && 
                (<FormChangeModal 
                   closeModal={this.closeModal}
                   data={data} 
                   active={active} 
                   update={update}
                />)}
                {isModalOpen2 && 
                (<FormAddModal 
                   closeModal={this.closeModal}
                   data={data}
                   load={load} 
                />)}
        </div>
    )
}}