import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import note from "../notes";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      {note.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
