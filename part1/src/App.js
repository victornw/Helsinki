const App = () => {
  // let nOne = Number(prompt("Digite o primeiro número"));
  // let nTwo = Number(prompt("Digite o segundo número"));
  var nOne = 2;
  var nTwo = 15;
  var age = 20;
  var name = "Victor";

  return (
    <>
      <p>Bem Vindo</p>
      <Hello name={name} age={age} />
      <p>
        A soma de {nOne} mais {nTwo} é {nOne + nTwo}
      </p>
    </>
  );
};

const Hello = (props) => {
  return (
    <>
      <p>
        Helloo {props.name}, you are {props.age} years old!
      </p>
    </>
  );
};

export default App;
