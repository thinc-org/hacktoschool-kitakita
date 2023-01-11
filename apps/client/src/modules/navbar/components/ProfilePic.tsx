import { FC } from "react";

type ProfilePicProps = {
  character: string;
};

export const ProfilePic: FC<ProfilePicProps> = ({ character }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-light p-1 text-xs font-bold uppercase text-cyan-dark lg:text-base">
      {character}
    </div>
  );
};

ProfilePic.displayName = "ProfilePic";
