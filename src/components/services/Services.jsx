import "./services.scss";
import {motion} from "framer-motion";

const variants =  {
    initial: {
        x: -500,
        y:100,
        opacity: 0,
    },

    animate:{
        x: 0,
        opacity: 1,
        y: 0,

        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    // const ref = useRef()

    // const isInview = useInView(ref,{margin:"-100px"})

    return (
        <motion.div className="services"
        variants={variants} 
        initial="initial" 
        animate="animate"

        >
        <motion.div className="textContainer">
        <p>I focus on helping your brand grow
        <br/> and move forward</p>
        <hr/>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="./people.webp" alt=""/>
                    <h1> <motion.b whileHover={{color:"orange"}}>Unique </motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1>
                         <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                     </h1>
                     <button>WHAT WE DO ?</button> 
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Personalized AI Solutions</h2>
                    <p>
                    Leverage artificial intelligence to automate tasks, analyze customer behavior, and provide tailored recommendations. AI-powered chatbots,
                    personalized marketing, and predictive analytics can give your business a competitive edge.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Eco-Friendly & Sustainable Products
                    </h2>
                    <p>
                    Introduce environmentally friendly products or services that align with the growing demand for sustainability.
                    Recyclable packaging, energy-efficient solutions, and eco-conscious branding can attract eco-aware consumers.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2> Subscription-Based Services</h2>
                    <p>
                    Offer exclusive memberships or subscriptions that provide customers with special perks, discounts,
                    or premium content. This model ensures recurring revenue and builds long-term customer loyalty.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Hyperlocal Digital Marketing</h2>
                    <p>
                    Use geolocation-based advertising and personalized promotions to target customers in specific neighborhoods. 
                    This strategy is great for small businesses looking to attract nearby customers effectively.
                    </p>
                    <button>Go</button>
                </motion.div>

            </motion.div>
            </motion.div>
    );
};

export default  Services;