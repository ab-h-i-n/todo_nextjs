
import Page from "@/components/Page";
import TodoItems from "@/components/TodoItems";
import Link from "next/link";

export default function Home() {
  return (
    <Page heading={"ToDo List"}>
      {/* add button  */}
      <div className="buttons">
        <button className="add-button"><Link href="/add">add Todo</Link></button>
        <button className="remove-button">Remove completed</button>
      </div>

      {/* todo container  */}

      <div className="relative">
        {/* todo items  */}

        <TodoItems number={1} text={"Hello World"} />
        <TodoItems number={2} text={"hai hello how are your "} />
        <TodoItems number={3} text={"helooooooooooo haiii"} />
        <TodoItems number={4} text={"Hello World"} />
        <TodoItems number={5} text={"hai hello how are your "} />
        <TodoItems number={6} text={"helooooooooooo haiii"} />
      </div>
    </Page>
  );
}
