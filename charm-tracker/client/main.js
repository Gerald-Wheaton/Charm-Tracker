import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { eventCollection } from '../imports/api/events';
import { clientCollection } from '../imports/api/clients';
import { vendorCollection } from '../imports/api/vendor';
import { vendorTypeCollection } from '../imports/api/vendor';

// import { UP_Collection_Access } from './../imports/api/user_posts.js';
import App from "./../imports/ui/App.js"

Meteor.startup(function () {
  Tracker.autorun(function () {
    let title = "Charm Tracker"
    // const allPostInDB = UP_Collection_Access.find({}, { sort: { createdAt: -1 } }).fetch();

    ReactDom.render(
      <App title={title} /*passedPropTitle={title}*/ />,
      document.getElementById("react-target")
    )
  })
})
