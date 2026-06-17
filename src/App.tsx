import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import PlaylistPage from "./pages/PlaylistPage"
import ArtistPage from "./pages/ArtistPage"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<HomePage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
