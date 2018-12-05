import React from "react";
import Counter from "./Counter"

const styles = {
  card: {
    margin: 20,
    background: "#9a74db"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center"
  },
  content: {
    padding: 20
  }
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
      <Counter />
      </div>
    </div>
  );
}

export default Card;
