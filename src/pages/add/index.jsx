import Input from "@/components/Input";
import Page from "@/components/Page";
import React from "react";

const index = () => {
  return (
    <Page heading={"Add ToDo"}>
      <form>
        <Input label={"Enter todo text"} type={"text"} />

        <div className="flex gap-5">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </Page>
  );
};

export default index;
