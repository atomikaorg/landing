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
  // Remove all non-digit characters and any existing +998 prefix
  const digits = phone.replace(/\D/g, '').replace(/^998/, '');
  
  // Take only the last 9 digits if there are more
  const last9Digits = digits.slice(-9);
  
  // Pad with zeros if less than 9 digits
  const paddedDigits = last9Digits.padStart(9, '0');
  
  // Return just the digits for Google Sheets
  return `998${paddedDigits}`;
};

const formatDisplayPhoneNumber = (value: string, previousValue: string) => {
  // Remove all non-digit characters first
  let digits = value.replace(/\D/g, '');
  const prevDigits = previousValue.replace(/\D/g, '').replace(/^998/, '');
  
  // If backspacing, remove last digit
  if (value.length < previousValue.length && prevDigits.length > 0) {
    digits = prevDigits.slice(0, -1);
  } else {
    // Remove 998 from the beginning if it exists
    digits = digits.replace(/^998/, '');
    
    // Take only the last 9 digits if there are more
    digits = digits.slice(-9);
  }

  // Format the number as user types
  if (digits.length > 0) {
    // Always start with +998
    let formatted = '+998';
    
    // Add opening parenthesis for operator code
    if (digits.length >= 1) {
      formatted += '(';
      formatted += digits.slice(0, 2);
    }
    
    // Add closing parenthesis after operator code
    if (digits.length >= 2) {
      formatted += ')';
    }
    
    // Add the next 3 digits
    if (digits.length > 2) {
      formatted += digits.slice(2, 5);
    }
    
    // Add first hyphen and next 2 digits
    if (digits.length > 5) {
      formatted += '-' + digits.slice(5, 7);
    }
    
    // Add second hyphen and last 2 digits
    if (digits.length > 7) {
      formatted += '-' + digits.slice(7, 9);
    }
    
    return formatted;
  }
  
  return '+998';
};

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxx8lynrSRxiqPxmdl4gMwtQKXjNjNSa_-bpfc009mHwwuGJ2cRWMohmS1sAZOBdsTh/exec";

const FormComponent = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [previousPhone, setPreviousPhone] = useState('+998');
  
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.name_min') || 'Name must be at least 2 characters').max(50),
    phone: z.string()
      .refine((val) => {
        const digits = val.replace(/\D/g, '').replace(/^998/, '');
        return digits.length >= 2;
      }, t('form.errors.operator_required') || 'Operator code (93) is required')
      .refine((val) => {
        const digits = val.replace(/\D/g, '').replace(/^998/, '');
        return digits.length === 9;
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
                        value={formatDisplayPhoneNumber(field.value, previousPhone)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPreviousPhone(field.value);
                          const formattedValue = formatDisplayPhoneNumber(value, field.value);
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
