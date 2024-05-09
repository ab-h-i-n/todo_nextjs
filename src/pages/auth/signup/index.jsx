import Input from "@/components/Input";
import Page from "@/components/Page";
import Link from "next/link";


const index = () => {
  return (
    <Page heading={'SignUp Form'}>
      <form>
        <Input label={"Enter your name"} type={"text"} />
        <Input label={"Enter your email"} type={"email"} />
        <Input label={"Enter your password"} type={"password"} />

        <button type="submit">SignUp</button>

        <p>
          Already have an account ? <Link href="/auth/login"><span>Login</span></Link>
        </p>
      </form>
    </Page>
  );
};

export default index;
