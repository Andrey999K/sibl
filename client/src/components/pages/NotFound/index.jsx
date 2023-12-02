import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[90dvh] flex items-center justify-center flex-col gap-5">
      <h2 className="text-3xl font-semibold">Ошибка 404</h2>
      <p>Страница не найдена.</p>
      <Link className="font-bold text-green-600" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
