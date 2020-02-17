import React, { Component } from "react";
import * as API from "../services/api.js";
import UserList from './UserList';
import ActiveUser from './ActiveUser.js';
import SearchBar from './SearchBar';
import RemChanAdd from './RemChanAdd';

export default class App extends Component {

    state = {
	    users: [],
        data: null,
        term: "",
        active: 0
    };

    componentDidMount () {
        this.loadData()
    };
 
    loadData() {
        API.getAllUsersItems().then(users => {
            this.initialData = users;
            this.setState({
                data: this.initialData
            })
        })
    };

    updateData(config) {
        this.setState(config)
    };

    render() {
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar
                            term={this.state.term}
                            data={this.initialData}
                            update={this.updateData.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <RemChanAdd 
                            data={this.state.data}
                            active={this.state.active}
                            update={this.updateData.bind(this)}
                            load={this.loadData.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser data={this.state.data} active={this.state.active} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList data={this.state.data} update={this.updateData.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}
