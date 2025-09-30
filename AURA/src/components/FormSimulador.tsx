import { useState } from 'react';
import styles from '../pages/Simulador/Simulador.module.css';

interface Props {
  setResultado: (data: any) => void;
}

export default function FormSimulador({ setResultado }: Props) {
  const [formData, setFormData] = useState({
    tipoSolo: '',
    nivelPh: '',
    insolacao: '',
    desejo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.tipoSolo && formData.nivelPh && formData.insolacao) {
      setResultado(formData);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Informe as características do seu solo</h2>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            <strong>Tipo de solo:</strong>
          </label>
          <select 
            className={styles.formSelect}
            name="tipoSolo"
            value={formData.tipoSolo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o tipo de terra</option>
            <option value="arenoso">Arenoso</option>
            <option value="argiloso">Argiloso</option>
            <option value="humoso">Humoso</option>
            <option value="calcario">Calcário</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            <strong>Nível de pH do Solo:</strong>
          </label>
          <select 
            className={styles.formSelect}
            name="nivelPh"
            value={formData.nivelPh}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o nível de pH</option>
            <option value="acido">Ácido (pH 4.5-6.0)</option>
            <option value="levemente-acido">Levemente Ácido (pH 6.0-6.5)</option>
            <option value="neutro">Neutro (pH 6.5-7.5)</option>
            <option value="alcalino">Alcalino (pH 7.5-9.0)</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            <strong>Nível de Insolação:</strong>
          </label>
          <select 
            className={styles.formSelect}
            name="insolacao"
            value={formData.insolacao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione a insolação</option>
            <option value="baixa">Baixa (2-4 horas/dia)</option>
            <option value="media">Média (4-6 horas/dia)</option>
            <option value="alta">Alta (6+ horas/dia)</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            <strong>O que você gostaria de plantar? (opcional):</strong>
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="desejo"
            value={formData.desejo}
            onChange={handleChange}
            placeholder="Ex. Alface, Tomate, Feijão..."
          />
        </div>

        <button type="submit" className={styles.analyzeButton}>
          Analisar possibilidades de plantio
        </button>
      </form>
    </div>
  );
}