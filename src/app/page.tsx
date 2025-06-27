import Image from "next/image";
import { Fragment } from "react";

import Headershared from "@/components/shared/header-shared";
import Sidebarshared from "@/components/shared/sidebar-shared";
import Salesoverviewchart from "@/components/sales-overview-chart";
import Yearlybreakup from "@/components/yearly-breakup";
import Monthlyearnings from "@/components/monthly-earnings";
import Recenttransactions from "@/components/recent-transactions";
import Productperformance from "@/components/product-performance";
import Product from "@/components/product";

export default function Home() {
  return (
    <Fragment>
        <Headershared />
        <Sidebarshared />
        <article>
          <Salesoverviewchart />
          <Yearlybreakup />
          <Monthlyearnings />
        </article>
        <article>
          <Recenttransactions />
          <Productperformance />
        </article>
        <Product /> 
    </Fragment>
  );
}
