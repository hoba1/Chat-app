import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

export default function Conversation() {
  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ maxHeight: "100vh" }}
    >
      {/* chat header */}
      <Header />
      {/* msgs */}
      <div className="w-100 h-100 flex-grow-1 overflow-y-scroll">
        <Message menu={true}/>
      </div>
      {/* chat footer */}
      <Footer />
    </div>
  );
}
