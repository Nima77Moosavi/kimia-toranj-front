import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ManageAttributes.module.css"; // Import the CSS module

const ManageAttributes = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [newAttribute, setNewAttribute] = useState("");
  const [newValue, setNewValue] = useState(""); // For new attribute value

  // Fetch all collections
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/store/collections/")
      .then((res) => setCollections(res.data))
      .catch((error) => console.error("Error fetching collections:", error));
  }, []);

  // Fetch attributes when a collection is selected
  useEffect(() => {
    if (selectedCollection) {
      axios
        .get(
          `http://127.0.0.1:8000/api/store/attributes/?collection=${selectedCollection}`
        )
        .then((res) => setAttributes(res.data))
        .catch((error) => console.error("Error fetching attributes:", error));
    }
  }, [selectedCollection]);

  const handleAddAttribute = async () => {
    if (!newAttribute) return;

    try {
      await axios.post("http://127.0.0.1:8000/api/store/attributes/", {
        name: newAttribute,
        collection: selectedCollection,
      });
      setNewAttribute(""); // Clear input
      // Re-fetch the attributes
      axios
        .get(
          `http://127.0.0.1:8000/api/store/attributes/?collection=${selectedCollection}`
        )
        .then((res) => setAttributes(res.data))
        .catch((error) => console.error("Error fetching attributes:", error));
    } catch (error) {
      console.error("Error adding attribute:", error);
    }
  };

  const handleDeleteAttribute = async (attributeId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/store/attributes/${attributeId}/`
      );
      setAttributes(attributes.filter((attr) => attr.id !== attributeId)); // Remove deleted attribute
    } catch (error) {
      console.error("Error deleting attribute:", error);
    }
  };

  const handleAddValue = async (attributeId) => {
    if (!newValue) return;

    try {
      await axios.post(
        `http://127.0.0.1:8000/api/store/attributes/${attributeId}/add_value/`,
        { value: newValue }
      );
      setNewValue(""); // Clear input after adding value
      // Re-fetch the attributes
      axios
        .get(
          `http://127.0.0.1:8000/api/store/attributes/?collection=${selectedCollection}`
        )
        .then((res) => setAttributes(res.data))
        .catch((error) => console.error("Error fetching attributes:", error));
    } catch (error) {
      console.error("Error adding value:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>مدیریت ویژگی‌ها</h1>

      {/* Select Collection */}
      <label>انتخاب مجموعه</label>
      <select
        className={styles.select}
        onChange={(e) => setSelectedCollection(e.target.value)}
        value={selectedCollection}
      >
        <option value="">انتخاب مجموعه</option>
        {collections.map((col) => (
          <option key={col.id} value={col.id}>
            {col.title}
          </option>
        ))}
      </select>

      {/* Displaying attributes */}
      {selectedCollection && (
        <div className={styles.attributesContainer}>
          <h2>ویژگی‌های مجموعه</h2>
          <ul className={styles.attributesList}>
            {attributes.map((attribute) => (
              <li key={attribute.id} className={styles.attributeItem}>
                {attribute.name}

                {/* Display existing values */}
                <ul>
                  {attribute.values.map((value) => (
                    <li key={value.id} className={styles.valueItem}>
                      {value.value}
                    </li>
                  ))}
                </ul>

                {/* Input for new value */}
                <input
                  type="text"
                  className={styles.input}
                  placeholder="افزودن مقدار"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                />
                <button
                  className={styles.addButton}
                  onClick={() => handleAddValue(attribute.id)}
                >
                  افزودن مقدار
                </button>

                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteAttribute(attribute.id)}
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>

          {/* Add new attribute */}
          <div className={styles.addAttributeContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="نام ویژگی جدید"
              value={newAttribute}
              onChange={(e) => setNewAttribute(e.target.value)}
            />
            <button className={styles.addButton} onClick={handleAddAttribute}>
              افزودن ویژگی
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAttributes;
