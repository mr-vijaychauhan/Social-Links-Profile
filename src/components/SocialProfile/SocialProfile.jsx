import Image from "next/image";
import Profile from "../../../assets/images/avatar-jessica.jpeg";
import Button from "./Button";

const SocialProfile = () => {
  const SocialLinks = [
    {
      id: 1,
      title: "GitHub",
    },
    {
      id: 2,
      title: "Frontend Mentor",
    },
    {
      id: 3,
      title: "Linkedin",
    },
    {
      id: 4,
      title: "Twitter",
    },
    {
      id: 5,
      title: "Instagram",
    },
  ];

  return (
    <div className="w-md bg-dark-grey my-10 py-6 lg:py-10 px-2 lg:px-12 flex flex-col justify-center items-center rounded-2xl gap-6">
      <Image
        src={Profile}
        alt="Jessica Profile Picture"
        className="w-24 h-24 rounded-full"
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl text-white font-semibold tracking-wide">
          Jessica Randall
        </h1>
        <h2 className="text-sm text-primary font-bold tracking-wide">
          London, United Kingdom
        </h2>
      </div>

      <p className="mt-2 md:px-10 text-white/70 text-sm text-center">
        "Front-end developer and avid readers."
      </p>
      <div className="w-full flex flex-col mx-28 gap-4">
        {SocialLinks.map(({ id, title }) => (
          <Button key={id} title={title} />
        ))}
      </div>
    </div>
  );
};

export default SocialProfile;
