import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { eventsCollection } from '/imports/api/events';
import { clientCollection } from '/imports/api/clients';
import { vendorCollection } from '/imports/api/vendors';

// import { UP_Collection_Access } from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.startup(function () {
    Tracker.autorun(function () {

        let title = "Charm Tracker"; 
        // const allPostInDB = UP_Collection_Access.find({}, { sort: { createdAt: -1 } }).fetch();


        ReactDom.render(<App passedPropTitle={title} />, document.getElementById('react-target'));
    });

});