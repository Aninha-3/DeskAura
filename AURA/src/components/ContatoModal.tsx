import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { X, Mail } from 'lucide-react';

// Paleta de Cores
const PrimaryDark = '#042B00';
const PrimaryBase = '#2E8B57';
const PrimaryLight = '#58A975';
const BackgroundModal = '#FFFFFF';

// Tipagem do formulário
interface FormData {
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

interface FormInputProps {
  label: string;
  id: keyof Omit<FormData, 'sendCopy'>;
  type?: 'text' | 'email' | 'textarea';
  rows?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, type = 'text', rows, value, onChange }) => {
  const isTextarea = type === 'textarea';

  const inputClasses = `
    w-full p-3 border-2 rounded-lg 
    bg-white text-[${PrimaryDark}] 
    placeholder-transparent focus:outline-none 
    focus:border-[${PrimaryBase}] focus:ring-0 
    transition duration-300 
    peer
  `;

  const labelClasses = `
    absolute top-0 left-3 
    text-sm text-gray-500 
    transform 
    bg-white px-1 transition-all duration-300
    pointer-events-none
    -translate-y-1/2 scale-75 
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/4
    peer-focus:text-[${PrimaryBase}] peer-focus:scale-75 peer-focus:-translate-y-1/2
  `;

  return (
    <div className="relative mb-6 pt-4">
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`${inputClasses} min-h-[100px]`}
          placeholder=" "
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className={inputClasses}
          placeholder=" "
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
        />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    sendCopy: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { id, value } = target;

    setFormData(prev => ({
      ...prev,
      [id]: target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulário Enviado:', formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`
          relative w-11/12 max-w-lg p-6 rounded-2xl shadow-2xl 
          bg-[${BackgroundModal}] text-[${PrimaryDark}] 
          transform transition-all duration-300 ease-out 
          scale-100 opacity-100 
          border-4 border-[${PrimaryDark}]
        `}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-300 mb-4">
          <h2 id="modal-title" className={`text-2xl font-semibold text-[${PrimaryDark}] flex items-center`}>
            <Mail className="w-6 h-6 mr-2" />
            Escreva para nós
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors 
                        hover:bg-[${PrimaryBase}] hover:text-white 
                        text-[${PrimaryDark}]`}
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <FormInput
            label="Nome"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Endereço de Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Sua mensagem"
            id="message"
            type="textarea"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex items-center justify-center mb-6">
            <input
              type="checkbox"
              id="sendCopy"
              checked={formData.sendCopy}
              onChange={handleChange}
              className="w-4 h-4 rounded cursor-pointer"
              style={{ accentColor: PrimaryBase }}
            />
            <label htmlFor="sendCopy" className={`ml-2 text-sm text-[${PrimaryDark}] select-none`}>
              Enviar uma cópia desta mensagem para mim
            </label>
          </div>

          <button
            type="submit"
            className={`
              w-full py-3 px-6 text-white font-bold rounded-lg shadow-xl 
              bg-[${PrimaryBase}] 
              hover:bg-[${PrimaryLight}] 
              focus:ring-4 focus:ring-[${PrimaryBase}] focus:ring-opacity-50 
              transition duration-300 ease-in-out transform hover:scale-[1.01]
            `}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
