
import React from 'react';
import PropTypes from 'prop-types';

function Message ({text}) {
    return <li>{text}</li>;
}

Message.propTypes = {
    text: PropTypes.string.isRequired
};

function MessageList({ messages }) {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
}

MessageList.propTypes = {
    messages: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default MessageList;

const messages = [
    { id: 1, text: 'Hello'},
    { id: 2, text: 'How are you?'}
]
