import { Route, Routes } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { BlogPage } from "../BlogPage/BlogPage";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="blog" element={<BlogPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};
