import { Button } from "react-bootstrap";

function App() {
  return (
    <section>
    <div className="row bg-primary">
    <div className="col-1 fw-bold m-0 mb-3 mt-3 mx-2 fs-4 text-light">MyChatApp</div> 
    <div className="col-4 m-0 mb-3 fw-light mt-4   mx-2 text-light" > by (SOHAMKOTHARI)(210940320121)</div>
    </div>
    <div className="row mt-2">
    <input className="col-10 mx-3" 
    type="text"
    placeholder="Let's Chat Here....."
    />
    <Button className="col-1 justify-content-end" as="input" type="button" value="send" />
    </div>

    </section>
  );
}

export default App;