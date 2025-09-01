import * as Yup from "yup";
import { useState } from "react";
import { PATH_AFTER_LOGIN } from "@/config-global";
import {
  Alert,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { paths } from "@/routes/paths";
import { useAuthContext } from "./hooks/use-auth-context";
import { useRouter, useSearchParams } from "@/routes/hooks";
import { useBoolean } from "@/hooks/use-boolean";
import { useForm } from "react-hook-form";

import RHFTextField from "@/components/hook-from/rhf-text-field";
import { RouterLink } from "@/routes/components";
import LodingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify/iconify";
import FormProvider from "@/components/hook-from/form-provider";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginView() {
  const { login } = useAuthContext();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo");

  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    loginId: Yup.string().required("user name required"),
    pinCode: Yup.string().required("password is required"),
  });

  const defaultValues = {
    loginId: "",
    pinCode: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await login?.(data.loginId, data.pinCode);
      router.push(returnTo || PATH_AFTER_LOGIN);
      console.log(data);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === "string" ? error : errorMsg);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 3 }}>
      <Typography variant="subtitle2" fontSize="1rem" fontWeight="bold">
        Sign In
      </Typography>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <RHFTextField
        name="loginId"
        size="small"
        label="User Name"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputProps: { style: { fontSize: 14 } }, // for input text
        }}
      />

      <RHFTextField
        name="pinCode"
        label="Password"
        size="small"
        type={password.value ? "text" : "password"}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
          inputProps: { style: { fontSize: 14 } },
        }}
      />

      <Link
        component={RouterLink}
        href={paths.auth.forgotPassword}
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: "flex-end" }}
      ></Link>

      <LodingButton
        fullWidth
        color="inherit"
        size="small"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3, background: "#04522C", color: "#fff" }}
      >
        Login
      </LodingButton>
    </Stack>
  );

  return (
    <Stack
      sx={{
        border: "0.2 solid ",
        px: 4,
        py: 4,
        background: "#fff",
        boxShadow: "3",
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderHead}

        {renderForm}
      </FormProvider>
    </Stack>
  );
}
