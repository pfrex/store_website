import Layout from "../components/layout/Layout";
import Intro from "../components/Intro";
import Group from "../components/Group";
import Theme from "../components/Theme";
import Contact from "../components/Contact";
import Noah from "../components/Noah";

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
      <Noah></Noah>
      <div id="last-message">
        <h4>Store Name</h4>
        <p>The last message, company motto, or call to action could go here.</p>
      </div>
    </Layout>
  );
}
