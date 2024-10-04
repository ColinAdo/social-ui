"use client";

import { ImGoogle, ImGithub } from "react-icons/im";
import { SocialButton } from "@/components/common";
import { continueWithGoogle, continueWithGithub } from "@/utils";

export default function SocialButtons() {
  return (
    <div className="flex justify-between items-center gap-2 mt-5">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-3" /> Google Signin
      </SocialButton>
      <SocialButton provider="github" onClick={continueWithGithub}>
        <ImGithub className="mr-3" /> Github Signin
      </SocialButton>
    </div>
  );
}
