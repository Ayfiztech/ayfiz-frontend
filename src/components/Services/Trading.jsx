import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import cevalution from "../../assets/images/trading.png";
import ServiceCard from '../Common/ServiceCard';

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};
const slideDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const Trading = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto p-6 pt-24 max-sm:pt-12 lg:px-8">
        <div className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-2 lg:items-center">
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-block px-4 py-5 max-sm:px-1 max-sm:py-2"
              >
                {' '}
                <img src={cevalution} />{' '}
              </motion.div>
            </motion.div>
          </div>{' '}
          <motion.div
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            variants={slideDown}
          >
           <ServiceCard
              label="We Offers ----"
              title="Trading"
              description="We will review your Business Activity and its revenue generation model, conduct identity and credit checks, and assess your business funding needs based on the information you provided to us. We will conduct an affordability check for your business to ensure that your business is able to meet up with our funding cost."
              buttonText="View More"
                onClick={() => navigate("/TradingDetail")}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Trading;
