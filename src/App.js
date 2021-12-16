import Nav from "./components/Nav";
import "./styles.scss";
import List from "./components/List";
import testImage from "./assets/test.jpg";
import globos from "./assets/globos.jpg";
import lago from "./assets/lago.jpg";
import newList from "./assets/new-list.png";

function App() {
  const fakeItems = [
    {
      id: 1,
      title: "Mis favoritos",
      savedItems: 3,
      images: [
        {
          id: 1,
          src: testImage,
          name: "test",
        },
        {
          id: 2,
          src: globos,
          name: "globos",
        },
        {
          id: 3,
          src: lago,
          name: "lago",
        },
      ],
    },
    {
      id: 2,
      title: "Apptos. Lindos",
      savedItems: 8,
      images: [
        {
          id: 4,
          src: testImage,
          name: "test",
        },
        {
          id: 5,
          src: globos,
          name: "globos",
        },
        {
          id: 6,
          src: lago,
          name: "lago",
        },
      ],
    },
    {
      id: 3,
      title: "Caros pero lindos",
      savedItems: 8,
      images: [
        {
          id: 7,
          src: testImage,
          name: "test",
        },
        {
          id: 8,
          src: globos,
          name: "globos",
        },
        {
          id: 9,
          src: lago,
          name: "lago",
        },
      ],
    },
    {
      id: 4,
      title: "Inversion",
      savedItems: 2,
      images: [
        {
          id: 10,
          src: testImage,
        },
        {
          id: 11,
          src: globos,
        },
        {
          id: 12,
          src: lago,
        },
      ],
    },
  ];

  return (
    <div className="app">
      <Nav />
      <main>
        <div className="list__header">
          <h1>Listas de favoritos</h1>
        </div>
        {fakeItems.map((item) => {
          return <List key={item.id} {...item} />;
        })}
        <article className="list">
          <div className="list__gallery list__gallery--new-list">
            <img src={newList} alt="New list" />
            <i className="icon icon-plus"></i>
          </div>
          <div className="list__title">
            <h2>Crear nueva lista</h2>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
