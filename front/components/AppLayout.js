import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu } from 'antd'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Nordbird</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
}

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
