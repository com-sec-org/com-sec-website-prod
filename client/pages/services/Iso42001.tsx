import { ServicePage } from "@/components/service-page/ServicePage";
import { iso42001Page } from "@/data/servicePages/iso42001";

export default function Iso42001() {
  return <ServicePage content={iso42001Page} />;
}
