import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ManageCollections.module.css";

const ManageCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch collections from the backend API
    fetch("http://127.0.0.1:8000/api/store/collections/")
      .then((response) => response.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <div className={styles.manageCollectionsContainer}>
      <h1>مدیریت مجموعه‌ها</h1>
      <Link to="/admin/collections/create" className={styles.createLink}>
        ایجاد مجموعه جدید
      </Link>
      <div className={styles.collectionList}>
        {collections.map((collection) => (
          <div key={collection.id} className={styles.collectionItem}>
            {/* Buttons (edit & delete) on the left */}
            <div className={styles.buttonsContainer}>
              <Link
                to={`/admin/collections/edit/${collection.id}`}
                className={styles.editButton}
              >
                ویرایش
              </Link>
              <button className={styles.deleteButton}>حذف</button>
            </div>

            {/* Collection Details (title and description) in the middle */}
            <div className={styles.collectionDetails}>
              <h4>{collection.title}</h4>
              <p>{collection.description}</p>
            </div>

            {/* Image on the right */}
            <img
              src={collection.image || "/path/to/default-image.jpg"}
              alt={collection.title}
              className={styles.collectionImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCollections;
