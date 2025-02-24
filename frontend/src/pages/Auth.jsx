import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="text-white text-center p-10">
      <h1 className="text-4xl font-bold">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h1>
      <form className="mt-4">
        {!isLogin && <input type="text" placeholder="Nombre" className="block w-full p-2 mb-2 bg-gray-800 border-none text-white" />}
        <input type="email" placeholder="Correo Electrónico" className="block w-full p-2 mb-2 bg-gray-800 border-none text-white" />
        <input type="password" placeholder="Contraseña" className="block w-full p-2 mb-2 bg-gray-800 border-none text-white" />
        <button type="submit" className=" px-4 py-2 rounded">{isLogin ? "Ingresar" : "Registrarse"}</button>
      </form>
      <p className="mt-4 cursor-pointer text-blue-400" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </p>
    </div>
  );
};

export default Auth;