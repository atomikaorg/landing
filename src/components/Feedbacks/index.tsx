import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Feedbacks = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px] max-md:mt-[116px]">
      <h2 className="text-center font-semibold text-[76px] max-md:text-[38px]">
        {t("title.students_feedbacks")}
      </h2>
      <div className="mt-20 bg-white px-[60px] py-[50px] rounded-[50px] shadow-xl max-md:mt-[35px] max-md:px-4 max-md:py-8">
        <Tabs defaultValue="account" className="flex">
          <TabsList className="bg-transparent h-auto flex-col gap-y-[22px] max-md:gap-x-3 max-md:flex-row">
            <TabsTrigger
              value="first"
              className="size-[123px] max-md:size-[74px] bg-gray-text rounded-full data-[state=active]:bg-gray-text data-[state=active]:border-4 data-[state=active]:border-purple-main"
            ></TabsTrigger>
            <TabsTrigger
              value="second"
              className="size-[123px] max-md:size-[74px] bg-gray-text rounded-full data-[state=active]:bg-gray-text data-[state=active]:border-4 data-[state=active]:border-purple-main"
            ></TabsTrigger>
            <TabsTrigger
              value="third"
              className="size-[123px] max-md:size-[74px] bg-gray-text rounded-full data-[state=active]:bg-gray-text data-[state=active]:border-4 data-[state=active]:border-purple-main"
            ></TabsTrigger>
            <TabsTrigger
              value="fourth"
              className="size-[123px] max-md:size-[74px] bg-gray-text rounded-full data-[state=active]:bg-gray-text data-[state=active]:border-4 data-[state=active]:border-purple-main"
            ></TabsTrigger>
          </TabsList>
          <TabsContent value="first">content 1</TabsContent>
          <TabsContent value="second">content 2</TabsContent>
          <TabsContent value="third">content 3</TabsContent>
          <TabsContent value="fourth">content 4</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Feedbacks;
