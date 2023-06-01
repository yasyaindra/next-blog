import React from "react";
import Image from "next/image";

function ProfileImage() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-black drop-shadow-xl shadow-black rounded-full mx-auto mb-4 lg:mb-0"
        src="/img/indra.png"
        width={160}
        height={160}
        alt="Yasya Indra"
        priority={true}
      />
    </section>
  );
}

export default ProfileImage;
