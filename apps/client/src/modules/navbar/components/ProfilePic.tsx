import { FC } from "react";

interface IProfilePic {
  character: string;
}

export const ProfilePic: FC<IProfilePic> = ({ character }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-light p-1 text-xs font-bold uppercase">
      {character}
    </div>
  );
};

ProfilePic.displayName = "ProfilePic";
