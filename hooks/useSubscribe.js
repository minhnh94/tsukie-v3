// hooks/useSubscribe.js
import { useState } from "react";

const useSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setIsSubscribed(true);
      } else {
        throw new Error("Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error occurred while subscribing:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    isSubscribed,
    handleSubmit,
  };
};

export default useSubscribe;
