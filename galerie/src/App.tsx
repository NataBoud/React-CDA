import { useEffect, useState } from "react";
import './App.css';
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import type { Category } from "./types";
import { CATEGORIES, IMAGES } from "./data/data";
import ImageCard from "./components/ImageCard/ImageCard";
import SkeletonCard from "./components/SkeletonCard/SkeletonCard";

function App() {

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(["toutes"]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<typeof IMAGES>([]);
  const [error, setError] = useState<string | null>(null);

  const toggleCategory = (category: Category) => {
    if (category === "toutes") {
      setSelectedCategories(["toutes"]);

    } else {
      setSelectedCategories((prev) => {

        const newPrev = prev.filter((c) => c !== "toutes");

        return prev.includes(category)
          ? newPrev.filter((c) => c !== category)
          : [...newPrev, category];
      });
    }
  };

  const filteredImages =
    selectedCategories.includes("toutes")
      ? IMAGES
      : IMAGES.filter((img) =>
        img.categories.some((cat) => selectedCategories.includes(cat))
      );

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Simulation
        // if (Math.random() < 0.3) {
        //   throw new Error("Erreur lors du chargement des images !");
        // }
        setImages(IMAGES); // succès
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue est survenue");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container">
      <h1>Galerie d'Images</h1>
      <p className="filter-label">Filtre par catégories</p>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
      />

      {loading ? (
        <div className="gallery">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : error ? (
        <div className="no-images-container">
          <p className="no-images">{error}</p>
        </div>
      ) : filteredImages.length > 0 ? (
        <div className="gallery">
          {filteredImages.map((img) => <ImageCard key={img.id} image={img} />)}
        </div>
      ) : (
        <div className="no-images-container">
          <p className="no-images-text">Vide !</p>
          <p className="no-images">Aucune image pour cette catégorie</p>
        </div>
      )}

    </div>
  );
}

export default App;
