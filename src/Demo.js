import React from "react";

// const Demo = (props) => {
//     const { data } = props;

//     console.log("data")

//     return (
//         <div>
//             Demo: {data}
//         </div>
//     )
// }

class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
    }


    shouldComponentUpdate(prevProps, prevState) {
        console.log(prevState)
        console.log("prevProps", prevProps)
        if (prevProps.data !== this.state.data) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        console.log("Inside render", this.props);
        return (
            <div>
                Demo: {this.props.data}
            </div>
        );
    }
}

export default Demo;