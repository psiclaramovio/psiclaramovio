// types/toast.ts
export interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

export type ToastType = Toast["type"];
