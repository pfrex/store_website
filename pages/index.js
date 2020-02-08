// Layout is the entry point
import Layout from "../components/layout/Layout";
import Intro from "../components/Intro";
import Group from "../components/Group";
import Theme from "../components/Theme";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <Layout>
      <div className="first-header">
        Your trusted local grocer for 80 years!
      </div>
      <Intro></Intro>
      <Group></Group>
      <Theme></Theme>
      <Contact></Contact>
    </Layout>
  );
}
