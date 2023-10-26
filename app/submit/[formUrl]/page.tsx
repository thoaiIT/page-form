import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/FormElement";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

const SubmitPage = async ({ params }: { params: { formUrl: string } }) => {
  const { formUrl } = params;
  const form = await GetFormContentByUrl(formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];
  return <FormSubmitComponent formUrl={formUrl} content={formContent} />;
};

export default SubmitPage;
