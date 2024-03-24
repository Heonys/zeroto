"use client";
import Image from "next/image";
import { SpaceImage } from "@/asset/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./style.css";

const MotionTest = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const handleScroll = () => {};

  return (
    <div className="text-white h-full" onScroll={handleScroll} ref={ref}>
      <motion.div
        className="sticky h-2 bg-red-500 top-10 left-0"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores
        maxime cum ullam iste assumenda officiis numquam sint tenetur illum
        harum beatae aut dignissimos suscipit, eaque eos sed quaerat earum eius
        recusandae blanditiis laboriosam deserunt maxime labore cupiditate ullam
        consectetur! Consequatur quibusdam impedit ratione quasi necessitatibus
        ex quod veritatis, ipsum magni nemo suscipit ea voluptates libero porro
        sit sapiente dolorem natus unde fugiat laboriosam! Enim consectetur
        porro reiciendis blanditiis voluptatem. Omnis atque, tenetur autem,
        maxime molestiae soluta dolores itaque dignissimos nostrum aperiam
        officiis incidunt repellat voluptatibus ratione repudiandae! Iusto quasi
        modi quibusdam, saepe ipsum quia, obcaecati nostrum accusantium ipsa sed
        error sint quaerat molestias cumque sunt nihil laborum est consequuntur
        illo suscipit soluta nulla? Sed temporibus asperiores optio labore
        reiciendis unde architecto suscipit delectus odit voluptatem. Repellat
        laudantium unde, exercitationem ipsam libero deleniti saepe quisquam!
        Eius, ex animi! Nemo minima nihil quisquam ratione reprehenderit vitae
        cumque incidunt perspiciatis suscipit omnis quasi, velit facilis sunt
        magnam facere eaque nulla quidem expedita dignissimos possimus?
        Consequatur accusantium inventore, porro commodi adipisci maiores dolor
        nisi tempore at cum cumque minima magni necessitatibus consequuntur iure
        magnam praesentium ratione esse fugiat. Facilis, consectetur recusandae
        suscipit illo eos laboriosam impedit architecto libero dolorum quisquam!
        Autem, iusto cupiditate praesentium voluptas non, in officiis ut
        temporibus quod perspiciatis nisi natus sed accusamus corporis unde
        impedit optio eum ad delectus dolores aliquam officia! Impedit quo
        reprehenderit possimus doloribus. Similique rerum pariatur illo cumque
        fuga at ipsam dicta quia consectetur veniam officiis tenetur, harum
        beatae exercitationem dignissimos modi perferendis. Hic repellendus
        accusantium, officia voluptatibus rem consectetur enim et maxime
        temporibus veniam unde, explicabo corporis assumenda iste ea adipisci
        sapiente iure ad quo consequuntur ab cupiditate eius sequi? Fugit
        corporis, ducimus repellat libero quia dolorum molestiae distinctio
        odio. Asperiores enim laboriosam eum quibusdam veritatis? Omnis
        molestias voluptatem aut maxime, sequi aperiam, delectus dolorem
        consectetur magnam est amet officiis corporis veniam iusto vitae alias
        animi sapiente voluptas, at voluptatibus vero modi mollitia soluta! Est,
        dolore voluptas. Assumenda similique sed corrupti facere! Magni incidunt
        laborum deleniti eum! Sunt repudiandae molestiae pariatur, similique
        atque consequuntur reprehenderit qui natus officiis, perspiciatis magni
        commodi impedit, unde aliquam placeat excepturi veritatis nulla
        laboriosam id sed illo voluptas? Qui facere animi mollitia pariatur a
        voluptatem at, nam vel maxime alias modi sapiente quis officiis illum
        repudiandae quidem incidunt dicta eos. Beatae ab officia perspiciatis
        qui ea illo architecto dolorum temporibus quae eum est error voluptas
        enim iure expedita nesciunt eos doloribus inventore, ullam neque impedit
        suscipit iste. Quae, recusandae, nostrum sapiente ut consequatur, nulla
        optio ducimus quisquam commodi laboriosam est quo aspernatur distinctio!
        Ullam autem cupiditate, temporibus sit, ipsa corporis accusamus
        blanditiis repudiandae accusantium libero dolores praesentium excepturi
        nesciunt suscipit eos amet, asperiores ad delectus cum facere explicabo
        placeat. Consequatur voluptatum excepturi consectetur veritatis optio
        unde maxime rerum vitae maiores, non, cumque ab alias quam.
        Exercitationem odio, voluptate neque totam non laborum. Qui quia
        excepturi vel libero sit necessitatibus autem molestiae, rerum suscipit
        id velit! Perspiciatis maxime soluta sapiente. Id quidem nesciunt a
        dolorum sit vero recusandae. Autem enim necessitatibus nam ipsum aut
        ipsam laborum dolorum. Et fuga accusantium debitis accusamus excepturi
        possimus laudantium, praesentium a! Iste unde libero tempore aperiam
        expedita, corporis facilis excepturi quos, ullam magni odit consequuntur
        modi animi, quam esse illo! Itaque accusamus corrupti id aliquid.
        Recusandae corporis, sed voluptates ullam itaque omnis dignissimos
        voluptas assumenda, tempore cum impedit voluptatem possimus blanditiis
        facilis provident optio consequatur, quisquam enim reiciendis fugiat
        facere sunt repellendus accusantium. Mollitia id praesentium quia
        repellat quis provident, dolorem deleniti temporibus reprehenderit natus
        iste aliquid, animi doloribus quam aut pariatur nihil consequuntur! Id
        veniam quod aut autem quasi labore tempora hic eveniet iusto ducimus,
        illum possimus laborum ipsum pariatur praesentium nam. Accusamus dolore
        quos ad beatae delectus voluptate consequuntur? Dolorem nesciunt fugiat,
        quidem molestiae error repellendus laboriosam tempora possimus soluta
        officiis, blanditiis delectus voluptatem nihil! Sit ad tenetur autem,
        possimus est nostrum voluptatum, vel perferendis numquam ab sed
        corporis, maiores error molestias illo nisi magnam reiciendis animi!
        Harum explicabo, nostrum totam magni, dolores nulla laudantium velit
        esse similique, eos error! Architecto et tempore, molestiae nobis optio
        veritatis! Totam quibusdam iusto repellendus quo laborum. Tempore soluta
        perspiciatis explicabo possimus culpa, dignissimos consequatur error,
        porro labore earum aliquam. Doloribus, eligendi atque officia rerum
        excepturi dicta. Animi ducimus quibusdam ex quasi! Dicta veritatis quis
        id iste animi quos, vel nesciunt quod voluptas minima obcaecati impedit
        officia aliquam rem aperiam cumque maiores! Atque voluptate, voluptatem
        perferendis tenetur natus pariatur saepe perspiciatis hic sed quidem
        eaque, magnam iure.
      </article>
    </div>
  );
};

export default MotionTest;

{
  /* <Image src={SpaceImage} alt="space" className="w-[57vw]" /> */
}
