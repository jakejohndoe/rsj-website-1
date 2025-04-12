import { Routes, Route } from "react-router-dom";
import { MacbookPro } from "./screens/MacbookPro/MacbookPro";
import { Actor } from "./screens/MacbookPro/Actor";
import { Author } from "./screens/MacbookPro/Author";
import { Professor } from "./screens/MacbookPro/Professor";
import { Blog } from "./screens/MacbookPro/Blog";
import { Courses } from "./screens/MacbookPro/Courses";
import { Contact } from "./screens/MacbookPro/Contact";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<MacbookPro />} />
        <Route path="/actor" element={<Actor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/author" element={<Author />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    );
}