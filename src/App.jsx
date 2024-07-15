import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UserGreeting from "./Components/UserGreeting";
import maleProfile from "./assets/blankMale.jpg";
import femaleProfile from "./assets/blankFemale.jpg";

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
        text="Insert description here..."
      />
      <Card
        img={femaleProfile}
        title="Female Profile"
        text="Insert description here..."
      />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
