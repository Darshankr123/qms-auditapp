import { FormProvider as RHFProvider, UseFormReturn } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <RHFProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </RHFProvider>
  );
}
