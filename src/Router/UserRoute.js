import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
const UserRoute = ({component: Component, layout: Layout, ...rest}) => {

    if(Layout) {
        return (
            <Route
                {...rest}
                render={props => <Layout><Component {...props}/> </Layout>}
            />
        )
    }


};
// UserRoute.propTypes = {
//     component: PropTypes.func.isRequired,
// };

export default UserRoute