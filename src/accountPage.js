import React from "react";
import { useEffect } from "react";
import SDK from "./sdk";
function AccountPage() {
  const navigateToHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    console.log("Sending flush event from AccountPage...");
    SDK.flush();
    console.log("AccountPage mounted");
    return () => {
      console.log("AccountPage unmounted");
    };
  }, []);

  return (
    <section id="account-page">
      <h2>Account Page</h2>
      <p>This is the account page component.</p>
      <button onClick={navigateToHome}>Go to Home</button>
    </section>
  );
}

export default AccountPage;
