import { useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />0
        </div>,
        <div key="followings">
          Followings
          <br />0
        </div>,
        <div key="followers">
          Followers
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>GW</Avatar>} title="Geonwoo Jeong"></Card.Meta>
      <Button onClick={onLogOut}>Log out</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.bool.isRequired,
};

export default UserProfile;
