import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LanPg from "./pages/LanPg";
import SignUpPg from "./pages/SignUpPg";
import ProfilePg from "./pages/ProfilePg";
import UpdateProfilePg from "./pages/UpdateProfilePg";
import PhotosPg from "./pages/PhotosPg";
import CreateEventPg from "./pages/CreateEventPg";
import EventsPg from "./pages/EventsPg";
import UploadPhotosPg from "./pages/UploadPhotosPg";
import "./App.css";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LanPg} />
            <Route path="/sign-up" component={SignUpPg} />
            <Route path="/sign-in" component={SignUpPg} />
            <Route path="/profile/:username" component={ProfilePg} />
            <Route path="/update-profile" component={UpdateProfilePg} />
            <Route path="/photos/:username" component={PhotosPg} />
            <Route path="/events" component={EventsPg} />
            <Route path="/create-event" component={CreateEventPg} />
            <Route path="/upload-photos" component={UploadPhotosPg} />
        </Switch>
    </Router>
);

export default App;
