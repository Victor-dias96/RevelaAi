import React, { useState } from 'react';
import { User } from 'lucide-react';
import './Support.css';

const teamMembers = [
  { id: 1, name: 'Danilo Araújo', role: 'Desenvolvedor Líder', photo: null },
  { id: 2, name: 'Elisandra', role: 'Desenvolvedor Backend', photo: null },
  { id: 3, name: 'Lucas Brandi', role: 'Desenvolvedor Frontend', photo: null },
  { id: 4, name: 'Arthur Góis', role: 'Analista de Dados', photo: null },
  { id: 5, name: 'Vitor Dias', role: 'Desenvolvedor Frontend', photo: null },
];

const Support = () => {
  const [amountInCents, setAmountInCents] = useState(2000);

  const handleInputChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '');
    if (digits === '') {
      setAmountInCents(0);
      return;
    }
    const newAmount = parseInt(digits, 10);
    if (newAmount <= 10000) {
      setAmountInCents(newAmount);
    }
  };

  const formatDisplay = (cents) => {
    const valueAsFloat = cents / 100;
    return `R$ ${valueAsFloat.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="support-page">
      <section className="about-card">
        <h2 className="about-title">Sobre Nós</h2>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <User />
                )}
              </div>
              <div className="member-info">
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="support-card">
        <h1 className="support-title">APOIE O PROJETO</h1>
        <p className="support-description">
          Seu apoio financeiro mantém o site no ar e ajuda a trazer novas
          funcionalidades e conteúdos.
        </p>

        <div className="support-value-card">
          <div className="support-value-header">
            <div className="support-value-label">
              <p className="support-value-label-title">Escolha o valor:</p>
              <p className="support-value-label-subtitle">
                Digite o valor desejado (Máx R$ 100,00)
              </p>
            </div>

            <input
              type="text"
              className="support-value-input"
              value={formatDisplay(amountInCents)}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="support-button-container">
          <button
            className="support-button"
            onClick={() => {
              alert(`Apoiando com: ${formatDisplay(amountInCents)}`);
              alert('Obrigado pelo apoio!');
              setAmountInCents(2000);
            }}
          >
            Apoiar Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Support;
