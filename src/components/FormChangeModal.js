import React, { Component } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  name: "",
  phone: "",
  phrase: ""
}

export default class FormChangeModal extends Component {
  
  state = { ...INITIAL_STATE   };
 
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = (act) => {
    const {data, update, closeModal } = this.props;
    closeModal();
    axios.put(`http://localhost:3001/users/${act.id}`, {
      name: act.name,
      phone: act.phone,
      image: act.image 
    }).then(response => {
        update({data: data, active: 0})
      })
  }
 
  handleChangeName = (e) => {
    const {data, active } = this.props
    this.setState({name: e.target.value})
    data[active].name = e.target.value
  }
  
  handleChangePhrase = (e) => {
    const {data, active } = this.props
    this.setState({phrase: e.target.value})
    data[active].phrase = e.target.value
  } 

  handleChange2 = (e) => {
    const { data, active} = this.props
    this.setState({phone: e.target.value})
    const pattern = /[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g
    if(e.target.value.match(pattern)) {
      data[active].phone = e.target.value;
    }
  }

  render() {
    const { closeModal, data, active } = this.props;
    const {name, phone, phrase} = this.state;
    return ( 
      <div className="FormModal">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => this.handleChangeName(e)}
          placeholder="Name and Surname"
        />
        <br />
        <label>№ тел. в формате (111)111-11-11</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={phone}
          onChange={(e) => this.handleChange2(e)}
          placeholder="Phone Number"
        />
        <br />
        <input
          type="text"
          name="phrase"
          value={phrase}
          onChange={(e) => this.handleChangePhrase(e)}
          placeholder="Favorite Phrase"
        />
        <br />
        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
        <button type="button" onClick={() => this.handleSubmit(data[active])}>
          Подтвердить изменение
        </button>
      </div>
    );
  };
}