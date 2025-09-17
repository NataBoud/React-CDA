import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import type { Category } from "../types";
import { CATEGORIES, IMAGES } from "../data/data";
import ImageCard from "../components/ImageCard/ImageCard";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";

function GalleryPage() {

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(["toutes"]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<typeof IMAGES>([]);
  const [error, setError] = useState<string | null>(null);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => {
      if (cat === "toutes") return ["toutes"];

      const activeWithoutToutes = prev.includes("toutes") ? [] : prev;
      const next = activeWithoutToutes.includes(cat)
        ? activeWithoutToutes.filter(c => c !== cat)   // si déjà présent → on retire
        : [...activeWithoutToutes, cat];               // sinon → on ajoute

      return next.length === 0 ? ["toutes"] : next;
    });
  };

  const filteredImages =
    selectedCategories.includes("toutes")
      ? images
      : images.filter((img) =>
        img.categories.some((cat) => selectedCategories.includes(cat))
      );


  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (cancelled) return;

      try {
        // Simulation de succès
        setImages(IMAGES);

        // Simulation d'erreur
        // throw new Error("Erreur lors du chargement des images !");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }, 2000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
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

export default GalleryPage;
