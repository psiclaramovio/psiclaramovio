// components/CNPJConsulta.tsx
import React from "react";
import { useToast } from "@/hooks/useToast";
import ToastContainer from "./ToastContainer";

interface CNPJConsultaProps {
  cnpj?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const CNPJConsulta: React.FC<CNPJConsultaProps> = ({
  cnpj = "59.396.344/0001-04",
}) => {
  const { toasts, addToast, removeToast } = useToast();

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      addToast("CNPJ copiado! Cole no campo de consulta.", "success");
    } catch (err) {
      console.error("Erro ao copiar:", err);
      addToast("Erro ao copiar CNPJ. Tente novamente.", "error");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    copyToClipboard(cnpj);

    setTimeout(() => {
      window.open(
        "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp",
        "_blank",
        "noopener,noreferrer"
      );
    }, 1000);
  };

  return (
    <>
      <a
        href="#"
        onClick={handleClick}
        className={
          "flex justify-center items-center gap-2 hover:text-white text-sm"
        }
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick(e as any);
          }
        }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Consultar CNPJ: {cnpj}
      </a>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
};

export default CNPJConsulta;
