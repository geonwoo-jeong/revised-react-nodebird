import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/Form/NicknameEditForm";
import FollowList from "../components/List/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "1" },
    { nickname: "2" },
    { nickname: "3" },
  ];
  const followingList = [
    { nickname: "1" },
    { nickname: "2" },
    { nickname: "3" },
  ];

  return (
    <>
      <Head>
        <title>My Profile | Nodebird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="Following List" data={followingList} />
        <FollowList header="Follower List" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
