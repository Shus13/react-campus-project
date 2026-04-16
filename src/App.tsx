import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Sushit" age={21} />
      <Card user="Ram" age={25} />
      <Card user="Hari" age={29} />
      <Card user="Shyam" age={33} />
    </div>
  );
};

export default App;
