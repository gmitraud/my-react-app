import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UserGreeting from "./Components/UserGreeting";
import maleProfile from "./assets/blankMale.jpg";
import femaleProfile from "./assets/blankFemale.jpg";
import List from "./Components/List";

function App() {
  return (
    <>
      <div>
        <UserGreeting isLoggedIn={true} username="username" />
        <Header />
      </div>
      <Card
        img={maleProfile}
        title="Male Profile"
        text={
          <List
            id1={1}
            name1="Javascript"
            skillLvl1={9}
            id2={2}
            name2="Typescript"
            skillLvl2={8}
            id3={3}
            name3="Python"
            skillLvl3={2}
            id4={4}
            name4="C#"
            skillLvl4={7}
            id5={5}
            name5="C++"
            skillLvl5={2}
          />
        }
      />
      <Card
        img={femaleProfile}
        title="Female Profile"
        text={
          <List
            id1={1}
            name1="Javascript"
            skillLvl1={4}
            id2={2}
            name2="Ruby on Rails"
            skillLvl2={9}
            id3={3}
            name3="Delphi"
            skillLvl3={4}
            id4={4}
            name4="MySQL"
            skillLvl4={8}
            id5={5}
            name5="PHP"
            skillLvl5={10}
          />
        }
      />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
