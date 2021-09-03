import React from 'react';
import './App.scss';
import InputMessage from "./components/InputMessage/InputMessage";
import PeopleList from "./components/PeopleList/PeopleList";
import ChatWindow from "./components/ChatWindow/ChatWindow";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            newMessage: localStorage.getItem('allmessages') ?  JSON.parse(localStorage.getItem('allmessages')) : [],
            userMessages: localStorage.getItem('usermessages') ?  JSON.parse(localStorage.getItem('usermessages')) : [],
            users: [
                {
                    "name": "Adele Vincent",
                    "email": "adelevincent@hometown.com",
                    "id": "user-1",
                    "selected": false
                },
                {
                    "name": "Willis Acosta",
                    "email": "willisacosta@hometown.com",
                    "id": "user-2",
                    "selected": false
                },
                {
                    "name": "Alvarez Ochoa",
                    "email": "alvarezochoa@hometown.com",
                    "id": "user-3",
                    "selected": false
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectChat = this.selectChat.bind(this);
        this.filterMessages = this.filterMessages.bind(this);
        this.onClickWrapper = this.onClickWrapper.bind(this);
    }

    componentDidUpdate() {
    }

    componentDidMount() {
        if (localStorage.getItem('usermessages')) localStorage.removeItem('usermessages')
    }

    handleChange(e) {
        if (document.querySelector('.person.active')) {
            this.setState({message: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let { newMessage, message } = this.state;

        let userId;

        if (document.getElementsByClassName('person')) {
            userId = document.querySelector('.person.active').getAttribute('id')
        } else {
            userId = '';
        }


        newMessage.push({
            message: message,
            userId: userId
        });


        this.setState({newMessage: newMessage});
        localStorage.setItem('allmessages', JSON.stringify(this.state.newMessage));
        this.setState({userMessages: newMessage});
        if (localStorage.getItem('usermessages')) {
            localStorage.setItem('usermessages', JSON.stringify(this.state.newMessage));
        }
        this.setState({message: ''});
    }

    selectChat(e) {
        const newState = {...this.state};

        // Update selected value for each user
        newState.users.filter(user => user.id).map(filter => {
            if (e.currentTarget.id === filter.id ) {
                filter.selected = true;
            } else {
                filter.selected = false
            }
        })

        this.setState(newState);
    }

    filterMessages(e) {
        const currentUser = e.currentTarget.id;
        const newState = {...this.state};
        let messages;
        let { userMessages } = this.state;

        messages = newState.newMessage.filter(message => {
            if  (currentUser === message.userId) {
                return message;
            }
        });


        if (messages) {
            userMessages = messages;
        }

        this.setState({userMessages: userMessages});
        localStorage.setItem('usermessages', JSON.stringify(this.state.userMessages));
    }

    onClickWrapper(e) {
        this.selectChat(e);
        this.filterMessages(e);
    }


    render () {
        console.log()
        return (
            <div className="chat-layout">
                <PeopleList
                    users={this.state.users}
                    selectChat={this.onClickWrapper}
                />
                <div className="chat-layout__message chat-window">
                    <ChatWindow
                        message={this.state.userMessages}
                        users={this.state.users}
                    />
                    <InputMessage
                        message={this.state.message}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default App;
