<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import { object, string } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().optional(),
      email: string()
        .min(1, "required")
        .email({ message: "Invalid email address" }),
      password: string().min(1, "required"),
    })
  ),
});

const { value: email } = useField("email");
const { value: name } = useField("name");
const { value: password } = useField("password");

// Submit handler
const onSubmit = handleSubmit((values) => {
  // // No errors, because email is required!
  // values.email.endsWith("@gmail.com");
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit="onSubmit">
    <input name="name" v-model="name" placeholder="Name" />
    <p>{{ errors.name }}</p>
    <input name="email" v-model="email" placeholder="Email" type="email" />
    <p>{{ errors.email }}</p>
    <input
      name="password"
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <p>{{ errors.password }}</p>

    <button>Submit</button>
  </form>
</template>
