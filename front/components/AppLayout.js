import PropTypes from "prop-types"

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>Common Menu</div>
            <div>{children}</div>
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default AppLayout