
import { Elements } from "@stripe/react-stripe-js";
import ErrorPage from "./../../ErrorPage/ErrorPage";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
// import Skeleton from "react-loading-skeleton";
// import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Component/hooks/useAxiosPublic";

const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const Payment = () => {

  const axiosPublic = useAxiosPublic();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const campId = id?.split(",")[0];
  const registerId = id?.split(",")[1];
  console.log(campId, registerId);
  const campsDetailsFn = async () => {
  const res = await axiosPublic.get(`/addCamp/${campId}`);
     return res.data;
  };

  const {
    data: addCamp = [],
    isLoading,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["fee", id],
    queryFn: campsDetailsFn,
  });  
 
  console.log(addCamp);
  console.log(campsDetailsFn);
  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  if (isLoading || isPending) {
    // return <Skeleton count={10} />;
    return;
  }

  return (
    <div>
      {/* <Helmet>
        <title>MCH | CampsDetails</title>
      </Helmet> */}
      <div className="mx-auto p-5 text-center md:w-4/12 my-8 md:mt-10 mb-14">
        <h3 className="uppercase text-4xl border-y-4 py-4">Payment Here</h3>
      </div>
      <div className="md:w-4/5 w-11/12 lg:w-3/4 mx-auto border-2 p-2">
        <div className="mb-5 font-semibold">
          <span className="text-lg font-normal ">Amount:</span> $
          {addCamp?.fees}
        </div>
        <Elements stripe={stripePromise}>
          
        </Elements>
      </div>
    </div>
  );
};

export default Payment;