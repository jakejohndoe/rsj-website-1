import { Routes, Route } from "react-router-dom";
import { ModernHome } from "./screens/MacbookPro/ModernHome";
import { ModernActor } from "./screens/MacbookPro/ModernActor";
import { ModernAuthor } from "./screens/MacbookPro/ModernAuthor";
import { MacbookPro } from "./screens/MacbookPro/MacbookPro";
import { Actor } from "./screens/MacbookPro/Actor";
import { Author } from "./screens/MacbookPro/Author";
import { Professor } from "./screens/MacbookPro/Professor";
import { Courses } from "./screens/MacbookPro/Courses";
import { Contact } from "./screens/MacbookPro/Contact";
import { AdminDashboard } from "./screens/MacbookPro/AdminDashboard";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ModernHome />} />
        <Route path="/actor" element={<ModernActor />} />
        <Route path="/author" element={<ModernAuthor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Old versions for comparison */}
        <Route path="/old-home" element={<MacbookPro />} />
        <Route path="/old-actor" element={<Actor />} />
        <Route path="/old-author" element={<Author />} />
      </Routes>
    </ErrorBoundary>
  );
}