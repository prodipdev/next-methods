import Image from "next/image";
import image1 from "@/assets/tree.jpg";

export const metadata = {
  title: "Profile",
  description: "Next Hero",
};

const ProfilePage = () => {
  return (
    <div>
      <p>Profile Page</p>
      <Image width={700} height={500} placeholder="blur" src={image1} alt="" />
      {/* <Image
        placeholder="blur"
        width={700}
        height={500}
        src="/mountains.jpg"
        alt=""
      /> */}
      {/* <Image
        width={700}
        height={500}
        src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
        alt=""
      /> */}
    </div>
  );
};

export default ProfilePage;
