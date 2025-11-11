import React, { useState, useCallback } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';

// Cores do Design Original
const PrimaryDark = '#042B00'; // Quase preto, verde escuro
const PrimaryBase = '#2E8B57'; // Verde esmeralda base
const PrimaryLight = '#58A975'; // Verde esmeralda claro

// --- CONFIGURAÇÃO DE CONSTANTES ---
// ID do Formspree. SUBSTITUA 'xovyqkog' pelo seu ID real!
const FORMSPREE_ID = "xovyqkog"; 

// --- INTERFACES DE TIPAGEM ---

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormInputProps {
  label: string;
  id: keyof FormData;
  name: keyof FormData;
  type?: 'text' | 'email' | 'textarea';
  rows?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  hasError?: boolean;
}

/**
 * Componente de Input com Label Flutuante
 * Tipado explicitamente com React.FC<FormInputProps>.
 */
const FormInput: React.FC<FormInputProps> = ({ 
    label, 
    id, 
    name, 
    type = 'text', 
    rows, 
    value, 
    onChange, 
    hasError 
}) => {
  const isTextarea = type === 'textarea';

  // Classes dinâmicas para cores arbitrárias
  const inputClasses = `
    w-full p-4 border-2 rounded-xl 
    bg-white text-[${PrimaryDark}] 
    placeholder-transparent focus:outline-none 
    focus:ring-0 transition duration-300 peer
    ${hasError ? 'border-red-500' : 'border-gray-300 focus:border-[' + PrimaryBase + ']'}
  `;

  const labelClasses = `
    absolute top-0 left-4 
    text-sm text-gray-500 
    transform 
    bg-white px-1 transition-all duration-300
    pointer-events-none
    -translate-y-1/2 scale-75 
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
    peer-focus:text-[${PrimaryBase}] peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-sm
  `;

  return (
    <div className="relative pt-6 pb-2">
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 5}
          className={`${inputClasses} min-h-[120px]`}
          placeholder=" "
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={inputClasses}
          placeholder=" "
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
        />
      )}
      
      <label htmlFor={id} className={labelClasses} style={{ color: hasError ? '#EF4444' : '' }}>
        {label}
      </label>
    </div>
  );
};

// Componente principal do Formulário de Contato
export default function contate() {
  // Estado local para controlar os valores dos inputs
  const [formData, setFormData] = useState<FormData>({ 
    name: '',
    email: '',
    message: '',
  });

  // Estado para gerenciar o processo de envio
  const [submissionState, setSubmissionState] = useState<{
    isSubmitting: boolean;
    isSucceeded: boolean;
    isError: boolean;
    errorMessage: string | null;
  }>({
    isSubmitting: false,
    isSucceeded: false,
    isError: false,
    errorMessage: null,
  });

  // Manipulador de mudança tipado
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target;
    
    // Garantindo que 'name' é uma chave válida de FormData
    if (name in formData) {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  }, [formData]);

  // Manipulador de envio (AGORA COM FETCH REAL)
  const onSubmit = async (e: FormEvent) => { 
    e.preventDefault();
    setSubmissionState({ isSubmitting: true, isSucceeded: false, isError: false, errorMessage: null });

    // 1. Validação
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionState({ 
        isSubmitting: false, 
        isSucceeded: false, 
        isError: true, 
        errorMessage: "Por favor, preencha todos os campos obrigatórios." 
      });
      return;
    }

    // 2. Envio Real para Formspree
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionState({ isSubmitting: false, isSucceeded: true, isError: false, errorMessage: null });
        
        // Limpar formulário no sucesso
        setFormData({ name: '', email: '', message: '' });

        // Limpar mensagem de sucesso após 5 segundos
        setTimeout(() => setSubmissionState(prev => ({ ...prev, isSucceeded: false })), 5000);

      } else {
        // Obter a mensagem de erro da resposta do Formspree
        const data = await response.json();
        const errorMsg = data.error || "Ocorreu um erro ao enviar. Tente novamente.";
        setSubmissionState({ isSubmitting: false, isSucceeded: false, isError: true, errorMessage: errorMsg });
      }

    } catch (error) {
      // Erro de conexão
      setSubmissionState({ 
        isSubmitting: false, 
        isSucceeded: false, 
        isError: true, 
        errorMessage: "Erro de conexão. Verifique sua rede." 
      });
      console.error("Fetch Error:", error);
    }
  };


  // --- Renderização de Feedback ---
  const renderFeedback = () => {
    const { isSubmitting, isSucceeded, isError, errorMessage } = submissionState;

    if (isSubmitting) {
      return (
        <div className="flex items-center justify-center text-gray-700 font-semibold text-center p-3 bg-gray-100 rounded-lg border border-gray-200">
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Enviando mensagem...
        </div>
      );
    }
    
    if (isSucceeded) {
      return (
        <div className="flex items-center justify-center text-green-700 font-semibold text-center p-3 bg-green-50 rounded-lg border border-green-200">
          <CheckCircle className="w-5 h-5 mr-2" />
          Sua mensagem foi enviada com sucesso!
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex items-center justify-center text-red-700 font-semibold text-center p-3 bg-red-50 rounded-lg border border-red-200">
          <XCircle className="w-5 h-5 mr-2" />
          Atenção: {errorMessage}
        </div>
      );
    }
    return <div className="min-h-[44px]"></div>; // Espaçamento
  };

  // Determinar se o botão deve ser desabilitado
  const isDisabled = submissionState.isSubmitting || submissionState.isSucceeded;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 font-['Inter']">
      <div
        className={`
          w-full max-w-2xl p-8 rounded-2xl shadow-2xl 
          bg-white text-[${PrimaryDark}] 
          border border-gray-200
        `}
        role="form"
        aria-labelledby="form-title"
      >
        <div className="flex items-center pb-6 border-b border-gray-100 mb-6">
          <Mail className="w-8 h-8 mr-3" style={{ color: PrimaryBase }} />
          <h1 id="form-title" className="text-3xl font-extrabold" style={{ color: PrimaryDark }}>
            Fale Conosco
          </h1>
        </div>
        
        <p className="mb-8 text-gray-600">
          Envie-nos uma mensagem com sua opinião, sugestões de melhoria ou elogios.
        </p>

        {/* Form Submission */}
        <form onSubmit={onSubmit} className="space-y-4">
          <FormInput
            label="Nome Completo"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            hasError={submissionState.isError && !formData.name.trim()}
          />
          <FormInput
            label="Endereço de Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            hasError={submissionState.isError && !formData.email.trim()}
          />
          <FormInput
            label="Sua Mensagem"
            id="message"
            name="message"
            type="textarea"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            hasError={submissionState.isError && !formData.message.trim()}
          />

          <button
            type="submit"
            disabled={isDisabled}
            style={{ 
              backgroundColor: PrimaryBase, 
              opacity: isDisabled ? 0.6 : 1 
            }}
            className={`
              w-full py-4 px-6 text-white font-bold rounded-lg shadow-xl 
              hover:bg-[${PrimaryLight}] 
              focus:ring-4 focus:ring-[${PrimaryBase}] focus:ring-opacity-50 
              transition duration-300 ease-in-out transform hover:scale-[1.005]
            `}
          >
            {submissionState.isSubmitting ? 'Enviando...' : submissionState.isSucceeded ? 'Enviado!' : 'Enviar Mensagem'}
          </button>

          {/* Seção de Feedback Unificada */}
          <div className="pt-4">
            {renderFeedback()}
          </div>
        </form>
      </div>
    </div>
  );
}