// component state 

ReactDOM.render(
    <TimesViewed/>,
    document.getElementById('container')
)

// Component Properties 

    ReactDOM.render(
        <HelloUser name="Maria" />,
        document.getElementById('container')
    );

    class HelloUser extends React.Component {
        render() {
            return (
                <h1>Hello {this.props.name}!</h1>
            )
        }
    }
// Creating custom components - Es6
    ReactDOM.render(
        <HelloComponent />,
        document.getElementById('container')
    );

// Creating React components 

ReactDOM.render(
    <HelloComponent />,
    document.getElementById('container')
);

