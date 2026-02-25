import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LApplication from "../../assets/images/Offers.png";
import ServiceCard from "../Common/ServiceCard";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Branding = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto mt-16 p-2 pt-16 max-sm:mt-2 max-sm:pt-4 lg:px-4">
        <div className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-2 lg:items-center">
          {" "}
          <motion.div
            className="max-sm:order-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
          >
            <ServiceCard
              label="Offers - 1"
              title="Branding"
              description="We will review your Business Activity and its revenue generation model, conduct identity and credit checks, and assess your business funding needs based on the information you provided to us. We will conduct an affordability check for your business to ensure that your business is able to meet up with our funding cost."
              buttonText="View More"
             onClick={() => navigate("/BrandDetail")}
            />
          </motion.div>
          <div aria-hidden="true" className="mt-10 max-sm:order-1 lg:mt-0">
            <motion.div
              aria-hidden="true"
              className="mt-10 max-sm:order-1 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-block px-4 py-5 max-sm:px-1 max-sm:py-2"
              >
                <img src={LApplication} />{" "}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
