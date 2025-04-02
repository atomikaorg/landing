import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzf6uVGF7Ojq2MsLqE-obGoCqahmNR8E72YfLSOXGSTsi3OnhMoyFGy5gbPYppJBd8H/exec";

const FormComponent = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.name_min') || 'Name must be at least 2 characters').max(50),
    phone: z.string().min(2, t('form.errors.phone_min') || 'Phone must be at least 2 characters').max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Create URL-encoded form data
      const formData = new URLSearchParams();
      formData.append('name', data.name);
      formData.append('phone', data.phone);

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'cors', // Change to cors mode
        credentials: 'omit' // Don't send credentials
      });

      // Since we're using CORS, we can check the response
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      toast({
        description: t('form.success'),
        variant: 'default',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        description: t('form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mt-[208px] max-md:mt-[116px]" id="form">
      <div className="rounded-[50px] w-full h-[748px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] relative shadow-2xl">
        <div className="bg-[url('/form_bg.avif')] bg-no-repeat bg-contain absolute inset-0 max-md:bg-none"></div>
        <div className="w-[600px] absolute right-[120px] top-[95px] max-md:static max-md:px-5 max-md:pb-[34px] max-md:pt-[86px] max-md:w-full">
          <h2 className="font-semibold text-white text-[68px] max-md:text-[48px] max-md:max-w-[260px] max-md:break-words max-md:whitespace-break-spaces max-md:leading-10">
            {t("title.conact_with_us")}
          </h2>
          <p className="mt-5 text-[#f2f2f2] text-2xl font-medium max-md:text-base max-md:break-words max-md:whitespace-break-spaces">
            {t("title.form_descr")}
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-[45px] max-md:max-w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("title.name")}
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3] max-md:w-full placeholder:text-white outline-none focus-visible:ring-transparent ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3] my-3 max-md:w-full placeholder:text-white outline-none focus-visible:ring-transparent ring-offset-0"
                        placeholder={t("title.phone")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full h-[81px] cursor-pointer text-black bg-white text-2xl font-medium hover:bg-white max-w-full disabled:opacity-50"
              >
                {isSubmitting ? (t("actions.sending") || "Sending...") : (t("actions.send"))}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
