import Input from "@/components/Input";
import Page from "@/components/Page";
import Link from "next/link";


const index = () => {

  return (
    <Page heading={'Login Form'}>
      <form>
        <Input label={"Enter your email"} type={"email"} />
        <Input label={"Enter your password"} type={"password"} />

        <button type="submit">Login</button>

        <p>
          Don't have an account ? <Link href="/auth/signup"><span>SignUp</span></Link>
        </p>
      </form>
    </Page>
  );
};

export default index;
