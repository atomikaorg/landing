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
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  // Return just the last 9 digits
  return digits.slice(-9);
};

const formatDisplayPhoneNumber = (value: string, isDeleting = false) => {
  // Clean up any duplicate +998 or +99
  value = value.replace(/^\+998\+99/, '+998').replace(/^\+99\+99/, '+99');
  
  // Always ensure we start with +998
  if (!value.startsWith('+998')) {
    value = '+998' + value.replace(/^\+99/, '');
  }

  // If it's just the prefix, return it
  if (value === '+998') {
    return value;
  }

  // Get all digits after +998
  let remainingValue = value.slice(4);
  
  // If deleting, just return the current value with cleanup
  if (isDeleting) {
    // If we're trying to delete part of +998, prevent it
    if (value.length <= 4) {
      return '+998';
    }
    // Clean up any formatting artifacts during deletion
    return value.replace(/\(\)|-+/g, '');
  }

  // For new input, format the number
  // Remove all non-digit characters
  const digits = remainingValue.replace(/\D/g, '').slice(0, 9);

  // Format the number for display
  if (digits.length > 0) {
    let formatted = '+998';
    
    if (digits.length >= 1) {
      formatted += '(' + digits.slice(0, 2);
    }
    
    if (digits.length >= 2) {
      formatted += ')';
    }
    
    if (digits.length > 2) {
      formatted += digits.slice(2, 5);
    }
    
    if (digits.length > 5) {
      formatted += '-' + digits.slice(5, 7);
    }
    
    if (digits.length > 7) {
      formatted += '-' + digits.slice(7, 9);
    }
    
    return formatted;
  }
  
  return '+998';
};

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbx5uYVwea_K8zBMbGhva3sjanoyOegAI1fHxip4dViUBIkAgpk_RZrxWAkxJ8HKyeTk/exec";

const FormComponent = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [previousPhone, setPreviousPhone] = useState('+998');
  
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_referrer: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_referrer: document.referrer || "",
    });
  }, []);

  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.name_min') || 'Name must be at least 2 characters').max(50),
    phone: z.string()
      .refine((val) => {
        // Remove the +998 prefix first, then count digits
        const digitsAfterPrefix = val.replace(/^\+998/, '').replace(/\D/g, '');
        return digitsAfterPrefix.length === 9;
      }, t('form.errors.phone_length') || 'Phone number must be 9 digits')
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "+998",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Format the phone number
      const formattedPhone = formatPhoneNumber(data.phone);
      
      // Create URL-encoded form data
      const formData = new URLSearchParams();
      formData.append('name', data.name);
      formData.append('phone', formattedPhone);
      formData.append("utm_source", utmParams.utm_source);
      formData.append("utm_medium", utmParams.utm_medium);
      formData.append("utm_campaign", utmParams.utm_campaign);
      formData.append("utm_content", utmParams.utm_content);
      formData.append("utm_referrer", utmParams.utm_referrer);
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

      // Reset form with default phone value
      form.reset({
        name: "",
        phone: "+998"
      });
      
      // Reset previous phone state
      setPreviousPhone("+998");

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
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3] max-md:w-full placeholder:text-white outline-none focus-visible:ring-transparent ring-offset-0 relative z-10"
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
                        className="text-white !text-2xl font-medium p-10 rounded-full bg-transparent border border-[#f3f3f3] my-3 max-md:w-full placeholder:text-white outline-none focus-visible:ring-transparent ring-offset-0 relative z-10"
                        placeholder={t("title.phone")}
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const isDeleting = e.target.value.length < field.value.length;
                          const formattedValue = formatDisplayPhoneNumber(e.target.value, isDeleting);
                          field.onChange(formattedValue);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full h-[81px] cursor-pointer text-black bg-white text-2xl font-medium hover:bg-white max-w-full disabled:opacity-50 relative z-10"
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
