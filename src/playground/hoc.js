import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h2>Info</h2>
        {props.info && <p>{props.info}</p>}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>Container</h1>
            {props.isAdmin && <div>This is you warning</div> }
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are some details" />, document.getElementById("app"));

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>Container</h1>
            <div><p>{ props.isLoggedIn ? "Great! You are signed-in!!" : "Please Login / Sign-up" }</p></div>
            <Info {...props} />
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isLoggedIn={false} />, document.getElementById("app"));