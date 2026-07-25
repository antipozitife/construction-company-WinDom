import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => (
  <>
    <Header />
    <main className="not-found">
      <p className="not-found__code" aria-hidden="true">404</p>
      <h1>Страница не найдена</h1>
      <p>Возможно, адрес изменился или в ссылке есть опечатка.</p>
      <Link to="/" className="not-found__link">Вернуться на главную</Link>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
