import React from "react";

type Props = {};

const TermAndCondition = (props: Props) => {
  return (
    <p className="text-xs text-[#7c7c7c] text-center">
      By continuing, you agree to DSL&apos;s{" "}
      <span className="underline">Terms of Service</span> and{" "}
      <span className="underline">Privacy Policy</span>, and to receive periodic
      emails with updates.
    </p>
  );
};

export default TermAndCondition;
