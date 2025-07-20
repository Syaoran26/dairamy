'use client';

import { UserButton } from '@clerk/nextjs';
import { CircleUserRound } from 'lucide-react';

const Profile = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: 'size-9!',
          userPreviewMainIdentifier: 'font-bold!',
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link href="/trang-ca-nhan" label="Trang cá nhân" labelIcon={<CircleUserRound size={16} />} />
        <UserButton.Action label="manageAccount" />
        <UserButton.Action label="signOut" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default Profile;
