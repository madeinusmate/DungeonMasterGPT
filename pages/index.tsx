import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";
import Image from "next/image";
import logo from "../public/DnD-Logo.png";

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-zinc-800">
      <section className="flex flex-col text-center items-center ">
        <Image alt="logo" height={150} src={logo} />
        <Text className="text-red-600" variant="h1">
          Dungeon Master GPT
        </Text>
        <Text className="text-red-800 mb-6 font-black text-center text-xs">
          by <a href="https://twitter.com/madeinusmate">@madeinusmate</a>
        </Text>
        <Text className="text-white text-center italic">
          Where will this adventure take you?
        </Text>
      </section>

      <section className="flex flex-col gap-3 items-center">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;
