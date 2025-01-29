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

const FormComponent = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <section className="container mt-[208px]">
      <div className="rounded-[50px] w-full h-[748px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] relative shadow-2xl">
        <div className="bg-[url('/form_bg.avif')] bg-no-repeat bg-contain absolute inset-0"></div>
        <div className="w-[676px] absolute right-[191px] top-[95px]">
          <h2 className="font-semibold text-white text-[76px]">
            {t("title.conact_with_us")}
          </h2>
          <p className="mt-5 text-[#f2f2f2] text-2xl font-medium">
            {t("title.form_descr")}
          </p>
          <Form {...form}>
            <form className="mt-[45px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("title.name")}
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3]"
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
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3] my-3"
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
                className="w-full rounded-full h-[81px] cursor-pointer text-black bg-white text-2xl font-medium hover:bg-white"
              >
                {t("actions.send")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
