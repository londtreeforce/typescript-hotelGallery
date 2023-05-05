import { HotelGallery } from "./Components/Main"

function App() {
  return (
    <div className="App">
      <HotelGallery photos={[
        {id: 1, src: "./img/gallery/", preview: "./img/preview", description: "Hotel 1"}, //Add next Photo (later)
      ]}/>
    </div>
  )
}

export default App
