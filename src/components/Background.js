import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      style={{
        backgroundColor: "#f5f5dc",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,182,193,0.4), transparent)",
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "60%",
          height: "60%",
        }}
      />
      {/* Add more motion.divs with different colors and positions */}
    </motion.div>
  );
};

export default Background;

