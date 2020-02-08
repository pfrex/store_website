import Card from "./Card";
import "../styles/group.css";

const Group = props => {
  let content = (
    <div className="group">
      <Card
        title="Produce"
        image="/images/produce.jpg"
        description="Finest selection of fresh produce; stop in today and get the fresh fruit and vegetables to keep you and your family healthy!"
        button="Shop"
      ></Card>
      <Card
        title="Meat and Seafood"
        image="/images/meat.jpg"
        description="Highest quality of meat and seafood with strict quality and safety standards."
        button="Shop"
      ></Card>
      <Card
        title="Bakery"
        image="/images/bakery.jpg"
        description="Our in house bakery produces fresh baked goods daily."
        button="Shop"
      ></Card>
    </div>
  );

  return content;
};

export default Group;
