// component state 

class TimesViewed extends React.Component {
    constructor(props) {
        super(props);
        var timesViewed = 0;
        if (localStorage.timesViewed) {
            timesViewed = localStorage.timesViewed;
        }
        timesViewed++;
        this.state = { numViews: timesViewed };
        localStorage.timesViewed = timesViewed;
    }
    render() {
        return <b>(this.state.numViews)</b>;
    }
}

// Creating custom components - Es6

class HelloComponent extends React.Component {
    render() {
        return (
            <h1>Hello, React!</h1>
        );
    }
}

// Creating React components 

var HelloComponent = React.createClass ({
    render: function() {
        return (
            <h1>Hello, React!</h1>
        );
    }
});