



import ServicePage from "../../components/ServicePage/ServicePage"
import OurSeo from "../../components/OurSeo/OurSeo"
import Header3 from "@/components/Header3/Header3"
import SMM from "@/components/SMM/SMM"
import PPC from "@/components/PPC/PPC"
import OfflineServices from "@/components/ServicePage/OfflineServices"

export default function PageService() {





return(
<>
<Header3/>
<div className="min-h-screen flex flex-col items-center justify-center ">
<ServicePage />
<SMM />
<PPC/>
<OurSeo />
<section id="offline-services " className="w-full">


<OfflineServices />

</section>

</div>


</>

)






}