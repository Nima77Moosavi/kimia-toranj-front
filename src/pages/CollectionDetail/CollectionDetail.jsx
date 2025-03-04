import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // For navigation
import styles from "./CollectionDetail.module.css"; // Optional: Add styling

const CollectionDetail = () => {
  const { id } = useParams(); // Get the collection ID from the URL
  const navigate = useNavigate(); // For navigation
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollectionDetail = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/store/collections/${id}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCollection(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollectionDetail();
  }, [id]);

  const handleClose = () => {
    navigate("/collections"); // Navigate back to the collections page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!collection) {
    return <div>No collection found.</div>;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button onClick={handleClose} className={styles.closeButton}>
          &times; {/* Close icon */}
        </button>
        <h2 className={styles.title}>{collection.title}</h2>
        {collection.description && (
          <p className={styles.description}>{collection.description}</p>
        )}
        <div className={styles.imageContainer}>
          <img
            src={collection.image}
            alt={collection.title}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
