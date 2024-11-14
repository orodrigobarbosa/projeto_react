import React from "react";

export const Header = () => {
    return (
        <div className="header">
            <img 
                src="./chuck.png"  // Corrigido o caminho da imagem
                alt="ChuckTopo"           // Descrição alternativa para acessibilidade
                className="header-image"  // Classe para estilizar a imagem
            />
            <h1>Chuck Norris</h1>
        </div>
    );
};
