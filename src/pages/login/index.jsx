import Input from "@/components/Input";
import Page from "@/components/Page";
import React from "react";

const index = () => {
  return (
    <Page heading={'Login Form'}>
      <form>
        <Input label={"Enter your email"} type={"email"} />
        <Input label={"Enter your password"} type={"password"} />

        <button type="submit">Login</button>

        <p>
          Don't have an account ? <span>SignUp</span>
        </p>
      </form>
    </Page>
  );
};

export default index;
