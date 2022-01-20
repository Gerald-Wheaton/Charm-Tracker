import React from 'react';
// import { UP_Collection_Access } from './../api/user_posts.js';
import Title from './Title.js';
// import AddTopics from './AddTopics.js';
// import TopicList from './TopicList.js';
import Login from './Login.js';
// import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Title title={this.props.passedPropTitle} />
            </>
        );
    }
};

App.propTypes = {
    passedPropTitle: PropTypes.string.isRequired
};