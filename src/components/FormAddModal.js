import React, { Component } from 'react';
import * as API from "../services/api.js";

const INITIAL_STATE = {
  name: "",
  phone: "",
  phrase: ""
 }

export default class FormAddModal extends Component {
  
  state = { ...INITIAL_STATE   };
   
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = (newData, e) => {
    const { closeModal, load } = this.props;
    closeModal();
    e.preventDefault();
    API.addUserItem(newData).then(responseNewData => {
      load()
    })
  }

  handleChange1 = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value})
  }

  handleChange2 = (e) => {
   const pattern = /[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g
   this.setState({phone: e.target.value.match(pattern)})
  }

  render() {
    const { closeModal } = this.props;
    const {name, phone, phrase } = this.state;
    return ( 
      <div>
        <form onSubmit={e => this.handleSubmit({ name, phone, phrase }, e)}>   
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange1}
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
            onChange={this.handleChange1}
            placeholder="Favorite Phrase"
          />
          <br />
          <button type="button" onClick={closeModal}>
            Закрыть
          </button>
          <button type="submit">
            Подтвердить добавление
          </button>
        </form>
      </div>
    );
  };
}