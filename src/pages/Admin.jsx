import React from "react";
import Header from "../components/Header";
import GetPost from "../components/GetPost";

import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/use-auth";

export const Admin = () => {
  const { id } = useAuth();
  const adminId = "RjwwQ16rZFYtuvH2jK7beWr6rrc2";
  const location = useLocation();

  return id === adminId ? (
    <div>
      <Header />
      <h2 className="getpost__admin">Добавления поста</h2>
      <GetPost />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
